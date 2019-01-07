var nb1 = 60;

/*if(nb1 > 50) {
document.write("nb1 est bien supérieur à 50");
}
else {
document.write("nb1 est bien inférieur à 50");
}*/
var majorite= 18;
var age= Number(prompt("Quel est votre âge"));
if(age>=majorite) {
  alert("Bienvenue sur le site");
  document.write("Vous êtes majeurs !!!");
}
  else {
    alert("Casse toi t'as pas l'âge");
    document.location.href="https://google.com";
  }
var heure = Number(prompt("Quel heure est-il"));

if(heure < 12) {
  alert("C'est le matin");
}
else if (heure == 12) {
  alert("Il est midi");
}
else if (heure <= 18) {
  alert("C'est l'après-midi");
}
else {
  alert("c'est le soir");
}
