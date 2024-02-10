let ingredients= ["Pâtes","Oeufs","Sel","Poivre", "Lardon","Oignon","Parmesan"]
console.log("nous avons utilsé "+ingredients.length+" ingrédients pour cette recette")
console.log(ingredients)
for(i= 0; i< ingredients.length; i++){
    console.log(i+1+" . " +ingredients[i])

}
let ingredients2= ingredients
ingredients2.sort()
console.log("Voilà ci dessous les ingrediens rangés en ordre alphabétique")
console.log(ingredients)
//affichage la console dans le navigateur 
let affichage_navigateur=document.getElementById("bodyid")
console.log(affichage_navigateur)