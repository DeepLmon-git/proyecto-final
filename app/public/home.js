const trigger = document.getElementById('trigger');
const header = document.getElementById('header');
function hover(){
    var header= document.getElementById('header');
    var nav= document.getElementById('nav');
    var flecha= document.getElementById('flecha');
    var shadow= document.getElementById('shadow');
    header.classList.add('visible');
    nav.classList.add("visible2");
    flecha.classList.add("flechaD");
    flecha.classList.remove("flechaanimation");
    shadow.classList.add("efectoShadow2");
    
}
function disapear(){
    var header= document.getElementById('header');
    var nav= document.getElementById('nav');
    var flecha= document.getElementById('flecha');
    var shadow= document.getElementById('shadow');
    header.classList.remove('visible');
    nav.classList.remove("visible2");
    flecha.classList.remove("flechaD");
    flecha.classList.add("flechaanimation");
    shadow.classList.remove("efectoShadow2");
}