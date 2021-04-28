import './sass/main.scss';
import template from "./templates/menu-template.hbs"
import menuData from "./menu.json";


const markup = template(menuData);
const container = document.querySelector('.js-menu');
container.insertAdjacentHTML('afterbegin', markup);
