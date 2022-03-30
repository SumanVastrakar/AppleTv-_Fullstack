console.log("hdsj")
let signindiv=document.querySelector(".signin_box_hidden");
let termsAndCond=document.querySelector(".signin_termscondition")
let signin_form=document.querySelector(".sigin_form");
let email_verification=document.querySelector(".email_verification")
let landing_navbar_loggedIn=document.querySelector(".landing_navbar_loggedIn");
let landing_navbar_signin=document.querySelector(".landing_navbar_signin");
let appleID_input_text=document.querySelector(".appleID_input_box");
//sign in button
document.querySelector(".landing_navbar_button").addEventListener("click",function(){
    let signindiv=document.querySelector(".signin_box_hidden");
    console.log("someone clicked signin")
    signindiv.classList.remove("hidden")
    appleID_input_text.value="";
    let logged_user=document.querySelector("#logged_user");
    logged_user.textContent="";
   
})
//start free trial 
document.querySelector(".Ted_Lasso_button").addEventListener("click",function(){
    let signindiv=document.querySelector(".signin_box_hidden");
    console.log("someone clicked free trial")
   
    signindiv.classList.remove("hidden")
})
//creating new apple id
document.querySelector(".Create_new_Apple_Id").addEventListener("click",function(){
    let termsAndCond=document.querySelector(".signin_termscondition")
 
    termsAndCond.classList.remove("hidden");
})
//continuing with button
document.querySelector(".Continue_btn").addEventListener("click",function(){
    let signin_form=document.querySelector(".sigin_form");
    signin_form.classList.remove("hidden");
})
//email verification
document.querySelector(".siginButton").addEventListener("click",function(){
    let termsAndCond=document.querySelector(".email_verification")
   
    termsAndCond.classList.remove("hidden");
})
document.querySelector(".cross_button_1").addEventListener("click",function(){
   
    signindiv.classList.add("hidden")
   
}) 
document.querySelector(".cross_button_2").addEventListener("click",function(){
   
   
    termsAndCond.classList.add("hidden")
    signindiv.classList.add("hidden")
    
}) 
document.querySelector(".cross_button_3").addEventListener("click",function(){
   
   
 
    signin_form.classList.add("hidden")
    termsAndCond.classList.add("hidden")
    signindiv.classList.add("hidden")
}) 
document.querySelector(".cross_button_4").addEventListener("click",function(){
    email_verification.classList.add("hidden")
    signin_form.classList.add("hidden")
    termsAndCond.classList.add("hidden")
    signindiv.classList.add("hidden")
}) 
//successfully signed up to the Apple
document.querySelector(".verification_button").addEventListener("click",function(){
   
    let input=document.querySelector("#Email_verification_code").value;
    console.log(input);
if(input=="123456")
   {
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
var userData=[];
var userData=JSON.parse(localStorage.getItem("AppleTVdata"))||[];
console.log(userData);

document.querySelector(".siginButton").addEventListener("click",function(){
    let email_verification_text= document.querySelector(".email_verification_text");
 email_verification_text.textContent="";
    let First_Name_input=document.querySelector("#First_Name_input").value;
    let Last_Name_input=document.querySelector("#Last_Name_input").value;
    let Birthday_input=document.querySelector("#Birthday_input").value;
     let email_input=document.querySelector("#email_input").value;
     let password_input=document.querySelector("#password_input").value;
     console.log(First_Name_input,Last_Name_input,Birthday_input, email_input,password_input);

     var userObject={
         firstName:First_Name_input,
         lastName:Last_Name_input,
         DOB:Birthday_input,
         email: email_input,
         password:password_input,
     }
     flag=false;
userData.forEach(elem=>{
if( email_input==elem.email){
    flag=true;
   
   
}

})
   if(flag==false){
    userData.push(userObject);
    
    localStorage.setItem("AppleTVdata",JSON.stringify(userData));
   console.log(userData);
  
   let h6=document.createElement("h6");
   h6.textContent=`Enter the verification code sent to ${email_input}`;
   email_verification_text.append(h6);
   }
   else{
    alert("User Already exist");
    signindiv.classList.add("hidden")
    email_verification.classList.add("hidden")
    signin_form.classList.add("hidden")
    termsAndCond.classList.add("hidden")
    signindiv.classList.add("hidden")
   }
    

})
document.querySelector("#button-addon2").addEventListener("click",function(){
    console.log("clicked arrow")
    let appleID_input=document.querySelector(".appleID_input_box").value;
   var flag=false;
    userData.forEach(elem => {
        if(appleID_input==elem.email)
        {flag=true;
            alert("Logged In Successfully")
           
             let p=document.createElement("p");
             p.textContent=`Welcome, ${elem.firstName}`;
             p.setAttribute("class","logo_text")
             let logged_user=document.querySelector("#logged_user");
             logged_user.append(p);
             signindiv.classList.add("hidden")
             landing_navbar_loggedIn.classList.remove("hidden");
             landing_navbar_signin.classList.add("hidden");
           
        }
     
    });
    if(flag==false)
    alert("You Need To SignUp First")
})
//logout functionality
document.querySelector("#dropdown_logout_navbar").addEventListener("click",function(){
    landing_navbar_signin.classList.remove("hidden");
    landing_navbar_loggedIn.classList.add("hidden");
})
