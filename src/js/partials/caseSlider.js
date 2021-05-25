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
        // ok
        slidesPerView: 1.6,
        spaceBetween: 10,
      },
      351: {
        // ok
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        // ok
        slidesPerView: 1.1,
        spaceBetween: 30,
      },
      769: {
        // ok
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        // ok
        slidesPerView: 1.22,
        spaceBetween: 40,
      },
      1559: {
        // ok
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
      1900: {
        // ok
        slidesPerView: 1.6,
        spaceBetween: 40,
      },
    },
  });
});
