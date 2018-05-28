let notes = [5,15,12,13,18,15,12];
console.log(notes);

// Création d'un Set à partir des notes (Array)
let notesUniques = new Set(notes);
console.log(notesUniques);

// Ajout d'une nouvelle valeur
notesUniques.add(11);
console.log(notesUniques);

// Suppression d'une valeur
notesUniques.delete(5);
console.log(notesUniques);

// Obtention de toutes les valeurs
let notes2 = notesUniques.values();
console.log(notes2);

// Conversion des valeurs en tableau
let notes3 = [...notes2];
console.log(notes3);

// Conversion des valeurs en tableau, autre méthode
let notes4 = Array.from(notesUniques.keys());
console.log(notes4);

// Test de la présence d'une valeur dans le Set
console.log(notesUniques.has(10));