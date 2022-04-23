let open=document.querySelector('.open')
let close=document.querySelector('.close')
let navbar=document.querySelector('.navbar')
let logo=document.getElementsByClassName('logo')
let span=document.getElementsByClassName('span1')

// console.log(open)
// console.log(close)
// console.log(navbar)
// console.log(logo)
// console.log(span)

open.addEventListener('click',show)
close.addEventListener('click',hide)
function show(){
    navbar.style.display='flex';
    navbar.style.top='0px';
    close.style.display='flex';
    
}
function hide(){
    navbar.style.top='-100%';
    close.style.display='none';
   }