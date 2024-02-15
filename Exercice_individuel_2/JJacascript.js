

let numberSought= Math.floor(Math.random() * 50);
function gamePlay(){

let retourDidIWin = false
while( retourDidIWin == false){
    let givenNumber=prompt("Deviner le numéro caché : ")
    retourDidIWin=didIWin(givenNumber, numberSought)
} 
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

    //var randomNumber = Math.floor(Math.random() * 51);
 

 
