
export function observerTrigger(target, className, rootMarginInPx) {

  const config = {
    rootMargin: rootMarginInPx
  };
  
  let observer = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(className);
        imgObserver.unobserve(entry.target); // make that the animation only works once until the page reloads
      } else {
        entry.target.classList.remove(className);
      }
    });
  }, config);
  
  // observer.observe(target); // for only one element
  if (target instanceof NodeList) {
    target.forEach(image => {
      observer.observe(image);
    });
  } else {
    observer.observe(target); // for only one element
  }
}






