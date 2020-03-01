$(document).ready(function(){
    const $body = document.querySelector('body');
    let scrollPosition = 0;
    scrollPosition = window.pageYOffset;

    if ($( window ).width() < 1201) {
    var open = false;
        $("#clickham").click(function(){
        if (!open) {
            open = true;
            var leftvalue;
            $("#ham-menu").css("visibility", "visible");
            $("#ham-menu").css("width", "50vw");
            $("#ham-menu").css("left", "100vw");
            $("#ham").attr("src", "images/acksw.png");
            $("#ham").css("width", "75px");
            $("#dimmer").css("visibility", "visible");
            $("#nav-pos").css("left", "100vw");
            if ($( window ).width() > 900) {
                $("#ham-menu").css("padding-right", "200px");
                leftvalue = -30;
            }
            if ($( window ).width() < 901) {
                $("#ham-menu").css("width", "calc(50vw + 200px)");
                $("#ham-menu").css("padding-right", "120px");
                leftvalue = -38;
            }
            $("#ham-menu").animate({left: leftvalue + "vw"}, "fast");
            $("#nav-cont").css("width", "300px");
        } else {
            open = false;
            $("#ham").attr("src", "images/blackham.png");
            $("#ham").css("width", "90px");
            $("#dimmer").css("visibility", "hidden");
            $("#nav-pos").css("left", "100vw");
            $("#ham-menu").css("padding-right", "0px");
            $("#ham-menu").animate({left: '600px'}, "fast");
            $("#nav-cont").css("width", "0px");
        }
    });
    } else {
        var open = false;
    $("#clickham").click(function(){
        if (!open) {
            open = true;
            $("#ham-menu").css("left", "calc(100vw + 300px)")
            $("#ham").attr("src", "images/acksw.png");
            $("#ham").css("width", "38px");
            $("#dimmer").css("visibility", "visible");
            $("#nav-pos").css("left", "0vw");
            $("#ham-menu").animate({left: '100vw'}, "fast");
            $("#nav-cont").css("width", "300px");
        } else {
            open = false;
            $("#ham").attr("src", "images/blackham.png");
            $("#ham").css("width", "50px");
            $("#dimmer").css("visibility", "hidden");
            $("#nav-pos").css("left", "100vw");
            $("#ham-menu").animate({left: '300px'}, "fast");
            $("#nav-cont").css("width", "0px");
        }
    });
    }

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

        if (x > 10) {
            x = 0;
        }

        if ($( window ).width() > 1200) {
        if (x == 10 && !scrollOnce) {
            if ( (pos < $("#scroll2").position().top && pos >= 0) && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll2").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll2").position().top && pos < $("#scroll3").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll3").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll3").position().top && pos < $("#scroll4").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll4").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll4").position().top && pos < $("#scroll5").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll5").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll5").position().top && pos < $("#scroll6").position().top && down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll6").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll6").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll5").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll5").position().top && pos < $("#scroll6").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll4").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll4").position().top && pos < $("#scroll5").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll3").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll3").position().top && pos < $("#scroll4").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll2").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            } else if (pos >= $("#scroll2").position().top && pos < $("#scroll3").position().top && !down && !scrollOnce) {
                scrollOnce = true;
                pos = $("#scroll1").position().top;
                $("html, body").animate({ scrollTop: pos }, 1000);
                setTimeout(function(){
                    scrollOnce = oneScroll();
                    x = 0;
                }, 1100);
            }
        }

        $body.style.removeProperty('position');
        $body.style.removeProperty('top');
        $body.style.removeProperty('width');
        window.scrollTo(0, pos);
        }
    });
});


var sum = 0;
var coloradd = 0;
var extradd = 0;
var trimadd = 42000;

function resetOne() {
    $("#col1").attr("src", "images/whiteuns.png");
    $("#col2").attr("src", "images/blackuns.png");
    $("#col3").attr("src", "images/blueuns.png");
    $("#col4").attr("src", "images/orangeuns.png");
    $("#col5").attr("src", "images/reduns.png");
    $("#col6").attr("src", "images/grayuns.png");
}

function colorClick1() {
    resetOne();
    $("#col1").attr("src", "images/whitesel.png");
    coloradd = 0;
}

function colorClick2() {
    resetOne();
    $("#col2").attr("src", "images/blacksel.png");
    coloradd = 0;
}

function colorClick3() {
    resetOne();
    $("#col3").attr("src", "images/bluesel.png");
    coloradd = 0;
}

