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

    function getScrollbarWidth() {

      // Creating invisible container
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll'; // forcing scrollbar to appear
      outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
      document.body.appendChild(outer);

      // Creating inner element and placing it in the container
      const inner = document.createElement('div');
      outer.appendChild(inner);

      // Calculating difference between container's full width and the child width
      const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

      // Removing temporary elements from the DOM
      outer.parentNode.removeChild(outer);

      return scrollbarWidth;

    }

    var swidth = getScrollbarWidth();

    var pos = 0;
    var x = 0;
    var scrollOnce = false;

    function oneScroll() {
        return false;
    }

    $( window ).scroll(function(){
        x++;

        if (x > 20) {
            x = 0;
        }

        if (x == 20 && !scrollOnce) {
            console.log("stupid");
            if ( (pos < $("#scroll2").position().top && pos >= 0) && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll2").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll2").position().top && pos < $("#scroll3").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll3").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll3").position().top && pos < $("#scroll4").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll4").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll4").position().top && pos < $("#scroll5").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll5").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll5").position().top && pos < $("#scroll6").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll6").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll6").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll5").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll5").position().top && pos < $("#scroll6").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll4").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll4").position().top && pos < $("#scroll5").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll3").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll3").position().top && pos < $("#scroll4").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll2").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            } else if (pos >= $("#scroll2").position().top && pos < $("#scroll3").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll1").position().top;
                $("html, body").animate({ scrollTop: pos }, 1500);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 2000);
            }
        }

        $body.style.removeProperty('position');
        $body.style.removeProperty('top');
        $body.style.removeProperty('width');
        window.scrollTo(0, pos);
    });

});

