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
            <span class="ui-icon material-icons"> east </span>
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
