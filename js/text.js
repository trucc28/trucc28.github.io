$(window).scroll(function(event) {
	if ($(window).scrollTop() >= $('#about').offset().top) {
		// console.log('fixed menu');
		$('.navbar').addClass('fixed-top');
		$('header').addClass('dummy-padding');

	}
	else {
		// console.log('normalz menu');
		$('.navbar').removeClass('fixed-top');
		
	}
});
