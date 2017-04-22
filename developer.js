var cnt =1;

function addmoreGroup(){

	cnt++;
	var baseurl = $("#baseurl").val();
    //var counter = $("#count").val();
	$.ajax({
        type: "POST",
        url: baseurl + 'appUser/addmoreGroup',
        data: "counter=" + cnt,
        context: document.body,
        async: true,
        success: function(data) {

        	$('.SlectBox').SumoSelect();
        	$("#count").val(cnt);
            $("#addmoreGroup").append(data);


        },
    });
}

function removeBrandGroup(cnt){
	//alert(counter);
	
	var count =  cnt-1;
	$("#groupBox"+cnt).remove();
	$("#count").val(count);
	cnt--;
	
}


var locations = [];
function addappUser(){
	
	var n = $( ".location-box" ).length;
	var baseurl = $("#baseurl").val();
	var firstname = $("#firstname").val();
	var lastname = $("#lastname").val();
	var email = $("#email").val();
	var group = $("#select0").val();
	var usertype = $("input[name='usertype']:checked").val();
	var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var validation = [];

	if (firstname == '')
    {
        $("#error_firstname").text("Please enter your first name");
        $("#firstname").css('border-color', '#424141');
        validation['firstname'] = 0;
    } else {
        var firstnameErr = checkOnlyAlphabetSpace(firstname);
        if (firstnameErr == "0") {
            $("#error_firstname").text("First name contains only alphabets");
            $("#firstname").css('border-color', '#424141');
            validation['firstname'] = 0;
        } else {
            $("#error_firstname").text("");
            $("#firstname").css('border-color', '#ccc');
            validation['firstname'] = 1;
        }
    }

    if (lastname == '')
    {
        $("#error_lastname").text("Please enter your last name");
        $("#lastname").css('border-color', '#424141');
        $("#password").val("");
        validation['lastname'] = 0;
    } else {
        var lastnameErr = checkOnlyAlphabetSpace(lastname);
        if (lastnameErr == "0") {
            $("#error_lastname").text("Last name contains only alphabets");
            $("#lastname").css('border-color', '#424141');
            $("#password").val("");
            validation['lastname'] = 0;
        } else {
            $("#error_lastname").text("");
            $("#lastname").css('border-color', '#ccc');
            validation['lastname'] = 1;
        }

    }

    if (email == '')
    {
        $("#error_email").text("Please enter your email");
        $("#email").css('border-color', '#424141');
        validation['email'] = 0;
    } else {
        var isvalid = emailRegexStr.test(email);
        if (!isvalid) {
            $("#error_email").text("Please enter a valid email");
            $("#email").css('border-color', '#424141');
            $("#email").val("");
            validation['email'] = 0;
        } else {
            var emails = uniqueemail(email, baseurl);
            if(emails[1] == 0){
            	$("#email").css('border-color', '#424141');
            }else{
            	$("#email").css('border-color', '#ccc');
            }
            $("#error_email").text(emails[0]);
            validation['email'] = emails[1];

        }

    }
    if(usertype == '8'){
    	var arr1 = new Object();
    	arr1.firstname = firstname;
    	arr1.lastname = lastname;
    	arr1.email = email;
    	arr1.usertype = usertype;
    }

    if(usertype == '9'){

    if(group == ''){
    	$("#error_group").text("Please select group");
        validation['group'] = 0;
    }else{
    	groups = [];
    	groups.push(group);

    	$("#error_group").text("");
        validation['group'] = 1;

        if ($('.permission').is(":checked"))
        {
        	$("#error_permission").text("");
        	validation['permission'] = 1;
        }else{
        	$("#error_permission").text("Please select role");
        	validation['permission'] = 0;
        }
    }
    if(n > 1){   //cnt > 1

    	for(i=2;i<=n ;i++){
    		if($("#select"+i).val() == ''){
    			$("#error_group"+i).text("Please select Group");
    	        validation['group'+i] = 0;
    		}else{
    			groups.push($("#select"+i).val());
    			$("#error_group"+i).text("");
    	        validation['group'+i] = 1;

    	        if ($('.permission'+i).is(":checked"))
    	        {
    	        	$("#error_permission"+i).text("");
    	        	validation['permission'+i] = 1;
    	        }else{
    	        	$("#error_permission"+i).text("Please select role");
    	        	validation['permission'+i] = 0;
    	        }
    		}


    		if(hasDuplicates(groups) == true && groups != '' && $("#select"+i).val() != ''){
    			//alert("Already selected this location");
        		//if($("#select"+i).val() == location && location != ''){
        			$("#error_samelocation"+i).text("Already selected this Group");
    	        	validation['samelocation'+i] = 0;
        		}else{
        			$("#error_samelocation"+i).text("");
    	        	validation['samelocation'+i] = 1;
        		}
    	}

    }

	default_arry= new Object();
	var customKey = 'group';
	group_array = [];
	 default_arry['0'] = group;

	 var as1 = 1;
	$('input.permission:checkbox:checked').each(function () {
		default_arry[''+as1] = $(this).val();
	    as1++;
	});


	var arr = new Object();
	arr.group = new Object();
	arr.group[0]= default_arry;
	if(n > 1){
		//var arr = [];

		for(i=2;i<=n;i++){
			var currentArr = new Object;
			//currentArr.push({'here':$("#select"+i).val()});
			currentArr['0'] = $("#select"+i).val();
		var as = 1;
	    $('.permissions'+i+' input[type="checkbox"]:checked').each(function(){
	    	currentArr[''+as] = $(this).val();
	    	as++;
	    	//currentArr.push({'here':$(this).val()});

	    });
	    //
	    arr.group[i] = currentArr;


//    var newarray = [];
//    newarray[0]= default_arry;
//    newarray[1]= arr;

	}

}
    }
	var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error_" + item).css("display", 'block');
            rtnfalse[i] = 1;
        } else {
           // $("#error_" + item).html('');
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    //alert(errorResult); return false;

	if (errorResult == -1){
	if(usertype == '9'){
		arr.firstname = firstname;
		arr.lastname = lastname;
		arr.email = email;
		arr.usertype = usertype;
	}else{
		arr = arr1
	}

	$("#loading").css('display','block');
	$.ajax({
        type: "POST",
        url: baseurl + 'appUser/saveUser',
        data: arr,
        context: document.body,
        async: true,
        success: function(data) {
        	console.log(data);

            if(data == 1){
            //$("#loading").css('display','none');
            $('.modal').modal('hide');
        		parent.window.location.reload();
        	} else {
            	$("#loading").css('display','none');
            }
        },
    });
	}else{
		return false;
	}
}



