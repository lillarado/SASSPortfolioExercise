const menuBtn = document.querySelector('.menuBtn');
const hamburger = document.querySelector('.menuBtnBurger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menuNav');
const navItems = document.querySelectorAll('.menuNavItem');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
       
        
        showMenu = false;
    }
}