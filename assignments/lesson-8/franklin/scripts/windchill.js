function windChill() {
    "use strict";
    var high = parseFloat(document.getElementById("high").innerHTML),
        low = parseFloat(document.getElementById("low").innerHTML),
        temp = (high + low) / 2,
        speed = parseFloat(document.getElementById("speed").innerHTML),
        f = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
    document.getElementById("windchill").innerHTML = f + "&deg;F";
}
document.getElementById("windchill").innerHTML.write(windChill());