$(document).ready(function(){
     $("#940, li").hover(
     	function(){
         	$("#940").attr('src','homeImg2.jpg');
     	},
     	function(){
         	$("#940").attr('src','homeImg1.jpg');
     	}
     );


	$("#homeImg").delay(0).animate({"opacity": "1"}, 2000);

	
	var easeNav = function(element, timeDelay){
		$(element).delay(timeDelay).animate({"margin-left": "0px"}, 700);
	}

	easeNav("#homeli", 1300);
	easeNav("#musicli", 1450);
	easeNav("#bioli", 1600);
	easeNav("#tourli", 1750);
	easeNav("#contactli", 1900);
});