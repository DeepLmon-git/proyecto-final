const trigger = document.getElementById('trigger')
const header = document.getElementById('header')
trigger.addEventListener('mouseover',function(){
    header.classList.toggle("visible")
})
function hover(){
    var header= document.getElementById('header');
    header.classList.add('visible')
}
function disapear(){
    var header= document.getElementById('header');
    header.classList.remove('visible')
}