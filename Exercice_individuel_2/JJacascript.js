function gamePlay(numberSought){ 
    let retourDidIWin = false
    let i=0
//boucle de prompt pour deviner le numéro seceret   
while( retourDidIWin == false){
    let givenNumber=prompt("Deviner le numéro secret: ")
    retourDidIWin=didIWin(givenNumber, numberSought)
    i++
} 
console.log("nombre de jeu" +i)
let roundsPlayed= "vous avez joué " + i +" fois pour trouver le numéro secret"
document.getElementById("indicateur").innerText += roundsPlayed
}
//fonction didIWin() contrôle et affiche le numéro entré par l'utilisateur 
function didIWin(givenNumber, numberSought){
    if (givenNumber >numberSought) {
        higerNumber= givenNumber +" est plus grand que le numéro secret"
        alert(higerNumber)
        return false; 
    } 
    else if (givenNumber < numberSought) {
        lowerNumber= givenNumber +" est plus petit que le numéro secret "
        alert(lowerNumber) 
        return false;   
    }     
    else {
        numberFound="Bravo vous avez deviné le numéro secret: "+ numberSought 
        console.log("numéro secret"+ numberSought)  
       document.getElementById("numeroTrouvee").innerText += numberFound
        return true
    }
}

 

 
