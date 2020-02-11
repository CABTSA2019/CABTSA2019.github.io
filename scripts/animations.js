$(document).ready(function(){
    const $body = document.querySelector('body');
    let scrollPosition = 0;
    scrollPosition = window.pageYOffset;

    var open = false;
    $("#clickham").click(function(){
        if (!open) {
            $("#ham-menu").animate({left: '0px'}, "fast");
            open = true;
            $("#ham").attr("src", "images/acksw.png");
            $("#ham").css("width", "38px");
            $("#dimmer").css("visibility", "visible");
        } else {
            $("#ham-menu").animate({left: '300px'}, "fast");
            open = false;
            $("#ham").attr("src", "images/blackham.png");
            $("#ham").css("width", "50px");
            $("#dimmer").css("visibility", "hidden");
        }
    });

    $("#clickham").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#scroll3").offset().top
        }, 1000);
    });

    var x = 0;
    $( window ).scroll(function(){
        x += 1;

        $body.style.removeProperty('overflow');
    $body.style.removeProperty('position');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
    });

});
