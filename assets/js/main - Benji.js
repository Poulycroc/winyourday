var main = document.getElementsByClassName("defi_du_jour_accueil"),
	photos = document.getElementsByClassName("photos_defi_du_jour"),
	//btnCloser = document.getElementsByClassName("closer"),
	btnOpener = document.getElementsByClassName("accepter_defi_jour");

btnOpener[0].addEventListener("click", function(){
	main[0].classList.add("photos--open");
	photos[0].classList.add("photos--open");
});	