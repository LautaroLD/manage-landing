const btn_menu = document.getElementById('bx-menu')
const list_menu = document.getElementById('list-menu')
btn_menu.addEventListener('click', () => {
    if (btn_menu.className == 'bx bx-menu') {
        btn_menu.classList.replace('bx-menu', 'bx-x')
        list_menu.classList.replace('list-menu-disable', 'list-menu')
    } else {
        btn_menu.classList.replace('bx-x', 'bx-menu')
        list_menu.classList.replace('list-menu', 'list-menu-disable')
    }
})

function getBtn(num) {
    const btn_slider = document.getElementsByClassName("card__span-container--btn")
    for (let i = 0; i < btn_slider.length; i++) {
        if (i == num) {
            btn_slider[i].classList.add('btn-active')
        } else {
            btn_slider[i].classList.remove('btn-active')
        }
    }
}