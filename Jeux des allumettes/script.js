// a completer la condition d'affichage de nméro de joeur gagnant.
console.log("test"); 

let currentPlayer = 1;
// let currentPlayer = 0; // 0 for player1, 1 for player2

nbrPlayer = parseInt(prompt("donner le nombres des joureurs")) + 1; // rajout 1 pour que condition  if (currentPlayer == nbrPlayer ) soit valide

function removeMatchstick() {
    let numberToDeduct;
    let condition= false;
    
    while(condition == false) {
    alert("c'est le tour de joueur " + currentPlayer); 
    //         alert("C'est le tour de joueur " + (currentPlayer + 1));
    numberToDeduct = parseInt(prompt("donner le nombre des allumettes a enlever entre 1 et 6"));
    
    if(numberToDeduct >= 1 && numberToDeduct <= 6){
        condition = true; 
    } else {
        alert("veillez entrer un nombre entre 1 et 6");
        condition = false; 
    }  
    for (i = 1; i <= nbrPlayer; i++){
        currentPlayer = currentPlayer + 1; 
        if (currentPlayer == nbrPlayer ){
            currentPlayer = 1;
        }    
    } 
    // if (currentPlayer === 1){
    //     currentPlayer = currentPlayer + 1;
    //     console.log(currentPlayer)
    // } else {
    //     currentPlayer = 1;
    // } 
     // Alterne le tour du joueur
//     currentPlayer = 1 - currentPlayer;
    }
    return numberToDeduct; 
} 

function matchstickToRemove(initNumber,numberToDeductFunction) {

    while(initNumber > 0) {   
        let numberToDeduct = numberToDeductFunction(); 
        if(numberToDeduct <=0 || numberToDeduct > initNumber){
            alert("le nombres d'allumettes n'est pas valide"); 
        } else {
            initNumber -= numberToDeduct;
            if(initNumber == 0){
                alert("Bravo vous avez remporté la partie" ); 
            } else {
                alert("Il reste " + initNumber + " allumettes."); 
            }
        }    
    }

    return initNumber
}

let totalMatchstick = 50 
matchstickToRemove(totalMatchstick, removeMatchstick);