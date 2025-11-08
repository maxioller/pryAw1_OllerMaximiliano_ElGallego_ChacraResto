const navElements = [
    { title: 'Inicio', link: '../../index.html' },
    { title: 'Productos', link: '../productos.html' },
    { title: 'Nosotros', link: '../nosotros.html' },
    { title: 'Contacto', link: '../contacto.html' }
]



export const navBarComponents = `
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