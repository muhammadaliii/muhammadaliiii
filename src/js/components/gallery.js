(function($){

	$('.index').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});


		// lazyLoad: 'onDemand',
	// $('.work .work-list').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	infinite: false,
	// 	autoplay: false,
	// 	pauseOnFocus: false,
	// 	pauseOnHover: false,
	// 	centerMode: false,
	// 	arrows: true,
	// 	dots: true,
	// 	prevArrow: '<span class="button-arrow prev-arrow"></span>',
	// 	nextArrow: '<span class="button-arrow next-arrow"></span>',
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: true,
	// 				infinite: false,
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				arrows: true,
	// 				infinite: false,
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			}
	// 		}
	// 	]
	// });

})(jQuery);