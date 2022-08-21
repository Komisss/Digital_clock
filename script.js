window.addEventListener('load', calcTime);

window.addEventListener("load", calcTime);

function calcTime(){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthArr = ["Jnuary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    document.getElementById("day").innerHTML = dayArr[day];
    document.getElementById("month").innerHTML = monthArr[month];
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout(calcTime, 100);
}
