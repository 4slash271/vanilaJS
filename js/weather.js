
const API_KEY = "d448bd0f037cc68b858d9cc0c8556118";

function onGeoSuccess(position){
    const lon =position.coords.longitude;
    const lat =position.coords.latitude;
    
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //&units=metric =>화씨온도를 섭씨온도로 바꿔줌
    fetch(url).then(
        response => response.json().then(
            data => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name; 
                weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃/`}))


}
function onGeoError(){
    alert("Cannot find you. No weather for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

//api.openweathermap.org/data/2.5/weather?lat=37.575364&lon=126.9235785&appid=d448bd0f037cc68b858d9cc0c8556118

