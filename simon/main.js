// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;
var numeri = [];

// genero i 5 numeri casuali
for (var i = 0; i < 5; i++) {
	numeri.push(Math.floor(Math.random() * 50 + 1));
}

// li visualizzo
alert("Ricordati questi numeri: " + numeri);

//parte il timer e indico la funzione da fare a tempo scaduto
setTimeout(contaRisposteGiuste, 30000);

function contaRisposteGiuste() {
	console.log("Tempo scaduto!");
	var input, numeriEsatti = [];

	// faccio inserire all'utente i numeri che si ricorda
	for (var i = 0; i < 5; i++) {
		input = parseInt(prompt("Inserisci un numero che ti ricordi:"));
		// controllo che sia presente nei numeri da ricordare
		for (var j = 0; j < 5; j++) {
			if (input === numeri[j]) {
				numeriEsatti.push(input);
			}
		}
	}

	// stampo il risultato
	if (numeriEsatti.length === 0) {
		alert('Memoria di ferro! Non ne hai azzeccato manco uno :D');
	} else if (numeriEsatti.length === 1) {
		alert('Ti sei ricordato/a 1 numero su 5! ' + numeriEsatti);
	} else if (numeriEsatti.length === 5) {
		alert('SIGNORI! 5 su 5! ' + numeriEsatti);
	} else {
		alert('Ti sei ricordato/a ' + numeriEsatti.length + ' numeri su 5! ' + numeriEsatti);
	}
}

