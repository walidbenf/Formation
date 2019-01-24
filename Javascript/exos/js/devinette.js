console.log("Bienvenue");
var rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);
//var rand2 = rand * 101;
//var rand3 = Math.ceil(rand);

for (i = 0; i <= 6; i++) {
  var prom = Number(prompt("Entrer un nombre"));
  if (rand == prom) {
    alert("Le jeux est fini");
    break;
  }
}
