///Custom Form Items
(function($){
var csReset = function(f){var sel=0;$('select', f).each(function(){$('a:eq('+ $(this).data("index") +')',$(".select"+ sel++ +" ul",f)).click();});$(':checkbox', f).each(function(){$(this).data('val') && $('a', $(this).parent()).addClass('csChecked') || $('a', $(this).parent()).removeClass('csChecked');});$(':radio', f).each(function(){$(this).data('val') && $('a', $(this).parent()).addClass('csCheckedR') || $('a', $(this).parent()).removeClass('csCheckedR');});};

$.fn.csCheckBox = function(){return this.each(function(){var checkbox = $(this);if(checkbox.data("val")!=null) return;	checkbox.addClass("csOpaque");checkbox.data('val', this.checked);var aElem = $('<span class="csCheckboxElem"></span>');	checkbox.wrap('<span class="csCheckbox"></span>').parent().prepend(aElem);this.checked && aElem.addClass('csChecked');checkbox.on("change",function(){this.checked && aElem.addClass('csChecked') || aElem.removeClass('csChecked');});});};

$.fn.csRadio = function(){return this.each(function(){var radio = $(this);if(radio.data("val")!=null) return;radio.addClass("csOpaque");radio.data('val', this.checked);var aElem = $('<span class="csRadioElem"></span>');radio.wrap('<span class="csRadio"></span>').parent().prepend(aElem);this.checked && aElem.addClass('csCheckedR');radio.on("change",function(){aElem.addClass('csCheckedR');$('input[name="'+radio.attr('name')+'"]',this.form).not(radio).each(function(){$(this).attr('type')=='radio' && $(this).prev().removeClass('csCheckedR');});});});};

$.fn.csUpdate = function(){$(this).each(function(){
		$(':checkbox',this).csCheckBox();
		$(':radio',this).csRadio();
		$('form',this).on('reset',function(){ csReset(elem)});
	});
};
})(jQuery);

function changeUsername(userid, username)
{
     var baseurl = $("#baseurl").val();
    $("#searchRecord").val("");
    $("#searchRecord").val("@" + username);
    username = username.replace("@", "");
    var profileUrl =  baseurl+"business/"+username;

    window.location.href =profileUrl;
    $("#searchUsernameList").css("display", "none");
    $("#searchUsernameList").html("");

}

function changeHashTag(hashTagId, hashTag)
{
    var baseurl = $("#baseurl").val();
    $("#searchRecord").val("");
    $("#searchRecord").val(hashTag);
    hashTag = hashTag.replace("#", "");
    window.location.href=baseurl+"home/searchHashTag/"+hashTag;
    $("#searchUsernameList").css("display", "none");
    $("#searchUsernameList").html("");
}


