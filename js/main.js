/**
 * 
 * Oggetti
 * Creare un oggetto che descriva uno studente
 * lo studente avrà  le seguenti proprietà: nome, cognome e età.
 * Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
 * 
 * OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
 * Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.
 * 
 */

var studente = {
    nome : 'Cosimo',
    cognome : 'Paiano',
    eta : 40
  }
  
  for (var key in studente) {
    console.log(key + ': ' + studente[key]);
  }
