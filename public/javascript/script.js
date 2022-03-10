console.log("sanity check")

const openMenuButtons = document.querySelectorAll('[data-menu-target')
const closeMenuButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openMenuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = document.querySelector(button.dataset.menuTarget)
    openMenu(menu)
  })
})

overlay.addEventListener('click', () => {
  const menus = document.querySelectorAll('.menu.active')
  menus.forEach(menu => {
    closeMenu(menu)
  })
})

closeMenuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = button.closest('.menu')
    closeMenu(menu)
  })
})


function openMenu(menu) {
  if (menu === null) return
  menu.classList.add('active')
  overlay.classList.add('active')
}

function closeMenu(menu) {
  if (menu === null) return
  menu.classList.remove('active')
  overlay.classList.remove('active')
}