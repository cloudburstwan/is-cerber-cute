let removedDays = false;
let removedHours = false;

function timerUpdateLoop() {
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let timeLeft = new Date("2025-06-11T17:00:00+01:00") - Date.now();

    /*if (timeLeft < 180000 && !refresheImages) {
        refresheImages = true;
        disintegrate.init();
    }*/

    /*if (timeLeft > 60000 && timeLeft % (3 * 60 * 1000) === 0) {
        location.reload();
    }*/

    if (timeLeft < (24 * 60 * 60 * 1000)) {
        if (!removedDays) document.getElementById("days").parentElement.parentElement.removeChild(document.getElementById("days").parentElement);
        removedDays = true;
        days = null;
    }

    if (timeLeft < (60 * 60 * 1000)) {
        if (!removedHours) document.getElementById("hours").parentElement.parentElement.removeChild(document.getElementById("hours").parentElement);
        removedHours = true;
        hours = null;
    }

    if (timeLeft <= 10000 && !destroyedImages) {
        destroyedImages = true;
        document.querySelector(".canvas").classList.add("animate");
    }

    if (timeLeft <= 0) {
        if (days) days.innerHTML = addLeadingZero(0);
        if (hours) hours.innerHTML = addLeadingZero(0);
        minutes.innerText = addLeadingZero(0);
        seconds.innerText = addLeadingZero(0);
        clearInterval(updateLoop);
        //triggerEnd();
        return;
    }

    if (days) days.innerText = addLeadingZero(Math.floor(timeLeft / 1000 / 60 / 60 / 24));
    if (hours) hours.innerText = addLeadingZero(Math.floor(timeLeft / 1000 / 60 / 60 % 24));
    minutes.innerText = addLeadingZero(Math.floor(timeLeft / 1000 / 60 % 60));
    seconds.innerText = addLeadingZero(Math.floor(timeLeft / 1000 % 60));
}

const updateLoop = setInterval(timerUpdateLoop, 100);

function addLeadingZero(number) {
    if (number < 10) return `0${number}`;
    return `${number}`;
}