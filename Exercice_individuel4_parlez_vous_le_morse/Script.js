function getLatinCharacterList(phrase) {
    return phrase.split("");
}

function encode(phrase) {
    let latinToMorse = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
        '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
        '$': '...-..-', '@': '.--.-.',
        'À': '.--.-', 'Ä': '.-.-', 'Å': '.--.-', 'Æ': '.-.-', 'Ç': '-.-..', 'É': '..-..', 'È': '.-..-', 'Ö': '---.', 'Ü': '..--',
        'ß': '...--..', 'Ñ': '--.--', 'Ŝ': '...-', 'Ź': '--..-', ' ': '/'
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
            morseCode += " ";
        }
    }
    // Retirer les espaces à la fin et au début
    return morseCode.trim();
}

function decode(phrase2) {
    let morseToLatin = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
        '-....': '6', '--...': '7', '---..': '8', '----.': '9',
        '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')',
        '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"',
        '...-..-': '$', '.--.-.': '@',
        '.--.-': 'À', '.-.-': 'Ä', '.--.-': 'Å', '.-.-': 'Æ', '-.-..': 'Ç', '..-..': 'É', '.-..-': 'È', '---.': 'Ö', '..--': 'Ü',
        '...--..': 'ß', '--.--': 'Ñ', '...-': 'Ŝ', '--..-': 'Ź', '/': ' '
    };

    // Diviser le code Morse en caractères séparés
    const mots = phrase2.split(' ');
    let char = "";
    for (let mot of mots) {
        if (mot in morseToLatin) {
            char += morseToLatin[mot]
        } else {
            char += " "
        }
    }
    return char;
}

let inputText = document.getElementById("inputText");
let Button = document.getElementById("Button");
Button.addEventListener("click", function () {
    // Récupérer le texte saisi
    let phrase = inputText.value;
    console.log("Texte saisi :", phrase);
    getLatinCharacterList(phrase)
    let morse = encode(phrase);
    console.log("morse " + morse);
    document.getElementById("characterMorse").innerText = " La traduction de " + phrase + " en morse est :  " + morse;

});


let inputText2 = document.getElementById("inputText2");
let Button2 = document.getElementById("Button2");
Button2.addEventListener("click", function () {
    let phrase2 = inputText2.value
    let latin = decode(phrase2)
    console.log("latin " + latin)
    document.getElementById("phraseMorse").innerText = " La traduction de " + phrase2 + " en latin est :  " + latin;
});






