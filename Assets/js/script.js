
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
        
        if (blockHour === actualHour){
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

evalTimeBlock();