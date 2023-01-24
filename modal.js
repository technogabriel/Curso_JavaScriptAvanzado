const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const botonAbrir = document.getElementById("boton-carrito");
const botoCerrar = document.getElementById("carritoCerrar");
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

contenedorModal.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

botonAbrir.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

botoCerrar.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation();
});
