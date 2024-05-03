const projectList = [
  {
    name: "Raus Companion",
    text: "Reducing Customer Service requests with the first in-house product",
    img: "img/projects/project-companion/companion-thumb-2x.jpg",
    alt: "raus companion project image",
    link: "pages/case-companion.html",
    firstImgClass: "js-first-img",
    chip01: "UX",
    chip02: "UI",
    chip03: "Design system",
  },
  {
    name: "Raus design assets",
    text: "Laying the foundation for Raus design system",
    img: "img/projects/project-raus-ds/raus-design-system--thumb-2x.jpg",
    alt: "raus design assets image",
    link: "pages/case-design-system.html",
    firstImgClass: "",
    chip01: "UI",
    chip02: "Figma",
    chip03: "Design system",
  },
  {
    name: "tink Blog",
    text: "Redesign of the company blog,  leading to a 23% increase in readers",
    img: "img/projects/project-tink-blog/tink-blog-thumb-2x.jpg",
    alt: "tink blog redesign project image",
    link: "pages/case-blog.html",
    firstImgClass: "",
    chip01: "UX",
    chip02: "UI",
    chip03: "Branding",
  },
  {
    name: "Personal portfolio 2022",
    text: "0 to 1 product: from strategy to web development with great results",
    img: "img/projects/project-mybranding/my-branding-thumb-2x.jpg",
    alt: "Personal bramding project image",
    link: "pages/case-branding.html",
    firstImgClass: "",
    chip01: "Strategy",
    chip02: "Branding",
    chip03: "Web dev",
  },
];

//function with new card design & not lazy load -> make the anchor to not being correct
function renderProjects() {
  const cardMarkup = projectList
    .map(function (project) {
      return `
      <a class="card" href="${project.link}">
        <img
          class="card__img"
          src="${project.img}"
          alt="${project.alt}"
        />
        <div class="card__name-wrapper">
          <p class="card__title txt-upcase txt-x-small">
          ${project.name}
          </p>
          <div class="card__arrow">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="11" width="20" height="2" fill="#161616" />
                <rect x="18" y="9" width="2" height="2" fill="#161616" />
                <rect x="18" y="13" width="2" height="2" fill="#161616" />
                <rect x="16" y="15" width="2" height="2" fill="#161616" />
                <rect x="14" y="17" width="2" height="2" fill="#161616" />
                <rect x="16" y="7" width="2" height="2" fill="#161616" />
                <rect x="14" y="5" width="2" height="2" fill="#161616" />
              </svg>
            </div>
          </div>
        <h3 class="card__text txt-regular">
        ${project.text}
        </h3>
        <div class="card__chip-container flex flex-center--v">
          <div class="flex flex--wrap">
            <span class="chip chip--small">${project.chip01}</span>
            <span class="chip chip--small">${project.chip02}</span>
            <span class="chip chip--small">${project.chip03}</span>
          </div>
        </div>
      </a>
            `;
    })
    .join("");

  const projects = document.querySelector(".js-project");

  if (projects !== null) {
    projects.insertAdjacentHTML("afterbegin", cardMarkup);
  }
}

renderProjects();
