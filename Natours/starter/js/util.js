const navToggle = document.getElementById('navi-toggle')
const navLinks = document.getElementsByClassName('navigation__link')

for (let a of navLinks) {
  a.addEventListener('click', () => {
    navToggle.checked = false
  })
}
