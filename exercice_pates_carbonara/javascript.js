let ingredients= ["Pâtes ","Oeufs ","Sel ","Poivre ", "Lardon ","Oignon ","Parmesan "]

let number_ingredients= "nous avons utilsé " +ingredients.length +" ingrédients pour cette recette"
console.log(number_ingredients)
document.body.innerHTML += "<h3>" +number_ingredients +"</h3>"

console.log(ingredients)
document.body.innerHTML += "<h3>" +ingredients +"</h3>"

for(i= 0; i< ingredients.length; i++){
    console.log(i+1+" . " +ingredients[i])
    document.body.innerHTML += "<h3>" + (i+1) +" . " +ingredients[i]+ "</h3>" 

}
let ingredients2= ingredients
ingredients2.sort()
console.log("Voilà ci dessous les ingrediens rangés en ordre alphabétique")
document.body.innerHTML += "<h2> - Voilà ci dessous les ingrediens rangés en ordre alphabétique </h2>"

console.log(ingredients)
document.body.innerHTML += "<h3>" +ingredients +"</h3>" 

