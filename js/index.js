const items = document.querySelectorAll('.teoria-item');

function active(event) {
  console.log(event)  
  let key = event.target
  key.classList.add('bgVetor')
  let card = event.path[3].children[1]
  card.classList.remove('off')
  card.classList.add('active')
  console.log(key)  
}
window.addEventListener('click', active)
