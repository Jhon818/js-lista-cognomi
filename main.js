// chiedi all’utente il cognome
 var cognome = prompt("inserisci qui il tuo cognome");

 var cognomi = ["Bianchi","Neri","Rossi","Verdi","Gialli"];

// inseriscilo in un array
 cognomi.push(cognome);
 
//  stampa la lista ordinata alfabeticamente
 cognomi.sort();

//  scrivi la posizione umana
var lastNameIndex = cognomi.indexOf(cognome);
lastNameIndex++;

for (var i = 0; i < cognomi.length; i++) {
  
    console.log(cognomi[i]);
}