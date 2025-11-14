let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito_producto_eliminar");
const botonVaciar = document.querySelector(".carrito_acciones_vaciar");
const botonComprar = document.querySelector(".carrito_acciones_comprar");
const contenedorTotal = document.querySelector("#total");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length>0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito_producto");
            div.innerHTML = `
            <img class="carrito_producto_imagen" src="${producto.Imagen}" alt="${producto.titulo}">
            <div class="carrito_producto_titulo">
              <small>Producto</small>
              <p>${producto.titulo}</p>
            </div>
            <div class="carrito_producto_cantidad">
              <small>Cantidad</small>
              <p>${producto.cantidad}</p>
            </div>
            <div class="carrito_producto_precio">
              <small>Precio</small>
              <p>$${producto.precio}</p>
            </div>
            <div class="carrito_producto_subtotal">
              <small>Subtotal</small>
              <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito_producto_eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
        `

            contenedorProductos.append(div);
        });
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();


function actualizarBotonesEliminar() {
    botonesAgregar = document.querySelectorAll(".carrito_producto_eliminar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    console.log(productosEnCarrito);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();

}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
    
    contenedorCarritoComprado.classList.remove("disabled");
    contenedorCarritoVacio.classList.add("disabled");
}