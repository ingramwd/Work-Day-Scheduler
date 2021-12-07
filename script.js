// global variables
var currentDateEl = document.querySelector('#Date');
var p = document.createElement("p");
var saveButton = document.querySelectorAll(".saveBtn");

// creating date and formatting it into a string
var date = moment();
var dateFormat = date.format("dddd, MMMM Do");

// checking if current date format is correct
console.log(dateFormat);

// appending p element to currentDateEl
currentDateEl.appendChild(p);

// Displays Date
p.textContent = dateFormat;


// save button for text element
$(".saveBtn").on("click", function () {

    // save textarea data into local storage in a key=value format the value here is whatever the user input is for the text area
    var textarea = $(this).siblings(".description").val();

    // the key value is pulling the id from the div that that value is pulled form
    var divId = $(this).parent().attr("id");



    // saves data into the local storage
    localStorage.setItem(divId, textarea);
})


// getData function retrieves data from the localStorage and sets it to corresponding div to the id and then use that id to set it into 
// that current textarea "because they all use the description class"
var getData = function () {
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
};

getData();

var timeCheck = function () {
    $(".")

}

