const divResultat = document.querySelector("#resultat");

var tableauJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

afficherTableau();

function afficherTableau() {
    var texte = "";

    for(var i = 0 ; i < tableauJeu.length ; i++) {
        texte += "<div>"
        for( var j = 0 ; j < tableauJeu[i].length ; j++) {
            if(tableauJeu[i][j] === 0) {
                texte += "<button class='btn btn-primary m-2' style='width:100px;height:100px;' >Afficher</button>";
            } else {
                texte += "<img src='"+getImage(tableauJeu[i][j])+"' style='width:100px;height:100px; class='m-2'>";
            }
        }
        texte += "</div>";
    }
    divResultat.innerHTML = texte;
}

function getImage(valeur) {
    var imageTexte = "images/";
    switch(valeur) {
        case 1 : imageTexte = "elephant.png";
        break;
        case 2 : imageTexte = "giraffe.png";
        break;
        case 3 : imageTexte = "hippo.png";
        break;
        case 4 : imageTexte = "monkey.png";
        break;
        case 5 : imageTexte = "panda.png";
        break;
        case 6 : imageTexte = "parrot.png";
        break;
        case 7 : imageTexte = "penguin.png";
        break;
        case 8 : imageTexte = "pig.png";
        break;
        default : console.log("Cas non pris en compte");
    }
    return imageTexte;
}