mybutton = document.getElementById("GoTop");
  let outer = document.getElementById("header")
  window.onscroll = function () { 
    scrollFunction() };
  function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}