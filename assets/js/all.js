"use strict";

var toggler = document.querySelector('.header__toggler');
var menu = document.querySelector('.header__menu');
toggler.addEventListener('click', function onTogglerClick(e) {
  e.preventDefault();
  menu.classList.toggle('active');
});
//# sourceMappingURL=all.js.map
