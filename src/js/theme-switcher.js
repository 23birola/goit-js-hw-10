class ThemeSwitcher { 
  constructor({ pageSelector, switcherSelector }){
    this.refs = {
        page: document.querySelector(pageSelector),
        switcher: document.querySelector(switcherSelector)
      };
      
    const persistedThemeState = localStorage.getItem("theme");
    if (persistedThemeState === "dark-theme") {
        this.toggle();
        this.refs.switcher.setAttribute('checked', true);
      }
    }
    toggle() {
        this.refs.page.classList.toggle("light-theme");
        this.refs.page.classList.toggle("dark-theme");
        this.refs.page.classList.contains("light-theme") ? localStorage.setItem("theme", "light-theme") : localStorage.setItem("theme", "dark-theme");
    }
}
  
const themeSwitcherData = {
    pageSelector: 'body',
    switcherSelector: '.theme-switch__toggle'
}

const menuThemeSwitcher = new ThemeSwitcher(themeSwitcherData);
menuThemeSwitcher.refs.switcher.addEventListener("change", () => menuThemeSwitcher.toggle());