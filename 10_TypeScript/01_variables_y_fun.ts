let unNumero: number; 

unNumero = 12; 
// unNumero = "un texto"; No se podría poner porque ya hemos dicho que es un número
console.log("Un número " + unNumero);

var unTexto = "Un texto"; 
console.log(unTexto); 
alert(unTexto); 

let siONo: boolean; 
siONo = true; 

if (siONo)
   {
    console.log ("Pues parece que sí"); 
   } 	    

let miUnion: number | string; // En este caso este dato puede ser de uno u otro tipo 
miUnion = "Puede ser cadena"; 
miUnion = 3434; 
miUnion = false; // Da fallo porque boolean no está entre los tipos definidos

// Interfaces 
interface Tiempo
   {
    dia: number;
    mes: number; 
    anio: number; 

    mostrar(); 
   }; 

class Cumpleanios implements Tiempo
   {
    dia: number | string;
    mes: number; 
    anio: number; 

    mostrar()
        {
        console.log ("¡Cumpleaños feliz! Hoy " + this.dia + " del " + this.mes); 
        }
   }

var miCumple: Tiempo = {dia: 7, mes: 10, anio: 1982}; 
console.log ("Cumplo años el " + miCumple.dia + " del " + miCumple.mes); 

miCumple.mostrar(); 