document.addEventListener('DOMContentLoaded', () => {
  // === v.1
  // function ticker(element, duration) {
  //   const innerEl = element.querySelector('.js-ticker-text');
  //   const innerWidth = innerEl.offsetWidth;
  //   // const clonedEl = innerEl.cloneNode(true);
  //   // element.appendChild(clonedEl);

  //   console.log(innerWidth);
    
  //   let start = performance.now();
  //   let progress;
  //   let translateX;
  
  //   requestAnimationFrame(function step(now) {
  //     progress = (now - start) / duration;
   
  //     if (progress > 1) {
  //       progress %= 1;
  //       start = now;
  //     }
  
  //     translateX = innerWidth * progress;
      
  //     innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
  //     // clonedEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
  //     requestAnimationFrame(step);
  //   });
  // }

  // === v.2 "Pffffff"
  function ticker(element) {
    const elementText = element.querySelector('.js-ticker-text');

    let text = elementText.textContent;

    text = text[text.length - 1] + text.substring(0, text.length - 1);

    requestAnimationFrame(function move() {
      text = text[text.length - 1] + text.substring(0, text.length - 1);
      elementText.textContent = text;

      requestAnimationFrame(move);
    });
  }
  
  const tickerWrapper = document.querySelector('.home__designer-wrapper');
  
  // === v.1
  // ticker(tickerWrapper, 3000);

  // === v.2
  ticker(tickerWrapper);
});

