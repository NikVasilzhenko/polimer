$(document).ready(function(){
  $('#js-managers').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
        }
      }
    ]
  });
  $('#js-howwework-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]
  });  
  $('#js-reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
        }
      }
    ]
  });
  $('#js-articles-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.js-article-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false
  });
  $('.js-numb, .js-select').styler();
  $('.js-twentytwenty-container').twentytwenty();
  $('#js-before-after-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    swipeToSlide: false,
    dots: false,
    asNavFor: '#js-before-after-slider-content',
    infinite: false
  });
  $('#js-before-after-slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    swipeToSlide: false,
    dots: false,
    infinite: false,
    asNavFor: '#js-before-after-slider',
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false,
          dots: true,
          swipe: true,
          swipeToSlide: true,
          arrows: true
        }
      }
    ]
  });
  $('#js-before-after-count').html($('#js-before-after-slider').slick("getSlick").slideCount);
  $('#js-before-after-slider').on("afterChange", function(event, slick, currentSlide, nextSlide){
    $('#js-before-after-current').html(currentSlide + 1);
  });  
  $('#js-before-after-next').click(function(){
	$('#js-before-after-slider').slick('slickNext');
  });
  $('#js-before-after-prev').click(function(){
    $('#js-before-after-slider').slick('slickPrev');
  });  
  $('[data-fancybox]').fancybox({
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'download',
      'close'
    ],
    infobar: true,
      caption : function( instance, item ) {
        return $(this).next('figcaption').html();
      }
    });

  $('.js-contacts-video-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false
  });
  $('.js-contacts-video-slider').on("afterChange", function(event, slick, currentSlide, nextSlide){
    console.log($(this));
    $(this).next('.js-contacts-video-footer').find('.js-contacts-video-current').html(currentSlide + 1);
  });
  $('.js-contacts-video-slider').each(function(){
    $(this).next('.js-contacts-video-footer').find('.js-contacts-video-count').html($(this).slick("getSlick").slideCount);
  });
});