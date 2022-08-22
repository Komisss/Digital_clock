window.addEventListener('load', calcTime);

window.addEventListener("load", calcTime);

function calcTime(){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let newDate = new Date(2001, 1, 1, 2, 3, 4, 0);

    switch(seconds){
        case 0:
            seconds = '00';
            break;
        case 1:
            seconds = '01';
            break;
        case 2:
            seconds = '02';
            break;
        case 3:
            seconds = '03';
            break;
        case 4:
            seconds = '04';
            break;
        case 5:
            seconds = '05';
            break;
        case 6:
            seconds = '06';
            break;
        case 7:
            seconds = '07';
            break;
        case 8:
            seconds = '08';
            break;
        case 9:
            seconds = '09';
            break;   
        default:
            break;     
    }

    switch(minutes){
        case 0:
            minutes = '00';
            break;
        case 1:
            minutes = '01';
            break;
        case 2:
            minutes = '02';
            break;
        case 3:
            minutes = '03';
            break;
        case 4:
            minutes = '04';
            break;
        case 5:
            minutes = '05';
            break;
        case 6:
            minutes = '06';
            break;
        case 7:
            minutes = '07';
            break;
        case 8:
            minutes = '08';
            break;
        case 9:
            minutes = '09';
            break;   
        default:
            break;     
    }

    switch(hours){
        case 0:
            hours = '00';
            break;
        case 1:
            hours = '01';
            break;
        case 2:
            hours = '02';
            break;
        case 3:
            hours = '03';
            break;
        case 4:
            hours = '04';
            break;
        case 5:
            hours = '05';
            break;
        case 6:
            hours = '06';
            break;
        case 7:
            hours = '07';
            break;
        case 8:
            hours = '08';
            break;
        case 9:
            hours = '09';
            break;   
        default:
            break;     
    }
    
    dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthArr = ["Jnuary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    document.getElementById("day").innerHTML = dayArr[day];
    document.getElementById("month").innerHTML = monthArr[month];
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout(calcTime, 100);
}
