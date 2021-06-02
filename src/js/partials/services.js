document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.section__services')) {
    const controls = [...document.querySelectorAll('.js-services-control')];
    const tabs = [...document.querySelectorAll('.js-services-tab')];
    controls[0].classList.add('active');
    tabs[0].classList.add('active');

    let prevControl = controls[0];
    let prevTab = tabs[0];
    controls.forEach((control) => {
      control.addEventListener('mouseover', () => {
        if (control === prevControl) return;

        if (prevControl === null) {
          prevControl = control;
          control.classList.add('active');
        }

        if (control !== prevControl) prevControl.classList.remove('active');

        prevControl = control;
        control.classList.add('active');
        tabs.forEach((tab) => {
          if (control.dataset.control === tab.dataset.tab) {
            if (prevTab === null) prevTab = tab;
            if (prevTab === tab) return;
            if (prevTab !== tab) prevTab.classList.remove('active');

            tab.classList.add('active');
            prevTab = tab;
          }
        });
      });
    });
  }
});
