const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const divFirstText = document.querySelector('.first-text');
const divSecondText = document.querySelector('.second-text');
const burgerButton = document.querySelector('.nav-toggler');
const teamInfos = document.querySelector('.team-info');
const showInfos = document.querySelectorAll('.show-info');


// animation du titre à l'ouverture de la page
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


// animation et affichage du menu burger
burgerButton.addEventListener('click', toggleNav);

function toggleNav () {
    burgerButton.classList.toggle('active');
    if (burgerButton.classList.contains('active')) {
        nav.style.transform = 'translateY(0%)';
      } else {
        nav.style.transform = 'translateY(-150%)';
      }
}