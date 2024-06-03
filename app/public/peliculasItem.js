window.addEventListener("DOMContentLoaded", (event) => {
	var btns = document.getElementsByTagName('button');
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener('click', function(){
        disableButtons(true);
        setTimeout(function(){disableButtons(false);}, 600);
    });    
}
function disableButtons(state){
    for(var i=0;i<btns.length;i++){
        btns[i].disabled = !!state;    
    }
}

    const btnRecomendados = document.getElementById('botonR');
    const sectionEpisodios = document.querySelector('.episodios');
    const sectionRecomendados = document.querySelector('.recomendados');
    const footer = document.getElementById('footer');
    
    btnRecomendados.addEventListener('click',()=>{
        sectionEpisodios.classList.remove('visible3');
        sectionRecomendados.classList.add('visible3');
        btnRecomendados.classList.add('activo');
        footer.classList.add('footer2');
        btnEpisodios.classList.remove('activo');
    })
})