var today = moment();
$("#currentDay").text(today.format("[Today is] llll"));
var currentTime = today;

var newEvent = ($('.addEvent'));
var formText = ($('.event-input'));

//putting current hour in a variable
var currentHour = moment().hour();
//making sure javascript knows that currentHour is a number, not a string

var hourEls = [];
$('.row').each(function () {
    hourEls.push(this);
});

function colorTimeBlock() {
    console.log(hourEls.length);
    //"this" refers to the hourEls
     $(hourEls).each(function () {     

        var currentHourEl = parseInt($(this).attr("id"));

        if (currentHourEl < currentHour) {
           $(this).addClass('past');
        }

        else if (currentHourEl === currentHour) {
            $(this).addClass('present');
        }

        else {
            $(this).addClass('future');
        }   
    }
     )};

colorTimeBlock();

newEvent.on('click', function(e) {
    var clickedButton = this.getAttribute("class");
    var classArray = clickedButton.split(" ");
    //classArray[1];

    //saves input + clicked row # to a variable called inputSelector
   var inputSelector = "input." + classArray[1];
   //we do a Jquery call to make it an array and get the first (and only) element 
   var inputEl = $(inputSelector)[0];
    console.log(inputEl.value);
    localStorage.setItem(classArray[1], inputEl.value);
});


init();

function init() {
    for (var i = 9; i < 18; i++) {
    var rowClassName = "row" + i.toString();
    console.log(localStorage.getItem(rowClassName));

    var inputEl = $('input.' + rowClassName)[0];
    inputEl.value = localStorage.getItem(rowClassName);
    }
};