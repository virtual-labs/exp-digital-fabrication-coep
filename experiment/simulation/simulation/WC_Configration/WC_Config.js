var WoodCuttingObj = WoodCuttingObj || {};

//$(function () {
	

WoodCuttingObj.LevelOneConfig = function(){
			
			
			var WC_level1 = '';
			WC_level1 +='<div class="row">' 
				+'<div class="col-sm-12 col-md-3 col-xl-2" id="ConfigSection">'
				
				+'<h1>Select Material Size </h1>'
				+'<div class="InputSection">'
				+'<div class="row ">'
					

						+'<div class="col-sm-12 col-md-12 col-xl-12" style="margin-bottom:10px;">'
						+'<label>Wood Size (Feet):</label>'
						+ '<select name="woodSizeID" id="woodSizeID" class="form-control select-class"  title="Choose Value" >'
						+ '<option value="-1">Choose Value</option>'
				        + '<option value="600-400"> 8 (Feet) * 4 (Feet)</option>'
				        + '<option value="500-500">4 (Feet) * 4 (Feet)</option>'
				        + '<option value="800-400">12 (Feet) * 4 (Feet)</option>'
				       
				        +'</select>'
				        +'<div id="WoodSizeError" class="ErrorMsg"></div>'
						+'</div>'
						+'<div class="col-sm-12 col-md-12 col-xl-12" style="margin-top:10px;">'
						+'<label>Thickness (inch):</label>'
//						+'</div>'
//						+'<div class="col-sm-12 col-md-12 col-xl-12">'
						+ '<select name="WC_thickness" id="WC_thickness" class="form-control select-class"  title="Choose Value" >'
						+ '<option value="-1">Choose Value</option>'
						for(var t = 11; t <= 18; t++)
							{
							WC_level1 += '<option value="'+t+'"> '+t+'</option>'
							}
						WC_level1 +='</select>'
//						+'<input type="number" min="11" max="18" class="form-control" id="WC_thickness">'
							 +'<div id="WoodThickError" class="ErrorMsg"></div>'
							+'</div>'
						
						+ '</div>'
//						
						+'<center><button id="WCLevelOne" class="btn btn-success">Submit</button></center>'
						+'</div>'
						+'</div>'
						
						
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
