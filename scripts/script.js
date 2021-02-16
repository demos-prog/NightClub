"use strict"

let img = document.querySelectorAll('.item__img');

img.forEach((item)=>{
  let frame__bg  = item.previousElementSibling;

  item.addEventListener('mouseover', ()=>{
    frame__bg.classList.toggle('rotate');
  })
  
  item.addEventListener('mouseout', ()=>{
    frame__bg.classList.toggle('rotate');
  })
})

// Burger - start
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.secondMenu');

menuIcon.addEventListener('click', ()=>{
  menuIcon.classList.toggle('active');
  menu.classList.toggle('hide');
});
// Burger - end

// Перестановка в хедере - начало
let firstMenu = document.querySelector('.firstMenu');
let burger = document.querySelector('.contain');

window.onresize = ()=> {
  if (window.innerWidth <= 800) {
    firstMenu.classList.add("hide");
    burger.classList.remove("hide");
  } else {
    firstMenu.classList.remove("hide");
    burger.classList.add("hide");
  }
}

if (window.innerWidth <= 800) {
  firstMenu.classList.add("hide");
  burger.classList.remove("hide");
} else {
  firstMenu.classList.remove("hide");
  burger.classList.add("hide");
}

// Перестановка в хедере - конец