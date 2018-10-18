const rl = require('readline-sync');
const patentesCientificas = require('./objetos/patentes').PatentesCientificas;
const artRevista = require('./objetos/tiposArticulos/revista').ArticuloDeRevista;
const artConferencia = require('./objetos/tiposArticulos/conferencia').ArticuloDeConferencia;

var flag = true;
var final = "";
var opcion = 0;
var titulo = "";
var pagsArticulo = 0;
var publicadoEl = 0;
var venceEl = 0;
var menciones = 0;
//var listaArticulos = [];
//var listaPatentes = [];
var id = 0;
var ids = 0;
var busquedaAnyoPublicacion = 0; 
var tipoDeArticulo = "";
var busquedaAutor = "";

//variable prueba
var listaPatentes = [PatentesCientificas = {
    id: 1,
    autores: [ 'Ga', 'Gr' ],
    publicacion: 1,
    vencePatente: 2,
    tipoArticulo: 'Patente' },
  PatentesCientificas = {
    id: 2,
    autores: [ 'ga' ],
    publicacion: 3,
    vencePatente: 4,
    tipoArticulo: 'Patente' },
  PatentesCientificas = {
    id: 3,
    autores: [ 'pe' ],
    publicacion: 5,
    vencePatente: 6,
    tipoArticulo: 'Patente' },
  PatentesCientificas = {
    id: 4,
    autores: [ 'Gr', 'pe', 'te' ],
    publicacion: 3,
    vencePatente: 8,
    tipoArticulo: 'Patente' } ];




var listaArticulos = [ ArticuloDeRevista = { 
    id: 1,
    titulo: 'l',
    autores: [ 'g', 'f' ],
    numpags: 453,
    publicacion: 90,
    menciones: 34,
    estado: true,
    nombreRevista: 'stj',
    editorial: 'sdtgjh',
    factorDeImpacto: 45,
    tipoArticulo: 'tipoRevista' },
  ArticuloDeRevista = {
    id: 2,
    titulo: 'inesperado',
    autores: [ 'f' ],
    numpags: 25,
    publicacion: 80,
    menciones: 124,
    estado: true,
    nombreRevista: 'adfg',
    editorial: 'adfh',
    factorDeImpacto: 345,
    tipoArticulo: 'tipoRevista' },
  ArticuloDeConferencia = {
    id: 3,
    titulo: 'putita',
    autores: [ 'd', 'f' ],
    numpags: 23,
    publicacion: 70,
    menciones: 214,
    estado: true,
    nombreConferencia: 'adfh',
    lugarCelebracion: 'hsdfg',
    tipoArticulo: 'tipoConferencia' },
  ArticuloDeConferencia = {
    id: 4,
    titulo: 'perra',
    autores: [ 'f' ],
    numpags: 324,
    publicacion: 70,
    menciones: 342,
    estado: true,
    nombreConferencia: 'dhf',
    lugarCelebracion: 'sfgj',
    tipoArticulo: 'tipoConferencia' },
  ArticuloDeConferencia = {
    id: 5,
    titulo: 'prueba',
    autores: [ 'd', 'f' ],
    numpags: 67,
    publicacion: 90,
    menciones: 124,
    estado: true,
    nombreConferencia: 'sfgj',
    lugarCelebracion: 'sfghj',
    tipoArticulo: 'tipoConferencia' } ];







/* Funciones */

// Parámetros para los filters

function comprobarAutores(elemento){
    return busquedaAutor == elemento;
}

function busquedaPorAutores(elemento){
    return busquedaAutor == elemento.autores.filter(comprobarAutores);
}

