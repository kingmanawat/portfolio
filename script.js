
function random()
{
    const imgs =['url("king1.jpeg")','url("king2.jpg")'];
    const pic = document.querySelector('section')
    const a= imgs[Math.floor(Math.random()*imgs.length)];
    
    pic.style.backgroundImage = a ;
}

setInterval(random,2000);