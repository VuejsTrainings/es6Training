'use strict';
let language = 'en';
let unObjetIterable = {
    GB:{
        en : {nom:'Great Britain',capitale:'London'},
        fr : {nom:'Grande-Bretagne',capitale:'Londres'},
        it : {nom:'Gran Bretagna',capitale:'Londra'}
    },
    DE:{
        en : {nom:'Germany',capitale:'Berlin'},
        fr : {nom:'Allemagne',capitale:'Berlin'},
        it : {nom:'Germania',capitale:'Berlino'},
        de : {nom: 'Deutschland',capitale:'Berlin'}
    },
    FR:{
        en : {nom:'France',capitale:'Paris'},
        fr : {nom:'France',capitale:'Paris'},
        it : {nom:'Francia',capitale:'Parigi'},
        de : {nom: 'Frankreich',capitale:'Paris'}
    },
    IT:{
        en : {nom:'Italy',capitale:'Rome'},
        fr : {nom:'Italie',capitale:'Rome'},
        it : {nom:'Italia',capitale:'Roma'},
        de : {nom: 'Italien',capitale:'Rom'}
    },
    DZ:{
        en : {nom:'Algeria',capitale:'Algiers'},
        fr : {nom:'Algérie',capitale:'Alger'},
        it : {nom:'Algeria',capitale:'Algeri'},
        de : {nom: 'Algerien',capitale:'Algiers'}
    }
};


unObjetIterable[Symbol.iterator] = () => {
    return {
        next() {
            if(this._index===0){
                for(let code in unObjetIterable){
                    this._attrs.push(code);
                    this._nb++;
                }    
            }

            let attributSuivant = unObjetIterable[this._attrs[this._index]];
            this._index++;
            
            if(this._index < this._nb+1 ){
                return {
                    value: attributSuivant[language],
                    done: false
                };
            }else{
                return {
                    done: true
                };
            }
            
            
        },
        _index:0,
        _attrs:[],
        _nb:0
    };
};

for(let pays of unObjetIterable){
    console.log(pays);
}
// console.log(Object.entries(unObjetIterable));
// console.log(Object.keys(unObjetIterable));
// console.log(Object.values(unObjetIterable));