function busquedaGeneral(elemento){
    
    if (busquedaAutor.length > 0 && busquedaAnyoPublicacion > 0) {
        let verificandoAutores = elemento.autores.filter(comprobarAutores);

        if(verificandoAutores.length > 0 && elemento.publicacion == busquedaAnyoPublicacion && elemento.tipoArticulo === tipoDeArticulo ){
            return elemento;
        }

        /*
        if(elemento.autores == busquedaAutor && elemento.publicacion == busquedaAnyoPublicacion && elemento.tipoArticulo === tipoDeArticulo ){
            return elemento;
        }*/
    } else if (busquedaAutor.length > 0){
        let verificandoAutores = elemento.autores.filter(comprobarAutores);


        if(verificandoAutores.length > 0 && elemento.tipoArticulo === tipoDeArticulo){
            return elemento;
        }
    } else if (busquedaAnyoPublicacion > 0) {
        if(elemento.publicacion == busquedaAnyoPublicacion && elemento.tipoArticulo === tipoDeArticulo){
            return elemento;
        }
    }else {
        if(elemento.tipoArticulo === tipoDeArticulo){
            return elemento;
        }
    }
 
}




// Inicio del código

console.log("*************************************************************************");
console.log("** Bienvenido al sistema de publicación de descubrimientos científicos **");
console.log("*************************************************************************");

