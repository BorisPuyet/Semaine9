var $liste = document.getElementById("liste");
var $prenom = document.getElementById("prenom");
var $nom = document.getElementById("nom");
var $numero = document.getElementById("numero");
var $ajouter = document.getElementById("ajouter");

var $recherche = document.getElementById("recherche");
var $rechercher = document.getElementById("rechercher");
var $resultatRecherche = document.getElementById("resultatRecherche");

var contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"
}, {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

function afficherListe() {
    var elements = "";
    for (var i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}


function rechercher() {
	recherche=$recherche.value;
	elements="";
	for (var i=0; i < contacts.length; i++) {
		if (recherche == contacts[i].prenom || recherche == contacts[i].nom || recherche == contacts[i].numero) {
			elements="<li>" + texteContact(contacts[i]) + "</li>";
			
		}
	}
	$resultatRecherche.innerHTML=elements;
}

$ajouter.onclick = ajouter;
$rechercher.onclick = rechercher;
afficherListe();