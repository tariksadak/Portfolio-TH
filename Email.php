<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$to = "yopopopo111@gmail.com";
$subject = "Demande de contact";
$body = "*ne pas repondre a ce message* \n\n $name \n\n $email \n\n $text";

mail($to,$subject,$body);

echo "worked";