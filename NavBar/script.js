function openSidebar() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("side-nav-overlay").style.width = "100%";
  document.getElementById("side-nav-overlay").style.opacity = "0.8";
}

function closeSidebar() {
  document.getElementById("mySidenav").style.width = "0%";
  document.body.style.backgroundColor = "white";
  document.getElementById("side-nav-overlay").style.width = "0%";
  document.getElementById("side-nav-overlay").style.opacity = "0";
}
