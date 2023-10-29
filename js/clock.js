const clock = document.querySelector("h2#clock");

// clock.innerText =
function getClock() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 없어도 됨
setInterval(getClock, 1000);
