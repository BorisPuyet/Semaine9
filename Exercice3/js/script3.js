var $liste=document.getElementById("liste");
var $texte=document.getElementById("texte");
var $supprimer=document.getElementById("supprimer");
var $restaurer=document.getElementById("restaurer");



var tableau = ["1","2","3"];


function afficherListe() {
	var elements="";
	for (var i=0; i < tableau.length ; i++) {
		elements+= "<li>" + tableau[i] + "</li>";
	}
	$liste.innerHTML=elements;
}


function selectionne(e) {
	e.target.classList.toggle("selected");
}

function supprimer() {
	for (var i = 0; i < $liste.children.length ; i++) {
		if ($liste.children[i].classList.contains("selected")){
			$liste.children[i].classList.add("noDisplay");
		}
	}
}

function restaurer(){
	for (var i = 0; i< $liste.children.length ; i++) {
		$liste.children[i].classList.remove("noDisplay");
	}
}

$liste.onclick=selectionne;
$supprimer.onclick=supprimer;
$restaurer.onclick=restaurer;

afficherListe();