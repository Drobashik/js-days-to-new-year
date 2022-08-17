export class CountdownHandler {

    constructor(futureDay = new Date(), currentDay = new Date()) {
        this.totalSeconds = (futureDay - currentDay) / 1000;
    }

    addZeroToDate(date) {
        return date < 10 ? '0' + date : date;
    }

    getDays() {
        return Math.floor(this.totalSeconds / 3600 / 24);
    }

    getHours() {
        return Math.floor(this.totalSeconds / 3600) % 24;
    }

    getMinutes() {
        return Math.floor(this.totalSeconds / 60) % 60;
    }

    getSeconds() {
        return Math.floor(this.totalSeconds) % 60;
    }

}