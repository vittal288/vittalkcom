<?php

//require ('db.php');
/*$to="vittal288@gmail.com";
$name=$_POST['name'];
$frm=$_POST['email'];
$sub=$_POST['subject'];
$msg=$_POST['subject1'];
$from=$name." ".$frm;*/

$to="vittal288@gmail.com";
$name=@$_REQUEST["name"];
$frm=@$_REQUEST['email'];
$sub=@$_REQUEST['subject'];
$msg=@$_REQUEST['subject1'];
$from=$name." ".$frm;

echo $name;

$headers ='MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8850-1'."\r\n";
$headers .= 'To: '.$to. "\r\n";
$headers .= 'From: '.$from."\r\n";


echo $to.$sub.$msg;
if(mail($to,$sub,$msg,$headers))
{
    echo "DONE";
    //echo '<script type="text/javascript">alert("Mail Sent Successfully");location="index.html";</script>';
    return "DONE";
}
else
{
	//echo '<script>alert("Sending Mail Failed");
    //location="contact.html";</script>';
     echo "ERROR";
     return "Error";
}	
?>