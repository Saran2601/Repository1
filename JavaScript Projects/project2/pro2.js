const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
const mood=document.querySelector(".mood");
function Digitalclock(){
    const curtime=new Date();
    var h=curtime.getHours();
    var m=curtime.getMinutes();
    var s=curtime.getSeconds();
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    console.log(s);
    if ((h<23)&&(h<=11)){
        mood.innerHTML="Happy Morning";
    }
    else{
        mood.innerHTML="Happy Evening";
    }
}
setInterval(Digitalclock,1000);