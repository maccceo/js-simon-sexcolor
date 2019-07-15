// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

// oggetto DOM con l'elemento HTML <h1>
var h1Element = document.getElementById("name");

var nome = prompt("Ciao, inserisci il tuo nome:");
var sesso = prompt("Inserisci il sesso (M o F):").toLowerCase();
console.log(sesso);

// converto il sesso dell'utente in colore
if (sesso === "m") {
	sesso = "#3078ff";
} else if  (sesso === "f") {
	sesso = "#f87afa";
}

h1Element.innerHTML = "Ciao " + nome + "!";
h1Element.style.color = sesso;