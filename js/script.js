let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('pages')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Botão animação link 
document.querySelector('.ui-btn').addEventListener('click', function() {
    this.classList.add('clicked');
});