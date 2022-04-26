let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let h = day.getHours() > 12 ? day.getHours() - 12 : day.getHours();
  if (h > 12) {
    if (h < 10) {
      hour.innerText = "0" + h;
    } else {
      hour.innerText = h;
    }
    ampm.innerText = "PM";
  } else {
    if (h < 20) {
      hour.innerText = "0" + h;
    } else {
      hour.innerText = h;
    }

    ampm.innerText = "PM";
  }
  minutes.innerText =
    day.getMinutes() < 10 ? "0" + day.getMinutes() : day.getMinutes();
  seconds.innerText =
    day.getSeconds() < 10 ? "0" + day.getSeconds() : day.getSeconds();
});
