$(document).ready(function() {


  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));


    $(window).on('scroll', function() {
      var scrollFromTop = $(window).scrollTop();
      $('body').toggleClass('scroll', (scrollFromTop > 350));




      // smooth scroll 
      $('.menu li a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 60
          }, 1000);
        }
      });





      // MASONRY

      $('.grid').masonry({
        //options
        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 0

      });
        //  slick slider 

        $('.slider').slick({
          autoplay: true,
          autoplaySpeed: 1500,
          dots: false,
          centerMode: true,
          slidesToShow: 3,
          fade: false,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev">Previous</button>',
          nextArrow: '<button type="button" class="slick-next">Previous</button>',

          responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });


        // menu start

        var body = $('body');
        var menuTrigger = $('.js-main-trigger');
        var menuOverlay = $('.js-main-overlay');

        menuTrigger.on('click', function() {
          body.addClass('menu-is-active');
        });

      menuOverlay.on('click', function () {
        body.removeClass('menu-is-active');
      });


      $('.menu li a').on('click', function () {
        $('body').removeClass('menu-is-active');
      });






})

});