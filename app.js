/*
//Patron de comportamiento

(()=>{
    class PatronObservador{
        constructor(){
            this.observadores=[];
        }
        encendido(observador){
            return this.observadores.push(observador);
        }

        apagado(observador){
            const index = this.observadores.indexOf(observador);
            if(index >-1){
                this.observadores.splice(index,1);
            }
        }

        notificacion(observador,mensaje){
            const [obs]= this.observadores.filter((obs => obs === observador));
            //ternario:
            obs?.notificacion?.(mensaje);
        }
    }

    class Persona{
        constructor(nombre){
           debugger;
            this.nombre=nombre;
        }
        notificacion(mensaje){
           debugger;
            console.log(`el mensaje es: ${mensaje}`);
        }
    }

    const ana = new Persona('Ana');
    const pedro = new Persona('pedro');
    const lorena = new Persona('lorena');
    const notifica = new PatronObservador();
    notifica.encendido(ana);
    notifica.encendido(pedro);
    notifica.encendido(lorena);

    notifica.apagado(ana);

    notifica.notificacion(ana, 'Hola Ana');
    notifica.notificacion(pedro, 'Hola Pedro');
    notifica.notificacion(lorena, 'Hola Lorena');
})();

//Patron medidor:

(()=>{
    class TorreControl{
        constructor(){
            this.avion =[];
        }

        agregar(avion){
            this.avion[avion.nombre] = avion;
            avion.mediador= this;

        }

        enviar(msj,from,to=null){
            if(to){
                to.recibir(msj,from);
            }else{
                Object.values(this.avion).forEach((item,index, arr)=>{
                    if(item.id != from.id){
                        item.recibir(msj,from);
                    }
                });
            }
        }
    }

    class Avion{
        constructor(nombre){
            this.nombre = nombre;
            this.mediador= null;
            //forma de obtener fake_id(num) aleatorios:
            const [id] = window.crypto.getRandomValues(new Uint16Array(8));
            this.id = id;
            console.log(id);
        }
        enviar(msj, to){
            this.mediador.enviar(msj,this,to);
        }
        recibir(msj,from){
            console.log(`${this.nombre} = tienes un mensaje de... ${from.nombre} => ${msj}`);
        }
    }

    const airbus = new Avion('Airbus');
    const boeing = new Avion('Boeing737');
    const antonov = new Avion('Antonov');

    const torre = new TorreControl();
    torre.agregar(airbus);
    torre.agregar(boeing);
    torre.agregar(antonov);

    airbus.enviar('solicito despegue');
    boeing.enviar('boeing737');
    antonov.enviar('Antonov5557');

    airbus.enviar('1 a 2', boeing);

})();

Patron de comando:

(()=>{
    const Comando = function(){
        this.item = [];
        this.agregar = function(...args){
            debugger;
            this.item.push(...args);
        };
        this.getItems=function(){
            debugger;
            return this.item;
        };
        return {
            comand:(comando, ...args)=>{
                return this?.[comando]?.(args);
            },
        };
    };

    const ordenes = new Comando();
    debugger;
    ordenes.comand("a","b","c",1,2,3,4, true, () =>"mi funcion");
    console.log(ordenes.comand("Get items"));
})();

patron cadena responsabilidades:

(()=>{
    class ManipulacionTexto{
        constructor(texto, semilla){
            this.texto = texto;
            this.semilla = semilla;
        }
        cortar(){
            this.texto = Array.from(this.texto);
            return this;
        }

        letraANumero(){
            this.texto = this.texto.map((i)=>{
                if(i.toLowerCase()==='a')return 4;
                else if(i.toLowerCase()=== 'b') return 5;
                else if(i.toLowerCase()=== 'c') return 6;
                else if(i.toLowerCase()=== 'd') return 7;
                else if(i.toLowerCase()=== 'e') return 8;
                else return i;
            });
        }

        convertirBinario(){
            this.texto = this.texto.map((i)=>{
                const ifString = typeof i === "string";
                return parseInt(ifString?i.charCodeAt().toString(2): i.toString(2));
            });
            return this;
        }

        comprimir(){
            this.texto = this.texto.map((i)=> i & this.semilla);
            return this;
        }

        unir(){
            this.texto = this.texto.join(".");
            return this;
        }
    }

    const semilla = Math.floor(Math.random()*100000)+1;
    console.log(semilla);

    const texto1 = new ManipulacionTexto('Hola Mundo', parseInt(semilla.toString(2)));
    console.log(texto1);

    const cripto = texto1.cortar().letraANumero().convertirBinario().comprimir().unir(); //esto rompe
    console.log(cripto);
})();

Patron Iterador:

 (async()=>{
    //function* = funcion generadora que devuelve un obj{} generador
    async function* Iterador(data){
        let index = 0;
        while(index < data.length){
            const response = await(await fetch(data[index++])).json();
            //yield devuelve al llamador del generador
            yield response;
        }
    }

    const baseUrl = "https://jsonplaceholder.typicode.com";
    const urls ={
       posts: "/posts", 	
       comments:"/comments", 	
        albums :"/albums",
         photos:"/photos", 	
         todos: "/todos", 	
         users: "/users",
    };

    const list = Object.values(urls).map((i)=>`${baseUrl}${i}`);
    console.log(list);
    const urlIterada = Iterador(list);
    //debugger;
    console.log(await urlIterada.next());
    console.log(await urlIterada.next());
    console.log(await urlIterada.next());
    console.log(await urlIterada.next());
    console.log(await urlIterada.next());
    console.log(await urlIterada.next());

})();

Patron State:

*/
(()=>{
    const gestionarCola = function(){
        var contador= 0;
        var estadoActual=new x1(this);
        this.cambio = function(estado){
            console.log(contador);
            estadoActual= estado;
            contador++;
            if(contador> 10) contador=0;
            estadoActual.next();
        };
        this.contador = function(){
            return contador;
        }
        this.correr = function(){
            estadoActual.next();
        }
    };

    const x1 = function(data){
        this.data = data;
        this.next = function(){
            console.log(`X1 ${data}`);
            const enviar = data.contador() < 10? new x1(data) : new x10(data);
            data.cambio(enviar);
        };
    };

    const x10 = function(data){
        this.data = data;
        this.next = function(){
            console.log(`X10 ${data}`);
            const enviar = data.contador() < 10? new x10(data) : new x100(data);
            data.cambio(enviar);
        };

    };
    const x100 = function(data){
        this.data = data;
        this.next = function(){
            console.log(`FIN X100 ${data}`);
        };
    };

    const patronEstado = new gestionarCola();
    patronEstado.correr();
})();