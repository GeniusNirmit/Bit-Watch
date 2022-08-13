//Clock Logic starts
var hours_clock=document.getElementById("hours");
var minutes_clock=document.getElementById("minutes");
var seconds_clock=document.getElementById("seconds");
var date_clock=document.getElementById("date");
var month_clock=document.getElementById("month");
var year_clock=document.getElementById("year");
var day_clock=document.getElementById("day");

var interval;
interval=setInterval(clock_time);


function clock_time(){
  var clock=new Date();

  hours_clock.innerHTML=clock.getHours();
  minutes_clock.innerHTML=clock.getMinutes();
  seconds_clock.innerHTML=clock.getSeconds();


  if(document.getElementById("clock_format").checked==true)
    hour_format_12();
  else
    hour_format_24();


  if(hours_clock.innerHTML<10)
    hours_clock.innerHTML="0"+hours_clock.innerHTML;
  if(minutes_clock.innerHTML<10)
    minutes_clock.innerHTML="0"+minutes_clock.innerHTML;
  if(seconds_clock.innerHTML<10)
    seconds_clock.innerHTML="0"+seconds_clock.innerHTML;


  day_clock_assign(clock);
  date_clock.innerHTML=clock.getDate();
  month_clock_assign(clock);
  year_clock.innerHTML=clock.getFullYear();
}


function hour_format_12(){
  if(hours_clock.innerHTML>12)
  {
    hours_clock.innerHTML-=12;
    meridian.innerHTML="PM";
  }
  else
    meridian.innerHTML="AM";
}


function hour_format_24(){
  meridian.innerHTML="";
}


function day_clock_assign(clock){
  let day=clock.getDay();
  switch(day){
    case 0:day_clock.innerHTML="Sun";
            break;
    case 1:day_clock.innerHTML="Mon";
            break;
    case 2:day_clock.innerHTML="Tue";
            break;
    case 3:day_clock.innerHTML="Wed";
            break;
    case 4:day_clock.innerHTML="Thu";
            break;
    case 5:day_clock.innerHTML="Fri";
            break;
    case 6:day_clock.innerHTML="Sat";
            break;
  }
}


function month_clock_assign(clock){

  let month=clock.getMonth();
  switch(month){
    case 0:month_clock.innerHTML="January";
            break;
    case 1:month_clock.innerHTML="February";
            break;
    case 2:month_clock.innerHTML="March";
            break;
    case 3:month_clock.innerHTML="April";
            break;
    case 4:month_clock.innerHTML="May";
            break;
    case 5:month_clock.innerHTML="June";
            break;
    case 6:month_clock.innerHTML="July";
            break;
    case 7:month_clock.innerHTML="August";
            break;
    case 8:month_clock.innerHTML="September";
            break;
    case 9:month_clock.innerHTML="October";
            break;
    case 10:month_clock.innerHTML="November";
            break;
    case 11:month_clock.innerHTML="December";
            break;
  }
}


//Stop Watch Logic starts
var seconds_stopwatch=document.getElementById("Seconds");
var micro_stopwatch=document.getElementById("Micro");
var start_stop_button_stopwatch=document.getElementById("Start_Stop_Stopwatch");
var reset_button_stopwatch=document.getElementById("Reset_Stopwatch");

var counter_stopwatch=0;
var interval_counter_stopwatch;
var stopwatch_seconds=0;
var stopwatch_micro=0;


start_stop_button_stopwatch.addEventListener('click',start_stop_stopwatch);
reset_button_stopwatch.addEventListener('click',reset_stop_watch);

function start_stop_stopwatch(){
  if(counter_stopwatch==0)
  {
    start_stop_watch();
    counter_stopwatch=1;
    start_stop_button_stopwatch.innerHTML="Stop";
    start_stop_button_stopwatch.style.background="#ff5959"
  }
  else
  {
    stop_stop_watch();
    counter_stopwatch=0;
    start_stop_button_stopwatch.innerHTML="Start";
    start_stop_button_stopwatch.style.background="#085f63";
  }
}

function start_stop_watch(){
  interval_counter_stopwatch=setInterval(stop_watch,10);
}

function stop_stop_watch(){
  clearInterval(interval_counter_stopwatch);
}

function reset_stop_watch(){
  counter_stopwatch=0;
  clearInterval(interval_counter_stopwatch);
  stopwatch_seconds=0;
  stopwatch_micro=0;
  seconds_stopwatch.innerHTML="0"+stopwatch_seconds;
  micro_stopwatch.innerHTML="0"+stopwatch_micro;
  start_stop_button_stopwatch.innerHTML="Start";
  start_stop_button_stopwatch.style.background="#085f63";
}