$(document).ready(function() {
      // start function for search - shiwangi

			 if($('#select_facebook_page')){
				 setTimeout(function(){
				  $('#select_facebook_page').trigger('click');
				 },1000);
			}
			
       $('#search').click(function() {

        if($("#search_error").text().length > 0 ) {
        return false;
       }
          //alert("");
           var baseurl = $("#baseurl").val();
           var searchContent =  $("#searchRecord").val();
           var urisegment =  $("#urisegment").val();
           var totalRecord = $("#totalRecord").val();


           if(searchContent == ''){
             return false;
            }
             else{

              if(urisegment === 'userprofile' || searchContent.indexOf('@') == 0){
               $("#search_error").text("");
                if(searchContent.indexOf('@') == 0){

                var searchContent = searchContent.replace("@", " ");

                 $("#searchRecord").val(searchContent); //alert(searchContent);

                 window.location.href = baseurl+"business/"+searchContent;

                }
                else{
                  $("#search_error").text("");
               var searchContent =  $("#searchRecord").val();
               window.location.href=baseurl+"business/"+searchContent;
             }
              }
              else if (urisegment === 'searchHashTag'){
                $("#search_error").text("");
               var searchContent =  $("#searchRecord").val();
               window.location.href=baseurl+"home/searchHashTag/"+searchContent;;
             }else{
              $("#search_error").text("");
               var searchContent =  $("#searchRecord").val();
               window.location.href=baseurl+"home/searchResult/"+searchContent;
               }
            }
       });

        // end function


	$('[data-toggle="tooltip"]').tooltip({html:true});
	//Custom for items
	$(".customItems").csUpdate();


	//Tabs function
	'use strict';
	$('.tab-pane:first').addClass('active');
	$('.tabs li:first-child').addClass('active');
	//function
	$('.tabs li').click(function(e){
		e.preventDefault();
		var showElem = $(this).find('a').attr('href');
		$('.tabs li').removeClass('active');
		$('.tab-pane').removeClass('active');
		$(this).addClass('active');
		$(showElem).addClass('active');
	});


	//Modal Popup
	//Open Login Popup
	$('body').on('click','.modalPopup', function(e, size, backDrop){
		e.preventDefault();
		$('.modal, .modal-backdrop').remove();
		var backDrop =  $(this).attr('data-backdrop');
		var escDrop =  $(this).attr('data-escdrop');
		if(backDrop == '' || backDrop == null || backDrop == undefined){backDrop = true;}
		else{backDrop = false;}
		if(escDrop == '' || escDrop == null || escDrop == undefined){escDrop = true;}
		else{escDrop = false;}
		var size = $(this).attr('data-size');
		if(size == '' || size == null){size = 'normal-small';}
		else{size = size;}

		var url = $(this).attr('href');
		var divClass = $(this).attr('data-class');
		var title =  $(this).attr('data-title');
		var dialogInstanceSignIn = BootstrapDialog.show({
                        closeByBackdrop: backDrop,
                        closeByKeyboard: escDrop,
			size: size,
			title: title,
			cssClass: divClass,
			message: function(dialog) {
				var $message = $('<div class=""></div>');
				var pageToLoad = dialog.getData('pageToLoad');
				$message.load(pageToLoad);
				return $message;
			},
			data: {
				'pageToLoad': url
			}
		});

		setTimeout(function(){
			$('.SlectBox').SumoSelect();
		}, 200);
	});

	//Show - Hide function
	$('body').on('click', '.beacons button', function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$(this).toggleClass('active');
		}
		else{
		$('.beacons button').removeClass('active');
			$(this).addClass('active');
		}
	});


	//Tabs
	$('ul.customTabs li').click(function(e){
		e.preventDefault();
		var showTab = $(this).find('a').attr('href');
		var parentWrap = $(this).parent('ul').attr('data-toggle');
		$(this).parent('ul').each(function() {
           $(this).children('li').removeClass('active');
        });
		$(this).addClass('active');
		$('#'+parentWrap+ ' > '+ '.tab-pane').removeClass('active');
		$('#'+ parentWrap + ' '+ showTab).addClass('active');
	});

	//Open Reply Slider
        $(document).on('click', '.openSlide', function(e){
		e.preventDefault();
                e.stopPropagation();
		var slideElem = $(this).attr('href');
		$(slideElem).stop().slideToggle('slow');
	});

	//Board Private/Public Function
	$(document).on('click', '.privacy-check a', function(){
		var checkClass = $(this).attr('class');
		if(checkClass === 'public'){
			$('#slideOne').attr('checked',false);
			$('.privacy-check').removeClass('active');
		}
		else{
			$('#slideOne').attr('checked',true);
			$('.privacy-check').addClass('active');
		}
         });

	 //Select No. of coins function
	 $('body').on('click', '.coin', function(){
		$('.coin').removeClass('active');
		$(this).addClass('active');
	 });

	 //Dateicker
	$('body').on('focus', ".datepicker", function () {
	  $(this).datepicker({
		  orientation: 'auto top',
		  startDate: 'd',
		  endDate: '+2m'
	  }).on('changeDate', function(e){
		$(this).datepicker('hide');
	});
  });

  //Open Slide Function
 $(document).on('click', '.openSlide', function(e){
	 e.preventDefault();
	var showElem = $(this).attr('href');
	$(showElem).toggleClass('active')
	$(this).toggleClass('active')
 });

 $('.timeline .hover').hover(function(e){
	 var target = $(e.target);
	 if(target.is('.pic')){
		$(this).find('.popover').css({left:5});
		$(this).delay(300).queue(function(next){$(this).addClass('active').dequeue();next();});
	 }
	else if(target.is('.txt')){
		$(this).find('.popover').css({left:70});
		$(this).delay(300).queue(function(next){$(this).addClass('active').dequeue();next();});
	 }
 }, function(){
	 $(this).delay(300).queue(function(next){$(this).removeClass('active').dequeue();next();});
 });

 $('.followProfiles .hover').hover(function(e){
	$(this).find('.popover').css({left:20});
	$(this).delay(300).queue(function(next){$(this).addClass('active').dequeue();next();});

 }, function(){
	 $(this).delay(300).queue(function(next){$(this).removeClass('active').dequeue();next();});
 });

 // added by shiwangi for status post
    $(".validation").click(function () {

            //debugger;
            var files = $('#timelineImageFile')[0].files.length;
            var status = $("#user_status").text();
            var trimstatus = $.trim(status);



            if (trimstatus == '' && files == 0)
            {
                document.getElementById("submit").style.display = "inline";
                $("#error_span").text("Please write something or attach a photo");
                $("#user_status").val("");
                $("#error_status").val("true");

                return false;
            }
            else {

            if(files != 0){

              file = $('#timelineImageFile')[0].files[0];
               var cc = file.type

               if(cc.indexOf('image') != -1 || cc.indexOf('video') != -1)
               {
                 $("#error_status").val("false");
                 $("#error_span").text("");
                 showimagepreview(this);

                }
              else {
                   $("#error_span").text("");
                   $("#error_span").text("Please select a valid image");
                   $("#error_status").val("true");
                   $("#imgprvw").css('display', 'none');
                   document.getElementById("submit").disabled = true;
                    return false;
              }

             }
             else if (status!=''){
                 $("#error_span").text("");
                  $("#error_status").val("false");
             }

            }
        });

      $("#timelineImageFile").change(function(e) {

        var image, file;

        if ((file = this.files[0])) {
        	var cc = file.type

        	if(cc.indexOf('image') != -1 || cc.indexOf('video') != -1)
        	{
        	  showimagepreview(this);

        	}
       	 else {
       		$("#error_span").text("Please select a valid image");
               $("#error_status").val("true");
               $("#imgprvw").css('display', 'none');
            document.getElementById("submit").disabled = true;
               return false;
       	}
        }
    });

     $("#MyUploadForm").on('submit', (function (e) {

           if($("#error_status").val() == "true"){
return false;
           }
            e.preventDefault();
            var user_status = $("#user_status").html();

            $("#user_status_input").val(user_status);
            var baseurl = $("#baseurl").val();


            $("#timelineloding").css("display", "block");
            document.getElementById("submit").disabled = true;
            var totalrecord =  $("#totalrecord").val();

             $("#totalrecord").val(parseInt(totalrecord)+1);
             var statuscount =  $("#statuscount").val();
             $("#statuscount").val(parseInt(statuscount)+1);

            $.ajax({
                url: baseurl+"index.php/home/stauspostpopup",
                type: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                async: true,
                success: function (data) {


                    document.getElementById("submit").disabled = false;
                    $("#enteredHashTagNew").val("");
                    //$("#enteredUsernameNew").val($("#loginUserNameTxt").val());
                    $("#user_status").html("");
                    $("#user_status_input").val("");
                    $('#MyUploadForm')[0].reset();
                    $("#crosstimeline").css('display', 'none');
                     $('#timelineFilename').text("");
                    $("#FirstStatus").html("");
                    $("#imgprvw").css("display", "none");
                    $("#imgprvw").attr("src", "");
                    $("#timelineloding").css("display", "none");
                    $("#timelineUL").prepend(data); return false;
                },
            });
        }));

});



