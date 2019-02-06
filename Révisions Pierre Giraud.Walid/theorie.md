**Les méthodes sont disponible dans le fichier méthodes sous format html,ce sont des copies de codes trouvés sur Pierre Giraud**

#1.Les sélecteurs#

`jQuery()` abrégée `$()` est la fonction de base pour faire appel au jquery.
L'utilisation du dollars est l'appel à la librairie jquery.
Donc la syntaxe de base pour accéder aux éléments html avec jquery va être `$(selecteur)`.
Exemple pour les balises p nous utiliserons :

```javascript
$("p");
```

#2.Les méthodes

Exemple de plusieurs méthodes créé de jQuery.

##2.1 Méthode `hide()`.

```javascript
$("p").hide();
```

Cette méthode va cacher le contenu du `p`.

##2.2 Méthode `click()`.

```javascript
$("p").click();
```

Cette méthode va permettre d'éxecuter une fonction en cliquant sur `p`.

##2.2 Méthode `dblclick()`.

```javascript
$(function() {
  $("p").dblclick(function() {
    $(this).hide();
  });
});
```

Cette méthode va permettre d'éxecuter une fonction en double cliquant sur `p`.

##2.4 Méthode `mouseenter() & mouseleave()`.

```javascript
$(function(){

                $('.p2').hide();
                $('.p1').mouseenter(function(){
                    $('.p2').show();
                });
                $('.p1').mouseleave(function(){
                    $('.p2').hide();
                });
```

La méthode `mouseenter()` permet d'actionner un événement au passage de la souris sur le sélecteur.
La méthode `mouseleave()` à l'inverse elle permet d'actionner un événement à la sortie de la zone du sélécteur

##2.5 Méthode `hover()`.

```javascript
$(function(){
               $('.p2').hide();

               $('.p1').hover(
                   function(){$('.p2').show();},
                   function(){$('.p2').hide();}
               );
```

Cette méthode combine la méthode `mousenter()` et `mouseleave()`.

##2.6 Méthode `mousedown() & mouseup()`.

```javascript
$(function() {
  //On cache p2 par défaut
  $(".p2").hide();

  $(".p1").mousedown(function() {
    $(".p2").show();
  });
  $(".p1").mouseup(function() {
    $(".p2").hide();
  });
});
```

La méthode `mousedown()` sert à faire une action tant que le clique de la souris est actif.
La méthode `mouseup()` sert à faire une action quand le clic est relâchée.

##2.7 Méthode `keydown() & keyup()`.

```javascript
$(function() {
  //Si une touche est enfoncée, le champ est bleu
  $("#prenom").keydown(function() {
    $(this).css("background-color", "#69C");
  });

  //Si on relâche la touche, le champ devient orange
  $("#prenom").keyup(function() {
    $(this).css("background-color", "#C72");
  });
});
```

La méthode `keydown()` sert à faire une action tant que la touche est enfoncée.
La méthode `keyup()` sert à faire une action quand la touche est relâchée.

##2.8 Méthode `keypress()` combiner à la propriété which de l'objet javascript Event.
##2.9 Méthode `fromCharCode()` qui est de l'objet javascript String.

```javascript
$(function(){

                $('#prenom').keypress(function(e){
                    //On passe le code ASCII en argument à fromCharCode()
                    var touche = String.fromCharCode(e.which);
                    $('#ascii').text(touche);
                });
```

La méthode `keypress()` sert à capturer les saisies de caractères.
La propriété `which` sert à renvoyer un code ASCII correspondant au caractères tapés par l'utilisateur.
La méthode `fromCharCode()` qui est une méthode de l’objet String et qui va transformer un code ASCII en caractère.

##2.10 Méthode `focus()`.

```javascript
$(function(){

                $('#prenom').focus(function(){
                    $('#prenom').css('background-color', 'yellow');
                });
```

La méthode `focus()` correspond au fait d’avoir son curseur placé dans un certain élément (généralement un champ de texte).

##2.11 Méthode `focusin()`.

```javascript
$(function(){
                $('#fld').focusin(function(){
$(this).css('background-color', 'yellow');
});
```

Cette méthode permet d'effectuer une fonction en faisant un focus sur n'importe lequel des éléments à l'intérieur du sélecteur.

##2.12 Méthode `focusout()`.

