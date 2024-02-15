function gamePlay(){
let number_sought= 22
do     {
    let GivenNumber=prompt("Deviner le numéro caché : ")
    didIWin(GivenNumber, number_sought)
}while (didIWin == true)
}

//fonction didIWin() contrôle et affiche le numéro entré par l'utilisateur s'il est petit ou grand par rapport au numéro caché
function didIWin(GivenNumber, number_sought){
    if (GivenNumber > number_sought) {
        alert(GivenNumber +" est plus grand")
        return false; 
    } 
    else if (GivenNumber < number_sought) {
        alert(GivenNumber +" est  plus petit ") 
        return false;   
    }     
    else {
        alert("Bravo vous avez deviné le nombre: "+ number_sought)
        console.log("Bravo vous avez deviné le nombre: "+ number_sought) 
        document.body.innerHTML += "<h1> Bravo vous avez deviné le nombre: "+ number_sought +"</h1>"   
        return true
    }
    }
    

 
