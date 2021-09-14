import menuData from '../menu.json';
import menuTemplate from '../templates/card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let uiTheme = localStorage.getItem('ui-theme');
if (!uiTheme) {
  uiTheme = Theme.LIGHT;
  localStorage.setItem('ui-theme', Theme.LIGHT);
}

const body = document.querySelector('body');
const changeThemeCheckbox = body.querySelector('.theme-switch__toggle');
const menuList = body.querySelector('.js-menu');

body.classList.add(uiTheme);
changeThemeCheckbox.checked = uiTheme === Theme.LIGHT ? false : true;

const menuMarkup = menuTemplate(menuData);
menuList.insertAdjacentHTML('beforeend', menuMarkup);

changeThemeCheckbox.addEventListener('change', onChangeTheme);

function onChangeTheme(event) {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  localStorage.setItem('ui-theme', event.target.checked ? Theme.DARK : Theme.LIGHT);
}
