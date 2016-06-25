<?php

$recepient = "pashakiz@gmail.com";
$sitename = "Zem-Krym.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$ip = "доделать определение айпи";

$EOL = "\r\n";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \r\nТелефон: $phone \r\nIP: $ip";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\r\n From: $name <no-reply@zem-krym.ru>");