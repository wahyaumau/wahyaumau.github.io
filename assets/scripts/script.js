function navToggle() {
  let listNav = document.querySelectorAll('nav ul')
  for (let nav of listNav) {
    nav.classList.toggle('show');      
  }
}

function navBackground(){
  let nav = document.querySelector("nav");
  const navHeight = nav.offsetHeight;
  let banner = document.querySelector(".banner");
  const bannerHeight = banner.offsetHeight;
  const top =	 window.pageYOffset || document.documentElement.scrollTop;
  if(window.innerWidth <= 786){
    nav.style.background = "black";
  }else{
    if (top > bannerHeight-navHeight) {
      nav.style.background = "black";
    } else {
      nav.style.background = "";
    }
  }  
}

function fillSkillBar(){
  let listSkillPercentage = document.querySelectorAll('.skill-percentage')
  for (let skillPercentage of listSkillPercentage) {
      skillPercentage.style.width = skillPercentage.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', fillSkillBar, false);
document.querySelector('.hamburger-icon').addEventListener('click', navToggle);
window.addEventListener('scroll', navBackground);
window.addEventListener('resize', navBackground);