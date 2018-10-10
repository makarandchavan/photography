$(window).on('load', function() {
    $('.pack').pack();
});

$(function(){
	"use strict";

	var photoCarousel = $('.photo-slider');

	$('.images').find('a').on('click', function(){
		var imageIndex = $(this).data('index');
		localStorage.setItem('index', imageIndex);
	});

	if (photoCarousel.length > 0) {
		
		var indexVal = parseInt(localStorage.getItem('index'));
		console.log(indexVal);
		$(photoCarousel).slick({
		  infinite: false,
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
})