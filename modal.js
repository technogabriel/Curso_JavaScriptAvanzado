const contenedorModal = document.getElementsByClassName('modal-contenedor')[0];
const botonAbrirModal = document.getElementById('boton-carrito');
const botonCerrarModal = document.getElementById('carritoCerrar');
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];

contenedorModal.addEventListener('click',()=>{
    contenedorModal.classList.toggle('modal-active')

});

botonAbrirModal.addEventListener('click',()=>{
    botonAbrirModal.classList.toggle('modal-active');
    
})

botonCerrarModal.addEventListener('click',()=>{
    botonCerrarModal.classList.toggle('modal-active');
    
})

modalCarrito.addEventListener('click',(event)=>{
    event.stopPropagation();
    
})
