
let signindiv = document.querySelector(".signin_box_hidden");
let termsAndCond = document.querySelector(".signin_termscondition")
let signin_form = document.querySelector(".sigin_form");
let email_verification = document.querySelector(".email_verification")
let landing_navbar_loggedIn = document.querySelector(".landing_navbar_loggedIn");
let landing_navbar_signin = document.querySelector(".landing_navbar_signin");
let appleID_input_text = document.querySelector(".appleID_input_box");
//sign in button
document.querySelector(".landing_navbar_button").addEventListener("click", function () {
    let signindiv = document.querySelector(".signin_box_hidden");

    signindiv.classList.remove("hidden")
    appleID_input_text.value = "";
    let logged_user = document.querySelector("#logged_user");
    logged_user.textContent = "";

})
//start free trial 
document.querySelector(".Ted_Lasso_button").addEventListener("click", function () {
    let signindiv = document.querySelector(".signin_box_hidden");
    console.log("someone clicked free trial")

    signindiv.classList.remove("hidden")
})
//creating new apple id
document.querySelector(".Create_new_Apple_Id").addEventListener("click", function () {
    let termsAndCond = document.querySelector(".signin_termscondition")

    termsAndCond.classList.remove("hidden");
    signindiv.classList.add("hidden")
})
//continuing with button
document.querySelector(".Continue_btn").addEventListener("click", function () {
    let signin_form = document.querySelector(".sigin_form");
    signin_form.classList.remove("hidden");
})
//email verification
document.querySelector(".siginButton").addEventListener("click", function () {
    let termsAndCond = document.querySelector(".email_verification")

    termsAndCond.classList.remove("hidden");
    email_verification.classList.remove("hidden");
})
document.querySelector(".cross_button_1").addEventListener("click", function () {

    signindiv.classList.add("hidden")

})
document.querySelector(".cross_button_2").addEventListener("click", function () {


    termsAndCond.classList.add("hidden")
    signindiv.classList.add("hidden")

})
document.querySelector(".cross_button_3").addEventListener("click", function () {



    signin_form.classList.add("hidden")
    termsAndCond.classList.add("hidden")
    signindiv.classList.add("hidden")
})
document.querySelector(".cross_button_4").addEventListener("click", function () {
    email_verification.classList.add("hidden")
    signin_form.classList.add("hidden")
    termsAndCond.classList.add("hidden")
    signindiv.classList.add("hidden")
})
//successfully signed up to the Apple
document.querySelector(".verification_button").addEventListener("click", function () {

    let input = document.querySelector("#Email_verification_code").value;
    console.log(input);
    if (input == "123456") {
        email_verification.classList.add("hidden")
        signin_form.classList.add("hidden")
        termsAndCond.classList.add("hidden")
        signindiv.classList.add("hidden")
        alert("SIGNED UP SUCESSFULLY")
    }
    else {
        alert(" Code You Entered is incorrect")
    }
})
var userData = [];
var userData = JSON.parse(localStorage.getItem("AppleTVdata")) || [];

console.log(userData);

document.querySelector(".siginButton").addEventListener("click", function () {
    let email_verification_text = document.querySelector(".email_verification_text");
    email_verification_text.textContent = "";
    let First_Name_input = document.querySelector("#First_Name_input").value;
    let Last_Name_input = document.querySelector("#Last_Name_input").value;
    let Birthday_input = document.querySelector("#Birthday_input").value;
    let email_input = document.querySelector("#email_input").value;
    let password_input = document.querySelector("#password_input").value;
    console.log(First_Name_input, Last_Name_input, Birthday_input, email_input, password_input);

    var userObject = {
        firstName: First_Name_input,
        lastName: Last_Name_input,
        DOB: Birthday_input,
        email: email_input,
        password: password_input,
    }
    flag = false;
    userData.forEach(elem => {
        if (email_input == elem.email) {
            flag = true;


        }

    })
    if (flag == false) {
        userData.push(userObject);

        localStorage.setItem("AppleTVdata", JSON.stringify(userData));
        console.log(userData);

        let h6 = document.createElement("h6");
        h6.textContent = `Enter the verification code sent to ${email_input}`;
        email_verification_text.append(h6);
    }
    else {
        alert("User Already exist");
        signindiv.classList.add("hidden")
        email_verification.classList.add("hidden")
        signin_form.classList.add("hidden")
        termsAndCond.classList.add("hidden")
        signindiv.classList.add("hidden")
    }


})
document.querySelector("#button-addon2").addEventListener("click", function () {
    console.log("clicked arrow")
    let appleID_input = document.querySelector(".appleID_input_box").value;
    var flag = false;
    userData.forEach(elem => {
        if (appleID_input == elem.email) {
            flag = true;
            alert("Logged In Successfully")

            let p = document.createElement("p");
            p.textContent = `Welcome, ${elem.firstName}`;
            p.setAttribute("class", "logo_text")
            let logged_user = document.querySelector("#logged_user");
            logged_user.append(p);
            signindiv.classList.add("hidden")
            landing_navbar_loggedIn.classList.remove("hidden");
            landing_navbar_signin.classList.add("hidden");

        }

    });
    if (flag == false)
        alert("You Need To SignUp First")
})
//logout functionality
document.querySelector("#dropdown_logout_navbar").addEventListener("click", function () {
    landing_navbar_signin.classList.remove("hidden");
    landing_navbar_loggedIn.classList.add("hidden");
})
// ========================================================ramesh part=====================================================================================
var background = [{
    img: "https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/cd/fd/9c/cdfd9c92-f64f-0546-ee82-680c84f0e3f2/RUlXLVRWQS1XVy1UVlBULVNjaUZpLnBuZw.png/1320x495sr.png"
}];

