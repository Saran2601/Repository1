const days=document.querySelector("#days")
const hour=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
function updatetime(){
    const curyear=new Date().getFullYear();
// console.log(curyear+1)
const newyear=new Date(`january 1 ${curyear+1} 00:00:00`);
// console.log(newyear)
const curdate=new Date()
// console.log(curdate)
const diff=newyear-curdate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;
}

setInterval(updatetime,1000);