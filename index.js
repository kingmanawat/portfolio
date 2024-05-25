const navBar=document.querySelector('.navbar');

window.addEventListener('scroll',() => {
        if(window.scrollY >100){
            navBar.classList.add('navbar-scroll');
        }
        else if(window.scrollY <100){
            navBar.classList.remove('navbar-scroll');
        }
});

const toggleBtn=document.querySelector('.toggle_btn')
const toggleBtnIcon=document.querySelector('.toggle_btn i')
const dropDownMenu=document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        :'fa-solid fa-bars'
    
}
