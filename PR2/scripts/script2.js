function addLeadingZero(value) {
    return value < 10 ? "0" + value : value;
}

function updateClock() {
    var now = new Date();
    var hours = addLeadingZero(now.getHours());
    var minutes = addLeadingZero(now.getMinutes());
    var seconds = addLeadingZero(now.getSeconds());

    var clockElement = document.getElementById('clock');
    clockElement.textContent = hours + ":" + minutes + ":" + seconds;
}
updateClock();