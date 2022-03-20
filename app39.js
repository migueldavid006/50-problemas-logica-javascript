// comprobar que un correo es un mail valido
//
//
 function comprobar(email) {
    return   /^\w+@\w+\.\w+$/gi.test(email)
     
 }

 console.log(comprobar("migueldadvi@gmail.com"))