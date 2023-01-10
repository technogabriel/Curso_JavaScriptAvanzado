
/**
 *Metodos static
class Triple{
    static tripple(n){
        n= n||1;
        return n*3;
    }
}

class tripleMayor extends Triple{
    static tripple(n){
        return super.tripple(n) * super.tripple(n);
    }
}

console.log(Triple.tripple(6));
console.log(tripleMayor.tripple(3));
***********************************************************************
CLOSURE

const valor = 1;
function obtenerModulo(){
    let datos=[1,2,3,4,5];
    return datos.filter((item) => item % valor === 0);
}
console.log(obtenerModulo());

//Otro Ejemplo
var a = 1;
function externa(x){
    var b =10;
    console.log(x,b,a);
}
externa(2);

function miFuncion(){
    let contar=1;
    function contador(){
        contar++;
        console.log(contar);
    }
    setInterval(contador, 1500);
}

miFuncion();


const modulo = (function(){
    function metodoPrivado(){}
        let valorPrivado ="abc";
        return{ 
            get: valorPrivado,
            set: function(v){
            valorPrivado=v;
            console.log(valorPrivado);
            },
        };

})();

var x = modulo;
x.set("Otro valor...")
console.log(x.get);
********************************************************************
Function Factory:

const crearUsuario = ({userName, avatar}) =>({
   // id:crearUnID(),
    userName,
    avatar,
    cambiarUserName(userName){
        this.userName = userName;
        return this;
    },
    cambiarAvatar(url){
        const nuevoAvatar = nuevoAvatar;
        return this;
    },
});

console.log(crearUsuario({userName:'technogabriel', 
            avatar:'https://avatars.githubusercontent.com/u/47489756?s=400&u=1a71af84f2d9b07e70d8ee45a1c4fe23b1b57bdc&v=4'}));
**************************************************************************

POO en Js
HERENCIA:
*/
class User{
    #password;
    constructor(email, password){
        this.email =email;
        this.#password = password;
    }

    login(email, password){
        if(email === this.email && password === this.#password){
            console.log('Inicia sesion...');
        }else{
            console.log('Error de autenticacion...');
        }
    }

    resetPassword(newPassword){
        this.#password = newPassword;
    }

    logout(){
        console.log('Sesion cerrada con exito!');
    }
}

class Author extends User{
    #numOfPost;
    constructor(email, password){
        super(email,password);
        this.#numOfPost = 0;
    }

    createPost(post){
        this.#numOfPost++;
    }

    getNumPost(){
        return this.#numOfPost;
    }
}

class Admin extends User{
    constructor(email, password){
        super(email, password);
    }

    removeUser(userId){
       // console.log('Usuario con el ID: "x" Eliminado');
       console.log(`Usuario con el ID : ${userId} eliminado con exito...!`);
    }
}
//Instancio el Usuario:
const pepe = new User('pepito@mail.com', '12345');
//Instanciamos el objeto Author:
const ana = new Author('ana@gmail.com', 'anita1234');

//instanciar un Admin:
const admin = new Admin('admin@administrator.com', 'admin');

class Animal{
    constructor(name){
        this.name= name;
    }
    hablar(){
        console.log(this.name  + ' hace ruido!');
    }
}

class Perro extends Animal{
    hablar(){
        console.log(this.name + " ladra!!");
    }
}

const perrito = new Animal('Lolo');
const heredaPerro = new Perro();

