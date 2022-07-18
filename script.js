console.log('HEllo')
const responsive = document.querySelector(".responsive");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");
responsive.addEventListener('click', () => {
   responsive.classList.toggle("active");
     navMenu.classList.toggle("active");
     

 })
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
   responsive.classList.remove("active");
   navMenu.classList.remove("active");

}
))

// var colorWhite = document.querySelector('#color-white');
// console.log(colorWhite);
// colorWhite.addEventListener('dblclick',function(){
//    document.body.style.backgroundColor = "#2F2E41";
// })
