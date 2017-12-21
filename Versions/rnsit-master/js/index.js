$(document).ready(function(){

	$( ".logo" ).fadeIn( 600, function(){
  $(".logo").css("display","inline");
      $( ".heading" ).fadeIn( 600, function() {
        $(".heading").css("display","inline");
      $( ".tag" ).fadeIn( 600, function() {
        $(".tag").css("display","inline");
      });
  });

  });

	var paused = 0;

	var count=0;  
	setInterval(function(){
		if(paused==0){
		count++;
		count=count%4;
		$('#'+(count-1)).removeClass('active-eve-a');
		$('#'+count).addClass('active-eve-a');
		if (count==0) {
			$('#'+(count+3)).removeClass('active-eve-a');
		}
		trans = "translate(-"+count*100+"%,0)";

		$('.event-a').css({'transform':trans});
	}
	},3000);

	goTo = function(slideno){
		$('#'+count).removeClass('active-eve-a');
		$('#'+slideno).addClass('active-eve-a')
		trans = "translate(-"+slideno*100+"%,0)";
		$('.event-a').css({'transform':trans});
		count=slideno;
		paused=1;
		setTimeout(function(){
			paused = 0;
		},3000);

	}
// parallax
// window.onscroll = function(){
// 	 var windowYOffset = window.pageYOffset,
//           elBackgrounPos = "50% " + (windowYOffset * .5) + "px";
//           $('.parallaxs').css({"background-position":elBackgrounPos});

// }
// parallax



});
//last modified js
var x = document.lastModified;
document.getElementById("lastmodipara").innerHTML = "The website was last modified on :" + x;
