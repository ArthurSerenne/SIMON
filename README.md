# SIMON
It's a javascript project 


Les besoins, creer un jeu avec 4 boutons de couleur différentes;
créer une suite aléatoires des couleurs en augmentant le nombre de 1 à chaque tour;
créer une surbrillance pour les couleurs à suivre;
Afficher le score, le numéro de niveau et un bouton demarrer et arreter

## Html

<div class="wrapper">
    <button>Rouge</button>
    <button>Bleu</button>
    <button>Vert</button>
    <button>Jaune</button>

    <button>start/End</button>

    <div class="element">
    - le nom du joueur
    - le score
    -le niveau de diff
    </div>
</div>


## Css

## Js

- Au click de start, une fonction pour lancer le programme du jeu (la div du niveau correspondant)

- Le main js : Une boucle qui sincremente à chaque bonee réponse:
    - chaque bouton aura une valeur.
    - un tableau sera rempli aléatoirement d'une de ces valeurs a chaque bonne réponse
    - parcour du tableau afin d'illuminer le bon bouton avec la valeur correspondant 
    - promise afin que de regler le temps de parcours du tableau 