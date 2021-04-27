import './sass/main.scss';
import data from "./menu.json";

const menuData = JSON.parse(data);
const source = document.querySelector('#menu-template').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(data);
const container = document.querySelector('.js-menu');
container.innerHTML = markup;
