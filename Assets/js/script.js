
var events = {};

//Show current date at the top
var today = moment().format("dddd LL");
$("#currentDay").append(today);

//Evaluate if timeblock is in past, present or future

var evalTimeBlock = function(){
    var actualHour = moment().hour();
    console.log(actualHour);
    $(".time-block").each(function(){
        var blockHour =$(this).attr("id");
        console.log(blockHour);
        
        if (blockHour == actualHour){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else if (blockHour < actualHour){
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });

};

// Save events when save btn is clicked

$(".saveBtn").click(function(){
    //get event values
    var eventDescription = $(this).siblings(".description").val();    
    var eventTime = $(this).parent().attr('id');    
    
    console.log(events);
    //save event to local storage
    localStorage.setItem(eventTime, eventDescription);
});

// Display saved elements (to be improved)

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

setInterval(evalTimeBlock(),1000);

