//Abstraccion:
class User{
    #password;
    constructor(name,email){
        this.name = name;
        this.email=email;
    }

    #validateEmail(email){
        return true;
    }

    #validatePassword(password){
        return true;
    }

    #isRegisterUser(email){
        return true;
    }

    signUp(name, email,password){
        let isValidated = false;
        isValidated = this.#validateEmail(email);
        isValidated = this.#validatePassword(password);

        if(isValidated){
            this.name = name;
            this.email = email;
            this.#password = password;

            console.log("Usuario registrado con exito!");
        }else{
            console("Ingrese los datos correctamente!");
        }

    }

    login(email,password){
        if(email === this.email && password === this.#password){
            console.log('Iniciando sesion...!')
        }else{
            console.log('Login incorrecto...!')
        }

    }
    resetPassword(email,password){
        if(this.#isRegisterUser(email)){
            this.#password = newPassword;
            console.log("Operacion realizada con exito")
        }else{
            console.log('Contraseña no cambiada');
        }
    }
}

const ana = new User();
ana.signUp('AnaD','anita_d@mail.com','ad1234');
console.log(ana);
