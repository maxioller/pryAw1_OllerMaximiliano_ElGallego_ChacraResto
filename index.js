import { navBarComponents } from "./components/navBarPrimerNivel.js";
import { footer } from "./components/footerPrimerNivel.js";


let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');

window.addEventListener('load', () => {
    navContainer.innerHTML = navBarComponents;
    footerContainer.innerHTML = footer;
})