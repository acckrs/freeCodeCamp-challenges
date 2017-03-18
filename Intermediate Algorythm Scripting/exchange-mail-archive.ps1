############################################################################################################                                                                                                                                                                                    
# 
# Name: Exchange mail archive                                                                                                        
# Author: Zlatko Markovic
# Purpose: Archive mails for particular year
# Date: 26/02/2017
# Version: 3.0                                                                              
#                                                                                                           
############################################################################################################

# Script

Add-PSSnapin Microsoft.Exchange.Management.PowerShell.Admin

$users_in = ""
while($users_in -eq "") {$users_in = read-host "Plase enter mailbox aliases in format xxxxx,xxxxx (if more then one)"}
$users=$users_in.split(',')

$years_in = ""
while($years_in -eq "") {$years_in = read-host "Plase enter archive years in format yyyy,yyyy (if more then one year)"}
$years=$years_in.split(',')

$mailto= "it@gcb.rs"
$mailfrom= "it-alert@grandcasinobeograd.com"
$mailserver= "s-cs-mx07"

foreach ($user in $users)

{

$pstfpath = "\\s-cs-fp01\MailArchive$\$user\"

$MailboxQuery = Get-Mailbox -identity $user
$User_DN = $MailboxQuery.DisplayName
$User_Mail = $MailboxQuery.windowsEmailaddress

$time_start = Get-Date -format g

#Add mailbox permission and check if mailbox exists

try {

    Add-MailboxPermission -Identity $user -User 'GRANDCASINO\backupadmin' -AccessRights 'FullAccess'

    if (!$?)
    {
    
    throw $error[0].exception
    
    }

    }
    catch
    {

    $ErrorMessage = $_.Exception.Message
    $FailedItem = $_.Exception.ItemName
    Send-MailMessage -to $mailto -from $mailfrom -subject "MailExchangeSystem: Mail Archive for mailbox: $user - ERROR " -body "ERROR archiving mailbox: $user because mailbox does not exists.
Errormessage: $ErrorMessage
FaildItem: $FaildItem" -SmtpServer $mailserver

    continue

    }

#Check if MailArchive folder for user exists

if (!(Test-Path $pstfpath))
    {

    New-Item -ItemType directory -Path $pstfpath
      
    $acl_get = Get-Acl $pstfpath
    $acl_class = New-Object System.Security.AccessControl.FileSystemAccessRule("$user","Modify","ContainerInherit,ObjectInherit", "None", "Allow")
    $acl_get.SetAccessRule($acl_class)

    Set-Acl $pstfpath $acl_get

    }

#start of archiving

foreach ($year in $years)

{

$startdate = "01/01/$year"
$enddate = "12/31/$year"
$pstfilename = "$user$year.pst"
$a_time_start = Get-Date -format g


    if (Test-Path $pstfpath$pstfilename)

    {

    Send-MailMessage -to $mailto -from $mailfrom -subject "MailExchangeSystem: Mail Archive for mailbox: $user Archive Year: $year - ERROR " -body "ERROR archiving: $pstfpath$pstfilename because arhive already exists." -SmtpServer $mailserver

    }
    else
    {

        try 
        {

        Export-Mailbox -Identity $user -PSTFolderPath $pstfpath$pstfilename -StartDate $startdate -EndDate $enddate -ExcludeFolders '\Contacts','\Calendar' -DeleteContent -Confirm:$false

        $exportsize_get = (Get-ChildItem $pstfpath -filter $pstfilename | Measure-Object -Property length -Sum)
        $exportsize = "{0:N2}" -f ($exportsize_get.sum / 1MB) + " MB"
        $a_time_end = Get-Date -format g
        $a_time_duration= New-TimeSpan -Start $a_time_start -End $a_time_end

        Send-MailMessage -to $mailto -from $mailfrom -subject "MailExchangeSystem: Mail Archive for mailbox: $user Archive Year: $year " -body "Mail archive for mailbox $user is finished.

Summary: 

Archive year: $year
Archive start date:$startdate
Archive end date: $enddate
Archive name: $pstfilename
Archive size: $exportsize
Archive destination: $pstfpath

Archiving start: $a_time_start
Archiving end: $a_time_end
Archiving duration: $a_time_duration  
" -SmtpServer $mailserver
         
         }
         catch
         {
         $ErrorMessage = $_.Exception.Message
         $FailedItem = $_.Exception.ItemName
         Send-MailMessage -to $mailto -from $mailfrom -subject "MailExchangeSystem: Mail Archive for mailbox: $user Archive Year: $year - SYNTAX ERROR " -body "ERROR archiving mailbox: $user because syntax is invalid.
Errormessage: $ErrorMessage
FaildItem: $FaildItem" -SmtpServer $mailserver

         }


    }
}

#remove mailbox permission

Remove-MailboxPermission -Identity $user -User 'GRANDCASINO\backupadmin' -InheritanceType 'All' -AccessRights 'FullAccess' -Confirm:$false

#email to user

Send-MailMessage -to $User_Mail -from $mailfrom -subject "MailExchangeSystem: Mail Archive for mailbox: $user" -body "Dear $User_DN,

This is notification that Emails from your mailbox are archived for following years: $years_in

All archives will be automatically imported to your company Outlook profile.
Please do not replay to this Email.

IT Deparment


Postovani/a $User_DN,

Ovo je obavestenje da su Email-ovi iz Vaseg mailbox-a arhivirani za sledece godine: $years_in

Sve arhive ce automatski biti dodate na Vas kompanijski Outlook profil.
Molimo Vas da ne odgovarate na ovaj Email.

IT odeljenje
" -SmtpServer $mailserver

}

# End