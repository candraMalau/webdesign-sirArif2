const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

let next = document.querySelector('.next')
let prev = document.querySelector('.previous')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})