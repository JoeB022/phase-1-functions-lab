
function distanceFromHqInBlocks(pickUpLocation) {
    const hqLocation = 42;
    return Math.abs(pickUpLocation - hqLocation); // Returns the absolute distance in blocks
}

function distanceFromHqInFeet(pickUpLocation) {
    const blocks = distanceFromHqInBlocks(pickUpLocation);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const blockTravelled = Math.abs(destination - start); //calculating blocks distance
    return blockTravelled * 264;
}
function calculatesFarePrice(start,destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
     }
     else if(distance >400 && distance <=2000) {
        return (distance - 400) * 0.02;
    }
    else if(distance >=2000 && distance <2500) {
        return 25;
    }
    else{
        return "cannot travel that far"
    }
}