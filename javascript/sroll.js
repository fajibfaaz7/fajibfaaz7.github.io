window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navanim").style.padding = "10px 20px 10px 20px";
    document.getElementById("navanim").style.backgroundColor =
      "rgba(30,39,46, 1)";
    document.getElementById("cover-text").style.fontSize = "85px";
  } else {
    document.getElementById("navanim").style.padding = "40px 60px 20px 50px"; //top,right,bottom,left
    document.getElementById("navanim").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("cover-text").style.fontSize = "40px";
  }
}
