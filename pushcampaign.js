$(document).ready(function () {
  $("a").tooltip({
    'selector': '',
    'placement': 'top',
    'container':'body',
    'trigger' : 'hover'
  });
//  var attri = $("#subject").val();
//  //alert(attri.search("email_address"));
//  if(attri.search("email_address")>=0)
//  { 
//      var res = attri.replace("{ { ${ email_address } } }", '{{${email_address}}}');
//      $("#subject").val(res);
//  }
//  if(attri.search("first_name") >= 0){
//      var res = attri.replace("{ { ${ first_name } } }", '{{${first_name}}}');
//      $("#subject").val(res);
//  }
  

});


function selectGroup(id){

	var baseurl = $("#baseurl").val();
	var groupId = id;
	$.ajax({
        type: "POST",
        url: baseurl + 'groupApp/setGroup',
        data: "groupId=" + groupId,
        context: document.body,
        success: function(data) {
        	if(data == 1){
        	window.parent.location.href =  baseurl+"groupApp/appGroups/"+groupId;

        	}

        }
    });
}

function selectPushGroup(id){

	var baseurl = $("#baseurl").val();
	var groupId = id;

	$.ajax({
        type: "POST",
        url: baseurl + 'groupApp/setGroup',
        data: "groupId=" + groupId,
        context: document.body,
        success: function(data) {
        	if(data == 1){
        	window.parent.location.href =  baseurl+"appUser/campaigns";

        	}

        }
    });
}

function selectEmailGroup(id){

	var baseurl = $("#baseurl").val();
	var groupId = id;
	$.ajax({
        type: "POST",
        url: baseurl + 'groupApp/setGroup',
        data: "groupId=" + groupId,
        context: document.body,
        success: function(data) {
        	if(data == 1){
        	window.parent.location.href =  baseurl+"appUser/emailCampaigns";

        	}

        }
    });
}

function validateCampaign(){

	var baseurl = $("#baseurl").val();
	var campaignName = $("#campaignName").val();
	var groupId = $("#groupId").val();
	if($.trim(campaignName) == ''){
		$("#error_campaignName").text("Please enter Campaign name");
		$("#campaignName").css('border-color', '#424141');
	}else{
		$("#error_campaignName").text("");
		$("#campaignName").css('border-color', '#ccc');
		$("#choose_platform").click();
	}

	//$("#compose").hide();
	//$("#delivery").show();
}
$("#automation1").on('click', function(){
   var baseurl = $("#baseurl").val();
	var campaignName = $("#campaignName").val();
	var groupId = $("#groupId").val();
	if($.trim(campaignName) == ''){
		$("#error_campaignName").text("Please enter Campaign name");
		$("#campaignName").css('border-color', '#424141');
	}else{
		$("#error_campaignName").text("");
		$("#campaignName").css('border-color', '#ccc');
		$("#choose_platform").click();
	} 
});

jsonObj = [];
androidCampaign = {};

