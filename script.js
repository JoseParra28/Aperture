'use strict'
document.querySelector('.message').textContent = 'Well hello there';
console.log(document.querySelector('.test').textContent) 

document.querySelector('.btn').addEventListener('click',function(){
console.log(document.querySelector('.message').textContent = 'You clicked me!')
})
document.getElementsByClassName = ('change')

function changeColor(element){
    let currentColor = element.style.backgroundColor;
    if (currentColor == "red"){
        onclick(element.backgroundColor = "green");
    // } else {
    //     element.backgroundColor = "blue"
    }}