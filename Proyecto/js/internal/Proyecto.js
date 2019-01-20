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