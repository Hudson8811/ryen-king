document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('pagepiling')) {
    function isTablet() {
      return window.matchMedia('(max-width: 1000px)').matches;
    }

    let isInited = window.matchMedia('(max-width: 1000px)').matches;
    // const sections = [...document.querySelectorAll('.js-section')]

    // function onScroll() {
    //     const isPageEnd = window.scrollY + window.innerHeight >= document.scrollingElement.scrollHeight;

    //     sections.forEach((section) => {
    //         const { top, bottom } = section.getBoundingClientRect()
    //         const inViewport = top <= 0 && bottom >= 0
    //         const id = section.getAttribute('id')

    //         if (inViewport && !isPageEnd) {
    //             document.querySelector(`[data-menuanchor="${id}"]`).classList.add('active')
    //         } else {
    //             document.querySelector(`[data-menuanchor="${id}"]`).classList.remove('active')
    //         }
    //     })

    //     if (isPageEnd) {
    //         const id = sections[sections.length - 1].getAttribute('id')
    //         document.querySelector(`[data-menuanchor="${id}"]`).classList.add('active')
    //     }
    // }

    // function moveToContacts() {
    //     const linkToContacts = document.getElementById('linkToContacts')

    //     linkToContacts.addEventListener('click', (event) => {
    //         const searchSection = document.getElementById('contacts')

    //         event.preventDefault()
    //         const { top, bottom } = searchSection.getBoundingClientRect()

    //         window.scrollTo({
    //             top: window.scrollY + top,
    //             behavior: "smooth"
    //         });
    //     })
    // }

    // function scrollToSection() {
    //     const items = document.querySelectorAll('.header__menu-item');

    //     [...items].forEach(item => {
    //         const section = document.getElementById(item.dataset.menuanchor);

    //         item.addEventListener('click', function (event) {
    //             event.preventDefault();

    //             const { top } = section.getBoundingClientRect()

    //             window.scrollTo({
    //                 top: window.scrollY + top,
    //                 behavior: "smooth"
    //             });

    //             if (isTablet()) {
    //                 document.querySelector('.header__menu').classList.remove('active');
    //             }
    //         })
    //     })
    // }

    function initPaging() {
      // [...document.querySelectorAll('.header__menu-item')].forEach(element => {
      //     if (element.classList.contains('active')) {
      //         element.classList.remove('active')
      //     }
      //     if (document.getElementById('pagepiling')) {
      //         scrollToSection();
      //         moveToContacts()
      //     }
      // });
      // if (document.getElementById('pagepiling')) {
      //     window.addEventListener('scroll', onScroll)

      // }
      // if (document.getElementById('pagepiling')) {
      //     window.removeEventListener('scroll', onScroll)
      // }

      const anchors = [
        'home',
        'about',
        'experience',
        'works',
        'services',
        'recognition',
        'testimonials',
        'blog',
        'contacts',
      ];

      // function setLabel(index) {
      //     const label = labels[index];

      //     [...document.querySelectorAll('.js-page-label')].forEach(element => {
      //         element.textContent = label
      //     });
      // }

      function setPageNumber(index) {
        [...document.querySelectorAll('.js-page-number')].forEach((element) => {
          element.textContent = `${index + 1}/${anchors.length}`;
        });
      }

      // function setActiveMenu(index) {
      //     const anchor = anchors[index];
      //     const header = document.querySelector('.header__menu')

      //     header.classList.remove('active')
      //     document.querySelector(`[data-menuanchor="${anchor}"]`).classList.add('active')
      // }
      function animateHome(index) {
        const author = document.querySelector('.js-author-home')
        const img = document.querySelector('.js-img-home')
        const imgAdapt = document.querySelector('.js-img-home-adapt')


        if (index === 1) {
          author.style.opacity = 1
          img.style.opacity = 1
          imgAdapt.style.opacity = 1

        } else {
          author.style.opacity = 0
          img.style.opacity = 0
          imgAdapt.style.opacity = 0
        }
      }

      function addScroll() {
        const sections = [...document.querySelectorAll('.section')]

        sections.forEach(section => {
          if (section.classList.contains('active')) {
            section.style.overflow = 'auto'
          } else {
            section.style.overflow = 'hidden'
          }
        })
      }

      function progressBar(index) {
        const progressBar = document.querySelector('.progress-line-js');

        progressBar.style.width = (100 / 9) * index + '%';
      }

      // function animationActiveSection(index) {
      //   const anchor = anchors[index];
      //   const activeSection = document.getElementById(anchor);
      //   console.log('work')

      //   if (activeSection.classList.contains('active')) {
      //     setTimeout(activeSection.querySelector('.section-main').style.opacity = 1, 300)
      //   }
      // }

      $('#pagepiling').pagepiling({
        anchors: anchors,
        verticalCentered: false,
        scrollingSpeed: 700,
        easing: 'swing',
        menu: '#myMenu',
        // sectionsColor: ['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000'],
        onLeave: function (index, nextIndex, direction) {
          setPageNumber(nextIndex - 1);
          // setLabel(nextIndex - 1)
          progressBar(nextIndex);
          animateHome(nextIndex)
          setTimeout(addScroll, 1200);

          // animationActiveSection(index - 1)
        },

        afterRender: function () {
          setPageNumber(0);
          // setLabel(0)
          // setActiveMenu(0)
          animateHome(1)
          setTimeout(addScroll, 1200);
          progressBar(1);
          // animationActiveSection(0)
        },
      });
    }

    initPaging();

    // window.addEventListener('resize', initPaging);

    function disabledPreloader() {
      document.getElementById('preloader').style.display = 'none';
    }

    // setTimeout(disabledPreloader, 600);

    // $("a.fancybox").fancybox({
    //     type: 'iframe',
    //     allowfullscreen: 'true'
    // });
  }
});
