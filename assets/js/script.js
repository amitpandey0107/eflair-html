$(document).ready(function () {


        $('.featuredpro').owlCarousel({
            loop:true,
            margin:15,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })

        $('.testimonailslider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })


         $('.clientslider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })



	// Toggle Menu
	$('.mobileicon').on('click', function () {
		$('.menuwrap').toggle();
	});

	$('.carousel').carousel({	
		buttonNav: 'bullets',
		hAlign: 'center',
		vAlign: 'center',
		hMargin: 0.5,
		vMargin: 0.2,
		frontWidth: 420,
		// frontHeight: 750,
		carouselWidth: 930,
		carouselHeight: 550,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		speed: 500,
		directionNav: true,
		autoplay: true,
		autoplayInterval: 5000,
		pauseOnHover: true,
		mouse: true,
		shadow: false,
		reflection: false,
		reflectionHeight: 0.5,
		reflectionOpacity: 0.5,
		reflectionColor: '255,255,255',
		description: false,
		descriptionContainer: '.description',
		backOpacity: 1,
		before: function (carousel) { },
		after: function (carousel) { }
	});

	// /* STICKY MENU */
	// jQuery(function(){
	//     jQuery(window).scroll(function() {
	//         if (jQuery(this).scrollTop() >= 100) {
	//             jQuery('.siteHeader').addClass('stickyTop');
	//         }
	//         else {
	//             jQuery('.siteHeader').removeClass('stickyTop');
	//         }
	//     });
	// });



	// Toggle Main Menu for Mobile View
	jQuery('.mobileMenu').on('click tap', function() {
		jQuery('.fullMenu').show();
		// jQuery('.fullMenu').show('slide', {direction: 'right'}, 500); 
	    // jQuery(this).hide('slide', {direction: 'right'}, 500);
	    setTimeout(function(){ 
	    	jQuery('body').addClass('bodyoverlay');
	    },0);
	    
	});

	jQuery('#sideMenuIcon').on('click tap', function() {
		jQuery('.fullMenu').hide();
		// jQuery('.fullMenu').hide('slide', {direction: 'right'}, 500); 
		// jQuery('.mobileMenu').show('slide', {direction: 'right'}, 500);
		setTimeout(function(){ 
	    	jQuery('body').removeClass('bodyoverlay');
	    },0);
	});




})