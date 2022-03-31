
      var background=[{
        img:"https://is5-ssl.mzstatic.com/image/thumb/oNk2OJAqURutdmT8ckQdYg/3358x1889sr.webp"
    }];
    
    
    
    
    let Poster=document.querySelector(".tragedtOfMacbeth_video");
    Poster.poster=background[0].img;
    
    
    
    var tragedtOfMacbethVideo=[{url:"tragedtOfMacbeth.mp4"}];


    function slow(){
  
        var div=document.querySelector(".tragedtOfMacbeth_video");
    div.src=tragedtOfMacbethVideo[0].url;

}

var exit=setTimeout(slow,5000);