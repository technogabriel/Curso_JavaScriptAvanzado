/*
Patrones de diseño
Creacional:

class Home{
    constructor(){
        this.bathroom=0;
        this.kitchen=0;
        this.living=0;
        this.garage=0;
    }

    setGarage(value){
        this.garage =value;
        return this;
    }

    setbathroom(value){
        this.bathroom = value;
        return this;
    }

    setKitchen(value){
        this.kitchen = value;
        return this;
    }

    setLiving(value){
        this.living = value;
        return this;
    }

    getHome(){
        return{
            garage: this.garage,
            living : this.living,
            bathroom: this.bathroom,
            kitchen: this.kitchen,
        };
    }
}

const myHome = new Home().setGarage('2').setbathroom('2').setKitchen('1').setLiving('1');
console.log(myHome);

//Modulo:

const Library ={
    API: async(url="", params={})=>{
        const urlAPI = new URL(url);
        urlAPI.search = new URLSearchParams(params).toString();
        return await (await fetch(urlAPI)).json();
    },
};
(async()=>{
    const result = await Library.API(
        "https://jsonplaceholder.typicode.com/users"
    );
    console.log(result);
    console.log(Library);
})();


//Modulo Rvelador:
const Library =(()=>{
    
    const API= async(url="", params={})=>{
        const urlAPI = new URL(url);
        urlAPI.search = new URLSearchParams(params).toString();
        return await (await fetch(urlAPI)).json();
    };
    return {
        apiCall:async(url="", params={}) => await API(url,params),
    };
})();

(async()=>{
    const result = await Library.apiCall(
        "https://jsonplaceholder.typicode.com/users"
    );
    console.log(result);
    console.log(Library);
})();
*/

//Prototipo:
const vivienda={
    domicilio:"",
    cp:"",
    localidad:"",
    provincia:"",
    set:{},
    get:{},
};

Object.keys(vivienda.valueOf()).forEach((value)=>{
    if(!["set","get"].includes(value)){
        vivienda.set[value] = function(data){
            this[value] = data;
        };
        vivienda.get[value] = function(){
            this[value]
        }
    }
});

const vivienda01 = Object.create(vivienda);
console.log(vivienda);