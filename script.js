
function random()
{
    const imgs =['url("king1.jpeg")','url("king2.jpg")'];
    const pic = document.querySelector('section')
    const a= imgs[Math.floor(Math.random()*imgs.length)];
    
    pic.style.backgroundImage = a ;
}

setInterval(random,2000);

(function () {
    var words = ["Photographer","Developer","Youtuber","Happy Person" ],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 2000)
  })();
