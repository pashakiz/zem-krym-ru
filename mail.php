<?php

$recepient = "bo@zem-krym.ru";
$sitename = "Zem-Krym.ru";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$form = trim($_POST["form"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$question = "";
$question = trim($_POST["question"]);
$ip = $_SERVER["REMOTE_ADDR"];

if ( $question == "" ) {
	$message = "Имя: $name \r\nТелефон: $phone \r\nФорма: $form \r\nIP: $ip";
} else {
	$message = "Вопрос: $question \r\nТелефон: $phone \r\nФорма: $form \r\nIP: $ip";
}

$headers =	'MIME-Version: 1.0. '."\r\n" .
			'Content-type: text/plain; charset=utf-8'. "\r\n" .
			'From: '.$name.' <no-reply@zem-krym.ru>' . "\r\n" .
			'Reply-To: no-reply@zem-krym.ru' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();

mail($recepient, $pagetitle, $message, $headers);

?>