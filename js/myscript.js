$(document).ready(function() {

/*JQuery - SERVICES.HTML///////////////////*/

$(document).ready(function() {
$("#prev_btn").hide();
$("#prev_par").hide();
$("#house_btn").hide();
$("#house_par").hide();
$("#homeless_btn").hide();
$("#homeless_par").hide();
$("#drug_btn").hide();
$("#drug_par").hide();
	});


$("#prev_logo").click(function() {
	  	$("#prev_par").show("slow");
		$("#prev_btn").show("slow");
		$("#house_btn").hide("slow");
		$("#house_par").hide("slow");
		$("#homeless_btn").hide("slow");
		$("#homeless_par").hide("slow");
		$("#drug_btn").hide("slow");
		$("#drug_par").hide("slow");
	});					

$("#house_logo").click(function() {
	  	$("#prev_par").hide("slow");
		$("#prev_btn").hide("slow");
		$("#house_btn").show("slow");
		$("#house_par").show("slow");
		$("#homeless_btn").hide("slow");
		$("#homeless_par").hide("slow");
		$("#drug_btn").hide("slow");
		$("#drug_par").hide("slow");
	});	

$("#homeless_logo").click(function() {
	  	$("#prev_par").hide("slow");
		$("#prev_btn").hide("slow");
		$("#house_btn").hide("slow");
		$("#house_par").hide("slow");
		$("#homeless_btn").show("slow");
		$("#homeless_par").show("slow");
		$("#drug_btn").hide("slow");
		$("#drug_par").hide("slow");
	});							

$("#drug_logo").click(function() {
	  	$("#prev_par").hide("slow");
		$("#prev_btn").hide("slow");
		$("#house_btn").hide("slow");
		$("#house_par").hide("slow");
		$("#homeless_btn").hide("slow");
		$("#homeless_par").hide("slow");
		$("#drug_btn").show("slow");
		$("#drug_par").show("slow");
	});								
	
});