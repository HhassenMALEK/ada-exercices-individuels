function parseTrip(ticket){
    let words= ticket.split(" ")
    let client= words[0]
    let start=  parseInt(words[1])
    let duration= parseInt(words[2])
    let  price= parseInt(words[3])
    let  donneeBienRangee= { 'client': client, 'start':start, 'duration':  duration, 'price': price}
    return donneeBienRangee
}


let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
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
console.log(parsedTrips)

function getTripsPrice(trips) {
    let sumPrice = 0;
    for (let i = 0; i < trips.length; i++) {
        sumPrice += trips[i].price;
    }
    return sumPrice;
}

console.log(getTripsPrice(parsedTrips));





























































