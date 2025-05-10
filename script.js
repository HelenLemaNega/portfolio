

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu");
    const navLinks = document.querySelector(".links");
  
    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      menuIcon.classList.toggle("bx-menu-alt-right");
      menuIcon.classList.toggle("bx-x");
    });
});
 
  
 