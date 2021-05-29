document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const menuExit = document.querySelector('.header__menu-exit');
  const main = document.querySelector('.main');
  const header = document.querySelector('.header');
  const menuLinks = document.querySelectorAll('.header__menu-link');

  //   burger.addEventListener('click', function () {
  //     menu.classList.add('active');
  //   });

  //   menuExit.addEventListener('click', function () {
  //     menu.classList.remove('active');
  //   });

  // Menu Handler
  document.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('header__burger')) {
      menu.classList.add('active');
    } else if (target.classList.contains('header__menu-exit') || target.closest('.header__menu-item')) {
      menu.classList.remove('active');
    } else if (menu.classList.contains('active') && !target.closest('.header__menu')) {
      menu.classList.remove('active');
    }
  });

  // Start of set menu item link active
  if (location.hash === '') {
    menuLinks[0].closest('.header__menu-item').classList.add('active');
  } else {
    setActiveLink();
  }

  function setActiveLink() {
    menuLinks.forEach((item, index) => {
      if (item.getAttribute('href') === location.hash) {
        menuLinks[index].closest('.header__menu-item').classList.add('active');
        console.log(menuLinks[index].closest('.header__menu-item').classList);
      }
    });
  }

  window.addEventListener('hashchange', () => {
    setActiveLink();
  });
  // End of set menu item link active

  if (header.classList.contains('header-js')) {
    window.addEventListener('scroll', () => {
      let y = window.scrollY;

      let headerHeight = header.offsetHeight;

      if (y > headerHeight) {
        main.style.paddingTop = headerHeight + 'px';
        header.classList.add('is-fixed');
        header.style.top = -headerHeight + 'px';
        header.style.transform = 'translateY(100%)';
      } else if (y === 0) {
        header.classList.remove('is-fixed');
        main.style.paddingTop = 0;
        header.style.top = 0;
        header.style.transform = 'translateY(0%)';
      }
    });
  }
  function disabledPreloader() {
    document.getElementById('preloader').style.display = 'none';
  }
});
