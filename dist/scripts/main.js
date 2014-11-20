$(function() {

  $('.container').on('scroll', function() {
    var headerHeight = $('header').height(),
        styleTitleHeight = $('.style-title').height() +
          +$('.style-title').css('padding-top').match(/\d*/) +
          +$('.style-title').css('padding-bottom').match(/\d*/),
        workTitleHeight = $('.work-title').height() +
          +$('.work-title').css('padding-top').match(/\d*/) +
          +$('.work-title').css('padding-bottom').match(/\d*/),
        styleBodyHeight = $('.style-body').height() +
          +$('.style-body').css('padding-top').match(/\d*/) +
          +$('.style-body').css('padding-bottom').match(/\d*/),
        workBodyHeight = $('.work-body').height() +
          +$('.work-body').css('padding-top').match(/\d*/) +
          +$('.work-body').css('padding-bottom').match(/\d*/),
        scroll =$('.container').scrollTop();
    if (scroll >= headerHeight) {
      $('.style-title').addClass('topped');
      $('.style-body').css('padding-top', styleTitleHeight + 'px');
    } else {
      $('.style-title').removeClass('topped');
      $('.style-body').css('padding-top', '0px');
    }
    if (scroll >= styleBodyHeight + headerHeight - styleTitleHeight) {
      $('.style-title').addClass('bottomed').removeClass('topped');
    } else {
      $('.style-title').removeClass('bottomed');
    }
    if (scroll >= headerHeight + styleBodyHeight - styleTitleHeight/2) {
      $('header').children('h1').css('color', '#fff');
    } else if ($('.container').scrollTop() < headerHeight - styleTitleHeight/2) {
      $('header').children('h1').css('color', '#fff');
    } else {
      $('header').children('h1').css('color', '#121a24');
    }
    if (scroll >= headerHeight + styleBodyHeight) {
      $('.work-title').addClass('topped');
      $('.work-body').css('padding-top', workTitleHeight + 'px');
    } else {
      $('.work-title').removeClass('topped');
      $('.work-body').css('padding-top', '0px');
    }
    if (scroll >= headerHeight + styleBodyHeight + workBodyHeight - workTitleHeight) {
      $('.work-title').addClass('bottomed');
    } else {
      $('.work-title').removeClass('bottomed');
    }
    if (scroll >= headerHeight + styleBodyHeight + workBodyHeight - workTitleHeight/2) {
      $('header').children('h1').css('color', '#121a24');
    }
  });

});
