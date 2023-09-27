const boxes = document.querySelectorAll('.empty')

boxes.forEach((box) => {
    box.addEventListener('click', (e) =>{
        removeClass()
        box.classList.add('active')
        setTimeout(() => window.alert('You Clicked ' + e.target.innerHTML), 0)
    })
})

function removeClass(){
    boxes.forEach((box) =>{
        box.classList.remove('active')
    })
}