var backvideo = [{
    url: "landingpage_background_video.mp4"
}];


let Poster = document.querySelector(".post");
Poster.poster = background[0].img;




function slow() {
    let video = document.querySelector(".post");
    video.src = backvideo[0].url;

}

setTimeout(slow, 5000);



var img_data = [
    {
        image_url: "https://is3-ssl.mzstatic.com/image/thumb/Features116/v4/e6/b0/50/e6b05061-aa13-0a76-1066-51f970093756/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtU2V2ZXJlbmNlLWxhbmc9ZW5fQVUrZW5fR0IrZW5fQ0ErZW5fVVMubHNy.lsr/738x416sr.webp",
        title: "Severence",
        url: "https://tv.apple.com/in/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx?ctx_brand=tvs.sbd.4000"
    },
    {
        image_url: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/dc/5d/e3/dc5de388-3b75-2bea-0438-3e91d10772b1/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmVfU2VlLWxhbmc9ZW5fQVUrZW5fR0IrZW5fQ0ErZW5fVVMubHNy.lsr/738x416sr.webp",
        title: "See",
        url: "https://tv.apple.com/in/show/see/umc.cmc.3s4mgg2y7h95fks9gnc4pw13m?ctx_brand=tvs.sbd.4000"
    },
    {
        image_url: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/23/3f/15/233f15de-5bd5-b3a0-c15c-b040273c7b04/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtRmluY2gtbGFuZz1lbl9BVStlbl9HQitlbl9DQStlbl9VUy5sc3I.lsr/738x416sr.webp",
        title: "Finch",
        url: "https://tv.apple.com/in/movie/finch/umc.cmc.47dkj9f2ho3h8dwxixflz65q5?ctx_brand=tvs.sbd.4000"
    },
    {
        image_url: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/e3/64/23/e3642370-4b8a-adae-8f39-b4bd563878cf/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtSW52YXNpb24tbGFuZz1kZV9DSCtoZV9JTCtkYV9ESytlbl9BVStmcl9GUitmcl9DQStlbl9HQitub19OTytlbl9DQStmaV9GSStzdl9TRStpdF9JVCtubF9OTCthcl9TQStlbl9VUy5sc3I.lsr/738x416sr.webp",
        title: "Invation",
        url: "https://tv.apple.com/in/show/invasion/umc.cmc.70b7z97fv7azfzn5baqnj88p6?ctx_brand=tvs.sbd.4000"
    },
    {
        image_url: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/64/bf/a7/64bfa77a-3d22-5927-d459-075c06baab19/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtRm91bmRhdGlvbi5sc3I.lsr/738x416sr.webp",
        title: "foundation",
        url: "https://tv.apple.com/in/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3?ctx_brand=tvs.sbd.4000"
    },
    {
        image_url: "https://is5-ssl.mzstatic.com/image/thumb/Features116/v4/02/45/c8/0245c8b7-1577-ce11-b941-bcd6231f287a/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtRm9yX0FsbF9NYW5raW5kLmxzcg.lsr/738x416sr.webp",
        title: "For All Mankind",
        url: "https://tv.apple.com/in/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7?ctx_brand=tvs.sbd.4000"
    },
    {
        image_url: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/ed/17/1d/ed171d27-6511-516b-7914-4a272017e8ec/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtU3dhbl9Tb25nLWxhbmc9ZW5fQVUrZW5fR0IrZW5fQ0ErZW5fVVMubHNy.lsr/738x416sr.webp",
        title: "Swan Song",
        url: "https://tv.apple.com/in/movie/swan-song/umc.cmc.2u5ulzjcxh7e50uhichjjlsv6?ctx_brand=tvs.sbd.4000"
    },
    {
        image_url: "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/ba/c6/83/bac6838e-a97f-e0cf-a173-c062a750fa00/RUJSLVRWQS1XVy1TY2lGaV9JbmxpbmUtRHJfQnJhaW4tbGFuZz1lbl9BVStlbl9HQitlbl9DQStlbl9VUy5sc3I.lsr/738x416sr.webp",
        title: "Dr.Brain",
        url: "https://tv.apple.com/in/show/dr-brain/umc.cmc.60vbrno9xpmmax8wmdo4ow05u?ctx_brand=tvs.sbd.4000"
    },]



