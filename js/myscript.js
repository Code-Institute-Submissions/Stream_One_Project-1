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


$("#prev_logo").hover(function() {
	  	$("#prev_par").toggle("slow");
		$("#prev_btn").toggle("slow");
		$("#house_btn").hide("slow");
		$("#house_par").hide("slow");
		$("#homeless_btn").hide("slow");
		$("#homeless_par").hide("slow");
		$("#drug_btn").hide("slow");
		$("#drug_par").hide("slow");
	});					

$("#house_logo").hover(function() {
	  	$("#prev_par").hide("slow");
		$("#prev_btn").hide("slow");
		$("#house_btn").toggle("slow");
		$("#house_par").toggle("slow");
		$("#homeless_btn").hide("slow");
		$("#homeless_par").hide("slow");
		$("#drug_btn").hide("slow");
		$("#drug_par").hide("slow");
	});	

$("#homeless_logo").hover(function() {
	  	$("#prev_par").hide("slow");
		$("#prev_btn").hide("slow");
		$("#house_btn").hide("slow");
		$("#house_par").hide("slow");
		$("#homeless_btn").toggle("slow");
		$("#homeless_par").toggle("slow");
		$("#drug_btn").hide("slow");
		$("#drug_par").hide("slow");
	});							

$("#drug_logo").hover(function() {
	  	$("#prev_par").hide("slow");
		$("#prev_btn").hide("slow");
		$("#house_btn").hide("slow");
		$("#house_par").hide("slow");
		$("#homeless_btn").hide("slow");
		$("#homeless_par").hide("slow");
		$("#drug_btn").toggle("slow");
		$("#drug_par").toggle("slow");
	});								
	

		
	});