
var myVar = setInterval(function(){myTimer()}, 1000);
var startTime;   
var elapsedTimeSec; 

function myTimer() {
    elapsedTimeSec = elapsedTimeSec + 1;  

}

function myStopFunction() {
    clearInterval(myVar);
}

function startTimer (){
    var d = new Date();
    startTime = d.toLocaleTimeString(); 
    elapsedTimeSec = 0;
}

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


