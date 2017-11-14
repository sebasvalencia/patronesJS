import BMW from 'BMW';
import Minicooper from 'Minicooper';


/*
    Hacer q el tipo de carro se defina
    Dependiendo de la instanciacion q haga hacia las clases BMW o Minicooper
*/
function Init(){
    let nombreCarro = process.argv[2];
    let carro = ObtenerCarro(nombreCarro);
    //let carro = ObtenerCarro('BMW');
    carro.prender();
    carro.apagar();
}


//Se delega la función de crear instancias, dependiendo del input q se entregue
//No esta nada desacoplado
//SOLID por agregar otro carro
//Se rompe el principio que las entidades
//deben estar abiertas para extension
//cerradas para modificacion 
//Y lo que se hizo fue modificarla
function ObtenerCarro(nombreCarro){
    
    switch(nombreCarro){
        case 'BMW':
            return new BMW();
            break;

        case 'Minicooper':
            return new Minicooper();
            break;

        case 'Audi':
        return new Audi();
        break;   

        case 'Porche':
        return new Porche();
        break; 

        default:
            return null;
            break;
    }
}

Init();

