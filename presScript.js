$(document).ready(function () {
    $("#knapp1").click(function(){
        var $this = $(this);
        if($(".skills1").is(":visible")){
            $(".skills1").animate({opacity: "0"});
            $this.text("Visa");
        }
        if($(".skills1").css("opacity") == 0){
            $(".skills1").animate({opacity: "1"});
            $this.text("Dölj");
        }
    });

$("#knapp2").click(function(){
        var $this = $(this);
        if($(".skills2").is(":visible")){
            $(".skills2").animate({opacity: "0"});
            $this.text("Visa");
        }
        if($(".skills2").css("opacity") == 0){
            $(".skills2").animate({opacity: "1"});
            $this.text("Dölj");
        }
    });

$("#knapp3").click(function(){
        var $this = $(this);
        if($(".skills3").is(":visible")){
            $(".skills3").animate({opacity: "0"});
            $this.text("Visa");
        }
        if($(".skills3").css("opacity") == 0){
            $(".skills3").animate({opacity: "1"});
            $this.text("Dölj");
        }
    });

    $(window).resize(function(){
        if ($(window).width() <= 800) {
            $("#meny").hide();
        }
        else if ($(window).width() >= 800) {
            $("#meny").show();
        }
    }).resize();

    $(".hamburgare").click(function(){
        $("#meny").slideToggle("slow");
    });
});