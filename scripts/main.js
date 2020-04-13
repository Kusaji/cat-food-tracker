//Initial Update for when site is loaded.
updateFedTimes();

//Update info on screen once per second
timers();

//I'm fucking lazy, deal with it.
copyRightYear();



/*
    This takes the "Raw" time for moment.js, and calculates how long it has been since the
    specified time parameter.
*/

function calculateTimeFromNow(TimeToCalculateRaw, elementID) {
    var Time1 = localStorage.getItem(TimeToCalculateRaw);
    var timeDifference = moment(Time1).fromNow();
    document.getElementById(elementID).innerHTML = timeDifference;
}

/*
    This function is to be used with the buttons on the page, when you click a button, it will take a "raw" unformatted
    time for moment.js, it will make a formatted time variable, and it will update the selected span.
*/

function calculateTime(TimeToCalculate, TimeToCalculateRaw, elementID) {
    var Time1 = localStorage.getItem(TimeToCalculate);

    if (Time1 == "null") {

        Time1Raw = moment();
        window.localStorage.setItem(TimeToCalculateRaw, Time1Raw);

        Time1 = moment().format('MMMM Do, h:mm: a');
        window.localStorage.setItem(TimeToCalculate, Time1);

        document.getElementById(elementID).innerHTML = window.localStorage.getItem(TimeToCalculate);

    } else if (Time1 != "null") {

        Time1Raw = moment();
        window.localStorage.setItem(TimeToCalculateRaw, Time1Raw);

        Time1 = moment().format('MMMM Do, h:mm: a');
        window.localStorage.setItem(TimeToCalculate, Time1);

        document.getElementById(elementID).innerHTML = window.localStorage.getItem(TimeToCalculate);
    }
}


    /*
        Naming Conventions for variables to track.    
        DryFoodTime | DryFoodTimeDifference | WetFoodTime | WetFoodTimeDifference
    */

    function updateFedTimes() {
        document.getElementById("DryFoodTime").innerHTML = window.localStorage.getItem("DryFoodTime");
        document.getElementById("DryFoodTimeDifference").innerHTML = window.localStorage.getItem("DryFoodTimeDifference");

        document.getElementById("WetFoodTime").innerHTML = window.localStorage.getItem("WetFoodTime");
        document.getElementById("WetFoodTimeDifference").innerHTML = window.localStorage.getItem("WetFoodTimeDifference");
        
        document.getElementById("WaterTime").innerHTML = window.localStorage.getItem("WaterTime");
        document.getElementById("WaterTimeDifference").innerHTML = window.localStorage.getItem("WaterTimeDifference");

        document.getElementById("LitterTime").innerHTML = window.localStorage.getItem("LitterTime");
        document.getElementById("LitterTimeDifference").innerHTML = window.localStorage.getItem("LitterTimeDifference");

        calculateTimeFromNow('WetFoodTimeRaw', 'WetFoodTimeDifference');
        calculateTimeFromNow('DryFoodTimeRaw', 'DryFoodTimeDifference');
        calculateTimeFromNow('WaterTimeRaw', 'WaterTimeDifference');
        calculateTimeFromNow('LitterTimeRaw', 'LitterTimeDifference');

    }

    //Calls UpdateFedTimes once per second

    function timers() {
        setInterval(updateFedTimes, 1000);
    }

    function copyRightYear() {
        var copyRightDate = moment().format('YYYY');
        document.getElementById("copyRightYear").innerHTML = copyRightDate;
    }
