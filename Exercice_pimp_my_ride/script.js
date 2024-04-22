function parseTrip(ticket){
    let words= ticket.split(" ")
    let client= words[0]
    let start=  parseInt(words[1])
    let duration= parseInt(words[2])
    let  price= parseInt(words[3])
    let  donneeBienRangee= { 'client': client, 'start':start, 'duration':  duration, 'price': price}
    return donneeBienRangee
}
console.log(parseTrip("Roger 0 5 10"))

console.log("----------------------------------")

let tripsToParse = [
    "Roger 0 5 10",
	"Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7",
]
function parseTrips(tickets){
    let storageData=[]
    for(i=0; i < tickets.length; i++){
        let donneesBienRangees=parseTrip(tickets[i])
        storageData.push(donneesBienRangees)
    }
    return storageData 
}

let parsedTrips = parseTrips(tripsToParse)
console.log("Tableau")
console.log(parsedTrips)

console.log("----------------------------------")

function getTripsPrice(trips) {
    let sumPrice = 0;
    for (let i = 0; i < trips.length; i++) {
        sumPrice += trips[i].price;
    }
    return sumPrice;
}
console.log(getTripsPrice(parsedTrips));

console.log("----------------------------------")

function checkCompatibility(travelA, travelB) {
    let landingTime = travelA.start + travelA.duration
   if (landingTime < travelB.start) {
        return {travelA, travelB}
   }  else 
    return false 
}



let fisrtTripA =  "Roger 0 5 10"
let fisrtTripB =  "Perdita 8 10 8"
let firstTripC =   "Pongo 1 7 14"

let tripA =parseTrip(fisrtTripA)
let tripB =parseTrip(fisrtTripB)
let tripC =parseTrip(firstTripC)

console.log("tripA",  tripA)
console.log("tripB",  tripB)
console.log("tripC",  tripC)

console.log(checkCompatibility(tripA, tripB))

console.log("----------------------------------")

function findCompatibilities(trips) {
    let comptableList=[]
    let Compatibilities= []
    for(let i = 0; i < trips.length ; i++){
        for( let n = 0 ; n < trips.length; n++){
             Compatibilities = checkCompatibility(trips[i], trips[n])
                comptableList.push(Compatibilities)
                if (Compatibilities == false){
                    comptableList.pop(Compatibilities) 
                }
        }
    } 
  return comptableList
  }
  let controlComptability = findCompatibilities(parsedTrips)
console.log(controlComptability)
console.log("---------------------------------")


function findBestPrice(trips){
    let sumPrices = 0
    let totalPrices = []
    let namesPrices = []
    let bestPrise = 0 
    // let namePriceA = ""
    // let namePriceB = ""
    for(i = 0; i < trips.length ; i++){
        sumPrices = trips[i].travelA.price + trips[i].travelB.price
        // namePriceA = trips[i].travelA.client
        // namePriceB = trips[i].travelB.client
        totalPrices.push(sumPrices)
        // namesPrices.push(namePriceA)
        // namesPrices += namesPrices.push(namePriceB)
        bestPrise = Math.max(...totalPrices)
    }
 return bestPrise
}
console.log("----------------------------")
console.log("best price est :", findBestPrice(controlComptability))
















































