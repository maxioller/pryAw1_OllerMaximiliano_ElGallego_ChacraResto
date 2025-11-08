import { navBarComponents } from "../components/navBarSegundoNivel.js";
import { footerComponents } from "../components/footerSegundoNivel.js";

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');

window.addEventListener('load', () => {
    navContainer.innerHTML = navBarComponents;
    footerContainer.innerHTML = footerComponents;
})
