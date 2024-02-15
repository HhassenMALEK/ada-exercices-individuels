

let numberSought= Math.floor(Math.random() * 50);
function gamePlay(){
let retourDidIWin = false
let i=0
while( retourDidIWin == false){
    let givenNumber=prompt("Deviner le numéro caché : ")
    retourDidIWin=didIWin(givenNumber, numberSought)
    i++
} 
console.log(i)
document.body.innerHTML += "<h1> vous avez joué " + i +" fois pour trouver le numéro caché</h1>"
}
//fonction didIWin() contrôle et affiche le numéro entré par l'utilisateur s'il est petit ou grand par rapport au numéro caché
function didIWin(givenNumber, numberSought){
    if (givenNumber >numberSought) {
        alert(givenNumber +" est plus grand")
        return false; 
    } 
    else if (givenNumber < numberSought) {
        alert(givenNumber +" est  plus petit ") 
        return false;   
    }     
    else {
        
        console.log("Bravo vous avez deviné le nombre: "+ numberSought) 
        document.body.innerHTML += "<h1> Bravo vous avez deviné le nombre: "+ numberSought +"</h1>"   
        return true
    }
}

    
 

 
