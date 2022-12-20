/*DOM scripting */
/*
Crear elementos
*/
/*
const nuevoDiv= document.createElement('div');
nuevoDiv.classList.add('item');

const h2 = document.createElement('h2');
h2.innerText = 'Elemento 2';
nuevoDiv.appendChild(h2);

const p2 = document.createElement('p');
p2.textContent = 'Descripcion del elemento 2';
nuevoDiv.appendChild(p2);

const contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevoDiv);
*/
/*
Eliminar un nodo o elemento
*/

//const.remove()
//se debe poner el hijo especifico que queremos eliminar
//nuevoDiv.removeChild(h2)
/*
DESAFIOS:
1) Agregar este array de marcas en nuestro HTML con la etiqueta de lista desordenada y 
agregue un elemento de lista para cada elemento(li)
const marcas =["Philips", "Acer", "Samsung","apple"]

2) cambiar el texto del primer y del ultimo elemento de la lista de cada ul y lo debemos reemplazar por 'Primer Elemento' y 'Ultimo Elemento'
serian los li 1 y li III.
*/
/*
const marcas =["Philips", "Acer", "Samsung","apple"];
const ul = document.createElement('ul');

for(var i=0; i < marcas.length; i++){
    var li = document.createElement('li');
    console.log(marcas[i]);
    li.innerText = marcas[i];
    ul.appendChild(li);  
}

contenedor.appendChild(ul);
*/
//ToDo:
//hacer el ejercicio2

/* EVENTOS 
1)addEventListener()


const button = document.getElementById('button');
button.addEventListener('click', () =>{
console.log('hiciste click');
});
*/

//contador de clicks
let contador = 0;
let suma = document.getElementById('sumar');
let resta = document.getElementById('restar');
let total = document.getElementById('total');
let reset = document.getElementById('reset');

//addEventListener
suma.addEventListener('click',()=>{
    contador ++;
    total.textContent = contador;
});

resta.addEventListener('click',()=>{
    contador --;
    total.textContent = contador;
});

reset.addEventListener('click',()=>{
    contador=0;
    total.textContent = contador;
});

//onclick

suma.onclick= ()=>{
    console.log("Me diste click utilizando el event onclick");
}

//submit
let formulario = document.getElementById('formulario');
let texto = document.getElementById('texto');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(event){
    console.log(texto.textContent);
    //cancela el event
    event.preventDefault();
    console.log("Formulario Enviado...");
}


