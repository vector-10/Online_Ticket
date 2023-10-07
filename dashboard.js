const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const themeToggler = document.querySelector(".themeToggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
