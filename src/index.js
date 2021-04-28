import './sass/main.scss';
import template from "./templates/menu-template.hbs"
import menuData from "./menu.json";


const markup = template(menuData);
const container = document.querySelector('.js-menu');
container.insertAdjacentHTML('afterbegin', markup);


const themeCheckbox = document.querySelector('.theme-switch__toggle');
const page = document.querySelector('body');
themeCheckbox.addEventListener('change', changeTheme);

function changeTheme () {
    page.classList.toggle("light-theme");
    page.classList.toggle("dark-theme");
    return;
};
 