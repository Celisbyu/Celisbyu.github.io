function currentDateToday() {
    "use strict";
    var d = new Date(),
        weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var currentMonth = new Array(11);
    currentMonth[0] = "January";
    currentMonth[1] = "February";
    currentMonth[2] = "March";
    currentMonth[3] = "April";
    currentMonth[4] = "May";
    currentMonth[5] = "June";
    currentMonth[6] = "July";
    currentMonth[7] = "August";
    currentMonth[8] = "September";
    currentMonth[9] = "October";
    currentMonth[10] = "November";
    currentMonth[11] = "December";

    var day = weekday[d.getDay()],
        mm = currentMonth[d.getMonth()],
        year = d.getFullYear(),
        dd = d.getDate(),
        Clock = document.getElementById("currentdate");
        Clock.textContent = day + ',' + ' ' + dd + ' ' + mm + ' ' + year;
        Clock.innerText = day + ',' + ' ' + dd + ' ' + mm + ' ' + year;
}
currentDateToday();