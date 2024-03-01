const apikey = "fb40c7e11d81cc143cfd1307915b68fc";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    
    if(response.status == 404){
        alert('Invalid city name');
        document.querySelector('.weather').style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector("#city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
        if(data.weather[0].main =="Clouds"){
            weatherIcon.src = "images/clouds.webp";
        }
        else if(data.weather[1].main =="Clear"){
            weatherIcon.src = "images/clear.webp";
        }
        else if(data.weather[2].main =="Rain"){
            weatherIcon.src = "images/rain.webp";
        }
        else if(data.weather[3].main =="Drizzle"){
            weatherIcon.src = "images/drizzle.webp";
        }
        else if(data.weather[4].main =="Mist"){
            weatherIcon.src = "images/mist.webp";
        }
        
        document.querySelector('.weather').style.display = "block";
    }
    
   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather();