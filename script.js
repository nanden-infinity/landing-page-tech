// Iniciando no script para landing page com todos as atualizacao ate a ultima versao
const buttonShowMenu = document.querySelector(".button--show__Menu");
const header = document.querySelector("header")
const heroSection = document.querySelector('.banner');

//  Fazendo loop nos eventos exibindo com satrt touchStart
const events = ["click", "touchstart"].forEach((eventTouch) =>
  buttonShowMenu.addEventListener(eventTouch, openMenu)
);

function openMenu() {
  const navBar = document.querySelector("nav.nav-bar__menu");
  console.log(navBar);
  navBar.classList.toggle("open--menu");
  navBar.children[0].classList.toggle("show-menu");
  console.log(navBar);
}

const initMenu = () => {
  // const containerMenu = document.querySelector('.container--menu');
  const listMenu = `<ul class="list--menu modal">
          <li class="list-items"><a href="" class="link--nav">Air Force</a></li>
          <li class="list-items"><a href="" class="link--nav">Puma</a></li>
          <li class="list-items"><a href="" class="link--nav">Adidas</a></li>
          <li class="list-items"><a href="" class="link--nav">Nike</a></li>
        </ul>`;
};

const appendForm = () => {
  const form = ` <form action="">
    <label for="username">Username</label>
    <input type="text" name="username" id="username" placeholder="insert your name">
    <label for="email">Username</label>
    <input type="text" name="email" id="email" placeholder="insert your email ">
    </form>`;
};

const allLinks = document.querySelectorAll("nav ul a");

allLinks.forEach((link) => {
  link.addEventListener("click", goToSection);
});

function goToSection(event) {
  event.preventDefault();
  const target = event.target;
  const id = target.getAttribute("href").slice(1);
  const section = document.getElementById(id);
  console.log(section)
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const oberva = new IntersectionObserver(
  (entry) => {
    const isVisible = entry[0].isIntersecting;
    if (!isVisible) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    rootMargin: "-180px",
    threshold: null
  }
);


oberva.observe(heroSection)