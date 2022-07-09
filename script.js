let b = document.body
b.style.transition = '400ms'

function bluet() {
    b.classList.remove('darkblue', 'pink', 'darkpink')
    b.classList.add('blue')
    document.querySelector('.label-hmbgr span').click()
}

function darkbluet() {
    b.classList.remove('blue', 'pink', 'darkpink')
    b.classList.add('darkblue')
    document.querySelector('.label-hmbgr span').click()
}

function pinkt() {
    b.classList.remove('blue', 'darkblue', 'darkpink')
    b.classList.add('pink')
    document.querySelector('.label-hmbgr span').click()
}

function darkpinkt() {
    b.classList.remove('blue', 'darkblue', 'pink')
    b.classList.add('darkpink')
    document.querySelector('.label-hmbgr span').click()
}

const btnMobile = document.querySelector('#btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const bgtheme = document.querySelector('.bgtheme')
    bgtheme.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);