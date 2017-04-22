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

function validateGroup(){

	var baseurl = $("#baseurl").val();
	var group_name = $("#group_name").val();
        var domain_name = $.trim($("#domain_name").val().toLowerCase());
        var regExp = new RegExp("^(?!www\\.|http:\\/\\/www\.)(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)+([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$");
	var validation = [];
        
        if($.trim(domain_name) == ''){
            $("#error_domain").text("Please add Domain name");
            $("#domain_name").css("border-color", "#424141");
	    validation['domain_name'] = 0;
        }else{
            if(regExp.test(domain_name) == false){
                $("#error_domain").text("Please add valid Domain name");
                $("#domain_name").css("border-color", "#424141");
                validation['domain_name'] = 0;
            }else{
                var chekdomain = checkdomain(domain_name, baseurl);
                if(chekdomain == 1 || domain_name == 'hurree.co'){
                    $("#error_domain").text("This domain is already exist");
                    $("#domain_name").css("border-color", "#424141");
                    validation['domain_name'] = 0;
                }else{
                    $("#error_domain").text("");
                    $("#domain_name").css("border-color", "#ccc");
                    validation['domain_name'] = 1;
                }
                
            }
        }
        
	if($.trim(group_name) == ''){
		 $("#error_group").text("Please add a Group name");
		 $("#group_name").css("border-color", "#424141");
	      validation['group_name'] = 0;
	}else{

        if(/^[a-zA-Z0-9- ]*$/.test(group_name) == false) {
            $("#error_group").text("Special characters are not allow");
            $("#group_name").css("border-color", "#424141");
            validation['group_name'] = 0;
        }else{

		$.ajax({
			type: "POST",
	        url: baseurl + 'groupApp/checkGroupName',
	        data: "group_name=" + group_name,
	        context: document.body,
	        success: function (data) {
	        	if(data == 1){
	        		$("#error_group").text("Group name already exist");
	       		 	$("#group_name").css("border-color", "#424141");
	       		 	validation['group_name'] = 0;
	        	}else{
	        		$("#error_group").text("");
	       		 	$("#group_name").css("border-color", "#ccc");
	       		 	validation['group_name'] = 1;

	       		//Save Group Name start
	       		var rtnfalse = [];
	       	    var i = 0;
	       	    for (var item in validation)
	       	    {
	       	      if (validation[item] == 0)
	       	      {"li"
	       	        $("#error" + item).css("display", 'block');
	       	        rtnfalse[i] = 1;

	       	      } else {
	       	        $("#error" + item).css("display", 'none');
	       	        rtnfalse[i] = 0;
	       	      }
	       	      i++;
	       	    }

	       	    var errorResult = jQuery.inArray(1, rtnfalse);

	       	 if (errorResult == -1)
	         {

	       		$(".loader").css({"display": "block"});
	           $.ajax({
	   			type: "POST",
	   	        url: baseurl + 'groupApp/addGroup',
	   	        data: "group_name=" + group_name + "&domain_name=" + domain_name,
	   	        context: document.body,
	   	        success: function (data) {
	             if (data != 0) {

	            	 $(".loader").css({"display": "none"});
	            	 window.location.href =  baseurl + "groupApp/appGroups/" + data;

	                  //return true;
	               }else{
                           $(".loader").css({"display": "none"});
                           $("#error_domain").text("Domain can not be added now. Try again later");
                           $("#domain_name").css("border-color", "#424141");
                    
                       }
	             }
	           });
	         } else {
	            return false;
	         }

	        	}
	        }
		});
    }

	}

}


