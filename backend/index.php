<?php
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$_SERVER['REQUEST_URI'];
$urlParts   = explode('/', $_SERVER['REQUEST_URI']);

$requestMethod	= $_SERVER['REQUEST_METHOD'];
$call		= $urlParts[2];	    //stelle des Calls anpassen!!!111elf
$headerArr	= getallheaders();
$rawPostData	= file_get_contents("php://input");

if (
	!in_array($call, array('users','flag','login')) ||
	!in_array($requestMethod, array('GET', 'POST', 'OPTIONS'))
    ) {
    http_response_code(403);
} else {
    if (in_array($requestMethod, array('OPTIONS'))) {
	http_response_code(200);
    } else if (in_array($call, array('users'))) {
	if (!in_array($requestMethod, array('GET'))) {
	    http_response_code(403);
	} else {
	    echo '[{"id": 1,"name": "Alex","lastName": "Buns","login": "alex","email": "alex@gmail.com","role": "ROLE_ADMIN","password": "010010010101010001010110010010110101100101101001010100100111011101011001010101000011100101110100011001010101011001110000011001100101101000110011011011110011000001010001010000010011110100111101"}, {"id": 2,"name": "Thomas","lastName": "Cook","login": "thomas","email": "thomas.c@yahoo.com","role": "ROLE_USER","password": "010101000100001101101111001101000110001101000011011100000101101001100001011010110110111100110000010101010100010101010110010011100110000101000101001101000111000101100011010100010011110100111101"}, {"id": 3,"name": "Simon","lastName": "Lange","login": "simon","email": "s.lange@gmx.de","role": "ROLE_OFFICER","password": "011000010011001101101111001100000100100101111001001100010101100001001010010000110111001100111001010010010101011001100100011100010110010000110000011001000110100001100101010100010011110100111101"}]';
	}
    } else if (in_array($call, array('flag'))) {
	if (!isset($headerArr['Authorization']) || $headerArr['Authorization'] != '3asd6-bsdf52-m3p9-as7ke5' || !in_array($requestMethod, array('GET'))) {
	    http_response_code(403);
	} else {
	    echo '{"flag": "LCDj#6&9J+C9TNR2"}';
	}
    } else if (in_array($call, array('login'))) {
	$postArray  = json_decode($rawPostData, true);
	if ($postArray === false || is_null($postArray) || !in_array($requestMethod, array('POST')) || json_encode($postArray) != json_encode(json_decode('{"user":"alex","password":"!5Jb$pa?myZ_gz4@"}'))) {
	    http_response_code(403);
	} else {
	    echo '{"id": 1,"name": "Alex","lastName": "Buns","email": "alex@gmail.com","role": "ROLE_ADMIN","authorization-token": "3asd6-bsdf52-m3p9-as7ke5"}';
	}
    } else {
	http_response_code(404);
    }
}