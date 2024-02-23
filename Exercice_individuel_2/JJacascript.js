// un boutton commencer pour lancer un numero aleatoire a deviner
let button= document.getElementById("button")
button.addEventListener("click", function(){
    let numberSought= Math.floor(Math.random() * 50);
    console.log(numberSought)
    gamePlay(numberSought)
})
// un bouton  pour rafraichir la page du navigateur
let reloadbutton= document.getElementById("reloadbutton")
reloadbutton.addEventListener("click", function(){
    window.location.reload()
    
})    
function gamePlay(numberSought){ 
    let retourDidIWin1 = false
    let retourDidIWin2 = false
    let i=0
//boucle de prompt pour deviner le numero seceret   
while( retourDidIWin1 == false || retourDidIWin2 == false){
    i++
    let givenNumber1=prompt("joueur 1 : devinez le numero secret: ")
        retourDidIWin1=didIWin(givenNumber1, numberSought)
       if (retourDidIWin1== true){
        break;
       }
    let givenNumber2=prompt("joueur 2 : devinez le numero secret: ")
        retourDidIWin2=didIWin(givenNumber2, numberSought) 
        if (retourDidIWin2== true){
            break;             
} 
}
console.log("nombre de jeu " +i)
let roundsPlayed= "Vous avez joué " + i +" fois pour trouver le numèro secret: " + numberSought
document.getElementById("indicateur").innerText += roundsPlayed
}
//fonction didIWin() controle et affiche le numero entre par l'utilisateur 
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
        Message="Bravo vous avez gagné: "
        console.log("numéro secret"+ numberSought)  
       document.getElementById("numeroTrouvee").innerText += Message
        return true
    }
}

 

 