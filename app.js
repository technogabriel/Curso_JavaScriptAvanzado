/*
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then((data)=> console.log(data));

*******************************************************************************
*/
/*
//ejemplo Fetch completo:
(()=>{
    const url="https://jsonplaceholder.typicode.com/users";
    const listado = document.getElementById('listado');
    const fragment = document.createDocumentFragment();

    fetch(url) // Solicitud GET
    .then((res)=>{
        console.log(res);
        return res.ok? res.json() : Promise.reject(res);
    }) //Si exitoso -> convierte a json
    .then(json =>{
        json.forEach(element => {
            const li = document.createElement('li');
            li.textContent = ` ${element.name}`;
            fragment.appendChild(li)
        });
        //imprimimos datos de api
        listado.appendChild(fragment);
    })
    //captura de errores
    .catch((error)=>{
        console.log(error.status);
    })
   
})();
*/

//DESAFIO:
(()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const th1 = document.getElementById('name');
    const th2 = document.getElementById('url');
    const fragment = document.createDocumentFragment();
    const fragment2 = document.createDocumentFragment();

    fetch(url)
    .then((res)=>{
        console.log(res);
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(json =>{
        /*
        json.results.forEach(element => {
            const td = document.createElement('td');
            td.innerText=`${element.name}`;
            fragment.appendChild(td);
            */
           console.log(json.results);
           json.results.forEach(element=>{
            const trName = document.createElement('tr');
            const trUrl = document.createElement('tr');
            //td.innerText = `${element.name} url: ${element.url}`;
            trName.innerText= `${element.name}`;
            trUrl.innerText = `${element.url}`;
            
           fragment.appendChild(trName);
           fragment2.appendChild(trUrl);
           });
           th1.appendChild(fragment);
           th2.appendChild(fragment2);
    })
    .catch((error)=>{
        console.log(error.status);
    })

})();