function validateApp(){

	var baseurl = $("#baseurl").val();
	var group_id = $("#group_id").val();
	var app_name = $("#app_name").val();
	var platform = $("#platform").val();
	var validation = [];

	if($.trim(app_name) == ''){
		$("#error_appname").text("Please enter App name");
		$("#app_name").css("border-color", "#424141");
		validation['app_name'] = 0;
	}else{

        if(/^[a-zA-Z0-9- ]*$/.test(app_name) == false) {
            $("#error_appname").text("Special characters are not allow");
            $("#app_name").css("border-color", "#424141");
            validation['app_name'] = 0;
        }else{

		$.ajax({
			type: "POST",
	        url: baseurl + 'groupApp/checkAppName',
	        data: "app_name=" + app_name,
	        context: document.body,
	        success: function (data) {
	        	if(data == 1){
	        		$("#error_appname").text("App name already exist");
	        		$("#app_name").css("border-color", "#424141");
	        		validation['app_name'] = 0;
	        	}else{
	        		$("#error_appname").text("");
	       		 	$("#app_name").css("border-color", "#ccc");
	       		 	validation['app_name'] = 1;

	       		//Save App Name start
		       		var rtnfalse = [];
		       	    var i = 0;
		       	    for (var item in validation)
		       	    {
		       	      if (validation[item] == 0)
		       	      {
		       	        $("#error" + item).css("display", 'block');
		       	        rtnfalse[i] = 1;

		       	      } else {
		       	        $("#error" + item).css("display", 'none');
		       	        rtnfalse[i] = 0;
		       	      }
		       	      i++;
		       	    }

		       	    var errorResult = jQuery.inArray(1, rtnfalse);
		       	 if (errorResult == -1)
		         {
		       		$("#loading").css({"display": "block"});
		       		$.ajax({
			   			type: "POST",
			   	        url: baseurl + 'groupApp/addApp',
			   	        data: "app_name=" + app_name + "&group_id=" + group_id + "&platform=" + platform,
			   	        context: document.body,
			   	        success: function (data) {
  			             if (data == "success") {

  			            	 $("#loading").css({"display": "none"});
  			            	 parent.location.reload();

                     }else{
                       $("#error_morethanoneapp").text(data);
          			            //return false;
                     }
			             }
			           });
		         }else {
			            return false;
		         }

	        	}
	        }
	        });
        }
	}


}

function checkdomain(domain, baseurl)
{
	var msg = '';
    $.ajax({
        type: "POST",
        async: false,
        url: baseurl + 'groupApp/checkDomain',
        data: "domain=" + domain,
        context: document.body,
        success: function(data)
        {
            //console.log(data); return false;
            if (data == 0)
            {
                msg = 0;
                
            } else {
                msg = 1;
            }
        }
    });
    return msg;
}

