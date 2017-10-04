// YOU NEED JQUERY SCRIPT IN YOUR PROJECT
jQuery('document').ready(function($){

    //mobile menu toggle
    $('.menu-btn').on('click', function(){
        if($(this).parents('.wrap').is('.opened-menu') !== true) {
            $('.wrap').addClass('opened-menu');
            $('#main-menu').addClass('opened');

        }
        else if($(this).parents('.wrap').is('.opened-menu') === true){
            $('.wrap').removeClass('opened-menu');
            $('#main-menu').removeClass('opened');

        }
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

   // togle class "active"
   $('.toggle').on('click', function(){
      $('.toggle').toggleClass( "active" );
      });
  });
