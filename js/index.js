//global
const items = document.querySelectorAll('.teoria-item');
const cards = document.querySelectorAll('.card-img-content'),
setas = document.querySelectorAll('.seta-content'),
image = document.querySelectorAll('.img-icon');
let count = 0;

const marcadores = document.querySelectorAll('.carrosel>div');

let validation = true;

//Functions animated
function active(event) {
  let key = event.target.id
  if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5') {  
    let item = event.target
    item.classList.add('bgVetor')
    let card = event.path[3].children[1]
    card.classList.remove('off')
    card.classList.add('active')
  }
  if (count === 4 ) {
    setas[1].innerHTML = 
    '<img src="./assets/Seta direita inativa.png" alt="seta para direita">'
  }
  if (count === 0){
    setas[0].innerHTML = 
    '<img src="./assets/Seta esquerda inativa.png" alt="seta para esquerda">'
  }
  if (count > 0 && count < 4) {
    setas[0].innerHTML = '<img src="./assets/Seta esquerda.png" alt="seta para esquerda">'
    setas[1].innerHTML = '<img src="./assets/Seta direita.png" alt="seta para direita">'
  }
}
window.addEventListener('click', active)

//Sliders
function nextCard(){
  if (count < cards.length - 1) {  
    cards[count].classList.remove('selected');
    image[count+1].classList.remove('firstCount');
    marcadores[count+1].classList.remove('inativo');
    ++count;
    cards[count].classList.add('selected');
    image[count].classList.add('nextCount');
    marcadores[count].classList.add('ativo');
    count === 4 ? validation = false : validation = true;
    console.log(count)
    console.log(validation)
  }
}

function firstCard() {
  if (count > 0) {
    cards[count].classList.remove('selected');
    image[count-1].classList.remove('nextCount');
    marcadores[count].classList.remove('ativo');
    --count;
    cards[count].classList.add('selected');
    image[count].classList.add('firstCount');
    marcadores[count+1].classList.add('inativo');
    count === 4 ? validation = false : validation = true;
    console.log(count)
    console.log(validation)
  }
}

setas[0].addEventListener('click', firstCard)
setas[1].addEventListener('click', nextCard)

// blocked scroll
function captureScroll() {
  let base = document.querySelector('.info-container')
  let scrollTop = window.pageYOffset;
  if (validation) {
    scrollTop > base.offsetTop - 500 ? window.scrollTo(0,base.offsetTop -500) : ''
  }
  console.log(base.offsetTop)
  console.log(scrollTop)
}
window.addEventListener('scroll', captureScroll);

//scroll animation
const targetItems = document.querySelectorAll('[data-anime]');
function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight*3)/4);
  targetItems.forEach(item => {
    if (windowTop > item.offsetTop) {
      item.classList.add('animate-scroll');
    } else {
      item.classList.remove('animate-scroll');
    }
  })
}
animeScroll();
window.addEventListener('scroll', animeScroll);


