$(function(){

    //projkety
    $(".project-small").hover(function(){
        $(this).children(".info-overlay").slideToggle({duration:400})
    },function(){
        $(this).children(".info-overlay").slideToggle({duration:500})
    })

    //inputy
    $(".form-element").append("<div class='input-outline' ></div>");
    $(".form-element").focusin(function(){
        $(this).find(".input-outline").animate({width:'100%'},250)
    })
    $(".form-element").focusout(function(){
        $(this).find(".input-outline").animate({width:'0%'})
    })

    //technologie
    $(".tech").hover(function(){
        let tech_name = $(this).data("tech")
        $(this).append(`<div class='tech-name' > ${tech_name} </div>`)
        if($(this).index()%2!=0){ $(this).find(".tech-name").css({"background-color":"#333"}) }
        $(this).find(".tech-name").slideToggle({duration:300})
    },function(){
        $(this).find(".tech-name").slideToggle({duration:300})
    })
})