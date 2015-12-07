var Engine = function () {

    //Variables :
    var plateau = new Array(5);
    var ligne;
    for (ligne = 0; ligne < 5; ligne++) {
        plateau[ligne] = new Array(5);
    }

    var nb_pions_total = 0;
    var nb_pions_joueur1 = 25;
    var nb_pions_joueur2 = 25;
    var score_joueur1 = 0;
    var score_joueur2 = 0;
    var joueur_courant = 1;

    // Initialise le plateau
    this.init_plateau = function () {
        var ligne, colonne;
        for (ligne=0; ligne<plateau.length; ligne++){
            for (colonne=0; colonne<plateau.length; colonne++){
                plateau[ligne][colonne] = new Pile();
            }
        }
    };

    // Le nombre de pion total
    this.get_nb_piece_plateau = function () {
        return nb_pions_total;
    };


    // Le nombre de pion du joueur "joueur"
    this.get_nb_pions_joueur = function(joueur){
        if(joueur == 1){
            return nb_pions_joueur1;
        }else return nb_pions_joueur2;
    };

    // Le score du joueur
    this.get_score_joueur = function(joueur){
        if(joueur == 1){
            return score_joueur1;
        }else return score_joueur2;
    };

    // Le joueur courant
    this.get_joueur_courant = function(){
        return joueur_courant;
    };

    // Change le joueur courant
    this.switch_joueur = function (){
        joueur_courant = (joueur_courant % 2) + 1;
    };

};