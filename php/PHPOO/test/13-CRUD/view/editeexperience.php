<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo htmlentities($title); ?></title>
    <link rel="stylesheet" href="view/css/style.css">
</head>
<body>
    <form action="" method="post">
        <label for="entreprise">Entreprise :</label>
        <input type="text" name="entreprise" id="entreprise" value="<?= $experience->entreprise ?>"><br><br>
        
        <label for="poste">Poste :</label>
        <input type="text" name="poste" id="poste" value="<?= $experience->poste ?>"><br><br>

        <label for="Date">Date :</label>
        <input type="text" name="date" id="date" value="<?= $experience->date ?>"><br><br>

        <label for="taches">Tâches :</label>
        <input type="text" name="taches" id="taches" value="<?= $experience->taches ?>"><br><br>

        <label for="competences">Compétences :</label>
        <input type="text" name="competences" id="competences" value="<?= $experience->competences ?>"><br><br>
        
        <input type="submit" value="Modifier">


    </form>
</body>
</html>