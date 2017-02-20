$(window).ready(function(){
    $(this).scrollTop(0);
});

var scrolled = false

$(window).scroll(function() {
  if ($(document).scrollTop() > 100 && !scrolled) {
      $('#modal-box').fadeIn(2000);
      scrolled = true;
  }
});

$('button').click(function() {
  $('#modal-box').fadeOut();
});
