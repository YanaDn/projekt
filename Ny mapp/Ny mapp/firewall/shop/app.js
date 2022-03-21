let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
menu.classList.toggle('fas-times');
navbar.classList.toggle('active');
}


window.onsroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next (){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

}

function prev (){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');

}


let btn = document.querySelectorAll ('fas fa-shopping-cart');

let products = [
{
    name: 'make up',
    tag: 'skin care',
    price: 20,
    inCart:0
},
{
    name: 'make up',
    tag: 'sleeping mask',
    price: 40,
    inCart:0
},
{
    name: 'make up',
    tag: 'cleansing balm',
    price: 50,
    inCart:0
},
{
    name: 'make up',
    tag: 'scrub balm',
    price: 60,
    inCart:0
},
];

for (let i =0; i < icons.length; i++ ){

 console.log("my loop");
icons[i].addEventListener('click',  () => {
 cartNummbers();
})
}

function onLoadCartNumbers() {
    let productNumbers =localStorage.getItem('cartNumbers')

    if (productNumbers) {
        document.querySelector('.btn span').textContent  = productNumbers;

    }
}



function cartNummbers(){
    let productNumbers =localStorage.getItem('cartNumbers')
    
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', + 1);
  } else{
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.btn span').textContent = 1;
  }
}
 onLoadCartNumbers() 

