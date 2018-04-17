window.onload = function() {
	sliderInitialize();
}

//------------ SLIDER ------------//
function sliderInitialize(){
	var time = 500;
	var slides = document.getElementsByClassName('slide');
	for (let i = 0; i < slides.length; i++){
		$('.slider_navigation').append('<li class="circle"></li>');
	}
	var circles = document.getElementsByClassName('circle');
	function slideChange(prevSlide, nextSlide){
		$(circles[prevSlide]).removeClass('circle-active');
		$(circles[nextSlide]).addClass('circle-active');
		$(slides[prevSlide]).animate({opacity: 0}, time);
		setTimeout(function(){
			$(slides[nextSlide]).children('.slide-img').css('background', 'url(' + $(slides[nextSlide]).find('img').attr('src') + ')');
			$(slides[nextSlide]).children('.slide-img').css('background-size', 'cover');
			$(slides[nextSlide]).animate({opacity: 1.0}, time);
		}, 750);
		setTimeout(function(){
			$('.disabled').removeClass('disabled');
		}, 1000);
	}
	var currentSlide = 0;
	$(slides[currentSlide]).children('.slide-img').css('background', 'url(' + $(slides[currentSlide]).find('img').attr('src') + ')');
	$(slides[currentSlide]).children('.slide-img').css('background-size', 'cover');
	$(circles[currentSlide]).addClass('circle-active');
	$(slides[currentSlide]).animate({opacity: 1.0}, time);
	$('*').click(function(){
		if($('.disabled').hasClass('disabled'))
			return false;
		else {
			if ($(this).hasClass('arrow-right') || $(this).hasClass('arrow-left') || $(this).hasClass('circle'))
				$(this).addClass('disabled');
			if ($(this).hasClass('arrow-right')){
				if (currentSlide == slides.length - 1){
					slideChange(currentSlide, 0);
					currentSlide = 0;
				}
				else{
					slideChange(currentSlide, currentSlide + 1);
					currentSlide++;
				}
			}
			else if ($(this).hasClass('arrow-left')){
				if (currentSlide == 0){
					slideChange(currentSlide, slides.length - 1);
					currentSlide = slides.length - 1;
				}
				else{
					slideChange(currentSlide, currentSlide - 1);
					currentSlide--;
				}
			}
			else if ($(this).hasClass('circle')){
				for (let i = 0; i < circles.length; i++){
					if (circles[i] == this){
						slideChange(currentSlide, i);
						currentSlide = i;
					}
				}
			}
		}
	});
}
//------------ SLIDER END ------------//