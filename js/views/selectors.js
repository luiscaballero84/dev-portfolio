console.log("selectors is connected");

export const elements = {
  burgerIcon: document.querySelector('.navbar-burger'),
  navMenu: document.querySelector('.navbar-menu'),
  projectsBtn: document.getElementById('project-btn'),
  aboutBtn: document.getElementById('about-btn')
};

export const anchors = {
  projects: document.getElementById('projects-section')
};

console.log(elements.burgerIcon);
console.log(elements.navMenu);