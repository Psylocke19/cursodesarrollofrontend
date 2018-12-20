function primeraMayuscula (texto)
    {
    var primeraLetra = texto.charAt(0).toUpperCase (); 
    var resto = texto.substring(1).toLowerCase (); // Desde el 2º hasta el final
    return primeraLetra + resto; 
    }

function validar ()
    {
    var inputNombre = document.getElementById ("nombre"); 
    var nombre = inputNombre.value; 
     validarInput (inputNombre, nombre); 

    var inputApellido1 = document.getElementById ("primer_apellido");
    var primerApellido = inputApellido1.value;  
    validarInput (inputApellido1, primerApellido); 

    var inputApellido2 = document.getElementById ("segundo_apellido"); 
    var segundoApellido = inputApellido2.value; 
    validarInput (inputApellido2, segundoApellido);
    }


function validarInput (inputTexto, texto)
{
    if (texto == "")
        {
        inputTexto.style.borderColor = "blue";
        }
    else 
        {
        inputTexto.style.borderColor = ""; 
        inputTexto.value = primeraMayuscula (texto); 
        }
}




 