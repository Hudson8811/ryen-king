let swiper = new Swiper('.swiper-container1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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
  spaceBetween: 40,
  // slidesPerGroup: 3,
  // freeMode: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});
