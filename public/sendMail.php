<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = ''
$mail->Password = ''
$mail->SMTPSecure = ''
$mail->Port = 
$mail->setForm('')
$mail->addAddress('')
$mail->Subject = 'Хочу записаться на приём'

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong>'.$_POST['name']
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong>'.$_POST['phone']
}

$mail->Body = $body;
$mail->send();
echo 'Message has been sent';
