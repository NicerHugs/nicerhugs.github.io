$(function() {

  $('.container').on('scroll', function() {
    if ($('.container').scrollTop() >= $('header').height()) {
      $('nav').addClass('topped');
      $('nav').siblings('section:first-of-type').css('padding-top', '145px');
    } else {
      $('nav').removeClass('topped');
      $('nav').siblings('section:first-of-type').css('padding-top', '50px');
    }
  });


});
