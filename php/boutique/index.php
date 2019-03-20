<?php
/**
 * Created by PhpStorm.
 * User: Etudiant
 * Date: 15/03/2019
 * Time: 12:06
 */
$r=execute_requete("SELECT DISTINCT(categorie)FROM article"
;
$content .='<div class="row"></div>';
//Affichage des catégories :
$content .='<div class="col-3">';
$content .= '<div class="list-group-item">';
while($categorie = $r->fetch(PDO::FETCH_ASSOC)) {
    $content .= "<a href='?categorie=$categorie[categorie]'class='list-group-item'> $categorie[categorie]</a>";
}
$content .='</div>';
$content .='</div>';

//Affichage des articles correspondant à la catégorie selectionnée
$content .='<div class="col-8 offset-1">';
$content .='<div class="row">';

if(isset($_GET['categorie'])){
    $r=execute_requete("SELECT * FROM article WHERE categorie ='$_GET['categorie]'");
    while($article = $r->fetch(P DO::FETCH_ASSOC)){
        debug($article);
    }
}

$content .='</div>';
$content .='</div>';
$content .='</div>';
