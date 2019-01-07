var nb1 = 123,
  nb2 = "123";
/*
L'opérateur de comparaison "==" signifie l'égalité en valeur  */
document.write(nb1 == nb2); //Retourne true

/*
L'opérateur de comparaison "===" signifie l'égalité en type et valeur
*/
document.write(nb1 === nb2); //Retourne false
/*
L'opérateur de comparaison "!=" signifie l'inégalité en valeur
*/
document.write(nb1 != nb2); //Retourne false
/*
L'opérateur de comparaison "!==" signifie l'inégalité en type et valeur
*/
document.write(nb1 !== nb2); // Retourne true

var prenom = "Walid",
  age = 21,
  login = prompt("Quel est votre prénom?");
if (prenom === login) {
  login2 = Number(prompt("Quel est votre âge"));
  if (login2 === age) {
    alert("Bienvenue sur le site");
  } else {
    alert("Une erreur est survenue");
  }
} else {
  alert("Une erreur est survenue");
}
