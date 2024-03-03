
function getLatinCharacterList (phrase) {
    phraseSplit  = phrase.split("");
    console.log(phraseSplit); 
}
function encode(phrase) {
    const latinToMorse = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
        'Y': '-.--', 'Z': '--..',' ':'/' 
    };
     // Convertir la phrase en majuscules 
    phrase = phrase.toUpperCase();

    let morseCode = "";
    
    for (let i = 0; i < phrase.length; i++) {
        let lettre = phrase[i];

        // Vérifier si la lettre est dans l'objet latinToMorse
        if (lettre in latinToMorse) {
         // Ajouter le code à la lettre
            morseCode += latinToMorse[lettre] + ' ';
        } else {
        // ajout d'un espace Si la lettre n'est pas dans l'objet, 
            morseCode +=" ";
        }
    }
    // Retirer les espaces en trop à la fin et au début
    return morseCode.trim(); 
}

function decode(phrase2){
     const morseToLatin = {
        '-': "T",
        '--': "M",
        '---': "O",
        '--.': "G",
        '--.-': "Q",
        '--..': "Z",
        '-.': "N",
        '-.-': "K",
        '-.--': "Y",
        '-.-.': "C",
        '-..': "D",
        '-..-': "X",
        '-...': "B",
        '.': "E",
        '.-': "A",
        '.--': "W",
        '.---': "J",
        '.--.': "P",
        '.-.': "R",
        '.-..': "L",
        '..': "I",
        '..-': "U",
        '..-.': "F",
        '...': "S",
        '...-': "V",
        '....': "H"
      }
      // Diviser le code Morse en caractères séparés
    const mots = phrase2.split(' ');
      let char = "";
      for(let mot of mots){
        if (mot in morseToLatin ){
            char +=  morseToLatin[mot]
        } else{
            char += " "
        }
      }
      return char
}

let phrase = "hello world"
let phrase2 = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."

console.log(phrase)
getLatinCharacterList (phrase)
let morse = encode(phrase);
console.log("morse " +morse);
document.getElementById("characterMorse").innerText += " la traduction de  "+phrase+" en morse est :  "+ morse
let latin = decode(phrase2)
console.log("latin "+ latin)
document.getElementById("phraseMorse").innerText += " la traduction de  "+phrase2+" en latin est :  "+ latin