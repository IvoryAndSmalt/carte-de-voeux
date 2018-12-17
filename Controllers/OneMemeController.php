<?php
//   Set the Content Type

include('Models/OneMeme.php');

$get_url_template = templateUrl($_GET['id_template']);
foreach ($get_url_template as $value){
    $url_template = $value['url'];
    $ext = pathinfo($url_template)['extension'];
}

switch ($ext) {
    case 'png':
        header('Content-type: image/png');
        $batou = imagecreatefrompng($url_template);
    break;

    case 'jpg':
        header('Content-type: image/jpg');
        $batou = imagecreatefromjpeg($url_template);
    break;

    case 'gif':
        header('Content-type: image/gif');
        $batou = imagecreatefromgif($url_template);
    break;
}

    // Allocate A Color For The Text if pour texte blanc ou noir
    if($_POST['color'] === 'Black'){
        $color = imagecolorallocate($batou, 0, 0, 0);
    }
    if($_POST['color'] === 'White'){
        $color = imagecolorallocate($batou, 255, 255, 255);
    }
    // Set Path to Font File
    $font_path = '/home/lucasv/www/public/raleth/impact.ttf';

    // Set Text to Be Printed On Image
    if(isset($_POST['txthaut'])){
        $texthaut = $_POST['txthaut'];
    }

    if(isset($_POST['txtbas'])){
        $textbas = $_POST['txtbas'];
    }

    if(isset($_POST['fsz'])){
        $fsz = $_POST['fsz'];
    }

    echo $thl = $_POST['thl'];
    echo $tht = $_POST['tht'];
    echo $tbl = $_POST['tbl'];
    echo $tbt = $_POST['tbt'];

    // Print Text On Image
    imagettftext($batou, $fsz, 0, $thl, $tht, $color, $font_path, $texthaut);
    imagettftext($batou, $fsz, 0, $tbl, $tbt, $color, $font_path, $textbas);
    $meme = addMeme("non", $_GET['id_template']);

    // Send Image to Browser
    imagejpeg($batou, $meme);
    // Clear Memory
    imagedestroy($batou);

include('Views/OneMemeView.php');
