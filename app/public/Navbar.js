
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

    /*-------------------Sing Out--------------------*/

    document.getElementById("userBtn").addEventListener("click", () => {
        document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.location.href = "/"
    })

    const botonUsuario = document.querySelector('.user');
    const listaUsuario = document.querySelector('.userUl');

    botonUsuario.addEventListener('click', () => {
        listaUsuario.classList.toggle('desplegado')
    })

    const botonCerrar = document.querySelector('.cerrar');
    botonCerrar.addEventListener('click', () => {
        const listaUsuario = document.querySelector('.userUl');
        var header = document.getElementById('header');
        var nav = document.getElementById('nav');
        var flecha = document.getElementById('flecha');
        var shadow = document.getElementById('shadow');
        header.classList.remove('visible');
        nav.classList.remove("visible2");
        flecha.classList.remove("flechaD");
        flecha.classList.add("flechaanimation");
        shadow.classList.remove("efectoShadow2");
        listaUsuario.classList.remove('desplegado')
    });
})


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
/*function disapear() {
    const listaUsuario = document.querySelector('.userUl');
    var header = document.getElementById('header');
    var nav = document.getElementById('nav');
    var flecha = document.getElementById('flecha');
    var shadow = document.getElementById('shadow');
    header.classList.remove('visible');
    nav.classList.remove("visible2");
    flecha.classList.remove("flechaD");
    flecha.classList.add("flechaanimation");
    shadow.classList.remove("efectoShadow2");
    listaUsuario.classList.remove('desplegado')
}*/