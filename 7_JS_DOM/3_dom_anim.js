// Cogemos todos los div con clase círculo
var arrayDiv = document.getElementsByClassName ("circulo"); 
// Los recorremos para pausarlos por JS
var x; 
for (x = 0; x < arrayDiv.length; x++)
    {
    arrayDiv [x].style.webkitAnimationPlayState = "paused"; 
    }
// Cogemos el DIV padre, con la clase "marco"
var divMarco = document.getElementsByClassName ("marco") [0];
// Le añadimos un <input type = "button" value = "¡Anímate!"/>
var boton = divMarco.appendChild (document.createElement ("input"));  
boton.setAttribute ("type", "button"); 
boton.setAttribute ("value", "¡Anímate!"); 
// Creamos una función para animar de nuevo los círculos
function cuandoSePulsaElBoton ()
    {
    for (var x = 0; x < arrayDiv.length; x++)
        {
        arrayDiv [x].style.webkitAnimationPlayState = "running"; 
        }
    }
    
var botonApagado = divMarco.appendChild (document.createElement ("input"));  
botonApagado.setAttribute ("type", "button"); 
botonApagado.setAttribute ("value", "¡Para ya!");
function cuandoSeApaga ()
    {
    for (x = 0; x < arrayDiv.length; x++)
        {
        arrayDiv [x].style.webkitAnimationPlayState = "paused"; 
        }   
    }
// Hacemos que cuando se pulse el botón, se pausen los círculos
// <input type = "button" value = "¡Anímate!" onclick = "cuandoSePulsaElBoton ()"/>
boton.setAttribute ("onclick", "cuandoSePulsaElBoton ()"); 
botonApagado.setAttribute ("onclick", "cuandoSeApaga ()");

var botonEnciendeApaga = divMarco.appendChild (document.createElement ("input"));  
botonEnciendeApaga.setAttribute ("type", "button"); 
botonEnciendeApaga.setAttribute ("value", "Haz cosas");

function cuandoSePulsaElBoton3 ()
    {
    for (var x = 0; x < arrayDiv.length; x++)
        {
        if (arrayDiv [x].style.webkitAnimationPlayState == "running")
            {
            arrayDiv [x].style.webkitAnimationPlayState = "paused"; 
            }
         else
            {
            arrayDiv [x].style.webkitAnimationPlayState = "running";
            }
        }
    }

botonEnciendeApaga.setAttribute ("onclick", "cuandoSePulsaElBoton3 ()");