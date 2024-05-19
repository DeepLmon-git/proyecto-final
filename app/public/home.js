window.addEventListener("DOMContentLoaded", (event) => {
	
	/* ---- ----- ----- Carousel 1 ----- ----- ----- */
	const page = document.querySelector('.page');
	const fila = document.querySelector('.contenedor-carrusel');
	const peliculas = document.querySelectorAll('.pelicula');
	const peliculasAll = document.querySelectorAll('.peliculaAll');

	const flechaIzquierda = document.getElementById('flecha-izquierda');
	const flechaDerecha = document.getElementById('flecha-derecha');


	/* ---- ----- ----- Carousel 2 ----- ----- ----- */

	const fila2 = document.querySelector('.contenedor-carrusel2');
	const peliculas2 = document.querySelectorAll('.pelicula2');

	const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
	const flechaDerecha2 = document.getElementById('flecha-derecha2');


	/* ---- ----- ----- Carousel 3 ----- ----- ----- */

	const fila3 = document.querySelector('.contenedor-carrusel');
	const peliculas3 = document.querySelectorAll('.pelicula');

	const flechaIzquierda3 = document.getElementById('flecha-izquierda');
	const flechaDerecha3 = document.getElementById('flecha-derecha');


	/* ---- ----- ----- Carousel 4 ----- ----- ----- */

	const fila4 = document.querySelector('.contenedor-carrusel');
	const peliculas4 = document.querySelectorAll('.pelicula');

	const flechaIzquierda4 = document.getElementById('flecha-izquierda');
	const flechaDerecha4 = document.getElementById('flecha-derecha4');


	/* ---- ----- ----- Carousel 5 ----- ----- ----- */

	const fila5 = document.querySelector('.contenedor-carrusel5');
	const peliculas5= document.querySelectorAll('.pelicula5');

	const flechaIzquierda5 = document.getElementById('flecha-izquierda5');
	const flechaDerecha5 = document.getElementById('flecha-derecha5');

	// ? Event listener para la flecha derecha

	flechaDerecha.addEventListener('click', function () {
		fila.scrollLeft += fila.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores .activo');
		if(indicadorActivo.nextSibling){
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda.addEventListener('click', function () {
		fila.scrollLeft -= fila.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores .activo');
		if(indicadorActivo.previousSibling){
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	//? paginacion
	const numPag = Math.ceil(peliculas.length / 5);
	for (let i = 0; i < numPag; i++) {
		const indicador = document.createElement('button');

		if (i === 0) {
			indicador.classList.add('activo');
		}

		document.querySelector('.indicadores').appendChild(indicador);
		indicador.addEventListener('click', (e)=>{
			fila.scrollLeft = i * fila.offsetWidth;
			document.querySelector('.indicadores .activo').classList.remove('activo');
			e.target.classList.add('activo');
		})
	}

	//? hover 1

	peliculasAll.forEach((peliculaAll)=>{
		peliculaAll.addEventListener('mouseenter', (e)=>{
			const elemento = e.currentTarget;
			setTimeout(()=>{
				peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'));
				elemento.classList.add('hover');
			}, 100)
		})
	})
	filaAll.addEventListener('mouseleave', ()=>{
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})

	

});
const trigger = document.getElementById('trigger');
	const header = document.getElementById('header');
	function hover() {
		var header = document.getElementById('header');
		var nav = document.getElementById('nav');
		var flecha = document.getElementById('flecha');
		var shadow = document.getElementById('shadow');
		header.classList.add('visible');
		nav.classList.add("visible2");
		flecha.classList.add("flechaD");
		flecha.classList.remove("flechaanimation");
		shadow.classList.add("efectoShadow2");

	}
	function disapear() {
		var header = document.getElementById('header');
		var nav = document.getElementById('nav');
		var flecha = document.getElementById('flecha');
		var shadow = document.getElementById('shadow');
		header.classList.remove('visible');
		nav.classList.remove("visible2");
		flecha.classList.remove("flechaD");
		flecha.classList.add("flechaanimation");
		shadow.classList.remove("efectoShadow2");
	}
