// import {elements} from './views/selectors.js';
import * as navView from '../views/navView.js';


export function burgerMenuToggle() {
  console.log("click works");
  navView.displayMenu();
  // navView.displayBurgerMenu();
  // // burger icon animation
  // burgerView.burgerIconAnimation();
  // // navbar colors toggle
  // navColorToggle();
  // // close the catMenu if already open
  // if (!elements.catMenu.classList.contains("u-hidden")) {
  //   burgerView.closeCatMenu();
  // };
}