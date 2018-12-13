//Commentaire sur une ligne
/*
Commentaire
sur
plusieurs
 lignes
 */
/*
les variables
une variable est un conteneur servant à stocker temporairement une information(ou données). En javascript on déclare une variable avec le mot-clé : "var" suivi du nom de la variable, chaque variable doit avoir i, nom unique(également appelé en anglais "identifier").Le nom d'une variable doit observer quelques règles à savoir:
 Le nom d'une variable doit commencer par une lettre;
Le nom d'une variable ne peut contenir que des lettres (non accentuées), des chiffres ou les signes "_" et "$";
Le nom d'une variable est sensible à la casse c'est à dire que "a" est différent "A";
Le javascript possède des mots "réservés" qu'on ne peut utilisé pour créé une variable(ex: var, alert, ...).
 */
//On déclare une variable et on lui affect immédiatement une valeur
var x = 25;
var X = 100; //Celle-ci est différente de la var "x"

// On déclare plusieurs variables d'un coup
var nom = "Samba",
  prenom = "Abdou",
  date = "09/04/88";
// On déclare une variable  sans lui affecter de valeur, puis on lui en affecte une valeur ensuite(Non recommandé).
var age;
age = 25;
//On déclare une variable vide à laquelle  on affecte une valeur par la suite(Recommandé).
var ville = "";
ville = "Pierrefitte";

/*En javascript le signe égal(=) n'est pas une opérateur d'égalité mais un opérateur d'affectation càd qu'il sert à affecter(ou assigner) une valeur à une variable et non que la variable est égal à sa valeur.Ainsi on va pouvoir affecter différentes valeurs à une même variable  dans le temps.  */
x = x + 5;
console.log("nos variables sont:" + '\n' + x + '\n' + X + '\n' + nom + '\n' + prenom + '\n' + date + '\n' + age + '\n' + ville);
/* Les types de (valeurs) de variables
Les types de valeurs vont avoir une influence sur notre code puisqu'on ne stockera pas de la même façon un chiffre ou une chaîne de caracteres (un texte) par exemple dans une variable.
Nous ne pourrons pas non plus effectuer les mêmes opérations sur les variables selon le type de valeurs qu'elles stockent.
Le type Number:
Il va représenter tout tout nombre ou chiffre, qu'il soit positif ou négatif, entier ou à virgule. Pour affecter une valeur de type number on utilise ni guillemets ni apostrophes.
Attention : en programmation on utilise des notations anglo-saxonne, ce qui signifie qu'il faut replacer nos virgules par des points pour les nombres décimaux.
*/

var number = 25;
var number2 = -15;
var number3 = 1.09;
/*Le type String
Il va représenter les chaînes de caractères càd les textes.
Pour affecter une chaîne de caractère  à une variable il faut l'entourer avec des guillemets ou apostrophes.*/

var texte = "lorem ipsum";
var desc = 'lorem ipsilum';
/* Cepedant si la valeur stocker contient elle même des apostrophes ou des guillemets  il faudra les échapper au moyen d'une antislash(\)*/

var dept = "Je suis du \"9.2\""; //Je suis dans des guillemets dont j'échappe les guillemets

document.write(dept + "<br>");

var dept2 = 'J\'habite dans le 9.2'; //Je suis dans des apostrophes dont j'échappe l'apostrophe
var dept2 = "J'habite dans le 9.2";
document.write(dept2 +"<br>");
/*Le type boolean(booléen)
Un booléen en algèbre c'est une valeur binaire(soit 0 ou 1), en programmation un booléen va être soit la valeur true(vrai ou 1) ou false(faux ou 0) pour affecter un boolean à une variable on utilise ni guillemets, ni apostrope.  */

var vrai = true;
var faux = false;

/*Les autres types
Parmi les autres valeurs possible on peut citer la valeur "null", qui correspond à la non connaissance à priori de la valeur. "undefined", qui correspond au fait de ne pas avoir défini de valeur pour notre variable. "NaN" qui signifie "Not a Number" soit n'est pas un nombre
 */

var n = null,
  u = undefined,
  nn = NaN;

// Noter q'uil est posssible de changer le type de valeur d'une variable, la nouvelle écrasera tout simplement l'ancienne.

var tt = 25; //Type number
tt = true; //Type boolean
tt = null; //Type null
tt = "tt"; //Type String

/*Pour tester le type de la valeur, on utilise généralement la méthode "typeof()" */
alert(typeof(tt));

//Déclarer une variable de manière explicite ou implicite
var maVariable = 'toto'; // "maVariable" est ce qu'on appelle une écriture camel case.

ma_variable = 'toto'; // "ma_Variable" est ce qu'on appelle une écriture snake case.

//Afficher une boite de dialogue
alert("Je sert à afficher des données dans une boite de dialogue");

//Afficher dans la console
console.log("Je sert à afficher des données dans la console");

//Afficher dans le navigateur(page web)
document.write("Je sert à afficher dans la page web");

//Demander à l'utilisateur d'entrer une valeur
prompt("Je sert à afficher des données dans une boite de dialogue qui va demander  à l'utilisateur de rentrer des données");

//Méthode(ou fonction) parseInt() renvoie un entier à partir d'une chaîne de caractère(string)
var unChiffre = "12";
document.write(unChiffre +'<br>');//12
document.write(typeof(unChiffre) +'<br>');//string

unChiffre= parseInt(unChiffre);

document.write(unChiffre +'<br>');//12
document.write(typeof(unChiffre) +'<br>');//number

//Méthode(ou fonction) parseFloat()
//parseFloat();
var nb_en_lettre = "12.22";
document.write(nb_en_lettre +'<br>');//12
document.write(typeof(nb_en_lettre) +'<br>');//string

nb_en_lettre= parseFloat(nb_en_lettre);

document.write(nb_en_lettre +'<br>');//12
document.write(typeof(nb_en_lettre) +'<br>');//number

//Méthode toString(), qui sert à convertir en chaîne de caractère
var nb_en_lettre = 258;
document.write(nb_en_lettre +'<br>');//12
document.write(typeof(nb_en_lettre) +'<br>');//string
nb_en_lettre=nb_en_lettre.toString();

document.write(nb_en_lettre +'<br>');//12
document.write(typeof(nb_en_lettre) +'<br>');//number
// alert("Hello, je me lance depuis le fichier  script.js !!")
