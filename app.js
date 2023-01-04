/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.blob())
.then((data)=> console.log(data));
************************************************************************************************
BLOB API

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.blob());
//.then((data)=> console.log(data));

let blob = new Blob(["hello","", "world"], {type: 'text/html'});
console.log(blob);

**************************************************************************************************
BLOB como URL

let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hola mundo'], {type:'text/plain'});

link.href = URL.createObjectURL(blob);

link.click();

URL.revokeObjectURL(link.href);
******************************************************************************************************

DROG & DROP
*/

//Arrastre
let drop = document.getElementById('drop');
drop.addEventListener('dragover', (e)=>{
    e.preventDefault();
    e.stopPropagation();
})

//soltar
drop.addEventListener('drop', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log('Archivo Soltado');
})
