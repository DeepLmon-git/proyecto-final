const trigger = document.getElementById('trigger')
const header = document.getElementById('header')
trigger.addEventListener('mouseover',function(){
    header.classList.toggle("visible")
    header.classList.toggle("visible2")
})
function hover(){
    var header= document.getElementById('header');
    var nav= document.getElementById('nav');
    header.classList.add('visible');
    nav.classList.add("visible2");
}
function disapear(){
    var header= document.getElementById('header');
    var nav= document.getElementById('nav');
    header.classList.remove('visible');
    nav.classList.remove("visible2");
}