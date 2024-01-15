

(function ($) {
	"use strict";
	var $wrapper = $('.main-wrapper');

	// Sidebar

	function setupSidemenu() {
		if (window.innerWidth <= 991) {
		  var Sidemenu = function () {
			this.$menuItem = document.querySelectorAll('.main-nav a');
		  };
	  
		  function init() {
			var $this = new Sidemenu();
			var menuItems = document.querySelectorAll('.main-nav a');
	  
			menuItems.forEach(function (menuItem) {
			  menuItem.addEventListener('click', function (e) {
				if (menuItem.parentElement.classList.contains('has-submenu')) {
				  e.preventDefault();
				}
				if (!menuItem.classList.contains('submenu')) {
				  var parentUl = menuItem.closest('ul');
				  var allSubmenus = parentUl.querySelectorAll('ul');
				  var allMenuItems = parentUl.querySelectorAll('a.submenu');
	  
				  allSubmenus.forEach(function (submenu) {
					submenu.style.display = 'none';
				  });
	  
				  allMenuItems.forEach(function (item) {
					item.classList.remove('submenu');
				  });
	  
				  menuItem.nextElementSibling.style.display = 'block';
				  menuItem.classList.add('submenu');
				} else if (menuItem.classList.contains('submenu')) {
				  menuItem.classList.remove('submenu');
				  menuItem.nextElementSibling.style.display = 'none';
				}
			  });
			});
		  }
	  
		  // Sidebar Initiate
		  init();
		}
	  }
	  
	  // Call the function to set up the sidemenu behavior
	  setupSidemenu();
	  

	// Sticky Header
	$(window).scroll(function () {
		var sticky = $('.header'),
			scroll = $(window).scrollTop();
		if (scroll >= 50) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});

	// Mobile menu sidebar overlay
	$('.header-fixed').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function () {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});


	$(document).on('click', '.sidebar-overlay', function () {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
		$('#task_window').removeClass('opened');
	});

	$(document).on('click', '#menu_close', function () {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});

	// Select 2
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}


	// Small Sidebar

	$(document).on('click', '#toggle_btn', function () {
		if ($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		return false;
	});


	$(document).on('mouseover', function (e) {
		e.stopPropagation();
		if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if (targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
	});

	

	// fade in scroll 

	if ($('.main-wrapper .aos').length > 0) {
		AOS.init({
			duration: 1200,
			once: true
		});
	}

	// Mobile menu sidebar overlay

	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btns', function () {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').toggleClass('menu-opened');
		return false;
	});

	// Sidebar

	var Sidemenu = function () {
		this.$menuItem = $('#sidebar-menu a');
	};

	function initi() {
		var $this = Sidemenu;
		$('#sidebar-menu a').on('click', function (e) {
			if ($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if (!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if ($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}

	// Sidebar Initiate
	initi();

	// latest-slider
	if ($('.owl-carousel.testimonial-carousel').length > 0) {
		$('.owl-carousel.testimonial-carousel').owlCarousel({
			loop: true,
			margin: 24,
			nav: true,
			dots: true,
			smartSpeed: 2000,
			navText: ["<i class='fa-solid fa-angle-up'></i>","<i class='fa-solid fa-angle-down'></i>"],
			responsive: {
				0: {
					items: 1
				},

				550: {
					items: 1
				},
				700: {
					items: 1
				},
				1200: {
					items: 1
				},
				1400: {
					items: 1
				}
			}
		})
	}

	// latest-slider
	if ($('.owl-carousel.testimonial-carouseltwo').length > 0) {
		$('.owl-carousel.testimonial-carouseltwo').owlCarousel({
			loop: true,
			margin: 24,
			nav: false,
			dots: false,
			smartSpeed: 2000,
			autoplay: true,
			navText: ["<i class='fa-solid fa-angle-up'></i>","<i class='fa-solid fa-angle-down'></i>"],
			responsive: {
				0: {
					items: 1
				},

				550: {
					items: 3
				},
				700: {
					items: 4
				},
				1200: {
					items: 5
				},
				1400: {
					items: 5
				}
			}
		})
	}

		// Header Fixed

		if ($('#header').length > 0) {
			$(document).ready(function () {
				$(window).scroll(function () {
					var scroll = $(window).scrollTop();
					if (scroll > 35) {
						$("#header").addClass('header-space');
					}
	
					else {
						$("#header").removeClass('header-space');
					}
				})
			})
		}



})(jQuery);

// Chat sidebar overlay
if (window.innerWidth <= 1199) {
	var taskChat = document.getElementById('task_chat');
	var sidebarOverlay = document.querySelector('.sidebar-overlay');
	var taskWindow = document.getElementById('task_window');
  
	if (taskChat) {
	  taskChat.addEventListener('click', function () {
		sidebarOverlay.classList.toggle('opened');
		taskWindow.classList.add('opened');
		return false;
	  });
	}
  }