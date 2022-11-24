const hours=document.querySelector("#hour");
const minutes=document.querySelector("#minute");
const seconds=document.querySelector("#second");
const milli=document.querySelector("#milli");
const btnstart=document.querySelector(".btnstart");
const btnstop=document.querySelector(".btnstop");
const btnreset=document.querySelector(".btnreset");
var hr=0,min=0,sec=0,ms=0,startime=0,st=0;
btnstart.addEventListener("click",()=>{
    btnstart.className="btnstart-active";
    btnstop.className="btnstop";
    startime=setInterval(()=>{
        ms++;
        if (ms==100){
            ms=0;
            sec++;
            if (sec==60){
                sec=0
                min++;
                if (min==60){
                    min=0;
                    hr++;
                }
            }
        }
        updatetime();
    },10)
});
btnstop.addEventListener("click",()=>{
    btnstart.className="btnstart";
    clearInterval(startime);   
    
});
btnreset.addEventListener("click",()=>{
    btnstop.className="btnstop-active";
    btnstart.className="btnstart";
    st=0;
    btnstop.innerHTML="Stop";
    clearInterval(startime);
    hr=0,min=0,sec=0,ms=0;
    updatetime();

});
function updatetime(){
 let sec1=sec<10?"0"+sec:sec;
 let min1=min<10?"0"+min:min;
 let hr1=hr<10?"0"+hr:hr;
 let ms1=ms<10?"0"+ms:ms;
 hours.innerHTML=hr1;
 minutes.innerHTML=min1;
 seconds.innerHTML=sec1;
 milli.innerHTML=ms1;
}