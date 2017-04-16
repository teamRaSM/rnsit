$(document).ready(function(){
$('.dropdown-button').dropdown({
inDuration: 300,
outDuration: 225,
constrainWidth: false, // Does not change width of dropdown to that of the activator
hover: true, // Activate on hover
gutter: 0, // Spacing from edge
belowOrigin: true, // Displays dropdown below the button
alignment: 'left', // Displays dropdown with edge aligned to the left of button
stopPropagation: false // Stops event propagation
}
);

sessionStorage.setItem('slide',1);
sessionStorage.setItem('slide1',1);
sessionStorage.setItem('slide2',1);

      $(".innerNav2").slideUp(300);
        $(".innerNav1").slideUp(300);
            $(".innerNav").slideUp(300);
      $(".dropNav").click(function(){
      				if(sessionStorage.getItem('slide') == 0){
      					$(".innerNav").slideUp(300);
      					sessionStorage.setItem('slide',1);
      				}
      				else{
      				sessionStorage.setItem('slide',0);
      				$(".innerNav").slideDown("fast");
      			}
          });
      $(".dropNav1").click(function(){
          // alert('hi');
              if(sessionStorage.getItem('slide1') == 0){
                $(".innerNav1").slideUp(300);
                sessionStorage.setItem('slide1',1);
              }
              else{
              sessionStorage.setItem('slide1',0);
              $(".innerNav1").slideDown("fast");
              }
      });

     // $(".dropNav2").click(function(){
     //        if(sessionStorage.getItem('slide2') == 0){
     //            $(".innerNav2").slideUp(300);
     //            sessionStorage.setItem('slide2',1);
     //          }
     //        else{
     //          sessionStorage.setItem('slide2',0);
     //          $(".innerNav2").slideDown("fast");
     //        }
     //   });





$(".button-collapse").sideNav({
menuWidth:300,
edge:'left',
closeOnClick:false,
draggable:true});

});