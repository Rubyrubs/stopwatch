const startbutton=document.querySelector('#start');
const stopbutton=document.querySelector('#stop');
const resetbutton=document.querySelector('#reset');

const mins=document.querySelector('.mins');
const secs=document.querySelector('.secs');

let intervalId;
let timertime=00;

stopbutton.style.display='none';

function starttimer(){
    intervalId=setInterval(incrementtimer,1000);
    stopbutton.style.display='inline-block';
    startbutton.style.display='none';
}

function stoptimer(){
  clearInterval(intervalId);
  stopbutton.style.display='none';
  startbutton.style.display='inline-block';
}

function resettimer(){
 stoptimer();
 timertime=00;
 secs.innerText='00';
 mins.innerText='00';
}

function incrementtimer(){
    timertime++;

    const numberofmins=Math.floor(timertime/60);
    const numberofsecs=timertime%60;

    secs.innerText=zeropadding(numberofsecs);
    mins.innerText=zeropadding(numberofmins);
    console.log( 'increment timer',timertime);
}

function zeropadding(number){
    return number<10? `0${number}`:`${number}`;
}

startbutton.addEventListener('click',starttimer);
stopbutton.addEventListener('click',stoptimer);
resetbutton.addEventListener('click',resettimer);