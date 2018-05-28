// ES6 : Promesses

// Obtient un id aléatoire asynchrone
let getId = () => {
    let promise = new Promise( (resolve,reject) => {
        setTimeout( () => {
            let id =  Math.floor(Math.random() * 9999 ) + 1;
            if(id > 7500){
                reject( "ID trop grand:" + id );
            }
            // J'ai mon id: promesse tenue!
            resolve(id);
        },1000);
    });
    return promise;
};

// Obtient des valeurs textes aléatoires de façon asynchrone
let valuesPromise = ( id => {
    console.log('Premier appel satisfait!');
    console.log('id:', id);
    let valuesPromise = new Promise( (resolve,reject) => {
        setTimeout( () => {
            let values = [];
            let maxValues = Math.random()*10;
            for(let i = 0; i < maxValues; i++){
                values.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
            }
            resolve(values);
        },500);
    });
    return valuesPromise;
});

// Modifie les valeurs reçues, de façon asynchrone (chaque valeur est 
// obtenue de façon asynchrone)
let getModifiedValues = ( originalValues => {
    console.log('Deuxième appel satisfait!');
    console.log('Valeurs:',originalValues);
    let allValuesModifiedPromises = originalValues.map( (item,index) => {
        let texte = item;
        let valeurModifieePromise = new Promise( (resolve,reject) => {
            setTimeout( () => {
                texte += String.fromCharCode(texte.charCodeAt(0)+1);
                resolve(texte);
            },100);    
        });
        return valeurModifieePromise;
    });
    return Promise.all( allValuesModifiedPromises );
});

getId()  
    .then( idPromis => valuesPromise(idPromis) )
    .then( valuesPromises => getModifiedValues(valuesPromises) )
    .then( valuesModifieesPromises => console.log('Valeurs modifiées:',valuesModifieesPromises) )
    .catch( reason => console.log(reason) )
;

console.log('Discussion avec une API sur un serveur lancée...');


