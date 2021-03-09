//display current day at the top of the page

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


// functions to update row color

function TimeChecker () { 

  var actualNow = moment().format('HH:mm')
  
  
  var timeInt = Number.parseInt(actualNow);

  $(".input").each ( function(){

    var timeBlockHour = parseInt($(this).attr("id"));

 if (timeBlockHour < timeInt) {
    $(this).addClass("past");

  } else if (timeBlockHour === timeInt) {
    $(this).removeClass("past");
    $(this).addClass("present");

  } 
  
  else {
    console.log("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");

  } 
})

}


//save input

$(".saveBtn").on("click", function(){

  var hours = $(this).parent().attr("id");
  var input = $(this).siblings(".inputDiv").children(".input").val();

  localStorage.setItem(hours, input);
})


//get input

$("#hour-8 .inputDiv #8").val(localStorage.getItem("hour-8"));
$("#hour-8 .inputDiv #9").val(localStorage.getItem("hour-9"));
$("#hour-10 .inputDiv #10").val(localStorage.getItem("hour-10"));
$("#hour-11 .inputDiv #11").val(localStorage.getItem("hour-11"));
$("#hour-12 .inputDiv #12").val(localStorage.getItem("hour-12"));
$("#hour-13 .inputDiv #13").val(localStorage.getItem("hour-13"));
$("#hour-14 .inputDiv #14").val(localStorage.getItem("hour-14"));
$("#hour-15 .inputDiv #15").val(localStorage.getItem("hour-15"));
$("#hour-16 .inputDiv #16").val(localStorage.getItem("hour-16"));
$("#hour-17 .inputDiv #17").val(localStorage.getItem("hour-17"));


TimeChecker();