function distanceFromHqInBlocks(start) {
    return Math.abs(start - 42) ;
} ;

function distanceFromHqInFeet(start) {
    return (Math.abs(start - 42) * 264);
} ;

function distanceTravelledInFeet(start, destination) {
    return (distanceFromHqInFeet(destination) - (distanceFromHqInFeet(start))) ;
} ;

function  calculatesFarePrice(start, destination) {
    let truthers = (distanceFromHqInFeet(destination) - (distanceFromHqInFeet(start)));
    let resp 
    if (truthers < 400) {
            resp = 0 ;
    } else if ((truthers > 400) && (truthers < 2000)) {
            resp = ((truthers - 400) * 0.02);
    } else if ((truthers > 2000) && (truthers < 2500)) {
            resp = 25 ;
    } else if (truthers > 2500) {
            resp = 'cannot travel that far' ;
    }
    return resp
}