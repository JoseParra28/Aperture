'use strict'
document.querySelector('.message').textContent = "Well hello there";
console.log(document.querySelector('.test').textContent) 

document.querySelector('.btn').addEventListener('click',function(){
(document.querySelector('.message').textContent = 'You clicked me!')
})


document.querySelector('#btn-ch').addEventListener('click',function(){
    (document.querySelector('.man').style.color = 'red')
    (document.querySelector('.test').style.color = 'blue')
    (document.querySelector('.parra').style.color = 'red')
})




document.getElementsByClassName = ('change')

function changeColor(element){
    let currentColor = element.style.backgroundColor;
    if (currentColor == "red"){
        onclick(element.backgroundColor = "green");
    // } else {
    //     element.backgroundColor = "blue"
    }}


const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})

let spanTexts = document.getElementsByTagName("services__card");
window.onload = function(){
    for(spanText of spanTexts){
        spanText.classList.add("active");
    }
}
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
 });
 ScrollReveal().reveal('.services', { delay: 500 });
 

 console.log("hele")