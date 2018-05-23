var secondNiddle = document.querySelector('.second_niddle');
var hourNiddle = document.querySelector('.hour_niddle');
var minuteNiddle = document.querySelector('.minute_niddle');
console.log(secondNiddle);

function setTimeFunction() {
    var newData = new Date();
    var getHours = newData.getHours();
    var getSecond = newData.getSeconds();
    var getMinute = newData.getMinutes();

    var secondDegree = ((getSecond / 60) * 360) + 90;
    secondNiddle.style.transform = `rotate(${secondDegree}deg)`;

    var minuteDegree = ((getMinute / 60) * 360) + 90;
    minuteNiddle.style.transform = `rotate(${minuteDegree}deg)`;

    var hourDegree = ((getHours / 12) * 360) + 90;
    hourNiddle.style.transform = `rotate(${hourDegree}deg)`;


}

setInterval(setTimeFunction, 1000);