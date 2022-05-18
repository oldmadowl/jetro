$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.slider__inner').slick({
    asNavFor: '.thumbs',
    prevArrow: '<button class="slider__arrow slider__arrow-prev"><img src="images/icons/prev-arrow.svg" alt=""></button>',
    nextArrow: '<button class="slider__arrow slider__arrow-next"><img src="images/icons/next-arrow.svg" alt=""></button>',
  });
  $('.thumbs').slick({
    asNavFor: '.slider__inner',
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 905,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });

  $('.footer__title').on('click', function(){
    $(this).next('.footer__col-body').slideToggle();
    $(this).toggleClass('active');
  });

});