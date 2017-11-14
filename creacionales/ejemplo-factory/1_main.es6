/*class Carro{
    constructor(tipoCarro){
        this.tipoCarro = tipoCarro;
    }


    /*
    get tipo(){}

    set tipo(value){
        this.tipoCarro = value;
    }*/

    prender(){
        console.log(`El carro ${this.tipoCarro} esta prendido`);
    }

    apagar(){
        console.log(`El carro ${this.tipoCarro} esta apagado`);
    }
}*/


/**
 * Problema 
 * carro.tipoCarro = 'BMW';
 * cuando se crea una instancia de una clase, se crean muchas propiedades
 * se puede setear muchos datos
 * 
 * No seria mejor que el carro ya tuviera el tipo directamente desde la instancia 
 * al momento de instanciarlo?
 * Si entonces borramos el seteo
 * 
 * Cuando se tiene un grado mayor de customizacion se debe estar pensando en clases
 * 
 * 
 * 
 * 
 * 
 */
//let carro = new Carro();
////let carro = new Carro('BMW');
//carro.tipoCarro = 'BMW';
////carro.prender();
////carro.apagar();