function validateEmailSettings(){

	var baseurl = $("#baseurl").val();
	var feedback_email = $("#feedback_email").val();
	var displayName = $("#displayName").val();
	var email_fromEmail = $("#email_fromEmail").val();
	var email_replyTo = $("#email_replyTo").val();
	var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var letters = /^[a-zA-Z\s]*$/;
	var groupId = $("#groupId").val();
        var domain = $("#domain").val();
        var allowedDomains = [];
        allowedDomains.push(domain);
	var validation = [];

	if($.trim(feedback_email) == ''){
		$("#error_feedbackEmail").text("Please enter a email address");
		$("#feedback_email").val("");
		$("#feedback_email").css("border-color", "#424141");
		validation['feedback_email'] = 0;
	}else{
		var isvalid = emailRegexStr.test(feedback_email);
	    if (!isvalid) {

	        $("#error_feedbackEmail").text("Please enter a valid email address");
	        $("#feedback_email").css("border-color", "#424141");
	        $("#feedback_email").val("");
	        validation['feedback_email'] = 0;
	    } else {
                str = feedback_email.split('@').slice(1);                
                if ($.inArray(str[0], allowedDomains) !== -1) {
                    $("#error_feedbackEmail").text("");
                    $("#feedback_email").css('border-color', '#ccc');
                    validation['feedback_email'] = 1;
                }else{
                    $("#error_feedbackEmail").text("Please enter email of selected App group domain");
                    $("#feedback_email").css('border-color', '#424141');
                    validation['feedback_email'] = 0;
                }
                
                
	    }
	}

	if($.trim(displayName) == ''){
		$("#error_displayName").text("Please enter display name");
		$("#displayName").css("border-color", "#424141");
		$("#displayName").val('');
		validation['displayName'] = 0;
	}else{
		if (!letters.test($.trim(displayName))) {
            $("#error_displayName").text("Only alphabets are allow");
            $("#displayName").css("border-color", "#424141");
            $("#displayName").val('');
            validation['displayName'] = 0;
        } else {
            $("#error_displayName").text("");
            $("#displayName").css("border-color", "#ccc");
            validation['displayName'] = 1;
        }
	}

	if($.trim(email_fromEmail) == ''){
		$("#error_fromEmail").text("Please enter a email address");
		$("#email_fromEmail").css("border-color", "#424141");
		$("#email_fromEmail").val("");
		validation['email_fromEmail'] = 0;
	}else{
		var isfromEmailValid = emailRegexStr.test(email_fromEmail);
	    if (!isfromEmailValid) {

	        $("#error_fromEmail").text("Please enter a valid email address");
	        $("#email_fromEmail").css("border-color", "#424141");
	        $("#email_fromEmail").val("");
	        validation['email_fromEmail'] = 0;
	    } else {
//	        $("#error_fromEmail").text("");
//	        $("#email_fromEmail").css("border-color", "#ccc");
//	        validation['email_fromEmail'] = 1;
                
                str = email_fromEmail.split('@').slice(1);                
                if ($.inArray(str[0], allowedDomains) !== -1) {
                    $("#error_fromEmail").text("");
                    $("#email_fromEmail").css('border-color', '#ccc');
                    validation['email_fromEmail'] = 1;
                }else{
                    $("#error_fromEmail").text("Please enter email of selected App group domain");
                    $("#email_fromEmail").css('border-color', '#424141');
                    validation['email_fromEmail'] = 0;
                }
	    }
	}

	if($.trim(email_replyTo) == ''){
		$("#error_replyTo").text("Please enter a email address");
		$("#email_replyTo").val("");
		$("#email_replyTo").css("border-color", "#424141");
		validation['email_replyTo'] = 0;
	}else{
		var isreplyEmailValid = emailRegexStr.test(email_replyTo);
		if (!isreplyEmailValid) {

	        $("#error_replyTo").text("Please enter a valid email address");
	        $("#email_replyTo").css("border-color", "#424141");
	        $("#email_replyTo").val("");
	        validation['email_replyTo'] = 0;
	    } else {
//	        $("#error_replyTo").text("");
//	        $("#email_replyTo").css("border-color", "#ccc");
//	        validation['email_replyTo'] = 1;
                
                str = email_replyTo.split('@').slice(1);                
                if ($.inArray(str[0], allowedDomains) !== -1) {
                    $("#error_replyTo").text("");
                    $("#email_replyTo").css('border-color', '#ccc');
                    validation['email_replyTo'] = 1;
                }else{
                    $("#error_replyTo").text("Please enter email of selected App group domain");
                    $("#email_replyTo").css('border-color', '#424141');
                    validation['email_replyTo'] = 0;
                }
	    }
	}

	var rtnfalse = [];
	    var i = 0;
	    for (var item in validation)
	    {
	      if (validation[item] == 0)
	      {
	        $("#error" + item).css("display", 'block');
	        rtnfalse[i] = 1;

	      } else {
	        $("#error" + item).css("display", 'none');
	        rtnfalse[i] = 0;
	      }
	      i++;
	    }

	    var errorResult = jQuery.inArray(1, rtnfalse);
	    if (errorResult == -1)
        {
	    	$("#loading").css({"display": "block"});
	    	$.ajax({
		   			type: "POST",
		   	        url: baseurl + 'groupApp/saveEmailSettings',
		   	        data: "groupId=" + groupId + "&feedback_email=" + feedback_email + "&displayName=" + displayName + "&email_fromEmail=" + email_fromEmail + "&email_replyTo=" + email_replyTo,
		   	        context: document.body,
		   	        success: function (data) {
		             if (data) {

		            	 $("#loading").css({"display": "none"});
		            	 $("#successMessage").css({"display":"block"})
		            	 setTimeout(function(){
		            		 $("#successMessage").css({"display":"none"})
		            		}, 2000);
		            	 //parent.location.reload();

		               }
		             }
		           });

        }else {
            return false;
        }
}

function getAndroidApp(appId){

	var baseurl = $("#baseurl").val();
	//$("#loading").css('display','block');
	$.ajax({

		type: "POST",
        url: baseurl + 'groupApp/getApp',
        data: "appId=" + appId,
        context: document.body,
        success: function (data){

        	var app = JSON.parse(data);
        	$('.apps-tab-pan').toggle();
    		$('#ios-app-form').hide();
    		$('#android-app-form').show();
    		$("#android_app_name").val(app.app_name);
    		$("#androidAppId").val(app.app_group_apps_id);
    		$("#androidAppName").val(app.app_name);
    		$("#android_package_name").val(app.package_name);
    		if(app.app_image == ''){
    			$("#android_app_img").attr('src',baseurl+"assets/template/frontend/img/android.png");
    		}else{
    			$("#android_app_img").attr('src',baseurl+"upload/apps/"+app.app_image);
    		}

    		$("#android_api").val(app.app_group_apps_key);
    		$("#android_gcm").val(app.GCM);
        }

	});
}

