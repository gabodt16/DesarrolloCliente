const ArticuloCientifico = require('../articuloCientifico').ArticuloCientifico;

class ArticuloDeConferencia extends ArticuloCientifico{

    /**
     * 
     * @param {Number} id
     * @param {String} titulo 
     * @param {Array} autores 
     * @param {Number} numpags 
     * @param {Number} publicacion 
     * @param {Number} menciones 
     * @param {String} nombreConferencia
     * @param {String} lugarCelebracion
     */ 

    constructor(id, titulo, autores, numpags, publicacion, menciones, nombreConferencia, lugarCelebracion){
            super(id, titulo, autores, numpags, publicacion, menciones);
            this.nombreConferencia = nombreConferencia;
            this.lugarCelebracion = lugarCelebracion;
            this.tipoArticulo = "tipoConferencia";
        }

        cambiarNombreDeConferencia(nuevoNombreConferencia){
            this.nombreConferencia = nuevoNombreConferencia;
        }
    
        cambiarLugarCelebracion(nuevoLugarCelebracion){
            this.lugarCelebracion = nuevoLugarCelebracion;
        }
    
    }
    
    exports.ArticuloDeConferencia = ArticuloDeConferencia;