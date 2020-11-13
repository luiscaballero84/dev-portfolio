const projectList = [
  {
    name: "ChillQuotes",
    text: "App built in ReactJS where you can share quotes on Twitter",
    link: "https://github.com/caballero-react-ex/chillquotes",
  },
  {
    name: "Grid Systems",
    text: "Responsive site to explore the posibilities of CSS Grids",
    link: "https://github.com/losgridos/01-gridsystems",
  },
];



function renderProjects() {
  const cardMarkup = projectList.map(function(project) {  

    return `
      <a class="card" href="#">
        <div>
          <img src="img/profile-pic-600x600.jpg" alt="profile-pic">
          <h3>${project.name}</h3>
          <p>${project.text}</p>
          <h6>View Project <span class="material-icons"> navigate_next </span></h6>
        </div>
      </a>
    `
  }).join('');

  const projects = document.querySelector(".js-project");  
  projects.insertAdjacentHTML('afterbegin', cardMarkup);
}
  
renderProjects();
