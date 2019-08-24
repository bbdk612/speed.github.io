

$("#dialog").hide(); 
$('ul').hide();
$('#roadsCar').hide();
$('div.first, div.first a').on('click', function(){
	$('ul.first').slideToggle(500);
});

$('div.second').on('click', function(){
	$('ul.second').slideToggle(500);
});

$('img.fli').on('click', function(){
	var srcLi = $(this).attr('src');
	$('img.first').attr('src', srcLi);
});

$('img.sli').on('click', function(){
	$('img.second').attr('src', ($(this).attr('src')));
});

$("div.start").on('click', function() {
	var speed1 = +$('input.f').val();
	if (speed1 == 0){
		speed1 = 10;
	}
	var speed2 = +$('input.s').val();
	if (speed2 == 0){
		speed2 = 20;
	}	
	$('div.hide').slideUp(500);
	$('#roadsCar').slideDown(1000);
	var widthField1 = +$('#firstRoad').width();
	var widthField2 = +$('#secondRoad').width();
	var $width = (widthField1 - (+$('img.second.car').width()) + 10) + 'px';
	var t1 = widthField1 / speed1;
	var t2 = widthField2 / speed2;
	setTimeout(function(){
		if (t1 > t2) {
		$('img.second.car').animate({left:  (widthField1 - (+$('img.second.car').width() + 10)) + 'px'}, t2 * 100);
		$('img.first.car').animate({left:  (widthField1 - (+$('img.first.car').width() + 10)) + 'px'}, t1 * 100, function(){
			setTimeout(opendialog1(), 1000);
			$('img.car').css({left: -(widthField1 - (+$('img.second.car').width() + 10)) + 'px'});
				});
			} else if (t1 < t2) {
		$('img.first.car').animate({left:  (widthField1 - (+$('img.first.car').width() + 10)) + 'px'}, t1 * 100);
		$('img.second.car').animate({left:  (widthField1 - (+$('img.second.car').width() + 10)) + 'px'}, t2 * 100, function(){
			setTimeout(opendialog2(), 1000);
			$('img.car').css({left: -(widthField1 - (+$('img.second.car').width() + 10)) + 'px'});
				});
			} else if (t1 == t2) {
				$('img.first.car').animate({left:  (widthField1 - (+$('img.first.car').width() + 10)) + 'px'}, t1 * 100);
				$('img.second.car').animate({left:  (widthField1 - (+$('img.second.car').width() + 10)) + 'px'}, t2 * 100, function(){			
				$('img.car').animate({right: (widthField1 - (+$('img.second.car').width() + 10)) + 'px'}, 1000);
				setTimeout(opendialog3(), 1000);
				
			});
		}
	}, 1000)
});

    function opendialog1(){
        $("#dialog").fadeIn(500);	
		$('.dialog-text').html('<h1>Первой пришла машинка №2</h1>');
		
    }
	function opendialog2(){
        $("#dialog").fadeIn(500);	
		$('.dialog-text').html('<h1>Первой пришла машинка №1</h1>')
    }
	function opendialog3(){
        $("#dialog").fadeIn(500);	
		$('.dialog-text').html('<h1>Машинки пришли одновременно</h1>')
    }	

    function closedialog(){
        $("#dialog").fadeOut(500); //плавное исчезание блока
		$('#roadsCar').fadeOut(500);
		$('div.hide').fadeIn(500);
    }