function stop_watch(){
  stopwatch_micro++;
  micro_stopwatch.innerHTML=stopwatch_micro;
  if(stopwatch_micro==100)
  {
    stopwatch_seconds++;
    seconds_stopwatch.innerHTML=stopwatch_seconds;
    stopwatch_micro=0;
    micro_stopwatch.innerHTML=stopwatch_micro;
  }
  if(stopwatch_micro<10)
    micro_stopwatch.innerHTML="0"+stopwatch_micro;
  if(stopwatch_seconds<10)
    seconds_stopwatch.innerHTML="0"+stopwatch_seconds;
}


//Timer Logic start
var hour_timer=document.getElementById("hour");
var minute_timer=document.getElementById("minute");
var second_timer=document.getElementById("second");
var start_stop_button_timer=document.getElementById("Start_Stop_Timer");
var restart_button_timer=document.getElementById("Restart_Timer");
var reset_button_timer=document.getElementById("Reset_Timer");

var hour_timer_store=0;
var minute_timer_store=0;
var second_timer_store=0;
var total_time_store_timer=0;
var total_time_timer=0;

var timer_hour;
var timer_minute;
var timer_second;
var timer_micro=0;
var counter_timer=0;
var interval_counter_timer;

hour_timer.innerHTML=hour_timer_store;
minute_timer.innerHTML=minute_timer_store;
second_timer.innerHTML=second_timer_store;
setting_zero_timer();

document.getElementById("Start_Stop_Timer_Slots_30seconds").addEventListener('click',second_30_button_timer);
document.getElementById("Start_Stop_Timer_Slots_1minute").addEventListener('click',minute_1_button_timer);
document.getElementById("Start_Stop_Timer_Slots_30minutes").addEventListener('click',minute_30_button_timer);
document.getElementById("Start_Stop_Timer_Slots_1hour").addEventListener('click',hour_1_button_timer);
document.getElementById("Start_Stop_Timer_Slots_custom").addEventListener('click',custom_button_timer);
start_stop_button_timer.addEventListener('click',start_stop_timer);
restart_button_timer.addEventListener('click',restart_timer);
reset_button_timer.addEventListener('click',reset_timer);

function second_30_button_timer(){
  hour_timer_store=0;
  minute_timer_store=0;
  second_timer_store=30;
  total_time_timer=30;
  total_time_store_timer=30;
  timer_hour=hour_timer_store;
  timer_minute=minute_timer_store;
  timer_second=second_timer_store;
  hour_timer.innerHTML=hour_timer_store;
  minute_timer.innerHTML=minute_timer_store;
  second_timer.innerHTML=second_timer_store;
  setting_zero_timer();
  alert("Click on Start button to start the Timer");
  counter_timer=0;
  stop_timer();
  start_stop_button_timer.innerHTML="Start";
  start_stop_button_timer.style.background="#085f63";
}

function minute_1_button_timer(){
  hour_timer_store=0;
  minute_timer_store=1;
  second_timer_store=0;
  total_time_timer=60;
  total_time_store_timer=60;
  timer_hour=hour_timer_store;
  timer_minute=minute_timer_store;
  timer_second=second_timer_store;
  hour_timer.innerHTML=hour_timer_store;
  minute_timer.innerHTML=minute_timer_store;
  second_timer.innerHTML=second_timer_store;
  setting_zero_timer();
  alert("Click on Start button to start the Timer");
  counter_timer=0;
  stop_timer();
  start_stop_button_timer.innerHTML="Start";
  start_stop_button_timer.style.background="#085f63";
}

function minute_30_button_timer(){
  hour_timer_store=0;
  minute_timer_store=30;
  second_timer_store=0;
  total_time_timer=1800;
  total_time_store_timer=1800;
  timer_hour=hour_timer_store;
  timer_minute=minute_timer_store;
  timer_second=second_timer_store;
  hour_timer.innerHTML=hour_timer_store;
  minute_timer.innerHTML=minute_timer_store;
  second_timer.innerHTML=second_timer_store;
  setting_zero_timer();
  alert("Click on Start button to start the Timer");
  counter_timer=0;
  stop_timer();
  start_stop_button_timer.innerHTML="Start";
  start_stop_button_timer.style.background="#085f63";
}

function hour_1_button_timer(){
  hour_timer_store=1;
  minute_timer_store=0;
  second_timer_store=0;
  total_time_timer=3600;
  total_time_store_timer=3600;
  timer_hour=hour_timer_store;
  timer_minute=minute_timer_store;
  timer_second=second_timer_store;
  hour_timer.innerHTML=hour_timer_store;
  minute_timer.innerHTML=minute_timer_store;
  second_timer.innerHTML=second_timer_store;
  setting_zero_timer();
  alert("Click on Start button to start the Timer");
  counter_timer=0;
  stop_timer();
  start_stop_button_timer.innerHTML="Start";
  start_stop_button_timer.style.background="#085f63";
}

