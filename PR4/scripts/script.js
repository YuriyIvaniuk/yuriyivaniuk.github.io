document.addEventListener('DOMContentLoaded', getMyLocation);

let map;
let buttonFocus=document.getElementById("focus");
let setButton=document.getElementById("set");
let buttonFocusOnDest=document.getElementById("focusOnDest");

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    } else {
        alert("Oops, no geolocation support");
    }
}

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let div = document.getElementById("location");
    div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
    div.innerHTML += `(with ${position.coords.accuracy} meters accuracy)`;
    let km = computeDistance(position.coords, ourCoords);
    let distance = document.getElementById("distance");
    distance.innerHTML = `You are ${km} km from the College`;

    if (!map) {
        map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }

    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("Your place").openPopup();

    // Додавання інформації про час
    var time = new Date(position.timestamp);
    var timeString = `Location timestamp: ${time.toLocaleString()}`;
    var timeMarker = L.marker([latitude, longitude]).addTo(map);
    timeMarker.bindPopup(timeString).openPopup();
    
    buttonFocus.addEventListener("click", function(){
        map.flyTo([latitude, longitude], 17);
    })
}
function displayError(error) {
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    const errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage += " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.latitude);
    let destLongRads = degreesToRadians(destCoords.longitude);
    let Radius = 6371;

    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    let radians = (degrees * Math.PI) / 180;
    return radians;
}

const ourCoords = {
    latitude: 48.94314364908576,
    longitude:  24.73367598672833
}   
setInterval(getMyLocation,5000);

buttonFocus.addEventListener("click", function(){
    map.flyTo([latitude, longitude], 17);
})
setButton.addEventListener("click", function(){
    let destLatitude=document.getElementById("latitude").value;
    let destlongitude=document.getElementById("longitude").value;   
    let marker=L.marker([destLatitude,destlongitude]).addTo(map);
    marker.bindPopup(`Destination point:${destLatitude}, ${destlongitude}`);
})

buttonFocusOnDest.addEventListener("click", function(){
    let destLatitude=document.getElementById("latitude").value;
    let destlongitude=document.getElementById("longitude").value;
    map.flyTo([destLatitude, destlongitude],17);
})