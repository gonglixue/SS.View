/**
 * Created by Administrator on 2016/3/21.
 */
$(document).ready(function(){


    $(".button").mouseover(function(){
        var comment = document.getElementById("comment").value;
        if(comment == ""){
            $(this).attr("disabled","true")
        }
        else{
            $(this).css("background-color","darkorange");
        }
    })
    $(".button").mouseleave(function(){
        $(this).css("background-color","#5f6b95");
    })

})