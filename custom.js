// JavaScript Document

(function($){
 "use strict";

	// back to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			$('.go-top').addClass("show").removeClass("hide");
		}
		else{
			$('.go-top').addClass("hide").removeClass("show");
		}
		
	});
	$(document).ready(function(){
	$('.go-top').click(function(){
		$('html , body').animate({scrollTop: 0},1000);
		return false;
	});
		
		});
	
   
   	$(document).ready(function(){
  
   $("#bannerForm").validate({

    rules: {
      userName : "required" ,
      userPhone : {
        required : true ,
        minlength : 10
      },
      userEmail : {
        required : true ,
        email : true
      },
      userSelect : "required"
    },
    
    messages:{
      userName : "Please enter your name",

      userPhone : {
        required : "Please enter your phone number" ,
        maxlength : "Number must be 10 characters long"
      },

      userEmail : {
        required : "Please enter your email adress" ,
        email : "Please enter valid email address"
       },

      userSelect : "Please Select your loan type"
    }


   });

  // Testimonials Slider

   $(".testimonials-slider").slick({
    slidesToShow: 1,
     slidesToScroll: 1,
     margin:20,
     speed:2000,
     arrows: false,
     asNavFor: '.tes-nav'
   });

 $(".tes-nav").slick({
    
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.testimonials-slider',
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 6000,
      responsive: [
    {
      breakpoint: 993,
      settings: {
        
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
      slidesToShow: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
      slidesToShow: 1
      }
    }
  ]
   });
 // Nice Scroll

 $(".nice-scroll").niceScroll({
        cursorcolor: "rgba(135, 196, 23, 0.3)",
        cursorwidth: "6px",
        background: "rgba(255, 255, 255, 0.1)",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

  document.addEventListener("contextmenu", (event) => {
         event.preventDefault();
      });

  $('img').on('dragstart', function(event) { event.preventDefault(); });

  $(window).scroll(function(){
  if($(this).scrollTop() > 200) {
    $("nav").addClass("nav-active");
  }
  else{
    $("nav").removeClass("nav-active");
  }
  });


  $(".nav-link").on("click" , function(){
   
   $(".nav-link").removeClass("active");
   $(this).addClass("active");

  });

 });

 $(window).width(function() {
  if ($(window).width() < 992) {
    $(".history-section").removeClass("nice-scroll");
  }

});


$(window).width(function() {
  if ($(window).width() > 991) {
   $(".nice-scroll").niceScroll({
        cursorcolor: "rgba(135, 196, 23, 0.3)",
        cursorwidth: "6px",
        background: "rgba(255, 255, 255, 0.1)",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });
  }
 
});
	


	
})(jQuery); 
