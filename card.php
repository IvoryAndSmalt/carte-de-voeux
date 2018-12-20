<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Envoyer une carte</title>
    <link href="https://fonts.googleapis.com/css?family=Parisienne" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="homecontainer">
    <form id="contact" action="retour.php" method="post">
        <h1 id="mytitle">Souhaitez un joyeux Noël à quelqu'un qui vous est cher !</h1>
        <input id="email" type="text" placeholder="Entrez l'email du destinataire" name="email" required="required">
        <input id="name" type="text" placeholder="Entrez son nom" name="name" required="required">
        <input type="text" placeholder="Dites-leur qui vous êtes" required="required" name="whoami" id="whoami">
        <input id="submit" type="submit" value="Envoyer !">
    </form>
</div>

<script src="js/script.js"></script>
</body>
</html>