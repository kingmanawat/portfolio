const navBar=document.querySelector('.navbar');

window.addEventListener('scroll',() => {
        if(window.scrollY >100){
            navBar.classList.add('navbar-scroll');
        }
        else if(window.scrollY <100){
            navBar.classList.remove('navbar-scroll');
        }
});