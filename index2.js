// INITIALISATION DES VARIABLE
let choix;
// OUI A REPLAY POUR RENTRER DANS LA BOUCLE REPLAY == "OUI"
let replay = "oui"

// TANT QUE REPLAY == "OUI" ON EXECUTE
while (replay == "oui") {
    // ON OFFRE 10 ESSAIS AU CLIENT
    let essais = 5;
    // ON FABRIQUE UN NOMBRE ALEATOIRE ENTRE 0 ET 10
    const winnerNumber = Math.floor(Math.random() * 10);

    // TANT QUE LE NOMBRE D'ESSAI EST > A 0 ET QUE LE CHOIX EST DIFFERENT DU NOMBRE GAGNANT ON EXECUTE:
    while (essais > 0 && choix != winnerNumber) {
        // ON OFFRE LE CHOIX AU CLIENT DE CHOISIR UN NUMERO ENTRE 1 ET 10
        choix = prompt(`Choisissez un nombre entre 1 et 10 il vous reste ${essais} essais`);
        // SI LE CHOIX EST SUPERIEUR AU NOMBRE GAGNANT ON EXECUTE
        if (choix > winnerNumber) {
            // LE CLIENT PERD 1 ESSAI
            essais--
            // ET ON AFFICHE UN MESSAGE POUR LE GUIDER
            alert("C'est moins");
        }
        // SI LE CHOIX EST INFERIEUR AU NOMBRE GAGNANT ON EXECUTE
        else if (choix < winnerNumber) {
            // LE CLIENT PERD 1 ESSAI
            essais--
            // ET ON AFFICHE UN MESSAGE POUR LE GUIDER
            alert("C'est plus");
        }
    }
    // JE SUIS SORTIE DE LA BOUCLE CAR SOIT PLUS D'ESSAI SOIT LE CLIENT A GAGNER

    // SI LE CHOIX == WINNER NUMBER ==> VICTOIRE
    if (choix == winnerNumber) {
        alert("Bravo vous avez gagnÃ©.")
    }
    // PLUS D'ESSAI ===> DEFAITE
    else {
        alert("Vous n'avez plus d'essai pour jouer vous avez perdu.")
    }
    // ON REPROPOSE A L'UTILISATEUR DE REJOUER
    replay = prompt("Voulez vous rejouer ? oui ou non")
}