function colorClick4() {
    resetOne();
    $("#col4").attr("src", "images/orangesel.png");
    coloradd = 1000;
}

function colorClick5() {
    resetOne();
    $("#col5").attr("src", "images/redsel.png");
    coloradd = 1000;
}

function colorClick6() {
    resetOne();
    $("#col6").attr("src", "images/graysel.png");
    coloradd = 1500;
}

var exOne = false;
var exTwo = false;
var exThree = false;
var exFour = false;
var exFive = false;
var exSix = false;

function extraClick1() {
    if (!exOne) {
        $("#acc1").attr("src", "images/matstrue.png");
        extradd += 120;
        exOne = true;
    } else {
        $("#acc1").attr("src", "images/mats.png");
        extradd -= 120;
        exOne = false;
    }
}

function extraClick2() {
    if (!exTwo) {
        $("#acc2").attr("src", "images/racktrue.png");
        extradd += 320;
        exTwo = true;
    } else {
        $("#acc2").attr("src", "images/rack.png");
        extradd -= 320;
        exTwo = false;
    }
}

function extraClick3() {
    if (!exThree) {
        $("#acc3").attr("src", "images/cargotrue.png");
        extradd += 65;
        exThree = true;
    } else {
        $("#acc3").attr("src", "images/cargo.png");
        extradd -= 65;
        exThree = false;
    }
}

function extraClick4() {
    if (!exFour) {
        $("#acc4").attr("src", "images/sunshieldtrue.png");
        extradd += 55;
        exFour = true;
    } else {
        $("#acc4").attr("src", "images/sunshield.png");
        extradd -= 55;
        exFour = false;
    }
}

function extraClick5() {
    if (!exFive) {
        $("#acc5").attr("src", "images/kittrue.png");
        extradd += 50;
        exFive = true;
    } else {
        $("#acc5").attr("src", "images/kit.png");
        extradd -= 50;
        exFive = false;
    }
}

function extraClick6() {
    if (!exSix) {
        $("#acc6").attr("src", "images/guardstrue.png");
        extradd += 110;
        exSix = true;
    } else {
        $("#acc6").attr("src", "images/guards.png");
        extradd -= 110;
        exSix = false;
    }
}

function tOneClick() {
    $("#t1").prop("checked", true);
    $("#t2").prop("checked", false);
    $("#t3").prop("checked", false);
    trimadd = 42000;
}

function tTwoClick() {
    $("#t1").prop("checked", false);
    $("#t2").prop("checked", true);
    $("#t3").prop("checked", false);
    trimadd = 51000;
}

function tThreeClick() {
    $("#t1").prop("checked", false);
    $("#t2").prop("checked", false);
    $("#t3").prop("checked", true);
    trimadd = 55000;
}

var reg = true;
var loan = false;
var fin = false;

function rClick() {
    reg = true;
    loan = false;
    fin = false;
    $(".ifloan").css("visibility", "hidden");
    $(".ifloan").css("height", "0px");
    $(".ifloan").css("width", "0px");
    $(".iflease").css("visibility", "hidden");
    $(".iflease").css("height", "0px");
    $(".iflease").css("width", "0px");
    $(".ifreg").css("visibility", "visible");
    $(".ifreg").css("height", "auto");
    $(".ifreg").css("width", "auto");
    $("#direct").css("background-color", "black");
    $("#direct").css("color", "white");
    $("#finance").css("background-color", "white");
    $("#finance").css("color", "black");
    $("#lease").css("background-color", "white");
    $("#lease").css("color", "black");
    priceIn();
}

function fClick() {
    reg = false;
    loan = true;
    fin = false;
    $(".ifloan").css("visibility", "visible");
    $(".ifloan").css("height", "auto");
    $(".ifloan").css("width", "auto");
    $(".iflease").css("visibility", "hidden");
    $(".iflease").css("height", "0px");
    $(".iflease").css("width", "0px");
    $(".ifreg").css("visibility", "hidden");
    $(".ifreg").css("height", "0px");
    $(".ifreg").css("width", "0px");
    $("#direct").css("background-color", "white");
    $("#direct").css("color", "black");
    $("#finance").css("background-color", "black");
    $("#finance").css("color", "white");
    $("#lease").css("background-color", "white");
    $("#lease").css("color", "black");
    priceIn();
}

