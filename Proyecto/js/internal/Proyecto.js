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

// Funciones para el movimiento de los slides apartado 1
var slideText = 1; 
showSlides (slideText); 

function currentSlide(n)
  {
  showSlides (slideIndex = n); 
  }

function showSlides(n)
  {
  var i; 
  var slides = document.getElementsByClassName ("greencontainer1"); 
  var dots = document.getElementsByClassName ("dot"); 
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

// Funciones para el movimiento de los slides apartado 2
var slideText2 = 1; 
showSlides2 (slideText2); 

function currentSlide2(n)
  {
  showSlides2 (slideIndex2 = n); 
  }

function showSlides2(n)
  {
  var i; 
  var slides2 = document.getElementsByClassName ("greencontainer2"); 
  var dots2 = document.getElementsByClassName ("dot2"); 
  if (n > slides2.length)
    {
    slideIndex2 = 1;
    }
  if (n < 1)
    {
    slideIndex2 = slides2.length; 
    }
  for (i=0; i<slides2.length; i++)
    {
    slides2[i].style.display = "none"; 
    }
  for (i=0; i<dots2.length; i++)
    {
    dots2[i].className = dots2[i].className.replace("active", ""); 
    }
  slides2[slideIndex2 -1].style.display = "block"; 
  dots2[slideIndex2-1].className += " active"
  }
 