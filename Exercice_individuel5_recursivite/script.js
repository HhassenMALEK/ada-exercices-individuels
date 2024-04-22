let tabEntier = [1, 8, 10, 20, 11, 3, 7] ;

console.log("les valeurs du tableau tabEntier: " +tabEntier); 
console.log("------------------------------------------"); 

function sum1(tableau){
    let result = 0;
    // console.log(typeof tableau);
    if (!(Array.isArray(tableau))) {
        console.error("Dans la fonction sum1, merci de mettre en argument un array.")
        return null;
    }; 
    
    // une boucle for ... of
    for (let i of tableau) {
        if (isNaN(i)===true){
            console.error("Dans la fonction sum1, merci de mettre que des nombres dans le tableau"); 
            return null       
        }; 
        console.log(i); 
        result = result + i;
        
    }; 
    return result; 
}

// fonction récursive:
function sum2(tableau){
    let result = 0;
    if(tableau.length === 0 ){
        return 0;
    } else {
        
        result = tableau[0] + sum2(tableau.slice(1))
        return  result 
    }
}
console.log("sum1 :" + sum1(tabEntier)) ;
console.log("------------------------------------------"); 

console.log("sum2 :" + sum2(tabEntier)) ;
console.log("__________________________________________");



function factoriel1(nbr) {
    if (nbr === 0 || nbr === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= nbr; i++) {
            result = result * i; //result *= i;
        }
        return result ;
    }
}

function factoriel2(nbr) {
    if (nbr === 0) {
        result = 1 ;
    }
    else {
        result = nbr * factoriel2(nbr - 1);
    }
    
    return result;
}

let n = 11 ; 

console.log("factoriel N°1 " + n + " est " + factoriel1(n)) ;
console.log("------------------------------------------") ;


console.log("factoriel N°2 " + n + " est " + factoriel1(n)) ;  
console.log("__________________________________________");




//F0 	F1 	F2 	F3 	F4 	F5 	F6 	F7 	F8 	F9 	F10  F11 	F12 	F13 	F14 	F15 	... 	
//0 	1 	1 	2 	3 	5 	8 	13 	21 	34 	55 	 89 	144 	233 	377 	610 	... 	


function fibonacci1(nbr) {
    if (nbr ===0 || nbr ===1){
        return nbr; 
    } else { 
        let nbr1 = 0;
        let nbr2 = 1;
        let result = 0;
        for(let i = 2; i <= nbr; i++){
            result = nbr1 + nbr2; 
            nbr1 = nbr2; 
            nbr2 = result;       
        } 
        return result
    }    
}
console.log("Fibonacci 1 de " + n + " est " + fibonacci1(n));
console.log("------------------------------------------") ;



//F(n)= F(n-1) + F(n-2)

// fonction récursive:
function fibonacci2(nbr){
    if (nbr ===0 || nbr ===1){
        result = nbr; 
    } else { 
        result =  fibonacci2(nbr - 1) + fibonacci2(nbr - 2);
    }
    return result; 
}
console.log("Fibonacci 2 de " + n + " est " + fibonacci2(n))        
module.exports = {sum1, sum2, }