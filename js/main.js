$(function(){
    "use strict";
    // adjust silder header
    let sliderH = $(".slider, carousel-item"),
        winH = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();
    sliderH.height(winH - (upperH + navH))
});