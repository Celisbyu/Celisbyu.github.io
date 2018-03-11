var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/a72dc606e4ed34ed/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('curTemp').innerHTML = weatherInfo.current_observation.temp_f; 
    document.getElementById('weatherIco').src = weatherInfo.current_observation.icon_url;
    document.getElementById('todayPrecipitacion').innerHTML = weatherInfo.current_observation.precip_today_string;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    document.getElementById('WindDirection').innerHTML = weatherInfo.current_observation.wind_dir;
}