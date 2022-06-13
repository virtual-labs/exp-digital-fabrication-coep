function CuttingObject(w,h)
{
	
	var	circlePaper = new Raphael(document.getElementById('CuttingWood'), 700 ,500 );
	  
	
//clockwisw
	//	circlePaper.path("M 100 210 a 50 50 0 1 1 -0.0001 0").attr({stroke: "#fff", opacity: 1, "stroke-width" : 2})  
	
//var	circlePaper = new Raphael(document.getElementById('mcircle'), 600 ,700 );
//	circlePaper.path("M 100 210 a 40 40 0 1 0 0.0001 0").attr({stroke: "#666", opacity: 1, "stroke-width" : 2})  
	
//	var path = anime.path('#circle path');
//
//	anime({
//	  targets: '#mcircle',
////	  strokeDashoffset: [anime.setDashoffset, 0],
//	  easing: 'easeInOutCubic',
//	  translateX: path('x'),
//	  translateY: path('y'),
////	  rotate: path('angle'),
////	  easing: 'linear',
//	  duration: 5500,
//	  begin: function anime({
//		  targets: '#circle',
//		  strokeDashoffset: [anime.setDashoffset, 0],
//		  easing: 'easeInOutCubic',
//		  duration: 5300,
//		  
//		  begin: function(anim) {
//		    document.querySelector('path').setAttribute("stroke", "black");
//		    document.querySelector('path').setAttribute("fill", "none");
//		  },
//		  complete: function(anim) {
//		    document.querySelector('path').setAttribute("fill", "yellow");
//		  },
//		  autoplay: true
//		});
//
//		  complete: function(anime) {
//		    document.querySelector('path').setAttribute("fill", "yellow");
//		  },
//	  loop: false,
//	  
//	});
//
//	
//	var lineDrawing = anime({
//		  targets: 'path',
//		  strokeDashoffset: [anime.setDashoffset, 0],
//		  easing: 'easeInOutCubic',
//		  duration: 5300,
//		  
//		  begin: function(anim) {
//		    document.querySelector('path').setAttribute("stroke", "black");
//		    document.querySelector('path').setAttribute("fill", "none");
//		  },
//		  complete: function(anim) {
//		    document.querySelector('path').setAttribute("fill", "yellow");
//		  },
//		  autoplay: true
//		});

//		document.querySelector('.play-drawing').onclick = lineDrawing.restart;
}


DrowCircle = function(){
	circlePaper.path("M 100 210 a 50 50 0 1 0 0.0001 0").attr({stroke: "blue", opacity: 1, "stroke-width" : 4})
}