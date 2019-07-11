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
        <input type="text" name="entreprise" id="entreprise"><br><br>
        
        <label for="poste">Poste :</label>
        <input type="text" name="poste" id="poste"><br><br>

        <label for="Date">Date :</label>
        <input type="text" name="date" id="date"><br><br>

        <label for="Taches">Tâches :</label>
        <input type="text" name="taches" id="taches"><br><br>

        <label for="competences">Compétences :</label>
        <input type="text" name="competences" id="competences"><br><br>
        
        <input type="submit" value="Ajouter">

    </form>
</body>
</html>