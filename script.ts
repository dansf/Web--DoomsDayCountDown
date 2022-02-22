var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// Count down date
var doomsDay = new Date("Feb 18, 2030 12:00:00").getTime();

// Upadata the count down every 1 second
var updateCountDown = setInterval(() => {
  // Get Today date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date (doomsDay)
  var distance = doomsDay - now;

  // Calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the browser
  counter.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

  // If the count down is finished, will be written that text below
  if (distance < 0) {
    clearInterval(updateCountDown);
    counter.innerHTML = "The world already ended!";
  }
}, 1000);

// Audio
var audio = <HTMLMediaElement>document.getElementById("audio");
audio.play();
