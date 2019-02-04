interface IProducto
   {
   precio: number; 
   mostrar() 
   }

class Camiseta implements IProducto
   {
   precio: number; 
   talla: number; 
   color: string; 
   mostrar()
      {
      if (productoElegido == "camiseta")
         {
         let prod = new Camiseta(talla, color);  
         let precio; 
         let talla; 
         let color;  
         }
      }
   }

class Libro implements IProducto
   {
   precio: number; 
   titulo: string; 
   mostrar()
   }

let productoElegido: string; 


else if (productoElegido == "libro")
   {
   let libro = new Libro(); 
   let precio = 8; 
   let titulo = "It"; 
   }

let productoElegido: IProducto = {precio: 10};

let prod: IProducto; 
prod = new Camiseta(38, "black"); 