$(window).load(function(){
	$('.loader').hide();
	$('.page').show();
});

$(document).ready(function() {
	  var clientHeight = $(window).innerHeight();
		$('.equalCol').animate({'height':clientHeight-50});

		$(window).resize(function(){
			var clientHeight2 = $(window).innerHeight();
			$('.equalCol').animate({'height':clientHeight2-50},10);
		});

	//Start Rating Init
	//$('.rating').rating();

	//Custom drop sown init
	$('.SlectBox').SumoSelect();

	//Lightbox Gallery
	//$(".galImages a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});
  //  $(".galImages a[rel^='prettyPhoto[movies]']").prettyPhoto({social_tools:false});

});

/*$(document).on('focus', ".autoComplete", function() {
   	 var outerWrap = $(this).next('.autoCompleteWrap');
       $(this).autocomplete({
   		appendTo: outerWrap,
   		minLength: 0,
   		source: projects,
   		focus: function(event, ui) {
   			$(this).text(ui.item.value);
   			return false;
   		},
   		select: function(event, ui) {
   			$(this).text(ui.item.value);
   			return false;
   		}
   		})
   		.autocomplete("instance")._renderItem = function( ul, item ) {
   			 return $("<li>")
   			.append("<img src='assets/img/user.jpg' />" + item.value)
   			.appendTo(ul);
   		};
    });*/
   // alert("jhdgjhd");
