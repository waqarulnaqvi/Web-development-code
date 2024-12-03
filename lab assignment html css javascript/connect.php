<?php
$host='localhost:3308';
$user='';
$pass="";
$conn=mysql_connect($host,$user,$pass);
if(!$conn)
{
    die("Could not connect to mysql".mysql_error());
}
echo"connection established successfully";
mysql_close($conn);
?>