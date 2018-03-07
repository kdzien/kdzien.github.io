"use strict";
const inputs = {
    "#name-input": {regexp:/^.{5,20}$/,message:"5-20 znaków"},
    "#email-input":{regexp:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"niepoprawny adres email"},
    "#topic-input":{regexp:/^.{5,50}$/,message:"5-50 znaków"},
    "#message-input":{regexp:/^.{50,}$/,message:"minimum 50 znaków"},
}

$.each(inputs, function(key,value){
    $(key).parent().append(
        `<div class="correct-label"><i class="material-icons">done</i></div>`
    ).find(".correct-label")

    $(key).change(function(){
        if(value.regexp.test($(this).val())===true){
            $(this).next('.warning-message').remove()
            $(this).parent().find(".correct-label").find("i").animate({
                "font-size":"42px"
            },{duration:200,queue:false})
        }
        else{
            $(this).parent().find(".correct-label").find("i").animate({
                "font-size":"0px"
            },{duration:200,queue:false})
            $(this).next('.warning-message').remove()
            $(this).after(`
                <div class="warning-message">${value.message}</div>
            `)
        }
        solveButton(inputs,$("#send-form-button"))
    })
})

function solveButton(inputss,button){
    let status=true;
    $.each(inputss,function(key,value){
        if(value.regexp.test($(key).val())===false){
            status=false;
        }
    })
    status==true ?button.css({"background-color":"#e4173e","color":"white"}).prop('disabled', false):button.css({"background-color":"white","color":"#e4173e"}).prop('disabled', true)

}