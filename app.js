

(function(){

    'use strict';

    let secondHand = document.querySelector('.second-hand');
    
    function setDate() {
        let now = new Date();
        let seconds = now.getSeconds();
        let secondsDegrees =((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;        
    }

    setInterval(setDate, 1000);
}());