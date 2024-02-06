// const object=alert('Want to change the color of website then click at color dots below vijay travels.');
// console.log(object)

// ====================>>>>  mobile menu responsive

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const menu = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        menu.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })
}


// =============== color switcher start
const btns = document.querySelectorAll('.swipe_btn');
const nav = document.querySelector(".menu_item") // we  take body because we want to change color of background
const h1 = document.querySelector('.main_heading');
const title = document.querySelector('#title');
const form = document.querySelector(".div1form");
const section2 = document.querySelector("#section_2");
const head_sec2 = document.querySelector(".sec2_head");
const preSlideBtn=document.querySelector(".left");
const nextSlideBtn=document.querySelector(".right");
const service=document.querySelector(".service");


btns.forEach(function (list) {
    list.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "white") {
            nav.style.backgroundColor = "rgba(19, 229, 229)";
            h1.style.color = "black";
            form.style.backgroundColor = "rgba(19, 229, 229, 0.866)";
            title.style.backgroundColor = "rgba(19,229,229,0.866)";
            section2.style.backgroundColor = "rgba(19, 229, 229, 0.866)";
            head_sec2.style.color = "rgba(0,0,0)";
            preSlideBtn.style.backgroundColor="rgba(19, 229, 229)";
            nextSlideBtn.style.backgroundColor="rgba(19, 229, 229)";
            service.style.backgroundColor="rgba(19, 229, 229)";

        }
        if (e.target.id === 'Dark') {
            nav.style.backgroundColor = "rgba(237, 151, 52, 0.959)";
            h1.style.color = "rgba(0,0,0)";
            form.style.backgroundColor = "rgba(237, 151, 52, 0.959)";
            title.style.backgroundColor = "rgba(237,151,59,0.966)";
            section2.style.backgroundColor = "rgba(237, 151, 52, 0.959)";
            head_sec2.style.color = "rgba(0,0,0)";
            preSlideBtn.style.backgroundColor="rgba(237, 151, 52, 0.959)";
            nextSlideBtn.style.backgroundColor="rgba(237, 151, 52, 0.959)";
            service.style.backgroundColor="rgba(237, 151, 52, 0.959)";

         }
        if (e.target.id === 'black') {
            nav.style.backgroundColor = "rgb(227, 85, 180)";
            h1.style.color = "rgba(0,0,0)";
            form.style.backgroundColor = "rgba(227, 91, 152, 0.559)";
            title.style.backgroundColor = "rgba(229,91,152,0.866)";
            section2.style.backgroundColor = "rgba(227, 91, 152, 0.559)";
            head_sec2.style.color = "rgba(0,0,0)";
            preSlideBtn.style.backgroundColor="rgb(227, 85, 180)";
            nextSlideBtn.style.backgroundColor="rgb(227, 85, 180)";
            service.style.backgroundColor="rgb(227, 85, 180)";

        }
    })
});
//  ===================color switcher end here

//  =========== making onlcik event on slider button so that we can scroll image
const initSlider=()=>{
    const imageList=document.querySelector(" .slider-wrapper .image-list");
    const slidebtn=document.querySelectorAll(" .slider-wrapper .slide-button");
    slidebtn.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="pre-slide" ? -1 : 1 ;
            const scrollAmount=imageList.clientWidth*direction;
            imageList.scrollBy({left:scrollAmount,behavior:"smooth"});
        });
        
    });
} 
window.addEventListener("load",initSlider);








