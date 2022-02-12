//Menu mobile
let btnMenu = document.querySelector(".menu-mobile");
let menuHeader = document.querySelector(".menu-header");

btnMenu.addEventListener("click", () => {
  let busca = menuHeader.classList.contains("ativo");

  if (busca == true) {
    menuHeader.classList.remove("ativo");
    setTimeout(() => {
      menuHeader.style.display = "none";
    }, 300);
  } else {
    menuHeader.style.display = "block";
    setTimeout(() => {
      menuHeader.classList.add("ativo");
    }, 100);
  }
});
