function toggleButtonHandler() {
  let toggleMenu = document.querySelector(".toggle-menu");
  let toggleMenuDisplayStatus = window
    .getComputedStyle(toggleMenu)
    .getPropertyValue("display");
  let open = document.querySelector(".btn-mobile-nav-open");
  let close = document.querySelector(".btn-mobile-nav-close");
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");

  if (toggleMenuDisplayStatus == "none") {
    toggleMenu.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";

    main.style.display = "none";
    footer.style.display = "none";
  } else {
    toggleMenu.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
    main.style.display = "block";
    footer.style.display = "flex";
  }
}
function toggleButtonHandlerClose() {
  let toggleMenu = document.querySelector(".toggle-menu");
  let toggleMenuDisplayStatus = window
    .getComputedStyle(toggleMenu)
    .getPropertyValue("display");
  let open = document.querySelector(".btn-mobile-nav-open");
  let close = document.querySelector(".btn-mobile-nav-close");
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");

  if (toggleMenuDisplayStatus == "block") {
    toggleMenu.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
    main.style.display = "block";
    footer.style.display = "flex";
  } else {
    toggleMenu.style.display = "none";
    open.style.display = "none";
    close.style.display = "block";

    main.style.display = "none";
    footer.style.display = "none";
  }
}
