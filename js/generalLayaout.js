import { navBarComponents } from "../components/navBar.js";
import { footerComponents } from "../components/footer.js";

const navContainer = document.querySelector("header");
const footerContainer = document.querySelector("footer");

window.addEventListener("load", () => {
  if (navContainer) navContainer.innerHTML = navBarComponents;
  if (footerContainer) footerContainer.innerHTML = footerComponents;
  const btnLoginNav = document.getElementById("btnLoginNav");

  if (btnLoginNav) {
    btnLoginNav.addEventListener("click", (e) => {
      e.preventDefault();

      const userData = sessionStorage.getItem("userData");

      //--- MEJORA ---//
      if (userData) {
        // Logueado -> perfil //--- MEJORA ---//
        window.location.href = "/pages/perfil.html";
      } else {
        // No logueado -> login //--- MEJORA ---//
        window.location.href = "/pages/login.html";
      }
    });
  }
});