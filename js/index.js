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
	var count=0;  
	setInterval(function(){
		count++;
		count=count%4;
		trans = "translate(-"+count*100+"%,0)";

		$('.event-a').css({'transform':trans});
	},3000);
// parallax

// parallax

});
