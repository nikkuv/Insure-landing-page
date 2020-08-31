const hamburger = document.querySelector(".navbar__hamburgerIcon");
const links = document.querySelector('.navbar__links');

let clicked = false;
hamburger.addEventListener('click', ()=>{
    if(!clicked){
        hamburger.src = 'images/icon-close.svg';
        links.classList.add('show');
        clicked = true;
    }else{
        hamburger.src = 'images/icon-hamburger.svg';
        links.classList.remove('show');
        clicked = false;
    }
});