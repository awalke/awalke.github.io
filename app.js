$(document).ready(function() {
  $(".container-front").click(function () {
    $('.front-center').hide();
    $('.square').hide();
    $('.content').css('-webkit-transition', '1s');
    $('.content').css('-webkit-transform', 'rotateY( -180deg )');

  });

  $(".back").click(function () {
    $('.front-center').show();
    $('.square').show();
    $('.content').css('-webkit-transition', '1s');
    $('.content').css('-webkit-transform', 'rotateY( 0deg )');
  });
});
