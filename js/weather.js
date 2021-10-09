function onGeoSuccess(position){
    const lan =position.coords.longitude;
    const lat =position.coords.latitude;
    console.log("You live in",lat, lan);
}
function onGeoError(){
    alert("Cannot find you. No weather for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);