$(document).ready(function(){
    var open = false;
    $("#clickham").click(function(){
        if (!open) {
            $("#ham-menu").animate({left: '0px'}, "fast");
            open = true;
        } else {
            $("#ham-menu").animate({left: '300px'}, "fast");
            open = false;
        }
    });
});
