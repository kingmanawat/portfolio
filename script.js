var slideIndex =0 ;
showDivs(slideIndex);

function Slide(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  let x = document.getElementsByTagName('img');
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  } 
  x[slideIndex-1].style.display = "block"; 
  setInterval(showDivs,1000);
}
