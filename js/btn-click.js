let btn_click = document.querySelectorAll('.portfolio-box');
let btn_layer = document.querySelectorAll('.portfolio-layer')


let btn_old = null;

btn_click.forEach((item) => {
  item.addEventListener("click", () => {
    let btn_new = item;

    // Se já existe um botão ativo e ele é diferente do novo clicado, remove a classe
    if (btn_old && btn_old !== btn_new) {
      btn_old.children[1].classList.remove("portfolio-layer-click");
    }

    // Se o botão clicado já estava ativo, remove a classe e zera btn_old
    if (btn_old === btn_new) {
      btn_old.children[1].classList.remove("portfolio-layer-click");
      btn_old = null;
    } else {
      // Caso contrário, ativa o novo botão e atualiza btn_old
      item.children[1].classList.add("portfolio-layer-click");
      btn_old = item;
    }
  });
});


/* 
.portfolio-layer-click{
  transform: translateY(0);
} 
*/



export default btn_click;