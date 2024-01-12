
// for theme changer 



let menuBtn = document.querySelector('#open');
let navBar = document.querySelector('.nav-bar');

menuBtn.addEventListener('click', ()=> {

    navBar.classList.toggle('nav-bar-function');
    menuBtn.classList.toggle('fa-xmark');
})


var typed = new Typed(".auto", {
    strings : ["Web Developer", "Youtuber","Frontend Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})
var typeWriting = new Typed(".typeWriting", {
    strings : ["A student who is immensely dedicated towards his passion of learning different modern technologies results in experting in web development."],
    typeSpeed: 32,
    backSpeed: 100,
    loop: false

})


const track = document.getElementById("image-track");

window.onmousedown = e =>{
    track.dataset.mouseDownAt = e.clientX;
    
}

const moveBox = document.querySelector('.big-hover');

window.onmousemove = e =>{
    moveBox.style.left = e.pageX + 'px';
       moveBox.style.top = e.pageY + 'px';
}
var action = () =>{
    moveBox.classList.add('clicked-action');

    setTimeout(() => {
    moveBox.classList.remove('clicked-action');
        
    }, 300);
}

window.addEventListener('click', action);


// this is for the skill bar 

// const circleSection = document.querySelector('.circles');
// const circles = document.querySelector('.circle');
// const progressCircles = document.querySelector('.progess');
// const progressText = document.querySelector('.circles h1');
    
// let bol = false;
// document.querySelector('#skills').addEventListener("scroll", function () {
    
//     if(pageYOffset > circleSection.offsetTop - 600 && bol === false ){

//         for(let i = 0; i < circles.length; i++){
//             let radius = progressCircles[i].r.baseVal.value;

//             let circumference = radius * 2 * Math.PI;

//             progressCircles[i].style.strokeDasharray = circumference;

//             function setProgress(percent){
//                 progressCircles[i].style.strokeDashoffset =
//                  circumference - (percent / 100) * circumference;

//             } 
            
//                 const progress = circles[i].dataset.prog;

//                 progressText[i].innerHTML = progress + "%";
                
//                 setProgress(progress);

//                 bol = true;
            
//         }
//     }
// })



