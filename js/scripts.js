jQuery(document).ready(function($) {

	$(".viaje",this).mouseover(function(){
    $(".panel-info",this).css("display", "none");
});
	$(".viaje",this).mouseout(function(){
        $(".panel-info",this).css("display", "block");
    });

});