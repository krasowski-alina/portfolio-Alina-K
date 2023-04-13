import { data } from "/data.js"
console.log(data)
// NAV BAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
// Slider
const btns = document.querySelectorAll(".btn-slider");
let i = 0;
const certificates = [
                      "certificates/JavaScript.png",
                      "certificates/gsap.png",
                      "certificates/bootstrap.png",
                      "certificates/Introduction to Web Development.png",
                      ];
btns.forEach(item => {
  item.addEventListener("click", (event)=> {
    let btn = event.target.id;
    document.querySelector("#certificate").src = certificates[i]
    if(btn === "next"){
      i++;
      if( i > certificates.length - 1) {
        i=0
      }
    }
    else i--;
      if( i < 0){
        i = certificates.length - 1;
    }
  })
})
