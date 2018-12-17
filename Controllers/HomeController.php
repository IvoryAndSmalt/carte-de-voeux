<?php
//   Set the Content Type

include('Models/Home.php');

$get_all_templates = getAllTemplates();
$upload_status = "Vous pouvez ajouter vos propres templates !";

if(isset($_GET['id_template'])){
    $mytemp = getOneTemplate($_GET['id_template']);
}
else{
    $mytemp = getOneTemplate(1);
}

if(isset($_FILES['fichier'])) {
    $_dossier = 'img/';
    $temp_chemin = $_FILES['fichier']['tmp_name'];
    echo $temp_chemin;
    $_fichier = basename ($_FILES['fichier']['name']);
    $path_parts = pathinfo($_fichier);
    $ext = $path_parts['extension'];

    if($ext !== "jpg" && $ext !== "gif" && $ext !== "png" && $ext !== "svg"){
        $upload_status = "format non valide";
    }
    else{
        if(move_uploaded_file($temp_chemin, $_dossier . $_fichier)) {
            $url = $_dossier . $_fichier;
            $nom_fichier = preg_replace('/\\.[^.\\s]{3,4}$/', '', $_fichier);
            $nom_fichier = ucfirst($nom_fichier);
            $test = 0;
            foreach ($get_all_templates as $value) {
                if ($value['url'] === $url){
                    $test = 1;
                }
            }
            if($test === 0){
                addTemplate($nom_fichier, $url);
                $upload_status = 'upload effectué avec succès';
            }
            else{
                $upload_status = "un fichier avec un nom similaire existe déjà. ";
            }
        }
        else {
            $upload_status = "Echec de l'envoi";
        }
    }
}

$get_all_templates = getAllTemplates();

$meme = getLastMeme();

include('Views/HomeView.php');

?>