$(document).on('click', ".coin", function() {
  var selectedCoins = this.id;
  $("#selectedCoins").val(selectedCoins);
});





  function showimagepreview(input)
    {

        var file, img;
        if (input.files && input.files[0])
        {
             var cc = input.files[0].type;
            var filerdr = new FileReader();
            filerdr.onload = function (e)
            {
                img = new Image();
                img.onload = function () {



                    if (this.width < "100" && this.height < "100")
                    {

                        $("#error_span").text("Please Select a Image more than size of 1366*254 ");
                        $("#headerImageValid").val("1");
                    } else {
                        $("#errorheader").text("");
                        $("#headerImageValid").val("0");
                    }
                };
                     if(cc.indexOf('image')!= -1){

            	$('#timelineFilename').text("");
                $('#imgprvw').attr('src', e.target.result);
                $("#imgprvw").css('display', 'block');
                $("#crosstimeline").css('display', 'block');
                $("#imgprvw").css('margin-top', '0%');  //$("#imgprvw").css('margin-left', '10%');

            	}
            	if(cc.indexOf('video') != -1){

            		$("#imgprvw" ).css('display', 'none');
            		$('#timelineFilename').text(input.files[0].name);
            	}



                $("#inner").css("height", "107px");
                $("#fileselect").css("display", "block");
                $(".validation").css("display", "block");

                $("#error_span").text("");
            }
            filerdr.readAsDataURL(input.files[0]);
        }
    }


   // delete uploaded image
   $("#crosstimeline").click(function(e){
       e.preventDefault();
       $('#imgprvw').attr('src', '');
       $("#crosstimeline").css('display', 'none');
       $("#imgprvw").css('display', 'none');
       document.getElementById("timelineImageFile").value = "";


   });
    // function for send coins


    function sendCoins() {

        var no_of_coins = $("#no_of_coins").val();
        var username = $("#coins_username").val();

        var baseurl = $("#baseurl").val();
        var validation = [];

        if ($.trim(username) == '') {
            $("#error_coins_username").text('Please enter @User');

            validation['username'] = 0;
        } else {
            if (username.indexOf('@') == -1) {
                $("#error_coins_username").text('Please enter valid @User');
                validation['username'] = 0;
            } else {
                var user = username.replace('@', '');
                //alert(user);
                $.ajax({
                    url: baseurl + 'index.php/home/checkChallenger',
                    type: "POST",
                    data: "username=" + user,
                    context: document.body,
                    async: false,
                    success: function(data) {
                        //alert(data);
                        if (data == '0') {
                            $("#error_coins_username").text("User Doesn't exist :(");
                            validation['username'] = 0;
                        }

                        else {
                            $("#error_coins_username").text('');
                            validation['username'] = 1;
                        }
                    }
                });
            }

        }
        if ($.trim(no_of_coins) == '') {
            $("#error_post_coins").text('Please enter coins');
            validation['coins'] = 0;
        } else {
            var user = username.replace('@', '');
            $.ajax({
                url: baseurl + 'index.php/home/sendCoins',
                type: "POST",
                data: {"no_of_coins": no_of_coins, "username": user},
                context: document.body,
                async: false,
                success: function(data) {

                    if (data == '2') {
                        $("#error_post_coins").text("You do not have enough coins");
                        validation['coins'] = 0;
                        return false;
                    }
                    else if (data == '3') {
                        $("#error_post_coins").text("Coins added should be more than zero");
                        validation['coins'] = 0;
                        return false;
                    }
                    else if (data == '4') {
                        $("#error_post_coins").text("You can not send coins to your own profile");
                        validation['coins'] = 0;
                        return false;
                    }
                    else {
                        $("#error_post_coins").text('Coins sent successfully');
                        validation['coins'] = 1;
                    }
                }
            });
            return  validation['coins'];
        }


    }

