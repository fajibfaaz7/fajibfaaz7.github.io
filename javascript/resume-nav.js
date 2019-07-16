function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("resume-main").style.marginLeft = "300px";
  document.getElementById("sidebar-menu").style.fontSize = "0";
  document.getElementById("sidebar-menu").style.border = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("resume-main").style.marginLeft = "50px";
  document.getElementById("sidebar-menu").style.fontSize = "30";
  document.getElementById("sidebar-menu").style.border = "#111 solid 2px";
}
