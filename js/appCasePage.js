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