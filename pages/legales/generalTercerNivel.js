import { footerComponents } from "../../components/footerTercerNivel.js";
import { navBarComponents } from "../../components/navBarTercerNivel.js";



let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');

window.addEventListener('load', () => {
    navContainer.innerHTML = navBarComponents;
    footerContainer.innerHTML = footerComponents;
})