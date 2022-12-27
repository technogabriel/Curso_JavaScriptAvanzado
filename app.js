/*
//Operacion Sincrona y Bloqueante:
(()=>{
    console.log('Inicio de Ejecucion');

    function uno(){
        //Operacion sincrona y bloqueante:
        console.log('Tarea 1');
        dos();
        console.log('Tarea 3');
    }

    function dos(){
        console.log('Tarea 2');
    }

    uno();
    console.log('Fin ejecucion');
})();

//Operacion Asincrona - No Bloqueante:
(()=>{
    console.log('Inicio de Asincronia...');

    function uno(){
        console.log('Tarea 1');
        dos();
        console.log('Tarea 3');
    }

    function dos(){
        setTimeout(()=>{
            console.log('Tarea 2');
        }, 1500);
    }

    uno();
    console.log('Final de la Ejecucion...');
})();
***************************************************************************************************************

//XMLHttpRequest API:
let url = "https://pokeapi.co/api/v2/pokemon";
let request =new XMLHttpRequest();
//console.log(request.readyState);//siempre inicia en 0
//open permite configurar una solicitud saliente ya inicializada
//Apertura
request.open('GET', url);//0

request.onreadystatechange = function(){
    //manejo de estados
    if(request.status >=200 & request.status <300){
        console.log('Satisfactoria');
    }else if(request.status > 300){
        console.log('Error');
    }

    if(request.readyState == 2){
        console.log('Encabezado recibido');

    }else if(request.readyState == 3){
        console.log('Cargando');
        let json = JSON.parse(request.responseText).results;
        //forEach para c/u -> element.name imprime el nombre
        json.forEach(element => {
            console.log(element.name);
        });

    }else if(request.readyState == 4){
        console.log('La solicitud finalizo');
    }
    console.log('estatusCode: ', request.status);
};

//Envio con o sin Datos
request.send();
*/

/*
Realice una funcion anonima donde instancie un objeto XMLHttpRequest que realice una GET
a la api jsonplaceholder, la cual debe pintar un listado de 10 usuarios en nuestro html

Resolucion:

let url = 'https://jsonplaceholder.typicode.com/users'
let request =new XMLHttpRequest();
let ul = document.getElementById('users');

request.open('GET', url);

request.onreadystatechange = function(){
    if(request.readyState ==3){
        let users = JSON.parse(request.responseText);
        users.forEach(user => {
            let li = document.createElement('li');
            li.innerText = user.name;
            ul.appendChild(li);    
        });    
    }
}
request.send();
*/
//SPA & REST



