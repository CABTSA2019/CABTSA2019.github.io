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

    var down = true;

    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            down = false;
        }
        else {
            down = true;
        }
    });

    var pos = 0;
    var x = 0;
    var scrollOnce = false;

    function endScroll() {
        scrollOnce = true;
        console.log("true");
    }

    $( window ).scroll(function(){
        x++;

        console.log(x);

        if (x == 10 && !scrollOnce) {
            console.log("stupid");
            if (pos == $("#scroll1").position().top && down && !scrollOnce) {
                pos = $("#scroll2").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll2").position().top && down && !scrollOnce) {
                pos = $("#scroll3").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll3").position().top && down && !scrollOnce) {
                pos = $("#scroll4").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll4").position().top && down && !scrollOnce) {
                pos = $("#scroll5").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll5").position().top && down && !scrollOnce) {
                pos = $("#scroll6").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll6").position().top && !down && !scrollOnce) {
                pos = $("#scroll5").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll5").position().top && !down && !scrollOnce) {
                pos = $("#scroll4").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll4").position().top && !down && !scrollOnce) {
                pos = $("#scroll3").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll3").position().top && !down && !scrollOnce) {
                pos = $("#scroll2").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            } else if (pos == $("#scroll2").position().top && !down && !scrollOnce) {
                pos = $("#scroll1").position().top;
                $("html, body").animate({ scrollTop: pos }, 500);
                console.log("idk");
            }
            endScroll();
            x = 0;
        }
        $body.style.removeProperty('overflow');
        $body.style.removeProperty('position');
        $body.style.removeProperty('top');
        $body.style.removeProperty('width');
        window.scrollTo(2000, pos);
    });

});
