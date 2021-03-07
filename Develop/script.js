var actualNow = moment().format('HH:mm')
console.log(actualNow);
//display current day at the top of the page

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// function to update row color

function updateRowColor () { 

        var textareaEl = document.querySelector("textarea");
        var timeBlockRow = textareaEl.dataset["number"];
        var timeInt = Number.parseInt(actualNow);

        console.log(timeBlockRow);
        console.log(timeInt);
     
    if (timeBlockRow < timeInt) {
      console.log("lessThan");
      $(textareaEl).addClass("past");

    } else if (timeBlockRow == timeInt) {
        console.log("now");
        $(textareaEl).addClass("present");
  
    } else if (timeBlockRow > timeInt) {
        console.log("future");
        $(textareaEl).addClass("future");
  
    } 
   
}


//save input



updateRowColor();
