const timer = document.getElementById("time");
const Start = document.getElementById("start");
const Stop = document.getElementById("stop");
const Reset = document.getElementById("reset");

let min = 0;
let sec = 0;
let milisec = 0;
let hour = 0;

 let timerId = null;

//  For Start

Start.addEventListener('click',()=>{
       if(timerId != null){
              clearInterval(timerId);
       }
       timerId = setInterval(startTimer,10);
})

Stop.addEventListener('click' ,()=>{
       clearInterval(timerId);
})

Reset.addEventListener('click', ()=>{
       clearInterval(timerId);
       timer.innerHTML = `00 : 00 : 00`;
})


function startTimer(){
      milisec++;
      if(milisec == 100){
        milisec = 0;
        sec++;
        if(sec ==60){
              sec = 0;
              min++;
        }
        if(min ==59){
              min = 0;
              hour++;
        }
      }

//       For 2 Digit
      let milistring = milisec<10 ? `0${milisec}` : milisec;
      let secstring = sec<10 ? `0${sec}` : sec;
      let minstring = min<10 ? `0${min}` : min;
      let hourstring = hour<10 ? `0${hour}` : hour;
      

      timer.innerHTML = `${hourstring} : ${minstring} : ${secstring}: ${milistring}`;

}

