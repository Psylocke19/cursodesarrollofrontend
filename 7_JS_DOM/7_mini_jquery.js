// Ejercicio 1
function elementoPorId (idElemento)
	{
	var elemento = document.getElementById (idElemento);
	if (elemento != null)
		{
		return elemento;
		}
	else 
		{
		document.write ("No se encuentra " + elemento); 
		}
	}

// Ejercicio 2
function cambiaAtribPorId (idElemento, atributo, valor)
	{
	elementoPorId(idElemento).setAttribute (atributo, valor);
	}

// Ejercicio 3
function adjuntarElementoPorId (idElemento, etiqueta)
	{
	var elemento = elementoPorId (idElemento); 
	var nuevoElemento = document.createElement (etiqueta); 
	elemento.appendChild (nuevoElemento); 
	}

function generar ()
	{
	//elementoPorId ("div_form").style.backgroundColor = "red";
	cambiaAtribPorId ("div_form", "style", "background-color: green");
	adjuntarElementoPorId ("div_form", "input")
	adjuntarElementoPorId ("div_form", "br")
	adjuntarElementoPorId ("div_form", "input")
	adjuntarElementoPorId ("div_form", "br")
	adjuntarElementoPorId ("div_form", "br")
	adjuntarElementoPorId ("div_form", "img")
	}

	
	 