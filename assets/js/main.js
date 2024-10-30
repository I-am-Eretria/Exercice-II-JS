/* 
En cliquant sur n'importe quel carré du haut, le carré du bas prend sa couleur et le code couleur du carré sélectionné s’affiche
*/

const squareBottom = document.getElementById("couleurCarre");   // définit squareBottom en la balise avec pour id couleurCarre

const squares = [   // définit un tableau squares avec pour éléments les balises ayant pour id respectif :
    document.getElementById("carre1"),  // carre1
    document.getElementById("carre2"),  // carre2
    document.getElementById("carre3"),  // carre3
    document.getElementById("carre4")   // carre4
];

// Ajout d'un écouteur d'événement pour chaque carré
squares.forEach(square => {
    square.addEventListener('click', () => { 
        const bgColor = window.getComputedStyle(square).getPropertyValue("background-color");   // getComputedStyle() method returns a CSSStyleDeclaration object

        squareBottom.style.backgroundColor = bgColor; // Met à jour la couleur de fond
        // squareBottom.style.setProperty("background-color", bgColor);     autre manière moins optimisée pour mettre à jour la couleur de fond

        squareBottom.innerHTML = bgColor; // Affiche le code couleur
    });
});


/* Explications pour () => { ... } :

Ceci est une fonction fléchée (ou fonction anonyme) qui sera exécutée lorsque l'événement se produit.
Le code à l'intérieur des accolades { ... } sera exécuté lorsque l'élément sera cliqué (ici pour chaque carré)

*/

