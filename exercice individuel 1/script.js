let Name= prompt("Entrer votre nom")
var bonjour= "Bonjour "

function askname(a, B){
    displayname= bonjour + Name
    console.log(displayname)
    document.body.innerHTML += "<h1>" + displayname +"</h1>"
}

askname (bonjour, Name)

let birth_year= prompt("Indiquer votre année de naissance")
let corrunt_year= 2024
function ask_birth_year(a, b){
let old= corrunt_year - birth_year
let display_old="Vous avez " +old+" ans" 
console.log(display_old)
document.body.innerHTML += "<h2>" +display_old+"</h2>"
}
ask_birth_year(birth_year, corrunt_year)
