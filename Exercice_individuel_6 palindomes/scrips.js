


const dayDate = new Date(2022, 1, 22);
let firstDateString = dayDate.toLocaleDateString('fr-FR')
console.log("firstDate"+firstDateString);

function decomposeDate(dateEnString){
    //let newDateEnString = String(dateEnString);
    let part = dateEnString.split("/"); 
    let day = parseInt(part[0]); 
    let month =parseInt(part[1]); 
    let year = parseInt(part[2]); 
    return [day, month, year]; 
}
    
function maxDaysInMonth(month, year){
    switch(month){

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 4:
        case 6:
        case 9:
        case 11:
            return 30; 
        case 2:
        if (year % 4 === 0){
            return 29; 
        }else{
            return 28; 
            }   
        }
}    
function isValidDate(day, month, year) {
    if (
        month < 1 || month > 12 ||
        year < 1000 || year > 9999 ||
        day < 1 || day > maxDaysInMonth(month, year)
        || isNaN(month) || isNaN(year) || isNaN(day)
    ) {
        return false;
    }
    return true;
}
    
// let isValid = false;
// while (!isValid) {
//     let [day, month, year] = decomposeDate(firstDateString);
//     isValid = isValidDate(day, month, year);
//     if (isValid === false) {
//         alert("Date invalide");
//     }
//}
function isPalindrome(dateEnString){
    let [newDay, newMonth, newYear] = decomposeDate(dateEnString);
    let dayStr = String(newDay); 
    let monthStr = String(newMonth); 
    let yearStr = String(newYear);
    let dayReverseStr = "";
    let monthReverseStr ="";
    let yearReverseStr = "";
    // inversement les chiffre du jour
    if (newDay < 10){
        dayReverseStr = dayStr + "0";
    }else{
        for(let i = dayStr.length-1 ;i >= 0; i--){
            dayReverseStr += dayStr[i]   
        }
    }
    //inversement les chiffre du mois
    if(newMonth < 10){
        monthReverseStr= monthStr + "0";
    }else{
        for(let i = monthStr.length-1 ;i >= 0; i--){
            monthReverseStr+= monthStr[i]   
        }
    }
    //inversement les chiffres de l'année 
    for (let i = yearStr.length-1 ;i >= 0; i--){
        yearReverseStr += yearStr[i] 
    }  

    //formation de la nouvelle date
    let lengthStr = yearReverseStr.length;
    let middleStr = Math.floor(lengthStr / 2);
    let finalDay = yearReverseStr.slice(0, middleStr);
    let finalMonth = yearReverseStr.slice(middleStr, lengthStr)
    let finalYear = monthReverseStr + dayReverseStr ; 
    let newDate = finalDay + "/" + finalMonth + "/" + finalYear;    
    console.log ("Date d'entrée: " + firstDateString); 
    console.log("Date de sortie inversé: " + newDate); 

    
    //condition de controle de palindrome
    let finalDayNumber = parseInt(finalDay);
    let finalMonthNumber = parseInt(finalMonth);
    let finalYearNumber= parseInt(finalYear);
    

    
    if (finalDayNumber === newDay
        && finalMonthNumber === newMonth
        && finalYearNumber === newYear){
         alert("la date " + dateEnString + " est un palindrome");  
         return true; 
    }else{
       
        return false; 
    }       
    
}
isPalindrome(firstDateString)


function getNextPalindromes(date, x) {
    let arrayPalindrome = [];
    let [newDay, newMonth, newYear] = decomposeDate(date);
    
    for (let i = 0; i < x; ) {
        if (newDay > maxDaysInMonth(newMonth, newYear)) {
            newMonth++;
            newDay = 1;
        }
        if (newMonth > 12) {
            newYear++;
            newMonth = 1;
        }
        
        let dateString = `${newDay}/${newMonth}/${newYear}`;
        if (isPalindrome(dateString)) {
            arrayPalindrome.push(dateString);
            i++; // Ne comptez que les dates palindromiques trouvées
        }
        
        newDay++; // Avancez d'un jour pour la prochaine itération
    }
    
    return arrayPalindrome;
}

getNextPalindromes(firstDateString, 8)