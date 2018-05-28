// Générateur
function* Fabrique_A_Id(type = "CLI"){
    start = 1;

    while(true){
        yield type + start++;
    }
}

let FabriqueIdClients = Fabrique_A_Id();

console.log(FabriqueIdClients.next().value);
console.log(FabriqueIdClients.next().value);
console.log(FabriqueIdClients.next().value);

let FabriqueIdProduits = Fabrique_A_Id('PDT');
console.log(FabriqueIdProduits.next().value);
console.log(FabriqueIdProduits.next().value);
