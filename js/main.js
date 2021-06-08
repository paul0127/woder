/*手機板選單*/
let menu_btn = document.querySelector('.menu_btn')
let menu = document.querySelector('header .menu ul.nav')
let sub_menu_btn = document.querySelectorAll('header .menu ul.nav li.sub > a')
let search_btn = document.querySelector('header .menu .search_btn')
let search_bar = document.querySelector('header .menu .search_bar')

menu_btn.addEventListener('click', () => {
  menu.classList.toggle('active')
  search_bar.classList.remove('active')
})
search_btn.addEventListener('click', () => {
  search_bar.classList.toggle('active')
  menu.classList.remove('active')
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


let s_img = document.querySelectorAll('.products .s_img_list .item .s_img')
let b_img = document.querySelector('.products .b_img img')
console.log(b_img)
s_img.forEach((item) => {
  item.addEventListener('click', (event) => {
    let url = item.dataset.url
    console.log(url)
    b_img.src = url
  })
})