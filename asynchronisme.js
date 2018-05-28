// Historiquement: fonction de callback
setTimeout(function(){
    let id =  Math.floor(Math.random() * 9999 ) + 1;
    console.log('Premier appel satisfait!');
    console.log('id:', id)    
    setTimeout(function(){
        let values = [];
        let maxValues = Math.random()*10;
        for(let i = 0; i < maxValues; i++){
            values.push(String.fromCharCode(Math.floor(Math.random() * 26) + 64));
        }
        console.log('Deuxième appel satisfait!');
        console.log('Valeurs:',values);
        let delai = 100;
        values.forEach(function(item,index){
            let texte = item;
            setTimeout(function() {
                texte += String.fromCharCode(texte.charCodeAt(0)+1);
                // console.log(texte);
                values[index] = texte;
            }, delai);
        });
        setTimeout(function(){
            console.log('Valeurs modifiées:',values);
        },delai*values.length);
    },500);
},1000);
console.log('Discussion avec une API sur un serveur lancée...');

