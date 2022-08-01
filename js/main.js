const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // effect: "coverflow",
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // effect: "coverflow",
});

// создание меню кнопки для телефона
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  console.log("click button");
  document.querySelector(".navbar-button").classList.toggle("navbar-button--visible");
});