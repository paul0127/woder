/*手機板選單*/
let menu_btn = document.querySelector('.menu_btn')
let menu = document.querySelector('header .menu')
let sub_menu_btn = document.querySelectorAll('header .menu ul.nav li.sub > a')

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('active')
})

sub_menu_btn.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(window.innerWidth)
    if (window.innerWidth < 1200) {
      let sub_top_btn = item.parentNode
      event.preventDefault()
      sub_top_btn.classList.toggle('active')
    }
  })
})
