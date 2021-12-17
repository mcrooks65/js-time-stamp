var showCurrentTime = function()
{
    var clock = document.getElementById("clock");
    var currentTime = new Date();

    var hours = currentTime.getHours();

    var minutes = currentTime.getMinutes();
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    var seconds = currentTime.getSeconds();
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds;

    clock.innerText = clockTime;
}

var start = new Date();

setInterval(function () {
    showCurrentTime((new Date() - start) % 1000)
}, 1000);

document.onload = showCurrentTime();
