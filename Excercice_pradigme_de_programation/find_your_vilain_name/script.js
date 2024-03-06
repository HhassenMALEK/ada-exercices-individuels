
function getVillainName(birthday) {
    const mois = [
        "Le Mal", "Le Vil", "Le Cruel", "Le Trashy", "Le méprisable", "L'embarrassant",
        "Le Peu Recommandable", "L'Atroce", "Le Tournoyant", "L'Orange", "Le Terrifiant", "Le Gênant"
    ];
    
    const numJours = [
        "Moustache", "Cornichon", "Ornement de capuche", "Raisins secs", "Corbeille de recyclage",
        "Pomme de terre", "Tomate", "Chat domestique", "Cuillère à café", "Panier à linge"
    ];
    
    const nbrMois = birthday.getMonth();
     // Affichera le mois en cours, par exemple, 2 pour mars
    console.log("nbrMois   ", nbrMois)
   
    const nbrJour = birthday.getDate();
    // Affichera le jour du mois en cours, par exemple, 15 pour le 15 mars
    console.log("nbrjour    " + nbrJour)
   
    const moisName = mois[nbrMois];
    console.log("moisName   " + moisName)
    
    const jourName =  numJours[nbrJour % 10 - 1];
    //si nbrJour= 15 du coup 15 % 10 équivaut à 5 car le reste de la division de 15 par 10 est 5.
    
    console.log("nbrJour % 10  " + nbrJour % 10)
    console.log("jourName    " +jourName)
    
    return moisName + " " + jourName;
}

const birthday = new Date ('Januray 11, 1990');
console.log(new Date("march 15 , 1990" ))
console.log(getVillainName(birthday)); // Affichera "Le Cruel Corbeille de recyclage"

