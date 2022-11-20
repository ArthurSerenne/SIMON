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

Il faut des classes css pour chaque couleur, lors de l'utilisation du main.js, certaines couleurs vont avoir un hover pour modifier légerement la couleur pour la séléction.

## Js

- Au click de start, une fonction pour lancer le programme du jeu (la div du niveau correspondant)

- Le main.js va contenir la fonction principal :

    Une boucle permet de choisir aléatoirement une couleur parmi 4 définis, cette couleur va etre stockée dans un tableau (tab1) -> boucle incrementée pour ajouter une couleur à chauqe tour
    On parcour le tableau et la/les couleur choisit va s'allumer grace à une classe css correspondante
    Le joueur dispose de 5 seconde pour répondre sinon il a perdu (Utilisation de promise)
    Quand le jouer clique sur le bouton correspondant à la couleur, celle-ci va dans un nouveau tableau (tab2)
    Les Tableaux vont etre comparé, si il sont identique la boucle se fini et on recommence au début/ si non le programme s'arrête

- Le data.js

    Ce fichier va contenir toutes les données à afficher pour le joueur:
    - nom
    - prenom
    - niveau du difficulté
    - score actuel
    - bouton start