function lClick() {
    reg = false;
    loan = false;
    fin = true;
    $(".ifloan").css("visibility", "hidden");
    $(".ifloan").css("height", "0px");
    $(".ifloan").css("width", "0px");
    $(".iflease").css("visibility", "visible");
    $(".iflease").css("height", "auto");
    $(".iflease").css("width", "auto");
    $(".ifreg").css("visibility", "hidden");;
    $(".ifreg").css("height", "0px");
    $(".ifreg").css("width", "0px");
    $("#direct").css("background-color", "white");
    $("#direct").css("color", "black");
    $("#finance").css("background-color", "white");
    $("#finance").css("color", "black");
    $("#lease").css("background-color", "black");
    $("#lease").css("color", "white");
    priceIn();
}

function priceIn() {
    var sum = coloradd + extradd + trimadd;
    sum = sum - sum%1;
    if (reg == true) {
        var sumtemp = sum - 7500;
        var toEnum = "";
        if (sumtemp%1000 < 10) {
            toEnum = "00";
        } else if (sumtemp%1000 < 100) {
            toEnum = "0";
        }
        var sendvalue = (sumtemp - sumtemp%1000)/1000 + "," + toEnum + sumtemp%1000;
        $("#endvalue").text("$" + sendvalue);
    } else if (fin == true) {
        var sumtemp = (sum - 7500)/90;
        sumtemp = sumtemp - sumtemp%1;
        var toEnum = "";
        if (sumtemp%1000 < 10) {
            toEnum = "00";
        } else if (sumtemp%1000 < 100) {
            toEnum = "0";
        }
        var addon = "";
        if (sumtemp >= 1000) {
            addon = (sumtemp - sumtemp%1000)/1000 + ",";
        }
        var sendvalue = addon + toEnum + sumtemp%1000;
        $("#endvalue").text("$" + sendvalue);
    } else if (loan == true) {
        var sumtemp = ((sum - 7500)*(Math.pow(1.04, 6)))/72;
        sumtemp = sumtemp - sumtemp%1;
        var toEnum = "";
        if (sumtemp%1000 < 10) {
            toEnum = "00";
        } else if (sumtemp%1000 < 100) {
            toEnum = "0";
        }
        var addon = "";
        if (sumtemp >= 1000) {
            addon = (sumtemp - sumtemp%1000)/1000 + ",";
        }
        var sendvalue = addon + toEnum + sumtemp%1000;
        $("#endvalue").text("$" + sendvalue);
    }
}

function popout1() {
    if ($( window ).width() > 1200) {
        var poppos = $("html, body").width() - 320;
        $("#pop2").css("visibility", "hidden");
        $("#pop3").css("visibility", "hidden");
        $("#pop2").css("width", "0px");
        $("#pop3").css("width", "0px");
        $("#pop2").css("left", "100vw");
        $("#pop3").css("left", "100vw");
        $(".anihide2").css("visibility", "hidden");
        $(".anihide3").css("visibility", "hidden");
        $("#pop1").css("visibility", "visible");
        $("#pop1").css("width", "300px");
        $("#pop1").animate({left: poppos}, 1000);
        $(".anihide1").css("visibility", "visible");
    } else {
        var poppos = $("html, body").width() - 320;
        $("#pop2").css("visibility", "hidden");
        $("#pop3").css("visibility", "hidden");
        $("#pop2").css("width", "0px");
        $("#pop3").css("width", "0px");
        $("#pop2").css("left", "100vw");
        $("#pop3").css("left", "100vw");
        $(".anihide2").css("visibility", "hidden");
        $(".anihide3").css("visibility", "hidden");
        $("#pop1").css("visibility", "visible");
        $("#pop1").css("width", "100vw");
        $("#pop1").animate({left: 0}, 1000);
        $(".anihide1").css("visibility", "visible");
    }
    }
    function popout2() {
        if ($( window ).width() > 1200) {
        var poppos = $("html, body").width() - 320;
        $("#pop1").css("visibility", "hidden");
        $("#pop3").css("visibility", "hidden");
        $("#pop1").css("width", "0px");
        $("#pop3").css("width", "0px");
        $("#pop1").css("left", "100vw");
        $("#pop3").css("left", "100vw");
        $(".anihide1").css("visibility", "hidden");
        $(".anihide3").css("visibility", "hidden");
        $("#pop2").css("visibility", "visible");
        $("#pop2").css("width", "300px");
        $("#pop2").animate({left: poppos}, 1000);
        $(".anihide2").css("visibility", "visible");
        } else {
        var poppos = $("html, body").width() - 320;
        $("#pop1").css("visibility", "hidden");
        $("#pop3").css("visibility", "hidden");
        $("#pop1").css("width", "0px");
        $("#pop3").css("width", "0px");
        $("#pop1").css("left", "100vw");
        $("#pop3").css("left", "100vw");
        $(".anihide1").css("visibility", "hidden");
        $(".anihide3").css("visibility", "hidden");
        $("#pop2").css("visibility", "visible");
        $("#pop2").css("width", "100vw");
        $("#pop2").animate({left: 0}, 1000);
        $(".anihide2").css("visibility", "visible");
    }
    }
    function popout3() {
        if ($( window ).width() > 1200) {
        var poppos = $("html, body").width() - 320;
        $("#pop2").css("visibility", "hidden");
        $("#pop1").css("visibility", "hidden");
        $("#pop2").css("width", "0px");
        $("#pop1").css("width", "0px");
        $("#pop2").css("left", "100vw");
        $("#pop1").css("left", "100vw");
        $(".anihide2").css("visibility", "hidden");
        $(".anihide1").css("visibility", "hidden");
        $("#pop3").css("visibility", "visible");
        $("#pop3").css("width", "300px");
        $("#pop3").animate({left: poppos}, 1000);
        $(".anihide3").css("visibility", "visible");
        } else {
        var poppos = $("html, body").width() - 320;
        $("#pop2").css("visibility", "hidden");
        $("#pop1").css("visibility", "hidden");
        $("#pop2").css("width", "0px");
        $("#pop1").css("width", "0px");
        $("#pop2").css("left", "100vw");
        $("#pop1").css("left", "100vw");
        $(".anihide2").css("visibility", "hidden");
        $(".anihide1").css("visibility", "hidden");
        $("#pop3").css("visibility", "visible");
        $("#pop3").css("width", "100vw");
        $("#pop3").animate({left: 0}, 1000);
        $(".anihide3").css("visibility", "visible");
    }
    }

