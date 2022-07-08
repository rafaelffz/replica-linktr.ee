let b = document.body
b.style.transition = '400ms'

function bluet() {
    b.classList.remove('darkblue', 'pink', 'darkpink')
    b.classList.add('blue')
}

function darkbluet() {
    b.classList.remove('blue', 'pink', 'darkpink')
    b.classList.add('darkblue')
}

function pinkt() {
    b.classList.remove('blue', 'darkblue', 'darkpink')
    b.classList.add('pink')
}

function darkpinkt() {
    b.classList.remove('blue', 'darkblue', 'pink')
    b.classList.add('darkpink')
}