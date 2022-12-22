/*
DESAFIOS:
1) Agregar este array de marcas en nuestro HTML con la etiqueta de lista desordenada y 
agregue un elemento de lista para cada elemento(li)
const marcas =["Philips", "Acer", "Samsung","apple"]
2) cambiar el texto del primer y del ultimo elemento de la lista de cada ul y lo debemos reemplazar por 'Primer Elemento' y 'Ultimo Elemento'
serian los li 1 y li III.

//Resoluciòn primer desafio:
const contenedor = document.getElementById('contenedor');

const marcas =["Philips", "Acer", "Samsung","apple"];
const ul = document.createElement('ul');
for(var i=0; i < marcas.length; i++){
    var li = document.createElement('li');
    console.log(marcas[i]);
    li.innerText = marcas[i];
    ul.appendChild(li);  
}
contenedor.appendChild(ul);

//Resolucion segundo desafio:
const firstElement=[...document.querySelectorAll('ul >li:first-child')];
console.log(firstElement);

const lastElement = [...document.querySelectorAll('ul>li:last-child')];
console.log(lastElement);

firstElement.forEach((elemento)=>{
    elemento.innerText='Primer Elemento';
});
lastElement.forEach((elemento)=>{
    elemento.innerText='Ultimo Elemento';
});
*/

/*
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
*/

/*Eventos de Mouse:


let boton = document.getElementById('btn');

//mouseDown
boton.addEventListener('mousedown',(event)=>{
    console.log('mousedown(oprimiste...)');
});

//mouseUp
boton.addEventListener('mouseup',(event)=>{
    console.log('mouseup(soltaste...)');
});

//mouseOver
boton.addEventListener('mouseover',(event)=>{
    console.log('mouseover(pasaste con el puntero...)');
});

//mouseOut
boton.addEventListener('mouseout',(event)=>{
    console.log('mouseout(saliste...)');
});

boton.addEventListener('mousemove',(event)=>{
    console.log('mousemove(estas moviendo el mouse...)');
});

boton.addEventListener('click',(event)=>{
    console.log('click(estas haciendo click...)');
});
*/

/*
EVENTOS DE TECLADO:

let text = document.getElementById('text');

text.onkeyup =()=> {console.log('keyup')}

text.onkeydown = ()=> {console.log('key down')};
*/

/*

//EVENTO CHANGE:
let text = document.getElementById('nombre');
let number = document.getElementById('edad');

text.onchange= ()=>{console.log('cambiaste de nombre')};

number.onchange= ()=>{console.log('cambiaste la edad')};
*/

//SUBMIT:
/*

let formulario = document.getElementById('formulario');
let texto = document.getElementById('texto');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(event){
    //cancela el event
    event.preventDefault();
    console.log("Formulario Enviado...");
}
*/
/*
//EVENT TARGET
function capturar(event){
    let x = event.target;
    console.log(x);
}

//Current Target

function handleClick(event){
    console.log(`target: ${event.target.id}, currentTarget: ${event.currentTarget.id}`);
}
*/

//Orden de captura + bubbles

const section = document.getElementById('seccion');
const title = document.getElementById('titulo2');

title.addEventListener('click', (e)=>{
    //BUBBLES
   // console.log(e.bubbles, e.cancelBubble);
    //e.stopPropagation();
    //console.log(e.bubbles, e.cancelBubble);
    console.log('me diste "Click" en el titulo');
});

section.addEventListener('click', (e)=>{
    console.log('me diste "click" en la seccion');
},{
    capture:true,
})