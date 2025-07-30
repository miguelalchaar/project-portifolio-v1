let btnMenu = document.getElementById("btn-menu-mobile");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-mobile");

btnMenu.addEventListener("click", () => {
  menu.classList.add("open-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});
