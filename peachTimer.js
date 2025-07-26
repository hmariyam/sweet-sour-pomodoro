// Audio for onclick
var audio = document.getElementById("audioBtnClick");
var audio2 = document.getElementById("audioTimer");

// Countdown for 1 hour
document.getElementById("play-btn").onclick = function(){
    if(document.getElementById("play-btn").classList.contains('resume')){
        document.getElementById("play-btn").onclick = function(){
            audio.play(); // SFX plays
            resume();
            document.getElementById("play-btn").disabled = true;
        }
    } else if (document.getElementById("play-btn").classList.contains('reset')) {
        restart();
    } else {
        audio.play(); // SFX plays
        // Creating a new date object with the time being 1 hour (in milliseconds)
        timeRemaining = new Date().getTime() + (1000 * 60 * 60);
        oneHourTimer();
        document.getElementById("play-btn").disabled = true;
    }
}

// Function for the one hour timer
function oneHourTimer() {
    action = setInterval( function() {        
        // Retrieving the current time and the difference with the timeRemaining (1 hour)
        const now = new Date().getTime();
        const difference = timeRemaining - now;

        // Converting the milliseconds into hours, minutes and seconds
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Showing the timer on the frontend
        if(minutes < 10 && seconds < 10){
            document.getElementById("timer").innerHTML = `0${hours}:0${minutes}:0${seconds}`;
        } else if (minutes < 10){
            document.getElementById("timer").innerHTML = `0${hours}:0${minutes}:${seconds}`;
        } else if (seconds < 10) {
            document.getElementById("timer").innerHTML = `0${hours}:${minutes}:0${seconds}`;
        }
        else {
            document.getElementById("timer").innerHTML = `0${hours}:${minutes}:${seconds}`;
        }

        // If the countdown is over, the timer shows this message
        if(difference <= 0){
            audio2.play();
            document.getElementById("timer").innerText = "Good job!";
            clearInterval(action);
            document.getElementById("play-btn").classList.add("reset");
            document.getElementById("play-btn").disabled = false;
        }
    }, 1000);   
}

// Function to pause the countdown
function pause(){
    audio.play(); // SFX plays
    clearInterval(action);
    pausedTime = timeRemaining - Date.now();
    document.getElementById("play-btn").disabled = false;
    document.getElementById("play-btn").classList.add('resume');
}

// Function to resume the countdown
function resume(){
    timeRemaining = Date.now() + pausedTime;
    oneHourTimer();
}

// Function to restart countdown
function restart(){
    audio.play(); // SFX plays
    oneHourTimer();
    timeRemaining = new Date().getTime() + (1000 * 60 * 60);
    document.getElementById("play-btn").disabled = true;
}