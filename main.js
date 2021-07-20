// chiedi all’utente il cognome
 var cognome = prompt("inserisci qui il tuo cognome");

 var cognomi = ["Bianchi","Neri","Rossi","Verdi","Gialli"];

//  stampa la lista ordinata alfabeticamente
 cognomi.sort();
//  inseriscilo in un array con altri cognomi
//  while (i < 5) {
//      var i = 0;
//      cognomi = cognomi + cognome;
//      console.log(cognomi[i]);
//      i++;
//  }
 

for (var i = 0; i < cognomi.length; i++) {
    cognomi =+ cognome;
    console.log(cognomi[i])  ;
}