var adv = false;

function advClick() {
    if ( $(window).width() > 1200) {
    if (!adv) {
        $("#advcontainer").animate({left: '0vw'}, 1000);
        $(".onblack").animate({opacity: '1'}, 2000);
        adv = true;
    } else {
        $("#advcontainer").animate({left: '100vw'}, 1000);
        $(".onblack").animate({opacity: '0'}, 2000);
        adv = false;
    }
    } else {
        if (!adv) {
        $("#advcontainer").css("z-index", "1");
        $("#advcontainer").animate({opacity: '1'}, 1000);
        $(".onblack").animate({opacity: '1'}, 1000);
        adv = true;
    } else {
        $("#advcontainer").animate({opacity: '0'}, 1000);
        $(".onblack").animate({opacity: '0'}, 1000);
        $("#advcontainer").css("z-index", "-5");
        adv = false;
    }
    }
}

function orderClick() {
    if ( $(window).width() > 1200) {
    if (!adv) {
        $("#ordercontainer").animate({left: '0vw'}, 1000);
        $(".onblack2").animate({opacity: '1'}, 2000);
        adv = true;
    } else {
        $("#ordercontainer").animate({left: '100vw'}, 1000);
        $(".onblac2k").animate({opacity: '0'}, 2000);
        adv = false;
    }
    } else {
        if (!adv) {
        $("#ordercontainer").css("z-index", "1");
        $("#ordercontainer").animate({opacity: '1'}, 1000);
        $(".onblack2").animate({opacity: '1'}, 1000);
        adv = true;
    } else {
        $("#ordercontainer").animate({opacity: '0'}, 1000);
        $(".onblack2").animate({opacity: '0'}, 1000);
        $("#ordercontainer").css("z-index", "-5");
        adv = false;
    }
    }
}

function hovmenu1() {
    $("#ben1").animate({opacity: 1}, 400);
}

function hovmenu2() {
    $("#ben2").animate({opacity: 1}, 400);
}

function hovmenu3() {
    $("#ben3").animate({opacity: 1}, 400);
}

function hovmenu4() {
    $("#ben4").animate({opacity: 1}, 400);
}

function hovmenu5() {
    $("#ben5").animate({opacity: 1}, 400);
}


function outmenu1() {
    if ($( window ).width() < 1201) {
    $("#ben1").animate({opacity: 0}, 0);
    }
}

function outmenu2() {
    if ($( window ).width() < 1201) {
    $("#ben2").animate({opacity: 0}, 0);
    }
}

function outmenu3() {
    if ($( window ).width() < 1201) {
    $("#ben3").animate({opacity: 0}, 0);
    }
}

function outmenu4() {
    if ($( window ).width() < 1201) {
    $("#ben4").animate({opacity: 0}, 0);
    }
}

function outmenu5() {
    if ($( window ).width() < 1201) {
    $("#ben5").animate({opacity: 0}, 0);
    }
}
