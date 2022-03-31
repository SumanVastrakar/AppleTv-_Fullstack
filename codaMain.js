var background=[{
    img:"https://is5-ssl.mzstatic.com/image/thumb/NuPsZ_5oG0ChKLKkWolc5Q/3358x1889sr.webp"
}];




let Poster=document.querySelector(".coda_video");
Poster.poster=background[0].img;



var codaVideo=[{url:"coda_video.mp4"}];


function slow(){

    var div=document.querySelector(".coda_video");
div.src=codaVideo[0].url;

}

var exit=setTimeout(slow,3000);


