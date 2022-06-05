function countdown() { // Defining and naming function being used
    var seconds= document.getElementById("seconds").value;

    function tick() { // Defining and naming function being used
        seconds = seconds -1;
        timer.innerHTML=seconds;
        var time =setTimeout(tick,1000); //Defining variables
        if(seconds== -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML="";
        }
    }
    tick();
}



