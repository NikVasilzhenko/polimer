$(document).ready(function(){
  //mob menu
  $('#js-mob-menu-btn').on('click', function(){
    $(this).add('#js-mob-menu').toggleClass('open');
  });
  $('.js-sub-menu-open').on('click', function(){
    $(this).next('.js-sub-menu').addClass('open');
  });
  $('.js-sub-menu-close').on('click', function(){
    $(this).closest('.js-sub-menu').removeClass('open');
  });
  
  //up
  $('#js-up').click(function(){
    $('html, body').animate({ scrollTop: 0}, 250); 
  });
  
  //footer accordion
  $('.js-accordion-btn').on('click', function(){
    $(this).toggleClass('open').next('ul').slideToggle(250);
  });
  
  //show more
  $('.js-show-more').on('click', function(){
    $(this).prev('.js-less').addClass('open');
    $(this).remove();
  });
  
  //input
  $('.js-input').on('focus', function(){
    $(this).closest('.label').addClass('is-focus');
  });
  $('.js-input').on('blur', function(){
    $(this).closest('.label').removeClass('is-focus');
  });
  $('.js-input').on('input', function(){
    if($(this).val().trim() !== ''){
      $(this).closest('.label').addClass('is-value');
    } else{
      $(this).closest('.label').removeClass('is-value');
    }
  });
  
  //popup
  $('.js-order').on('click', function(){
    $('#js-order-popup').fadeIn(250);
    $('body').addClass('no-scroll');
  });
  
  $('.js-popup-close').on('click', function(){
    $(this).closest('.js-popup').fadeOut(250);
    $('body').removeClass('no-scroll');
  });
  
  //info
  $('.js-info-open').on('click', function(){
    $('.js-info-cloud').fadeOut(250);
    $(this).next('.js-info-cloud').fadeIn(250);
    
      let windWidth = $(window).width(),
        thisPos = $(this).offset().left;
      if(thisPos < (windWidth / 2)){
        console.log('leftpox');
        $(this).next('.js-info-cloud').addClass('info__cloud_right').removeClass('info__cloud_left');
      } else{
        console.log('rightpox');
        $(this).next('.js-info-cloud').addClass('info__cloud_left').removeClass('info__cloud_right');
      }
    
  });
  $('.js-info-close').on('click', function(){
    $(this).closest('.info').find('.js-info-cloud').fadeOut(250);
  });
  
  //tab
  $('.js-tab-item').not(':first-child').hide();
  $('.js-tab').click(function() {
    console.log('fff');
    if(!$(this).hasClass('active')){
      let tabsContainer = $(this).closest('.js-tab-container'),
          tabs = tabsContainer.find('.js-tab'),
          tabsItems = tabsContainer.find('.js-tab-item');                
      tabs.removeClass('active').eq($(this).index()).addClass('active');
  
      tabsItems.hide().eq($(this).index()).fadeIn()
    }
  }).eq(0).addClass('active');
  
  //calc filters
  $('.js-calc-check').on('change', function(){
    if($(this).prop('checked')){
      $(this).closest('.js-calc-label').next('.js-calc-hide').slideDown(250);
    }else{
      $(this).closest('.js-calc-label').next('.js-calc-hide').slideUp(250);
    }
  });
});

