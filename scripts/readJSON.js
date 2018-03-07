$(document).ready(function() {
    $.getJSON('../lang/pl.json', function(data) {
        $.each(data, function(id, value) {
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
                $.each(value,function(index,elem){
                    console.log(elem)
                    $(id).append(
                        `<div class="project-small" style="background-image: url('${elem.img}')">
                            <div class="info-overlay"><div>${elem.text}</div><a href="${elem.url}" target="_blank"><i class="material-icons">&#xE89E;</i></></div>
                        </div>`
                    )
                })
                $(".project-small").hover(function(){
                    $(this).children(".info-overlay").stop().slideToggle({duration:400})
                },function(){
                    $(this).children(".info-overlay").stop().slideToggle({duration:500})
                })
            }
            else{
                $(id).html(value)
            }
        })
    });
});