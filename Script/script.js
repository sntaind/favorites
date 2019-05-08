$(document).ready(function(e) {
  $('a').hover(function() {
    $('.iframe').attr('src', $(this).attr('data-url'));
  })
});
