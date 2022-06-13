var WoodCuttingObj = WoodCuttingObj || {};

//$(function () {
	

WoodCuttingObj.LevelOneConfig = function(){
			
			
			var WC_level1 = '';
			WC_level1 +='<div class="row">' 
				
						
						
						+'<div class="col-sm-12 col-md-9 col-xl-10" id="WoodCuttingSection">'
						+'<i class="fa fa-expand" aria-hidden="true" id="ExpandDiv" style="display:none"></i>'
						+'<h1>Digital Fabrication of Flexible Circuit board</h1>'
						+'<div id="WC_canvas"></div>'
						+'</div>'
						+'<div class="col-sm-12 col-md-2 col-xl-2" id="WCuttingConfgration" style="display:none">'
						
						+'</div>'
						+'</div>'
						
						
			$("#mainDiv").html('');
			$("#mainDiv").html(WC_level1);
			
			 paper = Raphael("WC_canvas", 1800, 800);	
			 
			 
			 MachineDrawingExp5();
			 
}	 
