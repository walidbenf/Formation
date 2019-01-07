var nbi, nb2 , resultat;
nb1= 10;
nb2 = 5;
resultat = nb1 - nb2;
document.write(resultat);

resultat = nb1 * nb2;
document.write(resultat);

resultat = nb1 / nb2;
document.write(resultat);

resultat = nb1 % nb2;
document.write(resultat);

nb1 = 11;
resultat = nb1 % nb2 ;
document.write("le reste de la division(ou modulo) de " + nb1 + " par " + nb2 + "est égal ) :" + resultat + "<br>");

nb1 += 5;
document.write(nb1 + "<br>");
nb1 -= 5;
document.write(nb1 + "<br>");
nb1 *= 5;
document.write(nb1 + "<br>");
nb1 /= 5;
document.write(nb1 + "<br>");
nb1 %= 5;
document.write(nb1 + "<br>");

var nb3 =1;

nb3 = nb3 + 1;
nb3++;
document.write(nb3 + "<br>");
++nb3
document.write(nb3 + "<br>");
