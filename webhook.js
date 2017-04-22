$(document).ready(function () {
  $("a").tooltip({
    'selector': '',
    'placement': 'top',
    'container':'body',
    'trigger' : 'hover'
  });
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

function selectWebhookGroup(id){
    var baseurl = $("#baseurl").val();
    var groupId = id;
    $.ajax({
        type: "POST",
        url: baseurl + 'groupApp/setGroup',
        data: "groupId=" + groupId,
        context: document.body,
        success: function(data) {
            if(data == 1){
            window.parent.location.href =  baseurl+"appUser/webhook";

            }

        }
    });
}

$(".newtabber > li a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$("#webhook_url").keyup(function(){
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    var url = $( this ).val();
    
    $("#webhook_url_preview").text(url);
    if($.trim(url) == ''){
        $("#error_testUrl").text("Please enter webhook URL");
        $("#testUrl").text('http://yoururl.com');
    }else{
       if(urlregex.test(url) == false){
            $("#error_testUrl").text("Please enter valid URL");        
        }else{
            $("#error_testUrl").text("");
            $("#testUrl").text(url);
        } 
    }
    
    
    
});

$('#request_method_keys').on('change', function() {
  
  $('#http_request_preview').text( this.value );

});

$("#body_type_keys").on('change', function(){

    var body_type_key = this.value;

    if(body_type_key == 'json'){
        $("#json_keys_section").css('display','block');
        $("#plaintextBody").css('display','none');
        $("#json_preview").css('display','block');
        $("#body_preview").css('display','none');
    }else{
        $("#json_keys_section").css('display','none');
        $("#plaintextBody").css('display','block');
        $("#json_preview").css('display','none');
        $("#body_preview").css('display','block');
    }

});

//var key_value_pairs = 0;


var campaignId = $("#campaignId").val();
if(campaignId != ''){
   var keysCount = $(":input[class='jsonkey']").length;
   var key_value_pairs = $(":input[class='jsonkey']").length;
   var keycomma = key_value_pairs;
}else{
   var keysCount = 0; 
   var key_value_pairs = 0;
   var keycomma=1;
}

$("#json_key_value_button").click(function(){
    $("#json_keys_content").css('display','none');
    //console.log(key_value_pairs);
    /*if(key_value_pairs == 0){
       $("#json_key_value_button").removeAttr("disabled"); 
    }*/
    key_value_pairs = key_value_pairs+1;

    $("#keyValuePairsContent").css('display','block');
    var keys = '<div class="keyValuePairs" id="keys_pair'+ key_value_pairs +'"><i class="fa fa-key"></i>'+
                '<input type="text" class="jsonkey" id="jsonKey'+key_value_pairs+'" onkeydown="writeJsonKeys('+key_value_pairs+')" onkeyup="writeJsonKeys('+key_value_pairs+')">'+
                '<i class="fa fa-arrow-circle-right"></i>'+
                '<input type="text" class="jsonValue" id="jsonValue'+key_value_pairs+'" onkeyup=writeJsonValues('+key_value_pairs+') >'+
                '<i class="fa fa-trash-o" onclick="removeKeyPair('+key_value_pairs+')"></i>'+
                '</div><div class="keyValuePairs" style="margin-bottom:10px;"></div>';
            $("#keyValuePairsContent").append(keys);
            
                $( "#jsonKey"+key_value_pairs ).focus();
//            $('#jsonKey'+key_value_pairs).keyup(function(e) {
//                writeJsonKeys('+key_value_pairs+');
//            });

            $('.jsonkey').each(function() {
                if(!$(this).val()){
                $("#json_key_value_button").attr('disabled', 'disabled');
                //$("#error_jsonkeys").text('Please complete first Key/Value Pairs')
                return false;
                }else{
                   $("#json_key_value_button").removeAttr("disabled");
                   //$("#error_jsonkeys").text('');
                }
            });


    /*var jSonPairs = '<span id="jSonPairs'+key_value_pairs+'"></span>';
    $("#jSonKeys").append(jSonPairs);*/

});

function removeKeyPair(keyPair){
    //key_value_pairs = key_value_pairs-1;
    //console.log('Remove>>'+key_value_pairs);
    //console.log($('.jsonkey').length);

    keycomma = keycomma-1;
    //keysCount = keysCount - 1;
    if(key_value_pairs == 0){
        $("#json_keys_content").css('display','block');
        //$("#json_key_value_button").removeAttr("disabled"); 
    }
    
    if($(".jsonkey").length == 1){
        $('#jSonKeys span').each(function() {
                var text = $('.jSonPairs').text();
                $('.jSonPairs').text(text.replace(',', '')); 
            });
    }
    
    $('span[id=jSonPairs'+keyPair+']').remove();
    $('#keys_pair'+keyPair).remove();
    //$('div[id=keys_pair'+keyPair+']').remove();
    //$('#jSonPairs'+keyPair).remove();
    if(keyPair==key_value_pairs){
       var previousPair = keyPair-1; 
    }
    else{
      var previousPair = key_value_pairs-1;  
    }
    
    var text = $('#jSonPairs'+previousPair).text().replace(',', '');
    $('#jSonPairs'+previousPair).text(text);
//    if($(".jsonkey").length == 1){
//         var text = $('#jSonKeys span').text();
//        $('#jSonKeys span').text(text.replace(',', ''));
//    }
    var jSonInput = $('.jsonkey').length;
    
//    if($(".jSonPairs").length == 1){
//        $(this).text(text.replace(',', ''));
////        $('#jSonKeys span').each(function() {
////            var text = $(this).text();
////            $(this).text(text.replace(',', '')); 
////        });
//    }
    
    if(jSonInput > 1){
        $('.jsonkey').each(function() {
                if(!$(this).val()){
                $("#json_key_value_button").attr('disabled', 'disabled');
                return false;
                }else{
                   $("#json_key_value_button").removeAttr("disabled"); 
                }
        });
    }else{
        $("#json_key_value_button").removeAttr("disabled"); 
    }
    
    if($(".jsonkey").length == 0){
                $("#closeBracket1").css({"display": "block", "position": "relative", "top": "-20px", "left":"9px"});
                $("#closeBracket2").css('display','none');
            }
    
}

/*var campaignId = $("#campaignId").val();
if(campaignId != ''){
   var keysCount = $(":input[class='jsonkey']").length;
}else{
   var keysCount = 0; 
}*/


function writeJsonKeys(id){

    var key = $('#jsonKey'+id).val();
    //var key = document.getElementById("jsonKey").value;
    var keyValue = $('#jsonValue'+id).val();
    $("#closeBracket1").css('display','none');
    $("#closeBracket2").css('display','block');
    $('.jsonkey').each(function() {
                if(!$(this).val()){
                $("#json_key_value_button").attr('disabled', 'disabled');
                return false;
                }else{
                   $("#json_key_value_button").removeAttr("disabled"); 
                }
            });
    if(key.length == 1){
        keysCount = keysCount + 1;
        var jSonPairs = '<span class="jSonPairs" id="jSonPairs'+id+'"></span>';
        $("#jSonKeys").append(jSonPairs);
        $('span[id=jSonPairs'+id+']').eq(1).remove();
    }
    //$('.jSonPairs').eq(1).remove();
    
    //console.log(keysCount);

    if(key.length == 0){
        keysCount = keysCount - 1;
    }

        if(keyValue == ''){
            keyValue = '';
        }else{
            keyValue = keyValue;
        }
        
//        var jsonKeys = [];
//        $(".jsonkey").each(function() {
//                jsonKeys.push($(this).val());
//            });
//            
//        var jsonValue = [];
//                $(".jsonValue").each(function() {
//                    jsonValue.push($(this).val());
//                });
//        for(i==0;i<=jsonKeys.length;i++){     
//        $('#jSonKeys').append('<span class="jSonPairs" id="jSonPairs'++'">"sddsdd" : "dddddddddd",</span>')
//        }       
        
        if(id > 1){

            $('#jSonPairs'+id).text('"'+key+'" : '+'"'+keyValue+'"'+',');
            $('#jSonKeys span').each(function() {
                var text = $(this).text();
                $(this).text(text.replace(',,', ',')); 
            });
            
        }else{
           $('#jSonPairs'+id).text('"'+key+'" : '+'"'+keyValue+'"'+','); 
           $('#jSonKeys span').each(function() {
                var text = $(this).text();
                $(this).text(text.replace(',,', ',')); 
            });
        }
        

        //console.log(keycomma); return false;
        
        if(key_value_pairs > 1){
            //var keyId = id- 1;
            
            if($('.jsonkey').length == 2){
               var text = $('.jSonPairs').attr('id');
               var keyId = text.replace('jSonPairs','');
            }
            if($('.jsonkey').length > 2){
                var keyId = id- 1;
            }
            
            var addedKeys = $('#jSonPairs'+keyId).text();
            //console.log(key.length);
            if(key_value_pairs>keycomma)
            {
                if(key.length == 1){
                    addedKeys = addedKeys+',';
                    keycomma++;
                }
                

            }
            
        
            $('#jSonPairs'+keyId).text(addedKeys);
        }

        if(key == ''){
            
            keycomma = keycomma-1;
            $('#jSonPairs'+id).text('');
            $('#jSonPairs'+id).remove();
            $("#json_key_value_button").attr('disabled', 'disabled');
            
            if($(".jsonkey").length == 1){
                $("#closeBracket1").css({"display": "block", "position": "relative", "top": "-20px", "left":"9px"});
                $("#closeBracket2").css('display','none');
            }

            id = id-1;
            var text = $('#jSonPairs'+id).text().replace(',', '');
            $('#jSonPairs'+id).text(text);
        }   
}

function writeJsonValues(id){
        var key = $('#jsonKey'+id).val();
        var keyValue = $('#jsonValue'+id).val();
        /*var jSonPairs = '<span id="jSonPairs'+id+'"></span>';
        $("#jSonKeys").append(jSonPairs);*/

        if(keyValue == ''){
            keyValue = '';
        }else{
            keyValue = keyValue;
        }

        $('#jSonPairs'+id).text('"'+key+'" : '+'"'+keyValue+'"');
}

var request_headers_value_pairs = 0;

if(campaignId != ''){
   var request_headers_value_pairs = $(":input[class='requestHeadersKey']").length;
   var requestkeysCount = $(":input[class='requestHeadersKey']").length;
   
}else{
   var request_headers_value_pairs = 0;
   var requestkeysCount = 0; 
}

$("#request_headers_key_value_button").click(function(){

    $("#request_headers_content").css('display','none');
    request_headers_value_pairs = request_headers_value_pairs + 1;
    $("#request_headers_section").css('display','block');
    
    var request_header_keys = '<div class="keyValuePairs" id="requestkeys_pair'+ request_headers_value_pairs +'"><i class="fa fa-key"></i>'+
                '<input type="text" class="requestHeadersKey" id="requestHeadersKey'+request_headers_value_pairs+'" placeholder="" onkeydown="writeHeadersKeys('+request_headers_value_pairs+')" onpaste="writeHeadersKeys('+request_headers_value_pairs+')">'+
                '<i class="fa fa-arrow-circle-right"></i>'+
                '<input type="text" class="requestHeadersValue" id="requestHeadersValue'+request_headers_value_pairs+'" onkeyup="writeHeadersValues('+request_headers_value_pairs+')">'+
                '<i class="fa fa-trash-o" onclick="removeRequestHeadersKeyPair('+request_headers_value_pairs+')"></i>'+
                '</div>';
    $("#request_headers_section").append(request_header_keys);
    $( "#requestHeadersKey"+request_headers_value_pairs ).focus();

    $('.requestHeadersKey').each(function() {
                if(!$(this).val()){
                $("#request_headers_key_value_button").attr('disabled', 'disabled');
                //$("#error_jsonkeys").text('Please complete first Key/Value Pairs')
                return false;
                }else{
                   $("#request_headers_key_value_button").removeAttr("disabled");
                   //$("#error_jsonkeys").text('');
                }
            });

    
});

function removeRequestHeadersKeyPair(requestHeadersKeyPair){
    //request_headers_value_pairs = request_headers_value_pairs - 1;
    if(request_headers_value_pairs == 0){
        $("#request_headers_content").css('display','block');
    }
    $('#requestkeys_pair'+requestHeadersKeyPair).remove();
    $('#requestPairs'+requestHeadersKeyPair).remove();
    //requestkeysCount = requestkeysCount - 1;
    var requestHeadersInput = $('.requestHeadersKey').length;
    if(requestHeadersInput > 1){
        $('.requestHeadersKey').each(function() {
                if(!$(this).val()){
                $("#request_headers_key_value_button").attr('disabled', 'disabled');
                //$("#error_jsonkeys").text('Please complete first Key/Value Pairs')
                return false;
                }else{
                   $("#request_headers_key_value_button").removeAttr("disabled");
                   //$("#error_jsonkeys").text('');
                }
            });
    }else{
        $("#request_headers_key_value_button").removeAttr("disabled");
    }

    

}


function writeHeadersKeys(id){
        var key = $('#requestHeadersKey'+id).val();
        var keyValue = $('#requestHeadersValue'+id).val();

        $('.requestHeadersKey').each(function() {
                if(!$(this).val()){
                $("#request_headers_key_value_button").attr('disabled', 'disabled');
                //$("#error_jsonkeys").text('Please complete first Key/Value Pairs')
                return false;
                }else{
                   $("#request_headers_key_value_button").removeAttr("disabled");
                   //$("#error_jsonkeys").text('');
                }
            });

        if(key.length == 1){
            requestkeysCount = requestkeysCount + 1;
            var requestHeadersPairs = '<span id="requestPairs'+id+'"></span>';
            $("#request_headers_pairs_preview").append(requestHeadersPairs);
        }

        if(key.length == 0){
            requestkeysCount = requestkeysCount - 1;
        }
        
        /*if(keyValue == ''){
            keyValue = 'undefined';
        }else{
            keyValue = keyValue;
        }*/
        $('#requestPairs'+id).text(key+' : '+keyValue);
        if(key == ''){
            $('#requestPairs'+id).text('');
            $('#requestPairs'+id).remove();
        }    
}

function writeHeadersValues(id){
        var key = $('#requestHeadersKey'+id).val();
        var keyValue = $('#requestHeadersValue'+id).val();
        /*if(keyValue == ''){
            keyValue = 'undefined';
        }else{
            keyValue = keyValue;
        }*/
        $('#requestPairs'+id).text(key+' : '+keyValue);
        if(key == ''){
            $('#requestPairs'+id).text('');
        }  
}

$("#plaintext").on('keyup', function(){

        var plaintext = $("#plaintext").val();
        var plaintext = plaintext.replace(/\n\r?/g, '<br />');
        $("#body_preview").html(plaintext);

});

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

jsonObj = [];
androidCampaign = {};

function validateCompose(){

var baseurl = $("#baseurl").val();
var selectedPlatform = $("#selectedPlatform").val();
var groupId = $("#groupId").val();
var campaignName = $("#campaignName").val();
var campaignId = $("#campaignId").val();
var message_category = $("#message_category").val();
var campaignPersonaUser = $("#campaignPersonaUser").val();
var campaignList = $("#campaignLists").val();
var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
var webhook_url = $("#webhook_url").val();
var body_type_keys = $("#body_type_keys").val();
var http_request = $("#request_method_keys").val();
var validation = [];
var jsonKeys = [];
var requestKeys = [];

    var automation = 0;

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

    if($.trim(webhook_url) == ''){
        $("#error_webhook_url").text("Please enter Webhook URL");
        $("#webhook_url").css('border-color', '#424141');
        validation['webhook_url'] = 0;
    }else{
        if(urlregex.test(webhook_url) == false){
            $("#error_webhook_url").text("Please enter valid URL");
            $("#webhook_url").css('border-color', '#424141');
            validation['webhook_url'] = 0;
        }else{
            $("#error_webhook_url").text("");
            $("#webhook_url").css('border-color', '#ccc');
            validation['webhook_url'] = 1;
            }
    }

    if(body_type_keys == 'json'){
        
        var i = 1;
        var jsonkeyValuePairs = '';
        var plaintext = '';
        //console.log('keyscount'+keysCount);
        
        var jSonInput = $('.jsonkey').length;
        //console.log('length'+jSonInput);
        
        
        
        if(jSonInput > 0){
//            for(i==inputIndex;i<=jSonInput;i++){
//
//                if($("#jsonKey"+i).val() != '' || $("#jsonKey"+i).val() != undefined){
//                    jsonKeys.push($("#jsonKey"+i).val());
//                }     
//
//            }
            $(".jsonkey").each(function() {
                jsonKeys.push($(this).val());
            });
            //console.log(jsonKeys); return false;
            var removeItem = undefined;
            jsonKeys = jQuery.grep(jsonKeys, function(value) {
                return value != removeItem;
            });
            //console.log(jsonKeys);
            if(hasDuplicates(jsonKeys) == true){
                $("#error_jsonkeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
                validation['jsonkeys'] = 0;
            }else{
                var i = 0;
                var jsonkeyValuePairs = {};
                
                var jsonValue = [];
                $(".jsonValue").each(function() {
                    jsonValue.push($(this).val());
                });
                //console.log('Length:'+jsonKeys.length);
                //console.log(jsonKeys);
                //console.log(jsonValue); return false;
                for(i==0;i<=jsonKeys.length;i++){
                    
                    if(jsonKeys[i] != ''){
                        jsonkeyValuePairs['"'+jsonKeys[i]+'"'] = jsonValue[i];
                    }
                    Object.keys(jsonkeyValuePairs).forEach(function (key) {
                    if(typeof jsonkeyValuePairs[key] === 'undefined'){
                       delete jsonkeyValuePairs[key];
                      }
                    });
                    

//                    if($("#jsonKey"+inputIndex).val() != ''){
//                        var jsonk = $("#jsonKey"+inputIndex).val();
//                        var jsonV = $("#jsonValue"+inputIndex).val();
//                    }
//                    
//                    jsonkeyValuePairs['"'+jsonk+'"'] = jsonV;
//
//                    Object.keys(jsonkeyValuePairs).forEach(function (key) {
//                     if(typeof jsonkeyValuePairs[key] === 'undefined'){
//                        delete jsonkeyValuePairs[key];
//                      }
//                    });

                }
                    $("#error_jsonkeys").text('');
                    validation['jsonkeys'] = 1;
                    
                    //console.log(jsonkeyValuePairs);
            }

        }else{
            var jsonkeyValuePairs = '';
        }
        

    }else{

        var jsonkeyValuePairs = '';
        var plaintext = $("#plaintext").val();
    }
    
    var requestHeadersKeyInput = $('.requestHeadersKey').length;
    if(requestHeadersKeyInput > 0){

        //requestKeys
        var i = 1;
//        for(i==1;i<=requestkeysCount;i++){
//
//            if($("#requestHeadersKey"+i).val() != '' || $("#requestHeadersKey"+i).val() != 'undefined'){
//                requestKeys.push($("#requestHeadersKey"+i).val());
//            }     
//
//        }
        $(".requestHeadersKey").each(function() {
                requestKeys.push($(this).val());
            });
        
        var removeItem = undefined;
        //requestKeys.splice( $.inArray(removeItem,requestKeys) ,1 );
            requestKeys = jQuery.grep(requestKeys, function(value) {
                return value != removeItem;
            });

        if(hasDuplicates(requestKeys) == true){
            var requestHeadersPairs = '';
            $("#error_requesHeaderskeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
            validation['requestHeadersPairs'] = 0;

        }else{
            $("#error_requesHeaderskeys").text('');
            validation['requestHeadersPairs'] = 1;

            var i = 0;
            var requestHeadersPairs = {};
            
            var requestHeadersValue = [];
                $(".requestHeadersValue").each(function() {
                    requestHeadersValue.push($(this).val());
                });

            for(i==0;i<=requestKeys.length;i++){
                
                if(requestKeys[i] != ''){
                        requestHeadersPairs['"'+requestKeys[i]+'"'] = requestHeadersValue[i];
                    }
//                var jsonRequestHeadersKey = $("#requestHeadersKey"+i).val();
//                var jsonRequestHeadersValue = $("#requestHeadersValue"+i).val();
                        
                

                Object.keys(requestHeadersPairs).forEach(function (key) {
                     if(typeof requestHeadersPairs[key] === 'undefined'){
                        delete requestHeadersPairs[key];
                      }
                    });

            }
        }

        

    }else{
        var requestHeadersPairs = '';
    }
    //console.log(requestHeadersPairs); return false;

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
        androidCampaign["webhook_url"] = webhook_url;
        androidCampaign["request_body"] = body_type_keys;
        androidCampaign["http_request"] = http_request;
        androidCampaign["plaintext"] = plaintext;
        androidCampaign["jsonkeyValuePairs"] = jsonkeyValuePairs;
        androidCampaign["requestHeadersPairs"] = requestHeadersPairs;

        //console.log(androidCampaign);

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

        
        var webhookPreview = $('#webhookPreview').html();
        
        $("#webhookConfirmPreview").html(webhookPreview);
        
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

function launchCampaign(){
    var baseurl = $("#baseurl").val();

    jsonObj.push(androidCampaign);
    jsonString = JSON.stringify(jsonObj);
    
    //console.log(jsonObj); return false;
    $('.modal').modal('hide');
    $(".campaign-loader").css('display','block');
    $.ajax({

        type: "POST",
        url: baseurl + 'webhook/saveWebhook',
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            //console.log(data); return false;
            if(data != ''){

                $(".campaign-loader").css('display','none');
                window.parent.location.href =  baseurl+"appUser/webhook/";    
                
            }
        }
    });
   
}


jsonComposeObj = [];
composeDraft = {};

 function saveComposeAsDraft(){

var baseurl = $("#baseurl").val();
var selectedPlatform = $("#selectedPlatform").val();
var groupId = $("#groupId").val();
var campaignName = $("#campaignName").val();
var campaignId = $("#campaignId").val();
var message_category = $("#message_category").val();
var campaignPersonaUser = $("#campaignPersonaUser").val();
var campaignList = $("#campaignLists").val();
var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
var webhook_url = $("#webhook_url").val();
var body_type_keys = $("#body_type_keys").val();
var http_request = $("#request_method_keys").val();
var validation = [];
var jsonKeys = [];
var requestKeys = [];

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

    if($.trim(webhook_url) == ''){
        $("#error_webhook_url").text("Please enter Webhook URL");
        $("#webhook_url").css('border-color', '#424141');
        validation['webhook_url'] = 0;
    }else{
        if(urlregex.test(webhook_url) == false){
            $("#error_webhook_url").text("Please enter valid URL");
            $("#webhook_url").css('border-color', '#424141');
            validation['webhook_url'] = 0;
        }else{
            $("#error_webhook_url").text("");
            $("#webhook_url").css('border-color', '#ccc');
            validation['webhook_url'] = 1;
            }
    }

    if(body_type_keys == 'json'){
        
        var i = 1;
        var jsonkeyValuePairs = '';
        var plaintext = '';
        //console.log('keyscount'+keysCount);
        
        var jSonInput = $('.jsonkey').length;
        //console.log('length'+jSonInput);
        
        
        
        if(jSonInput > 0){
//            for(i==inputIndex;i<=jSonInput;i++){
//
//                if($("#jsonKey"+i).val() != '' || $("#jsonKey"+i).val() != undefined){
//                    jsonKeys.push($("#jsonKey"+i).val());
//                }     
//
//            }
            $(".jsonkey").each(function() {
                jsonKeys.push($(this).val());
            });
            //console.log(jsonKeys); return false;
            var removeItem = undefined;
            jsonKeys = jQuery.grep(jsonKeys, function(value) {
                return value != removeItem;
            });
            //console.log(jsonKeys);
            if(hasDuplicates(jsonKeys) == true){
                $("#error_jsonkeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
                validation['jsonkeys'] = 0;
            }else{
                var i = 0;
                var jsonkeyValuePairs = {};
                
                var jsonValue = [];
                $(".jsonValue").each(function() {
                    jsonValue.push($(this).val());
                });
                //console.log('Length:'+jsonKeys.length);
                //console.log(jsonKeys);
                //console.log(jsonValue); return false;
                for(i==0;i<=jsonKeys.length;i++){
                    
                    if(jsonKeys[i] != ''){
                        jsonkeyValuePairs['"'+jsonKeys[i]+'"'] = jsonValue[i];
                    }
                    Object.keys(jsonkeyValuePairs).forEach(function (key) {
                    if(typeof jsonkeyValuePairs[key] === 'undefined'){
                       delete jsonkeyValuePairs[key];
                      }
                    });
                    

//                    if($("#jsonKey"+inputIndex).val() != ''){
//                        var jsonk = $("#jsonKey"+inputIndex).val();
//                        var jsonV = $("#jsonValue"+inputIndex).val();
//                    }
//                    
//                    jsonkeyValuePairs['"'+jsonk+'"'] = jsonV;
//
//                    Object.keys(jsonkeyValuePairs).forEach(function (key) {
//                     if(typeof jsonkeyValuePairs[key] === 'undefined'){
//                        delete jsonkeyValuePairs[key];
//                      }
//                    });

                }
                    $("#error_jsonkeys").text('');
                    validation['jsonkeys'] = 1;
                    
                    //console.log(jsonkeyValuePairs);
            }

        }else{
            var jsonkeyValuePairs = '';
        }
        

    }else{

        var jsonkeyValuePairs = '';
        var plaintext = $("#plaintext").val();
    }
    
    var requestHeadersKeyInput = $('.requestHeadersKey').length;
    if(requestHeadersKeyInput > 0){

        //requestKeys
        var i = 1;
//        for(i==1;i<=requestkeysCount;i++){
//
//            if($("#requestHeadersKey"+i).val() != '' || $("#requestHeadersKey"+i).val() != 'undefined'){
//                requestKeys.push($("#requestHeadersKey"+i).val());
//            }     
//
//        }
        $(".requestHeadersKey").each(function() {
                requestKeys.push($(this).val());
            });
        
        var removeItem = undefined;
        //requestKeys.splice( $.inArray(removeItem,requestKeys) ,1 );
            requestKeys = jQuery.grep(requestKeys, function(value) {
                return value != removeItem;
            });

        if(hasDuplicates(requestKeys) == true){
            var requestHeadersPairs = '';
            $("#error_requesHeaderskeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
            validation['requestHeadersPairs'] = 0;

        }else{
            $("#error_requesHeaderskeys").text('');
            validation['requestHeadersPairs'] = 1;

            var i = 0;
            var requestHeadersPairs = {};
            
            var requestHeadersValue = [];
                $(".requestHeadersValue").each(function() {
                    requestHeadersValue.push($(this).val());
                });

            for(i==0;i<=requestKeys.length;i++){
                
                if(requestKeys[i] != ''){
                        requestHeadersPairs['"'+requestKeys[i]+'"'] = requestHeadersValue[i];
                    }
//                var jsonRequestHeadersKey = $("#requestHeadersKey"+i).val();
//                var jsonRequestHeadersValue = $("#requestHeadersValue"+i).val();
                        
                

                Object.keys(requestHeadersPairs).forEach(function (key) {
                     if(typeof requestHeadersPairs[key] === 'undefined'){
                        delete requestHeadersPairs[key];
                      }
                    });

            }
        }

        

    }else{
        var requestHeadersPairs = '';
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
        composeDraft["campaignPersonaUser"] = campaignPersonaUser;
        composeDraft["message_category"] = message_category;
        composeDraft['automation'] = automation;
        composeDraft["campaignList"] = campaignList;
        composeDraft["webhook_url"] = webhook_url;
        composeDraft["request_body"] = body_type_keys;
        composeDraft["http_request"] = http_request;
        composeDraft["plaintext"] = plaintext;
        composeDraft["jsonkeyValuePairs"] = jsonkeyValuePairs;
        composeDraft["requestHeadersPairs"] = requestHeadersPairs;

        jsonComposeObj.push(composeDraft);
        jsonString = JSON.stringify(jsonComposeObj);

        //console.log(jsonString); return false;

    $(".campaign-loader").css('display','block');
    $.ajax({

        type: "POST",
         url: baseurl + 'webhook/saveComposeAsDraft',
         data: jsonString,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function(data){
            if(data == 1){
            $(".campaign-loader").css('display','none');
            window.parent.location.href =  baseurl+"appUser/webhook/";

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
    deliveryDraft["groupId"] = androidCampaign["groupId"];
    deliveryDraft["campaignName"] = androidCampaign["campaignName"];
    deliveryDraft["campaignId"] = androidCampaign["campaignId"];
    deliveryDraft["message_category"] = androidCampaign["message_category"];
    deliveryDraft["automation"] = androidCampaign['automation'];
    deliveryDraft["campaignPersonaUser"] = androidCampaign["campaignPersonaUser"];
    deliveryDraft["campaignList"] = androidCampaign["campaignList"];
    deliveryDraft["webhook_url"] = androidCampaign["webhook_url"];
    deliveryDraft["request_body"] = androidCampaign["request_body"];
    deliveryDraft["http_request"] = androidCampaign["http_request"];
    deliveryDraft["plaintext"] = androidCampaign["plaintext"];
    deliveryDraft["jsonkeyValuePairs"] = androidCampaign["jsonkeyValuePairs"];
    deliveryDraft["requestHeadersPairs"] = androidCampaign["requestHeadersPairs"];

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
             url: baseurl + 'webhook/saveDeliveryAsDraft',
             data: jsonString,
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             success: function(data){
                if(data == 1){
                $(".campaign-loader").css('display','none');
                window.parent.location.href =  baseurl+"appUser/webhook/";

                }
             }

        });
    }

jsonTargetObj = [];
targetDraft = {};
function saveTargetAsDraft(){

    var baseurl = $("#baseurl").val();

    targetDraft["selectedPlatform"] = androidCampaign["selectedPlatform"];
    targetDraft["groupId"] = androidCampaign["groupId"];
    targetDraft["campaignName"] = androidCampaign["campaignName"];
    targetDraft["campaignId"] = androidCampaign["campaignId"];
    targetDraft["message_category"] = androidCampaign["message_category"];
    targetDraft["automation"] = androidCampaign['automation'];
    targetDraft["campaignPersonaUser"] = androidCampaign["campaignPersonaUser"];
    targetDraft["campaignList"] = androidCampaign["campaignList"];
    targetDraft["webhook_url"] = androidCampaign["webhook_url"];
    targetDraft["request_body"] = androidCampaign["request_body"];
    targetDraft["http_request"] = androidCampaign["http_request"];
    targetDraft["plaintext"] = androidCampaign["plaintext"];
    targetDraft["jsonkeyValuePairs"] = androidCampaign["jsonkeyValuePairs"];
    targetDraft["requestHeadersPairs"] = androidCampaign["requestHeadersPairs"];

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
                     url: baseurl + 'webhook/saveTargetAsDraft',
                     data: jsonString,
                     contentType: "application/json; charset=utf-8",
                     dataType: "json",
                     success: function(data){
                        if(data == 1){
                        $(".campaign-loader").css('display','none');
                        window.parent.location.href =  baseurl+"appUser/webhook/";

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
        url: baseurl + 'webhook/saveWebhookAsDraft',
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            if(data == 1){
            $(".campaign-loader").css('display','none');
            window.parent.location.href =  baseurl+"appUser/webhook/";
            }
        }
    });

}

function webhooks_more_activities_click(){

    var baseurl = $("#baseurl").val();
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
            url: baseurl + 'webhook/webhookListPagination',
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

function DeleteWebhook(id){
     var baseurl = $("#baseurl").val();
     //alert(baseurl); return false;
     $.ajax({
         type: "POST",
         url: baseurl + 'webhook/deleteWebhook/',
         data:"webhookId="+id,
         context: document.body,
         async: true,
         success: function(data) {
             //console.log(data); return false;
             if(data == 1){

                window.parent.location.href =  baseurl+"appUser/webhook";

             }
         }
     });
 }
 
jsonAutomationObj = [];
automationCampaign = {};

 $('input[name="automation"]').click(function(){
    if($('input[name="automation"]:checked').val() == 1){
        var baseurl = $("#baseurl").val();
var selectedPlatform = $("#selectedPlatform").val();
var groupId = $("#groupId").val();
var campaignName = $("#campaignName").val();
var campaignId = $("#campaignId").val();
var message_category = $("#message_category").val();
var campaignPersonaUser = $("#campaignPersonaUser").val();
var campaignList = $("#campaignLists").val();
var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
var webhook_url = $("#webhook_url").val();
var body_type_keys = $("#body_type_keys").val();
var http_request = $("#request_method_keys").val();
var validation = [];
var jsonKeys = [];
var requestKeys = [];

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

    if($.trim(webhook_url) == ''){
        $("#error_webhook_url").text("Please enter Webhook URL");
        $("#webhook_url").css('border-color', '#424141');
        validation['webhook_url'] = 0;
    }else{
        if(urlregex.test(webhook_url) == false){
            $("#error_webhook_url").text("Please enter valid URL");
            $("#webhook_url").css('border-color', '#424141');
            validation['webhook_url'] = 0;
        }else{
            $("#error_webhook_url").text("");
            $("#webhook_url").css('border-color', '#ccc');
            validation['webhook_url'] = 1;
            }
    }

    if(body_type_keys == 'json'){
        
        var i = 1;
        var jsonkeyValuePairs = '';
        var plaintext = '';
        //console.log('keyscount'+keysCount);
        
        var jSonInput = $('.jsonkey').length;
        //console.log('length'+jSonInput);
        
        
        
        if(jSonInput > 0){
//            for(i==inputIndex;i<=jSonInput;i++){
//
//                if($("#jsonKey"+i).val() != '' || $("#jsonKey"+i).val() != undefined){
//                    jsonKeys.push($("#jsonKey"+i).val());
//                }     
//
//            }
            $(".jsonkey").each(function() {
                jsonKeys.push($(this).val());
            });
            //console.log(jsonKeys); return false;
            var removeItem = undefined;
            jsonKeys = jQuery.grep(jsonKeys, function(value) {
                return value != removeItem;
            });
            //console.log(jsonKeys);
            if(hasDuplicates(jsonKeys) == true){
                $("#error_jsonkeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
                validation['jsonkeys'] = 0;
            }else{
                var i = 0;
                var jsonkeyValuePairs = {};
                
                var jsonValue = [];
                $(".jsonValue").each(function() {
                    jsonValue.push($(this).val());
                });
                //console.log('Length:'+jsonKeys.length);
                //console.log(jsonKeys);
                //console.log(jsonValue); return false;
                for(i==0;i<=jsonKeys.length;i++){
                    
                    if(jsonKeys[i] != ''){
                        jsonkeyValuePairs['"'+jsonKeys[i]+'"'] = jsonValue[i];
                    }
                    Object.keys(jsonkeyValuePairs).forEach(function (key) {
                    if(typeof jsonkeyValuePairs[key] === 'undefined'){
                       delete jsonkeyValuePairs[key];
                      }
                    });
                    

//                    if($("#jsonKey"+inputIndex).val() != ''){
//                        var jsonk = $("#jsonKey"+inputIndex).val();
//                        var jsonV = $("#jsonValue"+inputIndex).val();
//                    }
//                    
//                    jsonkeyValuePairs['"'+jsonk+'"'] = jsonV;
//
//                    Object.keys(jsonkeyValuePairs).forEach(function (key) {
//                     if(typeof jsonkeyValuePairs[key] === 'undefined'){
//                        delete jsonkeyValuePairs[key];
//                      }
//                    });

                }
                    $("#error_jsonkeys").text('');
                    validation['jsonkeys'] = 1;
                    
                    //console.log(jsonkeyValuePairs);
            }

        }else{
            var jsonkeyValuePairs = '';
        }
        

    }else{

        var jsonkeyValuePairs = '';
        var plaintext = $("#plaintext").val();
    }
    
    var requestHeadersKeyInput = $('.requestHeadersKey').length;
    if(requestHeadersKeyInput > 0){

        //requestKeys
        var i = 1;
//        for(i==1;i<=requestkeysCount;i++){
//
//            if($("#requestHeadersKey"+i).val() != '' || $("#requestHeadersKey"+i).val() != 'undefined'){
//                requestKeys.push($("#requestHeadersKey"+i).val());
//            }     
//
//        }
        $(".requestHeadersKey").each(function() {
                requestKeys.push($(this).val());
            });
        
        var removeItem = undefined;
        //requestKeys.splice( $.inArray(removeItem,requestKeys) ,1 );
            requestKeys = jQuery.grep(requestKeys, function(value) {
                return value != removeItem;
            });

        if(hasDuplicates(requestKeys) == true){
            var requestHeadersPairs = '';
            $("#error_requesHeaderskeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
            validation['requestHeadersPairs'] = 0;

        }else{
            $("#error_requesHeaderskeys").text('');
            validation['requestHeadersPairs'] = 1;

            var i = 0;
            var requestHeadersPairs = {};
            
            var requestHeadersValue = [];
                $(".requestHeadersValue").each(function() {
                    requestHeadersValue.push($(this).val());
                });

            for(i==0;i<=requestKeys.length;i++){
                
                if(requestKeys[i] != ''){
                        requestHeadersPairs['"'+requestKeys[i]+'"'] = requestHeadersValue[i];
                    }
//                var jsonRequestHeadersKey = $("#requestHeadersKey"+i).val();
//                var jsonRequestHeadersValue = $("#requestHeadersValue"+i).val();
                        
                

                Object.keys(requestHeadersPairs).forEach(function (key) {
                     if(typeof requestHeadersPairs[key] === 'undefined'){
                        delete requestHeadersPairs[key];
                      }
                    });

            }
        }

        

    }else{
        var requestHeadersPairs = '';
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

            automationCampaign["selectedPlatform"] = selectedPlatform;
            automationCampaign["groupId"] = groupId;
            automationCampaign["campaignName"] = campaignName;
            automationCampaign["campaignId"] = campaignId;
            automationCampaign["campaignPersonaUser"] = campaignPersonaUser;
            automationCampaign["message_category"] = message_category;
            automationCampaign['automation'] = 1;
            automationCampaign["campaignList"] = campaignList;
            automationCampaign["webhook_url"] = webhook_url;
            automationCampaign["request_body"] = body_type_keys;
            automationCampaign["http_request"] = http_request;
            automationCampaign["plaintext"] = plaintext;
            automationCampaign["jsonkeyValuePairs"] = jsonkeyValuePairs;
            automationCampaign["requestHeadersPairs"] = requestHeadersPairs;

            jsonAutomationObj.push(automationCampaign);
            jsonString = JSON.stringify(jsonAutomationObj);

            //console.log(jsonString); return false;

        $(".campaign-loader").css('display','block');
        $.ajax({

            type: "POST",
             url: baseurl + 'webhook/saveAutomation',
             data: jsonString,
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             success: function(data){
                if(data == 1){
                $(".campaign-loader").css('display','none');
                $("#confirmAutomation").trigger('click');
                //window.parent.location.href =  baseurl+"appUser/webhook/";

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
var campaignId = $("#campaignId").val();
var message_category = $("#message_category").val();
var campaignPersonaUser = $("#campaignPersonaUser").val();
var campaignList = $("#campaignLists").val();
var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
var webhook_url = $("#webhook_url").val();
var body_type_keys = $("#body_type_keys").val();
var http_request = $("#request_method_keys").val();
var validation = [];
var jsonKeys = [];
var requestKeys = [];

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

    if($.trim(webhook_url) == ''){
        $("#error_webhook_url").text("Please enter Webhook URL");
        $("#webhook_url").css('border-color', '#424141');
        validation['webhook_url'] = 0;
    }else{
        if(urlregex.test(webhook_url) == false){
            $("#error_webhook_url").text("Please enter valid URL");
            $("#webhook_url").css('border-color', '#424141');
            validation['webhook_url'] = 0;
        }else{
            $("#error_webhook_url").text("");
            $("#webhook_url").css('border-color', '#ccc');
            validation['webhook_url'] = 1;
            }
    }

    if(body_type_keys == 'json'){
        
        var i = 1;
        var jsonkeyValuePairs = '';
        var plaintext = '';
        //console.log('keyscount'+keysCount);
        
        var jSonInput = $('.jsonkey').length;
        //console.log('length'+jSonInput);
        
        
        
        if(jSonInput > 0){
//            for(i==inputIndex;i<=jSonInput;i++){
//
//                if($("#jsonKey"+i).val() != '' || $("#jsonKey"+i).val() != undefined){
//                    jsonKeys.push($("#jsonKey"+i).val());
//                }     
//
//            }
            $(".jsonkey").each(function() {
                jsonKeys.push($(this).val());
            });
            //console.log(jsonKeys); return false;
            var removeItem = undefined;
            jsonKeys = jQuery.grep(jsonKeys, function(value) {
                return value != removeItem;
            });
            //console.log(jsonKeys);
            if(hasDuplicates(jsonKeys) == true){
                $("#error_jsonkeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
                validation['jsonkeys'] = 0;
            }else{
                var i = 0;
                var jsonkeyValuePairs = {};
                
                var jsonValue = [];
                $(".jsonValue").each(function() {
                    jsonValue.push($(this).val());
                });
                //console.log('Length:'+jsonKeys.length);
                //console.log(jsonKeys);
                //console.log(jsonValue); return false;
                for(i==0;i<=jsonKeys.length;i++){
                    
                    if(jsonKeys[i] != ''){
                        jsonkeyValuePairs['"'+jsonKeys[i]+'"'] = jsonValue[i];
                    }
                    Object.keys(jsonkeyValuePairs).forEach(function (key) {
                    if(typeof jsonkeyValuePairs[key] === 'undefined'){
                       delete jsonkeyValuePairs[key];
                      }
                    });
                    

                }
                    $("#error_jsonkeys").text('');
                    validation['jsonkeys'] = 1;
                    
                    //console.log(jsonkeyValuePairs);
            }

        }else{
            var jsonkeyValuePairs = '';
        }
        

    }else{

        var jsonkeyValuePairs = '';
        var plaintext = $("#plaintext").val();
    }
    
    var requestHeadersKeyInput = $('.requestHeadersKey').length;
    if(requestHeadersKeyInput > 0){

        //requestKeys
        var i = 1;
//        for(i==1;i<=requestkeysCount;i++){
//
//            if($("#requestHeadersKey"+i).val() != '' || $("#requestHeadersKey"+i).val() != 'undefined'){
//                requestKeys.push($("#requestHeadersKey"+i).val());
//            }     
//
//        }
        $(".requestHeadersKey").each(function() {
                requestKeys.push($(this).val());
            });
        
        var removeItem = undefined;
        //requestKeys.splice( $.inArray(removeItem,requestKeys) ,1 );
            requestKeys = jQuery.grep(requestKeys, function(value) {
                return value != removeItem;
            });

        if(hasDuplicates(requestKeys) == true){
            var requestHeadersPairs = '';
            $("#error_requesHeaderskeys").text('You have included duplicate keys in your list of Key / Value Pairs. Keys must be unique.');
            validation['requestHeadersPairs'] = 0;

        }else{
            $("#error_requesHeaderskeys").text('');
            validation['requestHeadersPairs'] = 1;

            var i = 0;
            var requestHeadersPairs = {};
            
            var requestHeadersValue = [];
                $(".requestHeadersValue").each(function() {
                    requestHeadersValue.push($(this).val());
                });

            for(i==0;i<=requestKeys.length;i++){
                
                if(requestKeys[i] != ''){
                        requestHeadersPairs['"'+requestKeys[i]+'"'] = requestHeadersValue[i];
                    }
//                var jsonRequestHeadersKey = $("#requestHeadersKey"+i).val();
//                var jsonRequestHeadersValue = $("#requestHeadersValue"+i).val();
                        
                

                Object.keys(requestHeadersPairs).forEach(function (key) {
                     if(typeof requestHeadersPairs[key] === 'undefined'){
                        delete requestHeadersPairs[key];
                      }
                    });

            }
        }

        

    }else{
        var requestHeadersPairs = '';
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

            automationCampaign["selectedPlatform"] = selectedPlatform;
            automationCampaign["groupId"] = groupId;
            automationCampaign["campaignName"] = campaignName;
            automationCampaign["campaignId"] = campaignId;
            automationCampaign["campaignPersonaUser"] = campaignPersonaUser;
            automationCampaign["message_category"] = message_category;
            automationCampaign['automation'] = 1;
            automationCampaign["campaignList"] = campaignList;
            automationCampaign["webhook_url"] = webhook_url;
            automationCampaign["request_body"] = body_type_keys;
            automationCampaign["http_request"] = http_request;
            automationCampaign["plaintext"] = plaintext;
            automationCampaign["jsonkeyValuePairs"] = jsonkeyValuePairs;
            automationCampaign["requestHeadersPairs"] = requestHeadersPairs;

            jsonAutomationObj.push(automationCampaign);
            jsonString = JSON.stringify(jsonAutomationObj);

            //console.log(jsonString); return false;

        $(".campaign-loader").css('display','block');
        $.ajax({

            type: "POST",
             url: baseurl + 'webhook/saveAutomation',
             data: jsonString,
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             success: function(data){
                if(data == 1){
                $(".campaign-loader").css('display','none');
                $("#confirmAutomation").trigger('click');
                //window.parent.location.href =  baseurl+"appUser/webhook/";

                }
             }

        });


        }else{
                
                return false;
        }
}