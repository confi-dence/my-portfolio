 const date = document.getElementById('date'),
time = document.getElementById('time')

date.innerText = new Date().getFullYear()
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = 'PM'
if(hours >= 12){
    ampm = 'PM'
}else{
    ampm = "AM"
}

if(hours > 12){
    hours = hours % 12
}else{
    hours = hours
}

if(minutes >= 10){
    minutes = minutes
}else{
    minutes = '0'+ minutes
}

time.innerText = `${hours}:${minutes} ${ampm}`;



