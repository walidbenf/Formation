<?php
//surcharger (override) : Une surcharge me permet de prendre le comportement de ma fonction d'origine et d'y ajouter un traitement complémentaire.

class A{
  public function calcul(){
    return 10;
  }
}

class B extends A{
public function calcul() {//redéfinition
  $n = parent::calcul();
  //On n'utilisera pas $this->calcul() sinon, la fonction sera récursive et la méthode s'appellera en boucle !
  //'parent' fonctionne donc pour appeler  uen méthode d'une classe parente LORS d'une surcharge !! (afin d'éviter qu'elle ne s'appelle elle même avec $this->calcul())
  //self::calcul() ne fonctionnerait pas non plus, car on essayerait d'appeler quelque chose de la classe courante (alors qu'ici on a besoin de la classe parente)
  if($n<=100) {

    return "$n est inférieur ou égale à 100 !";

  }
  else {
    return "$n est supérieur à 100 !";

  }
}
public function autreCalcul() {
  $nb = parent::calcul();//Il est possible d'atteindre une méthode de mon parent, même s'il n ' y a pas de surcharge.
}

}

$objetB = new B;
echo $objetB->calcul();
//Affiche : "10 est inférieur ou égal à 100" - J'ai redéclaré la méthode calcul() dans la classe enfant(B), cela s'appel une surcharge, je modifie légèrement le comportement initial contenu dans le parent(A) via son enfant (B)

/*
Une surcharge: permet de prendre en compte le ccomportement de la méthode héritée afin d'en bénéficier, tout en apportant un traitement complémentaire.

Différence entre 'self::' et 'parent::'

Lorsque l'on utilise 'self::' on demande d'utiliser ce qui est dans la Classe courante où ce que l'on a hérité sans l'avoir redéfini dans notre classe.
Et il faut que cela appartiennent à la classe.

Quand on utilise 'parent::' on demande d'utiliser les éléments de la classe dont on a hérité.
*/
 ?>
