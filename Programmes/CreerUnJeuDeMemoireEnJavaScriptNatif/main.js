const divResultat = document.querySelector("#resultat");

var tableauJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

var tableauResultat = [
    [1,4,3,4],
    [1,2,3,2],
    [7,8,6,5],
    [8,7,5,6],
];

var oldSelection = [];
var nombreImagesAffichage = 0;
var ready = true;

afficherTableau();

function afficherTableau() {
    var texte = "";

    for(var i = 0 ; i < tableauJeu.length ; i++) {
        texte += "<div>"
        for( var j = 0 ; j < tableauJeu[i].length ; j++) {
            if(tableauJeu[i][j] === 0) {
                texte += "<button class='btn btn-primary m-2' style='width:100px;height:100px;' onClick='verificationImagesCorrespondent(\""+i+"-"+j+"\")'>Afficher</button>";
            } else {
                texte += "<img src='"+getImage(tableauJeu[i][j])+"' style='width:100px;height:100px;' class='m-2'>";
            }
        }
        texte += "</div>";
    }
    divResultat.innerHTML = texte;
}

function getImage(valeur) {
    var imageTexte = "images/";
    switch(valeur) {
        case 1 : imageTexte += "elephant.png";
        break;
        case 2 : imageTexte += "giraffe.png";
        break;
        case 3 : imageTexte += "hippo.png";
        break;
        case 4 : imageTexte += "monkey.png";
        break;
        case 5 : imageTexte += "panda.png";
        break;
        case 6 : imageTexte += "parrot.png";
        break;
        case 7 : imageTexte += "penguin.png";
        break;
        case 8 : imageTexte += "pig.png";
        break;
        default : console.log("Cas non pris en compte");
    }
    return imageTexte;
}

function verificationImagesCorrespondent(bouton) {
    if(ready) {
        nombreImagesAffichage++;

        var ligne = bouton.substr(0,1);
        var colonne = bouton.substr(2,1);

        tableauJeu[ligne][colonne] = tableauResultat[ligne][colonne];
        afficherTableau();

        if(nombreImagesAffichage > 1) {
            ready = false;
            setTimeout(() => {
                // Deux images cliquées => verification
                if(tableauJeu[ligne][colonne] !== tableauResultat[oldSelection[0]][oldSelection[1]]) {
                    tableauJeu[ligne][colonne] = 0;
                    tableauJeu[oldSelection[0]][oldSelection[1]] = 0;
                }
                afficherTableau();
                ready = true;
                // Fin de la verification - Reinitialisation, relancement de la vague de clics et de la verification
                nombreImagesAffichage = 0;
                oldSelection = [ligne,colonne];
            }, 1000);
        } else {
            // conserver la ligne et la colonne du tableau pour obtenir la valeur
            oldSelection = [ligne,colonne];
        }
    }
}