function validateCompose(){
        
	var baseurl = $("#baseurl").val();
	var selectedPlatform = $("#selectedPlatform").val();
	var groupId = $("#groupId").val();
	var campaignName = $("#campaignName").val();
	var push_title = $("#push_title").val();
    if(selectedPlatform == 'android'){
        var push_message = $("#push_message").val();
        var push_message = push_message.replace(/\n\r?/g, '<br />');
    }
	var summery_text = $("#summery_text").val();
	var campaignId = $("#campaignId").val();
    var message_category = $("#message_category").val();
    var campaignPersonaUser = $("#campaignPersonaUser").val();
    var campaignList = $("#campaignLists").val();
    var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
    var domain = $("#domain").val();
    var allowedDomains = [];
    allowedDomains.push(domain);

    if($( ".imgInputField" ).has( "img" ).length){
        if(selectedPlatform == 'android'){
           var push_notification_image = $("#android_push_notification_image").attr('src');
        }else{
            var push_notification_image = $("#ios_push_notification_image").attr('src');
        }

    }else{
        var push_notification_image = '';
    }

  if(campaignPersonaUser != ""){
    campaignPersonaUser = campaignPersonaUser;
  }else{
    campaignPersonaUser = "";
  }

  if(campaignList != ''){
    campaignList = campaignList;
  }else{
    campaignList = "";
  }
  
    var automation = 0;
	//var custom_url = $("#custom_url").val();
	//var type = $("#campaign_type").val();

	if(selectedPlatform == 'android'){
		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}
	}
	if(selectedPlatform == 'iOS'){

		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}

		if($('input[name="limit_this_push_to_iPad_devices"]:checked').val() == 1){
			var limit_this_push_to_iPad_devices = $('input[name="limit_this_push_to_iPad_devices"]:checked').val();
		}else{
			var limit_this_push_to_iPad_devices = "";
		}

		if($('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val() == 1){
			var limit_this_push_to_iphone_and_ipod_devices = $('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val();
		}else{
			var limit_this_push_to_iphone_and_ipod_devices = "";
		}

	}
	var push_icon = $("#push_icon").val();
	var push_img_url = $("#push_img_url").val();
	var expandedImage = $("#expandedImage").val();
	var expanded_img_url = $("#expanded_img_url").val();
	var validation = [];


	if($.trim(campaignName) == ''){
		$("#error_campaignName").text("Please enter Campaign name");
                $('html,body').animate({
                    scrollTop: $("#composeTab").offset().top},
                'slow');
		$("#campaignName").css('border-color', '#424141');
		validation['campaignName'] = 0;
	}else{
            $("#error_campaignName").text("");
            $("#campaignName").css('border-color', '#ccc');
            validation['campaignName'] = 1;
//        if(/^[a-zA-Z0-9- ]*$/.test($.trim(campaignName)) != false) {
//    		$("#error_campaignName").text("");
//    		$("#campaignName").css('border-color', '#ccc');
//    		validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
	}
	if(selectedPlatform == 'android'){
		if($.trim(push_title) == ''){
			$("#error_pushTitle").text('Please enter title');
			$("#push_title").css('border-color', '#424141');
			validation['push_title'] = 0;
		}else{
			$("#error_pushTitle").text('');
			$("#push_title").css('border-color', '#ccc');
			validation['push_title'] = 1;
		}


		if($.trim(push_message) == ''){
			$("#error_pushMsg").text('Please enter message');
			$("#push_message").css('border-color', '#424141');
			validation['push_message'] = 0;
		}else{
			$("#error_pushMsg").text('');
			$("#push_message").css('border-color', '#ccc');
			validation['push_message'] = 1;
		}
	}

	if(selectedPlatform == 'iOS'){
		var push_iOS_message = $("#push_iOS_message").val();
        var push_iOS_message = push_iOS_message.replace(/\n\r?/g, '<br />');

		if($.trim(push_iOS_message) == ''){
			$("#error_iOSpushMsg").text('Please enter message');
			$("#push_iOS_message").css('border-color', '#424141');
			validation['push_iOS_message'] = 0;
		}else{
			$("#error_iOSpushMsg").text('');
			$("#push_iOS_message").css('border-color', '#ccc');
			validation['push_iOS_message'] = 1;
		}
	}

	if(selectedPlatform == 'android'){

		var custom_url = $("#android_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#android_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

			if($.trim(redirect_url) == ''){
				$("#error_android_redirect_url").text("Please enter Web URL");
				$("#android_redirect_url").css('border-color', '#424141');
				validation['android_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_android_redirect_url").text("Please enter valid Web URL");
					$("#android_redirect_url").css('border-color', '#424141');
					validation['android_redirect_url'] = 0;
				}else{
					$("#error_android_redirect_url").text("");
					$("#android_redirect_url").css('border-color', '#ccc');
					validation['android_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#android_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_android_deep_link").text("Please enter Deep link URL");
				$("#android_deep_link").css('border-color', '#424141');
				validation['android_deep_link'] = 0;
			}else{
				$("#error_android_deep_link").text("");
				$("#android_deep_link").css('border-color', '#ccc');
				validation['android_deep_link'] = 1;
				/*if(urlregex.test(redirect_url) == false){
					$("#error_android_deep_link").text("Please enter valid Web URL");
					$("#android_deep_link").css('border-color', '#424141');
					validation['android_deep_link'] = 0;
				}else{
					$("#error_android_deep_link").text("");
					$("#android_deep_link").css('border-color', '#ccc');
					validation['android_deep_link'] = 1;
				}*/
			}

		}
		if(custom_url == '3'){
			$("#error_android_redirect_url").text("");
			$("#android_redirect_url").css('border-color', '#ccc');
			validation['android_redirect_url'] = 1;
			validation['android_deep_link'] = 1;
		}
	}

	if(selectedPlatform == 'iOS'){
		var custom_url = $("#ios_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#ios_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_redirect_url").text("Please enter Web URL");
				$("#ios_redirect_url").css('border-color', '#424141');
				validation['ios_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_redirect_url").text("Please enter valid Web URL");
					$("#ios_redirect_url").css('border-color', '#424141');
					validation['ios_redirect_url'] = 0;
				}else{
					$("#error_ios_redirect_url").text("");
					$("#ios_redirect_url").css('border-color', '#ccc');
					validation['ios_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#ios_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_deep_link").text("Please enter Web URL");
				$("#ios_deep_link").css('border-color', '#424141');
				validation['ios_deep_link'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_deep_link").text("Please enter valid Web URL");
					$("#ios_deep_link").css('border-color', '#424141');
					validation['ios_deep_link'] = 0;
				}else{
					$("#error_ios_deep_link").text("");
					$("#ios_deep_link").css('border-color', '#ccc');
					validation['ios_deep_link'] = 1;
				}
			}
		}
		if(custom_url == '3'){
			$("#error_ios_redirect_url").text("");
			$("#ios_redirect_url").css('border-color', '#ccc');
			validation['ios_redirect_url'] = 1;
			validation['ios_deep_link'] = 1;
		}
	}


	if(selectedPlatform == 'email'){

		var emailSettings = $("#emailSettings").val();
                var displayName = $("#displayName").val();
		var fromAddress = $("#fromAddress").val();
		var replyToAddress = $("#replyToAddress").val();
                var subject = $("#subject").val();
                var editor = $('#editor').froalaEditor('html.get');
		var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
                if(emailSettings == 0){
                    if($.trim(displayName) == ''){
                        $("#error_displayName").text('Please enter Display Name');
                        $("#displayName").css('border-color', '#424141');
                        validation['displayName'] = 0;
                    }else{
                        $("#error_displayName").text('');
                        $("#displayName").css('border-color', '#ccc');
                        validation['displayName'] = 1;
                    }
                    
                    if($.trim(fromAddress) == ''){
                        $("#error_fromAddress").text('Please enter From Address');
                        $("#fromAddress").css('border-color', '#424141');
                        validation['fromAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(fromAddress);
                        if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            str = fromAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_fromAddress").text("");
                                $("#fromAddress").css('border-color', '#ccc');
                                validation['fromAddress'] = 1;
                            }else{
                                $("#error_fromAddress").text("Please enter email of " + domain + " only");
                                $("#fromAddress").css('border-color', '#424141');
                                validation['fromAddress'] = 0;
                            }  
			}
                    }
                    
                    if($.trim(replyToAddress) == ''){
                        $("#error_replyToAddress").text('Please enter Reply-To Address');
                        $("#replyToAddress").css('border-color', '#424141');
                        validation['replyToAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(replyToAddress);
                        if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            str = replyToAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_replyToAddress").text("");
                                $("#replyToAddress").css('border-color', '#ccc');
                                validation['replyToAddress'] = 1;
                            }else{
                                $("#error_replyToAddress").text("Please enter email of " + domain + " only");
                                $("#replyToAddress").css('border-color', '#424141');
                                validation['replyToAddress'] = 0;
                            }
			}
                    }
                    
                }else{
                    if($.trim(fromAddress) != ''){
			var isvalid = emailRegexStr.test(fromAddress);
			if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            str = fromAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_fromAddress").text("");
                                $("#fromAddress").css('border-color', '#ccc');
                                validation['fromAddress'] = 1;
                            }else{
                                $("#error_fromAddress").text("Please enter email of " + domain + " only");
                                $("#fromAddress").css('border-color', '#424141');
                                validation['fromAddress'] = 0;
                            }  
			}
                    }else{
			$("#error_fromAddress").text("");
                        $("#fromAddress").css('border-color', '#ccc');
                        validation['fromAddress'] = 1;
                    }
                    
                    if($.trim(replyToAddress) != ''){
			var isvalid = emailRegexStr.test(replyToAddress);
			if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            str = replyToAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_replyToAddress").text("");
                                $("#replyToAddress").css('border-color', '#ccc');
                                validation['replyToAddress'] = 1;
                            }else{
                                $("#error_replyToAddress").text("Please enter email of " + domain + " only");
                                $("#replyToAddress").css('border-color', '#424141');
                                validation['replyToAddress'] = 0;
                            }
			}
                    }else{
			$("#error_replyToAddress").text("");
                        $("#replyToAddress").css('border-color', '#ccc');
                        validation['replyToAddress'] = 1;
                    }
                }
                
		
		//var editor = tinyMCE.activeEditor.getContent();
		//var editor = $('#editor').summernote('code');
		

		if($.trim(subject) == ''){
			$("#error_subject").text('Please enter subject');
			$("#subject").css('border-color', '#424141');
			validation['subject'] = 0;
		}else{
			$("#error_subject").text('');
			$("#subject").css('border-color', '#ccc');
			validation['subject'] = 1;
		}
                
                if(editor == ''){
                    //console.log(editor);
                    validation['body'] = 0;
                    $("#error_body").css('font-weight','bold');
                    $("#error_body").text('Body cannot be empty');
                }else{
                    //console.log(editor);
                    var str2 = "&lbrace;&lbrace;&dollar;&lbrace;set_user_to_unsubscribed_url&rbrace;&rbrace;&rbrace;";
                    if(editor.indexOf(str2) != -1){

                        $("#error_body").text('');
                        validation['body'] = 1;
                    }else{
                        $("#error_body").css('font-weight','bold');
                        $("#error_body").text('Please add unsubscribe link attribute');
                        validation['body'] = 0;
                    }
                }
                

		if($('input[name="plainEditor"]:checked').val() == 1){
			var plainEditor = $('input[name="plainEditor"]:checked').val();
		}else{
			var plainEditor = '';
		}

		if(plainEditor == '1'){
			// Plain text message
			var message = $("#plainText").val().replace(/\n/g, '<br/>');   //$("#plainText").val();
		}else{
			//Editor message
			var message = editor;
		}


	}

	var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            rtnfalse[i] = 1;
        } else {
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if(errorResult == -1){

    	androidCampaign["selectedPlatform"] = selectedPlatform;
    	androidCampaign["groupId"] = groupId;
    	androidCampaign["campaignName"] = campaignName;
    	androidCampaign["campaignId"] = campaignId;
      androidCampaign["campaignPersonaUser"] = campaignPersonaUser;
      androidCampaign["campaignList"] = campaignList;
      androidCampaign["message_category"] = message_category;
      androidCampaign['automation'] = automation;
      androidCampaign["push_notification_image"] = push_notification_image;
    	if(selectedPlatform == 'android'){
	    	androidCampaign["push_title"] = push_title;
	    	androidCampaign["push_message"] = push_message;
	    	androidCampaign["summery_text"] = summery_text;
    	}
    	if(selectedPlatform == 'iOS'){
    		androidCampaign["push_message"] = push_iOS_message;
    	}
    	if(selectedPlatform == 'email'){
    		androidCampaign["push_title"] = subject;
    		androidCampaign["push_message"] = message;
    		androidCampaign["displayName"] = displayName;
    		androidCampaign["fromAddress"] = fromAddress;
    		androidCampaign["replyToAddress"] = replyToAddress;
    	}
    	androidCampaign["custom_url"] = custom_url;
    	if(custom_url == '1' || custom_url == '2'){
    		androidCampaign["redirect_url"] = redirect_url;

    	}else{
    		androidCampaign["redirect_url"] = '';
    	}


    	if(selectedPlatform == 'android'){
    		androidCampaign["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
    	}
    	if(selectedPlatform == 'iOS'){
    		androidCampaign["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
    		androidCampaign["limit_this_push_to_iPad_devices"] = limit_this_push_to_iPad_devices;
    		androidCampaign["limit_this_push_to_iphone_and_ipod_devices"] = limit_this_push_to_iphone_and_ipod_devices;
    	}
    	androidCampaign["push_icon"] = push_icon;
    	androidCampaign["expandedImage"] = expandedImage;
    	androidCampaign["push_img_url"] = push_img_url;
    	androidCampaign["expanded_img_url"] = expanded_img_url;
    	//androidCampaign["type"] = type;
    	//jsonObj.push(item);
        //console.log(androidCampaign); return false;
    	$("#compose").hide();
    	$("#composeTab").removeClass('active');
    	$("#delivery").show();
    	$("#deliveryTab").addClass('active');
    	$("#composeCheck").css('background','#00a651');
    }

}

function backToCompose(){

	$("#compose").show();
	$("#composeTab").addClass('active');
	$("#delivery").hide();
	$("#deliveryTab").removeClass('active');

	$("#confirm").hide();
	$("#confirmTab").removeClass('active');
}

function validateDelivery(){


	if($("input[name='deliveryType']:checked").val() == 'schedule-delivery'){
		var deliveryType = 1;
	}else{
		var deliveryType = 2;
	}

	if(deliveryType == 1){

		if($("input[name='timeBased']:checked").val() == 'at-launch'){
			var time_based_scheduling = 1;
		}
		else if($("input[name='timeBased']:checked").val() == 'designated-time'){
			var time_based_scheduling = 2;
		}
		else{
			var time_based_scheduling = 3;
		}

	if(time_based_scheduling == 1){
		var error_atlaunch_reEligible = 1;
		var pattern = /^\d+$/;

		if ($('#atlaunch1').is(":checked"))
		{
			var reEligible_to_receive_campaign = 1;

			var atlaunch_reEligibleTime = $("#atlaunch_reEligibleTime").val();
			var atlaunch_reEligibleTimeInterval = $("#atlaunch_reEligibleTimeInterval").val();

			if($.trim(atlaunch_reEligibleTime) == ''){
				$("#error_atlaunch_reEligible").text('This field is required.');
				$("#atlaunch_reEligibleTime").css('border-color', '#424141');
				error_atlaunch_reEligible = 0;
			}else{
				if(parseInt(atlaunch_reEligibleTime) <= 0){
					$("#error_atlaunch_reEligible").text('This field should be greater than 0.');
					$("#atlaunch_reEligibleTime").css('border-color', '#424141');
					error_atlaunch_reEligible = 0;

				}else{
				if(pattern.test(atlaunch_reEligibleTime)){
					$("#error_atlaunch_reEligible").text('');
					$("#atlaunch_reEligibleTime").css('border-color', '#ccc');
					error_atlaunch_reEligible = 1;
				}else{
					$("#error_atlaunch_reEligible").text('This field should be a valid integer.');
					$("#atlaunch_reEligibleTime").css('border-color', '#424141');
					error_atlaunch_reEligible = 0;
				}
				}
			}
		}else{

			var reEligible_to_receive_campaign = 0;
			error_atlaunch_reEligible = 1;
		}

		if($('#atlaunch2').is(":checked"))
		{
			var ignore_frequency_capping_settings = 1;
		}else{
			var ignore_frequency_capping_settings = 0;
		}


	}

	if(time_based_scheduling == 2){
		var error_weekday = 1;
		var error_designatedTime_reEligible = 1;
		var pattern = /^\d+$/;
		var send = $("#send").val();

		var starting_at_hour = $("#starting_at_hour").val();
		var starting_at_min = $("#starting_at_min").val();
		var starting_at_am_pm = $("#starting_at_am_pm").val();

		if(send == 'once'){
		var on_date = $("#date").val();
		}
		else if(send == 'daily'){
			var everyDay = $("#everyDay").val();
			var beginning_date = $("#beginning_date").val();
			var ending = $("#ending").val();
			if(ending == 'on_the_date'){
				var ending_on_the_date = $("#ending_on_the_date").val();
				var ending_after_occurances = '';
			}
			if(ending == 'after'){
				var ending_on_the_date = '';
				var ending_after_occurances = $("#ending_after_occurances").val();
			}
			if(ending == 'never'){
				var ending_on_the_date = '';
				var ending_after_occurances = '';
			}
		}
		else if(send == 'weekly'){

			//var everyWeek = $("#everyWeek").val();
			var allVals = [];
			 $('[name=weekday]:checked').each(function() {
			   allVals.push($(this).val());
			 });

			 var weekday = allVals;
			 var beginning_date = $("#weeks_beginning_date").val();
			 var ending = $("#weeks_ending").val();

			 if(weekday.length == 0){
				 $("#error_weekday").text('Select at least one day of the week');
				 error_weekday = 0;
			 }else{
				 $("#error_weekday").text('');
				 error_weekday = 1;
			 }

			 if(ending == 'on_the_date'){
					var ending_on_the_date = $("#weeks_ending_on_the_date").val();
					var ending_after_occurances = '';
				}
				if(ending == 'after'){
					var ending_on_the_date = '';
					var ending_after_occurances = $("#weeks_ending_after_occurances").val();
				}
				if(ending == 'never'){
					var ending_on_the_date = '';
					var ending_after_occurances = '';
				}



		}
		else if(send == 'monthly'){

			var everyMonth = $("#everyMonth").val();
			var beginning_date = $("#month_beginning_date").val();
			var ending = $("#month_ending").val();
			if(ending == 'on_the_date'){
				var ending_on_the_date = $("#monthly_ending_on_the_date").val();
				var ending_after_occurances = '';
			}
			if(ending == 'after'){
				var ending_on_the_date = '';
				var ending_after_occurances = $("#monthly_ending_after_occurances").val();
			}
			if(ending == 'never'){
				var ending_on_the_date = '';
				var ending_after_occurances = '';
			}
		}

		if($('#designatedtime1').is(":checked"))
		{
			var send_campaign_to_users_in_their_local_time_zone = 1;
		}else{
			var send_campaign_to_users_in_their_local_time_zone = 0;
		}

		if($('#designatedtime2').is(":checked"))
		{
			var reEligible_to_receive_campaign = 1;

			var designatedTime_reEligibleTime = $("#designatedTime_reEligibleTime").val();
			var designatedTime_reEligibleTimeInterval = $("#designatedTime_reEligibleTimeInterval").val();

			if($.trim(designatedTime_reEligibleTime) == ''){
				$("#error_designatedTime_reEligible").text('This field is required.');
				$("#designatedTime_reEligibleTime").css('border-color', '#424141');
				error_designatedTime_reEligible = 0;
			}else{
				if(designatedTime_reEligibleTime < 0){
					$("#error_designatedTime_reEligible").text('This field should be greater than or equal to 0.');
					$("#designatedTime_reEligibleTime").css('border-color', '#424141');
					error_designatedTime_reEligible = 0;

				}else{
				if(pattern.test(designatedTime_reEligibleTime)){
					$("#error_designatedTime_reEligible").text('');
					$("#designatedTime_reEligibleTime").css('border-color', '#ccc');
					error_designatedTime_reEligible = 1;
				}else{
					$("#error_designatedTime_reEligible").text('This field should be a valid integer.');
					$("#designatedTime_reEligibleTime").css('border-color', '#424141');
					error_designatedTime_reEligible = 0;
				}
				}
			}

		}else{
			var reEligible_to_receive_campaign = 0;
			var designatedTime_reEligibleTime = '';
			var designatedTime_reEligibleTimeInterval = '';
			error_designatedTime_reEligible = 1;
		}

		if($('#designatedtime3').is(":checked"))
		{
			var ignore_frequency_capping_settings = 1;
		}else{
			var ignore_frequency_capping_settings = 0;
		}


	}

	if(time_based_scheduling == 3){

		var error_intelligent_weekday = 1;
		var error_intelligentTime_reEligible = 1;
		var pattern = /^\d+$/;
		var intelligent_send = $("#intelligent_send").val();

		if(intelligent_send == 'once'){
			var intelligent_on_date = $("#intelligent_onDate").val();
		}
		else if(intelligent_send == 'daily'){
			var intelligent_everyDay = $("#intelligent_everyDay").val();
			var intelligent_beginning_date = $("#intelligent_beginning_date").val();
			var intelligent_ending = $("#intelligent_ending").val();

			if(intelligent_ending == 'on_the_date'){
				var intelligent_ending_on_the_date = $("#intelligent_daily_ending_on_the_date").val();
				var intelligent_ending_after_occurances = '';
			}
			if(intelligent_ending == 'after'){
				var intelligent_ending_on_the_date = '';
				var intelligent_ending_after_occurances = $("#intelligent_daily_ending_after_occurances").val();
			}
			if(intelligent_ending == 'never'){
				var intelligent_ending_on_the_date = '';
				var intelligent_ending_after_occurances = '';
			}

		}
		else if(intelligent_send == 'weekly'){

			//var intelligent_everyWeek = $("#intelligent_everyWeek").val();
			var weekVals = [];
			 $('[name=intelligent_weekday]:checked').each(function() {
				 weekVals.push($(this).val());
			 });
			 var intelligent_weekday = weekVals;
			 var intelligent_beginning_date = $("#intelligent_weeks_beginning_date").val();
			 var intelligent_ending = $("#intelligent_weeks_ending").val();

			 if(intelligent_weekday.length == 0){
				 $("#error_intelligent_weekday").text('Select at least one day of the week');
				 error_intelligent_weekday = 0;
			 }else{
				 $("#error_intelligent_weekday").text('');
				 error_intelligent_weekday = 1;
			 }

			 if(intelligent_ending == 'on_the_date'){
					var intelligent_ending_on_the_date = $("#intelligent_weekly_ending_on_the_date").val();
					var intelligent_ending_after_occurances = '';
				}
				if(intelligent_ending == 'after'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = $("#intelligent_weekly_ending_after_occurances").val();
				}
				if(intelligent_ending == 'never'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = '';
				}

		}
		else if(intelligent_send == 'monthly'){

			var intelligent_everyMonth = $("#intelligent_everyMonth").val();
			var intelligent_beginning_date = $("#intelligent_month_beginning_date").val();
			var intelligent_ending = $("#intelligent_month_ending").val();

			 if(intelligent_ending == 'on_the_date'){
					var intelligent_ending_on_the_date = $("#intelligent_monthly_ending_on_the_date").val();
					var intelligent_ending_after_occurances = '';
				}
				if(intelligent_ending == 'after'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = $("#intelligent_weekly_monthly_after_occurances").val();
				}
				if(intelligent_ending == 'never'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = '';
				}

		}

		if($('#intelliSent1').is(":checked"))
		{
			var send_this_campaign_during_a_specific_portion_of_day = 1;
			var specific_start_hours = $("#specific_start_hours").val();
			var specific_start_mins = $("#specific_start_mins").val();
			var specific_start_am_pm = $("#specific_start_am_pm").val();
			var specific_end_hours = $("#specific_end_hours").val();
			var specific_end_mins = $("#specific_end_mins").val();
			var specific_end_am_pm = $("#specific_end_am_pm").val();


		}else{
			var send_this_campaign_during_a_specific_portion_of_day = 0;

		}

		if($('#intelliSent2').is(":checked"))
		{
			var reEligible_to_receive_campaign = 1;

			var intelligentTime_reEligibleTime = $("#intelligentTime_reEligibleTime").val();
			var intelligentTime_reEligibleTimeInterval = $("#intelligentTime_reEligibleTimeInterval").val();

			if($.trim(intelligentTime_reEligibleTime) == ''){
				$("#error_intelligentTime_reEligible").text('This field is required.');
				$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
				error_intelligentTime_reEligible = 0;
			}else{
				if(intelligentTime_reEligibleTime < 0){
					$("#error_intelligentTime_reEligible").text('This field should be greater than or equal to 0.');
					$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
					error_intelligentTime_reEligible = 0;

				}else{
				if(pattern.test(intelligentTime_reEligibleTime)){
					$("#error_intelligentTime_reEligible").text('');
					$("#intelligentTime_reEligibleTime").css('border-color', '#ccc');
					error_intelligentTime_reEligible = 1;
				}else{
					$("#error_intelligentTime_reEligible").text('This field should be a valid integer.');
					$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
					error_intelligentTime_reEligible = 0;
				}
				}
			}

		}else{
			var reEligible_to_receive_campaign = 0;
			var intelligentTime_reEligibleTime = '';
			var intelligentTime_reEligibleTimeInterval = '';
			error_intelligentTime_reEligible = 1;
		}

		if($('#intelliSent3').is(":checked"))
		{
			var ignore_frequency_capping_settings = 1;
		}else{
			var ignore_frequency_capping_settings = 0;
		}

	}

	if(time_based_scheduling == 1 && error_atlaunch_reEligible == 1){

		androidCampaign["deliveryType"] = deliveryType;
		androidCampaign["time_based_scheduling"] = time_based_scheduling;
		androidCampaign["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
		androidCampaign["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;

		if(reEligible_to_receive_campaign == 1){
		androidCampaign["reEligibleTime"] = atlaunch_reEligibleTime;
		androidCampaign["reEligibleTimeInterval"] = atlaunch_reEligibleTimeInterval;
		}else{
			androidCampaign["reEligibleTime"] = '';
			androidCampaign["reEligibleTimeInterval"] = '';
		}

		$("#delivery").hide();
    	$("#deliveryTab").removeClass('active');
    	$("#targetUsers").show();
    	$("#targetTab").addClass('active');
    	$("#deliveryCheckIcon").css('background','#00a651');
	}

	if(time_based_scheduling == 2 && error_weekday == 1 && error_designatedTime_reEligible == 1){

		androidCampaign["deliveryType"] = deliveryType;
		androidCampaign["time_based_scheduling"] = time_based_scheduling;
		androidCampaign["send"] = send;
		androidCampaign["starting_at_hour"] = starting_at_hour;
		androidCampaign["starting_at_min"] = starting_at_min;
		androidCampaign["starting_at_am_pm"] = starting_at_am_pm;
		if(send == 'once'){
			androidCampaign['on_date'] = on_date;
		}
		else if(send == 'daily'){
			androidCampaign["everyDay"] = everyDay;
			androidCampaign["beginning_date"] = beginning_date;
			androidCampaign["ending"] = ending;
			androidCampaign["ending_on_the_date"] = ending_on_the_date;
			androidCampaign["ending_after_occurances"] = ending_after_occurances;

		}
		else if(send == 'weekly'){

			//androidCampaign["everyWeek"] = everyWeek;
			androidCampaign["weekday"] = weekday;
			androidCampaign["beginning_date"] = beginning_date;
			androidCampaign["ending"] = ending;
			androidCampaign["ending_on_the_date"] = ending_on_the_date;
			androidCampaign["ending_after_occurances"] = ending_after_occurances;
		}
		else if(send == 'monthly'){

			androidCampaign["everyMonth"] = everyMonth;
			androidCampaign["beginning_date"] = beginning_date;
			androidCampaign["ending"] = ending;
			androidCampaign["ending_on_the_date"] = ending_on_the_date;
			androidCampaign["ending_after_occurances"] = ending_after_occurances;
		}
		androidCampaign["send_campaign_to_users_in_their_local_time_zone"] = send_campaign_to_users_in_their_local_time_zone;
		androidCampaign["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
		androidCampaign["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;
		if(reEligible_to_receive_campaign == 1){
			androidCampaign["reEligibleTime"] = designatedTime_reEligibleTime;
			androidCampaign["reEligibleTimeInterval"] = designatedTime_reEligibleTimeInterval;
		}else{
			androidCampaign["reEligibleTime"] = '';
			androidCampaign["reEligibleTimeInterval"] = '';
		}

		$("#delivery").hide();
    	$("#deliveryTab").removeClass('active');
    	$("#targetUsers").show();
    	$("#targetTab").addClass('active');
    	$("#deliveryCheckIcon").css('background','#00a651');
	}

		if(time_based_scheduling == 3 && error_intelligent_weekday == 1 && error_intelligentTime_reEligible == 1){

		androidCampaign["deliveryType"] = deliveryType;
		androidCampaign["time_based_scheduling"] = time_based_scheduling;
		androidCampaign["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
		androidCampaign["intelligent_send"] = intelligent_send;

		if(reEligible_to_receive_campaign == 1){
			androidCampaign["reEligibleTime"] = intelligentTime_reEligibleTime;
			androidCampaign["reEligibleTimeInterval"] = intelligentTime_reEligibleTimeInterval;
		}else{
			androidCampaign["reEligibleTime"] = '';
			androidCampaign["reEligibleTimeInterval"] = '';
		}

		if(intelligent_send == 'once'){
			androidCampaign["intelligent_on_date"] = intelligent_on_date;
		}
		else if(intelligent_send == 'daily'){
			androidCampaign["intelligent_everyDay"] = intelligent_everyDay;
			androidCampaign["intelligent_beginning_date"] = intelligent_beginning_date;
			androidCampaign["intelligent_ending"] = intelligent_ending;
			androidCampaign["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
			androidCampaign["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;
		}
		else if(intelligent_send == 'weekly'){
			//androidCampaign["intelligent_everyWeek"] = intelligent_everyWeek;
			androidCampaign["intelligent_weekday"] = intelligent_weekday;
			androidCampaign["intelligent_beginning_date"] = intelligent_beginning_date;
			androidCampaign["intelligent_ending"] = intelligent_ending;
			androidCampaign["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
			androidCampaign["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;
		}
		else if(intelligent_send == 'monthly'){

			androidCampaign["intelligent_everyMonth"] = intelligent_everyMonth;
			androidCampaign["intelligent_beginning_date"] = intelligent_beginning_date;
			androidCampaign["intelligent_ending"] = intelligent_ending;
			androidCampaign["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
			androidCampaign["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;

		}
		androidCampaign["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;
		androidCampaign["send_this_campaign_during_a_specific_portion_of_day"] = send_this_campaign_during_a_specific_portion_of_day;
		if(send_this_campaign_during_a_specific_portion_of_day == 1){
		androidCampaign["specific_start_hours"] = specific_start_hours;
		androidCampaign["specific_start_mins"] = specific_start_mins;
		androidCampaign["specific_start_am_pm"] = specific_start_am_pm;
		androidCampaign["specific_end_hours"] = specific_end_hours;
		androidCampaign["specific_end_mins"] = specific_end_mins;
		androidCampaign["specific_end_am_pm"] = specific_end_am_pm;
		}else{
			androidCampaign["specific_start_hours"] = '';
			androidCampaign["specific_start_mins"] = '';
			androidCampaign["specific_start_am_pm"] = '';
			androidCampaign["specific_end_hours"] = '';
			androidCampaign["specific_end_mins"] = '';
			androidCampaign["specific_end_am_pm"] = '';
		}

		$("#delivery").hide();
    	$("#deliveryTab").removeClass('active');
    	$("#targetUsers").show();
    	$("#targetTab").addClass('active');
    	$("#deliveryCheckIcon").css('background','#00a651');

		}
	}
	if(deliveryType == 2){

		var triggerAction = $("#triggerAction").val();
		var scheduleDelay = $("#scheduleDelay").val();
		var campaignDuration_startTime_date = $("#actionDeliveryStartDate").val();
		var campaignDuration_startTime_hours = $("#actionDeliveryStartHours").val();
		var campaignDuration_startTime_mins = $("#actionDeliveryStartMins").val();
		var campaignDuration_startTime_am = $("#actionDeliveryStartAm").val();
		if($('#actionDeliveryEndTimeEnabled').is(":checked")){
		var campaignDuration_endTime_date = '';
		var campaignDuration_endTime_hours = '';
		var campaignDuration_endTime_mins = '';
		var campaignDuration_endTime_am   = '';
		}else{
			var campaignDuration_endTime_date = $("#actionDeliveryEndDate").val();
			var campaignDuration_endTime_hours = $("#actionDeliveryEndHours").val();
			var campaignDuration_endTime_mins = $("#actionDeliveryEndMins").val();
			var campaignDuration_endTime_am   = $("#actionDeliveryEndAm").val();
		}
		//var date1 = campaignDuration_startTime_date + " " + campaignDuration_startTime_hours + ":" + campaignDuration_startTime_mins + " " + campaignDuration_startTime_am;
		//var date2 = campaignDuration_endTime_date + " " + campaignDuration_endTime_hours + ":" + campaignDuration_endTime_mins + " " + campaignDuration_endTime_am;

		var d1=new Date(campaignDuration_startTime_date.split("-").reverse().join("-"));
		var dd1=d1.getDate();
		var mm1=d1.getMonth()+1;
		var yy1=d1.getFullYear();
		startDate = yy1+"/"+mm1+"/"+dd1;

		var d2=new Date(campaignDuration_endTime_date.split("-").reverse().join("-"));
		var dd2=d2.getDate();
		var mm2=d2.getMonth()+1;
		var yy2=d2.getFullYear();
		endDate = yy2+"/"+mm2+"/"+dd2;

		var date1 = startDate + " " + campaignDuration_startTime_hours + ":" + campaignDuration_startTime_mins + " " + campaignDuration_startTime_am;
		var date2 = endDate + " " + campaignDuration_endTime_hours + ":" + campaignDuration_endTime_mins + " " + campaignDuration_endTime_am;


		var from = new Date(Date.parse(date1));
		var to = new Date(Date.parse(date2));
		var unless_the_user = $("#unless_the_user_list").val();
		var pattern = /^\d+$/;
		var validation = [];

		if(triggerAction == null){
			$("#error_triggerAction").text("You need to create at least one trigger action for action-based delivery");
			validation["triggerAction"] = 0;
		}else{
			$("#error_triggerAction").text("");
			validation["triggerAction"] = 1;
		}

		if(scheduleDelay == 'After'){

			var scheduleDelay_afterTime = $("#scheduleDelay_afterTime").val();
			var scheduleDelay_afterTimeInterval = $("#scheduleDelay_afterTimeInterval").val();

			if($.trim(scheduleDelay_afterTime) == ''){
				$("#error_afterTimeInterval").text('This field is required.');
				$("#scheduleDelay_afterTime").css('border-color', '#424141');
				validation["scheduleDelay_afterTime"] = 0;

			}else{
				if(scheduleDelay_afterTime < 0){
					$("#error_afterTimeInterval").text('This field should be greater than or equal to 0.');
					$("#scheduleDelay_afterTime").css('border-color', '#424141');
					validation["scheduleDelay_afterTime"] = 0;

				}else{
				if(pattern.test(scheduleDelay_afterTime)){
					$("#error_afterTimeInterval").text('');
					$("#scheduleDelay_afterTime").css('border-color', '#ccc');
					validation["scheduleDelay_afterTime"] = 1;

				}else{
					$("#error_afterTimeInterval").text('This field should be a valid integer.');
					$("#scheduleDelay_afterTime").css('border-color', '#424141');
					validation["scheduleDelay_afterTime"] = 0;
				}
				}
			}

		}

		if(scheduleDelay == 'On the next'){

			var on_the_next_weekday = $("#on_the_next_day").val();
			var on_the_next_deliveryTime= $("#deliveryTime").val();

			if(on_the_next_deliveryTime == 'at'){
				var on_the_next_hours = $("#on_the_next_hours").val();
				var on_the_next_mins = $("#on_the_next_mins").val();
				var on_the_next_am = $("#on_the_next_am").val();
			}

		}

		if($('#actionDeliveryEndTimeEnabled').is(":checked") == false){
			if(to > from){
				$("#error_campaignDuration").text("");
				validation["campaignDuration"] = 1;
			}else{
				$("#error_campaignDuration").text("The end time of the delivery must come after the start time.");
				validation["campaignDuration"] = 0;
			}
		}else{
			$("#error_campaignDuration").text("");
			validation["campaignDuration"] = 1;
		}

		if($('#localTimeZone').is(":checked"))
		{
			var send_campaign_at_local_time_zone = 1;
		}else{
			var send_campaign_at_local_time_zone = 0;
		}

		if($('#campDuration1').is(":checked"))
		{
			var send_this_campaign_during_a_specific_portion_of_day = 1;
			var specific_start_hours = $("#actionDelivery_specific_start_hours").val();
			var specific_start_mins = $("#actionDelivery_specific_start_mins").val();
			var specific_start_am_pm = $("#actionDelivery_specific_start_am_pm").val();
			var specific_end_hours = $("#actionDelivery_specific_end_hours").val();
			var specific_end_mins = $("#actionDelivery_specific_end_mins").val();
			var specific_end_am_pm = $("#actionDelivery_specific_end_am_pm").val();

		}else{
			var send_this_campaign_during_a_specific_portion_of_day = 0;

		}

		if($('#actionDelivery_nextAvailableTime').is(":checked"))
		{
			var sendIfDeliveryTimeFallsOutsideSpecifiedPortion = 1;
		}else{
			var sendIfDeliveryTimeFallsOutsideSpecifiedPortion = 0;
		}

		if($('#campDuration2').is(":checked"))
		{
			var reEligible_to_receive_campaign = 1;

			var actionDeliveryTime_reEligibleTime = $("#actionDeliveryTime_reEligibleTime").val();
			var actionDeliveryTime_reEligibleTimeInterval = $("#actionDeliveryTime_reEligibleTimeInterval").val();

			if($.trim(actionDeliveryTime_reEligibleTime) == ''){
				$("#error_actionDeliveryTime_reEligible").text('This field is required.');
				$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
				validation["intelligentTime_reEligibleTime"] = 0;

			}else{
				if(actionDeliveryTime_reEligibleTime < 0){
					$("#error_actionDeliveryTime_reEligible").text('This field should be greater than or equal to 0.');
					$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
					validation["intelligentTime_reEligibleTime"] = 0;

				}else{
				if(pattern.test(actionDeliveryTime_reEligibleTime)){
					$("#error_actionDeliveryTime_reEligible").text('');
					$("#actionDeliveryTime_reEligibleTime").css('border-color', '#ccc');
					validation["intelligentTime_reEligibleTime"] = 1;

				}else{
					$("#error_actionDeliveryTime_reEligible").text('This field should be a valid integer.');
					$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
					validation["intelligentTime_reEligibleTime"] = 0;
				}
				}
			}
		}else{
			var reEligible_to_receive_campaign = 0;
			var actionDeliveryTime_reEligibleTime = '';
			var actionDeliveryTime_reEligibleTimeInterval = '';
			validation["intelligentTime_reEligibleTime"] = 1;
		}

		if($('#campDuration3').is(":checked"))
		{
			var ignore_frequency_capping_settings = 1;
		}else{
			var ignore_frequency_capping_settings = 0;
		}


		var rtnfalse = [];
	    var i = 0;
	    for (var item in validation)
	    {
	        if (validation[item] == 0)
	        {

	            rtnfalse[i] = 1;
	        } else {

	            rtnfalse[i] = 0;
	        }
	        i++;
	    }

	    var errorResult = jQuery.inArray(1, rtnfalse);

	    if(errorResult == -1){

	    	androidCampaign["deliveryType"] = deliveryType;
			androidCampaign["time_based_scheduling"] = time_based_scheduling;
	    	androidCampaign["triggerAction"] = triggerAction;
	    	androidCampaign["scheduleDelay"] = scheduleDelay;

	    	if(scheduleDelay == 'After'){
	    		androidCampaign["scheduleDelay_afterTime"] = scheduleDelay_afterTime;
	    		androidCampaign["scheduleDelay_afterTimeInterval"] = scheduleDelay_afterTimeInterval;
	    	}

	    	if(scheduleDelay == 'On the next'){

	    		androidCampaign["on_the_next_weekday"] = on_the_next_weekday;
	    		androidCampaign["on_the_next_deliveryTime"] = on_the_next_deliveryTime;

				if(on_the_next_deliveryTime == 'at'){
					androidCampaign["on_the_next_hours"] = on_the_next_hours;
					androidCampaign["on_the_next_mins"] = on_the_next_mins;
					androidCampaign["on_the_next_am"] = on_the_next_am;
				}else{
					androidCampaign["on_the_next_hours"] = '';
					androidCampaign["on_the_next_mins"] = '';
					androidCampaign["on_the_next_am"] = '';
				}
	    	}
	    	if(unless_the_user != null){

	    		androidCampaign["unless_the_user"] = unless_the_user;

			}else{
				androidCampaign["unless_the_user"] = '';
			}

	    	androidCampaign["campaignDuration_startTime_date"] = campaignDuration_startTime_date;
	    	androidCampaign["campaignDuration_startTime_hours"] = campaignDuration_startTime_hours;
	    	androidCampaign["campaignDuration_startTime_mins"] = campaignDuration_startTime_mins;
	    	androidCampaign["campaignDuration_startTime_am"] = campaignDuration_startTime_am;
	    	androidCampaign["campaignDuration_endTime_date"] = campaignDuration_endTime_date;
	    	androidCampaign["campaignDuration_endTime_hours"] = campaignDuration_endTime_hours;
	    	androidCampaign["campaignDuration_endTime_mins"] = campaignDuration_endTime_mins;
	    	androidCampaign["campaignDuration_endTime_am"] = campaignDuration_endTime_am;
	    	androidCampaign["send_campaign_at_local_time_zone"] = send_campaign_at_local_time_zone;
	    	androidCampaign["send_this_campaign_during_a_specific_portion_of_day"] = send_this_campaign_during_a_specific_portion_of_day;

	    	if(send_this_campaign_during_a_specific_portion_of_day == 1){
	    		androidCampaign["specific_start_hours"] = specific_start_hours;
	    		androidCampaign["specific_start_mins"] = specific_start_mins;
	    		androidCampaign["specific_start_am_pm"] = specific_start_am_pm;
	    		androidCampaign["specific_end_hours"] = specific_end_hours;
	    		androidCampaign["specific_end_mins"] = specific_end_mins;
	    		androidCampaign["specific_end_am_pm"] = specific_end_am_pm;
	    		}else{
	    			androidCampaign["specific_start_hours"] = '';
	    			androidCampaign["specific_start_mins"] = '';
		    		androidCampaign["specific_start_am_pm"] = '';
		    		androidCampaign["specific_end_hours"] = '';
		    		androidCampaign["specific_end_mins"] = '';
		    		androidCampaign["specific_end_am_pm"] = '';
	    		}
	    	androidCampaign["sendIfDeliveryTimeFallsOutsideSpecifiedPortion"] = sendIfDeliveryTimeFallsOutsideSpecifiedPortion;

	    	androidCampaign["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
	    	if(reEligible_to_receive_campaign == 1){
				androidCampaign["reEligibleTime"] = actionDeliveryTime_reEligibleTime;
				androidCampaign["reEligibleTimeInterval"] = actionDeliveryTime_reEligibleTimeInterval;
			}else{
				androidCampaign["reEligibleTime"] = '';
				androidCampaign["reEligibleTimeInterval"] = '';
			}
			androidCampaign["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;

			$("#delivery").hide();
	    	$("#deliveryTab").removeClass('active');
	    	$("#targetUsers").show();
	    	$("#targetTab").addClass('active');
	    	$("#deliveryCheckIcon").css('background','#00a651');
	    }



	}


	//alert(reEligible_to_receive_campaign);
	//androidCampaign["deliveryType"] = deliveryType;
	//jsonObj.push(androidCampaign);
	//jsonString = JSON.stringify(jsonObj);
	//alert(jsonString);
	//console.log(jsonString);

}

function backToDelivery(){

	$("#delivery").show();
	$("#deliveryTab").addClass('active');
	$("#targetUsers").hide();
	$("#targetTab").removeClass('active');
	$("#confirm").hide();
	$("#confirmTab").removeClass('active');
}

function validateTarget(){

	var pattern = /^\d+$/;
	var validation = [];

	if(($("#segmentWrap").html().trim()).length > 5 || ($("#filterWrap").html().trim()).length > 5){
		var segmentArrWrap = $("#segmentWrap").children('span');
		var filterArrWrap = $("#filterWrap").children('span');

		if(segmentArrWrap.length > 0){
			var segmentArr = new Array();
			for(i=0;i<segmentArrWrap.length;i++)
			{
				var text = $(segmentArrWrap[i]).text();
				var id = $(segmentArrWrap[i]).attr('id');
				id = id.replace('segment','');
				var newDataArr = new Array();
				newDataArr.push(id);
				//newDataArr.push(text);
				segmentArr.push(newDataArr);
			}
		}else{
			var segmentArr = new Array();
		}
		if(filterArrWrap.length > 0){
			var filterArr = new Array();
			for(i=0;i<filterArrWrap.length;i++)
			{
				var text = $(filterArrWrap[i]).text();
				var id = $(filterArrWrap[i]).attr('id');
				id = id.replace('filter','');
				var newDataArr = new Array();
				newDataArr.push(id);
				//newDataArr.push(text);
				filterArr.push(newDataArr);

			}
		}else{
			var filterArr = new Array();
		}

		$("#error_segment").text("");
		validation["segment"] = 1;

	}else{
		$("#error_segment").text("You must select at least one segment or at least one filter");
		validation["segment"] = 0;

	}

	/*if(($("#filterWrap").html().trim()).length > 5){
		var arr = $("#filterWrap").children('span');
		var dataArr = new Array();
		for(i=0;i<arr.length;i++)
		{
		var text = $(arr[i]).text();
		var id = $(arr[i]).attr('id');
		id = id.replace('filter','');
		var newDataArr = new Array();
		newDataArr.push(id);
		newDataArr.push(text);
		dataArr.push(newDataArr);

		}
		$("#error_filter").text("");
		validation["filter"] = 1;
	}else{
		$("#error_filter").text("Please select atleast one filter");
		validation["filter"] = 0;
	}*/

	var send_to_users = $("#sendCampaignToUserType").val();
	if($('#targetUsers_whoWillReceiveCampaign').is(":checked")){

		var selectedUsers_receiveCampaign = $("#selectedUsers_receiveCampaign").val();
		var no_of_users_who_receive_campaigns = $("#no_of_users_who_receive_campaigns").val();

		if($.trim(no_of_users_who_receive_campaigns) == ''){
			$("#error_noOfUsersWhoReceiveCampaigns").text('This field is required.');
			$("#no_of_users_who_receive_campaigns").css('border-color', '#424141');
			validation["no_of_users_who_receive_campaigns"] = 0;

		}else{
			if(no_of_users_who_receive_campaigns < 0){
				$("#error_noOfUsersWhoReceiveCampaigns").text('This field should be greater than or equal to 0.');
				$("#no_of_users_who_receive_campaigns").css('border-color', '#424141');
				validation["no_of_users_who_receive_campaigns"] = 0;

			}else{
			if(pattern.test(no_of_users_who_receive_campaigns)){
				$("#error_noOfUsersWhoReceiveCampaigns").text('');
				$("#no_of_users_who_receive_campaigns").css('border-color', '#ccc');
				validation["no_of_users_who_receive_campaigns"] = 1;

			}else{
				$("#error_noOfUsersWhoReceiveCampaigns").text('This field should be a valid integer.');
				$("#no_of_users_who_receive_campaigns").css('border-color', '#424141');
				validation["no_of_users_who_receive_campaigns"] = 0;
			}
			}
		}

	}else{
		var selectedUsers_receiveCampaign = '';
		var no_of_users_who_receive_campaigns = '';
	}

	if($('#send_this_push_to_users_most_recently_used_device').is(":checked")){
		var messages_per_minute = $("#messages_per_minute").val();
	}else{
		var messages_per_minute = '';
	}

	var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {

            rtnfalse[i] = 1;
        } else {

            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if(errorResult == -1){

    	androidCampaign["segments"] = segmentArr;
    	androidCampaign["filters"] = filterArr;
    	androidCampaign["send_to_users"] = send_to_users;
    	androidCampaign["receiveCampaignType"] = selectedUsers_receiveCampaign;
    	androidCampaign["no_of_users_who_receive_campaigns"] = no_of_users_who_receive_campaigns;
    	androidCampaign["messages_per_minute"] = messages_per_minute;

        if(androidCampaign["selectedPlatform"] == 'android'){
            var androidCrentials = parseInt($("#androidCrentials").val());
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

        if(androidCampaign["selectedPlatform"] == 'iOS'){
            var iosCredentials = parseInt($("#iosCredentials").val());
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

    	if(androidCampaign["selectedPlatform"] == 'iOS'){
    		$("#standard_preview_title").html("&nbsp;");
    	}else{
    		$("#standard_preview_title").text(androidCampaign["push_title"]);
    	}

    	if(androidCampaign["selectedPlatform"] == 'email'){
    		$("#standard_preview_message").html(androidCampaign["push_message"]);
    	}else{
    		$("#standard_preview_message").html(androidCampaign["push_message"].slice(0,47));
    	}
    	if(androidCampaign["selectedPlatform"] == 'iOS'){
    		$("#extended_preview_title").html("&nbsp;");
    	}else{
    		$("#extended_preview_title").text(androidCampaign["push_title"]);
    	}

		$("#extended_preview_message").html(androidCampaign["push_message"]);

		var push_icon = $("#push_icon").val();
		var push_img_url = $("#push_img_url").val();
		var expandedImage = $("#expandedImage").val();
		var expanded_img_url = $("#expanded_img_url").val();

		var segmentList = [] ;
		var segmentArr = [].concat.apply([], segmentArr);

		for(var i in segmentArr)
		{
			switch (segmentArr[i]) {
			    case '1':
			    	segmentList.push(' Lapsed Users - 7 days');
			        break;
			    case '2':
			    	segmentList.push(' User Onboarding - First Week');
			        break;
			    case '3':
			    	segmentList.push(' User Onboarding - Second Week');
			        break;
			    case '4':
			    	segmentList.push(' Engaged Recent Users');
			        break;
			    case '5':
			    	segmentList.push(' All Users');
			        //break;
			    //case '6':
			    	//segmentList.push(' All Users (OLA - iOS)');

			}
		}
		if(segmentList.length != 0){
			$("#segmentsList").text(segmentList);
		}else{
			$("#segmentsList").text('Not selected');
		}


		var filtersList = [];
		var filterArr = [].concat.apply([], filterArr);
		for(var i in filterArr)
		{
			switch (filterArr[i]) {
			    case '1':
			    	filtersList.push(' Custom Attributes');
			        break;
			    case '2':
			    	filtersList.push(' Custom Event');
			        break;
			    case '3':
			    	filtersList.push(' First Did Custom Event');
			        break;
			    case '4':
			    	filtersList.push(' Last Did Custom Event');
			        break;
			    case '5':
			    	filtersList.push(' X Custom Event In Y Days');
			        break;
			    case '6':
			    	filtersList.push(' First Made Purchase');
			    	break;
			    case '7':
			    	filtersList.push(' First Purchased Product');
			    	break;
			    case '8':
			    	filtersList.push(' First Used App');
			    	break;
			    case '9':
			    	filtersList.push(' Last Made Purchase');
			    	break;
			    case '10':
			    	filtersList.push(' Last Purchased Product');
			    	break;
			    case '11':
			    	filtersList.push(' Last Submitted Feedback');
			    	break;
			    case '12':
			    	filtersList.push(' Last Used App');
			    	break;
			    case '13':
			    	filtersList.push(' Median Session Duration');
			    	break;
			    case '14':
			    	filtersList.push(' Money Spent In-App');
			    	break;
			    case '15':
			    	filtersList.push(' Most Recent App Version');
			    	break;
			    case '16':
			    	filtersList.push(' Most Recent Location');
			    	break;
			    case '17':
			    	filtersList.push(' Number of Feedback Items');
			    	break;
			    case '18':
			    	filtersList.push(' Purchased Product');
			    	break;
			    case '19':
			    	filtersList.push(' Session Count');
			    	break;
			    case '20':
			    	filtersList.push(' Total Number of Purchases');
			    	break;
			    case '21':
			    	filtersList.push(' Uninstall Date');
			    	break;
			    case '22':
			    	filtersList.push(' Uninstalled');
			    	break;
			    case '23':
			    	filtersList.push(' X Money Spent in Last Y Days');
			    	break;
			    case '24':
			    	filtersList.push(' X Product Purchased In Y Days');
			    	break;
			    case '25':
			    	filtersList.push(' X Purchases in Last Y Days');
			    	break;
			    case '26':
			    	filtersList.push(' X Sessions in Last Y Days');
			    	break;
			    case '27':
			    	filtersList.push(' User views app page');
			}
		}

		if(filtersList.length != 0){
			$("#filtersList").text(filtersList);
		}else{
			$("#filtersList").text('Not selected');
		}

		if(androidCampaign["selectedPlatform"] != 'email'){
		var url = $(location).attr('href');
		var youtubeimgsrc = document.getElementById("android_app_img").src;
		var push_img_url = $("#push_img_url").val();
		var expandedimgsrc = document.getElementById("ios_app_img").src;
		var expanded_img_url = $("#expanded_img_url").val();
		var iOSAppImage = $("#iOSAppImage").val();
		var baseurl = $("#baseurl").val();
		if(youtubeimgsrc == url && push_img_url == ''){
			$("#standard_preview_icon").html("");
			$("#extended_preview_icon").html("");

			if(androidCampaign["selectedPlatform"] == 'iOS'){
				youtubeimgsrc = iOSAppImage;

				$("#standard_preview_icon").html('<img style="border-radius:15px;" src="'+ youtubeimgsrc +'"/>');
				$("#extended_preview_icon").html('<img style="border-radius:15px;" src="'+ youtubeimgsrc +'"/>');
			}

		}else if(youtubeimgsrc != url && push_img_url == ''){
			$("#standard_preview_icon").html('<img style="border-radius:15px;" src="'+ youtubeimgsrc +'"/>');
			$("#extended_preview_icon").html('<img style="border-radius:15px;" src="'+ youtubeimgsrc +'"/>');
		}else if(youtubeimgsrc == url && push_img_url != ''){
			$("#standard_preview_icon").html('<img style="border-radius:15px;" src="'+ push_img_url +'"/>');
			$("#extended_preview_icon").html('<img style="border-radius:15px;" src="'+ push_img_url +'"/>');
		}

		if(expandedimgsrc == url && expanded_img_url == ''){
			$("#standard_preview_expanded_crop").html("");
			$("#extended_preview_expanded_crop").html("");
		}else if(expandedimgsrc != url && expanded_img_url == ''){
			$("#standard_preview_expanded_crop").html('<img src="'+ expandedimgsrc +'"/>');
			$("#extended_preview_expanded_crop").html('<img src="'+ expandedimgsrc +'"/>');
		}else if(expandedimgsrc == url && expanded_img_url != ''){
			$("#standard_preview_expanded_crop").html('<img src="'+ expanded_img_url +'"/>');
			$("#extended_preview_expanded_crop").html('<img src="'+ expanded_img_url +'"/>');
		}

        if(androidCampaign["push_notification_image"] != ''){
            $(".dragImg").html('<img src="'+androidCampaign["push_notification_image"]+'">');
        }

		}

		if(androidCampaign["deliveryType"] == 1){
			if(androidCampaign["time_based_scheduling"] == 1){
				$("#preview_time_based").text("Sending Immediately");
			}
			if(androidCampaign["time_based_scheduling"] == 2){
				 var d = new Date(androidCampaign['on_date']);
				 var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				 var time_based_scheduling_date = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

				var send = $("#send").val();
				if(send == 'once'){
					$("#preview_time_based").text(time_based_scheduling_date + ' at ' +androidCampaign["starting_at_hour"]+':'+androidCampaign["starting_at_min"]+androidCampaign["starting_at_am_pm"]);
				}
				else if(send == 'daily'){
					$("#preview_time_based").text('Daily at ' +androidCampaign["starting_at_hour"]+':'+androidCampaign["starting_at_min"]+androidCampaign["starting_at_am_pm"]);
				}
				else if(send == 'weekly'){
					$("#preview_time_based").text('Weekly on ' + androidCampaign["weekday"] + ' at ' + androidCampaign["starting_at_hour"]+':'+androidCampaign["starting_at_min"]+androidCampaign["starting_at_am_pm"]);
				}
				else if(send == 'monthly'){

					$("#preview_time_based").text('Monthly at ' + androidCampaign["starting_at_hour"]+':'+androidCampaign["starting_at_min"]+androidCampaign["starting_at_am_pm"])
				}

			}
			if(androidCampaign["time_based_scheduling"] == 3){
				var send = $("#intelligent_send").val();
				if(send == 'once'){
					androidCampaign["intelligent_on_date"]
					var d = new Date(androidCampaign['intelligent_on_date']);
					 var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
					 var time_based_scheduling_date = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

					$("#preview_time_based").text(time_based_scheduling_date + ' at at optimal messaging times');
				}
			}
		}

		if(androidCampaign["selectedPlatform"] == 'iOS'){
			var totalAndroidCampaign = $("#totalAndroidCampaign").val();
			if(totalAndroidCampaign > 0 || totalAndroidCampaign == 'unlimited'){
				$("#copy_push_block").css('display','block');
			}else{
				$("#copy_push_block").css('display','none');
			}
			$("#copy_other_platform").text("ANDROID");
		}

		if(androidCampaign["selectedPlatform"] == 'android'){
			var totaliOSCampaign = $("#totaliOSCampaign").val();
			if(totaliOSCampaign > 0 || totaliOSCampaign == 'unlimited'){
				$("#copy_push_block").css('display','block');
			}else{
				$("#copy_push_block").css('display','none');
			}
			$("#copy_other_platform").text("IOS");
		}



    	$("#targetUsers").hide();
    	$("#targetTab").removeClass('active');
    	$("#confirm").show();
    	$("#confirmTab").addClass('active');
    	$("#targetCheck").css('background','#00a651');
    }

}

function backToTarget(){

	$("#targetUsers").show();
	$("#targetTab").addClass('active');
	$("#confirm").hide();
	$("#confirmTab").removeClass('active');
}

function checkTitle(){

	var copy_title = $("#copy_title").val();
	if($.trim(copy_title) == ''){
		$("#error_copy_title").text('Please enter title');
		$("#copy_title").css('border-color', '#424141');
		validation['copy_title'] = 0;
	}else{
		$("#error_copy_title").text('');
		$("#copy_title").css('border-color', '#ccc');
		validation['copy_title'] = 1;
	}

}

function launchCampaign(){
	var baseurl = $("#baseurl").val();

	if($('input[name="copy_push"]:checked').val() == 1){
		androidCampaign["copy_push"] = 1;
	}else{
		androidCampaign["copy_push"] = '';
	}

	if(androidCampaign["selectedPlatform"] == 'iOS'){
		var copy_title = $("#copy_title").val();
		androidCampaign["copy_title"] = copy_title;
	}else{
		androidCampaign["copy_title"] = '';
	}

	jsonObj.push(androidCampaign);
	jsonString = JSON.stringify(jsonObj);
	//alert(jsonString);
	//console.log(jsonString); return false;
	$('.modal').modal('hide');
	$(".campaign-loader").css('display','block');
	$.ajax({

		type: "POST",
        url: baseurl + 'appUser/savePushNotificationCampaign',
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
        	//alert(data); return false;
        	if(data != ''){

        	//$("#launchCampaign").trigger("click");
        	//setTimeout(function(){
        		//$(".campaign-loader").css('display','none');
        		//$('.modal').modal('hide');
        		/*if(androidCampaign["selectedPlatform"] == 'email'){
        			if(androidCampaign["campaignId"] == ''){
            		window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
        			}else{
        				window.parent.location.href =  baseurl+"appUser/editEmailCampaign/"+androidCampaign["campaignId"];
        			}
            	}else{
            		if(androidCampaign["campaignId"] == ''){
            			window.parent.location.href =  baseurl+"appUser/campaigns/";
            		}else{
            			window.parent.location.href =  baseurl+"appUser/editCampaigns/"+androidCampaign["campaignId"];
            		}
            	}*/

        //		}, 1000);
            $(".campaign-loader").css('display','none');
            $.ajax({
                     url: baseurl + "appUser/postcampaign/",
                     type: "POST",
                     data: "campaignId=" + $.trim(data),
                     context: document.body,
                     success: function(data) {
                         var postUrl = baseurl + "appUser/fbPostOffer";
                         $('#post_facebook_page').attr('href', postUrl + '/' + $.trim(data));
                         $('#post_facebook_page').trigger('click'); //post_facebook_page
                         //  $("#success_message").text();
                     }
                 });//window.location.reload();
	            if(androidCampaign["selectedPlatform"] == 'email'){
	            	window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
	            }
        	}
        }
	});
	//jsonObj = [];
	//androidCampaign = {};
	//return false;
}

jsonComposeObj = [];
composeDraft = {};

function saveComposeAsDraft(){

 	var baseurl = $("#baseurl").val();
 	var selectedPlatform = $("#selectedPlatform").val();
 	var groupId = $("#groupId").val();
 	var campaignName = $("#campaignName").val();
 	var push_title = $("#push_title").val();
 	var push_message = $("#push_message").val();
 	var summery_text = $("#summery_text").val();
 	var custom_url = $("#custom_url").val();
 	var campaignId = $("#campaignId").val();
    var message_category = $("#message_category").val();
    var campaignPersonaUser = $("#campaignPersonaUser").val();
    var campaignList = $("#campaignLists").val();
    var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
    var domain = $("#domain").val();
    var allowedDomains = [];
    allowedDomains.push(domain);
if(campaignPersonaUser != ""){
  campaignPersonaUser = campaignPersonaUser;
}else{
  campaignPersonaUser = "";
}

if(campaignList != ""){
  campaignList = campaignList;
}else{
  campaignList = "";
}

var automation = 0;

    if($( ".imgInputField" ).has( "img" ).length){
        if(selectedPlatform == 'android'){
           var push_notification_image = $("#android_push_notification_image").attr('src');
        }else{
            var push_notification_image = $("#ios_push_notification_image").attr('src');
        }

    }else{
        var push_notification_image = '';
    }
 	/*if(custom_url == '1'){
		var redirect_url = $("#ios_redirect_url").val();
 	}else{
 		var redirect_url = '';
 	}*/
 	//var type = $("#campaign_type").val();

	if(selectedPlatform == 'android'){
		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}
	}
	if(selectedPlatform == 'iOS'){

		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}

		if($('input[name="limit_this_push_to_iPad_devices"]:checked').val() == 1){
			var limit_this_push_to_iPad_devices = $('input[name="limit_this_push_to_iPad_devices"]:checked').val();
		}else{
			var limit_this_push_to_iPad_devices = "";
		}

		if($('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val() == 1){
			var limit_this_push_to_iphone_and_ipod_devices = $('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val();
		}else{
			var limit_this_push_to_iphone_and_ipod_devices = "";
		}

	}

 	var push_icon = $("#push_icon").val();
 	var push_img_url = $("#push_img_url").val();
 	var expandedImage = $("#expandedImage").val();
 	var expanded_img_url = $("#expanded_img_url").val();
 	var validation = [];

    if($.trim(campaignName) == ''){
        $("#error_campaignName").text("Please enter Campaign name");
        $('html,body').animate({
                    scrollTop: $("#composeTab").offset().top},
                'slow');
        $("#campaignName").css('border-color', '#424141');
        validation['campaignName'] = 0;
    }else{
        $("#error_campaignName").text("");
        $("#campaignName").css('border-color', '#ccc');
        validation['campaignName'] = 1;
//        if(/^[a-zA-Z0-9- ]*$/.test($.trim(campaignName)) != false) {
//            $("#error_campaignName").text("");
//            $("#campaignName").css('border-color', '#ccc');
//            validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
    }

 	if(selectedPlatform == 'android'){
		if($.trim(push_title) == ''){
			$("#error_pushTitle").text('Please enter title');
			$("#push_title").css('border-color', '#424141');
			validation['push_title'] = 0;
		}else{
			$("#error_pushTitle").text('');
			$("#push_title").css('border-color', '#ccc');
			validation['push_title'] = 1;
		}


		if($.trim(push_message) == ''){
			$("#error_pushMsg").text('Please enter message');
			$("#push_message").css('border-color', '#424141');
			validation['push_message'] = 0;
		}else{
			$("#error_pushMsg").text('');
			$("#push_message").css('border-color', '#ccc');
			validation['push_message'] = 1;
		}
	}

	if(selectedPlatform == 'iOS'){
		var push_iOS_message = $("#push_iOS_message").val();

		if($.trim(push_iOS_message) == ''){
			$("#error_iOSpushMsg").text('Please enter message');
			$("#push_iOS_message").css('border-color', '#424141');
			validation['push_iOS_message'] = 0;
		}else{
			$("#error_iOSpushMsg").text('');
			$("#push_iOS_message").css('border-color', '#ccc');
			validation['push_iOS_message'] = 1;
		}
	}

if(selectedPlatform == 'android'){

		var custom_url = $("#android_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#android_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

			if($.trim(redirect_url) == ''){
				$("#error_android_redirect_url").text("Please enter Web URL");
				$("#android_redirect_url").css('border-color', '#424141');
				validation['android_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_android_redirect_url").text("Please enter valid Web URL");
					$("#android_redirect_url").css('border-color', '#424141');
					validation['android_redirect_url'] = 0;
				}else{
					$("#error_android_redirect_url").text("");
					$("#android_redirect_url").css('border-color', '#ccc');
					validation['android_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#android_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_android_deep_link").text("Please enter Web URL");
				$("#android_deep_link").css('border-color', '#424141');
				validation['android_deep_link'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_android_deep_link").text("Please enter valid Web URL");
					$("#android_deep_link").css('border-color', '#424141');
					validation['android_deep_link'] = 0;
				}else{
					$("#error_android_deep_link").text("");
					$("#android_deep_link").css('border-color', '#ccc');
					validation['android_deep_link'] = 1;
				}
			}

		}

		if(custom_url == '3'){
			$("#error_android_redirect_url").text("");
			$("#android_redirect_url").css('border-color', '#ccc');
			validation['android_redirect_url'] = 1;
			validation['android_deep_link'] = 1;
		}

		/*else{
			$("#error_android_redirect_url").text("");
			$("#android_redirect_url").css('border-color', '#ccc');
			validation['android_redirect_url'] = 1;
		}*/
	}

	if(selectedPlatform == 'iOS'){
		var custom_url = $("#ios_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#ios_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_redirect_url").text("Please enter Web URL");
				$("#ios_redirect_url").css('border-color', '#424141');
				validation['ios_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_redirect_url").text("Please enter valid Web URL");
					$("#ios_redirect_url").css('border-color', '#424141');
					validation['ios_redirect_url'] = 0;
				}else{
					$("#error_ios_redirect_url").text("");
					$("#ios_redirect_url").css('border-color', '#ccc');
					validation['ios_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#ios_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_deep_link").text("Please enter Web URL");
				$("#ios_deep_link").css('border-color', '#424141');
				validation['ios_deep_link'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_deep_link").text("Please enter valid Web URL");
					$("#ios_deep_link").css('border-color', '#424141');
					validation['ios_deep_link'] = 0;
				}else{
					$("#error_ios_deep_link").text("");
					$("#ios_deep_link").css('border-color', '#ccc');
					validation['ios_deep_link'] = 1;
				}
			}
		}
		if(custom_url == '3'){
			$("#error_ios_redirect_url").text("");
			$("#ios_redirect_url").css('border-color', '#ccc');
			validation['ios_redirect_url'] = 1;
			validation['ios_deep_link'] = 1;
		}
		/*else{
			$("#error_ios_redirect_url").text("");
			$("#ios_redirect_url").css('border-color', '#ccc');
			validation['ios_redirect_url'] = 1;
		}*/
	}

if(selectedPlatform == 'email'){

		var emailSettings = $("#emailSettings").val();
                var displayName = $("#displayName").val();
		var fromAddress = $("#fromAddress").val();
		var replyToAddress = $("#replyToAddress").val();
                var subject = $("#subject").val();
                var editor = $('#editor').froalaEditor('html.get');
		var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
                if(emailSettings == 0){
                    if($.trim(displayName) == ''){
                        $("#error_displayName").text('Please enter Display Name');
                        $("#displayName").css('border-color', '#424141');
                        validation['displayName'] = 0;
                    }else{
                        $("#error_displayName").text('');
                        $("#displayName").css('border-color', '#ccc');
                        validation['displayName'] = 1;
                    }
                    
                    if($.trim(fromAddress) == ''){
                        $("#error_fromAddress").text('Please enter From Address');
                        $("#fromAddress").css('border-color', '#424141');
                        validation['fromAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(fromAddress);
                        if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            str = fromAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_fromAddress").text("");
                                $("#fromAddress").css('border-color', '#ccc');
                                validation['fromAddress'] = 1;
                            }else{
                                $("#error_fromAddress").text("Please enter email of " + domain + " only");
                                $("#fromAddress").css('border-color', '#424141');
                                validation['fromAddress'] = 0;
                            }  
			}
                    }
                    
                    if($.trim(replyToAddress) == ''){
                        $("#error_replyToAddress").text('Please enter Reply-To Address');
                        $("#replyToAddress").css('border-color', '#424141');
                        validation['replyToAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(replyToAddress);
                        if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            str = replyToAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_replyToAddress").text("");
                                $("#replyToAddress").css('border-color', '#ccc');
                                validation['replyToAddress'] = 1;
                            }else{
                                $("#error_replyToAddress").text("Please enter email of " + domain + " only");
                                $("#replyToAddress").css('border-color', '#424141');
                                validation['replyToAddress'] = 0;
                            }
			}
                    }
                    
                }else{
                    if($.trim(fromAddress) != ''){
			var isvalid = emailRegexStr.test(fromAddress);
			if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            str = fromAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_fromAddress").text("");
                                $("#fromAddress").css('border-color', '#ccc');
                                validation['fromAddress'] = 1;
                            }else{
                                $("#error_fromAddress").text("Please enter email of " + domain + " only");
                                $("#fromAddress").css('border-color', '#424141');
                                validation['fromAddress'] = 0;
                            }  
			}
                    }else{
			$("#error_fromAddress").text("");
                        $("#fromAddress").css('border-color', '#ccc');
                        validation['fromAddress'] = 1;
                    }
                    
                    if($.trim(replyToAddress) != ''){
			var isvalid = emailRegexStr.test(replyToAddress);
			if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            str = replyToAddress.split('@').slice(1);
                                    
                            if ($.inArray(str[0], allowedDomains) !== -1) {
                                $("#error_replyToAddress").text("");
                                $("#replyToAddress").css('border-color', '#ccc');
                                validation['replyToAddress'] = 1;
                            }else{
                                $("#error_replyToAddress").text("Please enter email of " + domain + " only");
                                $("#replyToAddress").css('border-color', '#424141');
                                validation['replyToAddress'] = 0;
                            }
			}
                    }else{
			$("#error_replyToAddress").text("");
                        $("#replyToAddress").css('border-color', '#ccc');
                        validation['replyToAddress'] = 1;
                    }
                }
                
		
		//var editor = tinyMCE.activeEditor.getContent();
		//var editor = $('#editor').summernote('code');
		

		if($.trim(subject) == ''){
			$("#error_subject").text('Please enter subject');
			$("#subject").css('border-color', '#424141');
			validation['subject'] = 0;
		}else{
			$("#error_subject").text('');
			$("#subject").css('border-color', '#ccc');
			validation['subject'] = 1;
		}
                
                if(editor == ''){
                    //console.log(editor);
                    validation['body'] = 0;
                    $("#error_body").css('font-weight','bold');
                    $("#error_body").text('Body cannot be empty');
                }else{
                    //console.log(editor);
                    var str2 = "&lbrace;&lbrace;&dollar;&lbrace;set_user_to_unsubscribed_url&rbrace;&rbrace;&rbrace;";
                    if(editor.indexOf(str2) != -1){

                        $("#error_body").text('');
                        validation['body'] = 1;
                    }else{
                        $("#error_body").css('font-weight','bold');
                        $("#error_body").text('Please add unsubscribe link attribute');
                        validation['body'] = 0;
                    }
                }

		if($('input[name="plainEditor"]:checked').val() == 1){
			var plainEditor = $('input[name="plainEditor"]:checked').val();
		}else{
			var plainEditor = '';
		}

		if(plainEditor == '1'){
			// Plain text message
			var message = $("#plainText").val().replace(/\n/g, '<br/>');   //$("#plainText").val();
		}else{
			//Editor message
			var message = editor;
		}


	}

 	var rtnfalse = [];
     var i = 0;
     for (var item in validation)
     {
         if (validation[item] == 0)
         {
             rtnfalse[i] = 1;
         } else {
             rtnfalse[i] = 0;
         }
         i++;
     }

     var errorResult = jQuery.inArray(1, rtnfalse);

    if(errorResult == -1){

 	composeDraft["selectedPlatform"] = selectedPlatform;
 	composeDraft["groupId"] = groupId;
 	composeDraft["campaignName"] = campaignName;
 	composeDraft["campaignId"] = campaignId;
    composeDraft["message_category"] = message_category;
    composeDraft["automation"] = automation;
    composeDraft["campaignPersonaUser"] = campaignPersonaUser;
    composeDraft["campaignList"] = campaignList;
    composeDraft["push_notification_image"] = push_notification_image;

 	if(selectedPlatform == 'android'){
 		composeDraft["push_title"] = push_title;
 		composeDraft["push_message"] = push_message;
 		composeDraft["summery_text"] = summery_text;
	}
	if(selectedPlatform == 'iOS'){
		composeDraft["push_message"] = push_iOS_message;
	}
	if(selectedPlatform == 'email'){
		composeDraft["push_title"] = subject;
		composeDraft["push_message"] = message;
		composeDraft["displayName"] = displayName;
		composeDraft["fromAddress"] = fromAddress;
		composeDraft["replyToAddress"] = replyToAddress;
	}
	composeDraft["custom_url"] = custom_url;
	if(custom_url == '1' || custom_url == '2'){
		composeDraft["redirect_url"] = redirect_url;
	}else{
		composeDraft["redirect_url"] = '';
	}
	/*if(custom_url == '2'){
		composeDraft["deep_link"] = deep_link;
		composeDraft["redirect_url"] = '';
	}
	if(custom_url == '3'){
		composeDraft["redirect_url"] = '';
		composeDraft["deep_link"] = '';
	}*/


	if(selectedPlatform == 'android'){
		composeDraft["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
	}
	if(selectedPlatform == 'iOS'){
		composeDraft["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
		composeDraft["limit_this_push_to_iPad_devices"] = limit_this_push_to_iPad_devices;
		composeDraft["limit_this_push_to_iphone_and_ipod_devices"] = limit_this_push_to_iphone_and_ipod_devices;
	}

 	composeDraft["push_icon"] = push_icon;
 	composeDraft["expandedImage"] = expandedImage;
 	composeDraft["push_img_url"] = push_img_url;
 	composeDraft["expanded_img_url"] = expanded_img_url;

 	//composeDraft["type"] = type;

 	jsonComposeObj.push(composeDraft);
 	jsonString = JSON.stringify(jsonComposeObj);

 	$(".campaign-loader").css('display','block');
 	$.ajax({

 		type: "POST",
         url: baseurl + 'appUser/saveComposeAsDraft',
         data: jsonString,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function(data){
         	if(data == 1){
         	$(".campaign-loader").css('display','none');
         	if(selectedPlatform == 'email'){
         		window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
         	}else{
         		window.parent.location.href =  baseurl+"appUser/campaigns/";
         	}

         	}
         }

 	});

    }else{
 	   return false;
    }
 }
 
 jsonDeliveryObj = [];
 deliveryDraft = {};
 
 function saveDeliveryAsDraft(){

	 var baseurl = $("#baseurl").val();

	 deliveryDraft["selectedPlatform"] = androidCampaign["selectedPlatform"];
	 deliveryDraft["campaignName"] = androidCampaign["campaignName"];

	 deliveryDraft["custom_url"] = androidCampaign["custom_url"];
	 deliveryDraft["redirect_url"] = androidCampaign["redirect_url"];
	 //deliveryDraft["deep_link"] = androidCampaign["deep_link"];
	 deliveryDraft["expandedImage"] = androidCampaign["expandedImage"];
	 deliveryDraft["expanded_img_url"] = androidCampaign["expanded_img_url"];
	 deliveryDraft["groupId"] = androidCampaign["groupId"];
	 deliveryDraft["push_icon"] = androidCampaign["push_icon"];
	 deliveryDraft["push_img_url"] = androidCampaign["push_img_url"];
	 deliveryDraft["campaignId"] = androidCampaign["campaignId"];
     deliveryDraft["message_category"] = androidCampaign["message_category"];
     deliveryDraft["automation"] = androidCampaign['automation'];
     deliveryDraft["campaignPersonaUser"] = androidCampaign["campaignPersonaUser"];
     deliveryDraft["campaignList"] = androidCampaign["campaignList"];
     deliveryDraft["push_notification_image"] = androidCampaign["push_notification_image"];

	 if(androidCampaign["selectedPlatform"] == 'android'){
		 deliveryDraft["push_message"] = androidCampaign["push_message"];
		 deliveryDraft["push_title"] = androidCampaign["push_title"];
		 deliveryDraft["summery_text"] = androidCampaign["summery_text"];
	 }
	 if(androidCampaign["selectedPlatform"] == 'iOS'){
		 deliveryDraft["push_message"] = androidCampaign["push_message"];
	 }
	 if(androidCampaign["selectedPlatform"] == 'android'){
		 deliveryDraft["send_push_to_recently_used_device"] = androidCampaign["send_push_to_recently_used_device"];
	 }
	 if(androidCampaign["selectedPlatform"] == 'iOS'){
		 deliveryDraft["send_push_to_recently_used_device"] = androidCampaign["send_push_to_recently_used_device"];
		 deliveryDraft["limit_this_push_to_iPad_devices"] = androidCampaign["limit_this_push_to_iPad_devices"];
		 deliveryDraft["limit_this_push_to_iphone_and_ipod_devices"] = androidCampaign["limit_this_push_to_iphone_and_ipod_devices"];
	 }

	 if(androidCampaign["selectedPlatform"] == 'email'){
		 deliveryDraft["push_title"] = androidCampaign["push_title"];;
		 deliveryDraft["push_message"] = androidCampaign["push_message"];
		 deliveryDraft["displayName"] = androidCampaign["displayName"];
		 deliveryDraft["fromAddress"] = androidCampaign["fromAddress"];
		 deliveryDraft["replyToAddress"] = androidCampaign["replyToAddress"];
		}

	 //deliveryDraft["type"] = androidCampaign["type"];

	 if($("input[name='deliveryType']:checked").val() == 'schedule-delivery'){
			var deliveryType = 1;
		}else{
			var deliveryType = 2;
		}
	 if(deliveryType == 1){

			if($("input[name='timeBased']:checked").val() == 'at-launch'){
				var time_based_scheduling = 1;
			}

			else if($("input[name='timeBased']:checked").val() == 'designated-time'){
				var time_based_scheduling = 2;
			}
			else{
				var time_based_scheduling = 3;
			}

		if(time_based_scheduling == 1){
			var error_atlaunch_reEligible = 1;
			var pattern = /^\d+$/;

			if ($('#atlaunch1').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var atlaunch_reEligibleTime = $("#atlaunch_reEligibleTime").val();
				var atlaunch_reEligibleTimeInterval = $("#atlaunch_reEligibleTimeInterval").val();

				if($.trim(atlaunch_reEligibleTime) == ''){
					$("#error_atlaunch_reEligible").text('This field is required.');
					$("#atlaunch_reEligibleTime").css('border-color', '#424141');
					error_atlaunch_reEligible = 0;
				}else{
					if(atlaunch_reEligibleTime < 0){
						$("#error_atlaunch_reEligible").text('This field should be greater than or equal to 0.');
						$("#atlaunch_reEligibleTime").css('border-color', '#424141');
						error_atlaunch_reEligible = 0;

					}else{
					if(pattern.test(atlaunch_reEligibleTime)){
						$("#error_atlaunch_reEligible").text('');
						$("#atlaunch_reEligibleTime").css('border-color', '#ccc');
						error_atlaunch_reEligible = 1;
					}else{
						$("#error_atlaunch_reEligible").text('This field should be a valid integer.');
						$("#atlaunch_reEligibleTime").css('border-color', '#424141');
						error_atlaunch_reEligible = 0;
					}
					}
				}
			}else{

				var reEligible_to_receive_campaign = 0;
				error_atlaunch_reEligible = 1;
			}

			if($('#atlaunch2').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}


		}

		if(time_based_scheduling == 2){
			var error_weekday = 1;
			var error_designatedTime_reEligible = 1;
			var pattern = /^\d+$/;
			var send = $("#send").val();

			var starting_at_hour = $("#starting_at_hour").val();
			var starting_at_min = $("#starting_at_min").val();
			var starting_at_am_pm = $("#starting_at_am_pm").val();

			if(send == 'once'){
			var on_date = $("#date").val();
			}
			else if(send == 'daily'){
				var everyDay = $("#everyDay").val();
				var beginning_date = $("#beginning_date").val();
				var ending = $("#ending").val();

				if(ending == 'on_the_date'){
					var ending_on_the_date = $("#ending_on_the_date").val();
					var ending_after_occurances = '';
				}
				if(ending == 'after'){
					var ending_on_the_date = '';
					var ending_after_occurances = $("#ending_after_occurances").val();
				}
				if(ending == 'never'){
					var ending_on_the_date = '';
					var ending_after_occurances = '';
				}
			}
			else if(send == 'weekly'){

				//var everyWeek = $("#everyWeek").val();
				var allVals = [];
				 $('[name=weekday]:checked').each(function() {
				   allVals.push($(this).val());
				 });
				 var weekday = allVals;
				 var beginning_date = $("#weeks_beginning_date").val();
				 var ending = $("#weeks_ending").val();

				 if(weekday.length == 0){
					 $("#error_weekday").text('Select at least one day of the week');
					 error_weekday = 0;
				 }else{
					 $("#error_weekday").text('');
					 error_weekday = 1;
				 }

				 if(ending == 'on_the_date'){
						var ending_on_the_date = $("#weeks_ending_on_the_date").val();
						var ending_after_occurances = '';
				 }
				 if(ending == 'after'){
						var ending_on_the_date = '';
						var ending_after_occurances = $("#weeks_ending_after_occurances").val();
				 }
				 if(ending == 'never'){
						var ending_on_the_date = '';
						var ending_after_occurances = '';
				 }

			}
			else if(send == 'monthly'){

				var everyMonth = $("#everyMonth").val();
				var beginning_date = $("#month_beginning_date").val();
				var ending = $("#month_ending").val();

				if(ending == 'on_the_date'){
					var ending_on_the_date = $("#monthly_ending_on_the_date").val();
					var ending_after_occurances = '';
				}
				if(ending == 'after'){
					var ending_on_the_date = '';
					var ending_after_occurances = $("#monthly_ending_after_occurances").val();
				}
				if(ending == 'never'){
					var ending_on_the_date = '';
					var ending_after_occurances = '';
				}
			}

			if($('#designatedtime1').is(":checked"))
			{
				var send_campaign_to_users_in_their_local_time_zone = 1;
			}else{
				var send_campaign_to_users_in_their_local_time_zone = 0;
			}

			if($('#designatedtime2').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var designatedTime_reEligibleTime = $("#designatedTime_reEligibleTime").val();
				var designatedTime_reEligibleTimeInterval = $("#designatedTime_reEligibleTimeInterval").val();

				if($.trim(designatedTime_reEligibleTime) == ''){
					$("#error_designatedTime_reEligible").text('This field is required.');
					$("#designatedTime_reEligibleTime").css('border-color', '#424141');
					error_designatedTime_reEligible = 0;
				}else{
					if(designatedTime_reEligibleTime < 0){
						$("#error_designatedTime_reEligible").text('This field should be greater than or equal to 0.');
						$("#designatedTime_reEligibleTime").css('border-color', '#424141');
						error_designatedTime_reEligible = 0;

					}else{
					if(pattern.test(designatedTime_reEligibleTime)){
						$("#error_designatedTime_reEligible").text('');
						$("#designatedTime_reEligibleTime").css('border-color', '#ccc');
						error_designatedTime_reEligible = 1;
					}else{
						$("#error_designatedTime_reEligible").text('This field should be a valid integer.');
						$("#designatedTime_reEligibleTime").css('border-color', '#424141');
						error_designatedTime_reEligible = 0;
					}
					}
				}

			}else{
				var reEligible_to_receive_campaign = 0;
				var designatedTime_reEligibleTime = '';
				var designatedTime_reEligibleTimeInterval = '';
				error_designatedTime_reEligible = 1;
			}

			if($('#designatedtime3').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}


		}

		if(time_based_scheduling == 3){

			var error_intelligent_weekday = 1;
			var error_intelligentTime_reEligible = 1;
			var pattern = /^\d+$/;
			var intelligent_send = $("#intelligent_send").val();

			if(intelligent_send == 'once'){
				var intelligent_on_date = $("#intelligent_onDate").val();
			}
			else if(intelligent_send == 'daily'){
				var intelligent_everyDay = $("#intelligent_everyDay").val();
				var intelligent_beginning_date = $("#intelligent_beginning_date").val();
				var intelligent_ending = $("#intelligent_ending").val();

				if(intelligent_ending == 'on_the_date'){
					var intelligent_ending_on_the_date = $("#intelligent_daily_ending_on_the_date").val();
					var intelligent_ending_after_occurances = '';
				}
				if(intelligent_ending == 'after'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = $("#intelligent_daily_ending_after_occurances").val();
				}
				if(intelligent_ending == 'never'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = '';
				}
			}
			else if(intelligent_send == 'weekly'){

				//var intelligent_everyWeek = $("#intelligent_everyWeek").val();
				var weekVals = [];
				 $('[name=intelligent_weekday]:checked').each(function() {
					 weekVals.push($(this).val());
				 });
				 var intelligent_weekday = weekVals;
				 var intelligent_beginning_date = $("#intelligent_weeks_beginning_date").val();
				 var intelligent_ending = $("#intelligent_weeks_ending").val();

				 if(intelligent_weekday.length == 0){
					 $("#error_intelligent_weekday").text('Select at least one day of the week');
					 error_intelligent_weekday = 0;
				 }else{
					 $("#error_intelligent_weekday").text('');
					 error_intelligent_weekday = 1;
				 }

				 if(intelligent_ending == 'on_the_date'){
						var intelligent_ending_on_the_date = $("#intelligent_weekly_ending_on_the_date").val();
						var intelligent_ending_after_occurances = '';
				 }
				 if(intelligent_ending == 'after'){
						var intelligent_ending_on_the_date = '';
						var intelligent_ending_after_occurances = $("#intelligent_weekly_ending_after_occurances").val();
				 }
				 if(intelligent_ending == 'never'){
						var intelligent_ending_on_the_date = '';
						var intelligent_ending_after_occurances = '';
				 }

			}
			else if(intelligent_send == 'monthly'){

				var intelligent_everyMonth = $("#intelligent_everyMonth").val();
				var intelligent_beginning_date = $("#intelligent_month_beginning_date").val();
				var intelligent_ending = $("#intelligent_month_ending").val();

				if(intelligent_ending == 'on_the_date'){
					var intelligent_ending_on_the_date = $("#intelligent_monthly_ending_on_the_date").val();
					var intelligent_ending_after_occurances = '';
				}
				if(intelligent_ending == 'after'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = $("#intelligent_weekly_monthly_after_occurances").val();
				}
				if(intelligent_ending == 'never'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = '';
				}

			}

			if($('#intelliSent1').is(":checked"))
			{
				var send_this_campaign_during_a_specific_portion_of_day = 1;
				var specific_start_hours = $("#specific_start_hours").val();
				var specific_start_mins = $("#specific_start_mins").val();
				var specific_start_am_pm = $("#specific_start_am_pm").val();
				var specific_end_hours = $("#specific_end_hours").val();
				var specific_end_mins = $("#specific_end_mins").val();
				var specific_end_am_pm = $("#specific_end_am_pm").val();


			}else{
				var send_this_campaign_during_a_specific_portion_of_day = 0;

			}

			if($('#intelliSent2').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var intelligentTime_reEligibleTime = $("#intelligentTime_reEligibleTime").val();
				var intelligentTime_reEligibleTimeInterval = $("#intelligentTime_reEligibleTimeInterval").val();

				if($.trim(intelligentTime_reEligibleTime) == ''){
					$("#error_intelligentTime_reEligible").text('This field is required.');
					$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
					error_intelligentTime_reEligible = 0;
				}else{
					if(intelligentTime_reEligibleTime < 0){
						$("#error_intelligentTime_reEligible").text('This field should be greater than or equal to 0.');
						$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
						error_intelligentTime_reEligible = 0;

					}else{
					if(pattern.test(intelligentTime_reEligibleTime)){
						$("#error_intelligentTime_reEligible").text('');
						$("#intelligentTime_reEligibleTime").css('border-color', '#ccc');
						error_intelligentTime_reEligible = 1;
					}else{
						$("#error_intelligentTime_reEligible").text('This field should be a valid integer.');
						$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
						error_intelligentTime_reEligible = 0;
					}
					}
				}

			}else{
				var reEligible_to_receive_campaign = 0;
				var intelligentTime_reEligibleTime = '';
				var intelligentTime_reEligibleTimeInterval = '';
				error_intelligentTime_reEligible = 1;
			}

			if($('#intelliSent3').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}

		}

		if(time_based_scheduling == 1 && error_atlaunch_reEligible == 1){

			deliveryDraft["deliveryType"] = deliveryType;
			deliveryDraft["time_based_scheduling"] = time_based_scheduling;
			deliveryDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
			deliveryDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;

			if(reEligible_to_receive_campaign == 1){
				deliveryDraft["reEligibleTime"] = atlaunch_reEligibleTime;
				deliveryDraft["reEligibleTimeInterval"] = atlaunch_reEligibleTimeInterval;
			}else{
				deliveryDraft["reEligibleTime"] = '';
				deliveryDraft["reEligibleTimeInterval"] = '';
			}


		}

		if(time_based_scheduling == 2 && error_weekday == 1 && error_designatedTime_reEligible == 1){

			deliveryDraft["deliveryType"] = deliveryType;
			deliveryDraft["time_based_scheduling"] = time_based_scheduling;
			deliveryDraft["send"] = send;
			deliveryDraft["starting_at_hour"] = starting_at_hour;
			deliveryDraft["starting_at_min"] = starting_at_min;
			deliveryDraft["starting_at_am_pm"] = starting_at_am_pm;
			if(send == 'once'){
				deliveryDraft['on_date'] = on_date;
			}
			else if(send == 'daily'){
				deliveryDraft["everyDay"] = everyDay;
				deliveryDraft["beginning_date"] = beginning_date;
				deliveryDraft["ending"] = ending;
				deliveryDraft["ending_on_the_date"] = ending_on_the_date;
				deliveryDraft["ending_after_occurances"] = ending_after_occurances;

			}
			else if(send == 'weekly'){

				//deliveryDraft["everyWeek"] = everyWeek;
				deliveryDraft["weekday"] = weekday;
				deliveryDraft["beginning_date"] = beginning_date;
				deliveryDraft["ending"] = ending;
				deliveryDraft["ending_on_the_date"] = ending_on_the_date;
				deliveryDraft["ending_after_occurances"] = ending_after_occurances;
			}
			else if(send == 'monthly'){

				deliveryDraft["everyMonth"] = everyMonth;
				deliveryDraft["beginning_date"] = beginning_date;
				deliveryDraft["ending"] = ending;
				deliveryDraft["ending_on_the_date"] = ending_on_the_date;
				deliveryDraft["ending_after_occurances"] = ending_after_occurances;
			}
			deliveryDraft["send_campaign_to_users_in_their_local_time_zone"] = send_campaign_to_users_in_their_local_time_zone;
			deliveryDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
			deliveryDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;
			if(reEligible_to_receive_campaign == 1){
				deliveryDraft["reEligibleTime"] = designatedTime_reEligibleTime;
				deliveryDraft["reEligibleTimeInterval"] = designatedTime_reEligibleTimeInterval;
			}else{
				deliveryDraft["reEligibleTime"] = '';
				deliveryDraft["reEligibleTimeInterval"] = '';
			}


		}

			if(time_based_scheduling == 3 && error_intelligent_weekday == 1 && error_intelligentTime_reEligible == 1){

			deliveryDraft["deliveryType"] = deliveryType;
			deliveryDraft["time_based_scheduling"] = time_based_scheduling;
			deliveryDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
			deliveryDraft["intelligent_send"] = intelligent_send;

			if(reEligible_to_receive_campaign == 1){
				deliveryDraft["reEligibleTime"] = intelligentTime_reEligibleTime;
				deliveryDraft["reEligibleTimeInterval"] = intelligentTime_reEligibleTimeInterval;
			}else{
				deliveryDraft["reEligibleTime"] = '';
				deliveryDraft["reEligibleTimeInterval"] = '';
			}

			if(intelligent_send == 'once'){
				deliveryDraft["intelligent_on_date"] = intelligent_on_date;
			}
			else if(intelligent_send == 'daily'){
				deliveryDraft["intelligent_everyDay"] = intelligent_everyDay;
				deliveryDraft["intelligent_beginning_date"] = intelligent_beginning_date;
				deliveryDraft["intelligent_ending"] = intelligent_ending;
				deliveryDraft["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
				deliveryDraft["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;
			}
			else if(intelligent_send == 'weekly'){
				//deliveryDraft["intelligent_everyWeek"] = intelligent_everyWeek;
				deliveryDraft["intelligent_weekday"] = intelligent_weekday;
				deliveryDraft["intelligent_beginning_date"] = intelligent_beginning_date;
				deliveryDraft["intelligent_ending"] = intelligent_ending;
				deliveryDraft["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
				deliveryDraft["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;
			}
			else if(intelligent_send == 'monthly'){

				deliveryDraft["intelligent_everyMonth"] = intelligent_everyMonth;
				deliveryDraft["intelligent_beginning_date"] = intelligent_beginning_date;
				deliveryDraft["intelligent_ending"] = intelligent_ending;
				deliveryDraft["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
				deliveryDraft["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;

			}
			deliveryDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;
			deliveryDraft["send_this_campaign_during_a_specific_portion_of_day"] = send_this_campaign_during_a_specific_portion_of_day;
			if(send_this_campaign_during_a_specific_portion_of_day == 1){
				deliveryDraft["specific_start_hours"] = specific_start_hours;
				deliveryDraft["specific_start_mins"] = specific_start_mins;
				deliveryDraft["specific_start_am_pm"] = specific_start_am_pm;
				deliveryDraft["specific_end_hours"] = specific_end_hours;
				deliveryDraft["specific_end_mins"] = specific_end_mins;
				deliveryDraft["specific_end_am_pm"] = specific_end_am_pm;
			}else{
				deliveryDraft["specific_start_hours"] = '';
				deliveryDraft["specific_start_mins"] = '';
				deliveryDraft["specific_start_am_pm"] = '';
				deliveryDraft["specific_end_hours"] = '';
				deliveryDraft["specific_end_mins"] = '';
				deliveryDraft["specific_end_am_pm"] = '';
			}

			}
		}
		if(deliveryType == 2){

			var triggerAction = $("#triggerAction").val();
			var scheduleDelay = $("#scheduleDelay").val();
			var campaignDuration_startTime_date = $("#actionDeliveryStartDate").val();
			var campaignDuration_startTime_hours = $("#actionDeliveryStartHours").val();
			var campaignDuration_startTime_mins = $("#actionDeliveryStartMins").val();
			var campaignDuration_startTime_am = $("#actionDeliveryStartAm").val();

			/*var campaignDuration_endTime_date = $("#actionDeliveryEndDate").val();
			var campaignDuration_endTime_hours = $("#actionDeliveryEndHours").val();
			var campaignDuration_endTime_mins = $("#actionDeliveryEndMins").val();
			var campaignDuration_endTime_am   = $("#actionDeliveryEndAm").val();*/
			if($('#actionDeliveryEndTimeEnabled').is(":checked")){
				var campaignDuration_endTime_date = '';
				var campaignDuration_endTime_hours = '';
				var campaignDuration_endTime_mins = '';
				var campaignDuration_endTime_am   = '';
			}else{
				var campaignDuration_endTime_date = $("#actionDeliveryEndDate").val();
				var campaignDuration_endTime_hours = $("#actionDeliveryEndHours").val();
				var campaignDuration_endTime_mins = $("#actionDeliveryEndMins").val();
				var campaignDuration_endTime_am   = $("#actionDeliveryEndAm").val();
			}
			//var date1 = campaignDuration_startTime_date + " " + campaignDuration_startTime_hours + ":" + campaignDuration_startTime_mins + " " + campaignDuration_startTime_am;
			//var date2 = campaignDuration_endTime_date + " " + campaignDuration_endTime_hours + ":" + campaignDuration_endTime_mins + " " + campaignDuration_endTime_am;

			var d1=new Date(campaignDuration_startTime_date.split("-").reverse().join("-"));
			var dd1=d1.getDate();
			var mm1=d1.getMonth()+1;
			var yy1=d1.getFullYear();
			startDate = yy1+"/"+mm1+"/"+dd1;

			var d2=new Date(campaignDuration_endTime_date.split("-").reverse().join("-"));
			var dd2=d2.getDate();
			var mm2=d2.getMonth()+1;
			var yy2=d2.getFullYear();
			endDate = yy2+"/"+mm2+"/"+dd2;

			var date1 = startDate + " " + campaignDuration_startTime_hours + ":" + campaignDuration_startTime_mins + " " + campaignDuration_startTime_am;
			var date2 = endDate + " " + campaignDuration_endTime_hours + ":" + campaignDuration_endTime_mins + " " + campaignDuration_endTime_am;

			var from = new Date(Date.parse(date1));
			var to = new Date(Date.parse(date2));
			var unless_the_user = $("#unless_the_user_list").val();
			var pattern = /^\d+$/;
			var validation = [];

			/*if(triggerAction == null){
				$("#error_triggerAction").text("You need to create at least one trigger action for action-based delivery");
				validation["triggerAction"] = 0;
			}else{
				$("#error_triggerAction").text("");
				validation["triggerAction"] = 1;
			}*/

			if(scheduleDelay == 'After'){

				var scheduleDelay_afterTime = $("#scheduleDelay_afterTime").val();
				var scheduleDelay_afterTimeInterval = $("#scheduleDelay_afterTimeInterval").val();

				if($.trim(scheduleDelay_afterTime) == ''){
					$("#error_afterTimeInterval").text('This field is required.');
					$("#scheduleDelay_afterTime").css('border-color', '#424141');
					validation["scheduleDelay_afterTime"] = 0;

				}else{
					if(scheduleDelay_afterTime < 0){
						$("#error_afterTimeInterval").text('This field should be greater than or equal to 0.');
						$("#scheduleDelay_afterTime").css('border-color', '#424141');
						validation["scheduleDelay_afterTime"] = 0;

					}else{
					if(pattern.test(scheduleDelay_afterTime)){
						$("#error_afterTimeInterval").text('');
						$("#scheduleDelay_afterTime").css('border-color', '#ccc');
						validation["scheduleDelay_afterTime"] = 1;

					}else{
						$("#error_afterTimeInterval").text('This field should be a valid integer.');
						$("#scheduleDelay_afterTime").css('border-color', '#424141');
						validation["scheduleDelay_afterTime"] = 0;
					}
					}
				}

			}

			if(scheduleDelay == 'On the next'){

				var on_the_next_weekday = $("#on_the_next_day").val();
				var on_the_next_deliveryTime= $("#deliveryTime").val();

				if(on_the_next_deliveryTime == 'at'){
					var on_the_next_hours = $("#on_the_next_hours").val();
					var on_the_next_mins = $("#on_the_next_mins").val();
					var on_the_next_am = $("#on_the_next_am").val();
				}

			}

			if($('#actionDeliveryEndTimeEnabled').is(":checked") == false){
				if(to > from){
					$("#error_campaignDuration").text("");
					validation["campaignDuration"] = 1;
				}else{
					$("#error_campaignDuration").text("The end time of the delivery must come after the start time.");
					validation["campaignDuration"] = 0;
				}
			}else{
				$("#error_campaignDuration").text("");
				validation["campaignDuration"] = 1;
			}

			if($('#localTimeZone').is(":checked"))
			{
				var send_campaign_at_local_time_zone = 1;
			}else{
				var send_campaign_at_local_time_zone = 0;
			}

			if($('#campDuration1').is(":checked"))
			{
				var send_this_campaign_during_a_specific_portion_of_day = 1;
				var specific_start_hours = $("#actionDelivery_specific_start_hours").val();
				var specific_start_mins = $("#actionDelivery_specific_start_mins").val();
				var specific_start_am_pm = $("#actionDelivery_specific_start_am_pm").val();
				var specific_end_hours = $("#actionDelivery_specific_end_hours").val();
				var specific_end_mins = $("#actionDelivery_specific_end_mins").val();
				var specific_end_am_pm = $("#actionDelivery_specific_end_am_pm").val();

			}else{
				var send_this_campaign_during_a_specific_portion_of_day = 0;

			}

			if($('#actionDelivery_nextAvailableTime').is(":checked"))
			{
				var sendIfDeliveryTimeFallsOutsideSpecifiedPortion = 1;
			}else{
				var sendIfDeliveryTimeFallsOutsideSpecifiedPortion = 0;
			}

			if($('#campDuration2').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var actionDeliveryTime_reEligibleTime = $("#actionDeliveryTime_reEligibleTime").val();
				var actionDeliveryTime_reEligibleTimeInterval = $("#actionDeliveryTime_reEligibleTimeInterval").val();

				if($.trim(actionDeliveryTime_reEligibleTime) == ''){
					$("#error_actionDeliveryTime_reEligible").text('This field is required.');
					$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
					validation["intelligentTime_reEligibleTime"] = 0;

				}else{
					if(actionDeliveryTime_reEligibleTime < 0){
						$("#error_actionDeliveryTime_reEligible").text('This field should be greater than or equal to 0.');
						$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
						validation["intelligentTime_reEligibleTime"] = 0;

					}else{
					if(pattern.test(actionDeliveryTime_reEligibleTime)){
						$("#error_actionDeliveryTime_reEligible").text('');
						$("#actionDeliveryTime_reEligibleTime").css('border-color', '#ccc');
						validation["intelligentTime_reEligibleTime"] = 1;

					}else{
						$("#error_actionDeliveryTime_reEligible").text('This field should be a valid integer.');
						$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
						validation["intelligentTime_reEligibleTime"] = 0;
					}
					}
				}
			}else{
				var reEligible_to_receive_campaign = 0;
				var actionDeliveryTime_reEligibleTime = '';
				var actionDeliveryTime_reEligibleTimeInterval = '';
				validation["intelligentTime_reEligibleTime"] = 1;
			}

			if($('#campDuration3').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}


			var rtnfalse = [];
		    var i = 0;
		    for (var item in validation)
		    {
		        if (validation[item] == 0)
		        {

		            rtnfalse[i] = 1;
		        } else {

		            rtnfalse[i] = 0;
		        }
		        i++;
		    }

		    var errorResult = jQuery.inArray(1, rtnfalse);

		    if(errorResult == -1){

		    	deliveryDraft["deliveryType"] = deliveryType;
		    	deliveryDraft["time_based_scheduling"] = time_based_scheduling;
		    	if(triggerAction == null){
		    		deliveryDraft["triggerAction"] = '';
		    	}else{
		    		deliveryDraft["triggerAction"] = triggerAction;
		    	}

		    	deliveryDraft["scheduleDelay"] = scheduleDelay;

		    	if(scheduleDelay == 'After'){
		    		deliveryDraft["scheduleDelay_afterTime"] = scheduleDelay_afterTime;
		    		deliveryDraft["scheduleDelay_afterTimeInterval"] = scheduleDelay_afterTimeInterval;
		    	}

		    	if(scheduleDelay == 'On the next'){

		    		deliveryDraft["on_the_next_weekday"] = on_the_next_weekday;
		    		deliveryDraft["on_the_next_deliveryTime"] = on_the_next_deliveryTime;

					if(on_the_next_deliveryTime == 'at'){
						deliveryDraft["on_the_next_hours"] = on_the_next_hours;
						deliveryDraft["on_the_next_mins"] = on_the_next_mins;
						deliveryDraft["on_the_next_am"] = on_the_next_am;
					}else{
						deliveryDraft["on_the_next_hours"] = '';
						deliveryDraft["on_the_next_mins"] = '';
						deliveryDraft["on_the_next_am"] = '';
					}
		    	}
		    	if(unless_the_user != null){

		    		deliveryDraft["unless_the_user"] = unless_the_user;

				}else{
					deliveryDraft["unless_the_user"] = '';
				}

		    	deliveryDraft["campaignDuration_startTime_date"] = campaignDuration_startTime_date;
		    	deliveryDraft["campaignDuration_startTime_hours"] = campaignDuration_startTime_hours;
		    	deliveryDraft["campaignDuration_startTime_mins"] = campaignDuration_startTime_mins;
		    	deliveryDraft["campaignDuration_startTime_am"] = campaignDuration_startTime_am;
		    	deliveryDraft["campaignDuration_endTime_date"] = campaignDuration_endTime_date;
		    	deliveryDraft["campaignDuration_endTime_hours"] = campaignDuration_endTime_hours;
		    	deliveryDraft["campaignDuration_endTime_mins"] = campaignDuration_endTime_mins;
		    	deliveryDraft["campaignDuration_endTime_am"] = campaignDuration_endTime_am;
		    	deliveryDraft["send_campaign_at_local_time_zone"] = send_campaign_at_local_time_zone;
		    	deliveryDraft["send_this_campaign_during_a_specific_portion_of_day"] = send_this_campaign_during_a_specific_portion_of_day;

		    	if(send_this_campaign_during_a_specific_portion_of_day == 1){
		    		deliveryDraft["specific_start_hours"] = specific_start_hours;
		    		deliveryDraft["specific_start_mins"] = specific_start_mins;
		    		deliveryDraft["specific_start_am_pm"] = specific_start_am_pm;
		    		deliveryDraft["specific_end_hours"] = specific_end_hours;
		    		deliveryDraft["specific_end_mins"] = specific_end_mins;
		    		deliveryDraft["specific_end_am_pm"] = specific_end_am_pm;
		    		}else{
		    			deliveryDraft["specific_start_hours"] = '';
		    			deliveryDraft["specific_start_mins"] = '';
		    			deliveryDraft["specific_start_am_pm"] = '';
		    			deliveryDraft["specific_end_hours"] = '';
		    			deliveryDraft["specific_end_mins"] = '';
		    			deliveryDraft["specific_end_am_pm"] = '';
		    		}
		    	deliveryDraft["sendIfDeliveryTimeFallsOutsideSpecifiedPortion"] = sendIfDeliveryTimeFallsOutsideSpecifiedPortion;

		    	deliveryDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
		    	if(reEligible_to_receive_campaign == 1){
		    		deliveryDraft["reEligibleTime"] = actionDeliveryTime_reEligibleTime;
		    		deliveryDraft["reEligibleTimeInterval"] = actionDeliveryTime_reEligibleTimeInterval;
				}else{
					deliveryDraft["reEligibleTime"] = '';
					deliveryDraft["reEligibleTimeInterval"] = '';
				}
		    	deliveryDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;


		    }

		}

		jsonDeliveryObj.push(deliveryDraft);
	 	jsonString = JSON.stringify(jsonDeliveryObj);

	 	$(".campaign-loader").css('display','block');
	 	$.ajax({

	 		type: "POST",
	         url: baseurl + 'appUser/saveDeliveryAsDraft',
	         data: jsonString,
	         contentType: "application/json; charset=utf-8",
	         dataType: "json",
	         success: function(data){
	         	if(data == 1){
	         	$(".campaign-loader").css('display','none');
	         	if(androidCampaign["selectedPlatform"] == 'email'){
	         		window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
	         	}else{
	         		window.parent.location.href =  baseurl+"appUser/campaigns/";
	         	}

	         	}
	         }

	 	});
	}

jsonTargetObj = [];
targetDraft = {};

function saveTargetAsDraft(){

	var baseurl = $("#baseurl").val();

	targetDraft["selectedPlatform"] = androidCampaign["selectedPlatform"];

	targetDraft["campaignName"] = androidCampaign["campaignName"];
	targetDraft["custom_url"] = androidCampaign["custom_url"];
	targetDraft["redirect_url"] = androidCampaign["redirect_url"];
	//targetDraft["deep_link"] = androidCampaign["deep_link"];
	targetDraft["expandedImage"] = androidCampaign["expandedImage"];
	targetDraft["expanded_img_url"] = androidCampaign["expanded_img_url"];
	targetDraft["groupId"] = androidCampaign["groupId"];
	targetDraft["push_icon"] = androidCampaign["push_icon"];
	targetDraft["push_img_url"] = androidCampaign["push_img_url"];
	targetDraft["campaignId"] = androidCampaign["campaignId"];
    targetDraft["message_category"] = androidCampaign["message_category"];
    targetDraft["automation"] = androidCampaign['automation'];
    targetDraft["campaignPersonaUser"] = androidCampaign["campaignPersonaUser"];
    targetDraft["campaignList"] = androidCampaign["campaignList"];
    targetDraft["push_notification_image"] = androidCampaign["push_notification_image"];

	 if(androidCampaign["selectedPlatform"] == 'android'){
		targetDraft["push_message"] = androidCampaign["push_message"];
		targetDraft["push_title"] = androidCampaign["push_title"];
		targetDraft["summery_text"] = androidCampaign["summery_text"];
	 }
	 if(androidCampaign["selectedPlatform"] == 'iOS'){
		 targetDraft["push_message"] = androidCampaign["push_message"];
	 }
	 if(androidCampaign["selectedPlatform"] == 'android'){
		 targetDraft["send_push_to_recently_used_device"] = androidCampaign["send_push_to_recently_used_device"];
	 }
	 if(androidCampaign["selectedPlatform"] == 'iOS'){
		 targetDraft["send_push_to_recently_used_device"] = androidCampaign["send_push_to_recently_used_device"];
		 targetDraft["limit_this_push_to_iPad_devices"] = androidCampaign["limit_this_push_to_iPad_devices"];
		 targetDraft["limit_this_push_to_iphone_and_ipod_devices"] = androidCampaign["limit_this_push_to_iphone_and_ipod_devices"];
	 }

	 if(androidCampaign["selectedPlatform"] == 'email'){
		 targetDraft["push_title"] = androidCampaign["push_title"];;
		 targetDraft["push_message"] = androidCampaign["push_message"];
		 targetDraft["displayName"] = androidCampaign["displayName"];
		 targetDraft["fromAddress"] = androidCampaign["fromAddress"];
		 targetDraft["replyToAddress"] = androidCampaign["replyToAddress"];
		}
	 //targetDraft["type"] = androidCampaign["type"];


	 if($("input[name='deliveryType']:checked").val() == 'schedule-delivery'){
			var deliveryType = 1;
		}else{
			var deliveryType = 2;
		}
	 if(deliveryType == 1){

			if($("input[name='timeBased']:checked").val() == 'at-launch'){
				var time_based_scheduling = 1;
			}
			else if($("input[name='timeBased']:checked").val() == 'designated-time'){
				var time_based_scheduling = 2;
			}
			else{
				var time_based_scheduling = 3;
			}

		if(time_based_scheduling == 1){
			var error_atlaunch_reEligible = 1;
			var pattern = /^\d+$/;

			if ($('#atlaunch1').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var atlaunch_reEligibleTime = $("#atlaunch_reEligibleTime").val();
				var atlaunch_reEligibleTimeInterval = $("#atlaunch_reEligibleTimeInterval").val();

				if($.trim(atlaunch_reEligibleTime) == ''){
					$("#error_atlaunch_reEligible").text('This field is required.');
					$("#atlaunch_reEligibleTime").css('border-color', '#424141');
					error_atlaunch_reEligible = 0;
				}else{
					if(atlaunch_reEligibleTime < 0){
						$("#error_atlaunch_reEligible").text('This field should be greater than or equal to 0.');
						$("#atlaunch_reEligibleTime").css('border-color', '#424141');
						error_atlaunch_reEligible = 0;

					}else{
					if(pattern.test(atlaunch_reEligibleTime)){
						$("#error_atlaunch_reEligible").text('');
						$("#atlaunch_reEligibleTime").css('border-color', '#ccc');
						error_atlaunch_reEligible = 1;
					}else{
						$("#error_atlaunch_reEligible").text('This field should be a valid integer.');
						$("#atlaunch_reEligibleTime").css('border-color', '#424141');
						error_atlaunch_reEligible = 0;
					}
					}
				}
			}else{

				var reEligible_to_receive_campaign = 0;
				error_atlaunch_reEligible = 1;
			}

			if($('#atlaunch2').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}


		}

		if(time_based_scheduling == 2){
			var error_weekday = 1;
			var error_designatedTime_reEligible = 1;
			var pattern = /^\d+$/;
			var send = $("#send").val();

			var starting_at_hour = $("#starting_at_hour").val();
			var starting_at_min = $("#starting_at_min").val();
			var starting_at_am_pm = $("#starting_at_am_pm").val();

			if(send == 'once'){
			var on_date = $("#date").val();
			}
			else if(send == 'daily'){
				var everyDay = $("#everyDay").val();
				var beginning_date = $("#beginning_date").val();
				var ending = $("#ending").val();

				if(ending == 'on_the_date'){
					var ending_on_the_date = $("#ending_on_the_date").val();
					var ending_after_occurances = '';
				}
				if(ending == 'after'){
					var ending_on_the_date = '';
					var ending_after_occurances = $("#ending_after_occurances").val();
				}
				if(ending == 'never'){
					var ending_on_the_date = '';
					var ending_after_occurances = '';
				}
			}
			else if(send == 'weekly'){

				//var everyWeek = $("#everyWeek").val();
				var allVals = [];
				 $('[name=weekday]:checked').each(function() {
				   allVals.push($(this).val());
				 });
				 var weekday = allVals;
				 var beginning_date = $("#weeks_beginning_date").val();
				 var ending = $("#weeks_ending").val();

				 if(weekday.length == 0){
					 $("#error_weekday").text('Select at least one day of the week');
					 error_weekday = 0;
				 }else{
					 $("#error_weekday").text('');
					 error_weekday = 1;
				 }

				 if(ending == 'on_the_date'){
						var ending_on_the_date = $("#weeks_ending_on_the_date").val();
						var ending_after_occurances = '';
				 }
				 if(ending == 'after'){
						var ending_on_the_date = '';
						var ending_after_occurances = $("#weeks_ending_after_occurances").val();
				 }
				 if(ending == 'never'){
						var ending_on_the_date = '';
						var ending_after_occurances = '';
				 }

			}
			else if(send == 'monthly'){

				var everyMonth = $("#everyMonth").val();
				var beginning_date = $("#month_beginning_date").val();
				var ending = $("#month_ending").val();

				if(ending == 'on_the_date'){
					var ending_on_the_date = $("#monthly_ending_on_the_date").val();
					var ending_after_occurances = '';
				}
				if(ending == 'after'){
					var ending_on_the_date = '';
					var ending_after_occurances = $("#monthly_ending_after_occurances").val();
				}
				if(ending == 'never'){
					var ending_on_the_date = '';
					var ending_after_occurances = '';
				}
			}

			if($('#designatedtime1').is(":checked"))
			{
				var send_campaign_to_users_in_their_local_time_zone = 1;
			}else{
				var send_campaign_to_users_in_their_local_time_zone = 0;
			}

			if($('#designatedtime2').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var designatedTime_reEligibleTime = $("#designatedTime_reEligibleTime").val();
				var designatedTime_reEligibleTimeInterval = $("#designatedTime_reEligibleTimeInterval").val();

				if($.trim(designatedTime_reEligibleTime) == ''){
					$("#error_designatedTime_reEligible").text('This field is required.');
					$("#designatedTime_reEligibleTime").css('border-color', '#424141');
					error_designatedTime_reEligible = 0;
				}else{
					if(designatedTime_reEligibleTime < 0){
						$("#error_designatedTime_reEligible").text('This field should be greater than or equal to 0.');
						$("#designatedTime_reEligibleTime").css('border-color', '#424141');
						error_designatedTime_reEligible = 0;

					}else{
					if(pattern.test(designatedTime_reEligibleTime)){
						$("#error_designatedTime_reEligible").text('');
						$("#designatedTime_reEligibleTime").css('border-color', '#ccc');
						error_designatedTime_reEligible = 1;
					}else{
						$("#error_designatedTime_reEligible").text('This field should be a valid integer.');
						$("#designatedTime_reEligibleTime").css('border-color', '#424141');
						error_designatedTime_reEligible = 0;
					}
					}
				}

			}else{
				var reEligible_to_receive_campaign = 0;
				var designatedTime_reEligibleTime = '';
				var designatedTime_reEligibleTimeInterval = '';
				error_designatedTime_reEligible = 1;
			}

			if($('#designatedtime3').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}


		}

		if(time_based_scheduling == 3){

			var error_intelligent_weekday = 1;
			var error_intelligentTime_reEligible = 1;
			var pattern = /^\d+$/;
			var intelligent_send = $("#intelligent_send").val();

			if(intelligent_send == 'once'){
				var intelligent_on_date = $("#intelligent_onDate").val();
			}
			else if(intelligent_send == 'daily'){
				var intelligent_everyDay = $("#intelligent_everyDay").val();
				var intelligent_beginning_date = $("#intelligent_beginning_date").val();
				var intelligent_ending = $("#intelligent_ending").val();

				if(intelligent_ending == 'on_the_date'){
					var intelligent_ending_on_the_date = $("#intelligent_daily_ending_on_the_date").val();
					var intelligent_ending_after_occurances = '';
				}
				if(intelligent_ending == 'after'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = $("#intelligent_daily_ending_after_occurances").val();
				}
				if(intelligent_ending == 'never'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = '';
				}
			}
			else if(intelligent_send == 'weekly'){

				//var intelligent_everyWeek = $("#intelligent_everyWeek").val();
				var weekVals = [];
				 $('[name=intelligent_weekday]:checked').each(function() {
					 weekVals.push($(this).val());
				 });
				 var intelligent_weekday = weekVals;
				 var intelligent_beginning_date = $("#intelligent_weeks_beginning_date").val();
				 var intelligent_ending = $("#intelligent_weeks_ending").val();

				 if(intelligent_weekday.length == 0){
					 $("#error_intelligent_weekday").text('Select at least one day of the week');
					 error_intelligent_weekday = 0;
				 }else{
					 $("#error_intelligent_weekday").text('');
					 error_intelligent_weekday = 1;
				 }

				 if(intelligent_ending == 'on_the_date'){
						var intelligent_ending_on_the_date = $("#intelligent_weekly_ending_on_the_date").val();
						var intelligent_ending_after_occurances = '';
					}
					if(intelligent_ending == 'after'){
						var intelligent_ending_on_the_date = '';
						var intelligent_ending_after_occurances = $("#intelligent_weekly_ending_after_occurances").val();
					}
					if(intelligent_ending == 'never'){
						var intelligent_ending_on_the_date = '';
						var intelligent_ending_after_occurances = '';
					}

			}
			else if(intelligent_send == 'monthly'){

				var intelligent_everyMonth = $("#intelligent_everyMonth").val();
				var intelligent_beginning_date = $("#intelligent_month_beginning_date").val();
				var intelligent_ending = $("#intelligent_month_ending").val();

				if(intelligent_ending == 'on_the_date'){
					var intelligent_ending_on_the_date = $("#intelligent_monthly_ending_on_the_date").val();
					var intelligent_ending_after_occurances = '';
				}
				if(intelligent_ending == 'after'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = $("#intelligent_weekly_monthly_after_occurances").val();
				}
				if(intelligent_ending == 'never'){
					var intelligent_ending_on_the_date = '';
					var intelligent_ending_after_occurances = '';
				}

			}

			if($('#intelliSent1').is(":checked"))
			{
				var send_this_campaign_during_a_specific_portion_of_day = 1;
				var specific_start_hours = $("#specific_start_hours").val();
				var specific_start_mins = $("#specific_start_mins").val();
				var specific_start_am_pm = $("#specific_start_am_pm").val();
				var specific_end_hours = $("#specific_end_hours").val();
				var specific_end_mins = $("#specific_end_mins").val();
				var specific_end_am_pm = $("#specific_end_am_pm").val();


			}else{
				var send_this_campaign_during_a_specific_portion_of_day = 0;

			}

			if($('#intelliSent2').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var intelligentTime_reEligibleTime = $("#intelligentTime_reEligibleTime").val();
				var intelligentTime_reEligibleTimeInterval = $("#intelligentTime_reEligibleTimeInterval").val();

				if($.trim(intelligentTime_reEligibleTime) == ''){
					$("#error_intelligentTime_reEligible").text('This field is required.');
					$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
					error_intelligentTime_reEligible = 0;
				}else{
					if(intelligentTime_reEligibleTime < 0){
						$("#error_intelligentTime_reEligible").text('This field should be greater than or equal to 0.');
						$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
						error_intelligentTime_reEligible = 0;

					}else{
					if(pattern.test(intelligentTime_reEligibleTime)){
						$("#error_intelligentTime_reEligible").text('');
						$("#intelligentTime_reEligibleTime").css('border-color', '#ccc');
						error_intelligentTime_reEligible = 1;
					}else{
						$("#error_intelligentTime_reEligible").text('This field should be a valid integer.');
						$("#intelligentTime_reEligibleTime").css('border-color', '#424141');
						error_intelligentTime_reEligible = 0;
					}
					}
				}

			}else{
				var reEligible_to_receive_campaign = 0;
				var intelligentTime_reEligibleTime = '';
				var intelligentTime_reEligibleTimeInterval = '';
				error_intelligentTime_reEligible = 1;
			}

			if($('#intelliSent3').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}

		}

		if(time_based_scheduling == 1 && error_atlaunch_reEligible == 1){

			targetDraft["deliveryType"] = deliveryType;
			targetDraft["time_based_scheduling"] = time_based_scheduling;
			targetDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
			targetDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;

			if(reEligible_to_receive_campaign == 1){
				targetDraft["reEligibleTime"] = atlaunch_reEligibleTime;
				targetDraft["reEligibleTimeInterval"] = atlaunch_reEligibleTimeInterval;
			}else{
				targetDraft["reEligibleTime"] = '';
				targetDraft["reEligibleTimeInterval"] = '';
			}


		}

		if(time_based_scheduling == 2 && error_weekday == 1 && error_designatedTime_reEligible == 1){

			targetDraft["deliveryType"] = deliveryType;
			targetDraft["time_based_scheduling"] = time_based_scheduling;
			targetDraft["send"] = send;
			targetDraft["starting_at_hour"] = starting_at_hour;
			targetDraft["starting_at_min"] = starting_at_min;
			targetDraft["starting_at_am_pm"] = starting_at_am_pm;
			if(send == 'once'){
				targetDraft['on_date'] = on_date;
			}
			else if(send == 'daily'){
				targetDraft["everyDay"] = everyDay;
				targetDraft["beginning_date"] = beginning_date;
				targetDraft["ending"] = ending;
				targetDraft["ending_on_the_date"] = ending_on_the_date;
				targetDraft["ending_after_occurances"] = ending_after_occurances;

			}
			else if(send == 'weekly'){

				//targetDraft["everyWeek"] = everyWeek;
				targetDraft["weekday"] = weekday;
				targetDraft["beginning_date"] = beginning_date;
				targetDraft["ending"] = ending;
				targetDraft["ending_on_the_date"] = ending_on_the_date;
				targetDraft["ending_after_occurances"] = ending_after_occurances;
			}
			else if(send == 'monthly'){

				targetDraft["everyMonth"] = everyMonth;
				targetDraft["beginning_date"] = beginning_date;
				targetDraft["ending"] = ending;
				targetDraft["ending_on_the_date"] = ending_on_the_date;
				targetDraft["ending_after_occurances"] = ending_after_occurances;
			}
			targetDraft["send_campaign_to_users_in_their_local_time_zone"] = send_campaign_to_users_in_their_local_time_zone;
			targetDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
			targetDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;
			if(reEligible_to_receive_campaign == 1){
				targetDraft["reEligibleTime"] = designatedTime_reEligibleTime;
				targetDraft["reEligibleTimeInterval"] = designatedTime_reEligibleTimeInterval;
			}else{
				targetDraft["reEligibleTime"] = '';
				targetDraft["reEligibleTimeInterval"] = '';
			}


		}

			if(time_based_scheduling == 3 && error_intelligent_weekday == 1 && error_intelligentTime_reEligible == 1){

				targetDraft["deliveryType"] = deliveryType;
				targetDraft["time_based_scheduling"] = time_based_scheduling;
				targetDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
				targetDraft["intelligent_send"] = intelligent_send;

			if(reEligible_to_receive_campaign == 1){
				targetDraft["reEligibleTime"] = intelligentTime_reEligibleTime;
				targetDraft["reEligibleTimeInterval"] = intelligentTime_reEligibleTimeInterval;
			}else{
				targetDraft["reEligibleTime"] = '';
				targetDraft["reEligibleTimeInterval"] = '';
			}

			if(intelligent_send == 'once'){
				targetDraft["intelligent_on_date"] = intelligent_on_date;
			}
			else if(intelligent_send == 'daily'){
				targetDraft["intelligent_everyDay"] = intelligent_everyDay;
				targetDraft["intelligent_beginning_date"] = intelligent_beginning_date;
				targetDraft["intelligent_ending"] = intelligent_ending;
				targetDraft["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
				targetDraft["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;
			}
			else if(intelligent_send == 'weekly'){
				//targetDraft["intelligent_everyWeek"] = intelligent_everyWeek;
				targetDraft["intelligent_weekday"] = intelligent_weekday;
				targetDraft["intelligent_beginning_date"] = intelligent_beginning_date;
				targetDraft["intelligent_ending"] = intelligent_ending;
				targetDraft["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
				targetDraft["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;
			}
			else if(intelligent_send == 'monthly'){

				targetDraft["intelligent_everyMonth"] = intelligent_everyMonth;
				targetDraft["intelligent_beginning_date"] = intelligent_beginning_date;
				targetDraft["intelligent_ending"] = intelligent_ending;
				targetDraft["intelligent_ending_on_the_date"] = intelligent_ending_on_the_date;
				targetDraft["intelligent_ending_after_occurances"] = intelligent_ending_after_occurances;

			}
			targetDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;
			targetDraft["send_this_campaign_during_a_specific_portion_of_day"] = send_this_campaign_during_a_specific_portion_of_day;
			if(send_this_campaign_during_a_specific_portion_of_day == 1){
				targetDraft["specific_start_hours"] = specific_start_hours;
				targetDraft["specific_start_mins"] = specific_start_mins;
				targetDraft["specific_start_am_pm"] = specific_start_am_pm;
				targetDraft["specific_end_hours"] = specific_end_hours;
				targetDraft["specific_end_mins"] = specific_end_mins;
				targetDraft["specific_end_am_pm"] = specific_end_am_pm;
			}else{
				targetDraft["specific_start_hours"] = '';
				targetDraft["specific_start_mins"] = '';
				targetDraft["specific_start_am_pm"] = '';
				targetDraft["specific_end_hours"] = '';
				targetDraft["specific_end_mins"] = '';
				targetDraft["specific_end_am_pm"] = '';
			}

			}
		}
		if(deliveryType == 2){

			var triggerAction = $("#triggerAction").val();
			var scheduleDelay = $("#scheduleDelay").val();
			var campaignDuration_startTime_date = $("#actionDeliveryStartDate").val();
			var campaignDuration_startTime_hours = $("#actionDeliveryStartHours").val();
			var campaignDuration_startTime_mins = $("#actionDeliveryStartMins").val();
			var campaignDuration_startTime_am = $("#actionDeliveryStartAm").val();
			if($('#actionDeliveryEndTimeEnabled').is(":checked")){
				var campaignDuration_endTime_date = '';
				var campaignDuration_endTime_hours = '';
				var campaignDuration_endTime_mins = '';
				var campaignDuration_endTime_am   = '';
			}else{
				var campaignDuration_endTime_date = $("#actionDeliveryEndDate").val();
				var campaignDuration_endTime_hours = $("#actionDeliveryEndHours").val();
				var campaignDuration_endTime_mins = $("#actionDeliveryEndMins").val();
				var campaignDuration_endTime_am   = $("#actionDeliveryEndAm").val();
			}


			//var date1 = campaignDuration_startTime_date + " " + campaignDuration_startTime_hours + ":" + campaignDuration_startTime_mins + " " + campaignDuration_startTime_am;
			//var date2 = campaignDuration_endTime_date + " " + campaignDuration_endTime_hours + ":" + campaignDuration_endTime_mins + " " + campaignDuration_endTime_am;

			var d1=new Date(campaignDuration_startTime_date.split("-").reverse().join("-"));
			var dd1=d1.getDate();
			var mm1=d1.getMonth()+1;
			var yy1=d1.getFullYear();
			startDate = yy1+"/"+mm1+"/"+dd1;

			var d2=new Date(campaignDuration_endTime_date.split("-").reverse().join("-"));
			var dd2=d2.getDate();
			var mm2=d2.getMonth()+1;
			var yy2=d2.getFullYear();
			endDate = yy2+"/"+mm2+"/"+dd2;

			var date1 = startDate + " " + campaignDuration_startTime_hours + ":" + campaignDuration_startTime_mins + " " + campaignDuration_startTime_am;
			var date2 = endDate + " " + campaignDuration_endTime_hours + ":" + campaignDuration_endTime_mins + " " + campaignDuration_endTime_am;

			var from = new Date(Date.parse(date1));
			var to = new Date(Date.parse(date2));
			var unless_the_user = $("#unless_the_user_list").val();
			var pattern = /^\d+$/;
			var validation = [];

			/*if(triggerAction == null){
				$("#error_triggerAction").text("You need to create at least one trigger action for action-based delivery");
				validation["triggerAction"] = 0;
			}else{
				$("#error_triggerAction").text("");
				validation["triggerAction"] = 1;
			}*/

			if(scheduleDelay == 'After'){

				var scheduleDelay_afterTime = $("#scheduleDelay_afterTime").val();
				var scheduleDelay_afterTimeInterval = $("#scheduleDelay_afterTimeInterval").val();

				if($.trim(scheduleDelay_afterTime) == ''){
					$("#error_afterTimeInterval").text('This field is required.');
					$("#scheduleDelay_afterTime").css('border-color', '#424141');
					validation["scheduleDelay_afterTime"] = 0;

				}else{
					if(scheduleDelay_afterTime < 0){
						$("#error_afterTimeInterval").text('This field should be greater than or equal to 0.');
						$("#scheduleDelay_afterTime").css('border-color', '#424141');
						validation["scheduleDelay_afterTime"] = 0;

					}else{
					if(pattern.test(scheduleDelay_afterTime)){
						$("#error_afterTimeInterval").text('');
						$("#scheduleDelay_afterTime").css('border-color', '#ccc');
						validation["scheduleDelay_afterTime"] = 1;

					}else{
						$("#error_afterTimeInterval").text('This field should be a valid integer.');
						$("#scheduleDelay_afterTime").css('border-color', '#424141');
						validation["scheduleDelay_afterTime"] = 0;
					}
					}
				}

			}

			if(scheduleDelay == 'On the next'){

				var on_the_next_weekday = $("#on_the_next_day").val();
				var on_the_next_deliveryTime= $("#deliveryTime").val();

				if(on_the_next_deliveryTime == 'at'){
					var on_the_next_hours = $("#on_the_next_hours").val();
					var on_the_next_mins = $("#on_the_next_mins").val();
					var on_the_next_am = $("#on_the_next_am").val();
				}

			}


			if($('#actionDeliveryEndTimeEnabled').is(":checked") == false){
				if(to > from){
					$("#error_campaignDuration").text("");
					validation["campaignDuration"] = 1;
				}else{
					$("#error_campaignDuration").text("The end time of the delivery must come after the start time.");
					validation["campaignDuration"] = 0;
				}
			}else{
				$("#error_campaignDuration").text("");
				validation["campaignDuration"] = 1;
			}

			if($('#localTimeZone').is(":checked"))
			{
				var send_campaign_at_local_time_zone = 1;
			}else{
				var send_campaign_at_local_time_zone = 0;
			}

			if($('#campDuration1').is(":checked"))
			{
				var send_this_campaign_during_a_specific_portion_of_day = 1;
				var specific_start_hours = $("#actionDelivery_specific_start_hours").val();
				var specific_start_mins = $("#actionDelivery_specific_start_mins").val();
				var specific_start_am_pm = $("#actionDelivery_specific_start_am_pm").val();
				var specific_end_hours = $("#actionDelivery_specific_end_hours").val();
				var specific_end_mins = $("#actionDelivery_specific_end_mins").val();
				var specific_end_am_pm = $("#actionDelivery_specific_end_am_pm").val();

			}else{
				var send_this_campaign_during_a_specific_portion_of_day = 0;

			}

			if($('#actionDelivery_nextAvailableTime').is(":checked"))
			{
				var sendIfDeliveryTimeFallsOutsideSpecifiedPortion = 1;
			}else{
				var sendIfDeliveryTimeFallsOutsideSpecifiedPortion = 0;
			}

			if($('#campDuration2').is(":checked"))
			{
				var reEligible_to_receive_campaign = 1;

				var actionDeliveryTime_reEligibleTime = $("#actionDeliveryTime_reEligibleTime").val();
				var actionDeliveryTime_reEligibleTimeInterval = $("#actionDeliveryTime_reEligibleTimeInterval").val();

				if($.trim(actionDeliveryTime_reEligibleTime) == ''){
					$("#error_actionDeliveryTime_reEligible").text('This field is required.');
					$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
					validation["intelligentTime_reEligibleTime"] = 0;

				}else{
					if(actionDeliveryTime_reEligibleTime < 0){
						$("#error_actionDeliveryTime_reEligible").text('This field should be greater than or equal to 0.');
						$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
						validation["intelligentTime_reEligibleTime"] = 0;

					}else{
					if(pattern.test(actionDeliveryTime_reEligibleTime)){
						$("#error_actionDeliveryTime_reEligible").text('');
						$("#actionDeliveryTime_reEligibleTime").css('border-color', '#ccc');
						validation["intelligentTime_reEligibleTime"] = 1;

					}else{
						$("#error_actionDeliveryTime_reEligible").text('This field should be a valid integer.');
						$("#actionDeliveryTime_reEligibleTime").css('border-color', '#424141');
						validation["intelligentTime_reEligibleTime"] = 0;
					}
					}
				}
			}else{
				var reEligible_to_receive_campaign = 0;
				var actionDeliveryTime_reEligibleTime = '';
				var actionDeliveryTime_reEligibleTimeInterval = '';
				validation["intelligentTime_reEligibleTime"] = 1;
			}

			if($('#campDuration3').is(":checked"))
			{
				var ignore_frequency_capping_settings = 1;
			}else{
				var ignore_frequency_capping_settings = 0;
			}


			var rtnfalse = [];
		    var i = 0;
		    for (var item in validation)
		    {
		        if (validation[item] == 0)
		        {

		            rtnfalse[i] = 1;
		        } else {

		            rtnfalse[i] = 0;
		        }
		        i++;
		    }

		    var errorResult = jQuery.inArray(1, rtnfalse);

		    if(errorResult == -1){

		    	targetDraft["deliveryType"] = deliveryType;
		    	targetDraft["time_based_scheduling"] = time_based_scheduling;
		    	targetDraft["triggerAction"] = triggerAction;
		    	targetDraft["scheduleDelay"] = scheduleDelay;

		    	if(scheduleDelay == 'After'){
		    		targetDraft["scheduleDelay_afterTime"] = scheduleDelay_afterTime;
		    		targetDraft["scheduleDelay_afterTimeInterval"] = scheduleDelay_afterTimeInterval;
		    	}

		    	if(scheduleDelay == 'On the next'){

		    		targetDraft["on_the_next_weekday"] = on_the_next_weekday;
		    		targetDraft["on_the_next_deliveryTime"] = on_the_next_deliveryTime;

					if(on_the_next_deliveryTime == 'at'){
						targetDraft["on_the_next_hours"] = on_the_next_hours;
						targetDraft["on_the_next_mins"] = on_the_next_mins;
						targetDraft["on_the_next_am"] = on_the_next_am;
					}else{
						targetDraft["on_the_next_hours"] = '';
						targetDraft["on_the_next_mins"] = '';
						targetDraft["on_the_next_am"] = '';
					}
		    	}
		    	if(unless_the_user != null){

		    		targetDraft["unless_the_user"] = unless_the_user;

				}else{
					targetDraft["unless_the_user"] = '';
				}

		    	targetDraft["campaignDuration_startTime_date"] = campaignDuration_startTime_date;
		    	targetDraft["campaignDuration_startTime_hours"] = campaignDuration_startTime_hours;
		    	targetDraft["campaignDuration_startTime_mins"] = campaignDuration_startTime_mins;
		    	targetDraft["campaignDuration_startTime_am"] = campaignDuration_startTime_am;
		    	targetDraft["campaignDuration_endTime_date"] = campaignDuration_endTime_date;
		    	targetDraft["campaignDuration_endTime_hours"] = campaignDuration_endTime_hours;
		    	targetDraft["campaignDuration_endTime_mins"] = campaignDuration_endTime_mins;
		    	targetDraft["campaignDuration_endTime_am"] = campaignDuration_endTime_am;
		    	targetDraft["send_campaign_at_local_time_zone"] = send_campaign_at_local_time_zone;
		    	targetDraft["send_this_campaign_during_a_specific_portion_of_day"] = send_this_campaign_during_a_specific_portion_of_day;

		    	if(send_this_campaign_during_a_specific_portion_of_day == 1){
		    		targetDraft["specific_start_hours"] = specific_start_hours;
		    		targetDraft["specific_start_mins"] = specific_start_mins;
		    		targetDraft["specific_start_am_pm"] = specific_start_am_pm;
		    		targetDraft["specific_end_hours"] = specific_end_hours;
		    		targetDraft["specific_end_mins"] = specific_end_mins;
		    		targetDraft["specific_end_am_pm"] = specific_end_am_pm;
		    		}else{
		    			targetDraft["specific_start_hours"] = '';
		    			targetDraft["specific_start_mins"] = '';
		    			targetDraft["specific_start_am_pm"] = '';
		    			targetDraft["specific_end_hours"] = '';
		    			targetDraft["specific_end_mins"] = '';
		    			targetDraft["specific_end_am_pm"] = '';
		    		}
		    	targetDraft["sendIfDeliveryTimeFallsOutsideSpecifiedPortion"] = sendIfDeliveryTimeFallsOutsideSpecifiedPortion;

		    	targetDraft["reEligible_to_receive_campaign"] = reEligible_to_receive_campaign;
		    	if(reEligible_to_receive_campaign == 1){
		    		targetDraft["reEligibleTime"] = actionDeliveryTime_reEligibleTime;
		    		targetDraft["reEligibleTimeInterval"] = actionDeliveryTime_reEligibleTimeInterval;
				}else{
					targetDraft["reEligibleTime"] = '';
					targetDraft["reEligibleTimeInterval"] = '';
				}
		    	targetDraft["ignore_frequency_capping_settings"] = ignore_frequency_capping_settings;


		    }
		}

		    var pattern = /^\d+$/;
			var validation = [];

			if(($("#segmentWrap").html().trim()).length > 5 || ($("#filterWrap").html().trim()).length > 5){
				var segmentArrWrap = $("#segmentWrap").children('span');
				var filterArrWrap = $("#filterWrap").children('span');

				if(segmentArrWrap.length > 0){
					var segmentArr = new Array();
					for(i=0;i<segmentArrWrap.length;i++)
					{
						var text = $(segmentArrWrap[i]).text();
						var id = $(segmentArrWrap[i]).attr('id');
						id = id.replace('segment','');
						var newDataArr = new Array();
						newDataArr.push(id);
						//newDataArr.push(text);
						segmentArr.push(newDataArr);
					}
				}else{
					var segmentArr = 'segments';
				}

				if(filterArrWrap.length > 0){
					var filterArr = new Array();
					for(i=0;i<filterArrWrap.length;i++)
					{
						var text = $(filterArrWrap[i]).text();
						var id = $(filterArrWrap[i]).attr('id');
						id = id.replace('filter','');
						var newDataArr = new Array();
						newDataArr.push(id);
						//newDataArr.push(text);
						filterArr.push(newDataArr);

					}
				}else{
					var filterArr = 'filters';
				}

				/*$("#error_segment").text("");
				validation["segment"] = 1;*/

			}else{
				/*$("#error_segment").text("You must select at least one segment or at least one filter");
				validation["segment"] = 0;*/

			}


			var send_to_users = $("#sendCampaignToUserType").val();
			if($('#targetUsers_whoWillReceiveCampaign').is(":checked")){

				var selectedUsers_receiveCampaign = $("#selectedUsers_receiveCampaign").val();
				var no_of_users_who_receive_campaigns = $("#no_of_users_who_receive_campaigns").val();



			}else{
				var selectedUsers_receiveCampaign = '';
				var no_of_users_who_receive_campaigns = '';
			}

			if($('#send_this_push_to_users_most_recently_used_device').is(":checked")){
				var messages_per_minute = $("#messages_per_minute").val();
			}else{
				var messages_per_minute = '';
			}

		    	targetDraft["segments"] = segmentArr;
		    	targetDraft["filters"] = filterArr;
		    	targetDraft["send_to_users"] = send_to_users;
		    	targetDraft["receiveCampaignType"] = selectedUsers_receiveCampaign;
		    	targetDraft["no_of_users_who_receive_campaigns"] = no_of_users_who_receive_campaigns;
		    	targetDraft["messages_per_minute"] = messages_per_minute;


		    	jsonTargetObj.push(targetDraft);
			 	jsonString = JSON.stringify(jsonTargetObj);


			 	$(".campaign-loader").css('display','block');
			 	$.ajax({

			 		type: "POST",
			         url: baseurl + 'appUser/saveTargetAsDraft',
			         data: jsonString,
			         contentType: "application/json; charset=utf-8",
			         dataType: "json",
			         success: function(data){
			         	if(data == 1){
			         	$(".campaign-loader").css('display','none');
			         	if(androidCampaign["selectedPlatform"] == 'email'){
			         		window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
			         	}else{
			         		window.parent.location.href =  baseurl+"appUser/campaigns/";
			         	}

			         	}
			         }

			 	});

}

function saveConfirmAsDraft(){

	var baseurl = $("#baseurl").val();

	jsonObj.push(androidCampaign);
	jsonString = JSON.stringify(jsonObj);
	//alert(jsonString);
	//console.log(jsonString); return false;
	$(".campaign-loader").css('display','block');
	$.ajax({

		type: "POST",
        url: baseurl + 'appUser/savePushNotificationCampaignDraft',
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
        	if(data == 1){
        	$(".campaign-loader").css('display','none');
        	if(androidCampaign["selectedPlatform"] == 'email'){
         		window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
         	}else{
         		//window.parent.location.href =  baseurl+"appUser/campaigns/";
         		if(androidCampaign["campaignId"] == ''){
        			window.parent.location.href =  baseurl+"appUser/campaigns/";
        		}else{
        			window.parent.location.href =  baseurl+"appUser/editCampaigns/"+androidCampaign["campaignId"];
        		}
         	}
        	}
        }
	});

}

 function DeleteCampaign(id,type){
     var baseurl = $("#baseurl").val();
     //debugger;
     //alert(type); return false;
     if(type != 'cross'){
         $.ajax({
         type: "POST",
         url: baseurl + 'appUser/deleteCampaign/',
         data:"campaignId="+id,
         context: document.body,
         async: true,
         success: function(data) {
        	 //alert(data); return false;
             if(data == 1){
            	 if(type == 'email'){
            		 window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
            	 }
                 else{
            		 window.parent.location.href =  baseurl+"appUser/campaigns/";
            	 }
                 //parent.window.location.reload();

             }
         }
     });
     }else{
       $.ajax({
         type: "POST",
         url: baseurl + 'crosschannel/deleteCampaign/',
         data:"campaignId="+id,
         context: document.body,
         async: true,
         success: function(data) {
        	 //console.log(data); return false;
             if(data == 1){
                 window.parent.location.href =  baseurl+"appUser/crossChannel/";
                 //parent.window.location.reload();

             }
         }
     });  
     }
     
 }
 
 function sendTestEmail(){
      jsonComposeObj = [];
      composeDraft = {};

    	var baseurl = $("#baseurl").val();
    	var selectedPlatform = $("#selectedPlatform").val();
      var campaignName = $("#campaignName").val();
    	var groupId = $("#groupId").val();
      var receiverEmail = $("#receiver-email").val();
    	var campaignId = $("#campaignId").val();
      var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var validation = [];

    	if($.trim(receiverEmail) == ''){
     		$("#error_receiver-email").text("Please enter a valid email.");
            $("#email-send-response").html("");
    		$("#receiver-email").css('border-color', '#424141');
    		validation['receiver-email'] = 0;
    	}else{
    		var isvalid = emailRegexStr.test(receiverEmail);
        if (!isvalid) {
          $("#error_receiver-email").text("Please enter a valid email!");
          $("#email-send-response").html("");
          $("#receiver-email").css('border-color', '#424141');
          validation['receiver-email'] = 0;
        }else{
      		$("#error_receiver-email").text("");
      		$("#receiver-email").css('border-color', '#ccc');
      		validation['receiver-email'] = 1;
        }
    	}

  		var displayName = $("#displayName").val();
  		var fromAddress = $("#fromAddress").val();
  		var replyToAddress = $("#replyToAddress").val();
  		var subject = $("#subject").val();
  		//var editor = tinyMCE.activeEditor.getContent();
  		//var editor = $('#editor').summernote('code');
  		var editor = $('#editor').froalaEditor('html.get');

  		if($.trim(fromAddress) != ''){
  			var isvalid = emailRegexStr.test(fromAddress);
  			if (!isvalid) {
          $("#error_fromAddress").text("Please enter a valid email!");
          $("#email-send-response").html("");
          $("#fromAddress").css('border-color', '#424141');
          validation['fromAddress'] = 0;
  			}else{
  				$("#error_fromAddress").text("");
          $("#fromAddress").css('border-color', '#ccc');
          validation['fromAddress'] = 1;
  			}
  		}else{
  			  $("#error_fromAddress").text("");
          $("#fromAddress").css('border-color', '#ccc');
          validation['fromAddress'] = 1;
  		}

  		if($.trim(replyToAddress) != ''){
  			var isvalid = emailRegexStr.test(replyToAddress);
  			if(!isvalid){
  				$("#error_replyToAddress").text("Please enter a valid email!");
                $("#email-send-response").html("");
          $("#replyToAddress").css('border-color', '#424141');
          validation['replyToAddress'] = 0;
  			}else{
  				$("#error_replyToAddress").text("");
          $("#replyToAddress").css('border-color', '#ccc');
          validation['replyToAddress'] = 1;
  			}
  		}else{
  			$("#error_replyToAddress").text("");
        $("#replyToAddress").css('border-color', '#ccc');
        validation['replyToAddress'] = 1;
  		}

  		if($.trim(subject) == ''){
  			$("#error_subject").text('Please enter subject');
  			$("#subject").css('border-color', '#424141');
  			validation['subject'] = 0;
  		}else{
  			$("#error_subject").text('');
  			$("#subject").css('border-color', '#ccc');
  			validation['subject'] = 1;
  		}

  		if($('input[name="plainEditor"]:checked').val() == 1){
  			var plainEditor = $('input[name="plainEditor"]:checked').val();
  		}else{
  			var plainEditor = '';
  		}

  		if(plainEditor == '1'){
  			// Plain text message
  			var message = $("#plainText").val().replace(/\n/g, '<br/>');   //$("#plainText").val();
  		}else{
  			//Editor message
  			var message = editor;
  		}

  	  var rtnfalse = [];
      var i = 0;
      for (var item in validation)
      {
          if (validation[item] == 0)
          {
              rtnfalse[i] = 1;
          } else {
              rtnfalse[i] = 0;
          }
          i++;
      }

      var errorResult = jQuery.inArray(1, rtnfalse);

      if(errorResult == -1){

          composeDraft['receiverEmail'] = receiverEmail;
          composeDraft['displayName'] = displayName;
          composeDraft['fromAddress'] = fromAddress;
          composeDraft['subject'] = subject;
          composeDraft['editor'] = message;
          composeDraft['campaignName'] = campaignName;
          composeDraft['groupId'] = groupId;

          jsonComposeObj.push(composeDraft);
          jsonString = JSON.stringify(jsonComposeObj);
          var unsubscribeUser = "unsubscribeUser";

          $(".campaign-loader").css('display','block');
          $("#email-send-response").html('');
        	$.ajax({
        		    type: "POST",
                url: baseurl + 'appUser/sendTestEmail',
                data: jsonString,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data){
                  //alert(data);
                  var responseObj = JSON.stringify(data);
                  var responseObj1 = jQuery.parseJSON(responseObj);
                	if (responseObj1.data.status === "success") {
                     $("#receiver-email").css('border-color', '#ccc');
                	   $(".campaign-loader").css('display','none');
                     $("#email-send-response").html(responseObj1.data.statusMessage);
                	}else if(responseObj1.data.status === "error" && responseObj1.data.errortype === "unsubscribe"){
                     $("#receiver-email").css('border-color', '#424141');
                  	 $(".campaign-loader").css('display','none');
                     $("#email-send-response").html(responseObj1.data.statusMessage);
                  }else{
                     $("#receiver-email").css('border-color', '#424141');
                	   $(".campaign-loader").css('display','none');
                     $("#email-send-response").html(responseObj1.data.statusMessage);
                  }
               }
        	});

      }
 }
 
 function campaigns_more_activities_click()
{

    var searchResult = '';
    var searchpage = '';

    $(".loadingAddmoreImage").css("display", "block");

    var statuscount = $("#statuscount").val();

    var noofstatus = $("#noofstatus").val();

    var totalrecord = $("#totalrecord").val();

    var lastrecord = $("#laststatus_id").val();

    var baseurl = $("#baseurl").val();

    var businessId = $("#businessId").val();


    if (parseInt(totalrecord) > parseInt(statuscount)) {
        //processFlag = true;
    	var newstaatuscount = parseInt(statuscount) + parseInt(noofstatus);

        $.ajax({
            type: 'POST',
            url: baseurl + 'appUser/pushCampaignListPagination',
            data: "status_id=" + lastrecord + "&statuscount=" + statuscount + "&noofstatus=" + noofstatus + "&totalrecord=" + totalrecord + searchResult + searchpage + "&businessId=" + businessId + "&newStatusCount=" + newstaatuscount,
            context: document.body,
            async: true,
            success: function(data) {
                //alert(data);
                //return false;
                //var newstaatuscount = parseInt(statuscount) + parseInt(noofstatus);
                $("#statuscount").val(newstaatuscount);
                $(".profileBanner").css("height", "320px");
                $("#appendli").css("display", "block");
                $(".loadingAddmoreImage").css("display", "none");
                $("#appendli").append(data);

                processFlag = false;
                count = 0;
            },
        });
    } else {

        var li = "No more result found";
        $(".loadingAddmoreImage").css("display", "none");
        $(".viewmore").text(li);
        $(".viewmore").removeClass('pagination');

    }
}

function emailCampaigns_more_activities_click(){
	var searchResult = '';
    var searchpage = '';

    $(".loadingAddmoreImage").css("display", "block");

    var statuscount = $("#statuscount").val();

    var noofstatus = $("#noofstatus").val();

    var totalrecord = $("#totalrecord").val();

    var lastrecord = $("#laststatus_id").val();

    var baseurl = $("#baseurl").val();

    var businessId = $("#businessId").val();


    if (parseInt(totalrecord) > parseInt(statuscount)) {
        //processFlag = true;
    	var newstaatuscount = parseInt(statuscount) + parseInt(noofstatus);

        $.ajax({
            type: 'POST',
            url: baseurl + 'appUser/emailCampaignListPagination',
            data: "status_id=" + lastrecord + "&statuscount=" + statuscount + "&noofstatus=" + noofstatus + "&totalrecord=" + totalrecord + searchResult + searchpage + "&businessId=" + businessId + "&newStatusCount=" + newstaatuscount,
            context: document.body,
            async: true,
            success: function(data) {
                //alert(data);
                //return false;
                //var newstaatuscount = parseInt(statuscount) + parseInt(noofstatus);
                $("#statuscount").val(newstaatuscount);
                $(".profileBanner").css("height", "320px");
                $("#appendli").css("display", "block");
                $(".loadingAddmoreImage").css("display", "none");
                $("#appendli").append(data);

                processFlag = false;
                count = 0;
            },
        });
    } else {

        var li = "No more result found";
        $(".loadingAddmoreImage").css("display", "none");
        $(".viewmore").text(li);
        $(".viewmore").removeClass('pagination');

    }
}

jsonAutomationObj = [];
automationCampaign = {};

$('input[name="automation"]').click(function(){
    if($('input[name="automation"]:checked').val() == 1){
	var baseurl = $("#baseurl").val();
 	var selectedPlatform = $("#selectedPlatform").val();
        //alert(selectedPlatform); return false;
 	var groupId = $("#groupId").val();
 	var campaignName = $("#campaignName").val();
 	var push_title = $("#push_title").val();
 	var push_message = $("#push_message").val();
 	var summery_text = $("#summery_text").val();
 	var custom_url = $("#custom_url").val();
 	var campaignId = $("#campaignId").val();
        var message_category = $("#message_category").val();
        var campaignPersonaUser = $("#campaignPersonaUser").val();
        var campaignList = $("#campaignLists").val();
        var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
        
        if(campaignPersonaUser != ""){
          campaignPersonaUser = campaignPersonaUser;
        }else{
          campaignPersonaUser = "";
        }

        if(campaignList != ""){
          campaignList = campaignList;
        }else{
          campaignList = "";
        }
        
        if($( ".imgInputField" ).has( "img" ).length){
        if(selectedPlatform == 'android'){
           var push_notification_image = $("#android_push_notification_image").attr('src');
        }else{
            var push_notification_image = $("#ios_push_notification_image").attr('src');
        }

    }else{
        var push_notification_image = '';
    }
 	

	if(selectedPlatform == 'android'){
		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}
	}
	if(selectedPlatform == 'iOS'){

		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}

		if($('input[name="limit_this_push_to_iPad_devices"]:checked').val() == 1){
			var limit_this_push_to_iPad_devices = $('input[name="limit_this_push_to_iPad_devices"]:checked').val();
		}else{
			var limit_this_push_to_iPad_devices = "";
		}

		if($('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val() == 1){
			var limit_this_push_to_iphone_and_ipod_devices = $('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val();
		}else{
			var limit_this_push_to_iphone_and_ipod_devices = "";
		}

	}

 	var push_icon = $("#push_icon").val();
 	var push_img_url = $("#push_img_url").val();
 	var expandedImage = $("#expandedImage").val();
 	var expanded_img_url = $("#expanded_img_url").val();
 	var validation = [];

    if($.trim(campaignName) == ''){
        $("#error_campaignName").text("Please enter Campaign name");
        $('html,body').animate({
                    scrollTop: $("#composeTab").offset().top},
                'slow');
        $("#campaignName").css('border-color', '#424141');
        validation['campaignName'] = 0;
    }else{
        $("#error_campaignName").text("");
        $("#campaignName").css('border-color', '#ccc');
        validation['campaignName'] = 1;
//        if(/^[a-zA-Z0-9- ]*$/.test($.trim(campaignName)) != false) {
//            $("#error_campaignName").text("");
//            $("#campaignName").css('border-color', '#ccc');
//            validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
    }
    
        if(selectedPlatform == ''){
            $("#choose_platform").click();
            $('#automation').attr('checked', false); 
            validation['selectedPlatform'] = 0;
        }else{
            validation['selectedPlatform'] = 1;
        }

 	if(selectedPlatform == 'android'){
		if($.trim(push_title) == ''){
			$("#error_pushTitle").text('Please enter title');
			$("#push_title").css('border-color', '#424141');
			validation['push_title'] = 0;
		}else{
			$("#error_pushTitle").text('');
			$("#push_title").css('border-color', '#ccc');
			validation['push_title'] = 1;
		}


		if($.trim(push_message) == ''){
			$("#error_pushMsg").text('Please enter message');
			$("#push_message").css('border-color', '#424141');
			validation['push_message'] = 0;
		}else{
			$("#error_pushMsg").text('');
			$("#push_message").css('border-color', '#ccc');
			validation['push_message'] = 1;
		}
	}

	if(selectedPlatform == 'iOS'){
		var push_iOS_message = $("#push_iOS_message").val();

		if($.trim(push_iOS_message) == ''){
			$("#error_iOSpushMsg").text('Please enter message');
			$("#push_iOS_message").css('border-color', '#424141');
			validation['push_iOS_message'] = 0;
		}else{
			$("#error_iOSpushMsg").text('');
			$("#push_iOS_message").css('border-color', '#ccc');
			validation['push_iOS_message'] = 1;
		}
	}

if(selectedPlatform == 'android'){

		var custom_url = $("#android_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#android_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

			if($.trim(redirect_url) == ''){
				$("#error_android_redirect_url").text("Please enter Web URL");
				$("#android_redirect_url").css('border-color', '#424141');
				validation['android_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_android_redirect_url").text("Please enter valid Web URL");
					$("#android_redirect_url").css('border-color', '#424141');
					validation['android_redirect_url'] = 0;
				}else{
					$("#error_android_redirect_url").text("");
					$("#android_redirect_url").css('border-color', '#ccc');
					validation['android_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#android_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_android_deep_link").text("Please enter Web URL");
				$("#android_deep_link").css('border-color', '#424141');
				validation['android_deep_link'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_android_deep_link").text("Please enter valid Web URL");
					$("#android_deep_link").css('border-color', '#424141');
					validation['android_deep_link'] = 0;
				}else{
					$("#error_android_deep_link").text("");
					$("#android_deep_link").css('border-color', '#ccc');
					validation['android_deep_link'] = 1;
				}
			}

		}

		if(custom_url == '3'){
			$("#error_android_redirect_url").text("");
			$("#android_redirect_url").css('border-color', '#ccc');
			validation['android_redirect_url'] = 1;
			validation['android_deep_link'] = 1;
		}

		/*else{
			$("#error_android_redirect_url").text("");
			$("#android_redirect_url").css('border-color', '#ccc');
			validation['android_redirect_url'] = 1;
		}*/
	}

	if(selectedPlatform == 'iOS'){
		var custom_url = $("#ios_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#ios_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_redirect_url").text("Please enter Web URL");
				$("#ios_redirect_url").css('border-color', '#424141');
				validation['ios_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_redirect_url").text("Please enter valid Web URL");
					$("#ios_redirect_url").css('border-color', '#424141');
					validation['ios_redirect_url'] = 0;
				}else{
					$("#error_ios_redirect_url").text("");
					$("#ios_redirect_url").css('border-color', '#ccc');
					validation['ios_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#ios_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_deep_link").text("Please enter Web URL");
				$("#ios_deep_link").css('border-color', '#424141');
				validation['ios_deep_link'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_deep_link").text("Please enter valid Web URL");
					$("#ios_deep_link").css('border-color', '#424141');
					validation['ios_deep_link'] = 0;
				}else{
					$("#error_ios_deep_link").text("");
					$("#ios_deep_link").css('border-color', '#ccc');
					validation['ios_deep_link'] = 1;
				}
			}
		}
		if(custom_url == '3'){
			$("#error_ios_redirect_url").text("");
			$("#ios_redirect_url").css('border-color', '#ccc');
			validation['ios_redirect_url'] = 1;
			validation['ios_deep_link'] = 1;
		}
		/*else{
			$("#error_ios_redirect_url").text("");
			$("#ios_redirect_url").css('border-color', '#ccc');
			validation['ios_redirect_url'] = 1;
		}*/
	}

if(selectedPlatform == 'email'){

		var emailSettings = $("#emailSettings").val();
                var displayName = $("#displayName").val();
		var fromAddress = $("#fromAddress").val();
		var replyToAddress = $("#replyToAddress").val();
                var subject = $("#subject").val();
                var editor = $('#editor').froalaEditor('html.get');
		var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
                if(emailSettings == 0){
                    if($.trim(displayName) == ''){
                        $("#error_displayName").text('Please enter Display Name');
                        $("#displayName").css('border-color', '#424141');
                        validation['displayName'] = 0;
                    }else{
                        $("#error_displayName").text('');
                        $("#displayName").css('border-color', '#ccc');
                        validation['displayName'] = 1;
                    }
                    
                    if($.trim(fromAddress) == ''){
                        $("#error_fromAddress").text('Please enter From Address');
                        $("#fromAddress").css('border-color', '#424141');
                        validation['fromAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(fromAddress);
                        if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            $("#error_fromAddress").text("");
                            $("#fromAddress").css('border-color', '#ccc');
                            validation['fromAddress'] = 1;
			}
                    }
                    
                    if($.trim(replyToAddress) == ''){
                        $("#error_replyToAddress").text('Please enter Reply-To Address');
                        $("#replyToAddress").css('border-color', '#424141');
                        validation['replyToAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(replyToAddress);
                        if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            $("#error_replyToAddress").text("");
                            $("#replyToAddress").css('border-color', '#ccc');
                            validation['replyToAddress'] = 1;
			}
                    }
                    
                }else{
                    if($.trim(fromAddress) != ''){
			var isvalid = emailRegexStr.test(fromAddress);
			if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            $("#error_fromAddress").text("");
                            $("#fromAddress").css('border-color', '#ccc');
                            validation['fromAddress'] = 1;
			}
                    }else{
			$("#error_fromAddress").text("");
                        $("#fromAddress").css('border-color', '#ccc');
                        validation['fromAddress'] = 1;
                    }
                    
                    if($.trim(replyToAddress) != ''){
			var isvalid = emailRegexStr.test(replyToAddress);
			if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            $("#error_replyToAddress").text("");
                            $("#replyToAddress").css('border-color', '#ccc');
                            validation['replyToAddress'] = 1;
			}
                    }else{
			$("#error_replyToAddress").text("");
                        $("#replyToAddress").css('border-color', '#ccc');
                        validation['replyToAddress'] = 1;
                    }
                }
		

		if($.trim(subject) == ''){
			$("#error_subject").text('Please enter subject');
			$("#subject").css('border-color', '#424141');
			validation['subject'] = 0;
		}else{
			$("#error_subject").text('');
			$("#subject").css('border-color', '#ccc');
			validation['subject'] = 1;
		}
                
                if($.trim(editor) == ''){
                    validation['editor'] = 0;
                }else{
                    validation['editor'] = 1;
                }

		if($('input[name="plainEditor"]:checked').val() == 1){
			var plainEditor = $('input[name="plainEditor"]:checked').val();
		}else{
			var plainEditor = '';
		}

		if(plainEditor == '1'){
			// Plain text message
			var message = $("#plainText").val().replace(/\n/g, '<br/>');   //$("#plainText").val();
		}else{
			//Editor message
			var message = editor;
		}


	}

 	var rtnfalse = [];
     var i = 0;
     for (var item in validation)
     {
         if (validation[item] == 0)
         {
             rtnfalse[i] = 1;
         } else {
             rtnfalse[i] = 0;
         }
         i++;
     }

     var errorResult = jQuery.inArray(1, rtnfalse);

    if(errorResult == -1){
        
        $("#draftButton").css('display','none');
        $("#deliveryButton").css('display','none');
 	automationCampaign["selectedPlatform"] = selectedPlatform;
 	automationCampaign["groupId"] = groupId;
 	automationCampaign["campaignName"] = campaignName;
 	automationCampaign["campaignId"] = campaignId;
        automationCampaign["message_category"] = message_category;
        automationCampaign["automation"] = 1;
        automationCampaign["campaignPersonaUser"] = campaignPersonaUser;
        automationCampaign["campaignList"] = campaignList;
        automationCampaign["push_notification_image"] = push_notification_image;

 	if(selectedPlatform == 'android'){
 		automationCampaign["push_title"] = push_title;
 		automationCampaign["push_message"] = push_message;
 		automationCampaign["summery_text"] = summery_text;
	}
	if(selectedPlatform == 'iOS'){
		automationCampaign["push_message"] = push_iOS_message;
	}
	if(selectedPlatform == 'email'){
		automationCampaign["push_title"] = subject;
		automationCampaign["push_message"] = message;
		automationCampaign["displayName"] = displayName;
		automationCampaign["fromAddress"] = fromAddress;
		automationCampaign["replyToAddress"] = replyToAddress;
	}
	automationCampaign["custom_url"] = custom_url;
	if(custom_url == '1' || custom_url == '2'){
		automationCampaign["redirect_url"] = redirect_url;
	}else{
		automationCampaign["redirect_url"] = '';
	}
	


	if(selectedPlatform == 'android'){
		automationCampaign["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
	}
	if(selectedPlatform == 'iOS'){
		automationCampaign["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
		automationCampaign["limit_this_push_to_iPad_devices"] = limit_this_push_to_iPad_devices;
		automationCampaign["limit_this_push_to_iphone_and_ipod_devices"] = limit_this_push_to_iphone_and_ipod_devices;
	}

 	automationCampaign["push_icon"] = push_icon;
 	automationCampaign["expandedImage"] = expandedImage;
 	automationCampaign["push_img_url"] = push_img_url;
 	automationCampaign["expanded_img_url"] = expanded_img_url;

 	//composeDraft["type"] = type;

 	jsonAutomationObj.push(automationCampaign);
 	jsonString = JSON.stringify(jsonAutomationObj);
        

 	$(".campaign-loader").css('display','block');
 	$.ajax({

 		type: "POST",
         url: baseurl + 'appUser/saveAutomation',
         data: jsonString,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function(data){
         	if(data == 1){
         	$(".campaign-loader").css('display','none');
                $("#confirmAutomation").trigger('click');
//         	if(selectedPlatform == 'email'){
//         		window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
//         	}else{
//         		window.parent.location.href =  baseurl+"appUser/campaigns/";
//         	}

         	}
         }

 	});

    }else{
            $('#automation').attr('checked', false);
            $("#draftButton").show();
            $("#deliveryButton").show();
            return false;
    }
        
        
    }else{
	
    }
});

function saveAutomation(){
   
   var baseurl = $("#baseurl").val();
 	var selectedPlatform = $("#selectedPlatform").val();
 	var groupId = $("#groupId").val();
 	var campaignName = $("#campaignName").val();
 	var push_title = $("#push_title").val();
 	var push_message = $("#push_message").val();
 	var summery_text = $("#summery_text").val();
 	var custom_url = $("#custom_url").val();
 	var campaignId = $("#campaignId").val();
        var message_category = $("#message_category").val();
        var campaignPersonaUser = $("#campaignPersonaUser").val();
        var campaignList = $("#campaignLists").val();
        var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
        
        if(campaignPersonaUser != ""){
          campaignPersonaUser = campaignPersonaUser;
        }else{
          campaignPersonaUser = "";
        }

        if(campaignList != ""){
          campaignList = campaignList;
        }else{
          campaignList = "";
        }
        
        if($( ".imgInputField" ).has( "img" ).length){
        if(selectedPlatform == 'android'){
           var push_notification_image = $("#android_push_notification_image").attr('src');
        }else{
            var push_notification_image = $("#ios_push_notification_image").attr('src');
        }

    }else{
        var push_notification_image = '';
    }
 	

	if(selectedPlatform == 'android'){
		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}
	}
	if(selectedPlatform == 'iOS'){

		if($('input[name="send_push_to_recently_used_device"]:checked').val() == 1){
			var send_push_to_recently_used_device = $('input[name="send_push_to_recently_used_device"]:checked').val();
		}else{
			var send_push_to_recently_used_device = "";
		}

		if($('input[name="limit_this_push_to_iPad_devices"]:checked').val() == 1){
			var limit_this_push_to_iPad_devices = $('input[name="limit_this_push_to_iPad_devices"]:checked').val();
		}else{
			var limit_this_push_to_iPad_devices = "";
		}

		if($('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val() == 1){
			var limit_this_push_to_iphone_and_ipod_devices = $('input[name="limit_this_push_to_iphone_and_ipod_devices"]:checked').val();
		}else{
			var limit_this_push_to_iphone_and_ipod_devices = "";
		}

	}

 	var push_icon = $("#push_icon").val();
 	var push_img_url = $("#push_img_url").val();
 	var expandedImage = $("#expandedImage").val();
 	var expanded_img_url = $("#expanded_img_url").val();
 	var validation = [];

    if($.trim(campaignName) == ''){
        $("#error_campaignName").text("Please enter Campaign name");
        $('html,body').animate({
                    scrollTop: $("#composeTab").offset().top},
                'slow');
        $("#campaignName").css('border-color', '#424141');
        validation['campaignName'] = 0;
    }else{
        $("#error_campaignName").text("");
        $("#campaignName").css('border-color', '#ccc');
        validation['campaignName'] = 1;
//        if(/^[a-zA-Z0-9- ]*$/.test($.trim(campaignName)) != false) {
//            $("#error_campaignName").text("");
//            $("#campaignName").css('border-color', '#ccc');
//            validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
    }

 	if(selectedPlatform == 'android'){
		if($.trim(push_title) == ''){
			$("#error_pushTitle").text('Please enter title');
			$("#push_title").css('border-color', '#424141');
			validation['push_title'] = 0;
		}else{
			$("#error_pushTitle").text('');
			$("#push_title").css('border-color', '#ccc');
			validation['push_title'] = 1;
		}


		if($.trim(push_message) == ''){
			$("#error_pushMsg").text('Please enter message');
			$("#push_message").css('border-color', '#424141');
			validation['push_message'] = 0;
		}else{
			$("#error_pushMsg").text('');
			$("#push_message").css('border-color', '#ccc');
			validation['push_message'] = 1;
		}
	}

	if(selectedPlatform == 'iOS'){
		var push_iOS_message = $("#push_iOS_message").val();

		if($.trim(push_iOS_message) == ''){
			$("#error_iOSpushMsg").text('Please enter message');
			$("#push_iOS_message").css('border-color', '#424141');
			validation['push_iOS_message'] = 0;
		}else{
			$("#error_iOSpushMsg").text('');
			$("#push_iOS_message").css('border-color', '#ccc');
			validation['push_iOS_message'] = 1;
		}
	}

if(selectedPlatform == 'android'){

		var custom_url = $("#android_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#android_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

			if($.trim(redirect_url) == ''){
				$("#error_android_redirect_url").text("Please enter Web URL");
				$("#android_redirect_url").css('border-color', '#424141');
				validation['android_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_android_redirect_url").text("Please enter valid Web URL");
					$("#android_redirect_url").css('border-color', '#424141');
					validation['android_redirect_url'] = 0;
				}else{
					$("#error_android_redirect_url").text("");
					$("#android_redirect_url").css('border-color', '#ccc');
					validation['android_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#android_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_android_deep_link").text("Please enter Web URL");
				$("#android_deep_link").css('border-color', '#424141');
				validation['android_deep_link'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_android_deep_link").text("Please enter valid Web URL");
					$("#android_deep_link").css('border-color', '#424141');
					validation['android_deep_link'] = 0;
				}else{
					$("#error_android_deep_link").text("");
					$("#android_deep_link").css('border-color', '#ccc');
					validation['android_deep_link'] = 1;
				}
			}

		}

		if(custom_url == '3'){
			$("#error_android_redirect_url").text("");
			$("#android_redirect_url").css('border-color', '#ccc');
			validation['android_redirect_url'] = 1;
			validation['android_deep_link'] = 1;
		}

		/*else{
			$("#error_android_redirect_url").text("");
			$("#android_redirect_url").css('border-color', '#ccc');
			validation['android_redirect_url'] = 1;
		}*/
	}

	if(selectedPlatform == 'iOS'){
		var custom_url = $("#ios_custom_url").val();

		if(custom_url == '1'){
			var redirect_url = $("#ios_redirect_url").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_redirect_url").text("Please enter Web URL");
				$("#ios_redirect_url").css('border-color', '#424141');
				validation['ios_redirect_url'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_redirect_url").text("Please enter valid Web URL");
					$("#ios_redirect_url").css('border-color', '#424141');
					validation['ios_redirect_url'] = 0;
				}else{
					$("#error_ios_redirect_url").text("");
					$("#ios_redirect_url").css('border-color', '#ccc');
					validation['ios_redirect_url'] = 1;
				}
			}
		}
		if(custom_url == '2'){
			var redirect_url = $("#ios_deep_link").val();
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			if($.trim(redirect_url) == ''){
				$("#error_ios_deep_link").text("Please enter Web URL");
				$("#ios_deep_link").css('border-color', '#424141');
				validation['ios_deep_link'] = 0;
			}else{
				if(urlregex.test(redirect_url) == false){
					$("#error_ios_deep_link").text("Please enter valid Web URL");
					$("#ios_deep_link").css('border-color', '#424141');
					validation['ios_deep_link'] = 0;
				}else{
					$("#error_ios_deep_link").text("");
					$("#ios_deep_link").css('border-color', '#ccc');
					validation['ios_deep_link'] = 1;
				}
			}
		}
		if(custom_url == '3'){
			$("#error_ios_redirect_url").text("");
			$("#ios_redirect_url").css('border-color', '#ccc');
			validation['ios_redirect_url'] = 1;
			validation['ios_deep_link'] = 1;
		}
		/*else{
			$("#error_ios_redirect_url").text("");
			$("#ios_redirect_url").css('border-color', '#ccc');
			validation['ios_redirect_url'] = 1;
		}*/
	}

if(selectedPlatform == 'email'){

		var emailSettings = $("#emailSettings").val();
                var displayName = $("#displayName").val();
		var fromAddress = $("#fromAddress").val();
		var replyToAddress = $("#replyToAddress").val();
                var subject = $("#subject").val();
                var editor = $('#editor').froalaEditor('html.get');
		var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
                if(emailSettings == 0){
                    if($.trim(displayName) == ''){
                        $("#error_displayName").text('Please enter Display Name');
                        $("#displayName").css('border-color', '#424141');
                        validation['displayName'] = 0;
                    }else{
                        $("#error_displayName").text('');
                        $("#displayName").css('border-color', '#ccc');
                        validation['displayName'] = 1;
                    }
                    
                    if($.trim(fromAddress) == ''){
                        $("#error_fromAddress").text('Please enter From Address');
                        $("#fromAddress").css('border-color', '#424141');
                        validation['fromAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(fromAddress);
                        if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            $("#error_fromAddress").text("");
                            $("#fromAddress").css('border-color', '#ccc');
                            validation['fromAddress'] = 1;
			}
                    }
                    
                    if($.trim(replyToAddress) == ''){
                        $("#error_replyToAddress").text('Please enter Reply-To Address');
                        $("#replyToAddress").css('border-color', '#424141');
                        validation['replyToAddress'] = 0;
                    }else{
                        var isvalid = emailRegexStr.test(replyToAddress);
                        if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            $("#error_replyToAddress").text("");
                            $("#replyToAddress").css('border-color', '#ccc');
                            validation['replyToAddress'] = 1;
			}
                    }
                    
                }else{
                    if($.trim(fromAddress) != ''){
			var isvalid = emailRegexStr.test(fromAddress);
			if (!isvalid) {
                            $("#error_fromAddress").text("Please enter a valid email!");
                            $("#fromAddress").css('border-color', '#424141');
                            validation['fromAddress'] = 0;
			}else{
                            $("#error_fromAddress").text("");
                            $("#fromAddress").css('border-color', '#ccc');
                            validation['fromAddress'] = 1;
			}
                    }else{
			$("#error_fromAddress").text("");
                        $("#fromAddress").css('border-color', '#ccc');
                        validation['fromAddress'] = 1;
                    }
                    
                    if($.trim(replyToAddress) != ''){
			var isvalid = emailRegexStr.test(replyToAddress);
			if(!isvalid){
                            $("#error_replyToAddress").text("Please enter a valid email!");
                            $("#replyToAddress").css('border-color', '#424141');
                            validation['replyToAddress'] = 0;
			}else{
                            $("#error_replyToAddress").text("");
                            $("#replyToAddress").css('border-color', '#ccc');
                            validation['replyToAddress'] = 1;
			}
                    }else{
			$("#error_replyToAddress").text("");
                        $("#replyToAddress").css('border-color', '#ccc');
                        validation['replyToAddress'] = 1;
                    }
                }
		

		if($.trim(subject) == ''){
			$("#error_subject").text('Please enter subject');
			$("#subject").css('border-color', '#424141');
			validation['subject'] = 0;
		}else{
			$("#error_subject").text('');
			$("#subject").css('border-color', '#ccc');
			validation['subject'] = 1;
		}
                
                if($.trim(editor) == ''){
                    validation['editor'] = 0;
                }else{
                    validation['editor'] = 1;
                }

		if($('input[name="plainEditor"]:checked').val() == 1){
			var plainEditor = $('input[name="plainEditor"]:checked').val();
		}else{
			var plainEditor = '';
		}

		if(plainEditor == '1'){
			// Plain text message
			var message = $("#plainText").val().replace(/\n/g, '<br/>');   //$("#plainText").val();
		}else{
			//Editor message
			var message = editor;
		}


	}

 	var rtnfalse = [];
     var i = 0;
     for (var item in validation)
     {
         if (validation[item] == 0)
         {
             rtnfalse[i] = 1;
         } else {
             rtnfalse[i] = 0;
         }
         i++;
     }

     var errorResult = jQuery.inArray(1, rtnfalse);

    if(errorResult == -1){
        
        $("#draftButton").css('display','none');
        $("#deliveryButton").css('display','none');
 	automationCampaign["selectedPlatform"] = selectedPlatform;
 	automationCampaign["groupId"] = groupId;
 	automationCampaign["campaignName"] = campaignName;
 	automationCampaign["campaignId"] = campaignId;
        automationCampaign["message_category"] = message_category;
        automationCampaign["automation"] = 1;
        automationCampaign["campaignPersonaUser"] = campaignPersonaUser;
        automationCampaign["campaignList"] = campaignList;
        automationCampaign["push_notification_image"] = push_notification_image;

 	if(selectedPlatform == 'android'){
 		automationCampaign["push_title"] = push_title;
 		automationCampaign["push_message"] = push_message;
 		automationCampaign["summery_text"] = summery_text;
	}
	if(selectedPlatform == 'iOS'){
		automationCampaign["push_message"] = push_iOS_message;
	}
	if(selectedPlatform == 'email'){
		automationCampaign["push_title"] = subject;
		automationCampaign["push_message"] = message;
		automationCampaign["displayName"] = displayName;
		automationCampaign["fromAddress"] = fromAddress;
		automationCampaign["replyToAddress"] = replyToAddress;
	}
	automationCampaign["custom_url"] = custom_url;
	if(custom_url == '1' || custom_url == '2'){
		automationCampaign["redirect_url"] = redirect_url;
	}else{
		automationCampaign["redirect_url"] = '';
	}
	


	if(selectedPlatform == 'android'){
		automationCampaign["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
	}
	if(selectedPlatform == 'iOS'){
		automationCampaign["send_push_to_recently_used_device"] = send_push_to_recently_used_device;
		automationCampaign["limit_this_push_to_iPad_devices"] = limit_this_push_to_iPad_devices;
		automationCampaign["limit_this_push_to_iphone_and_ipod_devices"] = limit_this_push_to_iphone_and_ipod_devices;
	}

 	automationCampaign["push_icon"] = push_icon;
 	automationCampaign["expandedImage"] = expandedImage;
 	automationCampaign["push_img_url"] = push_img_url;
 	automationCampaign["expanded_img_url"] = expanded_img_url;

 	//composeDraft["type"] = type;

 	jsonAutomationObj.push(automationCampaign);
 	jsonString = JSON.stringify(jsonAutomationObj);
        

 	$(".campaign-loader").css('display','block');
 	$.ajax({

 		type: "POST",
         url: baseurl + 'appUser/saveAutomation',
         data: jsonString,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function(data){
         	if(data == 1){
         	$(".campaign-loader").css('display','none');
                $("#confirmAutomation").trigger('click');
//         	if(selectedPlatform == 'email'){
//         		window.parent.location.href =  baseurl+"appUser/emailCampaigns/";
//         	}else{
//         		window.parent.location.href =  baseurl+"appUser/campaigns/";
//         	}

         	}
         }

 	});

    }
    
}