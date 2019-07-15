// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;
var numeri = [];

// genero i 5 numeri casuali
for (var i = 0; i < 5; i++) {
	numeri.push(Math.floor(Math.random() * 50 + 1));
}
console.log('Numeri da indovinare: ' + numeri);

// li visualizzo
alert("Ricordati questi numeri: " + numeri);

//parte il timer e indico la funzione da fare a tempo scaduto
setTimeout(contaRisposteGiuste,3000);


function contaRisposteGiuste() {
	console.log("Tempo scaduto!");
	var input, numeriInseriti = [], numeriEsatti = [];

	for (var i = 0; i < 5; i++) {
		input = prompt("Inserisci un numero che ti ricordi:");
		// controllo che sia presente nei numeri da ricordare
		numeriInseriti.push(input);
	}
	console.log('Numeri ricordati: ' + numeriInseriti);
}

