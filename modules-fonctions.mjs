const TEMPS_JOUR = 24*3600000;
const TEMPS_ANNEE = 365.25*TEMPS_JOUR;


function ecartDatesEnAnnees(dt1,dt2){
    return ecartDates(dt1,dt2,TEMPS_ANNEE);
}

function ecartDatesEnJours(dt1,dt2){
    return ecartDates(dt1,dt2,TEMPS_JOUR);
}

function ecartDates(dt1,dt2,tempsUnite){
    if(!(dt1 instanceof Date) || !(dt2 instanceof Date)) {
        return NaN;
    } else {
        return Math.abs(
                Math.floor(
                    (dt1.getTime()-dt2.getTime())
                        /
                    tempsUnite
                )
            );
    }
}

export {ecartDatesEnAnnees,ecartDatesEnJours,TEMPS_JOUR}