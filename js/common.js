head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	
	//select
	$(document).click(function() {
			$(".js-select-list").hide();
			$(".js-select").removeClass("is-active");
		});
		function selectList() {
			var select = $(".js-select");
			var select_list = $(".js-select-list");
			$("body").on("click", ".js-select", function(event){
				if ($(this).hasClass("is-active")) {
					select.removeClass("is-active");
					select_list.hide();
				}
				else {
					select.removeClass("is-active");
					select_list.hide();
					$(this).find(".js-select-list").show();
					$(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			$("body").on("click", ".js-select-list li a", function(event){
				var id = $(this).attr("data-id");
				var text = $(this).text();
				$(this).parents(".js-select").find(".js-select-text").text(text);
				$(this).parents(".js-select").find(".js-select-input").val(id);
				$(this).parent().parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
				return false;
			});
		}  
		selectList();
		$("body").on("click", ".js-select", function(event){
			event.stopPropagation();
	});

	function tab() {
		$(".js-tab").each(function(){
			var tab_link = $(this).find("a");
			var tab_item = $(this).find("li");
			var tab_cont = $(this).parents(".js-tab-group").find(".tab-pane");
			tab_cont.hide();
			tab_item.first().addClass("active");
			$(this).parents(".js-tab-group").find(".js-tab1").show();
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				tab_item.removeClass("active");
				$(this).parent().addClass("active");
				tab_cont.hide();
				$(this).parents(".js-tab-group").find("."+index).show();
				//return false;
			});
		});
	}
	tab();

	// slick
	$('.slider').slick();

	$('.selectpicker').selectpicker({
	      style: 'btn-info',
	      size: 4
	  });

	//scroll
	$(window).scroll(function(){
		var js_scroll = $(window).scrollTop();
		if ( js_scroll > 820 ) { 
			$(".js-top-nav").addClass('is-fixed'); 
			if(js_scroll > 5480) {
				$(".js-top-nav").removeClass('is-fixed'); 
			};
		}
		else { 
			$(".js-top-nav").removeClass('is-fixed'); 
		};
	});
	scroll
	$(".navbar a, .js-btn-top").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top + 20
		}, 600);
		return false;
	});


	// scroll navbar
	$(function(){
		var sections = {},
			_height  = $(window).height(),
			i = 0;
		
		// Grab positions of our sections 
		$('.js-field').each(function(){
			sections[this.id] = $(this).offset().top + 840;
		});

		$(document).scroll(function(){
			var $this = $(this),
				pos = $this.scrollTop();
				
			for(i in sections){
				if(sections[i] > pos && sections[i] < pos + _height){
					$('a').removeClass('is-active');
					$('#navbar_' + i).addClass('is-active');
				}  
			}
		});
	});

	$(".js-menu-btn").click(function(){
		$(".js-menu").slideToggle();
	});

	$(".js-menu-btn, .js-basket-btn").click(function(){
		$(this).toggleClass('is-active')
	});
	// isotope
	$('#news').isotope({
		// options
		itemSelector: '.clause__item'
	});
});