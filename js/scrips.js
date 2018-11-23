document.addEventListener("DOMContentLoaded",function(){
    const loginBtn = document.querySelector(".loginBtn");
    const lightbox = document.querySelector(".lightbox");
    const cancel = document.querySelector(".cancelBtn");
    const exit = document.querySelector(".fa-times");
    const body = document.querySelector("body");
    const opacity = document.querySelector(".opacityBcg");

    loginBtn.addEventListener("click", function (){
        lightbox.style.display="block";
        opacity.style.display="block";

    })

    cancel.addEventListener("click", function (){
        lightbox.style.display="none";
        opacity.style.display="none";
    })

    exit.addEventListener("click", function (){
        lightbox.style.display="none";
        opacity.style.display="none";

    })



});