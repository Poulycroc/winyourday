$(document).ready(function() {

// LOCAL STORAGE

	var flagLoggedIn = 0;
		flagUsername = 0;
		flagPassword = 0;
		flagMail = 0;
		username = document.getElementById("username");
		password = document.getElementById("password");
		mail = document.getElementById("mail");

	// INSCRIPTION

	$(".btn__login--inscription").click( function (){

		// testing the username value
		
		if (username.value.length >= 4 & username.value.length <= 20){
			console.log("username ok")
			localStorage.setItem("user", username.value);
			flagUsername = 1;
		}else{
			$("#username").attr("placeholder", "I must be 4 to 20 charact.");
		}

		// testing the password value
		if (password.value.length >= 8 & password.value.length <= 25){
			console.log("password ok")
			localStorage.setItem("password", password.value);
			flagPassword = 1;
		}

		if (mail.value !== null || mail.value !== ""){
			flagMail = 1;
		}

		// checking if all fields are filled
		if (flagUsername == 1 & flagPassword == 1 & flagMail == 1){
			flagLoggedIn = 1
			console.log("login complete")
		}

	});

		// // VALIDATE PLUGIN

		// $(".login__form").validate({
		// 	rules: {
		// 		username: {
		// 			required: true,
		// 			minlength: 4,
		// 			maxlength: 20
		// 	    }
		// 	    password: {
		// 			required: true,
		// 			minlength: 4,
		// 			maxlength: 20
		// 	    }
		// 	    mail: {
		// 			required: true,
		// 			email: true
		// 	    }
		// 	}

		// 	messages: {
		// 		username: {
		// 			required: "Ce champ est requis",
		// 			minlength: "Doit être 4 à 20 caract.",
		// 			maxlength: "Doit être 4 à 20 caract."
		// 		}
		// 		password: {
		// 			required: "Ce champ est requis",
		// 			minlength: "Doit être 4 à 20 caract.",
		// 			maxlength: "Doit être 4 à 20 caract."
		// 		}
		// 		mail: {
		// 			required: "Ce champ est requis"
		// 		}
		// 	}

		// });

	// CONNEXION

	// $(".btn__login--connexion").click( function(){

	// 	localStorage.setItem("password", password.value);

	// });

// ANIMS

	// PAGE SLIDE



	$(".btn__loginOpen").click( function () {
		event.preventDefault();
	    $(this).parents('.page__profile').addClass('hidden');
	    $('.login').addClass('active');
	});

	$(".btn__login").click( function () {
		event.preventDefault();
		if (flagLoggedIn == 1){
		    $('.hidden').removeClass('hidden');
		    $('.login').removeClass('active');
		}
	});

	// LOGIN INSIDE PAGE

	$(".accountStatus").click( function () {
		event.preventDefault();
		$('.mail').toggleClass('roll');
		$('.accountStatus, .btn__login--connexion, .btn__login--inscription').toggleClass('slide');
	});

});