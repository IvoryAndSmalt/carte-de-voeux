<?php

include('info.php');

$dbh = new PDO('mysql:host='. $host .';dbname='. $dbname, $user, $pass); 

function getAllTemplates(){
        global $dbh;
    
        $get_templates = $dbh->prepare('SELECT * FROM templates');
        $get_templates->execute();
        return $get_templates->fetchAll();
}

function getOneTemplate($id_template){
    global $dbh;

    $get_one_template = $dbh->prepare('SELECT url, id_template FROM templates WHERE id_template=?;');
    $get_one_template->execute([$id_template]);

    return $get_one_template->fetchAll();
}

function addTemplate($nom, $url){
    global $dbh;
    
    $add_template = $dbh->prepare('INSERT INTO templates(nom, url) VALUES (?,?);');
    $add_template->execute([$nom, $url]);
}

function getLastMeme(){
    global $dbh;

    $last_id = $dbh->query('SELECT MAX(id_meme) as mymax FROM memes;');
    $last = $last_id->fetchAll();
    foreach($last as $value){
        $max = $value['mymax'];
    }

    $last = $dbh->prepare("SELECT url, id_meme FROM memes WHERE id_meme = ?");
    $last->execute([$max]);
    
    $lasturl = $last->fetchAll();
    return $lasturl;
}