$(document).ready( function() {
	//Test JS
	// $('.card').css('backgroundColor','blue');


});

 $(window).on( "load", function() {
    //     	$('.title').css('display','none');
    //     	$('.main').css('display','none');
    //     	$('footer').css('display','none');
			 // $('.loading').css('display','flex');
			// $('nav').css('display','none'); 
	 		setTimeout(() => {
	            $(document).ready( function() {
   			     	$('header').css('display','flex');
   			     	$('.title').css('display','flex');
   			     	$('.title').css('justifyContent','center');
   			     	$('.main').css('display','flex');
   			     	$('footer').css('display','flex');
   			     	$('.loading').css('display','none');	      		
					$('.footer-mobile *').css('display','flex');
					// $('nav').css('display','flex'); 
					// $('*').css('opacity','1');
					// $('*').css('transition','1s');	      		
							      		
					
				});
	        }, 3000)
	         

    });