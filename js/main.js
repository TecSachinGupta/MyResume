var sachinGupta = {
	init : function(){
			this.module();
	},
	module : function () {
		this.myFullpage;
		this.navigationToggle();
		this.scrollToggle();
		this.timeLineScrollBox();
		// // this.testimonialsBoxScrollBox();
		this.contactFormToggles();
		this.scrollToTop();
		this.carousel();
	},
	myFullpage = new fullpage('#content', {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		menu: '#menu',
		lockAnchors: false,
		anchors: ['main', 'about', 'portfolio', 'blog', 'contact'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'About','Portfolio','Blog','Contact'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		scrollOverflow: true,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,
		//Design
		controlArrows: true,
		verticalCentered: true,
		paddingTop: '3.2em',
		paddingBottom: '10px',
		fixedElements: '.header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',
		lazyLoading: true
	}),
	navigationToggle: function () {
		jQuery('.navbar-toggler').on('click', function () {
			jQuery('nav').addClass('open');
		});
		jQuery('.nav-close').on('click', function () {
			jQuery('nav').removeClass('open');
		});

		jQuery('nav ul li a').on('click', function () {
			jQuery('nav').removeClass('open');
		});
	},

	scrollToggle: function () {
		jQuery('.scroll-toggle.down i').on('click', function () {
			jQuery.fn.fullpage.moveSectionDown();
		});

		jQuery('.scroll-toggle.up i').on('click', function () {
			$.fn.fullpage.moveTo('main');
		});
	},

	timeLineScrollBox: function () {
		if (jQuery('.timeline-box').length) {
			// jQuery('.timeline-box > ul').mCustomScrollbar();
		}
    },

    scrollToTop: function () {
		jQuery('.scroll-up i').on('click', function () {
			$('.slimScrollDiv').slimScroll({ scrollTo : '0px' });
		});
	},

	carousel: function () {
		jQuery('.carousel').on('slid.bs.carousel', function () {
			$(".carousel-item.active:nth-child(" + ($(".carousel-inner .carousel-item").length -1) + ") + .carousel-item").insertBefore($(".carousel-item:first-child"));
			$(".carousel-item.active:last-child").insertBefore($(".carousel-item:first-child"));
		});
	},

	contactFormToggles: function () {
		jQuery('.contact-form .input-group input, .contact-form .input-group textarea, .search-form input').focusout(function () {
			var text_val = jQuery(this).val();

			if (text_val === "") {
				jQuery(this).removeClass('has-value');
			} else {
				jQuery(this).addClass('has-value');
			}
		});

		jQuery('.search-form input').keyup(function () {
			var text_val = jQuery(this).val();

			if (text_val.length === 0) {
				jQuery(this).removeClass('has-value');
			} else {
				jQuery(this).addClass('has-value');
			}
		});
	},

    accordion: function () {
		jQuery('.collapse').on('shown.bs.collapse', function(){
			jQuery(this).parent().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
		}).on('hidden.bs.collapse', function(){
			jQuery(this).parent().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
		});
	}
};

(function() {
    'use strict';
    jQuery(document).ready(function(){
		sachinGupta.init();

		setTimeout(function(){
			jQuery('#preloader').remove();
        }, 2500);

	});
}());
