const menu_bars = document.querySelector('.fa-bars')
const menu = document.querySelector('.menu-list')

menu_bars.addEventListener('click', () => {

    if (menu.classList.toString().includes('menu-hidden')) {
        menu.classList.remove('menu-hidden')
    }else {
        menu.classList.add('menu-hidden')
    }
})