/*
POO


//Clases

class Usuario{
    #password;
    constructor(name,email, password){
        this.name = name;
        this.email = email;
        this.#password = password;
    }

    login(email,password){
        if(email === this.email && password === this.#password){
            console.log('Login con éxito!!!')
        } else {
            console.log('Datos incorrectos');
        }
    }

    setPassword(newPass){
        this.#password = newPass;
    }
}

const ana = new Usuario('Ana', 'ana@gmail.com', 'ana1234');
console.log(ana);

ana.login('ana@gmail.com','ana1234');

*****************************************************************************
This:

let x = {
    nombre:'Ana',
    email: 'ana@gmail.com',
    edad: 25,
    decirEdad(num){
        let resultado = num + this.edad;
        console.log(resultado);
    },
};
x.decirEdad(5);

let sumar = {
    arrayNumeros : [2,4,6,8],
    sumarDos:2,
    sumarNumeros(){
        this.arrayNumeros.forEach((e)=>{
            console.log(e + this.sumarDos);
        });
    },
};
sumar.sumarNumeros();
**********************************************************************************

//Palabra clave(reservada)static
*/
class Tripple{
    static tripple(n){
        n = n||1;
        return n*3;
    }
} 

console.log(Tripple.tripple(2));