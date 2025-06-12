//  const date = document.getElementById('date'),
time = document.getElementById('time')

const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let date = now.getFullYear()
let ampm = 'PM'
let Names = 'Mgbeojikwe Confidence'
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

time.innerText = `${Names}  \n date/time: ${date} ${hours}:${minutes} ${ampm}`;
// time.innerText = 'gdgdgdgd  \n  Hshshssh'



