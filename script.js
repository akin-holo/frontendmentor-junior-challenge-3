
let currentWorkHours = document.querySelectorAll(".current");
currentWorkHours.forEach(hour => {
   hour.textContent = `${hour.value} hrs`;
});

let previousWorkHours = document.querySelectorAll(".previous");
previousWorkHours.forEach(week => {
   week.textContent = `Last Week - ${week.value}hrs`;
});

