import { consoleMessages } from './models/ConsoleMessage.js'; // show console messages
import { elements } from './views/selectors.js';

consoleMessages();

const { arrowUp } = elements; 

// Nav / on Scroll change color navbar
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 1100 || document.documentElement.scrollTop >= 1100) {
    arrowUp.classList.add("arrow-up-active");
  } else {
    arrowUp.classList.remove("arrow-up-active");
  }
};



/// Intersection Observer API
const triggerImgs = document.querySelectorAll('.js-animate-img');

const config = {
  rootMargin: '5px'
};

let observer = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('is-animated');
      imgObserver.unobserve(entry.target); // make that the animation only works once until the page reloads
    } else {
      entry.target.classList.remove('is-animated');
    }
  });
}, config);

triggerImgs.forEach(image => {
  observer.observe(image);
});