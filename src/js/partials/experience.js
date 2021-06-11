document.addEventListener("DOMContentLoaded", () => {
  class Cursor {
    constructor() {
      this.isActive = false;
      this.timer = null;
      this.initDOM();
      this.initListeners();
    }

    initDOM = () => {
      this.container = document.createElement("div");
      this.container.classList.add("custom-cursor");
      document.body.appendChild(this.container);
    };

    initListeners = () => {
      window.addEventListener("mousemove", this.trackPosition);
    };

    add = (item) => {
      const image = new Image();
      image.src = item.dataset.cursor;
      item.addEventListener("mousemove", this.show);
      item.addEventListener("mouseleave", this.hide);
    };

    show = (e) => {
      if (this.isActive) return;
      clearTimeout(this.timer);

      this.isActive = true;
      this.container.style.backgroundImage = `url(${e.currentTarget.dataset.cursor})`;
      this.container.classList.add("active");
    };

    hide = () => {
      this.isActive = false;

      this.timer = setTimeout(() => {
        this.container.classList.remove("active");
      }, 10);
    };

    trackPosition = (e) => {
      this.container.style.top = `${event.clientY}px`;
      this.container.style.left = `${event.clientX}px`;
    };
  }

  const cursor = new Cursor();

  const items = [...document.querySelectorAll(".experience__card")];

  items.forEach((item) => cursor.add(item));
});
