<?php
 $connection=mysqli_connect('localhost','root');
 if($connection){
    echo "connection was establish";
 }
 else{
    echo"connection was not estbalish";
 }
// connecting database

mysqli_select_db($connection,'authentication');   

// taking using post method 
$firstname=$_POST['first_name'];

$lastname=$_POST['last_name'];

$email=$_POST['email'];

$password=$_POST['password'];

$data="INSERT INTO credentials(fname,lname,email,password) VALUES('$firstname','$lastname','$email','$password') ";

// now we forward query 
mysqli_query($connection,$data);
header('location:signup.html');




?>