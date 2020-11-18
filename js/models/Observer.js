const trigger = document.querySelector('.js-animate-img-bio');

export function observerTrigger(target, className, rootMargin) {

}




const config = {
  rootMargin: '5px'
};

let observer = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('is-animated-bio');
      imgObserver.unobserve(entry.target); // make that the animation only works once until the page reloads
    } else {
      entry.target.classList.remove('is-animated-bio');
    }
  });
}, config);

observer.observe(trigger);