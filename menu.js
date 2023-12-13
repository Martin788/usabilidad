document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split("/").pop();
    var menuItems = document.querySelectorAll("nav a");

    menuItems.forEach(function (item) {
      if (item.getAttribute("href") === currentPage) {
        item.classList.add("active");
      }
    });
});