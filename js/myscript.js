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
	  	$("#prev_par").toggle("slow");
		$("#prev_btn").toggle("slow");
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
		$("#house_btn").toggle("slow");
		$("#house_par").toggle("slow");
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
		$("#homeless_btn").toggle("slow");
		$("#homeless_par").toggle("slow");
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
		$("#drug_btn").toggle("slow");
		$("#drug_par").toggle("slow");
	});								
	


/*Javascript - Donation Form///////////////////*/

var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";
		
		$('.set-amount').autoGrow(0);
		
		/*
			if(isiPad || jQuery.browser.mobile){
				$('#team').hide()
				$('.team-mobile').show();	
			}else{
				$('#team').show()
				$('.team-mobile').hide();
			}
		*/
		
		//Set & Highlight Donation Amount
		$(".button").click(function(){
			$(".button").removeClass("selected");
			$(this).addClass("selected");
			
			$(this).find("input").focus();
		});
		
		//Grow the donation box if they type more than 4 numbers
		$(".set-amount").keyup(function(){
			
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }

		});
		
		
		$("input").on("change", function(){
			// $(".donation-box").css("height", "500px");
			
			firstName = $("#firstName").val();
			lastName = $("#lastName").val();
			email = $("#email").val();
			
			if ( $("#one-time").prop( "checked" ) ){
				dType = "One-Time";
			}
			if ( $("#monthly").prop( "checked" ) ){
				dType = "Monthly";
			}

		});
		
		});