let btn_scroll_top = document.querySelector('.scroll-top')



btn_scroll_top.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    
  });
  
})



window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Distância do topo
  /* console.log("Scroll vertical:", scrollY); */
  if(scrollY <= 800){
    btn_scroll_top.classList.add('visible')
  }else{
    btn_scroll_top.classList.remove('visible')

  }
});
 




export default btn_scroll_top