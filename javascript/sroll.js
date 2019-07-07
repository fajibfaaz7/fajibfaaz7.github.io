window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navanim").style.padding = "10px 20px 10px 20px";
    document.getElementById("navanim").style.backgroundColor =
      "rgba(17,17,17, 1)";
  } else {
    document.getElementById("navanim").style.padding = "40px 60px 20px 50px"; //top,right,bottom,left
    document.getElementById("navanim").style.backgroundColor = "rgba(0,0,0,0)";
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("resume-main").style.marginLeft = "250px";
  document.getElementById("sidebar-menu").style.fontSize = "0";
  document.getElementById("sidebar-menu").style.border = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("resume-main").style.marginLeft = "0px";
  document.getElementById("sidebar-menu").style.fontSize = "30";
  document.getElementById("sidebar-menu").style.border = "#111 solid 2px";
}
