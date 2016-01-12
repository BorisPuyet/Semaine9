var $liste=document.getElementById("liste");
var $texte=document.getElementById("texte");
var $ajouter=document.getElementById("ajouter");
var $supprimer=document.getElementById("supprimer");



var tableau = ["1","2","3"];


function afficherListe() {
	var elements="";
	for (var i=0; i < tableau.length ; i++) {
		elements+= "<li>" + tableau[i] + "</li>";
	}
	$liste.innerHTML=elements;
}


function ajouterElement() {
	tableau.push($texte.value);
	afficherListe();
}

function supprimerElement() {
	tableau.pop();
	afficherListe();
	
}

$ajouter.onclick=ajouterElement;
$supprimer.onclick=supprimerElement;
afficherListe();