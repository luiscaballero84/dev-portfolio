const projectList = [
  {
    name: "ChillQuote",
    text: "App build in ReactJS where you can share quotes on Twitter",
    link: "https://github.com/caballero-react-ex/chillquotes",
  },
  {
    name: "Euromillions ",
    text: "A small Euromillions lottery React app",
    link: "https://github.com/caballero-react-ex/euromillions",
  },
];

const projects = document.querySelector(".project-title-grid-item");

function renderProjects() {
  const cardMarkup = projectList.map(function(project) {  

    return `
      <a class="project-item" href="${project.link}">
        <h3 class="project-item__titel">${project.name}</h3>
        <p class="project-item__text">
          ${project.text}
        <span class="project-item__icon material-icons"> arrow_forward </span>
        </p>
      </a>
    `
  }).join('');

  projects.insertAdjacentHTML('afterend', cardMarkup);
}
  
renderProjects();
