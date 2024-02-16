//
let button= document.getElementById("button")
button.addEventListener("click", function(){
    let numberSought= Math.floor(Math.random() * 50);
    console.log(numberSought)
    gamePlay(numberSought)
})
 //reload c'est un bouton pour rafraichir la page du navigateur
 let reloadbutton= document.getElementById("reloadbutton")
 reloadbutton.addEventListener("click", function(){
     window.location.reload()
//  let reloadbutton= false pour pouvoir rentrer dans la boucle while
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
     
 })     