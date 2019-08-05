window.onscroll = function() {
  GoScroll();
};

function GoScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-id").style.padding = "0px 5px 0px 5px";
    document.getElementById("brand-nav").style.padding = "10px 0px 0px 0px";
    document.getElementById("nav-id").style.backgroundColor =
      "rgba(232,196,118, 1)";
    // var top = document.getElementsByClassName("top");
    // for (var i = 0; i < top.length; i++) {
    //   top[i].style.color = "black";
    // }
  } else {
    document.getElementById("nav-id").style.padding = "0px 16px 0px 15px";
    document.getElementById("brand-nav").style.padding = "80px 0px 0px 0px";
    document.getElementById("nav-id").style.backgroundColor =
      "rgba(30,39,46, 0)";
    // var top = document.getElementsByClassName("top");
    // for (var i = 0; i < top.length; i++) {
    //   top[i].style.color = "white";
    // }
  }
}
