$(function() {
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function() {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}

	testWebP(function(support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
});

$(function() {
	//=========MENU===========

	$('.menu-header__burger').on('click', function() {
		if ($('.menu-header__body').css('display') === 'none') {
			$(this).addClass('active');
			$('.menu-header__body').slideDown(400);
		} else {
			$(this).removeClass('active');
			$('.menu-header__body').slideUp(400);
		}
	});

	$(window).on('resize', function() {
		if ($(window).width() > 992) {
			$('.menu-header__burger').removeClass('active');
			$('.menu-header__body').removeAttr('style');
		}
	});

	//=======================

	if ('.education__items_slider') {
		$('.education__items_slider').slick({
			infinite: true,
			arrows: false,
			dots: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]
		});
	}

	//==========allow__items_slider================

	if ('.allows__items_slider') {
		$('.allows__items_slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]
		});
	}
	//============footer-menu====================
	$('.item-content__title').on('click', function(e) {
		let menu = $(e.target).parent();
		let contMenu = menu.find('.item-content__menu');
		if ($(window).width() > 992 || contMenu.css('display') === 'none') {
			$(contMenu).slideDown(400);
		} else {
			$(contMenu).slideUp(400);
		}
	});
	$(window).on('resize', function() {
		if ($(window).width() > 992) {
			$('.item-content__menu').removeAttr('style');
		}
	});
	function ibg() {
		if (isIE()) {
			let ibg = document.querySelectorAll('._ibg');
			for (var i = 0; i < ibg.length; i++) {
				if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
					ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				}
			}
		}
	}
	ibg();
});
