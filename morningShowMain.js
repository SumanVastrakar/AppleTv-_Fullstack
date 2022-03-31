

    var background=[{
        img:"https://is3-ssl.mzstatic.com/image/thumb/4x8-s5gM0I4HxxAjAQfVfA/3358x1889sr.webp"
    }];




let Poster=document.querySelector(".morning_show_video");
Poster.poster=background[0].img;




    var morning_showVideo=[{url:"morning_show.mp4"}];

    function slow(){
  
        var div=document.querySelector(".morning_show_video");
        div.src=morning_showVideo[0].url;

}

var exit=setTimeout(slow,5000);