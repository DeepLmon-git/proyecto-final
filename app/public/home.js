window.addEventListener("DOMContentLoaded", (event) => {
	var btns = document.getElementsByTagName('button');
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function () {
			disableButtons(true);
			setTimeout(function () { disableButtons(false); }, 600);
		});
	}
	function disableButtons(state) {
		for (var i = 0; i < btns.length; i++) {
			btns[i].disabled = !!state;
		}
	}

	/* ---- ----- ----- Carusel imagen principal ----- ----- ----- */

	const imagen = document.querySelector('.contenedor-imagenes');
	const flechaiH = document.querySelector('.flechaImg1')
	const flechadH = document.querySelector('.flechaImg2')
	flechadH.addEventListener('click', function () {
		imagen.scrollLeft += imagen.offsetWidth;


		const botonItemActivo = document.querySelector('.indicadores .activo2');
		if (botonItemActivo.nextSibling) {
			botonItemActivo.nextSibling.classList.add('activo2');
			botonItemActivo.classList.remove('activo2')
		}
	});
	flechaiH.addEventListener('click', function () {
		imagen.scrollLeft -= imagen.offsetWidth;
		const botonItemActivo = document.querySelector('.indicadores .activo2');
		if (botonItemActivo.previousSibling) {
			botonItemActivo.previousSibling.classList.add('activo2');
			botonItemActivo.classList.remove('activo2')
		}
	});

	for (let i = 0; i < 4; i++) {
		const botonItem = document.createElement('button');

		if (i === 0) {
			botonItem.classList.add('activo2');
		}

		document.querySelector('.botones-item').appendChild(botonItem);
		botonItem.addEventListener('click', (e) => {
			imagen.scrollLeft = i * imagen.offsetWidth;
			document.querySelector('.botones-item .activo2').classList.remove('activo2');
			e.target.classList.add('activo2');
		})
	}



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
	const peliculas5 = document.querySelectorAll('.pelicula5');

	const flechaIzquierda5 = document.getElementById('flecha-izquierda5');
	const flechaDerecha5 = document.getElementById('flecha-derecha5');

	// ? Event listener para la flecha derecha
	flechaDerecha.addEventListener('click', function () {
		fila.scrollLeft += fila.offsetWidth;


		const indicadorActivo = document.querySelector('.indicadores .activo');
		if (indicadorActivo.nextSibling) {
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda.addEventListener('click', function () {
		fila.scrollLeft -= fila.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores .activo');
		if (indicadorActivo.previousSibling) {
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});


	// ? Event listener para la flecha derecha 2

	flechaDerecha2.addEventListener('click', () => {
		fila2.scrollLeft += fila2.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores2 .activo');
		if (indicadorActivo.nextSibling) {
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda2.addEventListener('click', () => {
		fila2.scrollLeft -= fila2.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores2 .activo');
		if (indicadorActivo.previousSibling) {
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});




	// ? Event listener para la flecha derecha 3

	flechaDerecha3.addEventListener('click', () => {
		fila3.scrollLeft += fila3.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores3 .activo');
		if (indicadorActivo.nextSibling) {
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda3.addEventListener('click', () => {
		fila3.scrollLeft -= fila3.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores3 .activo');
		if (indicadorActivo.previousSibling) {
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});


	// ? Event listener para la flecha derecha 5

	flechaDerecha5.addEventListener('click', () => {
		fila5.scrollLeft += fila5.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores5 .activo');
		if (indicadorActivo.nextSibling) {
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo')
		}
	});
	flechaIzquierda5.addEventListener('click', () => {
		fila5.scrollLeft -= fila5.offsetWidth;
		const indicadorActivo = document.querySelector('.indicadores5 .activo');
		if (indicadorActivo.previousSibling) {
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
		indicador.addEventListener('click', (e) => {
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
		indicador2.addEventListener('click', (e) => {
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
		indicador3.addEventListener('click', (e) => {
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
		indicador5.addEventListener('click', (e) => {
			fila5.scrollLeft = j * fila5.offsetWidth;
			document.querySelector('.indicadores5 .activo').classList.remove('activo');
			e.target.classList.add('activo');
		})
	}




	//? hover 1

	peliculasAll.forEach((peliculaAll) => {
		peliculaAll.addEventListener('mouseenter', (e) => {
			const elemento = e.currentTarget;
			setTimeout(() => {
				peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'));
				elemento.classList.add('hover');
			}, 100)
		})
	})
	fila.addEventListener('mouseleave', () => {
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila2.addEventListener('mouseleave', () => {
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila3.addEventListener('mouseleave', () => {
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila4.addEventListener('mouseleave', () => {
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})
	fila5.addEventListener('mouseleave', () => {
		peliculasAll.forEach(peliculaAll => peliculaAll.classList.remove('hover'))
	})



});

