/*
class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    login(email,password){
        if(email===this.email && password===this.password){
            console.log('Inicio de sesion exitoso...!')
        }else{
            console.log('sesion no iniciada...!')
        }
    }
}

class Author extends User{
    #numOfPost;
    constructor(email,password){
        super(email,password);
        this.#numOfPost=0;
    }

    createPost(content){
        this.#numOfPost++;
    }

    getNumberOfPost(){
        return this.#numOfPost;
    }
}

class Admin extends User{
    constructor(email,password){
        super(email,password);
    }

    login(email,password){
        const isAdmin= true;

        if(email=== this.email && password === this.password && isAdmin){
            console.log('logon as Admin...!');
        }else{
            console.log('no se pudo iniciar la sesion');
        }
    }

    removeUser(userId){
        console.log(`Usuario con el ID : ${userId}, eliminado con exito...!`);
    }
}

const admin = new Admin('admin@admin.com','admin1234');
admin.login('admin@admin.com','admin1234');
console.log(admin);
******************************************************************************************************
//EJERCICIO 1:

cree clase llamada factura con constructor que contenga
numero de comprobante, razon social, fecha de emision, producto, cantidad, precio, importe total
Luego inicializar una instancia factura con argumentos para el caso

class Factura{
    constructor(numComprobante,razonSocial,fechaEmision,producto,cantidad,precio,importeTotal){
        this.numComprobante = numComprobante;
        this.razonSocial = razonSocial;
        this.fechaEmision = new Date().toLocaleDateString();
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.importeTotal = importeTotal;
    }
}

const factura = new Factura('1234','Motorola S.A.','','motorola G 30 ultra', '1','219.999,99','220.000');
console.log(factura);

//EJERCICIO 2:
Crear clase Vehiculo y que tenga las propiedades nombre y velocidad, ademas 2 metodos publicos:
acelerar() incrementando la velocidad en 10 y un metodo que se llame get aceleramos() que nos calcule las millas(velocidad/ 1.6)
Una subclase llamada camion() y que tenga propiedad privada que se llame combustible. Implementar el metodo acelerar() que la velocidad
en el camion aumente de 5 y reste de 2 al combustible cada vez que este metodo se utilice. un ultimo metodo llamado cargarCombustible()
que ingrese por parametro el porcentaje de la carga que le aplicamos.
*/

class Vehiculo{
    nombre;
    velocidad;
    constructor(nombre,velocidad){
        this.nombre = nombre;
        this.velocidad = velocidad;
    }

    acelerar(){
        this.velocidad+=10;
        console.log(`el ${this.nombre} va a ${this.velocidad} km/h`);
    }

    frenar(){
        this.velocidad-=10;
        console.log(`el ${this.nombre} va a ${this.velocidad} km/h`);
    }

    getAceleramos(){
        const millas = this.velocidad/1.6;
        console.log(`acelerando a ${millas} millas`);
    }
}

class Camion extends Vehiculo{
    #combustible;
    constructor(nombre, velocidad,combustible){
        super(nombre,velocidad);
        this.#combustible=combustible;
    }

    acelerar(){
        this.velocidad +=5;
        this.#combustible -=2;
        console.log(`acelerando ${this.nombre} a ${this.velocidad} km/h, con reserva de  ${this.#combustible} combustible`);
    }

    cargarCombustible(cantidad){
        this.#combustible += cantidad;
        console.log(`${this.#combustible} de combustible`);
    }

}

//const auto = new Vehiculo('corsa',80);
//console.log(auto);
//auto.acelerar();
//auto.acelerar();
//auto.frenar();
//auto.getAceleramos();
const camion = new Camion('BMW',80,30);
console.log(camion);
camion.acelerar();
camion.acelerar();
camion.cargarCombustible(46);
console.log(camion);
camion.acelerar();