displayData(img_data)
function displayData(img_data) {

    document.querySelector(".apple_exordinary_background_subadd").innerHTML = "";

    img_data.map(function (ele) {
        var div = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src", ele.image_url);

        var a = document.createElement("a");
        a.textContent = ele.title;
        a.addEventListener("click", function () {

            a.setAttribute("href", ele.url);
        })

        div.append(image, a);


        document.querySelector(".apple_exordinary_background_subadd").append(div);

    });
};



// var slides_images_data=[
//     {pic:"https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/66/8a/8a/668a8a2d-c65d-7165-29e1-257115a37645/RVNXLVRWQS1XVy1Pc2NhcnMtVGhlX1RyYWdlZHlfb2ZfTWFjYmV0aC5wbmc.png/1320x495sr.webp"},
//     {pic:"https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/5c/69/1e/5c691e3d-f436-651c-27b1-80273cc31899/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9Pc2NhcnMtQ09EQS5wbmc.png/1320x495sr.webp"},
//     // {pic:""},
//     // {pic:""},
//     // {pic:""},
//     // {pic:""},
//     // {pic:""},
//     // {pic:""},
//     // {pic:""},
// ]




// displayimage(slides_images_data);
// function displayimage(slides_images_data){

// // document.querySelector(".big_slideshow_landing_page slider").innerHTML="";

// slides_images_data.map(function(ele){
//     var div = document.createElement("div");

//     var image = document.createElement("img");
//     image.setAttribute("src", ele.pic);

//     div.append(image);


//     document.querySelector(".slider").append(div);

// });
// };



//coming soon
function comingSoon(data) {

  
    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Coming_Soon")[i].setAttribute("src", data[i].movie_image);
    }


    $('.Coming_Soon_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 2000,
    });


}

///latest originals

function latestOriginals(data) {

    for (let i = 0; i < data.length; i++) {
        //Accessing the image eelement inside the parent element
        document.querySelectorAll(".Latest_originals_images")[i].children[0].setAttribute("src", data[i].movie_image);

        //Accessing the details --> Category
        document.querySelectorAll(".Latest_originals_images")[i].children[1].children[0].textContent = data[i].movie_categories;

        //Accessing the details --> Movie title
        document.querySelectorAll(".Latest_originals_images")[i].children[1].children[1].textContent = data[i].movie_title;

        //Accessing the details --> Description
        document.querySelectorAll(".Latest_originals_images")[i].children[1].children[2].textContent = data[i].movie_description;
    }

    //Slick slider
    $('.Latest_originals_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
    });
}

//watch entire seson

function WatchEntire(data) {

  
    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Watch_Enitre_Seasons")[i].setAttribute("src", data[i].movie_image);
    }


    $('.Watch_Enitre_Seasons_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
    });


}

//Erie tales

function ErieTales(data) {

    // console.log(document.querySelectorAll(".Watch_Enitre_Seasons_slider"));
    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Erie_Tales")[i].setAttribute("src", data[i].movie_image);
    }


    $('.Erie_Tales_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
    });


}
// <!-- =============================================stories around the glovbe======================================================================================================== -->

function storiesFromGlobe(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Stories_From_Around_The_Globe")[i].setAttribute("src", data[i].movie_image);
    }

    $('.Stories_From_Around_The_Globe_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
    });


}

// <!-- ====================================finding their voices======================================================================================== -->

function findingVoices(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Finding_Their_Voice")[i].setAttribute("src", data[i].movie_image);
    }


    $('.Finding_Their_Voice_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
    });


}

// =================================================================================================================================================================Extraordinary_People============================================ -->


