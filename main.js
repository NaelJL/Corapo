const nav = document.querySelector('nav');
const burgerButton = document.querySelector('.nav-toggler');
const divFirstText = document.querySelector('.first-h1');
const divSecondText = document.querySelector('.second-h1');

// animation of the main title (h1)
const firstText = "CORAPO";
const secondText = "Corporation d'Actes Poétiques";

function typewriter(txt, index, div){
    if(index < txt.length){
    setTimeout(() => {
        div.innerHTML += `${txt[index]}`;
        typewriter(txt, index +1, div);
    }, 110);
}
};

setTimeout(() => {
    typewriter(firstText, 0, divFirstText);
}, 300);

setTimeout(() => {
    typewriter(secondText, 0, divSecondText);
}, 1600);

// animation of the burger menu
burgerButton.addEventListener('click', toggleNav);

function toggleNav () {
    burgerButton.classList.toggle('active');
    if (burgerButton.classList.contains('active')) {
        nav.style.transform = 'translateY(0%)';
      } else {
        nav.style.transform = 'translateY(-150%)';
      }
}