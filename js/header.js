$(function () {

	/*Fixed Header*/
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	$(window).on("scroll load resize", function () {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}
	});




	/*Smooth Scroll*/

	$("[data-scroll]").on("click", function (event) {

		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 60
		}, 700);

	});

	/*Nav Toggle*/

	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	});
});