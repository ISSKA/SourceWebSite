<?php

// This script send an email with the message of the contact form

// header('Content-type: application/json');

// check params
if(!isset($_POST['email']) || !isset($_POST['name']) || !isset($_POST['content'])) {
    echo('params_error');
    return;
}

// check anti-spam param
if (!isset($_POST['check']) || $_POST['check'] !== '') {
    echo('check_error');
    return;
}

$to_email = 'info@isska.ch';
$subject = 'Contact from randosources.ch';

$message = '<p>' . nl2br($_POST['content']) . '</p>';

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: ' . $_POST['name'] .' <' . $_POST['email'] . '>';

$ret = mail($to_email, $subject, $message, implode("\r\n", $headers));

if ($ret) {
    echo('ok');
} else {
    echo('sent_error');
}

?>