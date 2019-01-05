(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // Owl Carousel
    $('#hero_sliders').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
    })
    
        // Owl Carousel
    $('#works').owlCarousel({
      items:3,
      margin: 20,
      loop:true,
      autoplay:true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
     dots:false
    })

    $('#kudos').owlCarousel({
      items:1,
      margin: 20,
      loop:true,
      autoplay:true,
      nav: false,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
     dots:true
    })

     $('#teams').owlCarousel({
      items:3,
      margin: 20,
      loop:true,
      autoplay:true,
      nav: false,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
     dots:true
    })

    $('#client_logos').owlCarousel({
      items:5,
      margin: 20,
      loop:true,
      autoplay:true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
     dots:false
    })
    
    $('#home_works').owlCarousel({
      items:3,
      margin: 20,
      loop:true,
      autoplay:true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
     dots:false
    })

    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
