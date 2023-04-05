const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')
const content = document.querySelector('.content')


registerLink.addEventListener('click', ()=>{
    content.classList.add('active')
})
loginLink.addEventListener('click', ()=>{
    content.classList.remove('active')
})

const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const loginBtn = document.querySelector('.login-btn')


window.addEventListener('click', outsideclick)
loginBtn.addEventListener('click', openmodal)
closeBtn.addEventListener('click', closemodal)

function openmodal (){
    modal.style.display = 'block'
}
function closemodal (){
    modal.style.display = 'none'
}
function outsideclick(e){
if (e.target == modal){
    closemodal()
}
}
