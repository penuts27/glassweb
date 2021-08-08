const toggler = document.querySelector('.header__toggler')
const menu = document.querySelector('.header__menu')
toggler.addEventListener('click', function onTogglerClick(e) {
  e.preventDefault()
  menu.classList.toggle('active')
})
