import { CountdownHandler } from "./CountdownHandler.js";

const newYearDate = '1 Jan 2023'
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

countDown()

setInterval(countDown, 1000);

function countDown() {
    const countDown = new CountdownHandler(new Date(newYearDate), new Date())

    days.innerHTML = countDown.getDays();
    hours.innerHTML = countDown.getHours();
    minutes.innerHTML = countDown.addZeroToDate(countDown.getMinutes());
    seconds.innerHTML = countDown.addZeroToDate(countDown.getSeconds());
}