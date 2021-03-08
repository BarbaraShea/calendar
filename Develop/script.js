
var textarea8 = document.getElementById("8");
var timeBlock8 = textarea8.dataset["number"];


//display current day at the top of the page

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// functions to update row color


function TimeChecker () { 

  var actualNow = moment().format('HH:mm')
  
  
  var timeInt = Number.parseInt(actualNow);

  $(".form-control").each ( function(){

    var timeBlockHour = parseInt($(this).attr("id"));
    console.log(timeBlockHour);
    console.log(timeInt);

 if (timeBlockHour < timeInt) {
    console.log("past");
    $(this).addClass("past");

  } else if (timeBlockHour === timeInt) {
    console.log("present");
    $(this).removeClass("past");
    $(this).addClass("present");

  } 
  
  else {
    console.log("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");

  } 
console.log(this);
})

}


//save input


$(".saveBtn").on("click", function(){

  var hours = $(this).parent().attr("id");
  console.log(hours);
  var input = $(this).siblings(".col-10").children(".form-control").val();
  console.log(input);

  localStorage.setItem(hours, input);
})


//get input

$("#hour-8 .col-10 #8").val(localStorage.getItem("hour-8"));
$("#hour-8 .col-10 #9").val(localStorage.getItem("hour-9"));
$("#hour-10 .col-10 #10").val(localStorage.getItem("hour-10"));
$("#hour-11 .col-10 #11").val(localStorage.getItem("hour-11"));
$("#hour-12 .col-10 #12").val(localStorage.getItem("hour-12"));
$("#hour-13 .col-10 #13").val(localStorage.getItem("hour-13"));
$("#hour-14 .col-10 #14").val(localStorage.getItem("hour-14"));
$("#hour-15 .col-10 #15").val(localStorage.getItem("hour-15"));
$("#hour-16 .col-10 #16").val(localStorage.getItem("hour-16"));
$("#hour-17 .col-10 #17").val(localStorage.getItem("hour-17"));





TimeChecker();