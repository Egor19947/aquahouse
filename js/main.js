$(function(){

  $('.popup__select').styler();

  $('.services__item-link').on('click', function() {
    $('.popup').toggleClass('popup--open');
  });

  $('.popup__close').on('click', function() {
    $('.popup').removeClass('popup--open');
  });

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function() {
    $('.menu__list').removeClass('menu__list--active');
  });
  
  $('.results__slider').slick({
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2
        },
        breakpoint: 866,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".menu a, .footer__menu-link, .footer__arrow").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    // event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.services-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.services-tabs__top-item').removeClass('services-tabs__top-item--active');
    $(this).addClass('services-tabs__top-item--active');
    $('.services-tabs__content-items').removeClass('services-tabs__content-items--active');
    $($(this).attr('href')).addClass('services-tabs__content-items--active');
  });

});