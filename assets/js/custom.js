$(function(){
	var isOpen = false;
	$('.menu ul li').click(function(){
		$sub = $(this).children('ul.sub-menu');
		if (isOpen)
		{
			$sub = $(this).children('ul.sub-menu');
			$sub.addClass('bounceOutLeft');
			$sub.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$sub.removeClass('bounceOutLeft');
				$sub.hide();
				isOpen = false;
			});
		}
		else
		{
			$sub.addClass('animated');
			$sub.addClass('bounceInLeft');
			$sub.show();
			$sub.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$sub.removeClass('bounceInLeft');
				isOpen = true;
			});
		}
	});

	$('#slider').pSlider({
		slider: $('#slider ul li'),
		duration: 400,
		loop: true,
		button: {
			next: $('#slider .pager .next'),
			prev: $('#slider .pager .prev')
		}
	});
});