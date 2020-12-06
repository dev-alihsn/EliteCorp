$(function(){
    "use strict";
    // adjust silder header
    let sliderH = $(".slider , .carousel-item"),
        winH = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();
    sliderH.height(winH - (upperH + navH))

    // featured work shuffle
    $(".featured-work ul li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).data("class") === "All") {
            $(".shuffle-images .col-md").css("opacity","1")
        }else {
            $(".shuffle-images .col-md").css("opacity",".2")
            $($(this).data("class")).parent().css("opacity","1")
        }
    })
});