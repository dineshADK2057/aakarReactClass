// return dates
const time = new Date();

// selecting html elements to put times
const clock = document.getElementById("clock");
const hr = document.getElementById("hr")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

// console.log(time.getHours);

// new Date() bata aako time lai hour, min ra sec ma individually rakheko

var hour = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

// hours, min ra second lai as a digital clock banako

hr.innerHTML = hour + " : ";
min.innerHTML = " " + minutes + " : ";
sec.innerHTML = " " + seconds;



// setTimeout(function, timeInMilisecond, arguments,.....)
// setInterval(function, timeInMilisecond, arguments,.....)
// function info (a, b)  {
//     alert(a+b);
// }
// setTimeout(info, 5000, 4, 6);


const numbers = document.querySelector(".numbers");

// var num = 0;
function numSum () {
    // alert("this is setInterval")
    seconds++
    if(seconds>59){
        seconds=0;
        minutes++;
        if (minutes>59) {
            hour++;
        }
    }
    sec.innerHTML = " " + seconds;
    min.innerHTML = " " + minutes + " : ";
}

setInterval(numSum, 1000)





