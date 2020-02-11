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
    var d = 0;
    var u = 0;
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            console.log('Scroll up');
            down = false;
            d++;
        }
        else {
            console.log('Scroll down');
            down = true;
            u++;
        }
    });

    var pos = 0;
    var x = 0;
    $( window ).scroll(function(){
        x += 1;

        if (x > 3) {
            if (pos == $("#scroll1").position().top && down) {
                pos = $("#scroll2").position().top;
            } else if (pos == $("#scroll2").position().top && down) {
                pos = $("#scroll3").position().top;
            } else if (pos == $("#scroll3").position().top && down) {
                pos = $("#scroll4").position().top;
            } else if (pos == $("#scroll4").position().top && down) {
                pos = $("#scroll5").position().top;
            } else if (pos == $("#scroll5").position().top && down) {
                pos = $("#scroll6").position().top;
            } else if (pos == $("#scroll6").position().top && !down) {
                pos = $("#scroll5").position().top;
            } else if (pos == $("#scroll5").position().top && !down) {
                pos = $("#scroll4").position().top;
            } else if (pos == $("#scroll4").position().top && !down) {
                pos = $("#scroll3").position().top;
            } else if (pos == $("#scroll3").position().top && !down) {
                pos = $("#scroll2").position().top;
            } else if (pos == $("#scroll2").position().top && !down) {
                pos = $("#scroll1").position().top;
            }
            x = 0;
        }

        $("#testy").text(pos);
        $("#testy2").text(x);
        $("#testy3").text(down);
        $("#testy4").text(d);
        $body.style.removeProperty('overflow');
        $body.style.removeProperty('position');
        $body.style.removeProperty('top');
        $body.style.removeProperty('width');
        window.scrollTo(2000, pos);
    });

});
