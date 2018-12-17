<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Créez vos propres mèmes, avec des templates populaires ou personnalisées !"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@Adrian_vdBerg" />
    <meta name="twitter:creator" content="@Adrian_vdBerg" />
    <meta property="og:url"                content="<?php
    foreach($lastmeme as $value){
        $id_meme = $value['id_meme'];
    };
    echo $base_url.'Display/'.$id_meme?>" />
    <meta property="og:type"               content="website" />
    <meta property="og:locale"             content="fr_FR" />
    <meta property="og:title"              content="Check out this Meme!" />
    <meta property="og:description"        content="Create your on memes at <?=$base_url?>" />
    <meta property="og:image"              content="<?php
                            foreach($lastmeme as $value){
                                $url_meme = $base_url.$value['url'];
                                echo $url_meme;
                            }
                        ?>" />
    <meta property="og:image:alt"             content="image manquante" />
    <title><?=$title?></title>
    <link rel="stylesheet" href="<?=$base_url?>css/style.css">
</head>
<body>

    <header>
    <nav>
        <ul id="navigation">
            <li class="menu-Home"><a href="">Home</a></li>
            <li class="menu-Contact"><a href="">Contact</a></li>
            <li class="menu-apropos"><a href="">A Propos</a></li>
        </ul>
    </nav>

    </header>