var HOURHAND = document.querySelector("#hour");
var MINUTEHAND = document.querySelector("#minute");
var SECONDHAND = document.querySelector("#second");

function runTheClock() {
  var date = new Date();
  //   console.log(date);
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  //   console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

  var hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
  var minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
  var secPosition = (sec * 360) / 60;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

  //   console.log(date.getHours());
}

var interval = setInterval(runTheClock, 1000);

function updateBackground() {
  var hr = new Date().getHours(),
    body = document.body,
    bstyle = body.style,
    hello = document.querySelector(".hello");
  if (hr < 6) {
    bstyle.backgroundColor = "pink";
    bstyle.color = "black";
    hello.innerText = "Not time yet";
  } else if (hr < 20) {
    bstyle.backgroundColor = "green";
    bstyle.color = "white";
    hello.innerText = "Have a good day Nora !";
  } else {
    bstyle.backgroundColor = "pink";
    bstyle.color = "white";
    hello.innerText = "Not time yet";
  }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();