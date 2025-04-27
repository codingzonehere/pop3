const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFour = document.querySelector(".prev-3");
const SubmitBtn = document.querySelector(".Submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const progressBullet = document.querySelectorAll(".step .bullet");

// Variable
let max = 4;
let current = 1;

// Next Button Working 
firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

SubmitBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
    progressBullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function(){
        alert("Thanks");
        location.reload();
    },800);

});

// Previous Button Working
prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
    progressBullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    progressBullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.add("active");
    current -= 1;
});
prevBtnFour.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    progressBullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.add("active");
    current -= 1;
});