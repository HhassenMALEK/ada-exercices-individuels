let tabEntier = [1, 8, 10, 20, 11, 3, 7] ;

console.log("les valeurs du tableau tabEntier: " +tabEntier); 
console.log("------------------------------------------"); 

function sum1(tableau){
    let sumTab=0 ; 
    // une boucle for ... of
    for (let i of tableau) {
        sumTab = sumTab + i;
    }
    return sumTab ; 
}
// fonction récursive:
function sum2(tableau){
    let sumTab = 0 ;
    if(tableau.length === 0 ){
        return 0;
    } else {

    sumTab = tableau[0] + sum2(tableau.slice(1))
    return  sumTab
    }
}
console.log("sum1 :" + sum1(tabEntier)) ;
console.log("------------------------------------------"); 

console.log("sum2 :" + sum2(tabEntier)) ;
console.log("------------------------------------------");



function factoriel1(nbr) {
    if (nbr === 0 || nbr === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= nbr; i++) {
        result = result * i; //result *= i;
    }
    return result;
}

function factoriel2(nbr) {
    // Si nbr = 0, le factoriel est 1
    if (nbr === 0) {
        result = 1 ;
    }
    // Sinon, on retourne nbr multiplie le factoriel de (nbr - 1)
    else {
        result = nbr * factoriel2(nbr - 1);
    }
        
    return result
}

let n = 6 ; 

console.log("factoriel N°1 " + n + " est " + factoriel1(n)) ;
console.log("------------------------------------------") ;


console.log("factoriel N°2 " + n + " est " + factoriel1(n)) ; 