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
const typewriterText = document.querySelector(".typewriter");
const phrases = ["Farmer....","Youtuber....","Rider....","PhotoGrapher....","Happy Person....."];

let phraseIndex = 0;
let characterIndex = 0;

function type() {
  if (characterIndex < phrases[phraseIndex].length) {
    typewriterText.textContent += phrases[phraseIndex][characterIndex];
    characterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (characterIndex > 0) {
    typewriterText.textContent = phrases[phraseIndex].substring(0, characterIndex - 1);
    characterIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 250);
  }
}

type(); 
