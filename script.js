setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 0 : hour;

    document.querySelector(".hour_num").innerText = hour < 10 ? "0" + hour : hour;
    document.querySelector(".min_num").innerText = minute < 10 ? "0" + minute : minute;
    document.querySelector(".sec_num").innerText = seconds < 10 ? "0" + seconds : seconds;
    document.querySelector(".am_pm").innerText = d;
}, 1000);