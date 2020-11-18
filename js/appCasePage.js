import { consoleMessages } from './models/ConsoleMessage.js'; // show console messages
import { elements } from './views/selectors.js';
import { observerTrigger } from './models/Observer.js';

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
// Trigger animation to images
function imgTrigger() {
  const target = document.querySelectorAll('.js-animate-img');
  observerTrigger(target, 'is-animated', '5px');
}

imgTrigger();