function askName(message) {
    console.log("askName" )
    var promptedString = window.prompt(message);
    return parseInt(promptedString)
}
var Name= promptNumber("Nom:");
    console.log("Bonjour "+Name )