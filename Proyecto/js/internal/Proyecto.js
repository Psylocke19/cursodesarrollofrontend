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

  $('a').on('click', function(){
    var target = $(this).attr('rel');
    $("#"+target).show().siblings("section").hide();
 });