function custom_button_timer(){
  hour_timer_store=0;
  minute_timer_store=0;
  second_timer_store=0;
  hour_timer_store=prompt("Enter hours:");
  minute_timer_store=prompt("Enter minutes:");
  second_timer_store=prompt("Enter seconds:");
  total_time_timer=hour_timer_store*3600+minute_timer_store*60+second_timer_store;
  total_time_store_timer=hour_timer_store*3600+minute_timer_store*60+second_timer_store;
  timer_hour=hour_timer_store;
  timer_minute=minute_timer_store;
  timer_second=second_timer_store;
  hour_timer.innerHTML=hour_timer_store;
  minute_timer.innerHTML=minute_timer_store;
  second_timer.innerHTML=second_timer_store;
  setting_zero_timer();
  alert("Click on Start button to start the Timer");
  counter_timer=0;
  stop_timer();
  start_stop_button_timer.innerHTML="Start";
  start_stop_button_timer.style.background="#085f63";
}

function start_stop_timer(){
  if(counter_timer==0)
  {
    start_timer();
    counter_timer=1;
    start_stop_button_timer.innerHTML="Stop";
    start_stop_button_timer.style.background="#ff5959"
  }
  else
  {
    stop_timer();
    counter_timer=0;
    start_stop_button_timer.innerHTML="Start";
    start_stop_button_timer.style.background="#085f63";
  }
}

function start_timer(){
  interval_counter_timer=setInterval(timer,10);
}

function stop_timer(){
  clearInterval(interval_counter_timer);
}

function restart_timer(){
  timer_hour=hour_timer_store;
  timer_minute=minute_timer_store;
  timer_second=second_timer_store;
  hour_timer.innerHTML=hour_timer_store;
  minute_timer.innerHTML=minute_timer_store;
  second_timer.innerHTML=second_timer_store;
  setting_zero_timer();
  stop_timer();
  start_timer();
  counter_timer=1;
  start_stop_button_timer.innerHTML="Stop";
  start_stop_button_timer.style.background="#ff5959"
}

function reset_timer(){
  alert("Stored Data will be deleted");
  stop_timer();
  timer_hour=0;
  timer_minute=0;
  timer_second=0;
  timer_micro=0;
  hour_timer_store=0;
  minute_timer_store=0;
  second_timer_store=0;
  hour_timer.innerHTML="00";
  minute_timer.innerHTML="00";
  second_timer.innerHTML="00";
  counter=0;
  start_stop_button_timer.innerHTML="Start";
  start_stop_button_timer.style.background="#085f63";
}

function setting_zero_timer(){
  if(timer_hour<10)
    hour_timer.innerHTML="0"+timer_hour;
  if(timer_minute<10)
    minute_timer.innerHTML="0"+timer_minute;
  if(timer_second<10)
    second_timer.innerHTML="0"+timer_second;
}

function timer(){
  timer_micro++;
  if(timer_micro==100)
  {
    timer_micro=0;
    total_time_timer--;
    if((total_time_store_timer/3)>=total_time_timer)
      blinking_lights_timer();
    if(timer_second==0)
    {
      if(timer_minute==0)
      {
        if(timer_hour==0)
        {
          timer_minute=59;
          timer_second=59;
          hour_timer.innerHTML=timer_hour;
          minute_timer.innerHTML=timer_minute;
          second_timer.innerHTML=timer_second;
          if(timer_hour<10)
            hour_timer.innerHTML="0"+timer_hour;
          if(timer_minute<10)
            minute_timer.innerHTML="0"+timer_minute;
          if(timer_second<10)
            second_timer.innerHTML="0"+timer_second;
        }
        else
        {
          timer_hour--;
          timer_minute=59;
          timer_second=59;
          hour_timer.innerHTML=timer_hour;
          minute_timer.innerHTML=timer_minute;
          second_timer.innerHTML=timer_second;
          if(timer_hour<10)
            hour_timer.innerHTML="0"+timer_hour;
          if(timer_minute<10)
            minute_timer.innerHTML="0"+timer_minute;
          if(timer_second<10)
            second_timer.innerHTML="0"+timer_second;
        }
      }
      else
      {
        timer_minute--;
        timer_second=59;
        minute_timer.innerHTML=timer_minute;
        second_timer.innerHTML=timer_second;
        if(timer_minute<10)
          minute_timer.innerHTML="0"+timer_minute;
        if(timer_second<10)
          second_timer.innerHTML="0"+timer_second;
      }
    }
    else
    {
      timer_second--;
      second_timer.innerHTML=timer_second;
      if(timer_second<10)
        second_timer.innerHTML="0"+timer_second;
    }
  }
  if(timer_hour<=0 && timer_minute<=0 && timer_second<=0)
    clearInterval(interval_counter_timer);
}

function blinking_lights_timer(){
  if(total_time_timer%2!=0)
  {
    hour_timer.style.color="red";
    minute_timer.style.color="red";
    second_timer.style.color="red";
  }
  else
  {
    hour_timer.style.color="white";
    minute_timer.style.color="white";
    second_timer.style.color="white";
  }
}
