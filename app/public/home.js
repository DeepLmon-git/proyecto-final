window.addEventListener("DOMContentLoaded", (event) => {
	
	/* ---- ----- ----- Carousel 1 ----- ----- ----- */
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

	const fila3 = document.querySelector('.contenedor-carrusel3');
	const peliculas3 = document.querySelectorAll('.pelicula3');

	const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
	const flechaDerecha3 = document.getElementById('flecha-derecha3');


	/* ---- ----- ----- Carousel 4 ----- ----- ----- */

	const fila4 = document.querySelector('.contenedor-carrusel4');
	const peliculas4 = document.querySelectorAll('.pelicula4');


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
	
	
	// ? Event listener para la flecha derecha 2

	flechaDerecha2.addEventListener('click', ()=> {
		fila2.scrollLeft += fila2.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores2 .activo');
		if(indicadorActivo.nextSibling){
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda2.addEventListener('click', ()=> {
		fila2.scrollLeft -= fila2.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores3 .activo');
		if(indicadorActivo.previousSibling){
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});  


	
	
	// ? Event listener para la flecha derecha 3

	flechaDerecha3.addEventListener('click', ()=> {
		fila3.scrollLeft += fila3.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores3 .activo');
		if(indicadorActivo.nextSibling){
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda3.addEventListener('click', ()=> {
		fila3.scrollLeft -= fila3.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores3 .activo');
		if(indicadorActivo.previousSibling){
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});  


	// ? Event listener para la flecha derecha 5

	flechaDerecha5.addEventListener('click', ()=> {
		fila5.scrollLeft += fila5.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores5 .activo');
		if(indicadorActivo.nextSibling){
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda5.addEventListener('click', ()=> {
		fila5.scrollLeft -= fila5.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores5 .activo');
		if(indicadorActivo.previousSibling){
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});  


	//? paginacion 1
	const numPag = Math.ceil(peliculas.length / 5);
	for (let i = 0; i < numPag; i++) {
		const indicador = document.createElement('button');

		if (i === 0) {
			indicador.classList.add('activo');
		}

		document.querySelector('.indicadores1').appendChild(indicador);
		indicador.addEventListener('click', (e)=>{
			fila.scrollLeft = i * fila.offsetWidth;
			document.querySelector('.indicadores1 .activo').classList.remove('activo');
			e.target.classList.add('activo');
		})
	}


	
	//? paginacion 2
	const numPag2 = Math.ceil(peliculas2.length / 5);
	for (let f = 0; f < numPag2; f++) {
		const indicador2 = document.createElement('button');

		if (f === 0) {
			indicador2.classList.add('activo');
		}

		document.querySelector('.indicadores2').appendChild(indicador2);
		indicador2.addEventListener('click', (e)=>{
			fila2.scrollLeft = f * fila2.offsetWidth;
			document.querySelector('.indicadores2 .activo').classList.remove('activo');
			e.target.classList.add('activo');
		})
	}


	//? paginacion 3
	const numPag3 = Math.ceil(peliculas3.length / 5);
	for (let g = 0; g < numPag3; g++) {
		const indicador3 = document.createElement('button');

		if (g === 0) {
			indicador3.classList.add('activo');
		}

		document.querySelector('.indicadores3').appendChild(indicador3);
		indicador3.addEventListener('click', (e)=>{
			fila3.scrollLeft = g * fila3.offsetWidth;
			document.querySelector('.indicadores3 .activo').classList.remove('activo');
			e.target.classList.add('activo');
		})
	}


	//? paginacion 1
	const numPag5 = Math.ceil(peliculas5.length / 5);
	for (let j = 0; j < numPag5; j++) {
		const indicador5 = document.createElement('button');

		if (j === 0) {
			indicador5.classList.add('activo');
		}

		document.querySelector('.indicadores5').appendChild(indicador5);
		indicador5.addEventListener('click', (e)=>{
			fila5.scrollLeft = j * fila5.offsetWidth;
			document.querySelector('.indicadores5 .activo').classList.remove('activo');
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
	fila.addEventListener('mouseleave', ()=>{
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila2.addEventListener('mouseleave', ()=>{
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila3.addEventListener('mouseleave', ()=>{
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila4.addEventListener('mouseleave', ()=>{
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila5.addEventListener('mouseleave', ()=>{
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
