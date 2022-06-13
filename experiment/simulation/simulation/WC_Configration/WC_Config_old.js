var WoodCuttingObj = WoodCuttingObj || {};

//$(function () {
	
	 WCJson = {}
	 RediusMin = 20;
	 RediusFlag = false;
	 originFlag = false;
	 DepthFlag = false;
	 DirectionFlag = false;
	 ToolDBFlag = false;
	 ShapeType = null;
	 SizeFlag = false;
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
						+'<h1>Wood Cutting</h1>'
						+'<div id="WC_canvas"></div>'
						+'</div>'
						+'<div class="col-sm-12 col-md-2 col-xl-2" id="WCuttingConfgration" style="display:none">'
						
						+'</div>'
						+'</div>'
						
						
			$("#mainDiv").html('');
			$("#mainDiv").html(WC_level1);
			
			 paper = Raphael("WC_canvas", 1400, 800);	
			 
			 
			// $('div#WC_canvas').find('> svg,div').css({'border': '1px solid #f00'});
			
			$("#WCLevelOne").click(function(){
				WoodCuttingObj.LevelOneSubmit(); 
			});
			
			$("#ExpandDiv").click(function(){
				if($("#WoodCuttingSection").hasClass("Expanded"))
					{
					$("#WoodCuttingSection").removeClass("col-sm-12 col-md-7 col-xl-8 Expanded").addClass("col-sm-12 col-md-9 col-xl-10");
					$("#WCuttingConfgration").css("display","none");
					}
				else{
					$("#WoodCuttingSection").removeClass("col-sm-12 col-md-9 col-xl-10").addClass("col-sm-12 col-md-7 col-xl-8 Expanded");
					$("#WCuttingConfgration").css("display","inline");
				}
				 
			})
		}
	
	 	WoodCuttingObj.LevelOneSubmit = function(){
	
	 		WoodSize = $('#woodSizeID option:selected').val();
			 Thickness = $('#WC_thickness option:selected').val();
			 
			 if(WoodSize != -1 && Thickness != -1 )
				 {
				 WoodSize = $('#woodSizeID option:selected').val();
				 WCJson.WC_width = parseInt(WoodSize.split('-')[0]);
				 WCJson.WC_height = parseInt(WoodSize.split('-')[1]);
				 WCJson.WC_thickness =parseInt( $('#WC_thickness').val());
				 WCJson.WoodSizeSelectedVal = WoodSize;
				 WoodCuttingObj.LevelTwoConfig(WCJson);
				 $("#WoodSizeError, #WoodThickError").html('');
				 
				// WCJson.WC_Origin_X =  0;
				// WCJson.WC_Origin_Y  = 0;					 
			     plywood(WCJson.WC_width,WCJson.WC_height);
					 
				 }else if(WoodSize == -1 && Thickness == -1)
				 {
					 $("#WoodSizeError, #WoodThickError").html('');
					 alertify.alert('Warning!!','Please select all field' );
					 $(".ajs-header").css("background-color","#ce6058");
					
				 }else{
					 if(WoodSize == -1)
						 {
						 $(" #WoodThickError").html('');
						 $("#WoodSizeError").html('Please select wood Size!!' );
						 
						}else {
							$("#WoodSizeError").html('');
							$("#WoodThickError").html('Please select wood Thickness!!' );
							 
						}
				 }
	
	 	}
	 
	 console.log(WCJson);
	 
	 WoodCuttingObj.LevelTwoConfig = function(WCJson){
	 	$("#ConfigSection").html('');
	 	
	 	var WC_level2drawing = '';
	 	WC_level2drawing +='<h1>Drawing</h1>'
	 		+'<div class="InputSection">'
	 		+'<i class="fa fa-angle-double-left BackSymbol" aria-hidden="true" ></i>'
	 		+'<div id="symbolLibary"><span><img src="simulation/images/circle.png" class="SymbolImg" onClick="DrawCircle()"></span>'
	 		+'<span><img src="simulation/images/square.png" class="SymbolImg" onclick="DrawSquare()"></span>'
	 		+'<span><img src="simulation/images/eclipse.png" class="SymbolImg" onclick="DrawEllipse()"></span>'
	 		+'<span><img src="simulation/images/Polygon.png" class="SymbolImg" onclick="DrawPolygon()"></span></div>'
	 		+'<div id="ShapeConfigModel" class="col-sm-12 col-md-12 col-xl-12"></div>'
	 		+'</div>'
		$("#ConfigSection").html(WC_level2drawing);
	 	
	 	$(".BackSymbol").click(function(){
	 		$("#WCLevelTwo, #WCSquareDraw, #WCEllipseDraw").prop("disabled", false);
	 		$("#symbolLibary").css("display","inline");
	 		$(".BackSymbol, #ExpandDiv").css("display","none");
	 		$("#ShapeConfigModel").html('');
	 		
	 		if($("#WoodCuttingSection").hasClass("Expanded"))
			{
			$("#WoodCuttingSection").removeClass("col-sm-12 col-md-7 col-xl-8 Expanded").addClass("col-sm-12 col-md-9 col-xl-10");
			$("#WCuttingConfgration").css("display","none");
			}
//	 		if(WCJson.WC_Redius WCJson.WC_Origin_X WCJson.WC_Origin_Y)
	 		
	 		if (WCJson.hasOwnProperty('WC_Redius')) {
	 				delete WCJson["WC_Redius"];
	 				RediusFlag = false ; 
	 			}
	 			if (WCJson.hasOwnProperty('WC_Origin_X')) {
	 				delete WCJson["WC_Origin_X"];
	 				originFlag = false;
	 				SQoriginFlag = false;
	 			}
	 			if (WCJson.hasOwnProperty('WC_Origin_Y')) {
	 				delete WCJson["WC_Origin_Y"];
	 				originFlag = false;
	 				SQoriginFlag = false;
	 			}
	 			if (WCJson.hasOwnProperty('CutDepth')) {
	 				delete WCJson["CutDepth"];
	 				DepthFlag = false ; 
	 			}
	 			if (WCJson.hasOwnProperty('CuttingDirection')) {
	 				delete WCJson["CuttingDirection"];
	 				DirectionFlag = false;
	 			}
	 			if (WCJson.hasOwnProperty('StDDepth')) {
	 				delete WCJson["StDDepth"];
	 				DepthFlag = false;
	 			}
	 			if (WCJson.hasOwnProperty('ToolDatabase')) {
	 				delete WCJson["ToolDatabase"];
	 				ToolDBFlag = false;
	 			}
	 			if (WCJson.hasOwnProperty('EllipseX')) {
	 				delete WCJson["EllipseX"];
	 				SizeFlag = false ; 
	 			}
	 			if (WCJson.hasOwnProperty('EllipseY')) {
	 				delete WCJson["EllipseY"];
	 				SizeFlag = false ; 
	 			}
	 			if (WCJson.hasOwnProperty('SquareX')) {
	 				delete WCJson["SquareX"];
	 				XSizeFlag = false ; 
	 			}
	 			if (WCJson.hasOwnProperty('SquareY')) {
	 				delete WCJson["SquareY"];
	 				YSizeFlag = false ; 
	 			}
	 			if (WCJson.hasOwnProperty('CornerType')) {
	 				delete WCJson["CornerType"];
	 				SizeFlag = false ; 
	 			}
	 			
	 				
	 	});
	 	
	 	
	 	DrawCircle = function()
	 	{
	 		DrawCircleObj.Circle()
	 	}
	 	
	 	DrawEllipse = function()
	 	{
	 		DrawEllipseObj.Ellipse();
	 	}
	 	
	 	DrawSquare = function()
	 	{
	 		DrawSquareObj.Square();
	 	}
	 	DrawPolygon = function()
	 	{
	 		DrawPolygonObj.Polygon();
	 	}
	 }
	 	
	 WoodCuttingObj.CuttingWoodconfic = function(WCJson)
	 	{
		 $("#WoodCuttingSection").removeClass("col-sm-12 col-md-9 col-xl-10").addClass("col-sm-12 col-md-7 col-xl-8 Expanded");
			$("#WCuttingConfgration, #ExpandDiv").css("display","inline");
			//$("#WCLevelTwo, #WCSquareDraw, #WCEllipseDraw").prop("disabled", true);
			
		    WCuttingCinfigHtm ='';
		    WCuttingCinfigHtm +='<div class="row" id="WCDepth">'
		    +'<h1>Cutting Configration</h1>'
		    +'<img src="simulation/images/WCMachin.png" >'
		    +'<p>Cutting Depth</p>'
		    +'<label class="col-sm-12 col-md-12 col-xl-12">'
			+'Start Depth<input type="number"  class="form-control" id="StDDepth" value="0" disabled> '
			+'</label>'
			
			+'<label class="col-sm-12 col-md-12 col-xl-12">'
			+'Cut Depth<input type="number" class="form-control" id="CutDepth" value="'+(parseInt(WCJson.WC_thickness) + 1)+'"> '
			+'</label>'
			+'<div id="DepthError" class="ErrorMsg"></div>'
			
		    
			 +'<p>Cutting Direction</p>'
			+'<label class="col-sm-12 col-md-12 col-xl-12" style="text-align: center;">'
			+'<span class="Rotation"><input type="radio" name="CuttingDirection" id="CuttingDirection" value="Anticlockwise" >&nbsp;&nbsp;<i class="fa fa-undo" aria-hidden="true"></i></span> '
//			+'</label>'
//			+'<label class="col-sm-6 col-md-6 col-xl-6">'
			+'<span class="Rotation"><input type="radio" name="CuttingDirection" id="CuttingDirection" value="Clockwise"  >&nbsp;&nbsp;<i class="fa fa-repeat" aria-hidden="true"></i></span>'
			+'</label>'
			+'<div id="DirectionError" class="ErrorMsg"></div>'
//			 +'<h1>Tool</h1>'
			+'<div class="ToolSection row">'
			 +'<h3><span style="margin-top:10px">Tool</span> <button class="btn btn-primary float-right" data-toggle="modal" data-target="#SelectToolModel" id="SelectToolBtn">Select</button></h3>'
			 +'<label class="col-sm-12 col-md-12 col-xl-12" style="text-align: left;" id="WCToolname"></label>'
			 +'<div id="ToolDBError" class="ErrorMsg"></div>'
			 +'</div>'
			 +'<div class="col-sm-12 col-md-12 col-xl-12">'
			 +'<center><button type="button" class="btn btn-success" data-dismiss="modal" id="WCAmimationBtn" disabled>Start Animation</button>'
			 +'<button type="button" class="btn btn-info"  id="WCReloadBtn">Reload</button></center>'
			+'</div>'
	
			+'</div>'
					+'<div class="modal" id="SelectToolModel">'
					+'<div class="modal-dialog">'
					+'<div class="modal-content">'

			    
					+'<div class="modal-header">'
					+'<h4 class="modal-title">Tool Database</h4>'
					+' <button type="button" class="close" data-dismiss="modal" onclick="ToolClose()">&times;</button>'
					+'</div>'

			   
					+'<div class="modal-body">'
					+'<label class="col-sm-12 col-md-12 col-xl-12">Tool Name</label>'
					+ '<select name="ToolList" id="ToolList" class="form-control select-class"  title="Choose Value" >'
					+ '<option value="-1">Choose Value</option>'
					for(var t = 0; t < ToolList.length; t++)
						{
						WCuttingCinfigHtm += '<option value="'+ToolList[t]+'" onChange="alert("hello")"> '+ToolList[t]+'</option>'
						}
		    WCuttingCinfigHtm +='</select>'
//		    			+'<div id="ToolInfo"></div>'
		    			
		    				WCuttingCinfigHtm +='<div class="ToolSection row"><div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">'
							+ '<label for="ToolName" class="mb-2 mr-sm-2">Tool Name:</label>'
							+ '<input type="text"   class="form-control mb-2 mr-sm-2" id="ToolName" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Tool Name'
							+ '</div>'
							+'</div>'
							+'<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">'
							+ '<label for="ToolType" class="mb-2 mr-sm-2">Tool Type:</label>'
							+ '<input type="text"   class="form-control mb-2 mr-sm-2" id="ToolType" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Tool type'
							+ '</div>'
							+'</div>'
							+'</div>'
							
							+'<div class="ToolSection row">'
							+'<h3>Geometry</h3>'
							+'<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="Diameter" class="mb-2 mr-sm-2">Diameter (D) (mm):</label>'
							+ '<input type="text" min="0"  class="form-control mb-2 mr-sm-2" id="NDiameter" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Diameter '
							+ '</div>'
							+'</div>'
							+'</div>'
							+'<div class="ToolSection row">'
							+'<h3>Cutting Paramater</h3>'
							+'<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="Diameter" class="mb-2 mr-sm-2">Pass Depth (mm):</label>'
							+ '<input type="text" min="0"  class="form-control mb-2 mr-sm-2" id="PassDepth" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Pass Depth '
							+ '</div>'
							+'</div>'
							+'<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="StepOver" class="mb-2 mr-sm-2">Step Over (mm):</label>'
							+ '<input type="number" min="0"  class="form-control mb-2 mr-sm-2" id="StepOver" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Step Over '
							+ '</div>'
							+'</div>'
							+'<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="per" class="mb-2 mr-sm-2">Percentage (%):</label>'
							+ '<input type="number" min="0"  class="form-control mb-2 mr-sm-2" id="per" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter percentage '
							+ '</div>'
							+'</div>'
							+'</div>'
							
							+'<div class="ToolSection row">'
							+'<h3>Feeds and Speeds</h3>'
							+'<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="SpindleSpeed" class="mb-2 mr-sm-2">Spindle Speed (r.p.m):</label>'
							+ '<input type="number" min="0"  class="form-control mb-2 mr-sm-2" id="SpindleSpeed" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Spindle Speed '
							+ '</div>'
							+'</div>'
							+'<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="FeedRate" class="mb-2 mr-sm-2">Feed Rate (mm/sec):</label>'
							+ '<input type="number" min="0"  class="form-control mb-2 mr-sm-2" id="FeedRate" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Feed Rate '
							+ '</div>'
							+'</div>'
							+'<div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="PlungeRate" class="mb-2 mr-sm-2">Plunge Rate (mm):</label>'
							+ '<input type="number" min="0"  class="form-control mb-2 mr-sm-2" id="PlungeRate" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter Plunge Rate '
							+ '</div>'
							+'</div>'
							+'</div>'
							+'<div class="ToolSection row">'
							+'<div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">'
							+ '<label for="ToolNumber" class="mb-2 mr-sm-2">Tool Number:</label>'
							+ '<input type="number" min="0"  class="form-control mb-2 mr-sm-2" id="ToolNumber" value="" required >'
							+ '<div class="invalid-feedback "> '
							+ ' Please enter ToolNumber '
							+ '</div>'
							+'</div>'
							+'</div>'
							 +' <center><button type="button" class="btn btn-success" data-dismiss="modal" id="ToolDBSubmit">Submit</button>'
							 +' <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="ToolClose()">Close</button></center>'
		    WCuttingCinfigHtm += '</div>'

			     
			        +' </div>'
			        +'</div>'
			        +'</div>'
			$("#WCuttingConfgration").html('');
			$("#WCuttingConfgration").html(WCuttingCinfigHtm);
		 
			$('#ToolList').on('change', function() {
				$('#SelectToolModel').modal('show');
				ToolName = $('#ToolList option:selected').val();
				$("#WCToolname").text(ToolName);
				for(var t = 0; t < ToolDetails.length; t++)
					{
					if(ToolName == ToolDetails[t].Name)
						{
							 $("#ToolName").val(ToolDetails[t].Name) 
							  $("#ToolType").val(ToolDetails[t].Type);
							  $("#NDiameter").val(ToolDetails[t].Diameter) ;
							  $("#PassDepth").val(ToolDetails[t].PassDepth);
							  $("#StepOver").val(ToolDetails[t].StepOver);
							  $("#per").val(ToolDetails[t].per);
							  $("#SpindleSpeed").val(ToolDetails[t].SpindleSpeed);
							  $("#FeedRate").val(ToolDetails[t].FeedRate);
							  $("#PlungeRate").val(ToolDetails[t].PlungeRate);
							  $("#ToolNumber").val(ToolDetails[t].ToolNumber);
							  ToolDatabase = ToolDetails[t] ;
						}
					
					}
				$('#SelectToolModel').modal('show');
				});
			
			 ToolClose = function(){
				if($('#ToolList option:selected').val() == -1)
					{
					ToolDBFlag = false;
					}
				else{
					
					$("#ToolDBError").html("Please submit the tool details to start animation");
//					 $('#SelectToolModel').modal('show');
				}
			}
			
			$('#ToolDBSubmit').click(function(){
				
				 $("#ToolDBError").html('');
				ToolDatabase = {
						"Name":$("#ToolName").val() ,
						  "Type": $("#ToolType").val(),
						  "Diameter" :$("#NDiameter").val(),
						  "PassDepth":$("#PassDepth").val(),
						  "StepOver":$("#StepOver").val(),
						  "per":$("#per").val(),
						  "SpindleSpeed":$("#SpindleSpeed").val(),
						  "FeedRate":$("#FeedRate").val(),
						  "PlungeRate":$("#PlungeRate").val(),
						  "ToolNumber":$("#ToolNumber").val()
					},
				
				WCJson.ToolDatabase = ToolDatabase;
				ToolDBFlag = true;
				console.log(WCJson);
				
				$("#WCAmimationBtn").prop("disabled",false);
				
				
				})
				
				$('#WCAmimationBtn').click(function(){
					$(".BackSymbol").css("display","none");
					
					if($("#CutDepth").val() != 0)
						{
						$("#DepthError").html('');
						WCJson.StDDepth = $("#StDDepth").val();
						 WCJson.CutDepth = $("#CutDepth").val();
						 DepthFlag = true;
						}
					else
						{
						$("#DepthError").html("Please Enter Cutting Depth");
						 DepthFlag = false;
						
						}
					
					if($('input[name="CuttingDirection"]:checked').val() != null)
					{
					$("#DirectionError").html('');
					WCJson.CuttingDirection = $('input[name="CuttingDirection"]:checked').val();
					 DirectionFlag = true;
					}
				else
					{
					$("#DirectionError").html("Please select Cutting Direction");
					 DirectionFlag = false;
					}
				   
		if(ToolDBFlag == true && DepthFlag == true && DirectionFlag == true)
						{
						triger = true
						WoodCuttingObj.DisabledFields(triger);		    
							
				    console.log(WCJson);
				     $("#WCEditBtn").prop("disabled",false);
				     
				     
				     
				    obj.hide();
			 		drawCuttingTool((WCJson.WC_Origin_X + Ply_x), (WCJson.WC_Origin_Y + ply_y ));
			 		wireJoint1_ToMachine.remove();
			 		wireJoint2_ToNiddle.remove();
			 		curve.remove();
			 		drawToolWire((paper_x + 30),(paper_y + 50) , 110, 100, 10, 90, X_coOrdinate, (Y_coOrdinate - 65), "hsb(0, .75, .75)");
			 		cutDirection = WCJson.CuttingDirection;
			 		
			 		if(ShapeType == "Circle")
					{
			 			
				 		
				 		if(cutDirection == "Clockwise"){
				 			
				 			cutCircle();
				 		}
				 		
				 		if(cutDirection == "Anticlockwise"){
				 			
				 			cutCircle_anticlockwise();
				 		}
					}
			 		
			 		if(ShapeType == "Ellipse")
					{
			 			
			 			
			 			if(cutDirection == "Clockwise"){
				 			
			 				cutEllipse_ClockWise();
				 		}
				 		
				 		if(cutDirection == "Anticlockwise"){
				 			
				 			cutEllipse_AnticlockWise();
				 		}
			 			
			 			
					}
			 		if(ShapeType == "Square")
					{
			 			
			 			if(cutDirection == "Clockwise"){
				 			
			 				cut_square();
				 		}
				 		
				 		if(cutDirection == "Anticlockwise"){
				 			
				 			cut_square_anticlockwise();
				 		}
			 			
			 			
					}
			 		
			 		if(ShapeType == "Polygon")
					{
			 			
			 			if(cutDirection == "Clockwise"){
				 			
			 				cutPolygon();
				 		}
				 		
				 		if(cutDirection == "Anticlockwise"){
				 			
				 			cutPolygon_antiClockwise();
				 		}
			 			
			 			
					}
			 		
			 		
			 		
			 		 
						}	
			 		
			 	else
						{
						alertify.alert('Warning!!','Please check all the field' );
						 $(".ajs-header").css("background-color","#ce6058");
						}	
			 		
			 		
				    
				})
				
//			$('#WCEditBtn').click(function(){
//				triger = false;
//				WoodCuttingObj.DisabledFields(triger);
//			})
				
				$("#WCReloadBtn").click(function(){	
//					paper.clear();
//					obj.remove();
//					wireJoint1_ToMachine.remove();
//					wireJoint2_ToNiddle.remove();
//					curve.remove();
					location.reload();
					//WoodCuttingObj.LevelOneConfig();
				})	
	 	} 	

	 WoodCuttingObj.DisabledFields = function(triger)
	 	{
	 		$("#woodSizeID").prop("disabled",triger);
			$("#WC_thickness").prop("disabled",triger);
			$("#WC_RediusVal").prop("disabled",triger);
			$('input[name="CircleOptions"]').attr("disabled",triger);
			$('input[name="Originoptions"]').attr("disabled",triger);
			$('input[name="OffsetOptions"]').attr("disabled",triger);
			$("#WC_Origin_X").prop("disabled",triger);
 			$("#WC_Origin_Y").prop("disabled",triger);
 			$("#CutDepth").prop("disabled",triger);
 			
 			$("#WCLevelTwo").prop("disabled",triger);
 			$("#SelectToolBtn").prop("disabled",triger);
 			$('input[name="CuttingDirection"]').attr("disabled",triger);
 			
 			// eclipes
 			$('#EllipseX').prop("disabled",triger);
 			$('#EllipseY').prop("disabled",triger);
 			
// 			square
 			$('#SquareX').prop("disabled",triger);
 			$('#SquareY').prop("disabled",triger);
 			$('input[name="SquareOffsetOptions"]').attr("disabled",triger);
			$('input[name="SquareOffsetPosition"]').attr("disabled",triger);
 			$('#WC_SQOrigin_X').prop("disabled",triger);
 			$('#WC_SQOrigin_Y').prop("disabled",triger);
 			
 			$("#WCSquareDraw, #WCEllipseDraw").prop("disabled", triger);
	 	}
	
//});
	














