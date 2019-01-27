// Función barras skills 

function initializeBars(barNameArray, barValueArray)
  {
	for(i = 0; i < barNameArray.length; i++ )
    {
      setBarValue(barNameArray[i], barValueArray[i]);
    }	
  }


function setBarValue(barName, barValue) 
  {
    var elem = document.getElementById(barName);
    var width = 1;
    var id = setInterval(frame, 10);
    
    function frame() 
      {
        if (width >= barValue) 
        {
        clearInterval(id);
        }
       else 
        {
        width++;
        elem.style.width = width + "%"; 
        elem.innerHTML = width * 1 + "%"
        }
      }
  }



//Esta función muestra la slide número <n> con class=<containerName> y con puntos class=<dotName>
function showSlides(n, containerName, dotName)
  {
  var i; 
  var slides = document.getElementsByClassName (containerName); 
  var dots = document.getElementsByClassName (dotName); 
  var slideIndex = n;

  //Controlo que la variable n viene con formato correcto
  if (n > slides.length)
    {
    slideIndex = 1;
    }
  if (n < 1)
    {
    slideIndex = slides.length; 
    }

  for (i=0; i<slides.length; i++)
    {
    slides[i].style.display = "none"; 
    }
  for (i=0; i<dots.length; i++)
    {
    dots[i].className = dots[i].className.replace("active", ""); 
    }
  slides[slideIndex -1].style.display = "block"; 
  dots[slideIndex-1].className += " active"
  }
 

//Esto inicializa todos los slides
showSlides(1, 'greencontainer1', 'dot');
showSlides(1, 'greencontainer2', 'dot2');


// Creación de un cuestionario tipo test
var answers = ["C","A","D","C","B","A","D"];  
var total = answers.length;

function obtenerResultadoMarcado(questionName)
  {
    // Identificar el grupo de preguntas por su name
    var grupoPreguntas = document.getElementsByName(questionName); 
    for(var y=0; y<grupoPreguntas.length; y++)
      {
      // Devuelve el valor seleccionado
      if(grupoPreguntas[y].checked)
        {
        return grupoPreguntas[y].value;  
        }
      }        
  }

function obtenerPuntuacion()
  {
  var puntuacion = 0;
  for (var i=0; i<total; i++)
    {
    // Incrementar la puntuación sólo si...
    if(obtenerResultadoMarcado("question"+i) === answers[i]) 
      {
      puntuacion += 1; 
      }
    }
  return puntuacion; 
  }

function devolverPuntuacion()
  {
    marcarCorrectos();
    mostrarPuntuacion(); 
  }

function marcarCorrectos()
  {
  for(var numPregunta = 0; numPregunta< total; numPregunta++)
    {
    var idRespuestaCorrecta= "q_" + numPregunta + "_ans_" + answers[numPregunta];
    document.getElementById(idRespuestaCorrecta).setAttribute("style", "border: 2px solid green; border-radius:12px; padding-top: 8px;")
    }
  }

function mostrarPuntuacion()
  {
    
    //Se crea un elemento html de tipo <p>
    var element = document.createElement('p'); 

    //Se le pone el texto 
    element.appendChild(document.createTextNode("Tu puntuación es de " + obtenerPuntuacion() + "/" + total));
    //Se pone como hijo de "resultadosAcertados"
    document.getElementById("resultadosAcertados").appendChild(element);
    element.setAttribute(
      "style", "font-size: 20px; font-family: 'Anton', sans-serif; margin-top: 8px; ");

    //haces visibles resultados acertados
    document.getElementById ("resultadosAcertados").style.display = "block";
  }