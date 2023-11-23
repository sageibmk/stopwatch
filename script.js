var hrs = document.querySelector(".hour")
var mins = document.querySelector(".minutes")
var sec = document.querySelector(".seconds")
var start = document.querySelector(".start")
var stop = document.querySelector(".stop")

var timer = 0;
var min = 1;
var hr = 1;
start.addEventListener("click", ()=>{
  var stopWatch = setInterval(()=>{
  sec.innerHTML = timer++;
  if(timer >=60){
    timer = 0;
    mins.innerHTML = min++;
  }
  else if (min >= 60){
    min = 0;
    hrs.innerHTML = hr++;
  }

  }, 1000)

  stop.addEventListener("click", ()=>{
    clearInterval(stopWatch);
  })
})