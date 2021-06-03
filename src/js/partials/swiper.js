let swiper = new Swiper('.swiper-container1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  breakpoints: {
    450: {
      // ok
      spaceBetween: 10,
    },
    767: {
      // ok
      spaceBetween: 20,
    },
    1000: {
      // ok
      spaceBetween: 30,
    },

    1920: {
      // ok
      spaceBetween: 40,
    },
  },
});
