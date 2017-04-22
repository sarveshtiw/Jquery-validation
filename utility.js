$(function(argument) {
      $('.switchButton').bootstrapSwitch('onColor', 'retrogreen');
      $(".switchButton").bootstrapSwitch('offColor', 'danger');
    });

$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip();
        
	$("#segments").select2();
	$("#addFilters").select2();

	// Timeline Page

        $('select[multiple].SlectBox').SumoSelect({csvDispCount:7, placeholder:"Select Trigger Type"});



	$('.box.grey h2').click(function(){
		$(this).parent('.box').toggleClass('active');
	});


        $('select[multiple].SlectBox').SumoSelect({csvDispCount:7, placeholder:"Select Trigger Type"});
	$('.SlectBox').SumoSelect();




	//Mobile Menu
	$('.menuIcon').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('activeMenu');
		$('.main-menu').toggleClass('visible');
	});

	$('input[name="pushType"]').click(function(){
		var pushType = $("input[name='pushType']:checked").val();
		var baseurl = $("#baseurl").val();
		var groupId = $("#groupId").val();
		var additional_profit = $("#additional_profit").val();
		if(pushType == 'android'){
			if(additional_profit == 1){

				$(".platform").hide();
			    $('.defaultBtns').hide();
			    $('#showForm, .firstBtns').show();
			    $("#campaignName").css('border-color','#ccc');
			    $("#error_campaignName").text("");
			    $("#selectedPlatform").val('android');

				/*$.ajax({
			        type: "POST",
			        url: baseurl + 'groupApp/getOneGroup',
			        data: "groupId=" + groupId,
			        context: document.body,
			        async: true,
			        success: function(data) {
			        	//alert(data);return false;
			    		if(data == 1){
			    			$(".platform").hide();
			    			$('.defaultBtns').hide();
			    			$('#showForm, .firstBtns').show();
			    			$("#campaignName").css('border-color','#ccc');
			    			$("#error_campaignName").text("");
			    			$("#selectedPlatform").val('android');
			    		}else{
			    			$(".platform").show();
			    			$("#error_platform").html("You don't have any Android Push Notification credentials for this app. <a style='color:#424241;text-decoration: underline;' href='"+baseurl+"groupApp/appGroups/"+groupId+"'>Visit the App Settings page to set up credentials for your apps.</a>");

			    		}
			        }
			    });*/
			}else{
				var totalAndroidCampaign = $("#totalAndroidCampaign").val();

				if(totalAndroidCampaign > 0 || totalAndroidCampaign == 'unlimited'){

					$(".platform").hide();
				    $('.defaultBtns').hide();
				    $('#showForm, .firstBtns').show();
				    $("#campaignName").css('border-color','#ccc');
				    $("#error_campaignName").text("");
				    $("#selectedPlatform").val('android');

					/*$.ajax({
				        type: "POST",
				        url: baseurl + 'groupApp/getOneGroup',
				        data: "groupId=" + groupId,
				        context: document.body,
				        async: true,
				        success: function(data) {
				        	//alert(data);return false;
				    		if(data == 1){
				    			$(".platform").hide();
				    			$('.defaultBtns').hide();
				    			$('#showForm, .firstBtns').show();
				    			$("#campaignName").css('border-color','#ccc');
				    			$("#error_campaignName").text("");
				    			$("#selectedPlatform").val('android');
				    		}else{
				    			$(".platform").show();
				    			$("#error_platform").html("You don't have any Android Push Notification credentials for this app. <a style='color:#424241;text-decoration: underline;' href='"+baseurl+"groupApp/appGroups/"+groupId+"'>Visit the App Settings page to set up credentials for your apps.</a>");

				    		}
				        }
				    });*/
				}else{
					$(".platform").show();
	    			$("#error_platform").html("<p>You don't have enough android push notification campaign. <a style='color: #424141;text-decoration: underline;' href='"+baseurl+"appUser/store' class='modalPopup' title='Hurree Store' data-title='Hurree Store' data-class='tips submitOffer2 addOverflow'>Please purchase extra campaigns</a></p>");
				}
			}

		}else{
			var groupId = $("#groupId").val();
			if(additional_profit == 1){

				$(".platform").hide();
			    $('.defaultBtns').hide();
			    $("#showForm_ios").show();
			    $("#campaignName").css('border-color','#ccc');
			    $("#error_campaignName").text("");
			    $('.firstBtns').show();
			    $("#selectedPlatform").val('iOS');
				/*$.ajax({
			        type: "POST",
			        url: baseurl + 'groupApp/getOneGroupIOS',
			        data: "groupId=" + groupId,
			        context: document.body,
			        async: true,
			        success: function(data) {

			    		if(data == 1){
			    			$(".platform").hide();
			    			$('.defaultBtns').hide();
			    			$("#showForm_ios").show();
			    			$("#campaignName").css('border-color','#ccc');
			    			$("#error_campaignName").text("");
			    			$('.firstBtns').show();
			    			$("#selectedPlatform").val('iOS');
			    		}else{
			    			$(".platform").show();
			    			$("#error_platform").html("You don't have any iOS Push Notification credentials for this app. <a style='color:#424241;text-decoration: underline;' href='"+baseurl+"groupApp/appGroups/"+groupId+"'>Visit the App Settings page to set up credentials for your apps.</a>");

			    		}
			        }
			    });*/
			}else{
				var totaliOSCampaign = $("#totaliOSCampaign").val();
				if(totaliOSCampaign > 0 || totaliOSCampaign == 'unlimited'){

					$(".platform").hide();
			    	$('.defaultBtns').hide();
			    	$("#showForm_ios").show();
			    	$("#campaignName").css('border-color','#ccc');
			    	$("#error_campaignName").text("");
			    	$('.firstBtns').show();
			    	$("#selectedPlatform").val('iOS');
				/*$.ajax({
			        type: "POST",
			        url: baseurl + 'groupApp/getOneGroupIOS',
			        data: "groupId=" + groupId,
			        context: document.body,
			        async: true,
			        success: function(data) {

			    		if(data == 1){
			    			$(".platform").hide();
			    			$('.defaultBtns').hide();
			    			$("#showForm_ios").show();
			    			$("#campaignName").css('border-color','#ccc');
			    			$("#error_campaignName").text("");
			    			$('.firstBtns').show();
			    			$("#selectedPlatform").val('iOS');
			    		}else{
			    			$(".platform").show();
			    			$("#error_platform").html("You don't have any iOS Push Notification credentials for this app. <a style='color:#424241;text-decoration: underline;' href='"+baseurl+"groupApp/appGroups/"+groupId+"'>Visit the App Settings page to set up credentials for your apps.</a>");

			    		}
			        }
			    });*/
				}else{
					$(".platform").show();
	    			$("#error_platform").html("<p>You don't have enough iOS push notification campaign. <a style='color: #424141;text-decoration: underline;' href='"+baseurl+"appUser/store' class='modalPopup' title='Hurree Store' data-title='Hurree Store' data-class='tips submitOffer2 addOverflow'>Please purchase extra campaigns</a></p>");
				}
			}

		}


	});

	//$('.date').datepicker({autoclose:true});

	$(function() {
		  $(".date").datepicker({
		    format: "dd-mm-yyyy",
		    startDate: 'today',
                    todayHighlight: true,
		    defaultDate: new Date()
		  }).datepicker("setDate", new Date());
		});

	/* $(".date").on('changeDate', function (ev) {
	     $(this).datepicker('hide');
	}); */

	$(function() {
		  $("#beginning_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});


	$(function() {
		  $("#ending_on_the_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#weeks_ending_on_the_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#monthly_ending_on_the_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});


	$(function() {
		  $("#intelligent_daily_ending_on_the_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});


	$(function() {
		  $("#intelligent_weekly_ending_on_the_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#intelligent_monthly_ending_on_the_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#weeks_beginning_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#month_beginning_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#intelligent_onDate").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});


	$(function() {
		  $("#intelligent_beginning_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});


	$(function() {
		  $("#intelligent_weeks_beginning_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#intelligent_month_beginning_date").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		  $("#actionDeliveryStartDate").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", new Date());
		});

	$(function() {
		var date = new Date();
		date.setDate(date.getDate() + 1);
		  $("#actionDeliveryEndDate").datepicker({
		    format: "yyyy-mm-dd"
		  }).datepicker("setDate", date);
		});


	$('input[name="atlaunch"]').click(function(){

		if($('#atlaunch1').is(":checked")){
			 $("#atlaunch_reEligible").show();
		 }else{
			 $("#atlaunch_reEligible").hide();
		 }
	});

	$('input[name="designatedtime"]').click(function(){
		if($('#designatedtime2').is(":checked")){
			 $("#designatedTime_reEligible").show();
		 }else{
			 $("#designatedTime_reEligible").hide();
		 }

	});

	//intelliSent
	$('input[name="intelliSent"]').click(function(){

		if($('#intelliSent2').is(":checked")){
			 $("#intelligentTime_reEligible").show();
		 }else{
			 $("#intelligentTime_reEligible").hide();
		 }

	});

	$('input[name="intelliSent"]').click(function(){

		if($('#intelliSent1').is(":checked")){
			 $("#specificPortion").show();
		 }else{
			 $("#specificPortion").hide();
		 }
	});

	$('input[name="campDuration"]').click(function(){

		if($('#campDuration1').is(":checked")){
			 $("#actionDelivery_specificPortion").show();
		 }else{
			 $("#actionDelivery_specificPortion").hide();
		 }
	});

	$('input[name="campDuration"]').click(function(){

		if($('#campDuration2').is(":checked")){
			 $("#actionDelivery_reEligible").show();
		 }else{
			 $("#actionDelivery_reEligible").hide();
		 }
	});



	$('.tabs li:first-child').addClass('active');

	$('input[name="deliveryType"]').click(function(){
		var showDV = $(this).val();
		$('.delivery.hiddenDV').removeClass('active');
		$('#'+showDV).addClass('active');
	});

	$('input[name="timeBased"]').click(function(){
		var showDV = $(this).val();
		$('.wrap .hiddenDV').removeClass('active');
		$('#'+showDV).addClass('active');
	});

	$('input[name="timeBased"]').click(function(){
		if($('#designatedTime').is(":checked") || $('#intelligentDelivery').is(":checked")){
			 $("#atlaunch_reEligible").hide();
		 }

		else if($('#atlaunch1').is(":checked")){
			$("#atlaunch_reEligible").show();
			}
	});



	$('#segments li').click(function(){
		var addSegment = $(this).attr('data-val');
		$('#segments .CaptionCont.SlectBox > span').empty().text('+ Add Segment From Here');
		$(this).remove();
		$('#segmentWrap').append('<span>'+addSegment+'</span>');
	});


	$('#filters li').click(function(){
		if(!$(this).hasClass(':not(.selected)')){alert()
		}

	});

	//$("#addFilters").select2({search:true});
	//$("#segments").select2({search:true});


	/* $(document).on('click', '.tags span', function(){
		$(this).remove();
	}); */

	$('#plainEditor').on('change', function(){
		var showElem = $(this).prop('checked');
		if(showElem){
			$('#plainText').show();
		}
		else{
			$('#plainText').hide();
		}
	});

	$('.tabber li').click(function(e){
		e.preventDefault();
		$('.tabber li').removeClass('active');
		$(this).addClass('active');

		var showTab = $(this).find('a').attr('href');
		$('.tab-content .content').hide();
		$(showTab).show();
	});

	$('#uploadImage .block .img img').click(function(){
		$('#uploadImage').find('.dropdown-menu').toggleClass('open');
	});
	$('#uploadImage .dropdown-menu a').click(function(){
		$(this).parents('.dropdown-menu').removeClass('open');
	});

	$('.userType:first').show();
	$('input[name="userType"]').on('change', function(){
		var showType = $(this).val();
		$('.userType').hide();
		$('#'+showType).show();
	});

	$("#send").change(function(){
	    var option = $("#send").val();
	    if(option == 'daily'){
	    	$("#onDate").css('display','none');
			$("#daily").css('display','block');
			$("#weekly").css('display','none');
			$("#monthly").css('display','none');
	    }
	    if(option == 'once'){
	    	$("#onDate").css('display','block');
	    	$("#daily").css('display','none');
	    	$("#weekly").css('display','none');
	    	$("#monthly").css('display','none');
	    }
	    if(option == 'weekly'){
		    $("#weekly").css('display','block');
		    $("#onDate").css('display','none');
		    $("#daily").css('display','none');
		    $("#monthly").css('display','none');
	    }
	    if(option == 'monthly'){
	    	$("#monthly").css('display','block');
	    	$("#onDate").css('display','none');
		    $("#daily").css('display','none');
		    $("#weekly").css('display','none');
	    }
	});

	$("#ending").change(function(){
		var option = $("#ending").val();
		if(option == 'on_the_date'){
			$("#section_ending_on_the_date").css('display','block');
			$("#section_ending_after_occurances").css('display','none');
		}
		if(option == 'never'){
			$("#section_ending_on_the_date").css('display','none');
			$("#section_ending_after_occurances").css('display','none');
		}
		if(option == 'after'){
			$("#section_ending_on_the_date").css('display','none');
			$("#section_ending_after_occurances").css('display','block');
		}
	});

	$("#weeks_ending").change(function(){
		var option = $("#weeks_ending").val();
		if(option == 'on_the_date'){
			$("#section_weeks_ending_on_the_date").css('display','block');
			$("#section_weeks_ending_after_occurances").css('display','none');
		}
		if(option == 'never'){
			$("#section_weeks_ending_on_the_date").css('display','none');
			$("#section_weeks_ending_after_occurances").css('display','none');
		}
		if(option == 'after'){
			$("#section_weeks_ending_on_the_date").css('display','none');
			$("#section_weeks_ending_after_occurances").css('display','block');
		}
	});

	$("#month_ending").change(function(){
		var option = $("#month_ending").val();
		if(option == 'on_the_date'){
			$("#section_monthly_ending_on_the_date").css('display','block');
			$("#section_monthly_ending_after_occurances").css('display','none');
		}
		if(option == 'never'){
			$("#section_monthly_ending_on_the_date").css('display','none');
			$("#section_monthly_ending_after_occurances").css('display','none');
		}
		if(option == 'after'){
			$("#section_monthly_ending_on_the_date").css('display','none');
			$("#section_monthly_ending_after_occurances").css('display','block');
		}

	});

	$("#intelligent_weeks_ending").change(function(){
		var option = $("#intelligent_weeks_ending").val();
		if(option == 'on_the_date'){
			$("#section_intelligent_weekly_ending_on_the_date").css('display','block');
			$("#section_intelligent_weekly_ending_after_occurances").css('display','none');
		}
		if(option == 'never'){
			$("#section_intelligent_weekly_ending_on_the_date").css('display','none');
			$("#section_intelligent_weekly_ending_after_occurances").css('display','none');
		}
		if(option == 'after'){
			$("#section_intelligent_weekly_ending_on_the_date").css('display','none');
			$("#section_intelligent_weekly_ending_after_occurances").css('display','block');
		}

	});

	//custom_url for android
	$("#android_custom_url").change(function(){
		var option = $("#android_custom_url").val();
		if(option == '1'){
			$("#div_android_redirect_url").css('display','block');
			$("#div_android_deep_link").css('display','none');
		}if(option == '2'){
			$("#div_android_deep_link").css('display','block');
			$("#div_android_redirect_url").css('display','none');
		}
		if(option == '3'){
			$("#div_android_redirect_url").css('display','none');
			$("#div_android_deep_link").css('display','none');
		}
	});

	//custom_url for iOS
	$("#ios_custom_url").change(function(){
		var option = $("#ios_custom_url").val();
		if(option == '1'){
			$("#div_ios_redirect_url").css('display','block');
			$("#div_ios_deep_link").css('display','none');
		}
		if(option == '2'){
			$("#div_ios_redirect_url").css('display','none');
			$("#div_ios_deep_link").css('display','block');
		}
		if(option == '3'){
			$("#div_ios_redirect_url").css('display','none');
			$("#div_ios_deep_link").css('display','none');
		}
	});

	$("#intelligent_send").change(function(){
		var intelligent_option = $("#intelligent_send").val();

		if(intelligent_option == 'daily'){
	    	$("#intelligent_on_date").css('display','none');
			$("#intelligent_daily").css('display','block');
			$("#intelligent_weekly").css('display','none');
			$("#intelligent_monthly").css('display','none')
	    }
		if(intelligent_option == 'once'){
	    	$("#intelligent_on_date").css('display','block');
			$("#intelligent_daily").css('display','none');
			$("#intelligent_weekly").css('display','none');
			$("#intelligent_monthly").css('display','none')
	    }

	    if(intelligent_option == 'weekly'){
	    	$("#intelligent_weekly").css('display','block');
	    	$("#intelligent_on_date").css('display','none');
	    	$("#intelligent_daily").css('display','none');
	    	$("#intelligent_monthly").css('display','none');

	    }

	    if(intelligent_option == 'monthly'){
	    	$("#intelligent_monthly").css('display','block');
	    	$("#intelligent_weekly").css('display','none');
	    	$("#intelligent_on_date").css('display','none');
	    	$("#intelligent_daily").css('display','none');
	    }

	});

	$("#intelligent_ending").change(function(){
		var option = $("#intelligent_ending").val();
		if(option == 'on_the_date'){
			$("#section_intelligent_daily_ending_on_the_date").css('display','block');
			$("#section_intelligent_daily_ending_after_occurances").css('display','none');
		}
		if(option == 'never'){
			$("#section_intelligent_daily_ending_on_the_date").css('display','none');
			$("#section_intelligent_daily_ending_after_occurances").css('display','none');
		}
		if(option == 'after'){
			$("#section_intelligent_daily_ending_on_the_date").css('display','none');
			$("#section_intelligent_daily_ending_after_occurances").css('display','block');
		}

	});

	$("#intelligent_month_ending").change(function(){
		var option = $("#intelligent_month_ending").val();
		if(option == 'on_the_date'){
			$("#section_intelligent_monthly_ending_on_the_date").css('display','block');
			$("#section_intelligent_monthly_ending_after_occurances").css('display','none');
		}
		if(option == 'never'){
			$("#section_intelligent_monthly_ending_on_the_date").css('display','none');
			$("#section_intelligent_monthly_ending_after_occurances").css('display','none');
		}
		if(option == 'after'){
			$("#section_intelligent_monthly_ending_on_the_date").css('display','none');
			$("#section_intelligent_monthly_ending_after_occurances").css('display','block');
		}

	});

	$("#scheduleDelay").change(function(){

		var scheduleDelay = $("#scheduleDelay").val();

		if(scheduleDelay == 'After'){
			$("#after").css('display','block');
			$("#unless_the_user").css('display','block');
			$("#on_the_next").css('display','none');
		}

		if(scheduleDelay == 'Immediately'){

			$("#after").css('display','none');
			$("#unless_the_user").css('display','none');
			$("#on_the_next").css('display','none');
		}

		if(scheduleDelay == 'On the next'){

			$("#on_the_next").css('display','block');
			$("#unless_the_user").css('display','block');
			$("#after").css('display','none');
		}


		$("#deliveryTime").change(function(){

			var deliveryTime = $("#deliveryTime").val();
			if(deliveryTime == 'at'){
				$("#at").show();
			}
			else{
				$("#at").hide();
			}
		});

	});


	$('input[name="actionDeliveryEndTimeEnabled"]').click(function(){
		if($('#actionDeliveryEndTimeEnabled').is(":checked")){
			$(".editEndTime .SumoSelect").addClass("disabled");
			$("#actionDeliveryEndDate").prop("disabled", true);
			$("#actionDeliveryEndHours").prop("disabled", true);
			$("#actionDeliveryEndMins").prop("disabled", true);
			$("#actionDeliveryEndAm").attr('disabled', 'disabled');
		}else{
			$(".editEndTime .SumoSelect").removeClass("disabled");
			$("#actionDeliveryEndDate").prop("disabled", false);
			$("#actionDeliveryEndHours").prop("disabled", false);
			$("#actionDeliveryEndMins").prop("disabled", false);
			$("#actionDeliveryEndAm").removeAttr("disabled");
		}

	});
	$('input[name="targetUsers_whoWillReceiveCampaign"]').click(function(){

		if($('#targetUsers_whoWillReceiveCampaign').is(":checked")){

			 $("#selectedUsers").show();
		 }else{

			 $("#selectedUsers").hide();
		 }
	});

	//send_this_push_to_users_most_recently_used_device
	$('input[name="send_this_push_to_users_most_recently_used_device"]').click(function(){

		if($('#send_this_push_to_users_most_recently_used_device').is(":checked")){

			 $("#messages_per_minute_block").show();
		 }else{

			 $("#messages_per_minute_block").hide();
		 }
	});

	$('input[name="copy_push"]').click(function(){
		var selectedPlatform = $("#selectedPlatform").val();
		var androidCrentials = parseInt($("#androidCrentials").val());
		var iosCredentials = parseInt($("#iosCredentials").val());

	if($('#copy_push').is(":checked")){
		if(selectedPlatform == 'iOS'){
			$("#copy_title").css('display','block');
			$("#check_title").css({'display':'block','float':'right'});
			if(iosCredentials == 0){
				$("#androidCredentialsPopUp").css('display','none');
				$("#iOSCredentialsPopUp").css('display','none');
				$("#saveCampaign").css({'display':'none'});
			}else{
				$("#androidCredentialsPopUp").css('display','none');
				$("#iOSCredentialsPopUp").css('display','none');
				$("#saveCampaign").css({'display':'none'});
			}

		}else{
			$("#copy_title").css('display','none');
			$("#check_title").css('display','none');

			if(androidCrentials == 0){
				$("#androidCredentialsPopUp").css('display','block');
				$("#saveCampaign").css({'display':'none'});
			}else{
				$("#saveCampaign").css('display','block');
				$("#androidCredentialsPopUp").css('display','none');
			}


			$("#copy_title").css('border-color', '#ccc');
			$("#error_copy_title").text('');
		}
	}else{
		$("#copy_title").css('display','none');
		$("#check_title").css('display','none');

				if(selectedPlatform == 'android'){
					if(androidCrentials == 0){
		                $("#saveCampaign").css('display','none');
		                $("#iOSCredentialsPopUp").css('display','none');
		                $("#androidCredentialsPopUp").css('display','block');
		            }else{
		                $("#saveCampaign").css('display','block');
		                $("#iOSCredentialsPopUp").css('display','none');
		                $("#androidCredentialsPopUp").css('display','none');
		            }
	        	}

				if(selectedPlatform == 'iOS'){
					if(iosCredentials == 0){
		                $("#saveCampaign").css('display','none');
		                $("#iOSCredentialsPopUp").css('display','block');
		                $("#androidCredentialsPopUp").css('display','none');
		            }else{
		                $("#saveCampaign").css('display','block');
		                $("#iOSCredentialsPopUp").css('display','none');
		                $("#androidCredentialsPopUp").css('display','none');
		            }
				}

		$("#copy_title").css('border-color', '#ccc');
		$("#error_copy_title").text('');
	}
	});

	$('#copy_title').on('keyup',function(){
		var input = $(this);
		var selectedPlatform = $("#selectedPlatform").val();
		var androidCrentials = parseInt($("#androidCrentials").val());
		var iosCredentials = parseInt($("#iosCredentials").val());
		if(input.val().length > 0){
			$("#check_title").css('display','none');
				if(selectedPlatform == 'android'){
					if(androidCrentials == 0){
		                $("#saveCampaign").css('display','none');
		                $("#iOSCredentialsPopUp").css('display','none');
		                $("#androidCredentialsPopUp").css('display','block');
		            }else{
		                $("#saveCampaign").css('display','block');
		                $("#iOSCredentialsPopUp").css('display','none');
		                $("#androidCredentialsPopUp").css('display','none');
		            }
	        	}

				if(selectedPlatform == 'iOS'){
					if(iosCredentials == 0){
		                $("#saveCampaign").css('display','none');
		                $("#iOSCredentialsPopUp").css('display','block');
		                $("#androidCredentialsPopUp").css('display','none');
		            }else{
		                $("#saveCampaign").css('display','block');
		                $("#iOSCredentialsPopUp").css('display','none');
		                $("#androidCredentialsPopUp").css('display','none');
		            }
				}
			//$("#saveCampaign").css({'display':'block','float':'right'});

			$("#copy_title").css('border-color', '#ccc');
			$("#error_copy_title").text('');
		}else{
			$("#check_title").css({'display':'block','float':'right'});
			$("#error_copy_title").text('Please enter title');
			$("#copy_title").css('border-color', '#424141');
			$("#androidCredentialsPopUp").css('display','none');
			$("#iOSCredentialsPopUp").css('display','none');
			$("#saveCampaign").css({'display':'none'});
		}
	});

	$('#preview').on('change', function() {
		  if(this.value == 'email'){
			$("#email_preview").css('display','block');
			$("#push_preview").css('display','none');
			$("#ios_push_preview").css('display','none');
		  }
		  if(this.value == 'push'){
			  $("#push_preview").css('display','block');
			  $("#email_preview").css('display','none');
			  $("#ios_push_preview").css('display','none');
		  }
		  if(this.value == 'ios_push'){
			  $("#push_preview").css('display','none');
			  $("#email_preview").css('display','none');
			  $("#ios_push_preview").css('display','block');
		  }
		});


	$("#segments").change(function(){

		var scheduleDelay = $("#segments").val();
		var text = $('#'+scheduleDelay+'segment').html();

			$("#"+scheduleDelay+"segment").remove();
			$("#segmentWrap").append('<span id="'+scheduleDelay+'segment" onclick="removeSegment(\''+scheduleDelay+'\',\''+text+'\')">'+text+'</span>');


	});


$("#addFilters").change(function(){

		var addFilters = $("#addFilters").val();
		var text = $('#'+addFilters+'filter').html();

			$("#"+addFilters+"filter").remove();
			$("#filterWrap").append('<span id="'+addFilters+'filter" onclick="removeFilter(\''+addFilters+'\',\''+text+'\')">'+text+'</span>');

	});

});


$(document).bind("click",function(e){
	//console.log(e['currentTarget']['activeElement'].className);
	if(e['currentTarget']['activeElement'].className == 'modalPopup storeButton' || e['currentTarget']['activeElement'].className == 'btn green-btn modalPopup storeButton'){
		if (e.button == 1) {
			e.preventDefault();
			return false;
		}
	}

	if(e['currentTarget']['activeElement'].className == 'modalPopup addAppBtn' || e['currentTarget']['activeElement'].className == 'btn purple-btn modalPopup'){
		if (e.button == 1) {
			e.preventDefault();
			return false;
		}
	}

	if(e['currentTarget']['activeElement'].className == 'modalPopup btn white-btn' || e['currentTarget']['activeElement'].className == 'modalPopup addPersonBtn'){
		if (e.button == 1) {
			e.preventDefault();
			return false;
		}
	}

	if(e['currentTarget']['activeElement'].className == 'btn white-btn facebook modalPopup'){
		if (e.button == 1) {
			e.preventDefault();
			return false;
		}
	}

	if(e['currentTarget']['activeElement'].className == 'btn purple-btn storeButton'){
		if (e.button == 1) {
			e.preventDefault();
			return false;
		}
	}

	if(e['currentTarget']['activeElement'].className == 'btn next storeButton'){
		if (e.button == 1) {
			e.preventDefault();
			return false;
		}
	}

	if(e['currentTarget']['activeElement'].className == 'previewBtn modalPopup'){
		if (e.button == 1) {
			e.preventDefault();
			return false;
		}

	}

});

function removeSegment(id,text){

	$("#"+id+"segment").remove();
		$('#segments').append('<option id="'+id+'segment" value="'+id+'">'+text+'</option>');

	var arr = $('#segments').children('option').sort(function(a,b){
		return $(a).val() - $(b).val()
		}).splice(0);
	$('#segments').empty('').append(arr);

}

function removeFilter(id,text){

	$("#"+id+"filter").remove();
	$('#addFilters').append('<option id="'+id+'filter" value="'+id+'">'+text+'</option>');
	var arr = $('#addFilters').children('option').sort(function(a,b){
		return $(a).val() - $(b).val()
		}).splice(0);
	$('#addFilters').empty('').append(arr);

}

function saveCompnayLogo(){

	var baseurl = $("#baseurl").val();
	var developerLogoImage = $("#developerLogoImage").val();
	var removelogo = $("#removelogo").val();


	if (developerLogoImage != '' || removelogo == '1') {
		$("#loader").css('display','block');
    	$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/savedeveloperLogo',
            data: "pic=" + developerLogoImage, //likeimage 12
            cache: false,
            processData: false,
            contentType: "application/x-www-form-urlencoded",
            success: function(data) {
                //console.log(data);

            	$("#loader").css('display','none');
            	$('#saveResponse').text('Logo updated succesfully!');
            	location.reload();
                if (data == 1) {
                    $('#saveResponse').text('Logo updated succesfully!');

                    return true;
                } else {
                    return false;
                }
            }
        });
    }
}

//Push Notification cropper images changes

$( "#push_img_url" ).keyup(function() {
	var push_img_url = $("#push_img_url").val();
	if(push_img_url != ''){
	  	$("#pushIconImage").css('pointer-events','none');
	}else{
		$("#pushIconImage").css('pointer-events','auto');
	}
	});

$( "#expanded_img_url" ).keyup(function() {
	var expanded_img_url = $("#expanded_img_url").val();
	if(expanded_img_url != ''){
	  	$("#expandedIconImage").css('pointer-events','none');
	}else{
		$("#expandedIconImage").css('pointer-events','auto');
	}
	});

$('#crossPushImage').click(function () {
	$("#push_icon").val("");
	$("#crossPushImage").css('display','none');
	$("#android_app_img").css('display','none');
	$("#push_or").css('display','block');
	$("#push_img_url").css({"display":"block", "position": "relative", "top":"15px"});
	$("#upload_push").val("");
	$("#android_app_img").attr('src', '');
});

$('#crossExpandedImage').click(function () {
	$("#expandedImage").val("");
	$("#crossExpandedImage").css('display','none');
	$("#ios_app_img").css('display','none');
	$("#expanded_or").css('display','block');
	$("#expanded_img_url").css({"display":"block", "position": "relative", "top":"15px"});
	$("#upload_extended").val("");
	$("#ios_app_img").attr('src', '');
});

//End Push Notification cropper images changes

// Developer logo image changes
$('#crossLogoImage').click(function () {
    	 $('#logo').attr('src', 'assets/template/frontend/img/logo.png');
    	 $('#developerLogoImage').attr('value','');
    	 $('#developerimgprv').attr('src','');
    	 $('#developerimgprv').css('display','none');
         $("#crossLogoImage").css('display','none');
         $("#removelogo").val('1');
         $("#defaultImg").css('display','block');
         $("#addDefaultImg").css('display','block');
     });
// End

// In-App Messaging Crop image changes
$('.crossUploadImage').click(function () {
     	 $("#imageUpload").val(0);
    	 $(".imageUrl").css('display','block');
    	 $(".crossUploadImage").css('display','none');
    	 $(".uploadImage").css('pointer-events','auto');
    	 $(".in_app_img").css('display','none');
       	 $(".in_app_img").attr('src', '');
       	 $(".previewImage").css('display','block');
       	 $(".img").css('display','none');
       	 $(".imgSrc").css('display','none');
		 $('.imgSrc').attr('src', '');
});
//End

$('input[name="deliveryType"]').click(function(){

	if($('#scheduleDelivery').is(":checked")){

		 $("#schedule-delivery").css('display','block');
		 $("#action-delivery").css('display','none');
	 }else{

		 $("#schedule-delivery").css('display','none');
		 $("#action-delivery").css('display','block');
	 }
});

$('input[name="timeBased"]').click(function(){

	if($('#atLaunch').is(":checked")){

		 $("#at-launch").css('display','block');
		 $("#designated-time").css('display','none');
		 $("#intelligent-delivery").css('display','none');
	 }
	 else if($('#designatedTime').is(":checked")){

		 $("#at-launch").css('display','none');
		 $("#designated-time").css('display','block');
		 $("#intelligent-delivery").css('display','none');
	 }
	 else if($('#intelligentDelivery').is(":checked")){
		 $("#at-launch").css('display','none');
		 $("#designated-time").css('display','none');
		 $("#intelligent-delivery").css('display','block');
	 }

});

$("#deliveryTime").change(function(){

	var deliveryTime = $("#deliveryTime").val();

	if(deliveryTime == 'at'){
		$("#at").css('display','block');
	}else{
		$("#at").css('display','none');
	}

});

function showSendEmail(){

    $("#addonSection").css('display','none');
    $("#block-attributes").css('display','none');
    $("#send-test-message").css('display','block');
    $("#addonsTag").removeClass('addonActive');
    $("#SendEmailTag").addClass('addonActive');
}

function showGif(){
    $("#gifSection").css('display','block');
    $("#addOn").css('display','none');
    $("#bannerSection").css('display','none');
}
        
var showGalleryFlag = 'gifAndBanner';
var showGalleryFlag1 = 'gifAndBanner';
var showGifImages = 1;
var showGifImages1 = 1;

function showAddons(){
    $("#addonSection").css('display','block');
    $("#addOn").css('display','block');
    $("#addonsTag").addClass('addonActive');
    $("#SendEmailTag").removeClass('addonActive');
    $("#block-attributes").css('display','block');
    $("#send-test-message").css('display','none');
    $("#bannerSection").css('display','none');
    $("#bannerSection").html('');
    $("#gifSection").css('display','none');
    //$("#gifSection").html('');
    $("#Agree").css('display','none');
    $("#Agree").html('');
    $("#Applause").css('display','none');
    $("#Applause").html('');
    $("#Dance").css('display','none');
    $("#Dance").html('');
    $("#EyeRoll").css('display','none');
    $("#EyeRoll").html('');
    $("#No").css('display','none');
    $("#No").html('');
    $("#OMG").css('display','none');
    $("#OMG").html('');
    $("#ThankYou").css('display','none');
    $("#ThankYou").html('');
    $("#ThumbsUp").css('display','none');
    $("#ThumbsUp").html('');
    $("#YouGotThis").css('display','none');
    $("#YouGotThis").html('');
    $("#templates").css('display','none');

    $("#androidGiphy").html("");
    $("#androidGiphySearch").val("");
    $("#androidGiphImages").html("");

    $("#emailGiphySearch").val("");
    $("#emailGiphy").html("");
    $("#emailGiphImages").html("");

    $("#crossGiphySearch").val("");
    $("#crossGiphy").html("");
    $("#crossGiphImages").html("");

    showGalleryFlag = 'gifAndBanner';
    showGifImages = 1;
}

function showTemplate(){
    $("#templates").css('display','block');
    $("#addOn").css('display','none');
}

function showGallery(type){

        var baseurl = $("#baseurl").val();
        $.ajax({
        type: "POST",
        url: baseurl + 'appUser/getGifImages/',
        data:"type="+type,
        context: document.body,
        async: true,
        success: function(data) {
                //alert(data); return false;
            if(data != ''){
                setTimeout(function(){
                        $(".gif-loading").css('display','none');
                         }, 2000);
                //$(".gif-loading").css('display','none');
                if(showGalleryFlag == 'gifAndBanner'){
                        if(type == 'Banner'){
                                                $("#bannerSection").css('display','block');
                                                $("#gifSection").css('display','none');
                                                $("#addOn").css('display','none');
                                                $("#bannerSection").append(data);
                                                showGalleryFlag = 'displayed';
                        }

                        if(type == 'Gif'){
                                $("#gifSection").css('display','block');
                                $("#addOn").css('display','none');
                                $("#bannerSection").css('display','none');
                                //$("#gifSection").append(data);
                                showGalleryFlag = 'displayed';
                        }
                }

                if(showGalleryFlag == 'displayed' && showGifImages == 1){
                        if(type == 'Agree'){
                                $("#Agree").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#Agree").append(data);
                                                showGifImages = 0;
                        }
                            if(type == 'Applause'){
                                $("#Applause").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#Applause").append(data);
                                                showGifImages = 0;
                            }
                            if(type == 'Dance'){
                                $("#Dance").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#Dance").append(data);
                                                showGifImages = 0;
                            }
                            if(type == 'EyeRoll'){
                                $("#EyeRoll").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#EyeRoll").append(data);
                                                showGifImages = 0;
                            }

                            if(type == 'No'){
                                $("#No").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#No").append(data);
                                                showGifImages = 0;
                            }

                            if(type == 'OMG'){
                                $("#OMG").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#OMG").append(data);
                                                showGifImages = 0;
                            }

                            if(type == 'ThankYou'){
                                $("#ThankYou").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#ThankYou").append(data);
                                                showGifImages = 0;
                            }

                            if(type == 'ThumbsUp'){
                                $("#ThumbsUp").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#ThumbsUp").append(data);
                                                showGifImages = 0;
                            }

                            if(type == 'YouGotThis'){
                                $("#YouGotThis").css('display','block');
                                $("#gifSection").css('display','none');
                                                $("#YouGotThis").append(data);
                                                showGifImages = 0;
                            }
                }

            }
        }
    });

    return false;

}

function showAddons1(){
    $("#addonSection").css('display','block');
    $("#addOn1").css('display','block');
    $("#addonsTag").addClass('addonActive');
    $("#SendEmailTag").removeClass('addonActive');
    $("#block-attributes").css('display','block');
    $("#send-test-message").css('display','none');
    $("#bannerSection1").css('display','none');
    $("#bannerSection1").html('');
    $("#gifSection1").css('display','none');
    //$("#gifSection1").html('');
    $("#Agree1").css('display','none');
    $("#Agree1").html('');
    $("#Applause1").css('display','none');
    $("#Applause1").html('');
    $("#Dance1").css('display','none');
    $("#Dance1").html('');
    $("#EyeRoll1").css('display','none');
    $("#EyeRoll1").html('');
    $("#No1").css('display','none');
    $("#No1").html('');
    $("#OMG1").css('display','none');
    $("#OMG1").html('');
    $("#ThankYou1").css('display','none');
    $("#ThankYou1").html('');
    $("#ThumbsUp1").css('display','none');
    $("#ThumbsUp1").html('');
    $("#YouGotThis1").css('display','none');
    $("#YouGotThis1").html('');
    $("#templates1").css('display','none');

    $("#iOSGiphySearch").val("");
    $("#iOSGiphy").html("");
    $("#iOSGiphImages").html("");

    showGalleryFlag1 = 'gifAndBanner';
    showGifImages1 = 1;

}

function showTemplate1(){
    $("#templates1").css('display','block');
    $("#addOn1").css('display','none');
}

function showGallery1(type){
        $(".gif-loading").css('display','block');
        //alert(showGalleryFlag1);
        var baseurl = $("#baseurl").val();
        $.ajax({
        type: "POST",
        url: baseurl + 'appUser/getGifImagesIos/',
        data:"type="+type,
        context: document.body,
        async: true,
        success: function(data) {
                //alert(data); return false;
            if(data != ''){
                setTimeout(function(){
                        $(".gif-loading").css('display','none');
                         }, 2000);
                //$(".gif-loading").css('display','none');
                if(showGalleryFlag1 == 'gifAndBanner'){
                        if(type == 'Banner'){
                                $("#bannerSection1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#addOn1").css('display','none');
                                $("#bannerSection1").append(data);
                                showGalleryFlag1 = 'displayed';
                        }

                        if(type == 'Gif'){
                                $("#gifSection1").css('display','block');
                                $("#addOn1").css('display','none');
                                $("#bannerSection1").css('display','none');
                                //$("#gifSection1").append(data);
                                showGalleryFlag1 = 'displayed';
                        }
                }


                if(showGalleryFlag1 == 'displayed' && showGifImages1 == 1){

                        if(type == 'Agree'){
                                $("#Agree1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#Agree1").append(data);
                                showGifImages1 = 0;
                        }
                            if(type == 'Applause'){
                                $("#Applause1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#Applause1").append(data);
                                showGifImages1 = 0;
                            }
                            if(type == 'Dance'){
                                $("#Dance1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#Dance1").append(data);
                                showGifImages1 = 0;
                            }
                            if(type == 'EyeRoll'){
                                $("#EyeRoll1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#EyeRoll1").append(data);
                                showGifImages1 = 0;
                            }

                            if(type == 'No'){
                                $("#No1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#No1").append(data);
                                showGifImages1 = 0;
                            }

                            if(type == 'OMG'){
                                $("#OMG1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#OMG1").append(data);
                                showGifImages1 = 0;
                            }

                            if(type == 'ThankYou'){
                                $("#ThankYou1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#ThankYou1").append(data);
                                showGifImages1 = 0;
                            }

                            if(type == 'ThumbsUp'){
                                $("#ThumbsUp1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#ThumbsUp1").append(data);
                                showGifImages1 = 0;
                            }

                            if(type == 'YouGotThis'){
                                $("#YouGotThis1").css('display','block');
                                $("#gifSection1").css('display','none');
                                $("#YouGotThis1").append(data);
                                showGifImages1 = 0;
                            }
                }

            }
        }
    });

}

function addEmoji(evt){
    var src = evt.getAttribute('src');
    var campaignType = $("#campaignType").val();
    if(campaignType == 'push'){
            document.getElementById('dropbox').innerHTML = '<img id="android_push_notification_image" src="'+src+'">';
    }else{
            var image = '<img class="fr-dib fr-draggable" src="'+src+'">';
            $('#editor').froalaEditor('html.insert', image);
    }

}

function addEmoji1(evt){
    var src = evt.getAttribute('src');
    var campaignType = $("#campaignType").val();
    if(campaignType == 'push'){
            document.getElementById('dropbox1').innerHTML = '<img id="ios_push_notification_image" src="'+src+'">';
    }
}

function removeImage(){
    document.getElementById('dropbox').innerHTML = '';
    document.getElementById('dropbox1').innerHTML = '';
}

function addtemplate(template){
    //alert(template);
    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'crosschannel/getCampaignTemplate',
        data:"id="+template,
        context: document.body,
        async: true,
        success: function(data) {
            if(data != ''){
                $('#editor').froalaEditor('html.set', data);
            }else{
               return false;
            }
        }
    });
}

$('input[name="plainEditor"]').click(function(){

    if($('#plainEditor').is(":checked")){
	
        var editorValue = $("#editor").froalaEditor('html.get');
        var plaintext = editorValue.replace(/(<([^>]+)>)/ig,"");
        //console.log(plaintext);
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;date_of_birth&rbrace;&rbrace;&rbrace;','{{${date_of_birth}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;email_address&rbrace;&rbrace;&rbrace;','{{${email_address}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;first_name&rbrace;&rbrace;&rbrace;','{{${first_name}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;last_name&rbrace;&rbrace;&rbrace;','{{${last_name}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;gender&rbrace;&rbrace;&rbrace;','{{${gender}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;last_used_app_date&rbrace;&rbrace;&rbrace;','{{${last_used_app_date}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;most_recent_app_version&rbrace;&rbrace;&rbrace;','{{${most_recent_app_version}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;phone_number&rbrace;&rbrace;&rbrace;','{{${phone_number}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;time_zone&rbrace;&rbrace;&rbrace;','{{${time_zone}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;company&rbrace;&rbrace;&rbrace;','{{${company}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;campaign.&dollar;&lbrace;name&rbrace;&rbrace;&rbrace;','{{campaign.${name}}}');
        plaintext = plaintext.replace('&lbrace;&lbrace;&dollar;&lbrace;set_user_to_unsubscribed_url&rbrace;&rbrace;&rbrace;','{{${set_user_to_unsubscribed_url}}}');
        //var plaintext = plaintext.replace('</p>','');
        $("#plainText").val(plaintext);
    }else{
        
    }

});