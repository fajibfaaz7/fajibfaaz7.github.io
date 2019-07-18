window.onscroll = function() {
  scrollFunction();
  scrollFunction2();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navanim").style.padding = "10px 20px 10px 20px";
    document.getElementById("navanim").style.backgroundColor =
      "rgba(30,39,46, 1)";
    document.getElementById("cover-text").style.fontSize = "60px";
  } else {
    document.getElementById("navanim").style.padding = "40px 60px 20px 50px"; //top,right,bottom,left
    document.getElementById("navanim").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("cover-text").style.fontSize = "40px";
  }
}

function scrollFunction2() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("top-btn").style.width = "60px";
    document.getElementById("top-btn").style.height = "60px";
    document.getElementById("top-btn").style.opacity = "1";
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.width = "0px";
    document.getElementById("top-btn").style.height = "0px";
    document.getElementById("top-btn").style.opacity = "0";
    document.getElementById("top-btn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
