const container = document.querySelector('.container')
const darkModeSwitch = document.getElementById('darkModeSwitch')

darkModeSwitch.addEventListener('input',()=>{
    container.classList.toggle('darkMode')
})
