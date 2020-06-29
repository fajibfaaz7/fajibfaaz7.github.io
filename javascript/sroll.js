window.onscroll = function() {
  scrollFunction();
  scrollFunction2();
};

function scrollFunction() {
  const elements = document.getElementsByClassName("nav-link")
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navanim").style.padding = "5px 20px 5px 20px";
    document.getElementById("navanim").style.backgroundColor =
      "#ffffff";
    document.querySelector(".nav-brand").style.color = "#5f6368"
    document.getElementById("cover-text").style.fontSize = "60px";

    Array.from(elements).forEach((element)=>{
      element.style.color = "#5f6368"
    })
    document.getElementById("navanim").style.boxShadow = "0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)"
  } else {
    document.getElementById("navanim").style.padding = "40px 60px 20px 50px"; //top,right,bottom,left
    document.getElementById("navanim").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("cover-text").style.fontSize = "40px";
    document.querySelector(".nav-brand").style.color = "#ffffff"
    Array.from(elements).forEach((element)=>{
      element.style.color = "#ffffff"
    })
    document.getElementById("navanim").style.boxShadow = "none"
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
