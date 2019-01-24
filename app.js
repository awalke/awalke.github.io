$(document).ready(function() {
  var state = 0;

  $(".container-front").click(function () {

    if (state == 1) {
      state = 0;
      $('.front-center').show();
      $('.square').show();
      $('.content').css('-webkit-transition', '1s');
      $('.content').css('-webkit-transform', 'rotateY( 0deg )');
    }
    else {
      state = 1;
      $('.front-center').hide();
      $('.square').hide();
      $('.content').css('-webkit-transition', '1s');
      $('.content').css('-webkit-transform', 'rotateY( -180deg )');
    }
  });

  $(".back").click(function () {
    state = 0;
    $('.front-center').show();
    $('.square').show();
    $('.content').css('-webkit-transition', '1s');
    $('.content').css('-webkit-transform', 'rotateY( 0deg )');
  });
});
