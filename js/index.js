function active(event) {
  if (event?.path) {
    const {path} = event
    console.log(path)
    
    path[1].classList.add('bgVetor');
    path[3].children[1].classList.add('active')
    path[3].children[1].classList.remove('off')
  }

  //const card = document.querySelectorAll('.off');
  // card.forEach (element => {
  //   element.classList.add('active');
  //   element.classList.remove('off');
  //   console.log(element)
  // })
}
document.addEventListener('click', active)
