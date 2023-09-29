const apiKey = "80e37a3275df5ef97834b4159aff0a54";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");
const compas = document.querySelector(".compas");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".tempC").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".tempF").innerHTML =  Math.round(data.main.temp*1.8+32) + "°F";
    document.querySelector(".w_speed").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".rise_hour").innerHTML = "Ora: " + window.moment(data.sys.sunrise * 1000).format('HH:mm');
    document.querySelector(".set_hour").innerHTML = "Ora: " + window.moment(data.sys.sunset * 1000).format('HH:mm');
    document.querySelector(".h_lvl").innerHTML = data.main.humidity;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
        if(data.main.temp <= 10)
        {document.querySelector(".day").innerHTML = "Este putin racoare.";
        document.querySelector(".clothes").innerHTML = "Vei avea nevoie de o haina.";}
        if(data.main.temp > 10 && data.main.temp < 20)
        {document.querySelector(".day").innerHTML = "Este o zi buna.";
        document.querySelector(".clothes").innerHTML = "Vei avea nevoie de o haina.";}
        if(data.main.temp >= 20)
        {document.querySelector(".day").innerHTML = "Este o zi frumoasa!";
        document.querySelector(".clothes").innerHTML = "";}
    }else
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        if(data.main.temp <= 10)
        {document.querySelector(".day").innerHTML = "Este putin racoare.";
        document.querySelector(".clothes").innerHTML = "Vei avea nevoie de o haina si de ochelari de soare.";}
        if(data.main.temp > 10 && data.main.temp < 20)
        {document.querySelector(".day").innerHTML = "Este o zi buna.";
        document.querySelector(".clothes").innerHTML = "Vei avea nevoie de o haina si de ochelari de soare.";}
        if(data.main.temp >= 20)
        {document.querySelector(".day").innerHTML = "Este o zi foarte frumoasa!"; 
        document.querySelector(".clothes").innerHTML = "Nu uita ochelarii de soare!";}
    }else
    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
        document.querySelector(".clothes").innerHTML = "Nu uita umbrela!";
        if(data.main.temp <= 10)
        {document.querySelector(".day").innerHTML = "Este o zi ca de toamna.";
        document.querySelector(".clothes").innerHTML = "Vei avea nevoie de o haina si de umbrela.";}
        if(data.main.temp > 10 && data.main.temp < 20)
        document.querySelector(".day").innerHTML = "Este o zi ploioasa.";
        if(data.main.temp >= 20)
        document.querySelector(".day").innerHTML = "Este o zi ploioasa dar frumoasa.";
    }else
    if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        document.querySelector(".clothes").innerHTML = "Nu iti uita haina.";
        if(data.main.temp <= 10)
        document.querySelector(".day").innerHTML = "Este o cetoasa.";
        if(data.main.temp > 10 && data.main.temp < 20)
        document.querySelector(".day").innerHTML = "Putin ciudat.";
        if(data.main.temp >= 20)
        document.querySelector(".day").innerHTML = "E posibil?";
    }else
    if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        document.querySelector(".clothes").innerHTML = "Nu iti uita haina.";
        if(data.main.temp <= 10)
        document.querySelector(".day").innerHTML = "Este putin racoare si umeda.";
        if(data.main.temp > 10 && data.main.temp < 20)
        document.querySelector(".day").innerHTML = "Este o zi buna dar umeda.";
        if(data.main.temp >= 20)
        document.querySelector(".day").innerHTML = "Este o zi frumoasa si umeda!";
    }else
    if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
        document.querySelector(".clothes").innerHTML = "Nu iti uita haina.";
        if(data.main.temp <= 10)
        {document.querySelector(".day").innerHTML = "Va fi frig astazi.";
        document.querySelector(".clothes").innerHTML = "Vei avea nevoie de o haina groasa.";}
        if(data.main.temp > 10 && data.main.temp < 20)
        document.querySelector(".day").innerHTML = "Va fi frig astazi.";
        if(data.main.temp >= 20)
        document.querySelector(".day").innerHTML = "Este o zi frumoasa de iarna.";
    }

    if(data.wind.deg == 0){
        document.querySelector(".d_d").innerHTML = "E";
        compas.src = "images/compasE.png";
    }else
    if(data.wind.deg > 0 && data.wind.deg < 45){
        document.querySelector(".d_d").innerHTML = "ENE";
        compas.src = "images/compasENE.png";
    }else
    if(data.wind.deg == 45){
        document.querySelector(".d_d").innerHTML = "NE";
        compas.src = "images/compasNE.png";
    }else
    if(data.wind.deg > 45 && data.wind.deg < 90){
        document.querySelector(".d_d").innerHTML = "NNE";
        compas.src = "images/compasNNE.png";
    }else
    if(data.wind.deg == 90){
        document.querySelector(".d_d").innerHTML = "N";
        compas.src = "images/compasN.png";
    }else
    if(data.wind.deg > 90 && data.wind.deg < 135){
        document.querySelector(".d_d").innerHTML = "NNW";
        compas.src = "images/compasNNW.png";
    }else
    if(data.wind.deg == 135){
        document.querySelector(".d_d").innerHTML = "NW";
        compas.src = "images/compasNW.png";
    }else
    if(data.wind.deg > 135 && data.wind.deg < 180){
        document.querySelector(".d_d").innerHTML = "WNW";
        compas.src = "images/compasWNW.png";
    }else
    if(data.wind.deg == 180){
        document.querySelector(".d_d").innerHTML = "W";
        compas.src = "images/compasW.png";
    }else
    if(data.wind.deg > 180 && data.wind.deg < 225){
        document.querySelector(".d_d").innerHTML = "WSW";
        compas.src = "images/compasWSW";
    }else
    if(data.wind.deg == 225){
        document.querySelector(".d_d").innerHTML = "SW";
        compas.src = "images/compasSW.png";
    }else
    if(data.wind.deg > 225 && data.wind.deg < 270){
        document.querySelector(".d_d").innerHTML = "SSW";
        compas.src = "images/compasSSW.png";
    }else
    if(data.wind.deg == 270){
        document.querySelector(".d_d").innerHTML = "S";
        compas.src = "images/compasS.png";
    }else
    if(data.wind.deg > 270 && data.wind.deg < 315){
        document.querySelector(".d_d").innerHTML = "SSE";
        compas.src = "images/compasSSE.png";
    }else
    if(data.wind.deg == 315){
        document.querySelector(".d_d").innerHTML = "SE";
        compas.src = "images/compasSE.png";
    }else
    if(data.wind.deg > 315 && data.wind.deg < 360){
        document.querySelector(".d_d").innerHTML = "ESE";
        compas.src = "images/compasESE.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";    
    }

}    
    
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener('keyup', (e) =>{
    if(e.keyCode == 13) 
    checkWeather(searchBox.value);
})

