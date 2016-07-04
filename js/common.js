$(document).ready(function() {

	//Placeholder
	//Doc: https://github.com/NV/placeholder.js/
	$("[placeholder]").textPlaceholder();

	//Попап менеджер FancyBox
	//Документация: http://fancyapps.com/fancybox/
	//<a class="fancybox" rel="group" href="big_image_1.jpg"><img src="small_image_1.jpg" alt="" /></a>
	//<a class="fancybox" rel="group" href="big_image_2.jpg"><img src="small_image_2.jpg" alt="" /></a>
	$(".fancybox").fancybox({
		padding: 0
	});

	// Маска ввода телефона
	

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {

		var name = $(this).find("input[name='name']").val(),
			phone = $(this).find("input[name='phone']").val();

		if (!name || !phone) {
			alert("Заполните поля формы.");
			return false;
		}

		//маска на телефон

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize(),
			success: function(response) {
				console.log("jquery-ajax-mail-success");
				console.log('response: ' + response);
				window.location.replace('http://zem-krym.ru/thank_you.html');
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
				console.log('response: ' + xhr);
				window.location.replace('http://zem-krym.ru/error.html');
			}
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	// Hide/show regions tooltips (mobile)
	$('.tooltip-region__title-btn').on('click', function() {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().next(".tooltip-region").hide();
		} else {
			$(".tooltip-region").hide();
			$(this).addClass('active');
			$(this).parent().next(".tooltip-region").show();
		}
	});
	$('.tooltip-region__title-btn-hide').on('click', function() {
		$(this).closest('.tooltip-region').hide();
		$(this).closest('.tooltip-region').prev().find('.tooltip-region__title-btn').removeClass('active');
	});

});

// SVG map
jQuery(window).load(function() {

	var svgobject = document.getElementById('svgmap');

	if ('contentDocument' in svgobject) {					// У нас действительно там что-то есть?
		var svgdom = jQuery(svgobject.contentDocument);		// Получаем доступ к объектной модели SVG-файла

		$('.area', svgdom).on('mouseover', function() {

			var id = $(this).attr('id');

			$('.tooltip-region').hide();
			
			if (id == "area-east") {
				$('.tooltip-region_east').show();
			}
			if (id == "area-west") {
				$('.tooltip-region_west').show();
			}
			if (id == "area-south") {
				$('.tooltip-region_south').show();
			}
			if (id == "area-mountain") {
				$('.tooltip-region_mountain').show();
			}
		});

		if ($(window).width() > 1200) { //for Desktops
			$('.tooltip-region').on('mouseleave', function() {
				$(this).hide();
			});
		}
		
	}
});