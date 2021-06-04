document.addEventListener('DOMContentLoaded', () => {
  const caseSlider = new Swiper('.case-slider__container', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      321: {
        slidesPerView: 1.6,
        spaceBetween: 10,
      },
      351: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 1.1,
        spaceBetween: 30,
      },
      769: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.22,
        spaceBetween: 40,
      },
      1559: {
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
      1900: {
        slidesPerView: 1.6,
        spaceBetween: 40,
      },
    },
  });
});
