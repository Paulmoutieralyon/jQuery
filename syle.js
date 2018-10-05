$(document).ready(function () {

	var image = [
		"https://images.pexels.com/photos/321441/pexels-photo-321441.jpeg?h=350&auto=compress&cs=tinysrgb",
		"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?h=350&auto=compress&cs=tinysrgb",
		"https://images.pexels.com/photos/319830/pexels-photo-319830.jpeg?h=350&auto=compress&cs=tinysrgb",
		"https://images.pexels.com/photos/325678/pexels-photo-325678.jpeg?h=350&auto=compress&cs=tinysrgb"
	];

	let container = document.getElementById('slider');
	let template = document.getElementById('images');

	for (let i = 0; i < image.length; i++) {

		let item = template.cloneNode(true);

		item.getElementsByClassName('img')[0].src = image[i];
		container.appendChild(item);
	};

	// options
	var speed = 500; //transition speed - fade
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 5000; //auto slider speed

	// add first initial active class
	$("#slider #images").first().addClass("active");

	// hide all slides
	$("#slider #images").hide;

	// show only active class slide
	$("#slider #images").show();

	// Next Event Handler
	$('#next').on('click', nextSlide); // call function nextSlide

	// Prev Event Handler
	$('#prev').on('click', prevSlide); // call function prevSlide

	// Auto Slider Handler
	if (autoswitch == true) {
		setInterval(nextSlide, autoswitch_speed); // call function and value 4000
	}

	// Switch to next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('#slider #images').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('#slider #images').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	// Switch to prev slide
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('#slider #images').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('#slider #images').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});