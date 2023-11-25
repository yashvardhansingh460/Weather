const apikey = "0387a2fdf80d3db76629363a57b49fb3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// console.log("hihi")
const searchbox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
// console.log(weathericon);
async function checkWeather(city) {
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    let data = await response.json();

    console.log(data);
    // const response = await fetch(apiurl + `&appid=${apikey}`);
    // console.log(response);
    // console.error(response)
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
        weathericon.src = "weather_image/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weathericon.src = "weather_image/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weathericon.src = "weather_image/rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weathericon.src = "weather_image/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weathericon.src = "weather_image/mist.png";
    }
    else if(data.weather[0].main =="Snow"){
        weathericon.src = "weather_image/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}}
btn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
btn.addEventListener("keypress.which=13", (e)=>{
    if(e.which = 13)
    checkWeather(searchbox.value);
})