function editAppUser(){


	var baseurl = $("#baseurl").val();
	var firstname = $("#firstname").val();
	var lastname = $("#lastname").val();
	var email = $("#email").val();
	var group = $("#select0").val();
	var usertype = $("input[name='usertype']:checked").val();
	var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var user_email = $("#user_email").val();
	var count = $("#count").val();
	var userid = $("#userid").val();
	var validation = [];
	groups = [];

	if (firstname == '')
    {
        $("#error_firstname").text("Please enter your first name");
        $("#firstname").css('border-color', '#424141');
        validation['firstname'] = 0;
    } else {
        var firstnameErr = checkOnlyAlphabetSpace(firstname);
        if (firstnameErr == "0") {
            $("#error_firstname").text("First name contains only alphabets");
            $("#firstname").css('border-color', '#424141');
            validation['firstname'] = 0;
        } else {
            $("#error_firstname").text("");
            $("#firstname").css('border-color', '#ccc');
            validation['firstname'] = 1;
        }
    }

	if (lastname == '')
    {
        $("#error_lastname").text("Please enter your last name");
        $("#lastname").css('border-color', '#424141');
        $("#password").val("");
        validation['lastname'] = 0;
    } else {
        var lastnameErr = checkOnlyAlphabetSpace(lastname);
        if (lastnameErr == "0") {
            $("#error_lastname").text("Last name contains only alphabets");
            $("#lastname").css('border-color', '#424141');
            $("#password").val("");
            validation['lastname'] = 0;
        } else {
            $("#error_lastname").text("");
            $("#lastname").css('border-color', '#ccc');
            validation['lastname'] = 1;
        }

    }

    if (email == '')
    {
        $("#error_email").text("Please enter your email");
        $("#email").css('border-color', '#424141');
        validation['email'] = 0;
    } else {
    	if(user_email == email){
    		$("#error_email").text("");
            validation['email'] = 1;
    	}else{
        var isvalid = emailRegexStr.test(email);
        if (!isvalid) {
            $("#error_email").text("Please enter a valid email");
            $("#email").css('border-color', '#424141');
            $("#email").val("");
            validation['email'] = 0;
        } else {
            var emails = uniqueemail(email, baseurl);
            if(emails[1] == 0){
            	$("#email").css('border-color', '#424141');
            }else{
            	$("#email").css('border-color', '#ccc');
            }
            $("#error_email").text(emails[0]);
            validation['email'] = emails[1];

        }
    	}

    }
    var arr = new Object();

    if(usertype == '9'){


        if(count > 0){

        	for(i=0;i<count;i++){
        		if($("#select"+i).val() == ''){
        			$("#error_group"+i).text("Please select group");
        	        validation['group'+i] = 0;
        		}else{
        			groups.push($("#select"+i).val());
        			$("#error_group"+i).text("");
        	        validation['group'+i] = 1;

        	        if ($('.permissionInput'+i).is(":checked"))
        	        {
        	        	$("#error_permission"+i).text("");
        	        	validation['permission'+i] = 1;
        	        }else{
        	        	$("#error_permission"+i).text("Please select role");
        	        	validation['permission'+i] = 0;
        	        }
        		}

        		if(hasDuplicates(groups) == true &&  $("#select"+i).val() != ''){
            			$("#error_samegroup"+i).text("Already selected this group");
        	        	validation['samegroup'+i] = 0;
            		}else{
            			$("#error_samegroup"+i).text("");
        	        	validation['samegroup'+i] = 1;
            		}
        	}

        }





	arr.group = new Object();

	if(count > 0){

		for(i=0;i<=count;i++){
			var currentArr = new Object;
			currentArr['0'] = $("#select"+i).val();
		var as = 1;
	    $('.permissions'+i+' input[type="checkbox"]:checked').each(function(){
	    	currentArr[''+as] = $(this).val();
	    	as++;

	    });

	    arr.group[i] = currentArr;

		}

	}
    }
    arr.firstname = firstname;
	arr.lastname = lastname;
	arr.email = email;
	arr.usertype = usertype;
	arr.userid = userid;

	var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error_" + item).css("display", 'block');
            rtnfalse[i] = 1;
        } else {
           // $("#error_" + item).html('');
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if(errorResult == -1){
    $("#loading").css('display','block');
    $.ajax({
        type: "POST",
        url: baseurl + 'appUser/editUser',
        data: arr,
        context: document.body,
        async: true,
        success: function(data) {
        	//alert(data);
        	console.log(data);

        	//return false;
            //if(data == 1){
            //$("#loading").css('display','none');
        	//$("#success").text("User is added successfully");
        	//$('.modal, .modal-backdrop').hide('slow').remove();
            $('.modal').modal('hide');
            parent.window.location.reload();
        	/*setTimeout(function () {
            $('.modal, .modal-backdrop').hide('slow').remove();
        	}, 1500);*/
            //}
        },
    });
    }else{
    	return false;
    }
}

function editAddmoreGroups(){

	editcounter = $("#count").val();

	var baseurl = $("#baseurl").val();
    //var counter = $("#count").val();
	$.ajax({
        type: "POST",
        url: baseurl + 'appUser/editAddmoregroup',
        data: "counter=" + editcounter,
        context: document.body,
        async: true,
        success: function(data) {

        	editcounter++;
        	$('.SlectBox').SumoSelect();
        	$("#count").val(editcounter);
            $("#addmoregroups").append(data);


        },
    });
}

function DeleteUser(id){
    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'businessUser/deleteUser/',
        data:"userid="+id,
        context: document.body,
        async: true,
        success: function(data) {

            if(data == 1){

                parent.window.location.reload();

            }
        }
    });
}