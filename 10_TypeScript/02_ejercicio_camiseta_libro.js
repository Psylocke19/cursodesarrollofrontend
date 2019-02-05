var Camiseta = /** @class */ (function () {
    function Camiseta(pre, tal, col) {
        this.precio = pre;
        this.talla = tal;
        this.color = col;
    }
    Camiseta.prototype.mostrar = function () {
        console.log("Info camiseta: " + this.precio + " euros");
        console.log("        talla: " + this.talla);
        console.log("        color: " + this.color);
    };
    return Camiseta;
}());
var Libro = /** @class */ (function () {
    function Libro(pre, tit) {
        this.precio = pre;
        this.titulo = tit;
    }
    Libro.prototype.mostrar = function () {
        console.log("Info libro: " + this.precio + " euros");
        console.log("        título: " + this.titulo);
    };
    return Libro;
}());
var miLibro = new Libro(10, "It");
var miCamiseta = new Camiseta(12, "M", "negro");
var algunProducto;
algunProducto = new Camiseta(15, "L", "blanco");
algunProducto.mostrar();
// Cambiamos a otro producto
algunProducto = new Libro(15, "El resplandor");
algunProducto.mostrar();
