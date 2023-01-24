var $currentDay = $("#currentDay");

var currentDate = moment().format("dddd,MMMM Do");
console.log(currentDate);
var currentHour = moment().format("H");
console.log(currentHour);

//Display current date
$currentDay.text(currentDate);