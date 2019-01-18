$(document).ready(function() {
  $(".container-front").click(function () {
    $('.content').css('transition', '1s');
    $('.content').css('transform', 'rotateY( -180deg )');
  });

  $(".back").click(function () {
    $('.content').css('transition', '1s');
    $('.content').css('transform', 'rotateY( 0deg )');
  });
});
