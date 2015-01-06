$(document).ready(function() {

	// LOGIN

	$(".noAccount, .alreadyAccount").click(function () {
		$('.btn__login--connexion, .noAccount, .labelEmail, .mail, .btn__login--inscription, .alreadyAccount').toggleClass('hide');
	});

	

// ANIMS

	// PAGE SWITCH

	$(".btn__next").on('click', function () {
		event.preventDefault();
	    $(this).parents('.page__profile').removeClass('displayed');
	    $(this).parents('.page__profile').siblings('.page').addClass('displayed');
	});

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