function getIOSApp(appId){

	var baseurl = $("#baseurl").val();
	//$("#loading").css('display','block');
	$.ajax({

		type: "POST",
        url: baseurl + 'groupApp/getApp',
        data: "appId=" + appId,
        context: document.body,
        success: function (data){

        	var app = JSON.parse(data);
        	$('.apps-tab-pan').toggle();
    		$('#android-app-form').hide();
    		$('#ios-app-form').show();

    		$("#iosAppId").val(app.app_group_apps_id);
    		$("#iosAppName").val(app.app_name);
    		$("#ios_app_name").val(app.app_name);
    		if(app.app_image == ''){
    			$("#ios_app_img").attr('src',baseurl+"assets/template/frontend/img/ios.png");
    		}else{
    			$("#ios_app_img").attr('src',baseurl+"upload/apps/"+app.app_image);
    		}

    		$("#ios_api").val(app.app_group_apps_key);
    		$("#filename").val(app.fileName);
        }

	});
}


$(".editAndroid").on('submit', (function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var android_app_name = $("#android_app_name").val();
    var package_name = $("#android_package_name").val();
    var gcm = $("#android_gcm").val();
    var android_app_download_url = $("#android_app_download_url").val();
    var baseurl = $("#baseurl").val();
    var croppedImage = $("#profilePic").val();
    var groupId = $("#groupId").val();
    var androidAppId = $("#androidAppId").val();
    var androidAppName = $("#androidAppName").val();
    var uploadImage = 1;
    var validation = [];

    if ($.trim(android_app_name) == '')
    {
        $("#error_edit_androidName").text("Please enter App name");
        $("#android_app_name").css('border-color', '#424141');
        validation['android_app_name'] = 0;

    } else {
    	if(android_app_name == androidAppName){
    		$("#error_edit_androidName").text("");
   		 	$("#android_app_name").css("border-color", "#ccc");
   		 	validation['android_app_name'] = 1;

    	}else{

            if(/^[a-zA-Z0-9- ]*$/.test(android_app_name) == false) {
                $("#error_edit_androidName").text("Special characters are not allow");
                $("#android_app_name").css("border-color", "#424141");
                validation['android_app_name'] = 0;
            }else{

    	$.ajax({
			type: "POST",
	        url: baseurl + 'groupApp/checkAppName',
	        data: "app_name=" + android_app_name + "&group_id=" + groupId,
	        context: document.body,
	        async: false,
	        success: function (data) {

	        	if(data == 1){
	        		$("#error_edit_androidName").text("App name already exist");
	        		$("#android_app_name").css("border-color", "#424141");
	        		validation['android_app_name'] = 0;

	        	}else{
	        		$("#error_edit_androidName").text("");
	       		 	$("#android_app_name").css("border-color", "#ccc");
	       		 	validation['android_app_name'] = 1;

	        	}
	        }
	        	});
            }
    	}

    	if(validation['android_app_name'] == 1){

    		if (croppedImage != '') {
    			$.ajax({
    	            type: "POST",
    	            url: baseurl + 'groupApp/saveAndroidImage',
    	            data: "pic=" + croppedImage + "&androidAppId=" + androidAppId, //likeimage 12
    	            cache: false,
    	            processData: false,
                    async: false,
    	            contentType: "application/x-www-form-urlencoded",
    	            success: function(data) {
    	            	//console.log(data); return false;
    	                if (data == 'Please upload another image') {
                            //$("#saveResponse").text('Please upload another image');
                            uploadImage = 0;
                            return false;
                        }else{
    	                    $('#saveResponse').text('Your profile updated successfully!!');
                            uploadImage = 1;
    	                    return true;
    	                } 
    	            }
    	        });
    		}

    	}


    	if($.trim(gcm) != ''){
    		if(gcm.length < 20){
    			$("#error_gcm").text("The key you've entered has fewer than 20 characters. We suspect you may have accidentally added your GCM Project ID which should be specified within your site's manifest.json.");
        		$("#android_gcm").css("border-color", "#424141");
        		validation['gcm'] = 0;
    		}else{
    			$("#error_gcm").text("");
        		$("#android_gcm").css("border-color", "#ccc");
        		validation['gcm'] = 1;
    		}
    	}

    	var rtnfalse = [];
        var i = 0;
        for (var item in validation)
        {
            if (validation[item] == 0)
            {
                $("#"+item +"_error").css("display", 'block');
                rtnfalse[i] = 1;

            } else {
                 $("#"+item +"_error").css("display", 'none');
                rtnfalse[i] = 0;
            }
            i++;
        }

        var errorResult = jQuery.inArray(1, rtnfalse);
        
        if(uploadImage == 1){
            if (errorResult == -1 && validation['android_app_name'] == 1){
        $.ajax({
            type: "POST",
            url: baseurl + 'groupApp/saveAndroidApp',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                //console.log(data); return false;
                $("#updateApp").click();
                setTimeout(function(){
                   parent.window.location.reload();
                 }, 1500);
                
                //parent.window.location.reload();
            },


        });
    }else{

    return false;
    }
        }else{
            $("#error_androidImage").text('Please upload another image');
            setTimeout(function(){
                   $("#error_androidImage").text('');
                 }, 1500);

        }
        

    }

}));

