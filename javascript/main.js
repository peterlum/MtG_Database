$(document).ready(function(){


//Beginning of nav scroll
			$(window).scroll(function(){
				if($(window).scrollTop() > 50 && $('#nav-wrapper').css('position')!='fixed')
				{
					$('#nav-wrapper').hide(function() {
						$('#nav-wrapper').css('position','fixed');
						$('#nav-wrapper').fadeIn('200');
						$('#nav-wrapper').css('opacity','0.9');
						$('#nav-wrapper').css('background-color','black');
						$('#nav-wrapper').css('color','white');
						$('input').css('color','black');

					});
				}
				else if ($(window).scrollTop() <= 50) {
						$('#nav-wrapper').css('position', 'initial');
						$('#nav-wrapper').css('background-color','white');
						$('#nav-wrapper').css('color','black');						
				}
			});
//end of nav scroll



});