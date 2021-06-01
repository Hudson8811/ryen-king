const scrollToTop = document.getElementById('totop');

scrollToTop.addEventListener('click', (event) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
