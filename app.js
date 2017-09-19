

(function(){

    'use strict';

    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');
    let audio = new Audio('./sounds/tink.wav');
    
    function setDate() {
        let now = new Date();
        let seconds = now.getSeconds();
        let secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;  
        let minutes = now.getMinutes();
        let minutesDegrees = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;  
        let hours = now.getHours();
        let hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;   
    }

    function playAudio() {
        audio.play();
    }

    setInterval(setDate, 1000);
    setInterval(playAudio, 1000);
}());