/*
(function(){
	var settings = {
			trigger:'hover',
			title:'',
			multi:false,
			closeable:true,
			style:'',
			delay:300,
			padding:true,
			backdrop:false
	};

	function initPopover(){$('.hover').webuiPopover('destroy').webuiPopover(settings);}
	initPopover();
})();
*/
    function getid(id){
        $("#coins_count").val(id);
    }


    function buyCoinsPayment(){
       var baseurl = $("#baseurl").val();
       var result =  $(".coin").hasClass('active');
       var coin_count = $('#coins_count').val();
       var auto_renewal_status = $('#auto_renewal_status').val();
       if($(".coin").hasClass('active')){
           $('.buycoinserror').html('');

            var renewalStatus = $('#slideOne').is(":checked");
            if(renewalStatus){
              renewalStatus = 1;
            }else{
              renewalStatus = 0;
            }
	    $('#coin_payment').attr('href',baseurl+'home/paymentCoins/'+coin_count+'/'+auto_renewal_status);
            $("#coin_payment").trigger('click');

         }else{
	    $('.buycoins-head').html('');
            $('.buycoinserror').html('Please select numbers of coins.');
         }
      }


      function solr_more_activities_click(){
        $('#seemoresolrLoading').css('display','block');
        var solrstatuscount = $("#solrstatuscount").val();
        var controllerName = $("#controllerName").val();
        var solrurl = $("#solrurl").val();
        var startFrom = parseInt(solrstatuscount);
        solrstatuscount = parseInt(solrstatuscount) + 6;
        $("#solrstatuscount").val(solrstatuscount);
        var searchConetnt = $("#searchConetnt").val();
        var baseurl = $("#baseurl").val();
        var posturl = baseurl+"home/solrpagination";
        var urisegment = controllerName;

                        $.ajax({
                          type: "POST",
                          url: posturl,
                          data:{"startFrom":startFrom,'content':searchConetnt,'urisegment':urisegment},
                          async: false,
                          success: function (data) {
                            $('#seemoresolrLoading').css('display','none');
                            if(data.indexOf("No Activities Found.") > -1){
                               $("#solrSeeMore").text("No More Activities Found.");
                            }else{

                             $(".statusclass:last").after(data);
                           }
                          }
                        });



      }

      // function for search hashtag and @username using solr
      function solr_search(event){
           var key = event.keyCode;
           if(key == 13 ){
              $("#search").trigger('click');
           }

            var baseurl = $("#baseurl").val();
            var solrurl = $("#solrurl").val();
            var searchedText = $('#searchRecord').val();

            $('#searchRecord').html('');
            $("#searchUsernameList").html("");

           var searchedText = searchedText.trim();

           var searchedText = searchedText.toLowerCase();

            var firstChar = searchedText.charAt(0);
            searchedText = searchedText.trim();
            var pagination = ' &start=0&rows=6';

                var newurl = baseurl+'home/populatesearch';

                $.ajax({
                    type: "POST",
                    url: newurl,
                    dataType: 'json',
                    data: {"text":searchedText },
                    async: false,
                    success: function (data) {

                      if(data == 2){
                        $("#search_error").text("");
                         return false;
                      }
                      else if(data == 1){
                         $("#search_error").text("Enter valid text");
                         //$('#searchRecord').val("");
                         //$('#searchRecord').focus();
                         return false;
                      }
                    $("#search_error").text("");
                    var responseData = JSON.stringify(data.response["docs"]);
                    var totalRecord = JSON.stringify(data.response["numFound"]);
                    var w3r_JSON = JSON.parse(responseData);

                    $("#totalRecord").val(totalRecord);
                    var changeFunctionName = '';
                    var firstChar = searchedText.charAt(0);
                     $('#searchRecord').html('');

                    if(searchedText.indexOf('@') == 0){
                        $.each(w3r_JSON, function (idx, obj)
                        {

                            var name = obj.firstname+' '+obj.lastname;
                            $("#searchUsernameList").css("display", "block");
                            changeFunctionName = "changeUsername("+obj.user_Id+",'"+ obj.username + "');";
                            $('#searchUsernameList').append('<li style="" onclick="' + changeFunctionName + '" id="' + obj.user_Id + '" class="ui-menu-item userdropdownli" role="presentation"><a align="left" style="" id="" class="ui-corner-all" tabindex="-1" href="javascript:void(0); " style="margin-top: 0px;" ><img  src="' + obj.image + '" /><span>' + name + '</span><span style="color: #8F9C9C; " class="challUsername" >'+ ' '+'@'+ obj.username + '</span></a></li>');
                        });
                    }
                    else if (firstChar == '#'){

                     $.each(w3r_JSON, function (idx, obj)
                        {
                            $("#searchUsernameList").css("display", "block");
                            changeFunctionName = "changeHashTag("+obj.hashtag_id+",'"+ obj.hashTag + "');";
                            $('#searchUsernameList').append('<li style="" onclick="' + changeFunctionName + '" id="' + obj.hashtag_id + '" class="ui-menu-item userdropdownli" role="presentation"><a align="left" style="" id="" class="ui-corner-all" tabindex="-1" href="javascript:void(0); " style="margin-top: 0px;" ><span style="color: #8F9C9C; " class="challUsername" >' + obj.hashTag + '</span></a></li>');
                        });
                    }

                    }
                });
        }
        function fbPageValidation(){
		var fbpage = $("#fbpage").val();
		var fbpageUrl = '';
		var baseurl = $("#baseurl").val();
    		var validation = [];
		if (fbpage == '')
		{
			$("#errorfbpage").text("Please Select Facebook Page");
			validation['fbpage'] = 0;
		} else {
			$("#errorfbpage").text("");
			validation['fbpage'] = 1;
		}

		if($('#fbpageUrl').length > 0){
			var fbpageUrl = $("#fbpageUrl").val();
			if (fbpageUrl == '')
			{
				$("#errorfbpage").text("Enter Facebook business Page Url");
				validation['fbpage'] = 0;
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
			$("#loader").css({"display": "block",
			    "z-index": "10000",
			    "background": "rgba(255,255,255,.9) url('assets/template/frontend/img/AjaxLoader.gif') 50% 50% no-repeat",
			    "width": "100%",
			    "height": "100%",
			    "position": "fixed",
			    "text-align": "center",
			    "top": "0",
			    "bottom": "0"});

			$.ajax({
			    type: "POST",
			    url: baseurl + 'social/userPostFbPage',
			    data: {"fbpage": fbpage, "fbpageUrl": fbpageUrl},
			    context: document.body,
			    success: function (data) {
				if (data == 'success') {
                    		     window.location.href =  baseurl + "timeline";
				     parent.location.reload();
				     $("#loader").css({"display": "none"});
				   return true;
				} else {
				    $("#errorfbpage").text(data);
			    	    $("#errorfbpage").css("display", 'block');
				    $("#loader").css({"display": "none"});
				   return false;
				}
			    }
			});
		    } else {
			return false;
		    }
	}
