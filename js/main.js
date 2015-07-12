$(document).ready(function() {

	//Replace SVG with PNG
	//svgeezy.init(false, 'png');

	//Resize sections On Load
	var windowHeight = $(window).height();
	$(".page-section").height(windowHeight);



	//Resize sections On Resize
		$(window).resize(function(){
		var windowHeight = $(window).height();
		$(".page-section").height(windowHeight);
	});

	//BH Characher States

	var $window = $(window);
	var fallen = false;

	$window.scroll(function() {
		var loft = $('.section-loft').offset().top;
		if ( $window.scrollTop() >= loft ) {
			$('.character').addClass('character-elavator');
			$('.character').removeClass('character-rocket');
			fallen = true;
		}
		else if ($window.scrollTop() <= loft && fallen === true) {
			$('.character').addClass('character-rocket');
			$('.character').removeClass('character-elavator--star');
		}

		if ($window.scrollTop() <= 10) {
			$('.character').removeClass('character-elavator');
			$('.character').removeClass('character-rocket');
			fallen = false;
		}
	});

	//Show / hide nav items
	/*$('.nav-button').click(function() {
		$('.nav-items').fadeToggle(200);
	});*/
	$('.nav-button').click(function(){
		$(".nav-items li").each(function(i) {
		   $(this).delay((i + 1) * 50).fadeToggle();
		});
	});
//
//	$('.nav-link').click(function(){
//		$(".nav-items li").each(function(i) {
//		   $(this).delay((i + 1) * 50).fadeOut();
//		});
//	});

	//slide to section
	$(".nav-link-1").click(function (e){
		$('html, body').animate({
			scrollTop: $("#home").offset().top
		}, 1000);
		e.preventDefault();
	});
	$(".nav-link-2").click(function (e){
		$('html, body').animate({
			scrollTop: $("#about-me").offset().top
		}, 1000);
		e.preventDefault();
	});
	$(".nav-link-3").click(function (e){
		$('html, body').animate({
			scrollTop: $("#work").offset().top
		}, 1000);
		e.preventDefault();
	});
	$(".nav-link-4").click(function (e){
		$('html, body').animate({
			scrollTop: $("#notes").offset().top
		}, 1000);
		e.preventDefault();
	});
	$(".nav-link-5").click(function (e){
		$('html, body').animate({
			scrollTop: $("#contact-me").offset().top
		}, 1000);
		e.preventDefault();
	});

	//select invventory items
	$('.inventory-item').click(function(e) {
		$('.inventory-item').removeClass('inventory-selected');
		$(this).addClass('inventory-selected');
//		$('body').toggleClass('body--crowbar');
		e.preventDefault();
	});



	//Play Movie
	$('.remote').click(function() {
		var filmWidth = $('.tv-film').width();
		var tvWidth = $('.tv').width();
		$('.tv-film').animate({left: - filmWidth + tvWidth}, 24000, 'linear');
		//$('.tv-film').animate({left: - '928%'}, 24000, 'linear');
	});

	//remove coffee cup - fix to proper solution
	$('.brew').click(function() {
		$(this).hide();
	});

	//move pillow
	$('.pillow').click(function() {
		$(this).hide();
	});

	//take crowbar
	$('.crowbar').click(function() {
		$(this).hide();
		$('.inventory').show();
		$('.inventory-crowbar').removeClass('inventory-hidden');
	});

	//empty water cooler
	$('.water-cooler').click(function() {
		$('.water-cooler-water').animate({bottom: -10}, 1000, 'linear');
	});

	//drop poster
	$('.poster').click(function() {
		$(this).animate({bottom: '12.5%'}, 200, 'linear');
	});

	//open panel
	$('.fuse--cover').click(function() {
		if ($('.inventory-crowbar').hasClass('inventory-selected')) {
			$('.fuse--broken').show();
			$(this).animate({bottom: '12.5%'}, 200, 'linear');
		}
	});

	//open window
	$('.window-lower').click(function() {
		if ($('.window-lower').hasClass('open')) {
			$('.window-lower').animate({top: '0%'}, 1000, 'linear');
			$('.window-lower').removeClass('open');
		}
		else {
			$('.window-lower').animate({top: '-42%'}, 1000, 'linear');
			$('.window-lower').addClass('open');
		}
	});

	//toggle computer
	$('.mouse').click(function() {
		$('.computer-screen').fadeToggle();
	});

	//open drawer
	$('.desk-drawer').click(function() {
		if ($(this).hasClass('open')) {
			$(this).animate({top: '0%'}, 1000, 'linear');
			$('.screwdriver').animate({top: '79.5%'}, 1000, 'linear');
			$(this).removeClass('open');
		}
		else {
			$(this).animate({top: '12%'}, 1000, 'linear');
			$('.screwdriver').animate({top: '91%'}, 1000, 'linear');
			$(this).addClass('open');
		}
	});

	//take scredriver
	$('.screwdriver').click(function() {
		$(this).hide();
		$('.inventory').show();
		$('.inventory-screwdriver').removeClass('inventory-hidden');
	});

	//eat cake
	$('.cake').click(function() {
		$(this).hide();
	});

	//angry claire
	$('.brew--claire').click(function() {
		$('.claire').hide();
	});

	//drop menu
	$('.menu-hanging').click(function() {
		if ($('.inventory-screwdriver').hasClass('inventory-selected')) {
			$(this).hide();
			$('.menu-area').animate({bottom: '10%'}, 200, 'linear');
		}
	});

	//open safe
	$( ".safe__readout" ).keyup(function() {
		var value = $( this ).val();
		if (value === "0912") {
			$(this).hide();
			$('.safe').hide();
			$('.safe_open').show();
			$('.coins').show();
		}
		})

	//take coins
	$('.coins').click(function() {
		$(this).hide();
		$('.inventory-coins').removeClass('inventory-hidden');
	});

	//buy tshirt
	$('.tshirt--star').click(function() {

		if ($('.inventory-coins').hasClass('inventory-selected')) {
			$(this).attr('src', 'img/tshirt--hanger.svg');
			$('.character').addClass('character-elavator--star');

		}
	});

	$('[data-toggle="popover"]').popover({trigger: 'click','placement': 'top'});


	$('[data-toggle="popover"]').on('click', function (e) {
		$('[data-toggle="popover"]').not(this).popover('hide');
	});

	//toggle content
	$('.section-content__title__shrink').click(function(e) {
		$(this).closest('.section-table').toggleClass('minimised');
		$(this).find('span').toggleClass('glyphicon-resize-small');
		$(this).find('span').toggleClass('glyphicon-resize-full');
		e.preventDefault();
	});

	//Work Slider
	$(document).ready(function() {

		$("#work-slider").owlCarousel({

			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true

			// "singleItem:true" is a shortcut for:
			// items : 1,
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false

		});

	});
});
