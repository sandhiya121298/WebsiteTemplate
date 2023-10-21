// // function scrollValue() {
// //   var navbar = document.getElementById('navbar');
// //   var scroll = window.scrollY;
// //   if (scroll < 300) {
// //       navbar.classList.remove('');
// //   } else {
// //       navbar.classList.add('#F0D9E8');
// //   }
// // }

// // window.addEventListener('scroll', scrollValue);

// const menu=document.getElementsByClassName("menu")[0]
// const  navlinks=document.getElementsByClassName("rightside")[0]
// menu.addEventListener("click",()=>{
//   navlinks.classList.toggle("active")
// })




              /****greeting slide****/
// var leftbtn = document.querySelector(".left_button");
var rightbtn = document.querySelector(".right_button");
var image_container = document.getElementsByClassName("slider_frame")[0];

var leftValue = 0;
console.log(image_container.clientWidth);
var totalWidth = image_container.clientWidth - 360;

function rightbtnAction() {
  if (leftValue <= 0 && leftValue > -totalWidth) {
    leftValue -= 360;
  } else {
    leftValue = 0;
  }

  result = leftValue + "px";
  console.log(result);

  image_container.style.left = result;
}
setInterval(rightbtnAction, 2000);


             /****bridemade and groomsmen****/
var right = document.querySelector(".right");
var container = document.getElementsByClassName("persons_slide")[0];

var leftval = 0;
console.log(container.clientWidth);
var total_width = container.clientWidth - 190;

function rightAction() {
  if (leftval <= 0 && leftval > -total_width) {
    leftval -= 190;
  } else {
    leftval = 0;
  }

  result = leftval + "px";
  console.log(result);

  container.style.left = result;
}
setInterval(rightAction, 2000);


window.addEventListener("scroll",()=>{
  var navbar=document.getElementById("navbar");
  var navbarContent=document.querySelectorAll(".top_navbar .bar .rightside li");
  var logoContent=document.querySelector(".top_navbar .bar .leftside");
  if(window.scrollY>450){
    navbar.style.backgroundColor="#F0D9E8";
    logoContent.style.color="black";
    for(let i=0;i<navbarContent.length;i++){
      navbarContent[i].style.color="black";
    }
   
  }
  else{
    logoContent.style.color="white";
    navbar.style.backgroundColor="transparent";
    for(let i=0;i<navbarContent.length;i++){
      navbarContent[i].style.color="white";
    }
  }
})
