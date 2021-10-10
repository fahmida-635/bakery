		// WOW JS 
    new WOW().init();
	
	    // Magnific Images
	$('.click-link').magnificPopup(
		{
			type:'image',
			gallery:{
				enabled:true
			}
		}
    );
	
	   // Responsive Menu
	$('#menu').slicknav();

		// One Page Js
	$('#menu').onePageNav();

		// popular-images Slider Js
	$(".popular-images").owlCarousel({
		items:3,
		margin:30,
		loop:true,
		mouseDrag:false,
		autoplay:true,
		center:true,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
	});

		// Testimonial Slider Js
	$(".testimonial").owlCarousel({
		items:1,
		margin:30,
		loop:true,
		mouseDrag:true,
		autoplay:true,
		center:true,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
	});

		// team-images Slider Js
	$(".team-images").owlCarousel({
		items:3,
		margin:30,
		loop:true,
		mouseDrag:false,
		autoplay:true,
		center:true,
		nav:true,
		navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
	});
	
	/*
		// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	
		// init Isotope
	var $grid = $('.grid').isotope({
		// options
	});
	
		// Masonary
		$('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: 1
		}
	  })
	*/
	
	
	jQuery(window).load(function () {

		/* Sticky Header
		============================*/
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 20) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});

		/* Preloader Active
		============================*/
		$(".preloader").fadeOut()
	});
	
	
	
	
	
	