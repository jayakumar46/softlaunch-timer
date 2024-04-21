function updateTime() {
  const day = document.querySelector(".days");
  const hour = document.querySelector(".hours");
  const mintute = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  const CurrentYear = new Date().getFullYear();
  const NeedDate = new Date(`may 1 ${CurrentYear} 00:00:00`);
  const CurrentDate = new Date();
  const targetDate = NeedDate - CurrentDate;
  const d = Math.floor(targetDate / 1000 / 60 / 60 / 24);
  const h = Math.floor((targetDate / 1000 / 60 / 60) % 24);
  const m = Math.floor((targetDate / 1000 / 60) % 60);
  const s = Math.floor((targetDate / 1000) % 60);
  day.innerHTML = d < 10 ? "0" + d : d;
  hour.innerHTML = h < 10 ? "0" + h : h;
  mintute.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? +"0" + s : s;
}
setInterval(updateTime, 1000);
