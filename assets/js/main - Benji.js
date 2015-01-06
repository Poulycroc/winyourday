var accepter = document.getElementsByClassName("defi_du_jour__bouton--accepter"),
	refuser = document.getElementsByClassName("defi_du_jour__bouton--refuser"),
	photos = document.getElementsByClassName("bouton__photos_defi"),
	photos_du_jour = document.getElementsByClassName("photos_defi_du_jour"),
	defi_du_jour = document.getElementsByClassName("defis"),
	bouton_retour = document.getElementsByClassName("photos_du_jour__header--retour");


accepter[0].addEventListener("click", function(){
	accepter[0].classList.add("activated");
	refuser[0].classList.add("activated");
	photos[0].classList.add("activated");
});	


refuser[0].addEventListener("click", function(){
	accepter[0].classList.add("activated");
	refuser[0].classList.add("activated");
	photos[0].classList.add("activated");
});	

photos[0].addEventListener("click", function(){
	photos_du_jour[0].classList.add("open");
	defi_du_jour[0].classList.add("open");
	bouton_retour[0].classList.add("open");
});

bouton_retour[0].addEventListener("click", function(){
	photos_du_jour[0].classList.remove("open")
	defi_du_jour[0].classList.remove("open");
	bouton_retour[0].classList.remove("open");
})