while (flag==true) {
    let autores = [];

    console.log("Escriba:\n(1) Si desea dar de alta un nuevo artículo científico\n(2) Si desea dar de alta una patente científica \n(3) Si desea dar de baja un artículo científico\n(4) Si desea modificar un artículo científico o una patente científica\n(5) Si desea ver todos los artículos científicos y patentes científicas que hay dados de alta\n(6) Si desea buscar artículos científicos o patentes científicas\n(0) Si desea salir\n");
    opcion = rl.questionInt();

    if (opcion === 0) {
        flag = false;
    }else if(opcion === 1){ // Creación de un artículo científico
        
        id = id + 1;
        titulo = rl.question('Escriba el título del artículo científico: ');
        let numautores = rl.questionInt('Cuantos autores tiene éste artículo científico?: ');
        for (let i = 0; i < numautores ; i++) {
            autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
        }
        
        pagsArticulo = rl.questionInt('De cuantas páginas consta este artículo científico?: ');
        publicadoEl = rl.questionInt('Cuando fue publicado este artículo científico?: ');
        menciones = rl.questionInt('Cuantas menciones tiene este artículo científico?: ');
        console.log('Qué tipo de artículo científico es?\nEscribe:\n(1) De Tipo Revista\n(2) De Tipo Conferencia');
        tipoArticuloCientifico = rl.questionInt();

        if (tipoArticuloCientifico === 1) {

            let nombreDeRevista = rl.question('Cual es el nombre de la revista?: ');
            let editorial = rl.question('Cual es la editorial?: ');
            let factorImpacto = rl.questionInt('Cual es el factor de impacto de esta revista?: ');

            let articuloRevista =  new artRevista(id, titulo, autores, pagsArticulo, publicadoEl, menciones, nombreDeRevista, editorial, factorImpacto);
            listaArticulos.push(articuloRevista);
        } else if(tipoArticuloCientifico === 2) {

            let nombreConferencia = rl.question('Cual es el nombre de la conferencia?: ');
            let lugarCelebracion = rl.question('Cual es el lugar donde se celebra la conferencia?: ');

            var articuloConferencia =  new artConferencia(id, titulo, autores, pagsArticulo, publicadoEl, menciones, nombreConferencia, lugarCelebracion);
            listaArticulos.push(articuloConferencia);
        }
        

        console.log(listaArticulos);

    }else if (opcion === 2) { // Creación de una patente científica
        id = id + 1;
        let numautores = rl.questionInt('Cuantos autores tiene ésta patente científica?: ');
        for (let i = 0; i < numautores ; i++) {
            autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
        }
        publicadoEl = rl.questionInt('Cuando fue publicado esta patente científica?: ');
        venceEl = rl.questionInt('Cuando se vence esta patente científica?: ');
        
        let patentes =  new patentesCientificas(id, autores, publicadoEl, venceEl);
        listaPatentes.push(patentes);


    }else if (opcion === 3) { // Eliminar un artículo científico
        let encontrado = false;
        let ids = rl.questionInt('Escribe el "ID" del artículo científico que quieres borrar: ');

        for (let i=0; i<listaArticulos.length; i++){
            let articulo = listaArticulos[i];
            
            if(articulo.id === ids){
                listaArticulos.splice(i,1);
                encontrado = true;
                console.log("\nEl artículo fue eliminado con éxito\n");
                break;
            }

            
        }
         

        if (encontrado == false) {
            console.log("\nNo se ha podido encontrar el artículo científico especificado, vuelva a intentarlo con otro ID.\n");
        }

    }else if (opcion === 4) { // Modificar un artículo científico o una patente científica
        let flag = false;

        while (!flag) {
 
            console.log('\nDesea modificar un artículo científico o una patente científica?\nEscriba\n(1) Para modificar un artículo científico\n(2) Para modificar una patente científica');
            let eleccion = rl.questionInt();

            if (eleccion === 1) {

                let encontrado = false;
                let ids = rl.questionInt('Escriba el "ID" del artículo científico que desea modificar: ');

                for (let i=0; i<listaArticulos.length; i++){
                    let articulo = listaArticulos[i];
                    
                    if(articulo.id === ids){

                        if (articulo.tipoArticulo == "tipoRevista") {
                            
                        }
                        let cambiar = rl.question('Escriba:\n(1) Si desea modificar el título del artículo científico\n(2) Si desea modificar el ')


                        let numautores = rl.questionInt('Artículo encontrado, escriba cuantos auntores va a tener el artículo: ');
                        
                        
                        for (let i = 0; i < numautores ; i++) {
                            autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
                        }
                        
                        articulo.autores= autores;
                        
                        encontrado = true;
                        console.log();
                        console.log('Los autores del artículo "' + articulo.titulo + '" fueron modificados con éxito');
                        break;
                    }
                }
                
                if (encontrado == false) {
                    console.log("\n No se ha podido encontrar el artículo científico especificado, vuelva a intentarlo con otro ID.\n");
                }
                

            } else {
                
            }

            console.log('Quiere modificar otro archivo? Escriba (1) si desea salir y si desea continuar modificando otro archivo escriba cualquier otra tecla: ');
            let eleccionSalir = rl.questionInt();
            if(eleccionSalir == 1){
                flag = true;
            }
            
        }
        



    }else if (opcion === 5) { // Mustra todos los artículos científicos y patentes científicas

        console.log(listaArticulos);
        console.log("-----------------------------Patentes Científicas----------------------------");
        console.log(listaPatentes);

    }else if (opcion === 6) { // Busqueda de artículos científicos o patentes científicas
        let flag = false;

        while (!flag) {
            
            
            console.log('\nDesea buscar artículos científicos o patentes científicas?\n(1) Para buscar artículos científicos\n(2) Para buscar patentes científicas');
            let eleccionDeBusqueda = rl.questionInt();
            

            if (eleccionDeBusqueda === 1) {
                console.log('Se puede realizar la busqueda  mediante varios parámetros, si no conoce alguno de estos déjelo vacio o en 0 si es numérico');
                busquedaAutor = rl.question('Introduce nombre del autor: ');
                busquedaAnyoPublicacion = rl.questionInt('Introduce el año de publicación del artículo: ');
                let num = rl.questionInt('Escribe:\n(1) Si el artículo es de revista\n(2) Si el artículo es de conferencia\n');
                
                
                if (num === 1) {
                    tipoDeArticulo = "tipoRevista";
                    let buscando = listaArticulos.filter(busquedaGeneral);
                    console.log(buscando);
                } else if(num === 2) {
                    tipoDeArticulo = "tipoConferencia";
                    let buscando = listaArticulos.filter(busquedaGeneral);
                    console.log(buscando);
                } else if(num === 0) {
                    console.log(listaArticulos);
                } else{
                    console.log('El numero introducido no es válido\n');
                }


            }else if(eleccionDeBusqueda === 2) {
                console.log('Se puede realizar la busqueda  mediante varios parámetros, si no conoce alguno de estos déjelo vacio o en 0 si es numérico');
                var busquedaAutor = rl.question('Introduce nombre del autor de la patente: ');
                busquedaAnyoPublicacion = rl.questionInt('Introduce el año de publicación de la patente: ');
                tipoDeArticulo = "Patente";

                let buscando = listaPatentes.filter(busquedaGeneral);
                console.log(buscando + '\n');
            }else {
                console.log('El numero introducido no es válido\n');
            }

            
            
            console.log('Quiere continuar buscando? Escriba (1) si desea salir y si desea continuar buscando escriba cualquier otra tecla: ');
            let eleccionSalir = rl.questionInt();
            if(eleccionSalir == 1){
                flag = true;
            }
        }


    }else if (opcion === 7) { // Calculando el total de producciones científicas de un autor
        /**
         * Entendiendo que las "producciones científicas producidas por el autor" son el total de articulos científicos que ha producido 
         */

        busquedaAutor = rl.question('Introduce nombre del autor: ');
        let buscando = listaArticulos.filter(busquedaPorAutores);
        if (buscando.length > 0) {
            console.log('El total de producciones científicas producidas por el autor "' + busquedaAutor + '" en los últimos años es de: ' + buscando.length + '\n');
        } else {
            console.log("Error! el autor introducido no es válido, intente de nuevo con otro autor diferente.\n");
        }
    }else if(opcion === 8){ // Calculando el factor de impacto de un autor
         /**
         * Entendiendo que el "factor de impacto acumulado por el autor en los últimos años" es el resultado de la división entre las producciones científicas
         * producidas por el autor y el total de articulos existentes
         */

        busquedaAutor = rl.question('Introduce nombre del autor: ');
        let buscando = listaArticulos.filter(busquedaPorAutores);
        
        if (buscando.length > 0) {
            console.log('El factor de impacto del autor "' + busquedaAutor + '" es de: ' + (buscando.length / listaArticulos.length) + '\n');

        } else {
            console.log("Error! el autor introducido no es válido, intente de nuevo con otro autor diferente.\n");
        }

    }else {
        console.log('El numero introducido no es válido\n');
    }
}
    

