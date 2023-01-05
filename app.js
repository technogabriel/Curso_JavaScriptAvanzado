//Callback Hell
/*
let lista = 1;
function agregarNum(callback){
    setTimeout(()=>{
        lista +=1;
        callback();
    }, 1500);
}
//Mala practica
agregarNum(()=>{
    console.log(lista);
    agregarNum(()=>{
        console.log(lista);
    })
})

******************************************************************************************************
//Utilizacion de Promesas
let promesa= new Promise(function(resolve, reject){
    let suma = 1+4;
    if(suma ===5){
        resolve('Exito');
    }else{
        reject('Error');
    }
});

promesa.then(function(msje){
    console.log(msje);
}).catch(function(error){
    console.log(error);
});

// Otra funcion AsincronaPromises
const operacionAsincronaConPromesa = (num1,num2)=>{
    let result = num1+num2;
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(result);
        }, 1500);

    });
};

operacionAsincronaConPromesa(12,3).then((result)=> console.log(result));
****************************************************************************************************
GEOLOCATION

//Longitud y latitud
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.latitude, position.coords.longitude);
    });

//Otra forma de Geolocalizacion
const options = {
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0,
};
function success(pos){
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`More or less : ${crd.accuracy} meters.`)
}

function error(err){
    console.warn(`Error${err.code} : ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
******************************************************************************************************
*/
