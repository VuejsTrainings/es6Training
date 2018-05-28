let pays = new Map();
let italia = {nom:"Italie"};



pays.set("France",{capitale:"Paris",population:66});
pays.set("Allemagne",{capitale:"Berlin",population:82});
pays.set("Allemagne",{capitale:"Bonn",population:70});
pays.set(italia,{capitale:"Rome",population:65});
pays.set(italia,{capitale:"Milan",population:12});
pays.set("Algérie",{capitale:"Alger",population:40});
pays.set("Albanie","Tirana");


// Obtention d'un élément
console.log(pays.get(italia));

// Parcours
for(let infos of pays){
    console.log(infos);
}

