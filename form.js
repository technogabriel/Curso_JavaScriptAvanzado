const nombre = document.getElementById('nombre');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

//eventListener
form.addEventListener('submit', (e)=>{
    let messages = []

    if(nombre.value === '' || nombre.value == null){
        messages.push('El nombre es requerido');
    }

    if(password.value.length <= 4){
        messages.push('la contraseña debe tener mas de 4 caracteres');
    }

    if(messages.length >0){
        e.preventDefault();
        error.innerText=messages.join();
    }

  
})