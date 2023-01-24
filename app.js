const contenedorProductos = document.getElementById('contenedor-productos');
const contadorCarrito= document.getElementById('contadorCarrito');

const carritoContenedor = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');

const precioTotal = document.getElementById('precioTotal');

const cantidad = document.getElementById('cantidad');



let carrito=[];

botonVaciar.addEventListener('click',()=>{
    carrito.length=0;
    actualizarCarrito();
})

stockProductos.forEach((productos)=>{
    const div = document.createElement('div');
    div.classList.add("producto")
    div.innerHTML=`
    <div class="card p-2" style="width: 18rem;">
    <img src=${productos.img} class="card-img-top" alt=${productos.nombre}>
    <div class="card-body">
      <h3 class="card-title">${productos.nombre}</h3>
      <p class="card-text">${productos.des}</p>
      <p class="card-text">${productos.tipo}</p>
      <p class="card-text">${productos.talle}</p>
      <h2 class="card-text">${productos.precio}</h2>
      <button id="agregar${productos.id}" class="btn btn-primary">Agregar</a>
    </div>
  </div>
    `;
    
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${productos.id}`);
    boton.addEventListener('click', ()=>{
        //funcion agregar al carrito
        agregarAlCarrito(productos.id);
    });

});

const agregarAlCarrito=(prodId)=>{
    //comprueba si hay elementos en el carrito
    const existe=carrito.some((prod)=> prod.id === prodId);
    if(existe){
        const producto = carrito.map((prod)=>{
            if(prod.id === prodId){
                prod.cantidad++;
            }
        });
    }else {
        const item=stockProductos.find((prod)=>prod.id=== prodId);
        carrito.push(item);
    }
    actualizarCarrito();
};

const actualizarCarrito=()=> {
    contadorCarrito.innerHTML="";

    carrito.forEach((prod)=>{
        const div = document.createElement('div');
        div.className="productoEnCarrito";
        div.innerHTML= `
            <p>Nombre: ${prod.nombre}</p>
            <p>Precio: ${prod.precio}</p>
            <p>Cantidad:<span id="cantidad">${prod.cantidad}</span></p>
            <button onclick="eliminarDelCarrito(${prod.id})" class= "boton-eliminar">(X)</button>        
        `;
        contadorCarrito.appendChild(div);

    });
    contadorCarrito.innerText=carrito.length;

    precioTotal.innerHTML=carrito.reduce(
        (acc,prod)=> acc + prod.cantidad * prod.precio,
        0
    );
};

const eliminarDelCarrito=(prodId)=>{
    const item = carrito.find((prod =>prod.id === prodId));
    const indice = carrito.indexOf(item);

    carrito.splice(indice, 1);

    actualizarCarrito();
};

