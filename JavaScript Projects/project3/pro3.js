const hour=document.querySelector(".needle-hrs");
const minute=document.querySelector(".needle-min");
const second=document.querySelector(".needle-sec");
const back=document.querySelector(".needle-back");
function Analogclock(){
    const curtime=new Date();
    const sec=curtime.getSeconds()/60;
    const min=(sec+curtime.getMinutes())/60;
    const hrs=(min+curtime.getHours())/12;
    console.log(hrs+" "+min+" "+sec);
    hour.style.setProperty("--rotate",hrs*360);
    minute.style.setProperty("--rotate",min*360);
    second.style.setProperty("--rotate",sec*360);
    back.style.setProperty("--rotate",sec*360);
 }
 setInterval(Analogclock,1000)