$(".editIOS").on('submit', (function(e) {

	e.preventDefault();
    e.stopImmediatePropagation();
    var baseurl = $("#baseurl").val();
    var ios_app_name = $("#ios_app_name").val();
    var croppedImage = $("#iosPic").val();
	var iosAppId = $("#iosAppId").val();
	var iosAppName = $("#iosAppName").val();
  var certificateType = $("#certificateType").val();
	var ios_app_download_url = $("#ios_app_download_url").val();
	var groupId = $("#groupId").val();
    var uploadImage = 1;
	var validation = [];

	if($.trim(ios_app_name) == ''){
		$("#error_edit_iosName").text("Please enter App name");
		$("#ios_app_name").css('border-color', '#424141');
		validation['ios_app_name'] = 0;
	}else{

		if(ios_app_name == iosAppName){
    		$("#error_edit_iosName").text("");
   		 	$("#ios_app_name").css("border-color", "#ccc");
   		 	validation['ios_app_name'] = 1;

    	}else{
            if(/^[a-zA-Z0-9- ]*$/.test(ios_app_name) == false) {
                $("#error_edit_iosName").text("Special characters are not allow");
                $("#ios_app_name").css("border-color", "#424141");
                validation['ios_app_name'] = 0;
            }else{
            	$.ajax({
            		type: "POST",
        	        url: baseurl + 'groupApp/checkAppName',
        	        data: "app_name=" + ios_app_name + "&group_id=" + groupId,
        	        context: document.body,
        	        async: false,
        	        success: function (data) {

        	        	if(data == 1){
        	        		$("#error_edit_iosName").text("App name already exist");
        	        		$("#ios_app_name").css("border-color", "#424141");
        	        		validation['ios_app_name'] = 0;

        	        	}else{
        	        		$("#error_edit_iosName").text("");
        	       		 	$("#ios_app_name").css("border-color", "#ccc");
        	       		 	validation['ios_app_name'] = 1;

        	        	}
        	        }
            	});
            }
    	}

	var files = $('#upload')[0].files.length;

	if (files == 1) {
		var filetype = $('#upload')[0].files[0].type;
		if (filetype == 'application/x-x509-ca-cert'){/*filetype == 'application/x-pkcs12' || .p12 or*/
			$("#error_edit_iosfile").text("");
			$("#filename").css("border-color", "#ccc");
			validation['upload'] = 1;
		}else{
			$("#error_edit_iosfile").text("Only .pem files are accepted");
			$("#filename").css("border-color", "#424141");
			validation['upload'] = 0;
		}
	}

	if (croppedImage != '') {
		$.ajax({
            type: "POST",
            url: baseurl + 'groupApp/saveAndroidImage',
            data: "pic=" + croppedImage + "&androidAppId=" + iosAppId, //likeimage 12
            cache: false,
            processData: false,
            async: false,
            contentType: "application/x-www-form-urlencoded",
            success: function(data) {
            	//alert(data);
                if (data == 'Please upload another image') {
                            //$("#saveResponse").text('Please upload another image');
                            uploadImage = 0;
                            return false;
                        }else{
                            $('#saveResponse').text('Your profile updated successfully!!');
                            uploadImage = 1;
                            return true;
                        } 
            }
        });
	}
    
	var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            $("#"+item +"_error").css("display", 'block');
            rtnfalse[i] = 1;

        } else {
             $("#"+item +"_error").css("display", 'none');
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);
	//alert(errorResult); return false;
    if(uploadImage == 1){
	if (errorResult == -1) {
		$.ajax({
            type: "POST",
            url: baseurl + 'groupApp/saveIOSApp',
            data: new FormData(this),
            cache: false,
            processData: false,
            contentType: false,
            success: function(data) {
            	//alert(data); return false;
            	$("#updateApp").click();
                setTimeout(function(){
                   parent.window.location.reload();
                 }, 1500);
                /*if (data) {
                    $('#saveResponse').text('Your profile updated successfully!!');
                    return true;
                } else {
                    return false;
                }*/
            }
        });
	}
    }else{
        $("#error_iosImage").text('Please upload another image');
            setTimeout(function(){
                   $("#error_iosImage").text('');
                 }, 1500);
    }

	}

	return false;

}));

