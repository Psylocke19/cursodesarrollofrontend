var unNumero;
unNumero = 12;
// unNumero = "un texto"; No se podría poner porque ya hemos dicho que es un número
console.log("Un número " + unNumero);
var unTexto = "Un texto";
console.log(unTexto);
alert(unTexto);
var siONo;
siONo = true;
if (siONo) {
    console.log("Pues parece que sí");
}
var miUnion; // En este caso este dato puede ser de uno u otro tipo 
miUnion = "Puede ser cadena";
miUnion = 3434;
miUnion = false; // Da fallo porque boolean no está entre los tipos definidos
;
var miCumple = { dia: 7, mes: 10, anio: 1982 };
console.log("Cumplo años el " + miCumple.dia + " del " + miCumple.mes);
miCumple.mostrar();
