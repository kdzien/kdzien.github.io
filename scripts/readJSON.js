$(document).ready(function() {
    
    $.getJSON('../lang/pl.json', function(data) {
        let i=0;
        $.each(data, function(id, value) {
            i++;
            if(id==="#experience-body" || id==="#learn-body"){
                $(id).find(".section-header").html(value.title)
                $.each(value.elements,function(index,element){
                   $(id).find("ul").append(
                    `<li>
                        <span>${element.span}</span>
                        <h4>${element.h4}</h4>
                        <p>${element.p}</p>
                    </li>`)
                })
            }
            else if(id=="#projects-wrapper"){
                let images = [];
                event.preventDefault();
                $.each(value,function(index,elem){
                    let i = new Image();
                    i.src=elem.img;
                    $(id).append(
                        `<div class="project-small" style="background-image: url('${elem.img}')">
                            <div class="info-overlay"><div>${elem.text}</div><a href="${elem.url}" target="_blank"><i class="material-icons">&#xE89E;</i></></div>
                        </div>`
                    )
                })
                $(".project-small").hover(function(){
                    $(this).children(".info-overlay").show().stop().animate({height:"100%"})
                },function(){
                    $(this).children(".info-overlay").show().stop().animate({height:"0%"})
                })
            }
            else{
                $(id).html(value)
            }
        })
        if(i==Object.keys(data).length){
            $("body").fadeIn(1)
        }
    });
});
