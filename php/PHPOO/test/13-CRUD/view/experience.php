<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $contact->prenom;?></title>
    <link rel="stylesheet" href="view/css/style.css">
</head>
<body>
    
    <h1><?php echo $experience->entreprise;?></h1>

    <div>
        <span>Entreprise :</span>
        <?php echo $experience->entreprise;?>
    </div>
    <div>
        <span>Poste :</span>
        <?php echo $experience->poste;?>
    </div>
    <div>
        <span>Date :</span>
        <?php echo $experience->date;?>
    </div>
    <div>
        <span>Tâches :</span>
        <?php echo $experience->taches;?>
    </div>
    <div>
        <span>Compétences :</span>
        <?php echo $experience->competences;?>
    </div>
    
</body>
</html>