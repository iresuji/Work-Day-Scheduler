////VARIABLES////
var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");

var currentDate = moment().format("dddd,MMMM Do");
console.log(currentDate);
var currentHour = moment().format("H");
console.log(currentHour);

var toDoItems = [];//Empty array for timeblock objects


////TO DO//

//Display current date
$currentDay.text(currentDate);

//format timeblock colors depending on time
function setUpTimeBlocks() {
    $timeBlocks.each(function () {
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        //add style to time blocks to show where we are in the day
        if (thisBlockHr == currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHr < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
        }
        if (thisBlockHr > currentHour) {
            $thisBlock.addClass("future").removeClass("past present");
        }
    });
}

//if we don't have any todos set up, let's set up the array of objects
function initializeSchedule() {
    console.log(toDoItems);


    //Loop through timeblocks
    $timeBlocks.each(function () {
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        var todoObj = {
            //set related todo hour to same as data-hour
            hour: thisBlockHr,
            //get text ready to accept string input
            text: "",
        }
        //add this todo object to todoitems array
        toDoItems.push(todoObj);
    });

    //Save this array of objects to local storage by stringifying it first
    localStorage.setItem("todos", JSON.stringify(toDoItems));
    //console.log(toDoItems);
}