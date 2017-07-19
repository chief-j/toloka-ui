

$(document).ready(function() {
	$('.spoiler-wrap').toggleClass('ui styled fluid accordion');
	$('.spoiler-head').toggleClass('title');
	$('.spoiler-body').toggleClass('content');
	$('.spoiler-body').css('display','');
	// $( ".title" ).append( "<i class=\"dropdown icon\"></i>" );
	 $(".spoiler-body").remove("br");

	$(".spoiler-wrap").remove(".clear");
	// $('.accordion .content').find('br').remove();
	$('.ui.accordion').accordion();
});
