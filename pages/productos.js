import { crearCardProducto } from "../components/cardProductos.js";

let productos = [];
const contenedorProductos = document.querySelector("#contenedor_productos");
const botonesCategoria = document.querySelectorAll(".boton_categoria");
const tituloPrincipal = document.querySelector("#titulo_principal");

fetch("./productos.json")
  .then(r => r.json())
  .then(data => {
    productos = data;
    CargarProductos(productos);
    activarBotones();
  });

function CargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";
  productosElegidos.forEach(producto => {
    const card = crearCardProducto(producto);
    contenedorProductos.append(card);
  });
}

function activarBotones() {
  botonesCategoria.forEach(boton => {
    boton.addEventListener("click", e => {
      botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id == e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            CargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            CargarProductos(productos);
        }
    });
  });
}

contenedorProductos.addEventListener("click", (e) => {
  const btn = e.target;

  // aumentar cantidad
  if (btn.classList.contains("btn-sumar")) {
    const card = btn.closest(".producto");
    const span = card.querySelector(".cantidad");
    let valor = parseInt(span.textContent);
    span.textContent = valor + 1; 
  }

  // disminuir cantidad
  if (btn.classList.contains("btn-restar")) {
    const card = btn.closest(".producto");
    const span = card.querySelector(".cantidad");
    let valor = parseInt(span.textContent);
    if (valor > 1) { 
      span.textContent = valor - 1;
    }
  }
});