/*
const artCientifico = require('./objetos/articuloCientifico').articuloCientifico;
var autores = ['hola', 'vale'];
var articuloNuevo =  new artCientifico('La vida', autores, 20, 2, 3);
console.log(articuloNuevo);
articuloNuevo.darBaja();
console.log(articuloNuevo);
articuloNuevo.darAlta();
console.log(articuloNuevo);
autores[2] = 'ramon';
var autores2 = ['la vida', 'es', 'dificil'];
articuloNuevo.cambiarAutores(autores2);
console.log(articuloNuevo);
*/
/*
var objetos = ['h', 'g', 'd'];
var array = new Array (objetos);

esto lo que hace es que te crea una copia del array que le estas pasando para que asi 
cuando estes creando el objeto al modificar el array principal, no modificará el 
almacenado en el objeto

*/

/*let newcar = new clase(titulo, marca, modelo, color, km);
listadocoches.push(newcar); para crear un array con la información de newcar;
console.log(listadocoches);

-----------------------------------

-nueva estructura del bucle for
for (let coche of listadocoches){
    if (coche.titulo === titulo){
        console.log(coche);
        break;
    }
}

-----------------------------------

if(opcion === borrar){
    //dar un coche de baja
    let titulo = rl.question('titulo del que quieres borrar: ');
    for (let i=0; i<listacoches.length; i++){
        let coche = listacoches[i];
        if(coche.titulo === titulo){
            listacoches.splice(i);  ----> para eliminar el coche del array, buscar mas a fondo este metodo!!!
            encontrado = true;
            break;
        }
    }
}
*/