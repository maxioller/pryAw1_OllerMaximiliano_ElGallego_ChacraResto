export function crearCardProducto(producto) {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img class="producto_imagen" src="${producto.Imagen}" alt="${producto.titulo}">
    <div class="producto_detalles">
      <h3 class="producto_titulo">${producto.titulo}</h3>
      <p class="producto_detalle_ingredientes">${producto.descripcion}</p>
      <p class="producto_precio">${producto.precio}</p>
      <div class="contador">
        <button class="btn-restar">-</button>
        <span class="cantidad">1</span>
        <button class="btn-sumar">+</button>
      </div>
      <button class="producto_agregar" id="${producto.id}">Agregar</button>
    </div>
  `;
  return div;
}