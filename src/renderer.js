import "./index.css";
let currDates = null;

document.addEventListener("DOMContentLoaded", () => {
  currDates = getDates(new Date());
  updateDates();

  let leftArrow = document.getElementById("left-arrow");
  let rightArrow = document.getElementById("right-arrow");

  leftArrow.onclick = () => {
    shiftRange(-1);
  };
  rightArrow.onclick = () => {
    shiftRange(1);
  };
});

function shiftRange(direction) {
  const adjustment = direction * 5;
  currDates = getDates(adjustDate(currDates[2], adjustment));
  updateDates();
}

function adjustDate(date, days) {
  const adjustedDate = new Date(date); // Create a copy of the date
  adjustedDate.setDate(date.getDate() + days); // Add or subtract days
  return adjustedDate;
}

function getDates(date) {
  let result = [null, null, null, null, null];

  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      result[2] = date;
    } else {
      const beforeDay = adjustDate(date, -i);
      const afterDay = adjustDate(date, i);
      result[2 - i] = beforeDay;
      result[2 + i] = afterDay;
    }
  }

  return result;
}

function updateDates() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sunday",
  ];
  const size = ["sm", "base", "base", "base", "sm"];
  for (let i = 0; i < 5; i++) {
    let day = document.getElementById(`day-${i}`);
    day.innerHTML = `<p>${months[currDates[i].getMonth()]} ${currDates[i].getDate()}</p><p class="text-${size[i]}">${days[currDates[i].getDay()]}</p>`;
  }
}
