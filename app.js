let btnList = 0;
// Daily
document.querySelector(".daily").addEventListener("click", dailyActive);
function dailyActive(event) {
  let btnList = document.querySelectorAll(".btn");
  for (let i = 0; i < btnList.length; i++) {
    btnList.item(i).classList.remove("active");
  }
  event.target.classList.add("active");
  document.querySelector(".time-work").innerHTML = 5 + "hrs";
  document.querySelector(".last-week-work").innerHTML =
    "Last Day - " + 7 + "hrs";
  document.querySelector(".time-play").innerHTML = 1 + "hrs";
  document.querySelector(".last-week-play").innerHTML =
    "Last Day - " + 2 + "hrs";
  document.querySelector(".time-study").innerHTML = 0 + "hrs";
  document.querySelector(".last-week-study").innerHTML =
    "Last Day - " + 1 + "hrs";
  document.querySelector(".time-exercise").innerHTML = 1 + "hrs";
  document.querySelector(".last-week-exercise").innerHTML =
    "Last Day - " + 1 + "hrs";
  document.querySelector(".time-social").innerHTML = 1 + "hrs";
  document.querySelector(".last-week-social").innerHTML =
    "Last Day - " + 3 + "hrs";
  document.querySelector(".time-self-care").innerHTML = 0 + "hrs";
  document.querySelector(".last-week-self-care").innerHTML =
    "Last Day - " + 1 + "hrs";
}

// Weekly
document.querySelector(".weekly").addEventListener("click", weeklyActive);
function weeklyActive(event) {
  let btnList = document.querySelectorAll(".btn");
  for (let i = 0; i < btnList.length; i++) {
    btnList.item(i).classList.remove("active");
  }
  event.target.classList.add("active");
  document.querySelector(".weekly").classList.add("active");
  document.querySelector(".time-work").innerHTML = 32 + "hrs";
  document.querySelector(".last-week-work").innerHTML =
    "Last Week - " + 36 + "hrs";
  document.querySelector(".time-play").innerHTML = 10 + "hrs";
  document.querySelector(".last-week-play").innerHTML =
    "Last Week - " + 8 + "hrs";
  document.querySelector(".time-study").innerHTML = 4 + "hrs";
  document.querySelector(".last-week-study").innerHTML =
    "Last Week - " + 7 + "hrs";
  document.querySelector(".time-exercise").innerHTML = 4 + "hrs";
  document.querySelector(".last-week-exercise").innerHTML =
    "Last Week - " + 5 + "hrs";
  document.querySelector(".time-social").innerHTML = 5 + "hrs";
  document.querySelector(".last-week-social").innerHTML =
    "Last Week - " + 10 + "hrs";
  document.querySelector(".time-self-care").innerHTML = 2 + "hrs";
  document.querySelector(".last-week-self-care").innerHTML =
    "Last Week - " + 2 + "hrs";
}

// Monthly
document.querySelector(".monthly").addEventListener("click", monthlyActive);
function monthlyActive(event) {
  let btnList = document.querySelectorAll(".btn");
  for (let i = 0; i < btnList.length; i++) {
    btnList.item(i).classList.remove("active");
  }
  event.target.classList.add("active");
  document.querySelector(".monthly").classList.add("active");
  document.querySelector(".time-work").innerHTML = 103 + "hrs";
  document.querySelector(".last-week-work").innerHTML =
    "Last Month - " + 128 + "hrs";
  document.querySelector(".time-play").innerHTML = 23 + "hrs";
  document.querySelector(".last-week-play").innerHTML =
    "Last Month - " + 29 + "hrs";
  document.querySelector(".time-study").innerHTML = 13 + "hrs";
  document.querySelector(".last-week-study").innerHTML =
    "Last Month - " + 19 + "hrs";
  document.querySelector(".time-exercise").innerHTML = 11 + "hrs";
  document.querySelector(".last-week-exercise").innerHTML =
    "Last Month - " + 18 + "hrs";
  document.querySelector(".time-social").innerHTML = 21 + "hrs";
  document.querySelector(".last-week-social").innerHTML =
    "Last Month - " + 23 + "hrs";
  document.querySelector(".time-self-care").innerHTML = 7 + "hrs";
  document.querySelector(".last-week-self-care").innerHTML =
    "Last Month - " + 11 + "hrs";
}
