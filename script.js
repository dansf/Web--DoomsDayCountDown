var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");
var count = 0;
var doomsDay = new Date("2030, 02, 18");
var doomsDayCount = new Date();
var number = doomsDayCount.setTime(doomsDay.getUTCDate());
number = Date.UTC(2030, 2, 18, 0, 0, 0, 0);
counter.innerText = number;
// setInterval(() => {
//   if (count <= 1000) {
//     count++;
//     counter.innerText = count;
//   }
// }, 1000);
// setTimeout(() => {
//   followers.innerText = "Followers on Instagram";
// }, 5000);
