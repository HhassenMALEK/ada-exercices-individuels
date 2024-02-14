let Name= prompt("Entrer votre nom")
var bonjour= "Bonjour "
let birth_year= prompt("Indiquer votre année de naissance")
let birth_month= prompt("Indiquer votre numéro de mois de naissance")
let date = new Date();
let corrunt_month= date.getMonth() + 1;
let corrunt_year= date.getFullYear();

function askname(a, b){
    display_name= bonjour + Name
    console.log(display_name)
    document.body.innerHTML += "<h1>" + display_name +"</h1>"
}
askname (bonjour, Name)

function ask_birth_year(a, b, c, d){
let old_year= a - b
let old_month= c - d
if (old_month < 0){    
    old_year= old_year - 1
    old_month= old_month + 12    
}
display_old= "vous avez " +old_year +" ans et " + old_month + " mois" 
console.log(display_old)  
    document.body.innerHTML += "<h2>" +display_old+"</h2>"
}
ask_birth_year(corrunt_year, birth_year, corrunt_month, birth_month)

