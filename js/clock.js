const clockHM = document.querySelector("h2#clock span:first-child");
const clockS = document.querySelector("h2#clock span:last-child");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clockHM.innerText = `${hours}:${minutes}`;
    clockS.innerText = `${seconds}`;
}

getClock()
setInterval(getClock, 1000);

// setTimeout(sayHello, 5000);
