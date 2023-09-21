const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const title = document.querySelector('h1');
const burgerButton = document.querySelector('.nav-toggler');
const teamInfos = document.querySelector('.team-info');
const showInfos = document.querySelectorAll('.show-info');


// animation du titre à l'ouverture de la page
const texte = "CORAPO - Corporation d'Actes Poétiques";

function typewriter(txt, index){
    if(index === 38){
        showMenu();
    }
    if(index < txt.length){
    setTimeout(() => {
        title.innerHTML += `${txt[index]}`;
        typewriter(txt, index +1);
    }, 110);
}
};

setTimeout(() => {
    typewriter(texte, 0);
}, 300);


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