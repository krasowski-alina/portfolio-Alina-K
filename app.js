
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
                      
                      "certificates/gsap.png",
                      "certificates/bootstrap.png",
                      "certificates/Introduction to Web Development.png",
                      "certificates/JavaScript.png"
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
// skills section 
function renderSkillIcon() {
  const skills = [`<i class="fa-brands fa-js icon-style"></i>`,
                `<i class="fa-brands fa-react icon-style"></i>`,
                `<i class="fa-brands fa-html5 icon-style"></i>`,
                `<i class="fa-brands fa-css3-alt icon-style"></i>`,
                `<i class="fa-brands fa-bootstrap icon-style"></i>`,
                `<p class="hidden">JavaScript</p>`,
                `<p class="hidden">React</p>`,
                `<p class="hidden">HTML5</p>`,
                `<p class="hidden">CSS3</p>`,
                `<p class="hidden">Bootstrap</p>`
                ]
  let skillHtml =``
  for(let i=0; i< skills.length; i++){
      skillHtml += skills[i]
  }
  document.getElementById('skills-container').innerHTML = skillHtml
}
renderSkillIcon()
// Projects
const items = document.querySelectorAll(".mouseover");
items.forEach(item => {
  item.addEventListener("mouseover", ()=> {
    removeFocus()
    item.classList.add("new")
  })
  function removeFocus(){
    items.forEach(item => {
      item.classList.remove("new")
    })
  }
})
// import { data } from "/data.js"
// function renderProjects(cardsArr){
//   const renderCards = cardsArr.map(card => {
//     const {id, image, name, stack} = card
//     return `<<div class="one placeholder">
//               <h4 class="mouseover-heading">${name}</h4>
//               <button class="project-btn">Open Project</button>
//               <p class="mouseover-text">HTML /CSS /JS /GSAP /AOS</p>
//           </div>`
//   })
//   document.querySelector('.project-cards').innerHTML = renderCards
// }
// renderProjects(data)