function Extraordinarypeople(data) {

    for (let i = 0; i < data.length; i++) {
        //Accessing the image eelement inside the parent element
        document.querySelectorAll(".Extraordinary_People_images")[i].children[0].setAttribute("src", data[i].movie_image);

        //Accessing the details --> Category
        document.querySelectorAll(".Extraordinary_People_images")[i].children[1].children[0].textContent = data[i].movie_categories;

        //Accessing the details --> Movie title
        document.querySelectorAll(".Extraordinary_People_images")[i].children[1].children[1].textContent = data[i].movie_title;

        //Accessing the details --> Description
        document.querySelectorAll(".Extraordinary_People_images")[i].children[1].children[2].textContent = data[i].movie_description;
    }



    $('.Extraordinary_People_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
    });


}

// <!-- ========================================================================================creatures and critters================================ -->

function creaturesCritters(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Creatures_critters")[i].setAttribute("src", data[i].movie_image);
    }



    $('.Creatures_critters_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
    });

}

// <!-- ===========================all drama series================================================================================================ -->


function allDramaseries(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".All_Drama_Serires")[i].setAttribute("src", data[i].movie_image);
    }




    $('.All_Drama_Serires_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
    });

}

// <!-- ==============================================features and film========================================================================== -->

function featuresFilms(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".All_Features_Flims")[i].setAttribute("src", data[i].movie_image);
    }



    $('.All_Features_Flims_slider').slick({
        slidesToShow: 5,
        slidesToScroll:5,
        autoplay:false,
        autoplaySpeed: 2000,
      });
}

//  <!-- ===============================================all comedy series=============================================================================== -->

function Allcomedy(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".All_Comdey_Series_")[i].setAttribute("src", data[i].movie_image);
    }   
    $('.All_Comdey_Series__slider').slick({
        slidesToShow: 5,
        slidesToScroll:5,
        autoplay:false,
        autoplaySpeed: 2000,
      });
}
// <!-- ==========================our amazing planet===================================================================================== -->

function amazingPlanet(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Our_Amazing_Planet")[i].setAttribute("src", data[i].movie_image);
    }   
    $('.Our_Amazing_Planet_slider').slick({
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay:false,
        autoplaySpeed: 2000,
      });
}

// <!-- ======================================all nonfiction series==================================================================================== -->

function nonFiction(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".All_Nonfiction_Series")[i].setAttribute("src", data[i].movie_image);
    }   
    $('.All_Nonfiction_Series_slider').slick({
        slidesToShow: 5,
        slidesToScroll:5,
        autoplay:false,
        autoplaySpeed: 2000,
      });
}
///kids and family===========================================================================>
function kidsandfamily(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Kids_And_Family")[i].setAttribute("src", data[i].movie_image);
    }   
    $('.Kids_And_Family_slider').slick({
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay:false,
        autoplaySpeed: 2000,
      });
}
//
// <!-- ============================================fun for all============================================= -->
function funforAll(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Fun_For_All")[i].setAttribute("src", data[i].movie_image);
    }   
    $('.Fun_For_All_slider').slick({
        slidesToShow: 5,
        slidesToScroll:5,
        autoplay:false,
        autoplaySpeed: 2000,
      });
}
// <!-- =================================inspiration for all==================================================================== -->
function Inspirationall(data) {

    for (let i = 0; i < data.length; i++) {
        document.querySelectorAll(".Inspiration")[i].setAttribute("src", data[i].movie_image);
    }   
    $('.Inspiration_slider').slick({
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay:false,
        autoplaySpeed: 2000,
      });
}





// ========================================================================API CREATION===================================================

let url = "http://localhost:5000/users";
async function getData() {
    try {
        let data = await fetch(url);
        data = await data.json();
        console.log(data[0])
        latestOriginals(data[0].LatestOriginals);
        WatchEntire(data[0].WatchEnitreSeasons);
        // comingSoon(data[0].ComingSoons)
        Extraordinarypeople(data[0].ExtraordinaryPeople)
        allDramaseries(data[0].AllDramaSeries)
        findingVoices(data[0].FindingTheirVoice)
        ErieTales(data[0].ErieTales)
        storiesFromGlobe(data[0].StoriesFromAroundTheGlobe)
        creaturesCritters(data[0].CreaturesAndCritters)
        featuresFilms(data[0].AllFeatureFilms)
        comingSoon(data[0].ComingSoons)
        Allcomedy(data[0].AllComdeySeries)
        amazingPlanet(data[0].OurAmazingPlanet)
        nonFiction(data[0].AllNonfictionSeries)
        kidsandfamily(data[0].KidsandFamily)
        funforAll(data[0].FunforAll)
        Inspirationall(data[0].Inspirations)
    } catch (err) {
        console.log(err.message)
    }

}

getData();