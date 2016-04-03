/**
 * Created by Administrator on 2016/3/15.
 */

$(document).ready(function(){
    $(".nav-icon").mouseover(function(){
        $(this).parent(). css("opacity","1.0");
    })
    $(".nav-icon").mouseleave(function(){
        if($(this).parent().attr("class")!="active-page")
            $(this).parent().css("opacity","0.7");
    })
});

function clickSport()
{
    $(".sport-info").show()
    $(".sleep-info").hide();
    $(".diet-info").hide();
    $(".left-item").attr("class","left-item");
    $("#sport").attr("class","left-item active");

}

function clickSleep()
{
    $(".sleep-info").show();
    $(".sport-info").hide();
    $(".diet-info").hide();
    $(".left-item").attr("class","left-item");
    $("#sleep").attr("class","left-item active");

}

function clickDiet()
{
    $(".sleep-info").hide();
    $(".sport-info").hide();
    $(".diet-info").show();
    $(".left-item").attr("class","left-item");
    $("#diet").attr("class","left-item active");
}

function clickSportWeek()
{
    $("#day-sport-info").hide();
    $("#week-sport-info").show();
    $("#tab-sport-today").attr("class","tab inactive");
    $("#tab-sport-week").attr("class","tab active");
}

function clickSportToday()
{
    $("#day-sport-info").show();
    $("#week-sport-info").hide();
    $("#tab-sport-today").attr("class","tab active");
    $("#tab-sport-week").attr("class","tab inactive");
}

function clickSleepWeek()
{
    $("#day-sleep-info").hide();
    $("#week-sleep-info").show();
    $("#tab-sleep-today").attr("class","tab inactive");
    $("#tab-sleep-week").attr("class","tab active");
}

function clickSleepToday()
{
    $("#day-sleep-info").show();
    $("#week-sleep-info").hide();
    $("#tab-sleep-today").attr("class","tab active");
    $("#tab-sleep-week").attr("class","tab inactive");
}