function validateEditGroup(){

	var baseurl = $("#baseurl").val();
	var group_name = $("#group_name").val();
	var groupName = $("#groupName").val();
        var domain_name = $.trim($("#domain_name").val().toLowerCase());
        var regExp = new RegExp("^(?!www\\.|http:\\/\\/www\.)(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)+([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$");
	var groupId = $("#groupId").val();
        var existDomain = $("#existDomain").val();
	var validation = [];
        
        if($.trim(domain_name) == ''){
            $("#error_domain").text("Please add Domain name");
            $("#domain_name").css("border-color", "#424141");
	    validation['domain_name'] = 0;
        }else{
            if(regExp.test(domain_name) == false){
                $("#error_domain").text("Please add valid Domain name");
                $("#domain_name").css("border-color", "#424141");
                validation['domain_name'] = 0;
            }else{
                if(existDomain == 1){
                    $("#error_domain").text("");
                    $("#domain_name").css("border-color", "#ccc");
                    validation['domain_name'] = 1;
                }else{
                    var chekdomain = checkdomain(domain_name, baseurl);
                    if(chekdomain == 1 || domain_name == 'hurree.co'){
                        $("#error_domain").text("This domain is already exist");
                        $("#domain_name").css("border-color", "#424141");
                        validation['domain_name'] = 0;
                    }else{
                        $("#error_domain").text("");
                        $("#domain_name").css("border-color", "#ccc");
                        validation['domain_name'] = 1;
                    }
                }
                
                
            }
        }
        
	if($.trim(group_name) == ''){
		 $("#error_group").text("Please add a Group name");
		 $("#group_name").css("border-color", "#424141");
	     validation['group_name'] = 0;
	}else{
		if($.trim(group_name) == groupName){
			$("#error_group").text("");
			$("#group_name").css("border-color", "#ccc");
                        validation['group_name'] = 1;
                     
                     var rtnfalse = [];
	       	    var i = 0;
	       	    for (var item in validation)
	       	    {
	       	      if (validation[item] == 0)
	       	      {"li"
	       	        $("#error" + item).css("display", 'block');
	       	        rtnfalse[i] = 1;

	       	      } else {
	       	        $("#error" + item).css("display", 'none');
	       	        rtnfalse[i] = 0;
	       	      }
	       	      i++;
	       	    }

	       	    var errorResult = jQuery.inArray(1, rtnfalse);
                    if (errorResult == -1)
	         {

	       	   //$(".loader").css({"display": "block"});
	           $.ajax({
	   		type: "POST",
	   	        url: baseurl + 'groupApp/updateGroup',
	   	        data: "group_id=" + groupId + "&group_name=" + group_name + "&domain_name=" + domain_name + "&existDomain=" + existDomain,
	   	        context: document.body,
	   	        success: function (data) {
                            
	             if (data != 0) {

	            	 $(".loader").css({"display": "none"});	            	 
	            	 parent.location.reload();
	                  
	               }
                       else{
                            $(".loader").css({"display": "none"});
                           $("#error_domain").text("Domain can not be added now. Try again later");
                             $("#domain_name").css("border-color", "#424141");
                    
                       } 
	             }
	           });
               }
                     
		}
		else{
        if(/^[a-zA-Z0-9- ]*$/.test(group_name) == false) {
            $("#error_group").text("Special characters are not allow");
            $("#group_name").css("border-color", "#424141");
            validation['group_name'] = 0;
        }else{
		$.ajax({
			type: "POST",
	        url: baseurl + 'groupApp/checkGroupName',
	        data: "group_name=" + group_name,
	        context: document.body,
	        success: function (data) {
                    //if(data == 1 && $.trim(group_name) != groupName){
				console.log(">>>>>>>>>>>>>>>>>>>>>>>>exit response>>>>>>>>>>" + data);
	        	if(data == 0){
//	        		$("#error_group").text("Group name already exist");
//	       		 	$("#group_name").css("border-color", "#424141");
//	       		 	validation['group_name'] = 0;
//	        	}else{
	        		$("#error_group").text("");
	       		 	$("#group_name").css("border-color", "#ccc");
	       		 	validation['group_name'] = 1;

	       		//Save Group Name start
	       		var rtnfalse = [];
	       	    var i = 0;
	       	    for (var item in validation)
	       	    {
	       	      if (validation[item] == 0)
	       	      {"li"
	       	        $("#error" + item).css("display", 'block');
	       	        rtnfalse[i] = 1;

	       	      } else {
	       	        $("#error" + item).css("display", 'none');
	       	        rtnfalse[i] = 0;
	       	      }
	       	      i++;
	       	    }

	       	    var errorResult = jQuery.inArray(1, rtnfalse);
                    
	       	 if (errorResult == -1)
	         {

	       	   $("#loading").css({"display": "block"});
	           $.ajax({
	   		type: "POST",
	   	        url: baseurl + 'groupApp/updateGroup',
	   	        data: "group_id=" + groupId + "&group_name=" + group_name + "&domain_name=" + domain_name + "&existDomain=" + existDomain,
	   	        context: document.body,
	   	        success: function (data) {
	             if (data) {

	            	 $("#loading").css({"display": "none"});
	            	 //window.location.href =  baseurl + "groupApp/appGroups/" + data;
	            	 parent.location.reload();
	                  //return true;
	               }
	             }
	           });
	         } else {
	            return false;
	         }

	        	}
	        	else
				{
                    $("#error_group").text("Please choose another name. Group name already exist");
                    $("#group_name").css("border-color", "#424141");
                    validation['group_name'] = 0;
                    return false;
				}
	        }
		});

		}
            }
	}

}

