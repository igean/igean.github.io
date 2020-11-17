const menu_bars = document.querySelector('.fa-bars')

menu_bars.addEventListener('click', () => {

    const menu = document.querySelector('.menu-list')
    if (menu.classList.toString().includes('menu-hidden')) {
        menu.classList.remove('menu-hidden')
    }else {
        menu.classList.add('menu-hidden')
    }
})