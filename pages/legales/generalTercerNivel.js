const navElements = [
    { title: 'Inicio', link: '../../index.html' },
    { title: 'Productos', link: '../productos.html' },
    { title: 'Nosotros', link: '../nosotros.html' },
    { title: 'Contacto', link: '../contacto.html' }
]

const footerElementsPages = [
    { title: 'Productos', link: '../productos.html' },
    { title: 'Nosotros', link: '../nosotros.html' },
    { title: 'Contacto', link: '../contacto.html' }
]

const footerElementsLegales = [
    { title: 'Términos y Condiciones', link: './terminos_y_condiciones.html' },
    { title: 'Políticas de privacidad', link: './politicas_privacidad.html' }
]

const navBar = `
    <nav class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="../index.html">
                <img class="logo" src="../../assets/images/logo_el_gallego.png" alt="El Gallego - Chacra Restó">
            </a>

            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#menuPrincipalColapsable" aria-controls="menuPrincipalColapsable" aria-expanded="false"
                aria-label="Abrir menú">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="menuPrincipalColapsable">
                <div class="nav-wrap">
                    <ul class="menu navbar-nav">
                        ${navElements.map(e => {
                        return `
                            <li class="nav-item">
                                <a class="nav-link" href="${e.link}">${e.title}</a>
                            </li>
                            `
                            }).join('')
                        }
                    </ul>
                    <ul class="icon-list navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link p-0" href="../carrito.html" aria-label="Ver carrito"><i
                                    class="bi bi-cart-fill"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="../login.html" aria-label="Iniciar sesión"><i
                                    class="bi bi-person-circle"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="../../index.html" aria-label="Cerrar sesión"><i
                                    class="bi bi-box-arrow-right">
                                </i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`

const footer = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Legales</h4>
          <ul>
            ${footerElementsLegales.map(e => {
                return `
                    <li>
                        <a href="${e.link}">${e.title}</a>
                    </li>
                    `
                }).join('')
            }
          </ul>
        </div>
        <div class="footer-col">
          <h4>El Gallego</h4>
          <ul>
            ${footerElementsPages.map(e => {
                return `
                    <li>
                        <a href="${e.link}">${e.title}</a>
                    </li>
                    `
                }).join('')
            }
          </ul>
        </div>
        <div class="footer-col">
          <h4>Seguinos</h4>
          <div class="social">
            <a class="social-link" href="https://www.instagram.com/foodtruck_elgallego/" target="_blank" rel="noopener">
              <i class="bi bi-instagram"> Instagram</i>
            </a>
          </div>
          <p class="footer-info">
            Ruta 7 - Rincón de Cruz<br>
            Luis Beltrán, Río Negro
          </p>
        </div>
      </div>
    </div>

    <div class="footer-copy">
      <p>Copyright © 2026 - El Gallego - Chacra Restó. Todos los derechos reservados.</p>
    </div>
    
    <a class="whatsapp-float" href="https://wa.me/5492984396698?text=Hola!%20quiero%20hacer%20un%20pedido"
    target="_blank" rel="noopener noreferrer"> 
        <i class="bi bi-whatsapp"></i>
    </a>
`

let navContainer = document.querySelector('header');
let footerContainer = document.querySelector('footer');

window.addEventListener('load', () => {
    navContainer.innerHTML = navBar;
    footerContainer.innerHTML = footer;
})