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
            $(this).parent().find(".correct-label").animate({
                "width":"42px"
            },{duration:200,queue:false})
        }
        else{
            if($(this).val()===''){
                $(this).next('.warning-message').remove()
            }else{
                $(this).next('.warning-message').remove()
                $(this).after(`
                    <div class="warning-message">${value.message}</div>
                `)
            }
            $(this).parent().find(".correct-label").animate({
                "width":"0px"
            },{duration:200,queue:false})
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


function sendEmail(){
    event.preventDefault();
    let sendOverlay="#send-waiting"
    let name = $("#name-input").val()
    let email = $("#email-input").val()
    let topic = $("#topic-input").val()
    let message = $("#message-input").val()
    $(sendOverlay).fadeIn(200);
    emailjs.send("gmail","template_3WfbauCe",{topic: topic,email:email, notes:message, from:name})
	.then(function(response) {
        $(sendOverlay).find(".circle-of-pain").hide()
        $(sendOverlay).append(`<div id="text">Wysłano</div>`)
        $.each(inputs, function(key,value){
            $(key).val('');
            $(key).parent().find(".correct-label").animate({
                "width":"0px"
            },{duration:200,queue:false})
        })
        solveButton(inputs,$("#send-form-button"))
        $(sendOverlay).delay(1000).fadeOut(500,function(){
            $(sendOverlay).find(".circle-of-pain").show()
            $(sendOverlay).find(`#text`).remove()

        })
	}, function(err) {
        console.log(err)
    });
}
