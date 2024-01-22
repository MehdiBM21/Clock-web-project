const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const fullDate = document.querySelector('#date');
const h = document.querySelector('#h');
const m = document.querySelector('#m');
const s = document.querySelector('#s');
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

function formatTime(time){
    return time.toString().length<2?"0"+time:time;
}

function addNumberSuffix(number) {
    if (number >= 11 && number <= 13) {
        return number + "th";
    } else {
        const lastDigit = number % 10;
        switch (lastDigit) {
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
            default:
                return number + "th";
        }
    }
}

setInterval(()=>{
let day = new Date();
let hrDeg = day.getHours() * 30;
let mnDeg = day.getMinutes() * deg;
let scDeg = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${hrDeg+(mnDeg/12)}deg)`;
mn.style.transform = `rotateZ(${mnDeg}deg)`;
sc.style.transform = `rotateZ(${scDeg}deg)`;
fullDate.innerHTML = dayNames[day.getDay()] + ' ' + addNumberSuffix(day.getDate()) + ' ' + months[day.getMonth()] + ' ' + day.getFullYear();
h.innerHTML = formatTime(day.getHours());
m.innerHTML = formatTime(day.getMinutes());
s.innerHTML = formatTime(day.getSeconds());
},1000);
