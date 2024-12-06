let second = document.querySelector('.sec');
let minut = document.querySelector('.min');
let hours = document.querySelector('.hr');

let sec = 0;
let min = 0;
let hr = 0;

setInterval(() => {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;

        if (min == 60) {
            min = 0;
            hr++;
        }
    }

    document.getElementById("hours").textContent = hr < 10 ? '0' + hr : hr;
    document.getElementById("minutes").textContent = min < 10 ? '0' + min : min;
    document.getElementById("seconds").textContent = sec < 10 ? '0' + sec : sec;


}, 1000);


