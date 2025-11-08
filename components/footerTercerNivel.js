const footerElementsPages = [
    { title: 'Productos', link: '../productos.html' },
    { title: 'Nosotros', link: '../nosotros.html' },
    { title: 'Contacto', link: '../contacto.html' }
]

const footerElementsLegales = [
    { title: 'Términos y Condiciones', link: './terminos_y_condiciones.html' },
    { title: 'Políticas de privacidad', link: './politicas_privacidad.html' }
]

export const footerComponents = `
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