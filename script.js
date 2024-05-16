
function random()
{
    const imgs =['url("king2.jpg")','url("king3.png")','url("king4.png")'];
    const pic = document.querySelector('section')
    const a= imgs[Math.floor(Math.random()*imgs.length)];
    
    pic.style.backgroundImage = a ;
}

setInterval(random,1000);

(function () {
    var words = ["Photographer","Developer","Youtuber","Happy Person","Farmer","Rider" ],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 2000)
  })();
