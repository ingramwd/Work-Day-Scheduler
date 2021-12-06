// global variables
var currentDateEl = document.querySelector('#Date');
var p = document.createElement("p");
var saveButton = document.querySelectorAll(".saveBtn");
var text = document.querySelectorAll('.description')

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

var saveData = function () {
    console.log("Hello");
}

$(".time").on("click", "button", function (event) {
    console.log(saveData)
})






