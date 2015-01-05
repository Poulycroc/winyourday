$(document).ready(function() {

// LOGIN

	$(".noAccount").click(function () {
		$('.labelEmail').addClass('show');
		$('.mail').addClass('show');
		$('.btn__login--inscription').addClass('show');

		$('.btn__login--connexion').addClass('hide');
		$('.noAccount').addClass('hide');
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