function DeleteGroup(id){
    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'groupApp/deleteGroup/',
        data:"groupId="+id,
        context: document.body,
        async: true,
        success: function(data) {

            if(data == 1){

                //parent.window.location.reload();
                window.location.href = baseurl + "appUser";

            }
        }
    });
}

function DeleteApp(id){
     var baseurl = $("#baseurl").val();
     $.ajax({
         type: "POST",
         url: baseurl + 'groupApp/deleteApp/',
         data:"app_group_apps_id="+id,
         context: document.body,
         async: true,
         success: function(data) {

             if(data == 1){

                 parent.window.location.reload();

             }
         }
     });
 }
 
 if(window.location.href.indexOf("groupApp/appGroups") > -1){
    document.getElementById("copyButton").addEventListener("click", function() {
       copyToClipboard(document.getElementById("copyTarget"));
   });
 }

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

if(window.location.href.indexOf("groupApp/appGroups") > -1){
    
document.getElementById('upload').onchange = uploadOnChange;
function uploadOnChange() {
    var filename = this.value;
    var lastIndex = filename.lastIndexOf("\\");
    if (lastIndex >= 0) {
        filename = filename.substring(lastIndex + 1);
    }
    document.getElementById('filename').value = filename;
}
}

$('.tabs a') .click(function(){
		$('#android-app-form').hide();
		$('#ios-app-form').hide();
		$('.apps-tab-pan').show();
	});

function getGroupKey(){

	var groupId = $("#groupId").val();
	var baseurl = $("#baseurl").val();
	$.ajax({
        type: "POST",
        url: baseurl + 'groupApp/getGroupKey/',
        data:"groupId="+groupId,
        context: document.body,
        async: true,
        success: function(data) {
            if(data != ''){
           	 $("#copyTarget").val(data);

            }
        }
    });
}

function verifyDomain(){
    
    var groupId = $("#groupId").val();
    var baseurl = $("#baseurl").val();
    $(".campaign-loader").css('display','block');
    $.ajax({
        type: "POST",
        url: baseurl + 'groupApp/verifyDomain/',
        data:"groupId="+groupId,
        context: document.body,
        async: true,
        success: function(data) {
            //console.log(data); return false;;
            if(data == 1){
                parent.window.location.reload();
            }else{
                $(".campaign-loader").css('display','none');
                $("#error_domain").css('display','block');
            }
        }
    });
    
}