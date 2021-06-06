function showTime() {
    alert(data(new Date(new Date - 86400 * 1000)));
}

function data(data) {

    let sec = new Date();

    let sr = sec - data;

    if (sr < 1000) {
        return ("Now");
    } else if (sr < 60000) {
        return (Math.round(sr / 1000) + " sec ago");
    } else if (sr < 60000 * 60) {
        return (Math.round(sr / 60000) + " sec ago")
    } else {
        return "день.месяц.год часы: минуты " + (data.getDate() + "." + Number(data.getMonth() + 1) + "." + data.getFullYear() % 100 + " " + data.getHours() + ":" + data.getMinutes())
    }
}