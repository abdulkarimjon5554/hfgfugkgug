const caruselSlide = document.querySelector('.carusel-slide');
const caruselImages = document.querySelectorAll('.carusel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 1;
const size =caruselImages[0].clientWidth;

caruselSlide.style.transform = 'translateX(' + (size * counter) + 'px)';


nextBtn.addEventListener('click',() => {
if(counter >= caruselImages.length - 1) return;
    caruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click',() => {
    if(counter <= 0) return;
    caruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
caruselSlide.addEventListener('transitionend', () => {
    console.log(caruselImages[counter]);
    if (caruselImages[counter].id === 'lastClone') {
        caruselSlide.style.transition = "none";
        counter = caruselImages.length - 2;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (caruselImages[counter].id === 'firstClone') {
        caruselSlide.style.transition = "none";
        counter = caruselImages.length - counter;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
