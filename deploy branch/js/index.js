$(document).ready(function(){$(".logo").fadeIn(600,function(){$(".logo").css("display","inline"),$(".heading").fadeIn(600,function(){$(".heading").css("display","inline"),$(".tag").fadeIn(600,function(){$(".tag").css("display","inline")})})});var e=0,a=0;setInterval(function(){0==e&&(a++,a%=4,$("#"+(a-1)).removeClass("active-eve-a"),$("#"+a).addClass("active-eve-a"),0==a&&$("#"+(a+3)).removeClass("active-eve-a"),trans="translate(-"+100*a+"%,0)",$(".event-a").css({transform:trans}))},3e3),goTo=function(n){$("#"+a).removeClass("active-eve-a"),$("#"+n).addClass("active-eve-a"),trans="translate(-"+100*n+"%,0)",$(".event-a").css({transform:trans}),a=n,e=1,setTimeout(function(){e=0},3e3)}});var x=document.lastModified;document.getElementById("lastmodipara").innerHTML="The website was last modified on :"+x;