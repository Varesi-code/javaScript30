const panels = document.querySelectorAll('.panel');

function toogleOPen() {
    this.classList.toggle('open');
}

function toggleActive() {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));