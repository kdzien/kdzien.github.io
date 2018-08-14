$(function(){
    
    $("#content-wrapper").hide()
    $('#in-icon').bind("click", function () {
        $("#content-wrapper").show()
        $(this).hide().parent().slideUp(700);
    });
    
    
    //inputy
    $(".form-element").append("<div class='input-outline'></div>");
    $(".form-element").focusin(function(){
        $(this).find(".input-outline").animate({width:'100%'},250)
    })
    $(".form-element").focusout(function(){
        $(this).find(".input-outline").animate({width:'0%'})
    })
    //projectinfo
    $(".fa-info-circle").hover(function(){
        $(".projects-info").css({display:'inline'})
    },function(){
        $(".projects-info").css({display:'none'})
    })
    //technologie
    $(".tech").each(function(){
        let tech_name = $(this).data("tech")
        $(this).append(`<div class='tech-name' > ${tech_name} </div>`)
    })
    $(".tech").hover(function(){
        if($(this).index()%2!=0){ $(this).find(".tech-name").css({"background-color":"#333"}) }
        $(this).find(".tech-name").stop().slideToggle({duration:300})
    },function(){
        $(this).find(".tech-name").stop().slideToggle({duration:300})
    })
    //media
    let medias = [
        {class:".facebook",color:"#4267b2"},
        {class:".linkedin",color:"#0077b5"},
        {class:".github",color:"#24292e"}
    ]

    $(".mediax").append(`<div class='background-oly' ></div>`)
    
    
    medias.forEach(elem=>{
        $(`.mediax${elem.class}`).hover(function(){
            $(this).find("i").css({color:elem.color})
        },function(){
            $(this).find("i").css({color:"#ccc"})
        })
    })
})
function goToByScroll(id,callback){
    let scrollValue = $("#"+id).offset().top;
    $('html,body').animate({scrollTop: scrollValue},'slow');
}
function openByScroll() {
        
    //phones scroll
    let updated=0,st;
    
    $('body').on({
        'touchmove': function(e) { 
        st = $(this).scrollTop();
        if(st > updated) {
            console.log('down');
        }
        else {
            if($("#content-wrapper").is(":hidden")){
                $("#content-wrapper").show()
                $("#in-icon").hide().parent().slideUp(700);
            }
        }
        updated = st;
        }
    });
    //desktop scroll
    $(window).bind('mousewheel', function(e){
        if($("#content-wrapper").is(":hidden")){
            if(e.originalEvent.wheelDelta /120 < 0) {
                $("#content-wrapper").show()
                $("#in-icon").hide().parent().slideUp(700);
            }
        }
    })
}
  
$(document).ready(function() {
    $('#loading-modal').delay(500).hide(700,function(){
        $("#welcome").find("#head").fadeIn(700,function(){
            $("#welcome").find("#in-icon").fadeIn(1900,function(){
                openByScroll();
            })
        })
    });
})