```javascript
$(function() {
  $("#fld").focusin(function() {
    $(this).css("background-color", "yellow");
  });
  $("#fld").focusout(function() {
    $(this).css("background-color", "purple");
  });
});
```

Cette méthode permet d'effectuer une fonction quand n'importe quel élément intérieur perd le focus.

##2.13 Méthode blur`()`.

```javascript
$(function(){

                $('#prenom').focus(function(){
                    $(this).css('background-color', 'yellow');
                });
                $('#prenom').blur(function(){
                    $(this).css('background-color', 'purple');
                });

```

Cette méthode permet d'effectuer une fonction quand l'élément perd le focus.

##2.14 Méthode change`()`.

```javascript
$(function() {
  $("select").change(function() {
    alert("Nouvelle option selectionnée");
  });
});
```

Cette méthode permet de détecter un changement comme par exemple dans un champ de formulaire.

##2.15 Méthode `submit()`.

```javascript
$(function() {
  $("form").submit(function() {
    alert("Formulaire envoyé");
  });
});
```

Cette méthode va se déclencher lorsque l'utilisateur va par exemple envoyer un formulaire.

##2.16 Méthode `on()`.

```javascript
$(function() {
  $("p").on("click", function() {
    $(this).hide();
  });
});
```

Cette méthode est utile pour attacher plusieurs événements avec une seule fonction.

##2.17 Méthode `off()`.

```javascript
$(function(){

                //Le span est caché par défaut
                $('#msg').hide();

                $('#b2').click(function(){
                    $('#b1').on('click', function(){
                        $('#msg').show();
                    });
                    $('#b1').text('Vous pouvez me cliquer');
                });

                $('#b3').click(function(){
                    $('#b1').off('click');
                    $('#b1').text('Pas de clic possible');
                });

```

Cette méthode va nous permettre de supprimer des gestionnaires d’évènements attachés avec la méthode on().

##2.18 Méthode `trigger() & triggerHandler()`.

```javascript
$(function() {
  //trigger() s'exécute si on clique sur le bouton trg
  $("#trg").click(function() {
    $("#fcs").trigger("focus");
  });

  //triggerHandler() s'exécute si on clique sur le bouton trgh
  $("#trgh").click(function() {
    $("#fcs").triggerHandler("focus");
  });

  //On attache un gestionnaire d'évènement focus à notre input
  $("#fcs").focus(function() {
    $("#msg").text("Evènement focus déclenché");
  });
});
```

La méthode `trigger()` va permettre de forcer le déclenchement d'un événement passer en argument et garder l'événement par défaut du sélecteur.
La méthode `triggerHandler()` va permettre de forcer le déclenchement d'un événement passer en argument et ne garde pas l'événement par défaut du sélecteur.

#3.Les sélecteurs CSS
L'une des forces en jQuery est qu'on peut selectionner par exemple tout les éléments ayant une classe ex:'para'.
En écrivant \$('.para').
En gros en jQuery on peut utiliser les sélecteurs CSS pour cibler des éléments dans l'HTML.
Comme la fonction jQuery renvoit toujours un objet jQuery, nous allons pouvoir pratiquer ce qu’on appelle le « chaînage » de méthodes.
Pour chaîner des méthodes, nous allons utiliser la syntaxe suivante :

```javascript
$(selecteur)
  .methode1()
  .methode2()
  .methode3()
  .$(document)
  .ready(function() {
    $(".para").hide();
  });
```

##H.S
Le `$ready` est facultatif on peut juste utiliser le `$` pour appeler la librairie jQuery.
Par exemple:

```javascript
$(function() {
  $(".para").hide();
});
```

Le mot clef `this` sert à faire référence à l'objet sélectionner par jQuery au préalable donc la en l'occurrence p.
Par exemple:

```javascript
$(function() {
  $("p").click(function() {
    $(this).hide();
  });
});
```

Le `type` de l'objet Event permet de connaître le type d'événément déclenché.
Par exemple:

```javascript
$(function() {
  $("p").on("click mouseover mouseout", function(e) {
    $("#msg").text("Evènement déclenché : " + e.type);
  });
});
```

##Quizz et questions.
###1.
https://www.pierre-giraud.com/javascript/jquery/test1.php

###2.
https://www.alsacreations.com/quiz/lire/17-jQuery-debutant

###3.
https://www.alsacreations.com/quiz/lire/18-jQuery-moyen

```

```

```

```

```

```
