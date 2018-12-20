// 1. Validar que el usuario introduzca un email y contraseña. 
// 1.1 Marcar en rojo los campos que no sean rellenados
// 2. Comprobar que sean iguales entre sí
// 2.1 Marcar en verde cuando sean iguales
// 2.2 Marcar en naranja cuando no sean iguales
// 3. Cuando esté todo correcto, indicar "Registrado con éxito" y el fondo de table, en verde

function CosasIguales (inputTexto1, inputTexto2, texto1, texto2)
    {
    var comparacion = texto1.localeCompare(texto2);    
    if (comparacion == 0 && texto1 != "" && texto2 !== "")
        { 
        inputTexto2.style.borderColor = "green"; 
        }
    else
        {
        inputTexto2.style.borderColor = "orange"; 
        }
    }

function RegistradoCorrectamente (texto1, texto2, texto3, texto4)
    {
    var inputMensaje = document.getElementById ("mensaje");
    var comparacion1 = texto1.localeCompare(texto2);
    var comparacion2 = texto3.localeCompare(texto4); 
    var tabla = document.getElementById ("tabla"); 
    if (comparacion1 == 0 && comparacion2 == 0 && texto1 != "" && texto2 !== "" && texto3 !== "" && texto4 !== "")
        { 
        inputMensaje.value = "Registrado con éxito";
        tabla.style.backgroundColor = "green"; 
        }
    }

function validar ()
    {
    var inputEmail = document.getElementById ("email"); 
    var email = inputEmail.value; 
    validarInput (inputEmail, email); 

    var inputEmailRep = document.getElementById ("email_rep"); 
    var emailRep = inputEmailRep.value; 
    validarInput (inputEmailRep, emailRep); 
    CosasIguales (inputEmail, inputEmailRep, email, emailRep); 
        
    var inputContraseña = document.getElementById ("password"); 
    var contraseña = inputContraseña.value;  
    validarInput (inputContraseña, contraseña);  

    var inputContraseñaRep = document.getElementById ("password_rep"); 
    var contraseñaRep = inputContraseñaRep.value; 
    validarInput (inputContraseñaRep, contraseñaRep);
    CosasIguales (inputContraseña, inputContraseñaRep, contraseña, contraseñaRep); 

    RegistradoCorrectamente (email, emailRep, contraseña, contraseñaRep); 
    }

function validarInput (inputTexto, texto)
    {
    if (texto == "")
        {
        inputTexto.style.borderColor = "rojo";
        }
     else 
        {
        inputTexto.style.borderColor = ""; 
        }
    }