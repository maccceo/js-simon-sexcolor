// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

// oggetto DOM con l'elemento HTML <h1>
var h1Element = document.getElementById("name");

var nome = prompt("Ciao, inserisci il tuo nome:");
var sesso = prompt("Inserisci il sesso (M o F):").toLowerCase();
// controllo che l'utente abbia inserito un formato corretto
var inputCorretto = false;
while (inputCorretto === false) {
	if (sesso === "m" || sesso === "f") {
		inputCorretto = true;
	} else {
		sesso = prompt("No dai, inserisci il sesso (M o F):").toLowerCase();
	}
}

// # # VERSIONE 1 MODIFICANDO DIRETTAMENTE LO STILE DELL'ELEMENTO H1 # #
// // converto il sesso dell'utente in colore
// if (sesso === "m") {
// 	sesso = "#3078ff";	// blu
// } else if  (sesso === "f") {
// 	sesso = "#f87afa";	// rosa
// }

// // stampo nell'HTML il nome col colore del sesso
// h1Element.innerHTML = "Ciao " + nome + "!";
// h1Element.style.color = sesso;


// # # VERSIONE 2 TOGGLANDO LA CLASSE SESSO CON RELATIVO COLORE # #
if (sesso === "m") {
	h1Element.className = h1Element.classList + " maschio";
} else if  (sesso === "f") {
	h1Element.className = h1Element.classList + " femmina";
}

h1Element.innerHTML = "Ciao " + nome + "!";