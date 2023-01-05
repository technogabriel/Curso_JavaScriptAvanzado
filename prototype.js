/*
PROTOTYPE

var person1 = {
    nombre:"Andres",
    apellido:"Perez"
};

//Propiedad <prototype> por defecto
console.log(person1._proto_);
*/

function Perro(nombre, edad){
    let perro = Object.create(ObjetoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let ObjetoConstructor = {
    ladra: function(){
        return "guau guau!";
    },
};

let bamba = Perro('bamba', 2);
console.log(bamba);

let firulais = Perro('firulais', 5);
console.log(firulais)