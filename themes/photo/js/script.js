var Drupal = Drupal || {};

(function ($, Drupal, Bootstrap) {
    "use strict";
	$(window).on('load', function() {
	    $('.pack').pack();
	    if (typeof CKEDITOR !== "undefined") {
	      CKEDITOR.config.autoParagraph = false;
	    }
	});
	var photoCarousel = $('.photo-slider');
	var lastRow = $('.images .row:last-child');
	var lastCol = $('.images .row:last-child div');
	var imgLength = $('.images .row:last-child img').length;
	$('body').addClass("load");

	if (imgLength === 1) {
		lastCol.removeClass('col-lg-12');
		lastCol.addClass('col-lg-4 col-sm-4');

	} else if (imgLength === 2) {
		lastCol.removeClass('col-lg-12');
		lastCol.addClass('col-lg-6 col-sm-6');
	}

	$('.images').find('a').on('click', function(){
		var imageIndex = $(this).data('index');
		localStorage.setItem('index', imageIndex);
	});

	if (photoCarousel.length > 0) {
		var indexVal = parseInt(localStorage.getItem('index'));

		$(photoCarousel).slick({
		  infinite: true,
		  initialSlide: indexVal,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true,
		  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		  nextArrow: '<button type="button" class="slick-next">Next</button>'
		});
	}

	var openNav = $('.open'),
		closeNav = $('.closebtn'),
		navPanel = $('#mySidenav');


	$(openNav).on('click', function(e){
		e.preventDefault();
		// $(navPanel).css('width', '250px');
		$(navPanel).css('left', '0px');
	});

	$(closeNav).on('click', function(e){
		e.preventDefault();
		// $(navPanel).css('width', '0px');
		$(navPanel).css('left', '-250px');
	});
})(window.jQuery, window.Drupal, window.Drupal.bootstrap);