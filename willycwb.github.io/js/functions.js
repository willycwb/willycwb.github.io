(function($) {

	'use strict';


	// Global Variables
	var winWidth = $(window).width(),
		winHeight = $(window).height(),
		mainHeight = $('#main').height();
		
		
	// Initiating Tooltop
	$('[data-toggle="tooltip"]').tooltip();
	
	
	// Adding <span> to .title
	$('.title').wrapInner('<span></span>');

	
	// Init WowJS
	new WOW().init();
	
	
	// Adding Fixed class to Footer - If content height is less than WinHeight
	if( mainHeight < winHeight ) {
		$('#footer').addClass('footer-fixed');
	}
	
	
	// Initiating jQuery Typed
	var textCaptions = $('.text-captions');
	
	if( textCaptions.length > 0 ) {
		textCaptions.typed({
			stringsElement: $('.text-strings'),
			startDelay: 30,
			typeSpeed: 50,
			backDelay: 2500,
			loop: true,
			contentType: 'html', // or text
		});
	}
	
	
	// Smooth Anchor Scroll 
	$('a[href*="#"]:not([href="#"], [href*="-carousel"], [href*="blog-"])').on('click', function() {
		if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				
				return false;
			}
		}
	});
		
	
	// Sticky Header Navbar on Scroll - addClass .active
	var header = $('#header'),
		headerHeight = header.outerHeight(),
		headerNav = $('#nav.navbar-sticky');
	
	if (headerNav.length) {
		var scrollTrig = headerHeight, // px
		
		stickyNav = function () {
			var scrollTop = $(window).scrollTop();
			
			if (Modernizr.csstransforms) {
				if (scrollTop > scrollTrig) {
					headerNav.addClass('visible');
				} else {
					headerNav.removeClass('visible');
				}
			} else {
				if (scrollTop > scrollTrig) {
					headerNav.fadeIn('fast');
				} else {
					headerNav.fadeOut('fast');
				}
			}
		};
		stickyNav();
		
		$(window).on('scroll', function () {
			stickyNav();
		});
	}
		
	
	// Animated Progress Bars Function
	var dataProgress = $('[data-progress-animate]');
	
	if( dataProgress.length > 0 ) {
		dataProgress.each(function() {
			var $this = $(this);
			
			$this.appear(function() {
				$this.animate({
					width: $this.attr('data-progress-animate')
				}, 600 );
			}, {accX: 0, accY: -100});
		});
	}
		
	
	// Init jQuery CountTo
	var numCounter = $('.numCounter');
	
	if( numCounter.length > 0 ) {
		numCounter.each(function() {
			var $this = $(this);
			
			$this.appear(function() {
				$this.countTo();
			});
		});
	}
		
	
	// Init SVG Radial Progress Animation on Appear
	var skillProgress = $('.skill-progress'),
		svgProgress = $('.skill-progress svg + svg path');
	
	if( skillProgress.length > 0 ) {
		skillProgress.each(function() {
			var $this = $(this);
			
			$this.appear(function() {
				svgProgress.css('display' , 'block');
			});
		});
	}
		
	
	// Initiating SimpleLightbox Gallery for Portfolio
	var portfolioItems = $('#portfolio-items a');
	
	if( portfolioItems.length > 0 ) {
		portfolioItems.simpleLightbox({
			className		:	'prism-lightbox',
			navText			:	['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			closeText		:	['<i class="fa fa-close"></i>'],
			captionsData	:	'alt',
			captionDelay	:	300,
			heightRatio		: 	0.85,
			widthRatio		: 	0.85
		});
	}
	
	
	// SVG to Image convert
	var svgImgConvert = $('img.img-svg');
	
	if ( svgImgConvert.length > 0 ) {
		svgImgConvert.svgConvert();
	}
	
	
	// Function Header Resize
	function headerResize() {
		var StickyHeader = $('.sticky-header').width(),
			winHeight = $(window).height(),
			headerAffix = $('#header.sticky-header .affix');
		
		headerAffix.width(StickyHeader);
		headerAffix.height(winHeight);
	}
	// update width on window resize
	// If Screen Width is above 980px
	if( winWidth >= 768 ) {
		headerResize();
	}
	$(window).resize(function() {
		headerResize();
	});
	
	
	// Navbar OffCanvas Toggle
	var navCanvas = $('.navbar-offcanvas'),
		navToggle = $('.navbar-offcanvas-toggle');
	
	navToggle.on('click', function() {
		navToggle.toggleClass('toggle');
		
		$('body').toggleClass('navbar-offcanvas-open');
	});
	
	
	// Append <span> in Styled Nav - Sidebar
	$('.styled-nav li').each(function() {
		$(this).find('a').wrapInner('<span></span>');
	});
	
	
	// theme-dark dynamicWidth of background
	function bgColorOverlay() {
	
		var winWidth = $(window).width(),
			containerWidth = $('.container').width(),
			contentWidth = $('.col-md-8.content-dark').width(),
			col1Width = $('.col-md-1').width(),
			col1WidthHalf = containerWidth / 12,
			dynamicWidth = containerWidth - contentWidth,
			dynamicWidthSplit = (winWidth - containerWidth) / 2,
			dynamicWidthA = (((winWidth - dynamicWidth) - dynamicWidthSplit) + col1WidthHalf) - 30+'px';
			
		$('.bgColorOverlay').width(dynamicWidthA);
	
	}
	bgColorOverlay();
	
	$(window).on('resize', function() {
		bgColorOverlay()
	});
	
	
	// Goto Top Button
	var backToTopBtn = $('#back-to-top');
	
	if (backToTopBtn.length) {
		var scrollTrigger = 600, // px
		
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			
			if (Modernizr.csstransforms) {
				if (scrollTop > scrollTrigger) {
					backToTopBtn.addClass('visible');
				} else {
					backToTopBtn.removeClass('visible');
				}
			} else {
				if (scrollTop > scrollTrigger) {
					backToTopBtn.fadeIn('fast');
				} else {
					backToTopBtn.fadeOut('fast');
				}
			}
		};
		backToTop();
		
		$(window).on('scroll', function () {
			backToTop();
		});
		
		backToTopBtn.on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	
	
	// Initiating jScrollPane
	if ( winWidth >= 992 ) {
		var fancyScroll = $('.navbar-offcanvas');
		
		if (fancyScroll.length) {
			fancyScroll.jScrollPane();
		}
	}
	
	
	// onDomReady specific scripts
	$(document).ready(function() {
		
		// Hiding loader on loading complete
		$('#loader-wrapper').delay(500).fadeOut();
		
		
		// Init jQuery Material Design Form Style
		var formMaterial = $('form.material');
		
		if( formMaterial.length > 0 ) {
			$('form.material').materialForm(); // Apply material
			
			// Init jQuery Form Validation
			$('form').validate({ 
				errorPlacement: function(error, element) {}
			}); // Apply validator with no error messages but classes only
		}
		

		// Info-Card-Container Height
		var CardContainerHeight = $('.avatar-info-card').height(),
			avatarFigure = $('.avatar-figure');

		if( avatarFigure.length > 0 && winWidth >= 768 ) {
			avatarFigure.height(CardContainerHeight);
		}


		
		// Init jQuery Material Design Form Style
		var clientCarousel = $('.client-carousel');
		
		if( clientCarousel.length > 0 ) {
			clientCarousel.owlCarousel({
				items : 4, //10 items above 1000px browser width
				itemsDesktopSmall : [1200,3], // betweem 980px and 601px
				itemsTablet: [900,3], //2 items between 600 and 480
				itemsMobile: [767,2], //2 items between 479 and 0
				
				autoPlay : 2500,
				stopOnHover : false,
				pagination : false,
				
				navigation: true,
				navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
			});
		}
		
	});


})(jQuery);