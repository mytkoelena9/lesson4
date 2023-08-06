$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		arrows:false,
		autoplay: true,
		slidesToShow:1,
		speed:1500,
		autoplaySpeed:1200,
		centerMode:true,
		fade: true,
		isFinite:true,
		swipe: true,
	
	});


});

$('.fade').slick({
	dots: true,
	infinite: true,
	speed: 1200,
	fade: true,
	cssEase: 'linear'
  });