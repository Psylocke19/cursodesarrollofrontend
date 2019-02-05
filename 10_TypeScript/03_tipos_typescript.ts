
// Ejemplo de los distintos tipos de Typescript
let ejemploAny: any; // Devuelve cualquiera de los tipos
ejemploAny = 10; 
ejemploAny = "uuu"; 
ejemploAny = true; 

function dimeOsiOno(): boolean
   {
   let devolucion = true; 
   if (devolucion)
      {
      return true; 
      }
   else 
      {
      return false; 
      }
   }

function dameLoQueTuQuieras(): any // No hacer nunca esto
   {
   let valor: any = 3; 
   switch(valor)
      {
      case 1: return 1000; break; 
      case 2: return "1000"; break; 
      case 3: return false; break; 
      }
   }

function noMeDesNada(): void // Este tipo no devuelve nada
   {
   if (true)
      return; //No podemos devolver nada
   }

function deduceElTipo1() // Se pone automáticamente como tipo void porque no se devuelve nada (no hay un return)
   {}

function deduceElTipo2() // Como se devuelve un número, infiere que la función es de tipo number aunque no se escriba explícitamente
   {
   return 200; 
   }

let textoPorInferencia = "Hola"; 
//textoPorInferencia = 10; // Da fallo porque ya se ha establecido previamente que es un string



