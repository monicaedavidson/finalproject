
var myVar = setInterval(function(){myTimer()}, 1000);
var startTime;   // string with time that start button was pushed, "hh:mm:ss"
var elapsedTimeSec; // number of seconds since start button pushed

//set interval
function myTimer() {
    elapsedTimeSec = elapsedTimeSec + 1;
}

//clear interval
//ends when list is completed
function myStopFunction() {
    clearInterval(myVar);
}

// start button call this
function startTimer (){
    var d = new Date();
    startTime = d.toLocaleTimeString(); //starts when start button is pushed
    elapsedTimeSec = 0;
}

// something gets the elapsed time string
function getElapsedTime() {
    var hrs = Math.floor(elapsedTimeSec / 3600);
    elapsedTimeSec = elapsedTimeSec - hrs*3600;
    var mins = Math.floor(elapsedTimeSec / 60); 
    elapsedTimeSec = elapsedTimeSec - mins*60;
    var secs = elapsedTimeSec;
    
    var strElapsedTime = hrs.toString(10) + " " + "hours" + " " + mins.toString(10) + " " + "minutes" + " " + secs.toString(10) + " " + "seconds";

    var res = document.getElementById('results');
    res.innerHTML = strElapsedTime;
}


