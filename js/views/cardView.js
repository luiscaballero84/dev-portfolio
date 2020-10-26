const projectList = [
  {
    name: "ChillQuotes",
    text: "App build in ReactJS where you can share quotes on Twitter",
    link: "https://github.com/caballero-react-ex/chillquotes",
  },
  {
    name: "Grid Systems",
    text: "Responsive site to explore the posibilities of CSS Grids",
    link: "https://github.com/losgridos/01-gridsystems",
  },
  {
    name: "Euromillions ",
    text: "ReactJS app that get a random number for the Euromillions lottery",
    link: "https://github.com/caballero-react-ex/euromillions",
  },
];

const projects = document.querySelector(".project-title-grid-item");

function renderProjects() {
  const cardMarkup = projectList.map(function(project) {  

    return `
      <a class="project-item" href="${project.link}" target="_blank" rel="noopener noreferrer">
        <h3 class="project-item__titel">${project.name}</h3>
        <p class="project-item__text">
          ${project.text}
        <span class="project-item__icon material-icons"> navigate_next </span>
        </p>
      </a>
    `
  }).join('');

  projects.insertAdjacentHTML('afterend', cardMarkup);
}
  
renderProjects();
