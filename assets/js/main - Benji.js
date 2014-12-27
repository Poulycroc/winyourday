var accepter = document.getElementsByClassName("accepter_defi_jour"),
	refuser = document.getElementsByClassName("refuser_defi_jour"),
	photos = document.getElementsByClassName("bouton_photos_defi"),
	photos_du_jour = document.getElementsByClassName("photos_defi_du_jour"),
	defi_du_jour = document.getElementsByClassName("defi_du_jour_accueil");
	bouton_retour = document.getElementsByClassName("bouton_retour")


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