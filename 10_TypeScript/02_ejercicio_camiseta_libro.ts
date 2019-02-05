interface IProducto // Todo es público
   {
   //precio: number; 
   mostrar(): void; 
   }

class Producto implements IProducto
   {
   private precio: number; 
   private nombre: string;  
   constructor(pre: number, nom: string)
      {
      this.precio = pre; 
      this.nombre = nom;  
      }
   mostrar()
      {
      console.log (`Producto ${this.nombre}, precio: ${this.precio}$`); 
      }
   // Métodos de acceso
   // Precio es de lectura y escritura
   getPrecio(): number
      {
      return this.precio; 
      }
   setPrecio(nuevoPrecio: number): void   
      {
      this.precio = nuevoPrecio; 
      }
   // Nombre es de sólo lectura
   getNombre(): string
      {
      return this.nombre; 
      }
   }

/* Ejercicios:
   1. Poner público lo público y privado lo privado.
   2. Terminar de heredar libro con sus métodos de acceso (getter y setter). 
   3. Usarlos (instanciarlos) abajo (new, etc...). 
   4. Validar datos: precio nunca puede ser negativo y no puede haber nombres, tallas, títulos... vacíos*/

class Camiseta extends Producto
   {
   talla: string; 
   color: string; 
   // Como crear un constructor heredando. Pediremos los datos del hijo del padre
   constructor(pre: number, tal: string, col: string)
      {
      super (pre, "camiseta"); // Llamada al constructor del padre
      // this.precio = pre; Mal, ya que precio es privado
      // this.setPrecio(pre); Llamando al método de acceso se puede
                              // No se puede por el constructor
      this.talla = tal; 
      this.color = col; 
      }
   mostrar() // Método obligatorio
      {
      console.log ("Info camiseta: " + this.getPrecio() + " euros"); 
      console.log ("        talla: " + this.talla); 
      console.log ("        color: " + this.color); 
      }
   }

class Libro extends Producto
   { 
   titulo: string; 
   constructor (pre: number, tit: string)
      {
      super (pre, "libro")
      this.titulo = tit; 
      }
   mostrar() // Método obligatorio
      {
      console.log ("Info libro: " + this.getPrecio() + " euros"); 
      console.log ("        título: " + this.titulo); 
      }
   }

let miLibro: Libro = new Libro (10, "It"); 
let miCamiseta: Camiseta = new Camiseta (12, "M", "negro"); 

let algunProducto: IProducto; 
algunProducto = new Camiseta (15, "L", "blanco"); 
algunProducto.mostrar(); 
// Cambiamos a otro producto
algunProducto = new Libro (15, "El resplandor"); 
algunProducto.mostrar(); 

let tipo1: string = "cam";
let tipo2: string = "lib"; 
