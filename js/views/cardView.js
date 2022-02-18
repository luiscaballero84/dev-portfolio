const projectList = [
  {
    name: "Personal Branding",
    text: "Full branding redesign, from strategy and content to web development.",
    img: "img/projects/quotes-thumb.jpg",
    alt: "chill quotes project image",
    link: "pages/case-quotes.html",
    firstImgClass:"js-first-img"
  },
  {
    name: "Grid Systems",
    text: "Responsive site to explore the posibilities of CSS Grid.",
    img: "img/projects/grids-thumb.png",
    alt: "grid system project image",
    link: "pages/case-grids.html",
    firstImgClass:""
  },
];



function renderProjects() {
  const cardMarkup = projectList.map(function(project) {  

    return `
      <a class="card" href="${project.link}">
          <img 
            class="card__img js-animate-img lazy-img ${project.firstImgClass}" 
            src="img/lazy-img-thumb.jpg"
            data-src="${project.img}" 
            alt="${project.alt}"
          >
          <h3 class="card__title">${project.name}</h3>
          <p class="card__text">${project.text}</p>
          <p class="card__link">View Project 
            <svg class="ui-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="11" width="20" height="2" fill="#161616"/>
              <rect x="18" y="9" width="2" height="2" fill="#161616"/>
              <rect x="18" y="13" width="2" height="2" fill="#161616"/>
              <rect x="16" y="15" width="2" height="2" fill="#161616"/>
              <rect x="14" y="17" width="2" height="2" fill="#161616"/>
              <rect x="16" y="7" width="2" height="2" fill="#161616"/>
              <rect x="14" y="5" width="2" height="2" fill="#161616"/>
            </svg>
          </p>
      </a>
    `
  }).join('');

  const projects = document.querySelector(".js-project");  

  if (projects !== null) { 
    projects.insertAdjacentHTML('afterbegin', cardMarkup);
  }
}
  
renderProjects();
