let btn_menu = document.querySelector('.btn-menu-hamburguer');
let nav_menu = document.querySelector('.nav-menu')
/* troca o img hamburger para x */

function openMenu(){
  nav_menu.classList.toggle('nav-menu-open')
}

function toggleImg(event){
  if(event.target.classList.contains('bx-menu')){
    event.target.classList.remove('bx-menu')
    event.target.classList.add('bx-x')
  }else{
    event.target.classList.add('bx-menu')
    event.target.classList.remove('bx-x')
  }
}




/* <!-- <i class='bx bx-x' ></i> --> */
btn_menu.addEventListener('click', (event)=>{
    toggleImg(event);
    openMenu()
  console.log()
})


export default btn_menu;