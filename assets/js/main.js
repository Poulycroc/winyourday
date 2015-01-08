$(document).ready(function() {

// LOCAL STORAGE

	var flagLoggedIn = 0;
		flagUsername = 0;
		flagPassword = 0;
		flagMail = 0;
		username = document.getElementById("username");
		password = document.getElementById("password");
		mail = document.getElementById("mail");

	// LOGIN TESTS

	$(".btn__login").click( function (){

		// testing the username value

		if (username.value == null || username.value == ""){
			$("#username").val("").attr("placeholder" , "Ne m'oublie pas !").css("box-shadow" , "0 0 3px 1px #2fdaff");
		}else{
			if (username.value.length < 4){
				$("#username").val("").attr("placeholder" , "C'est un peu court !").css("box-shadow" , "0 0 3px 1px #2fdaff");
			}else{
				if (username.value.length > 20){
					$("#username").val("").attr("placeholder" , "C'est un peu long !").css("box-shadow" , "0 0 3px 1px #2fdaff");
				}else{
					$("#username").css("box-shadow" , "none");
					localStorage.setItem("user", username.value);
					flagUsername = 1;
				}
			}
		};

		// testing the password value

		if (password.value == null || password.value == ""){
			$("#password").val("").attr("placeholder" , "Ne m'oublie pas !").css("box-shadow" , "0 0 3px 1px #2fdaff");
		}else{
			if (password.value.length < 8){
				$("#password").val("").attr("placeholder" , "C'est un peu court !").css("box-shadow" , "0 0 3px 1px #2fdaff");
			}else{
				if (password.value.length > 25){
					$("#password").val("").attr("placeholder" , "C'est un peu long !").css("box-shadow" , "0 0 3px 1px #2fdaff");
				}else{
					$("#password").css("box-shadow" , "none");
					localStorage.setItem("user", password.value);
					flagPassword = 1;
				}
			}
		};

		// testing the mail value

		if ($(".btn__login--inscription").click( function (){
			if (mail.value == null || mail.value == ""){
				$("#mail").val("").attr("placeholder" , "Ne m'oublie pas !").css("box-shadow" , "0 0 3px 1px #2fdaff")
			}else{
				if(mail.value.indexOf("@") == -1){
					$("#mail").val("").attr("placeholder" , 'Il faut un "@" !').css("box-shadow" , "0 0 3px 1px #2fdaff")
				}else{
					$("#mail").css("box-shadow" , "none");
					flagMail = 1;
				}
			};

			// checking if all fields are filled
			if (flagUsername == 1 & flagPassword == 1 & flagMail == 1){
				flagLoggedIn = 1;
			}else{
				flagUsername = 0;
				flagPassword = 0;
				flagMail = 0;
			}
		}));
	});

		

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