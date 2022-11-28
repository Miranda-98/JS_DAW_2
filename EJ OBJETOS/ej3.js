
class Productos {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }



    importe() {
        let importe = this.unidades * this.precio;
        return importe;
    }


    getInfo() {
        return this.nombre + "categoria (" + this.categoria + ")" + " unidades " + this.unidades + " x precio" + this.precio + "€ =" + this.importe() + "€";
    }
}

