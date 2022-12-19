
//Sintaxis comilla invertida
//let nombre = "Adan";
//let apellido = "Tarazona";
//let edad = 21;
//console.log( `Hola ${nombre}, tu apellido es ${apellido}, con edad ${edad}`);


//Object
//const obj={x:1, y:2, 0:true};
//console.log(obj);


//funciones

/*

let suma = function(num1, num2){
    let sumar = num1+num2;

    console.log(sumar);
}

suma(5,10);
suma(20,50);
*/

//funciones y variables locales
/*
let globalVar= "Usando VAR global";

function suma(num, num1){

    //variable local y prevalece dentro del bloque - No va a existir fuera de esto
    let globalVar= "Usando mismo nombre de variable dentro de la función";
    console.log(globalVar)
    return num+num1
}

console.log(globalVar);

console.log(suma(20,25))
*/

//USO DEL RETURN:
//utilizamos return cuando devolvemos el valor de la funcion
//Cuando queremos detener la ejecuciòn de la funcion
/*
//CALCULADORA
function calculadora(num1,num2,operacion){
    
    let resultado;
    let signo;
    
    if(operacion ==='+'){
        signo='suma';
        resultado =  num1+num2;
    }else if(operacion ==='-'){
        signo='resta';
        resultado = num1-num2;
    }else if(operacion ==='*'){
        signo='multiplicacion';
        resultado = num1*num2;
    } else if(operacion ==='/'){
        signo='division';
        resultado = num1/num2;
    }

    console.log(`resultado de la ${signo} es= ${resultado}`);
}

calculadora(10,10,'+');
calculadora(30,15,'-');
calculadora(12,12,'*');
calculadora(6,3,'/')
//******************************************************************* */
/*
//funciones anonimas:
const suma = function(a,b){
    return a+b;
}
console.log(suma(5,5));


//funcion flecha con return
const suma2 = (a,b)=>{
    return a+b;
}
console.log(suma2(15,51));


//funcion flecha sin return
const multiplica = a=> a*2;
console.log(multiplica(5))


//Arreglos

let nombres = ["Adan", "Juan", "Pedro"]

nombres.forEach(nombre =>{
    console.log(nombre)
})
*/

function sumar(a,b){
    let suma = a+b;
    document.write(`<p> Resultado = ${suma}</p>`)
}
sumar(10,15)

