$(document).ready(function() {

	// LOGIN

	$(".accountStatus").click(function () {
		$('.mail').toggleClass('roll');
		$('.accountStatus, .btn__login--connexion, .btn__login--inscription').toggleClass('slide');
	});

	

// ANIMS

	// PAGE SLIDE

	$(".btn__loginOpen").on('click', function () {
		event.preventDefault();
	    $(this).parents('.page__profile').addClass('hidden');
	    $('.login').addClass('active');
	});

	$(".btn__login").on('click', function () {
		event.preventDefault();
	    $('.hidden').removeClass('hidden');
	    $('.login').removeClass('active');
	});

});