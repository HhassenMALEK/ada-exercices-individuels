function encode(phrase) {
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.'
    };

    // Convertir la phrase en majuscules pour correspondre aux clés de l'objet morseCode
    const upperCasePhrase = phrase.toUpperCase();
    let morsePhrase = '';

    for (let i = 0; i < upperCasePhrase.length; i++) {
        const char = upperCasePhrase[i];

        // Si le caractère est un espace, ajouter une barre oblique (espace entre les mots)
        if (char === ' ') {
            morsePhrase += '/';
        } else {
            // Vérifier si le caractère est pris en charge
            if (char in morseCode) {
               // Ajouter la correspondance en Morse avec un espace
                morsePhrase += morseCode[char] + ' '; 
            } else {
                // Si le caractère n'est pas pris en charge, ajouter un message d'erreur
                morsePhrase += 'Caractère non pris en charge en Morse ';
            }
        }
    }

    return morsePhrase.trim(); // Supprimer les espaces superflus en fin de chaîne
}