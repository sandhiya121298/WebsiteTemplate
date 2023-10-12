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



