// menu animation
const menu_bars = document.querySelector('.fa-bars')
const menu = document.querySelector('.menu-list')
const menu_item = document.querySelectorAll('li a.menu-item')

// open and close menu
menu_bars.addEventListener('click', () => {

    if (menu.classList.toString().includes('menu-hidden')) {
        open_menu()
        document.querySelector('main').style.pointerEvents = 'none';
        
    }else {
        close_menu()
    }
})

for (item of menu_item) {
    item.addEventListener('click', () => {
        close_menu()
    })
}

// all functions go here
function close_menu() {
    menu.classList.add('menu-hidden')
}

function open_menu() {
    menu.classList.remove('menu-hidden')
}