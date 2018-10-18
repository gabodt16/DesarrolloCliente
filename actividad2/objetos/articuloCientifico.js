class ArticuloCientifico {
  
  /**
   * @param {Number} id
   * @param {String} titulo 
   * @param {Array} autores 
   * @param {Number} numpags 
   * @param {Number} publicacion 
   * @param {Number} menciones 
   */
  constructor(id, titulo, autores, numpags, publicacion, menciones){
    this.id = id;
    this.titulo = titulo;
    this.autores = autores;
    this.numpags = numpags;
    this.publicacion = publicacion;
    this.menciones = menciones;
    this.estado = true;
  };

  cambiarAutores(autores){
    this.autores = autores;
  };

  cambiarTitulo(titulo){
    this.titulo = titulo;
  }

  cambiarNumPags(numpags){
    this.numpags = numpags;
  }

  cambiarPublicacion(publicacion){
    this.publicacion = publicacion;
  }

  cambiarMenciones(menciones){
    this.menciones = menciones;
  } 
}

exports.ArticuloCientifico = ArticuloCientifico;

/*

const _articuloCientifico = artCientifico;
export { _articuloCientifico as articuloCientifico };




Articulo cientifico
  titulo
  1o+ autores
  num pags
  publicado
  menciones
	
	Articulos de revista
	  tituloRevista
	  editorial
	  factorImpacto(num)(puede)

	Articulos de conferencia
	  nomConferencia
	  lugarCeleb

patentes cientificas
  1o+ autores
  publicacion
  vencimientoPatente

  typeof devuelve que tipo de variable es, se usa con los tipos de datos sencillos
  instanceof devuelve si el tipo de dato es === a lo que quieres comprobar

*/