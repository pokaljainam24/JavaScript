const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countdown = document.getElementById('countdown');
const birthdayTime = document.getElementById('birthdayTime');
const refresh = document.getElementById('refresh');
const message = document.getElementById('message');
const yearold = document.getElementById('yearold');
const dateyear = document.getElementById('dateyear');

const currentYear = new Date().getFullYear();
let birthday = new Date(`Apr 24 ${currentYear} 00:00:00`);
const today = new Date();
const currentDateTime = new Date(`${today.getMonth() + 1} ${today.getDate()} ${currentYear}`); 

// If birthday this year has already passed, set it to next year
if (currentDateTime > birthday) {
    birthday = new Date(`Apr 24 ${currentYear + 1} 00:00:00`);
}

let age = currentYear - 2003;
if (today < birthday) {
    age--; 
}

dateyear.innerText = currentYear;

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

function updateCount() {
    const now = new Date();
    const timeLeft = birthday - now;

    // Ensure timeLeft is always positive
    const daysLeft = Math.max(0, Math.floor(timeLeft / d));
    const hoursLeft = Math.max(0, Math.floor((timeLeft % d) / h));
    const minutesLeft = Math.max(0, Math.floor((timeLeft % h) / m));
    const secondsLeft = Math.max(0, Math.floor((timeLeft % m) / s));

    // Update the DOM with the new countdown values
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    // If it's the birthday
    if (now.getMonth() === birthday.getMonth() && now.getDate() === birthday.getDate()) {
        console.log('Happy Birthday Jainam Pokal...🎂🎂🎂');
        message.innerHTML = `<br> Guys and Gals, It gives me great pleasure to notify you that today is my birthday.
            <br> Happy Birthday..🎂🎂🎂!! Hope I had a nice Birthday Bash..❤️❤️!!`;
        countdown.style.display = "none";
        birthdayTime.style.display = "none";
        yearold.innerText = `${age + 1}th Birthday.....🎂!`;
        clearInterval(timerId);
    } else {
        yearold.innerText = `${age + 1}th Birthday....!`;
    }
}

const timerId = setInterval(updateCount);
