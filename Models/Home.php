<?php

include('info.php');

$dbh = new PDO('mysql:host='. $host .';dbname='. $dbname, $user, $pass); 
