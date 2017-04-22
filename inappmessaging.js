
var element = $(".customfontawesome");// global variable //fontawesomeIcon
var getCanvas;
var chooseMessageType = ''; // global variable
html2canvas(element, {
     onrendered: function (canvas) {
          $(".iconpreviewImage1").append(canvas);
    }
});

function hexToRgb(h)
{
    var r = parseInt((cutHex(h)).substring(0,2),16), g = ((cutHex(h)).substring(2,4),16), b = parseInt((cutHex(h)).substring(4,6),16)
    return 'rgba('+r+', '+b+', '+b+', 1)';
}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

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

$('.MsgTypeRadioOuter li input:radio').click(function() {
	  if ($(this).val() === 'FullScreen') {
        chooseMessageType = 'FullScreen';
	     $('.DeviceOrent').show();
	     $('.layout').show();
	  	  $('.ModelScreen').hide(); $('.SlidupScreen').hide(); $('.CustomHtmlScreen').hide();
	  	  $('.fullScreen ').show();
	      }
	  	 if ($(this).val() === 'modal') {
          chooseMessageType = 'modal';
	       $('.DeviceOrent').hide();
	       $('.layout').show();
	      $('.fullScreen').hide(); $('.SlidupScreen').hide(); $('.CustomHtmlScreen').hide();
	   	  $('.ModelScreen ').show();
	      }
	  	if ($(this).val() === 'slideup') {
         chooseMessageType = 'slideup';
	     $('.layout').hide();
	      $('.ModelScreen').hide(); $('.fullScreen').hide(); $('.CustomHtmlScreen').hide();
	  	  $('.SlidupScreen ').show();
	      }
	  	if ($(this).val() === 'customhtml') {
         chooseMessageType = 'customhtml';
	      $('.layout').hide();
	      $('.ModelScreen').hide(); $('.SlidupScreen').hide(); $('.fullScreen').hide();
	  	  $('.CustomHtmlScreen ').show();
	      }
	    });

function selectInAppGroup(id){

	var baseurl = $("#baseurl").val();
	var groupId = id;
	$.ajax({
        type: "POST",
        url: baseurl + 'groupApp/setGroup',
        data: "groupId=" + groupId,
        context: document.body,
        success: function(data) {
        	if(data == 1){
        	window.parent.location.href =  baseurl+"appUser/inAppMessaging";

        	}

        }
    });
}

$( ".fullScreen_headerColorChanger" ).change(function() {
	$(".fullScreen_headerColor").val( $( this ).val() );
	$(".heading_text").css('color',$( this ).val());
	$( ".fullScreen_headerColorChanger" ).val( $( this ).val() );
});

$(".header_text_opacity").change(function(){
	var count = $(".header_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".heading_text").css('opacity',changer);
	$(".header_text_opacity").val( $( this ).val() );
});

$(".header_text_opacity").click(function(){
	var count = $(".header_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".heading_text").css('opacity',changer);
	$(".header_text_opacity").val( $( this ).val() );
});

$(".header_text_opacity").keyup(function(){
	var count = $(".header_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".heading_text").css('opacity',changer);
	$(".header_text_opacity").val( $( this ).val() );
});

$( ".fullScreen_textColorChanger" ).change(function() {
	$(".fullScreen_textColor").val( $( this ).val() );
	$(".body_text").css('color',$( this ).val());
	$( ".fullScreen_textColorChanger" ).val( $( this ).val() );
});

$(".body_text_opacity").click(function(){

	var count = $(".body_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".body_text").css('opacity',changer);
	$(".body_text_opacity").val( $( this ).val() );
});

$(".body_text_opacity").change(function(){

	var count = $(".body_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".body_text").css('opacity',changer);
	$(".body_text_opacity").val( $( this ).val() );
});

$(".body_text_opacity").keyup(function(){

	var count = $(".body_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".body_text").css('opacity',changer);
	$(".body_text_opacity").val( $( this ).val() );
});

$(".background_colorChanger").change(function(){
	$(".background_color").val( $( this ).val() );
	$(".PreviewBox").css('background',$( this ).val());
	//$("#portraitTablet").css('background',$( this ).val());
	$(".PreviewBoxLandscapes").css('background',$( this ).val());
	//$("#PreviewBoxLandscapes").css('background',$( this ).val());
	$(".background_colorChanger").val( $( this ).val() );
	$(".PreviewBox_model .model").css('background',$( this ).val());
	$(".SlidupScreenMsgBox").css('background',$( this ).val());
});

$(".background_opacity").click(function(){
	var count = $("#background_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox").css('opacity',changer);
	//$("#portraitTablet").css('opacity',changer);
	$(".PreviewBoxLandscapes").css('opacity',changer);
	//$("#landscapeTablet").css('opacity',changer);
	$(".PreviewBox_model .model").css('opacity',changer);
	$(".SlidupScreenMsgBox").css('opacity',changer);
	$(".background_opacity").val( $( this ).val() );

});

$(".background_opacity").change(function(){
	var count = $("#background_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox").css('opacity',changer);
	//$("#portraitTablet").css('opacity',changer);
	$(".PreviewBoxLandscapes").css('opacity',changer);
	//$("#landscapeTablet").css('opacity',changer);
	$(".PreviewBox_model .model").css('opacity',changer);
	$(".SlidupScreenMsgBox").css('opacity',changer);
	$(".background_opacity").val( $( this ).val() );

});

$(".background_opacity").keyup(function(){
	var count = $("#background_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox").css('opacity',changer);
	//$("#portraitTablet").css('opacity',changer);
	$(".PreviewBoxLandscapes").css('opacity',changer);
	//$("#landscapeTablet").css('opacity',changer);
	$(".PreviewBox_model .model").css('opacity',changer);
	$(".SlidupScreenMsgBox").css('opacity',changer);
	$(".background_opacity").val( $( this ).val() );

});



$(".fullScreen_closeButtonColorChanger").change(function() {
	$(".fullScreen_closeButtonColor").val( $( this ).val() );
	$(".fullScreenClose").css('background',$( this ).val());
	$(".fullScreen_closeButtonColorChanger").val( $( this ).val() );
});

$(".close_button_opacity").change(function() {

	var count = $(".close_button_opacity").val();
	var changer = parseInt(count)/100;
	$(".fullScreenClose").css('opacity',changer);
	$(".close_button_opacity").val( $( this ).val() );

});

$(".close_button_opacity").click(function() {

	var count = $(".close_button_opacity").val();
	var changer = parseInt(count)/100;
	$(".fullScreenClose").css('opacity',changer);
	$(".close_button_opacity").val( $( this ).val() );

});

$(".close_button_opacity").keyup(function() {

	var count = $(".close_button_opacity").val();
	var changer = parseInt(count)/100;
	$(".fullScreenClose").css('opacity',changer);
	$(".close_button_opacity").val( $( this ).val() );

});

$(".frame_colorChanger").change(function() {
	$(".frame_color").val( $( this ).val() );
	$("#portraitTablet").css('background',$( this ).val());
	$("#landscapeTablet").css('background',$( this ).val());
	$(".PreviewBox_model").css('background',$( this ).val());
	$(".frame_colorChanger").val( $( this ).val() );
});

$(".frame_color_opacity").change(function() {

	var count = $(".frame_color_opacity").val();
	var changer = parseInt(count)/100;
	$("#portraitTablet").css('opacity',changer);
	$("#landscapeTablet").css('opacity',changer);
	$(".PreviewBox_model").css('opacity',changer);
});

$(".frame_color_opacity").click(function() {

	var count = $(".frame_color_opacity").val();
	var changer = parseInt(count)/100;
	$("#portraitTablet").css('opacity',changer);
	$("#landscapeTablet").css('opacity',changer);
	$(".PreviewBox_model").css('opacity',changer);
});

$(".frame_color_opacity").keyup(function() {

	var count = $(".frame_color_opacity").val();
	var changer = parseInt(count)/100;
	$("#portraitTablet").css('opacity',changer);
	$("#landscapeTablet").css('opacity',changer);
	$(".PreviewBox_model").css('opacity',changer);
});

$( ".button1_textColorChanger" ).change(function() {
	$(".button1_textColor").val( $( this ).val() );
	$(".btn1Text .single").css('color',$( this ).val());
        $(".btn1Text .double1").css('color',$( this ).val());
	$( ".button1_textColorChanger" ).val( $( this ).val() );
});

$(".button1_text_opacity").change(function() {

	var count = $(".button1_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".single").css('opacity',changer);
	$(".double1").css('opacity',changer);
	$(".button1_text_opacity").val( $( this ).val() );
});

$(".button1_text_opacity").click(function() {

	var count = $(".button1_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".single").css('opacity',changer);
	$(".double1").css('opacity',changer);
	$(".button1_text_opacity").val( $( this ).val() );
});

$(".button1_text_opacity").keyup(function() {

	var count = $(".button1_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".single").css('opacity',changer);
	$(".double1").css('opacity',changer);
	$(".button1_text_opacity").val( $( this ).val() );
});


$( ".button2_textColorChanger" ).change(function() {
	$(".button2_textColor").val( $( this ).val() );
	$(".btn2Text .double2").css('color',$( this ).val());
	$( ".button2_textColorChanger" ).val( $( this ).val() );
});

$(".button2_text_opacity").change(function() {

	var count = $(".button2_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".double2").css('opacity',changer);
	$(".button2_text_opacity").val( $( this ).val() );
});

$(".button2_text_opacity").click(function() {

	var count = $(".button2_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".double2").css('opacity',changer);
	$(".button2_text_opacity").val( $( this ).val() );
});

$(".button2_text_opacity").keyup(function() {

	var count = $(".button2_text_opacity").val();
	var changer = parseInt(count)/100;
	$(".double2").css('opacity',changer);
	$(".button2_text_opacity").val( $( this ).val() );
});

$( ".button1_backgroundColorChanger" ).change(function() {
	$(".button1_backgroundColor").val( $( this ).val() );
	$(".btn1Text").css('background',$( this ).val());
	$( ".button1_backgroundColorChanger" ).val( $( this ).val() );
});

$(".button1_background_opacity").change(function() {

	var count = $(".button1_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".btn1Text").css('opacity',changer);
	$(".button1_background_opacity").val( $( this ).val() );
});

$(".button1_background_opacity").click(function() {

	var count = $(".button1_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".btn1Text").css('opacity',changer);
	$(".button1_background_opacity").val( $( this ).val() );
});

$(".button1_background_opacity").keyup(function() {

	var count = $(".button1_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".btn1Text").css('opacity',changer);
	$(".button1_background_opacity").val( $( this ).val() );
});

$( ".button2_backgroundColorChanger" ).change(function() {
	$(".button2_backgroundColor").val( $( this ).val() );
	$(".btn2Text").css('background',$( this ).val());
	$( ".button2_backgroundColorChanger" ).val( $( this ).val() );
});

$(".button2_background_opacity").change(function() {

	var count = $(".button2_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".btn2Text").css('opacity',changer);
	$(".button2_background_opacity").val( $( this ).val() );
});

$(".button2_background_opacity").click(function() {

	var count = $(".button2_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".btn2Text").css('opacity',changer);
	$(".button2_background_opacity").val( $( this ).val() );
});

$(".button2_background_opacity").keyup(function() {

	var count = $(".button2_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".btn2Text").css('opacity',changer);
	$(".button2_background_opacity").val( $( this ).val() );
});

$(".newtabber > li a").click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
});

//if($('input[name=MsgTypeRadio]:checked').val() == 'FullScreen'){
	$('input[name=deviceOrentation]').click(function() {

		var deviceOrentation = $('input[name=deviceOrentation]:checked').val();

		if(deviceOrentation == 'Portrait'){

			$('#device_type option[value="Phone"]').attr("selected", "selected");
			$('#device_type option[value="Tablet"]').removeAttr("selected");
			$(".deviceType .CaptionCont span").html('Phone');
			$("#PreviewBox").css('display','block');
			$("#PreviewBoxLandscapes").css('display','none');
			$("#landscapeTablet").css('display','none');
		}
		if(deviceOrentation == 'Landscape'){

			$('#device_type option[value="Phone"]').attr("selected", "selected");
			$('#device_type option[value="Tablet"]').removeAttr("selected");
			$("#device_type option:first").attr('selected','selected');
			$(".deviceType .CaptionCont span").html('Phone');
			$("#PreviewBoxLandscapes").css('display','block');
			$("#PreviewBox").css('display','none');
			$("#portraitTablet").css('display','none');
		}

	});

	$('#device_type').on('change', function() {

		var deviceOrentation = $('input[name=deviceOrentation]:checked').val();



			  if(this.value == 'Tablet' && deviceOrentation == 'Portrait'){

				  $("#portraitTablet").css('display','block');
				  $("#PreviewBox").css('display','none');
			  }

			  if(this.value == 'Phone' && deviceOrentation == 'Portrait'){

				  $("#portraitTablet").css('display','none');
				  $("#PreviewBox").css('display','block');
			  }

			  	if(this.value == 'Phone' && deviceOrentation == 'Landscape'){

				  $("#PreviewBoxLandscapes").css('display','block');
				  $("#landscapeTablet").css('display','none');
			  }

			  	if(this.value == 'Tablet' && deviceOrentation == 'Landscape'){

					  $("#PreviewBoxLandscapes").css('display','none');
					  $("#landscapeTablet").css('display','block');
				  }


		});


	$('input[name=layout]').click(function() {

		var layout  = $('input[name=layout]:checked').val();

		if(layout == 'TextWithImage'){
			if($("#full_screen_header").val() != ''){
				$(".heading_text").text($("#full_screen_header").val());
			}else{
			$(".heading_text").text("Your message here...");
			}
			if($(".full_screen_body").val() != ''){
				$(".body_text").text($("#full_screen_body").val());
			}else{
				$(".body_text").text("Your message here...");
			}
		}
		if(layout == 'ImageOnly'){
			$(".heading_text").text("");
			$(".body_text").text("");
		}

	});


	$(".full_screen_header").keyup(function(){

		var full_screen_header = $(this).val();
		$(".full_screen_header").val(full_screen_header);

		if($( this ).val() == ''){
			$(".heading_text").text("Your message here...");
		}else{
			$(".heading_text").text("");
                        $(".heading_text").text( $( this ).val() );
		}
	});


	$(".full_screen_body").keyup(function(){

		var msg = $(this).val();
		var msg = msg.replace(/\n\r?/g, '<br />');

		var full_screen_body = $(this).val();

		$(".full_screen_body").val(full_screen_body);

		if($( this ).val() == ''){
			$(".body_text").text("Your message here...");
		}else{
			$(".body_text").html("");
                        $(".body_text").html( msg );
		}

	});


	$(".full_screen_button1").keyup(function(){

		$(".full_screen_button1").val($( this ).val());
		if($( this ).val() != '' && $(".full_screen_button2").val() == ''){

			$(".behavior").text("Button 1");
			$("#button1_behavior_type").css("display","block");
			$("#button2_behavior_type").css("display","none");
			$("#modal_button1_behavior_type").css("display","block");
			$("#modal_button2_behavior_type").css("display","none");

			$(".button1_design").css("display","block");
			$(".button2_design").css("display","none");

			$(".singleButton").css("display","block");
			$(".fullbtn").css("display","block");
		    $(".single").text($( this ).val());

		    $(".doubleButton").css("display","none");
		    $(".leftbtn").css("display","none");
		    $(".double1").text();
		    $(".rightbtn").css("display","none");
			$(".double2").text("");

		}

		else if($( this ).val() != '' && $(".full_screen_button2").val() != ''){

			$(".behavior").text("Button 1");
			$(".singleButton").css("display","none");
			$(".fullbtn").css("display","none");
		    $(".single").text("");

		    $(".button1_design").css("display","block");
		    $(".button2_design").css("display","block");

		    $(".doubleButton").css("display","block");
		    $(".leftbtn").css("display","block");
		    $(".double1").text($( this ).val());
		    $(".rightbtn").css("display","block");
			$(".double2").text($("#full_screen_button2").val());

			$(".behavior").text("Button 1");
			$("#button1_behavior_type").css("display","block");
			$("#button2_behavior_type").css("display","block");
			$("#modal_button1_behavior_type").css("display","block");
			$("#modal_button2_behavior_type").css("display","block");
		}

		else if($( this ).val() == '' && $(".full_screen_button2").val() != ''){



			$(".singleButton").css("display","block");
			$(".fullbtn").css("display","block");
		    $(".single").text($(".full_screen_button2").val());

		    $(".doubleButton").css("display","none");
		    $(".leftbtn").css("display","none");
		    $(".double1").text();
		    $(".rightbtn").css("display","none");
			$(".double2").text("");

			$("#button1_behavior_type").css("display","none");
			$("#button2_behavior_type").css("display","block");
			$("#modal_button1_behavior_type").css("display","none");
			$("#modal_button2_behavior_type").css("display","block");

			$(".button1_design").css("display","none");
		    $(".button2_design").css("display","block");
		}
		else if($( this ).val() == '' && $(".full_screen_button2").val() == ''){

			$(".behavior").text("Message");

			$(".singleButton").css("display","none");
			$(".fullbtn").css("display","none");
		    $(".single").text("");

			$(".doubleButton").css("display","none");
		    $(".leftbtn").css("display","none");
		    $(".double1").text();
		    $(".rightbtn").css("display","none");
			$(".double2").text("");

			$(".button1_design").css("display","none");
		    $(".button2_design").css("display","none");
		}


	});

	$(".full_screen_button2").keyup(function(){

		$(".full_screen_button2").val($( this ).val());

		if($(".full_screen_button1").val() == '' && $( this ).val() == ''){

			$(".fullbtn").css("display","none");

			$(".singleButton").css("display","none");
			$(".single").text("");
			$(".doubleButton").css("display","none");
			$(".double1").text("");
			$(".double2").text("");

			$("#button1_behavior_type").css("display","none");
			$("#button2_behavior_type").css("display","none");
			$(".behavior").text("Message");
			$("#modal_button1_behavior_type").css("display","none");
			$("#modal_button2_behavior_type").css("display","none");

			$(".button1_design").css("display","none");
		    $(".button2_design").css("display","none");
		}

		else if($(".full_screen_button1").val() != '' && $( this ).val() == ''){

			$("#button1_behavior_type").css("display","block");
			$("#button2_behavior_type").css("display","none");
			$("#modal_button1_behavior_type").css("display","block");
			$("#modal_button2_behavior_type").css("display","none");

			$(".singleButton").css("display","block");
			$(".fullbtn").css("display","block");
		    $(".single").text($("#full_screen_button1").val());

		    $(".doubleButton").css("display","none");
			$(".leftbtn").css("display","none");
			$(".double1").text("");
			$(".rightbtn").css("display","block");
			$(".double2").text("");

			$(".button1_design").css("display","block");
		    $(".button2_design").css("display","none");
		}
		else if($( this ).val() != '' && $(".full_screen_button1").val() != ''){

			$("#button1_behavior_type").css("display","block");
			$("#button2_behavior_type").css("display","block");
			$("#modal_button1_behavior_type").css("display","block");
			$("#modal_button2_behavior_type").css("display","block");

			$(".singleButton").css("display","none");
			$(".fullbtn").css("display","none");
		    $(".single").text("");

		    $(".doubleButton").css("display","block");
		    $(".leftbtn").css("display","block");
		    $(".double1").text($("#full_screen_button1").val());
		    $(".rightbtn").css("display","block");
			$(".double2").text($( this ).val());

			$(".button1_design").css("display","block");
		    $(".button2_design").css("display","block");
		}else if($( this ).val() != '' && $(".full_screen_button1").val() == ''){

			$("#button1_behavior_type").css("display","none");
			$("#button2_behavior_type").css("display","block");
			$(".singleButton").css("display","none");
			$(".fullbtn").css("display","none");
		    $(".single").text($( this ).val());

		    $(".singleButton").css("display","none");
			$(".single").text("");
			$(".doubleButton").css("display","none");
			$(".double1").text("");
			$(".double2").text("");

			$(".button1_design").css("display","none");
		    $(".button2_design").css("display","block");
		}

	});

	$('input[name=Alignment]').click(function() {

		var alignment  = $('input[name=Alignment]:checked').val();
		if(alignment == 'align-left'){

			$("input[name=modal_Alignment][value='align-center']").removeAttr('checked');
			$("input[name=modal_Alignment][value='align-right']").removeAttr('checked');
			$("input[name=modal_Alignment][value=" + alignment + "]").attr('checked', 'checked');

			$(".alignLeft").addClass('alignActive');
			$(".alignCenter").removeClass('alignActive');
			$(".alignRight").removeClass('alignActive');

			$(".heading_text").css('text-align','left');
			$(".body_text").css('text-align','left');

		}
		if(alignment == 'align-center'){

			$("input[name=modal_Alignment][value='align-left']").removeAttr('checked');
			$("input[name=modal_Alignment][value='align-right']").removeAttr('checked');
			$("input[name=modal_Alignment][value=" + alignment + "]").attr('checked', 'checked');

			$(".alignLeft").removeClass('alignActive');
			$(".alignCenter").addClass('alignActive');
			$(".alignRight").removeClass('alignActive');

			$(".heading_text").css('text-align','center');
			$(".body_text").css('text-align','center');
		}
		if(alignment == 'align-right'){

			$("input[name=modal_Alignment][value='align-center']").removeAttr('checked');
			$("input[name=modal_Alignment][value='align-left']").removeAttr('checked');
			$("input[name=modal_Alignment][value=" + alignment + "]").attr('checked', 'checked');

			$(".alignLeft").removeClass('alignActive');
			$(".alignCenter").removeClass('alignActive');
			$(".alignRight").addClass('alignActive');

			$(".heading_text").css('text-align','right');
			$(".body_text").css('text-align','right');
		}

	});

$('input[name=modal_Alignment]').click(function() {

		var alignment  = $('input[name=modal_Alignment]:checked').val();
		if(alignment == 'align-left'){

			$("input[name=Alignment][value='align-center']").removeAttr('checked');
			$("input[name=Alignment][value='align-right']").removeAttr('checked');
			$("input[name=Alignment][value=" + alignment + "]").attr('checked', 'checked');

			$(".alignLeft").addClass('alignActive');
			$(".alignCenter").removeClass('alignActive');
			$(".alignRight").removeClass('alignActive');

			$(".heading_text").css('text-align','left');
			$(".body_text").css('text-align','left');

		}
		if(alignment == 'align-center'){

			$("input[name=Alignment][value='align-left']").removeAttr('checked');
			$("input[name=Alignment][value='align-right']").removeAttr('checked');
			$("input[name=Alignment][value=" + alignment + "]").attr('checked', 'checked');

			$(".alignLeft").removeClass('alignActive');
			$(".alignCenter").addClass('alignActive');
			$(".alignRight").removeClass('alignActive');

			$(".heading_text").css('text-align','center');
			$(".body_text").css('text-align','center');
		}
		if(alignment == 'align-right'){

			$("input[name=Alignment][value='align-center']").removeAttr('checked');
			$("input[name=Alignment][value='align-left']").removeAttr('checked');
			$("input[name=Alignment][value=" + alignment + "]").attr('checked', 'checked');

			$(".alignLeft").removeClass('alignActive');
			$(".alignCenter").removeClass('alignActive');
			$(".alignRight").addClass('alignActive');

			$(".heading_text").css('text-align','right');
			$(".body_text").css('text-align','right');
		}

	});

$('.button1_behavior').on('change', function() {

	var button1_behavior = $(this).val();

	if(button1_behavior == 'Redirect to Web URL' || button1_behavior == 'Deep link into App'){
		$(".button1_redirect_url").css('display','block');
		$(".button1_behavior option:contains(" + button1_behavior + ")").attr('selected', 'selected');
		$(".button1_behavior_type .CaptionCont span").html(button1_behavior);
	}else{
		$(".button1_behavior option:contains(" + button1_behavior + ")").attr('selected', 'selected');
		$(".button1_redirect_url").css('display','none');
		$(".button1_behavior_type .CaptionCont span").html(button1_behavior);
		$(".error_button1_redirect_url").text("");
		$(".button1_redirect_url").css('border-color', '#ccc');
	}

});

$('.button2_behavior').on('change', function() {

	var button2_behavior = $(this).val();

	if(button2_behavior == 'Redirect to Web URL' || button2_behavior == 'Deep link into App'){
		$(".button2_redirect_url").css('display','block');
		$(".button2_behavior option:contains(" + button2_behavior + ")").attr('selected', 'selected');
		$(".button2_behavior_type .CaptionCont span").html(button2_behavior);
	}else{
		$(".button2_redirect_url").css('display','none');
		$(".button2_behavior option:contains(" + button2_behavior + ")").attr('selected', 'selected');
		$(".button2_behavior_type .CaptionCont span").html(button2_behavior);
		$(".error_button2_redirect_url").text("");
		$(".button2_redirect_url").css('border-color', '#ccc');
	}

});

$(".button1_redirect_url").keyup(function(){
	$(".button1_redirect_url").val( $(this).val() );
});

$(".button2_redirect_url").keyup(function(){
	$(".button2_redirect_url").val( $(this).val() );
});

$('.message_close').change(function() {
$(".message_close option:contains(" + $(this).val() + ")").attr('selected', 'selected');
$(".message_close_section .CaptionCont span").html($(this).val());
});

$("#include_image").click(function(){

	if($('#include_image').is(':checked') == true){
		//$('#include_image1').attr('checked','checked');
		document.getElementById("include_image1").checked = true;
		$(".fontawesomeIcon").css('display','block');
		$("#image_upload_input").css('display','block');
    $(".iconpreviewImage1").html("");
    $('input:radio[name="pickImageType"][id="badge"]').click();
		$("#image_upload_input1").css('display','block');
		$(".fontawesomeSection1").css('display','block');
	}else{
		$('#include_image1').removeAttr('checked');
		$(".fontawesomeIcon").css('display','none');
		$("#image_upload_input").css('display','none');
		$("#image_upload_input1").css('display','none');
		$(".fontawesomeSection1").css('display','none');
		$(".uploadImageModal").css('display','none');
		$(".fontawesomeIcon").css('display','none');
		$(".uploadImageIcon").css('display','none');
	}
});

$(".pickImageType").click(function(){

	var pickImageType = $('input[name=pickImageType]:checked').val();

	if(pickImageType == 'badge'){
		document.getElementById("badge1").checked = true;
		$(".fontawesomeSection1").css('display','block');
		$(".fontawesomeIcon").css('display','block');
		$(".uploadImageModal").css('display','none');
		$(".uploadImageIcon").css('display','none');
    $('input:radio[name="iconTypeRadio1"][value="f091"]').click();
    $(".iconpreviewImage1").html("");
    $(".imgSrc").css('display','none');

    html2canvas(element, {
       onrendered: function (canvas) {
            $(".iconpreviewImage1").append(canvas);
             getCanvas = canvas;
             var imgageData = getCanvas.toDataURL("image/png");
             // Now browser starts downloading it instead of just showing it
             var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
             $(".btn-Convert-Html2Image1").attr("download", "your_pic_name.png").attr("href", newData);
        }
    });
	}else{
		document.getElementById("own1").checked = true;
		$(".uploadImageModal").css('display','block');
		$(".fontawesomeSection1").css('display','none');
		$(".uploadImageIcon").css('display','block');
		$(".fontawesomeIcon").css('display','none');
		var imgSrc = $(".imgSrc").attr('src');
		if(imgSrc != ''){
			$(".imgSrc").css('display','block');

		}

	}
});

$("#include_image1").click(function(){

	if($('#include_image1').is(':checked') == true){
		document.getElementById("include_image").checked = true;
		$(".fontawesomeIcon").css('display','block');
		$("#image_upload_input").css('display','block');
		$("#image_upload_input1").css('display','block');
    $(".iconpreviewImage1").html("");
    $('input:radio[name="pickImageType1"][id="badge1"]').click();
		$(".fontawesomeSection1").css('display','block');
	}else{
		$('#include_image').removeAttr('checked');
		$(".fontawesomeIcon").css('display','none');
		$("#image_upload_input").css('display','none');
		$("#image_upload_input1").css('display','none');
		$(".fontawesomeSection1").css('display','none');
		$(".uploadImageModal").css('display','none');
		$(".fontawesomeIcon").css('display','none');
		$(".uploadImageIcon").css('display','none');
	}
});

$(".pickImageType1").click(function(){

	var pickImageType = $('input[name=pickImageType1]:checked').val();

	if(pickImageType == 'badge'){
		document.getElementById("badge").checked = true;
		$(".fontawesomeSection1").css('display','block');
		$(".fontawesomeIcon").css('display','block');
		$(".uploadImageModal").css('display','none');
		$(".uploadImageIcon").css('display','none');
    $('input:radio[name="iconTypeRadio1"][value="f091"]').click();
    $(".iconpreviewImage1").html("");
    $(".imgSrc").css('display','none');

    var element1 = $(".slideCustonIcon");
    html2canvas(element1, {
       onrendered: function (canvas) {
            $(".iconpreviewImage1").append(canvas);
             getCanvas = canvas;
             var imgageData = getCanvas.toDataURL("image/png");
             // Now browser starts downloading it instead of just showing it
             var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
             $(".btn-Convert-Html2Image1").attr("download", "your_pic_name.png").attr("href", newData);
        }
    });
	}else{
		document.getElementById("own").checked = true;
		$(".uploadImageModal").css('display','block');
		$(".fontawesomeSection1").css('display','none');
		$(".uploadImageIcon").css('display','block');
		$(".fontawesomeIcon").css('display','none');
		var imgSrc = $(".imgSrc").attr('src');
		if(imgSrc != ''){
			$(".imgSrc").css('display','block');

		}

	}
});

$('input[name=iconTypeRadio1]').click(function() {
		var iconType  = $('input[name=iconTypeRadio1]:checked').val();

		$(".customfontawesome").html("&#x"+iconType+";");
		$(".fa-icon-input").val(iconType);
		$('input[name=iconTypeRadio][value=' + iconType + ']').prop('checked',true);
    $(".iconpreviewImage1").html("");
    html2canvas(element, {
       onrendered: function (canvas) {
            $(".iconpreviewImage1").append(canvas);
             getCanvas = canvas;
             var imgageData = getCanvas.toDataURL("image/png");
             // Now browser starts downloading it instead of just showing it
             var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
             $(".btn-Convert-Html2Image1").attr("download", "your_pic_name.png").attr("href", newData);
        }
    });
     //alert(getCanvas+newData);
	});

$('input[name=iconTypeRadio]').click(function() {
		var iconType  = $('input[name=iconTypeRadio]:checked').val();

		$(".customfontawesome").html("&#x"+iconType+";");
		$(".fa-icon-input").val(iconType);
		$('input[name=iconTypeRadio1][value=' + iconType + ']').prop('checked',true);
    $(".iconpreviewImage1").html("");
    var element1 = $(".slideCustonIcon");

    html2canvas(element1, {
       onrendered: function (canvas) {
            $(".iconpreviewImage1").append(canvas);
             getCanvas = canvas;
             var imgageData = getCanvas.toDataURL("image/png");
             // Now browser starts downloading it instead of just showing it
             var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
             $(".btn-Convert-Html2Image1").attr("download", "your_pic_name.png").attr("href", newData);
        }
    });

	});

$(".fa-icon-input").keyup(function(){

	var baseurl = $("#baseurl").val();
	var unicode = $(this).val();

	if(unicode.length == 4){

		$.ajax({
                type: "POST",
                url: baseurl + 'appUser/checkUnicode',
                data: "unicode=" + unicode ,
                context: document.body,
                success: function(response) {
                	if(response != ''){
                		$(".fontawesomeIcon").css('display','block');
        						$(".customfontawesome").html("&#x"+unicode+";");
        						$(".fa-icon-input").val(unicode);
        						var iconType  = $('input[name=iconTypeRadio1]:checked').val();
                    //alert(iconType);// alert(chooseMessageType);
                    $(".iconpreviewImage1").html("");
                    if(chooseMessageType === 'modal'){
                      html2canvas(element, {
                         onrendered: function (canvas) {
                              $(".iconpreviewImage1").append(canvas);
                               getCanvas = canvas;
                               var imgageData = getCanvas.toDataURL("image/png");
                               // Now browser starts downloading it instead of just showing it
                               var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
                               $(".btn-Convert-Html2Image1").attr("download", "your_pic_name.png").attr("href", newData);
                          }
                      });
                    }else{
                      var element1 = $(".slideCustonIcon");
                      html2canvas(element1, {
                         onrendered: function (canvas) {
                              $(".iconpreviewImage1").append(canvas);
                               getCanvas = canvas;
                               var imgageData = getCanvas.toDataURL("image/png");
                               // Now browser starts downloading it instead of just showing it
                               var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
                               $(".btn-Convert-Html2Image1").attr("download", "your_pic_name.png").attr("href", newData);
                          }
                      });
                    }

        					 if(iconType != unicode){

        							$('input[name=iconTypeRadio1][value=' + iconType + ']').prop('checked',false);
        							$('input[name=iconTypeRadio][value=' + iconType + ']').prop('checked',false);
        					 }
      							$('input[name=iconTypeRadio1][value=' + unicode + ']').prop('checked',true);
      							$('input[name=iconTypeRadio][value=' + unicode + ']').prop('checked',true);
                  }else{
                		$(".fontawesomeIcon").css('display','none');
						        $(".customfontawesome").html("");
                	}

                },
            });


	}else{
		$(".fontawesomeIcon").css('display','none');
		$(".customfontawesome").html("");
	}

});

$( ".fontawesome_backgroundColorChanger" ).change(function() {
	$(".fontawesome_backgroundColorChanger").val( $( this ).val() );
	$(".PreviewBox_model .model .fa-image-container").css('background',$( this ).val());
	$(".SlidupScreenMsgBox .fa-image-container").css('background',$( this ).val());
	$( ".fontawesome_backgroundColor" ).val( $( this ).val() );
});

$(".fontawesome_background_opacity").change(function(){
	var count = $(".fontawesome_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox_model .model .fa-image-container").css('opacity',changer);
	$(".SlidupScreenMsgBox .fa-image-container").css('opacity',changer);
	$(".fontawesome_background_opacity").val( $( this ).val() );

});

$(".fontawesome_background_opacity").keyup(function(){
	var count = $(".fontawesome_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox_model .model .fa-image-container").css('opacity',changer);
	$(".SlidupScreenMsgBox .fa-image-container").css('opacity',changer);
	$(".fontawesome_background_opacity").val( $( this ).val() );

});

$(".fontawesome_background_opacity").click(function(){
	var count = $(".fontawesome_background_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox_model .model .fa-image-container").css('opacity',changer);
	$(".SlidupScreenMsgBox .fa-image-container").css('opacity',changer);
	$(".fontawesome_background_opacity").val( $( this ).val() );

});

$( ".fontawesome_iconColorChanger" ).change(function() {
	$(".fontawesome_iconColorChanger").val( $( this ).val() );
	$(".PreviewBox_model .model .fa-image-container").css('color',$( this ).val());
	//$(".SlidupScreenMsgBox .fa-image-container").css('color',$( this ).val());
	$(".SlidupScreenMsgBox .customfontawesome").css('color',$( this ).val());
	$( ".fontawesome_iconColor" ).val( $( this ).val() );
});



$(".fontawesome_iconColor_opacity").change(function(){
	var count = $(".fontawesome_iconColor_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox_model .model .customfontawesome").css('opacity',changer);
	$(".SlidupScreenMsgBox .customfontawesome").css('opacity',changer);
	$(".fontawesome_iconColor_opacity").val( $( this ).val() );

});

$(".fontawesome_iconColor_opacity").keyup(function(){
	var count = $(".fontawesome_iconColor_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox_model .model .customfontawesome").css('opacity',changer);
	$(".SlidupScreenMsgBox .customfontawesome").css('opacity',changer);
	$(".fontawesome_iconColor_opacity").val( $( this ).val() );

});

$(".fontawesome_iconColor_opacity").click(function(){
	var count = $(".fontawesome_iconColor_opacity").val();
	var changer = parseInt(count)/100;
	$(".PreviewBox_model .model .customfontawesome").css('opacity',changer);
	$(".SlidupScreenMsgBox .customfontawesome").css('opacity',changer);
	$(".fontawesome_iconColor_opacity").val( $( this ).val() );

});

$("#chevron_colorChanger").change(function() {
	$( "#chevron_color" ).val( $( this ).val() );
	$(".SlidupScreenMsgBox .fa-angle-right").css('color', $(this).val());
});

$("#chevron_opacity").change(function(){
	var count = $("#chevron_opacity").val();
	var changer = parseInt(count)/100;
	$(".SlidupScreenMsgBox .fa-angle-right").css('opacity',changer);
	$("#chevron_opacity").val( $( this ).val() );

});

$("#chevron_opacity").keyup(function(){
	var count = $("#chevron_opacity").val();
	var changer = parseInt(count)/100;
	$(".SlidupScreenMsgBox .fa-angle-right").css('opacity',changer);
	$("#chevron_opacity").val( $( this ).val() );

});

$("#chevron_opacity").click(function(){
	var count = $("#chevron_opacity").val();
	var changer = parseInt(count)/100;
	$(".SlidupScreenMsgBox .fa-angle-right").css('opacity',changer);
	$("#chevron_opacity").val( $( this ).val() );

});

$( "#image_url" ).keyup(function() {
	var img_url = $("#image_url").val();
	var tmpImg = new Image();
	tmpImg.src=img_url;
		$(tmpImg).one('load',function(){
	  	orgWidth = tmpImg.width;
		});
		if(orgWidth < 400){
			//alert('Please upload image with minimum 400px width');
			$(".previewImage").css('display','block');
			$('.imgSrc').attr('src', '');
			$("#image_url").val("");
			$("#image_url1").val("");
			$("#image_url2").val("");
			$(".error_image").text('Please upload image with minimum 400px width');
		}else{
			$(".error_image").text('');
			$('#inapp_image').attr('value','');
			$("#image_url1").val(img_url);
			$("#image_url2").val(img_url);
			if(img_url != ''){
				$("#imageUpload").val(1);
				$(".previewImage").css('display','none');
				$(".img").css('display','block');
				$(".imgSrc").css('display','block');
				$('.imgSrc').attr('src', img_url);
				document.getElementById("include_image").checked = true;
				document.getElementById("include_image1").checked = true;
				document.getElementById("own").checked = true;
				document.getElementById("own1").checked = true;
				$(".uploadImageModal").css('display','block');
				$("#image_upload_input").css('display','block');
				$("#image_upload_input1").css('display','block');
				$(".fontawesomeIcon").css('display','none');
				$(".uploadImageIcon").css('display','block');
			  	$(".uploadImage").css('pointer-events','none');
			}else{
				$("#imageUpload").val(0);
				$(".previewImage").css('display','block');
				$(".img").css('display','none');
				$(".imgSrc").css('display','none');
				$('.imgSrc').attr('src', '');
				$(".uploadImage").css('pointer-events','auto');
			}
		}


	});

$( "#image_url" ).change(function() {
	var img_url = $("#image_url").val();
	var tmpImg = new Image();
	tmpImg.src=img_url;
		$(tmpImg).one('load',function(){
	  	orgWidth = tmpImg.width;
		});
		if(orgWidth < 400){
			//alert('Please upload image with minimum 400px width');
			$(".previewImage").css('display','block');
			$('.imgSrc').attr('src', '');
			$("#image_url").val("");
			$("#image_url1").val("");
			$("#image_url2").val("");
			$(".error_image").text('Please upload image with minimum 400px width');
		}else{
			$(".error_image").text('');
			$('#inapp_image').attr('value','');
			$("#image_url1").val(img_url);
			$("#image_url2").val(img_url);
			if(img_url != ''){
				$("#imageUpload").val(1);
				$(".previewImage").css('display','none');
				$(".img").css('display','block');
				$(".imgSrc").css('display','block');
				$('.imgSrc').attr('src', img_url);
				document.getElementById("include_image").checked = true;
				document.getElementById("include_image1").checked = true;
				document.getElementById("own").checked = true;
				document.getElementById("own1").checked = true;
				$(".uploadImageModal").css('display','block');
				$("#image_upload_input").css('display','block');
				$("#image_upload_input1").css('display','block');
				$(".fontawesomeIcon").css('display','none');
				$(".uploadImageIcon").css('display','block');
			  	$(".uploadImage").css('pointer-events','none');
			}else{
				$("#imageUpload").val(0);
				$(".previewImage").css('display','block');
				$(".img").css('display','none');
				$('.imgSrc').attr('src', '');
				$(".uploadImage").css('pointer-events','auto');
			}
		}


	});

$( "#image_url1" ).keyup(function() {
	var img_url = $("#image_url1").val();
	var tmpImg = new Image();
	tmpImg.src=img_url;
		$(tmpImg).one('load',function(){
	  	orgWidth = tmpImg.width;
		});
		if(orgWidth < 400){
			//alert('Please upload image with minimum 400px width');
			$(".previewImage").css('display','block');
			$('.imgSrc').attr('src', '');
			$("#image_url").val("");
			$("#image_url1").val("");
			$("#image_url2").val("");
			$(".error_image").text('Please upload image with minimum 400px width');
		}else{
			$(".error_image").text('');
			$('#inapp_image').attr('value','');
			$("#image_url").val(img_url);
			$("#image_url2").val(img_url);
			if(img_url != ''){
				$("#imageUpload").val(1);
				$(".previewImage").css('display','none');
				$(".img").css('display','block');
				$(".imgSrc").css('display','block');
				$('.imgSrc').attr('src', img_url);
				document.getElementById("include_image").checked = true;
				document.getElementById("include_image1").checked = true;
				document.getElementById("own").checked = true;
				document.getElementById("own1").checked = true;
				$(".uploadImageModal").css('display','block');
				$("#image_upload_input").css('display','block');
				$("#image_upload_input1").css('display','block');
				$(".fontawesomeIcon").css('display','none');
				$(".uploadImageIcon").css('display','block');
			  	$(".uploadImage").css('pointer-events','none');
			}else{
				$("#imageUpload").val(0);
				$(".previewImage").css('display','block');
				$(".img").css('display','none');
				$('.imgSrc').attr('src', '');
				$('.imgSrc').css('display','none');
				$(".uploadImage").css('pointer-events','auto');
			}
		}


	});

$( "#image_url1" ).change(function() {
	var img_url = $("#image_url1").val();
	var tmpImg = new Image();
	tmpImg.src=img_url;
		$(tmpImg).one('load',function(){
	  	orgWidth = tmpImg.width;
		});
		if(orgWidth < 400){
			//alert('Please upload image with minimum 400px width');
			$(".previewImage").css('display','block');
			$('.imgSrc').attr('src', '');
			$("#image_url").val("");
			$("#image_url1").val("");
			$("#image_url2").val("");
			$(".error_image").text('Please upload image with minimum 400px width');
		}else{
			$(".error_image").text('');
			$('#inapp_image').attr('value','');
			$("#image_url").val(img_url);
			$("#image_url2").val(img_url);
			if(img_url != ''){
				$("#imageUpload").val(1);
				$(".previewImage").css('display','none');
				$(".img").css('display','block');
				$(".imgSrc").css('display','block');
				$('.imgSrc').attr('src', img_url);
				document.getElementById("include_image").checked = true;
				document.getElementById("include_image1").checked = true;
				document.getElementById("own").checked = true;
				document.getElementById("own1").checked = true;
				$(".uploadImageModal").css('display','block');
				$("#image_upload_input").css('display','block');
				$("#image_upload_input1").css('display','block');
				$(".fontawesomeIcon").css('display','none');
				$(".uploadImageIcon").css('display','block');
			  	$(".uploadImage").css('pointer-events','none');
			}else{
				$("#imageUpload").val(0);
				$(".previewImage").css('display','block');
				$(".img").css('display','none');
				$('.imgSrc').attr('src', '');
				$('.imgSrc').css('display','none');
				$(".uploadImage").css('pointer-events','auto');
			}
		}


	});

$( "#image_url2" ).keyup(function() {
	var img_url = $("#image_url2").val();
	var tmpImg = new Image();
	tmpImg.src=img_url;
		$(tmpImg).one('load',function(){
	  	orgWidth = tmpImg.width;
		});
		if(orgWidth < 400){
			//alert('Please upload image with minimum 400px width');
			$(".previewImage").css('display','block');
			$('.imgSrc').attr('src', '');
			$("#image_url").val("");
			$("#image_url1").val("");
			$("#image_url2").val("");
			$(".error_image").text('Please upload image with minimum 400px width');
		}else{
			$(".error_image").text('');
			$('#inapp_image').attr('value','');
			$("#image_url").val(img_url);
			$("#image_url1").val(img_url);
			if(img_url != ''){
				$("#imageUpload").val(1);
				$(".previewImage").css('display','none');
				$(".img").css('display','block');
				$(".imgSrc").css('display','block');
				$('.imgSrc').attr('src', img_url);
				document.getElementById("include_image").checked = true;
				document.getElementById("include_image1").checked = true;
				document.getElementById("own").checked = true;
				document.getElementById("own1").checked = true;
				$(".uploadImageModal").css('display','block');
				$("#image_upload_input").css('display','block');
				$("#image_upload_input1").css('display','block');
				$(".fontawesomeIcon").css('display','none');
				$(".uploadImageIcon").css('display','block');
			  	$(".uploadImage").css('pointer-events','none');
			}else{
				$("#imageUpload").val(0);
				$(".previewImage").css('display','block');
				$(".img").css('display','none');
				$('.imgSrc').attr('src', '');
				$('.imgSrc').css('display','none');
				$(".uploadImage").css('pointer-events','auto');
			}
		}


	});

$( "#image_url2" ).change(function() {
	var img_url = $("#image_url2").val();
	var tmpImg = new Image();
	tmpImg.src=img_url;
		$(tmpImg).one('load',function(){
	  	orgWidth = tmpImg.width;
		});
		if(orgWidth < 400){
			//alert('Please upload image with minimum 400px width');
			$(".previewImage").css('display','block');
			$('.imgSrc').attr('src', '');
			$("#image_url").val("");
			$("#image_url1").val("");
			$("#image_url2").val("");
			$(".error_image").text('Please upload image with minimum 400px width');
		}else{
			$(".error_image").text('');
			$('#inapp_image').attr('value','');
			$("#image_url").val(img_url);
			$("#image_url1").val(img_url);
			if(img_url != ''){
				$("#imageUpload").val(1);
				$(".previewImage").css('display','none');
				$(".img").css('display','block');
				$(".imgSrc").css('display','block');
				$('.imgSrc').attr('src', img_url);
				document.getElementById("include_image").checked = true;
				document.getElementById("include_image1").checked = true;
				document.getElementById("own").checked = true;
				document.getElementById("own1").checked = true;
				$(".uploadImageModal").css('display','block');
				$("#image_upload_input").css('display','block');
				$("#image_upload_input1").css('display','block');
				$(".fontawesomeIcon").css('display','none');
				$(".uploadImageIcon").css('display','block');
			  	$(".uploadImage").css('pointer-events','none');
			}else{
				$("#imageUpload").val(0);
				$(".previewImage").css('display','block');
				$(".img").css('display','none');
				$('.imgSrc').attr('src', '');
				$('.imgSrc').css('display','none');
				$(".uploadImage").css('pointer-events','auto');
			}
		}


	});

//}


jsonObj = [];
androidCampaign = {};

function validateCompose(){
	var validation = [];
	var baseurl = $("#baseurl").val();
	var selectedPlatform = $("#selectedPlatform").val();
	var groupId = $("#groupId").val();
	var campaignId = $("#campaignId").val();
	var campaignName = $("#campaignName").val();
	var campaignPersonaUser = $("#campaignPersonaUser").val();
  var campaignList = $("#campaignLists").val();
	var message_category = $("#message_category").val();
	var message_type = $('input[name="MsgTypeRadio"]:checked').val();
	var fontawesome_icon = '';
  	var fontawesome_icon_img = '';
    var fontawesome_backgroundColor = '';
    var fontawesome_background_opacity = '';
    var fontawesome_iconColor = '';
    var fontawesome_iconColor_opacity = '';
    var imageUpload = $("#imageUpload").val();
    var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only
    
    var automation = 0;

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var layout = $('input[name="layout"]:checked').val();
	}else{
		var layout = '';
	}

	if(message_type == 'FullScreen'){
		var device_orientation = $('input[name="deviceOrentation"]:checked').val();
		var device_type = $("#device_type").val();

	}else{
		var device_orientation = '';
		var device_type = '';
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
//    		$("#error_campaignName").text("");
//    		$("#campaignName").css('border-color', '#ccc');
//    		validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var header = $(".full_screen_header").val();
		var header_text_color = $(".fullScreen_headerColor").val();
		var header_text_opacity = $(".header_text_opacity").val();
		var text_alignment = $('input[name="Alignment"]:checked').val();
		var closing_button_background_color = $(".fullScreen_closeButtonColor").val();
		var closing_button_background_color_opacity = $(".close_button_opacity").val();
		if(header == ''){
			$(".error_header").text("Please enter Header text");
			$(".full_screen_header").css('border-color', '#424141');
			validation['header'] = 0;
		}else{
			$(".error_header").text("");
			$(".full_screen_header").css('border-color', '#ccc');
			validation['header'] = 1;
		}
	}else{
		var header = '';
		var header_text_color = '';
		var header_text_opacity = '';
		var text_alignment = '';
		var closing_button_background_color = '';
		var closing_button_background_color_opacity = '';
		validation['header'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal' || message_type == 'slideup'){

		var body = $(".full_screen_body").val();
		var body = body.replace(/\n\r?/g, '<br />');
		var body_text_color = $(".fullScreen_textColor").val();
		var body_text_opacity = $(".body_text_opacity").val();
		var background_color = $(".background_color").val();
		var background_color_opacity = $(".background_opacity").val();
		var message_close = $(".message_close").val();

		if(body == ''){
			$(".error_body").text("Please enter Body text");
			$(".full_screen_body").css('border-color', '#424141');
			validation['body'] = 0;
		}else{
			$(".error_body").text("");
			$(".full_screen_body").css('border-color', '#ccc');
			validation['body'] = 1;
		}
	}else{

		var body = '';
		var body_text_color = '';
		var body_text_opacity = '';
		var background_color = '';
		var background_color_opacity = '';
		var message_close = '';
		validation['body'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var button1_text = $(".full_screen_button1").val();
		var button2_text = $(".full_screen_button2").val();
		var frame_color = $(".frame_color").val();
		var frame_color_opacity = $(".frame_color_opacity").val();
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

		if(button1_text != '' || (button1_text == '' && button2_text == '')){
		var button1_customUrl = $(".button1_behavior").val();
		var button1_background_color = $(".button1_backgroundColor").val();
		var button1_background_color_opacity = $(".button1_background_opacity").val();
		var button1_text_color = $(".button1_textColor").val();
		var button1_text_color_opacity = $(".button1_text_opacity").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}else{
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
	}

		if(button2_text != ''){
			var button2_customUrl = $(".button2_behavior").val();
			var button2_background_color = $(".button2_backgroundColor").val();
			var button2_background_color_opacity = $(".button2_background_opacity").val();button2_text_color
			var button2_text_color = $(".button2_textColor").val();
			var button2_text_color_opacity = $(".button2_text_opacity").val();
			if(button2_customUrl == 'Redirect to Web URL' || button2_customUrl == 'Deep link into App'){
				var button2_redirectUrl = $(".button2_redirect_url").val();

				if($.trim(button2_redirectUrl) == ''){
				$(".error_button2_redirect_url").text("Please enter Web URL");
				$(".button2_redirect_url").css('border-color', '#424141');
				validation['button2_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button2_redirectUrl) == false){
					$(".error_button2_redirect_url").text("Please enter valid Web URL");
					$(".button2_redirect_url").css('border-color', '#424141');
					validation['button2_redirectUrl'] = 0;
				}else{
					$(".error_button2_redirect_url").text("");
					$(".button2_redirect_url").css('border-color', '#ccc');
					validation['button2_redirectUrl'] = 1;
				}
			}

			}else{
				var button2_redirectUrl = '';
				validation['button2_redirectUrl'] = 1;
			}

		}else{
			var button2_customUrl = '';
			var button2_redirectUrl = '';
			var button2_background_color = '';
			var button2_background_color_opacity = '';
			var button2_text_color = '';
			var button2_text_color_opacity = '';
		}

	}else{
		var button1_text = '';
		var button2_text = '';
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
		var button2_customUrl = '';
		var button2_redirectUrl = '';
		var button2_background_color = '';
		var button2_background_color_opacity = '';
		var button2_text_color = '';
		var button2_text_color_opacity = '';
		var frame_color = '';
		var frame_color_opacity = '';
	}

	if(message_type == 'slideup'){
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
		var button1_customUrl = $(".button1_behavior").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		if(button1_text == '' && button2_text == ''){
			var on_click_behavior = 'message';
		}else{
			var on_click_behavior = 'button';
		}
	}
	if(message_type == 'slideup'){
		var on_click_behavior = 'message';
	}
	if(message_type == 'customhtml'){
		var on_click_behavior = '';
	}

	if(message_type == 'slideup'){
		var slide_up_position = $("#slide_up_position").val();
		var chevron_color = $("#chevron_color").val();
		var chevron_color_opacity = $("#chevron_opacity").val();
	}else{
		var slide_up_position = '';
		var chevron_color = '';
		var chevron_color_opacity = '';
	}

	if(message_type == 'customhtml'){

		var custom_html = $("#custom_html").val();
		var image_type = '';
		var image = '';
		var image_url = '';
		if($.trim(custom_html) == ''){

			$("#custom_html").css('border-color', '#424141');
			$("#error_customHtml").text('Please enter HTML code');
			validation['custom_html'] = 0;
		}else{
			//var str2 = '<a href="hurree://close">Close</a>';
			//if(custom_html.indexOf(str2) != -1){
    			$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','none');
				$("#close_tag").css('display','none');
				validation['custom_html'] = 1;
			//}
			/*else{
				$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','block');
				$("#close_tag").css('display','block');
				validation['custom_html'] = 0;
			}*/

		}
	}else{
			var custom_html = '';
			validation['custom_html'] = 1;
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
    	var image = $('#inapp_image').val();
		var image_url = $("#image_url").val();

    	if(message_type == 'FullScreen'){
    		var image_type = 'own';
    		if(imageUpload == '0'){
    		if(image == '' && image_url == ''){
    			if(message_type == 'FullScreen'){
				$("#editrihtTab").removeClass('active');
				$("#drawingTab").addClass('active');
				$(".error_image").text('Please add image');
				errorResult = 0;
			}
			else if(image != '' || image_url == ''){
			$(".error_image").text('');
			errorResult = -1;
		}
			else if(image == '' || image_url != ''){
				$(".error_image").text('');
				errorResult = -1;
			}

			var fontawesome_icon = '';
    		var fontawesome_backgroundColor = '';
    		var fontawesome_background_opacity = '';
    		var fontawesome_iconColor = '';
    		var fontawesome_iconColor_opacity = '';
        var fontawesome_icon_img = '';

    		}
    	}else{
    		errorResult = -1;
    	}
    	}
    	if(message_type == 'modal' || message_type == 'slideup'){
    		//pickImageType1
    		//$('#include_image').prop('checked', true);
    		//$("#include_image1").prop('checked', true);
    		//$("#image_upload_input").css('display','block');
    		//$("#image_upload_input1").css('display','block');
    		//$(".fontawesomeSection1").css('display','block');
    		//alert($("#include_image").is(':checked'));
    		if(message_type == 'modal'){
    			if($("#include_image").is(':checked') == true){
    			var image_type = $('.pickImageType:checked').val();
    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
    				var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    				if(imageUpload == '0'){
	    				if(image == '' && image_url == ''){

						$(".fontawesomeSection1").css('display','none');
						$("#editrihtTabModelScreen").removeClass('active');
						$("#drawingTabModelScreen").addClass('active');
						$(".error_image").text('Please add image');
						errorResult = 0;

						}

						else if(image != '' || image_url == ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
						else if(image == '' || image_url != ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
					}else{
						errorResult = -1;
					}
    			}
    		}else{
    			$("#editrihtTabModelScreen").removeClass('active');
    			$("#drawingTabModelScreen").addClass('active');
    			$("#model_image_error").text('Please add image');
    			errorResult = 0;
    		}
    		}

    		if(message_type == 'slideup'){
    			if($("#include_image1").is(':checked') == true){
    			var image_type = $('.pickImageType1:checked').val();

    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
            var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    					if(imageUpload == '0'){
    					if(image == '' && image_url == ''){

    						$(".fontawesomeSection1").css('display','none');
    						$("#editrihtTabSlidupScreen").removeClass('active');
							$("#drawingTabSlidupScreen").addClass('active');
							$(".error_image").text('Please add image');
							errorResult = 0;
    					}
    					else if(image != '' || image_url == ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
						else if(image == '' || image_url != ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
					}else{
						errorResult = -1;
					}
    			}
    		}else{
    				$("#editrihtTabSlidupScreen").removeClass('active');
    				$("#drawingTabSlidupScreen").addClass('active');
    				$("#slideup_image_error").text('Please add image');
    				errorResult = 0;
    		}

    	}

		}
	}
	if(errorResult == -1){

		androidCampaign["groupId"] = groupId;
		androidCampaign["campaignId"] = campaignId;
		androidCampaign["campaignName"] = campaignName;
		androidCampaign["campaignPersonaUser"] = campaignPersonaUser;
		androidCampaign["campaignList"] = campaignList;
		androidCampaign["message_category"] =  message_category;
                androidCampaign['automation'] = automation;
		androidCampaign["message_type"] = message_type;
		androidCampaign["device_orientation"] = device_orientation ;
		androidCampaign["device_type"] = device_type ;
		androidCampaign["layout"] = layout;
		androidCampaign["header"] = header;
		androidCampaign["header_text_color"] = header_text_color;
		androidCampaign["header_text_opacity"] = header_text_opacity;
		androidCampaign["text_alignment"] = text_alignment;
		androidCampaign["closing_button_background_color"] = closing_button_background_color;
		androidCampaign["closing_button_background_color_opacity"] = closing_button_background_color_opacity;
		androidCampaign["body"] = body;
		androidCampaign["body_text_color"] = body_text_color;
		androidCampaign["body_text_opacity"] = body_text_opacity;
		androidCampaign["background_color"] = background_color;
		androidCampaign["background_color_opacity"] = background_color_opacity;
		androidCampaign["message_close"] = message_close;
		androidCampaign["button1_text"] = button1_text;
		androidCampaign["button2_text"] = button2_text;
		androidCampaign["button1_customUrl"] = button1_customUrl;
		androidCampaign["button1_redirectUrl"] = button1_redirectUrl;
		androidCampaign["button1_background_color"] = button1_background_color;
		androidCampaign["button1_background_color_opacity"] = button1_background_color_opacity;
		androidCampaign["button1_text_color"] = button1_text_color;
		androidCampaign["button1_text_color_opacity"] = button1_text_color_opacity;
		androidCampaign["button2_customUrl"] = button2_customUrl;
		androidCampaign["button2_redirectUrl"] = button2_redirectUrl;
		androidCampaign["button2_background_color"] = button2_background_color;
		androidCampaign["button2_background_color_opacity"] = button2_background_color_opacity;
		androidCampaign["button2_text_color"] = button2_text_color;
		androidCampaign["button2_text_color_opacity"] = button2_text_color_opacity;
		androidCampaign["frame_color"] = frame_color;
		androidCampaign["frame_color_opacity"] = frame_color_opacity;
		androidCampaign["on_click_behavior"] = on_click_behavior;
		androidCampaign["slide_up_position"] = slide_up_position;
		androidCampaign["chevron_color"] = chevron_color;
		androidCampaign["chevron_color_opacity"] = chevron_color_opacity;
		androidCampaign["custom_html"] = custom_html;
		androidCampaign["image_type"] = image_type;
		androidCampaign["image"] = image;
		androidCampaign["image_url"] = image_url;
		androidCampaign["fontawesome_icon"] = fontawesome_icon;
    androidCampaign['fontawesome_icon_img'] = fontawesome_icon_img;
    	androidCampaign["fontawesome_background_color"] = fontawesome_backgroundColor;
    	androidCampaign["fontawesome_background_opacity"] = fontawesome_background_opacity;
    	androidCampaign["fontawesome_icon_color"] = fontawesome_iconColor;
    	androidCampaign["fontawesome_icon_color_opacity"] = fontawesome_iconColor_opacity;

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

    	$("#standard_preview_title").text(androidCampaign["push_title"]);
    	$("#standard_preview_message").text(androidCampaign["push_message"]);
    	$("#extended_preview_title").text(androidCampaign["push_title"]);
		$("#extended_preview_message").text(androidCampaign["push_message"]);
		$("#ios_standard_preview_message").text(androidCampaign["push_message"]);
		$("#ios_extended_preview_message").text(androidCampaign["push_message"]);

		$("#email_subject").text(androidCampaign["email_subject"]);
		$("#email_message").html(androidCampaign["email_message"]);

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

		if(androidCampaign["selectedPlatform"] != ''){

		if(androidCampaign["message_type"] == 'FullScreen'){
			if(androidCampaign["device_orientation"] == 'Portrait'){

				if(androidCampaign["device_type"] == 'Phone'){
					var htmlCode = $("#PreviewBox1").html();
					$("#fullScreenPortraitPhone").html(htmlCode);
					$("#fullScreenPortraitPhone").css('display','block');
					$("#fullScreenPortraitTablet").css("display","none");
					$("#fullScreenLandscapePhone").css("display","none");
					$("#fullScreenLandscapeTablet").css("display","none");
					$("#ModelScreenPreview").css("display","none");
				}
				if(androidCampaign["device_type"] == 'Tablet'){
					var htmlCode = $("#portraitTablet1").html();
					$("#fullScreenLandscapePhone").css("display","none");
					$("#fullScreenPortraitPhone").css("display","none");
					$("#fullScreenPortraitPhone").html("");
					$("#fullScreenPortraitTablet").css("display","block");
					$("#fullScreenPortraitTablet").html(htmlCode);
					$("#fullScreenLandscapePhone").css("display","none");
					$("#fullScreenLandscapeTablet").css("display","none");
					$("#ModelScreenPreview").css("display","none");
					$("#slideupPreview").css("display","none");
				}
			}
			if(androidCampaign["device_orientation"] == 'Landscape'){
				if(androidCampaign["device_type"] == 'Phone'){

					var htmlCode = $("#PreviewBoxLandscapes1").html();
					$("#fullScreenLandscapePhone").css("display","block");
					$("#fullScreenLandscapePhone").html(htmlCode);
					$("#fullScreenPortraitPhone").css('display','none');
					$("#fullScreenPortraitTablet").css("display","none");
					$("#fullScreenLandscapeTablet").css("display","none");
					$("#ModelScreenPreview").css("display","none");
					$("#slideupPreview").css("display","none");
				}

				if(androidCampaign["device_type"] == 'Tablet'){
					var htmlCode = $("#landscapeTablet1").html();
					$("#fullScreenLandscapeTablet").css("display","block");
					$("#fullScreenLandscapeTablet").html(htmlCode);
					$("#fullScreenLandscapePhone").css("display","none");
					$("#fullScreenPortraitPhone").css('display','none');
					$("#fullScreenPortraitTablet").css("display","none");
					$("#ModelScreenPreview").css("display","none");
					$("#slideupPreview").css("display","none");
				}
			}
		}

		if(androidCampaign["message_type"] == 'modal'){

					var htmlCode = $("#ModelScreen1").html();
					$("#ModelScreenPreview").html(htmlCode);
					$("#ModelScreenPreview").css("display","block");
					$("#fullScreenLandscapeTablet").css("display","none");
					$("#fullScreenLandscapePhone").css("display","none");
					$("#fullScreenPortraitPhone").css('display','none');
					$("#fullScreenPortraitTablet").css("display","none");
					$("#slideupPreview").css("display","none");
		}

		if(androidCampaign["message_type"] == 'slideup'){

					var htmlCode = $("#SlidupScreenBox").html();
					$("#slideupPreview").html(htmlCode);
					$("#slideupPreview").css("display","block");
					$("#ModelScreenPreview").css("display","none");
					$("#fullScreenLandscapeTablet").css("display","none");
					$("#fullScreenLandscapePhone").css("display","none");
					$("#fullScreenPortraitPhone").css('display','none');
					$("#fullScreenPortraitTablet").css("display","none");
		}

		if(androidCampaign["message_type"] == 'customhtml'){

			$("#customHtmlPreview").html('<p>We do not support previewing Custom HTML messages at this time.</p>');
			$("#slideupPreview").css("display","none");
					$("#ModelScreenPreview").css("display","none");
					$("#fullScreenLandscapeTablet").css("display","none");
					$("#fullScreenLandscapePhone").css("display","none");
					$("#fullScreenPortraitPhone").css('display','none');
					$("#fullScreenPortraitTablet").css("display","none");
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
	//alert(jsonString);
	//console.log(jsonString); return false;
	$('.modal').modal('hide');
	$(".campaign-loader").css('display','block');
	$.ajax({

		type: "POST",
        url: baseurl + 'inAppMessaging/saveInApp',
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
        	//alert(data); return false;
        	if(data != ''){

        		$(".campaign-loader").css('display','none');
        		if(androidCampaign["campaignId"] != ''){
        			window.parent.location.href =  baseurl+"appUser/editInAppMessaging/"+androidCampaign["campaignId"];
        		}else{
        			window.parent.location.href =  baseurl+"appUser/inAppMessaging";
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

	var validation = [];
	var baseurl = $("#baseurl").val();
	var selectedPlatform = $("#selectedPlatform").val();
	var groupId = $("#groupId").val();
	var campaignId = $("#campaignId").val();
	var campaignName = $("#campaignName").val();
	var campaignPersonaUser = $("#campaignPersonaUser").val();
        var campaignList = $("#campaignLists").val();
	var message_category = $("#message_category").val();
	var message_type = $('input[name="MsgTypeRadio"]:checked').val();
	var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only

  	var fontawesome_icon = '';
        var fontawesome_icon_img = '';
        var fontawesome_backgroundColor = '';
        var fontawesome_background_opacity = '';
        var fontawesome_iconColor = '';
        var fontawesome_iconColor_opacity = '';
        var imageUpload = $("#imageUpload").val();
        
        var automation = 0;

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var layout = $('input[name="layout"]:checked').val();
	}else{
		var layout = '';
	}

	if(message_type == 'FullScreen'){
		var device_orientation = $('input[name="deviceOrentation"]:checked').val();
		var device_type = $("#device_type").val();

	}else{
		var device_orientation = '';
		var device_type = '';
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
//    		$("#error_campaignName").text("");
//    		$("#campaignName").css('border-color', '#ccc');
//    		validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var header = $(".full_screen_header").val();
		var header_text_color = $(".fullScreen_headerColor").val();
		var header_text_opacity = $(".header_text_opacity").val();
		var text_alignment = $('input[name="Alignment"]:checked').val();
		var closing_button_background_color = $(".fullScreen_closeButtonColor").val();
		var closing_button_background_color_opacity = $(".close_button_opacity").val();
		if(header == ''){
			$(".error_header").text("Please enter Header text");
			$(".full_screen_header").css('border-color', '#424141');
			validation['header'] = 0;
		}else{
			$(".error_header").text("");
			$(".full_screen_header").css('border-color', '#ccc');
			validation['header'] = 1;
		}
	}else{
		var header = '';
		var header_text_color = '';
		var header_text_opacity = '';
		var text_alignment = '';
		var closing_button_background_color = '';
		var closing_button_background_color_opacity = '';
		validation['header'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal' || message_type == 'slideup'){

		var body = $(".full_screen_body").val();
		var body_text_color = $(".fullScreen_textColor").val();
		var body_text_opacity = $(".body_text_opacity").val();
		var background_color = $(".background_color").val();
		var background_color_opacity = $(".background_opacity").val();
		var message_close = $(".message_close").val();

		if(body == ''){
			$(".error_body").text("Please enter Body text");
			$(".full_screen_body").css('border-color', '#424141');
			validation['body'] = 0;
		}else{
			$(".error_body").text("");
			$(".full_screen_body").css('border-color', '#ccc');
			validation['body'] = 1;
		}
	}else{

		var body = '';
		var body_text_color = '';
		var body_text_opacity = '';
		var background_color = '';
		var background_color_opacity = '';
		var message_close = '';
		validation['body'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var button1_text = $(".full_screen_button1").val();
		var button2_text = $(".full_screen_button2").val();
		var frame_color = $(".frame_color").val();
		var frame_color_opacity = $(".frame_color_opacity").val();
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

		if(button1_text != '' || (button1_text == '' && button2_text == '')){
		var button1_customUrl = $(".button1_behavior").val();
		var button1_background_color = $(".button1_backgroundColor").val();
		var button1_background_color_opacity = $(".button1_background_opacity").val();
		var button1_text_color = $(".button1_textColor").val();
		var button1_text_color_opacity = $(".button1_text_opacity").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}else{
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
	}

		if(button2_text != ''){
			var button2_customUrl = $(".button2_behavior").val();
			var button2_background_color = $(".button2_backgroundColor").val();
			var button2_background_color_opacity = $(".button2_background_opacity").val();button2_text_color
			var button2_text_color = $(".button2_textColor").val();
			var button2_text_color_opacity = $(".button2_text_opacity").val();
			if(button2_customUrl == 'Redirect to Web URL' || button2_customUrl == 'Deep link into App'){
				var button2_redirectUrl = $(".button2_redirect_url").val();

				if($.trim(button2_redirectUrl) == ''){
				$(".error_button2_redirect_url").text("Please enter Web URL");
				$(".button2_redirect_url").css('border-color', '#424141');
				validation['button2_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button2_redirectUrl) == false){
					$(".error_button2_redirect_url").text("Please enter valid Web URL");
					$(".button2_redirect_url").css('border-color', '#424141');
					validation['button2_redirectUrl'] = 0;
				}else{
					$(".error_button2_redirect_url").text("");
					$(".button2_redirect_url").css('border-color', '#ccc');
					validation['button2_redirectUrl'] = 1;
				}
			}

			}else{
				var button2_redirectUrl = '';
				validation['button2_redirectUrl'] = 1;
			}

		}else{
			var button2_customUrl = '';
			var button2_redirectUrl = '';
			var button2_background_color = '';
			var button2_background_color_opacity = '';
			var button2_text_color = '';
			var button2_text_color_opacity = '';
		}

	}else{
		var button1_text = '';
		var button2_text = '';
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
		var button2_customUrl = '';
		var button2_redirectUrl = '';
		var button2_background_color = '';
		var button2_background_color_opacity = '';
		var button2_text_color = '';
		var button2_text_color_opacity = '';
		var frame_color = '';
		var frame_color_opacity = '';
	}

	if(message_type == 'slideup'){
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
		var button1_customUrl = $(".button1_behavior").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		if(button1_text == '' && button2_text == ''){
			var on_click_behavior = 'message';
		}else{
			var on_click_behavior = 'button';
		}
	}
	if(message_type == 'slideup'){
		var on_click_behavior = 'message';
	}
	if(message_type == 'customhtml'){
		var on_click_behavior = '';
	}

	if(message_type == 'slideup'){
		var slide_up_position = $("#slide_up_position").val();
		var chevron_color = $("#chevron_color").val();
		var chevron_color_opacity = $("#chevron_opacity").val();
	}else{
		var slide_up_position = '';
		var chevron_color = '';
		var chevron_color_opacity = '';
	}

	if(message_type == 'customhtml'){

		var custom_html = $("#custom_html").val();
		var image_type = '';
		var image = '';
		var image_url = '';
		if(custom_html == ''){

			$("#custom_html").css('border-color', '#424141');
			$("#error_customHtml").text('Please enter HTML code');
			validation['custom_html'] = 0;
		}else{
			//var str2 = '<a href="hurree://close">Close</a>';
			//if(custom_html.indexOf(str2) != -1){
    			$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','none');
				$("#close_tag").css('display','none');
				validation['custom_html'] = 1;
			//}
			/*else{
				$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','block');
				$("#close_tag").css('display','block');
				validation['custom_html'] = 0;
			}*/

		}
	}else{
			var custom_html = '';
			validation['custom_html'] = 1;
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

    	var image = $('#inapp_image').val();
		var image_url = $("#image_url").val();

    	if(message_type == 'FullScreen'){
    		var image_type = 'own';
    		if(imageUpload == '0'){
	    		if(image == '' && image_url == ''){
	    			if(message_type == 'FullScreen'){
					$("#editrihtTab").removeClass('active');
					$("#drawingTab").addClass('active');
					$(".error_image").text('Please add image');
					errorResult = 0;
				}
				else if(image != '' || image_url == ''){
				$(".error_image").text('');
				errorResult = -1;
				}
				else if(image == '' || image_url != ''){
					$(".error_image").text('');
					errorResult = -1;
				}

				var fontawesome_icon = '';
        var fontawesome_icon_img = '';
	    		var fontawesome_backgroundColor = '';
	    		var fontawesome_background_opacity = '';
	    		var fontawesome_iconColor = '';
	    		var fontawesome_iconColor_opacity = '';

	    		}
	    	}else{
	    		errorResult = -1;
	    	}
    	}
    	if(message_type == 'modal' || message_type == 'slideup'){
    		//pickImageType1
    		//$('#include_image').prop('checked', true);
    		//$("#include_image1").prop('checked', true);
    		//$("#image_upload_input").css('display','block');
    		//$("#image_upload_input1").css('display','block');
    		//$(".fontawesomeSection1").css('display','block');
    		//alert($("#include_image").is(':checked'));
    		if(message_type == 'modal'){
    			if($("#include_image").is(':checked') == true){
    			var image_type = $('.pickImageType:checked').val();
    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
    				var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    				if(imageUpload == '0'){
	    				if(image == '' && image_url == ''){

						$(".fontawesomeSection1").css('display','none');
						$("#editrihtTabModelScreen").removeClass('active');
						$("#drawingTabModelScreen").addClass('active');
						$(".error_image").text('Please add image');
						errorResult = 0;

						}

						else if(image != '' || image_url == ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
						else if(image == '' || image_url != ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
					}else{
						errorResult = -1;
					}
    			}
    		}else{
    			$("#editrihtTabModelScreen").removeClass('active');
    			$("#drawingTabModelScreen").addClass('active');
    			$("#model_image_error").text('Please add image');
    			errorResult = 0;
    		}
    		}

    		if(message_type == 'slideup'){
    			if($("#include_image1").is(':checked') == true){
    			var image_type = $('.pickImageType1:checked').val();

    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
    				var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    					if(imageUpload == '0'){
	    					if(image == '' && image_url == ''){

	    						$(".fontawesomeSection1").css('display','none');
	    						$("#editrihtTabSlidupScreen").removeClass('active');
								$("#drawingTabSlidupScreen").addClass('active');
								$(".error_image").text('Please add image');
								errorResult = 0;
	    					}
	    					else if(image != '' || image_url == ''){
								$(".fontawesomeSection1").css('display','none');
								$(".error_image").text('');
								errorResult = -1;
							}
							else if(image == '' || image_url != ''){
								$(".fontawesomeSection1").css('display','none');
								$(".error_image").text('');
								errorResult = -1;
							}
						}else{
							errorResult = -1;
						}
    			}
    		}else{
    				$("#editrihtTabSlidupScreen").removeClass('active');
    				$("#drawingTabSlidupScreen").addClass('active');
    				$("#slideup_image_error").text('Please add image');
    				errorResult = 0;
    		}

    	}

		}
	}
	if(errorResult == -1){
		composeDraft["groupId"] = groupId;
		composeDraft["campaignId"] = campaignId;
		composeDraft["campaignName"] = campaignName;
		composeDraft["campaignPersonaUser"] = campaignPersonaUser;
                composeDraft["campaignList"] = campaignList;
		composeDraft["message_category"] = message_category;
                composeDraft['automation'] = automation;
		composeDraft["message_type"] = message_type;
		composeDraft["device_orientation"] = device_orientation ;
		composeDraft["device_type"] = device_type ;
		composeDraft["layout"] = layout;
		composeDraft["header"] = header;
		composeDraft["header_text_color"] = header_text_color;
		composeDraft["header_text_opacity"] = header_text_opacity;
		composeDraft["text_alignment"] = text_alignment;
		composeDraft["closing_button_background_color"] = closing_button_background_color;
		composeDraft["closing_button_background_color_opacity"] = closing_button_background_color_opacity;
		composeDraft["body"] = body;
		composeDraft["body_text_color"] = body_text_color;
		composeDraft["body_text_opacity"] = body_text_opacity;
		composeDraft["background_color"] = background_color;
		composeDraft["background_color_opacity"] = background_color_opacity;
		composeDraft["message_close"] = message_close;
		composeDraft["button1_text"] = button1_text;
		composeDraft["button2_text"] = button2_text;
		composeDraft["button1_customUrl"] = button1_customUrl;
		composeDraft["button1_redirectUrl"] = button1_redirectUrl;
		composeDraft["button1_background_color"] = button1_background_color;
		composeDraft["button1_background_color_opacity"] = button1_background_color_opacity;
		composeDraft["button1_text_color"] = button1_text_color;
		composeDraft["button1_text_color_opacity"] = button1_text_color_opacity;
		composeDraft["button2_customUrl"] = button2_customUrl;
		composeDraft["button2_redirectUrl"] = button2_redirectUrl;
		composeDraft["button2_background_color"] = button2_background_color;
		composeDraft["button2_background_color_opacity"] = button2_background_color_opacity;
		composeDraft["button2_text_color"] = button2_text_color;
		composeDraft["button2_text_color_opacity"] = button2_text_color_opacity;
		composeDraft["frame_color"] = frame_color;
		composeDraft["frame_color_opacity"] = frame_color_opacity;
		composeDraft["on_click_behavior"] = on_click_behavior;
		composeDraft["slide_up_position"] = slide_up_position;
		composeDraft["chevron_color"] = chevron_color;
		composeDraft["chevron_color_opacity"] = chevron_color_opacity;
		composeDraft["custom_html"] = custom_html;
		composeDraft["image_type"] = image_type;
		composeDraft["image"] = image;
		composeDraft["image_url"] = image_url;
		composeDraft["fontawesome_icon"] = fontawesome_icon;
		composeDraft["fontawesome_icon_img"] = fontawesome_icon_img;
    	composeDraft["fontawesome_background_color"] = fontawesome_backgroundColor;
    	composeDraft["fontawesome_background_opacity"] = fontawesome_background_opacity;
    	composeDraft["fontawesome_icon_color"] = fontawesome_iconColor;
    	composeDraft["fontawesome_icon_color_opacity"] = fontawesome_iconColor_opacity;

    	jsonComposeObj.push(composeDraft);
 		jsonString = JSON.stringify(jsonComposeObj);

	 	$(".campaign-loader").css('display','block');
	 	$.ajax({

	 		type: "POST",
	         url: baseurl + 'inAppMessaging/saveComposeAsDraft',
	         data: jsonString,
	         contentType: "application/json; charset=utf-8",
	         dataType: "json",
	         success: function(data){
	         	if(data == 1){
	         	$(".campaign-loader").css('display','none');
	         	window.parent.location.href =  baseurl+"appUser/inAppMessaging";

	         	}
	         }

	 	});

	}
 }

jsonDeliveryObj = [];
deliveryDraft = {};
function saveDeliveryAsDraft(){

		var baseurl = $("#baseurl").val();
		deliveryDraft["groupId"] = androidCampaign["groupId"];
		deliveryDraft["campaignId"] = androidCampaign["campaignId"];
		deliveryDraft["campaignName"] = androidCampaign["campaignName"];
		deliveryDraft["campaignPersonaUser"] = androidCampaign["campaignPersonaUser"];
                deliveryDraft["campaignList"] = androidCampaign["campaignList"];
		deliveryDraft["message_category"] = androidCampaign["message_category"];
                deliveryDraft["automation"] = androidCampaign['automation'];
		deliveryDraft["message_type"] = androidCampaign["message_type"];
		deliveryDraft["device_orientation"] = androidCampaign["device_orientation"];
		deliveryDraft["device_type"] = androidCampaign["device_type"];
		deliveryDraft["layout"] = androidCampaign["layout"];
		deliveryDraft["header"] = androidCampaign["header"];
		deliveryDraft["header_text_color"] = androidCampaign["header_text_color"];
		deliveryDraft["header_text_opacity"] = androidCampaign["header_text_opacity"];
		deliveryDraft["text_alignment"] = androidCampaign["text_alignment"];
		deliveryDraft["closing_button_background_color"] = androidCampaign["closing_button_background_color"];
		deliveryDraft["closing_button_background_color_opacity"] = androidCampaign["closing_button_background_color_opacity"];
		deliveryDraft["body"] = androidCampaign["body"];
		deliveryDraft["body_text_color"] = androidCampaign["body_text_color"];
		deliveryDraft["body_text_opacity"] = androidCampaign["body_text_opacity"];
		deliveryDraft["background_color"] = androidCampaign["background_color"];
		deliveryDraft["background_color_opacity"] = androidCampaign["background_color_opacity"];
		deliveryDraft["message_close"] = androidCampaign["message_close"];
		deliveryDraft["button1_text"] = androidCampaign["button1_text"];
		deliveryDraft["button2_text"] = androidCampaign["button2_text"];
		deliveryDraft["button1_customUrl"] = androidCampaign["button1_customUrl"];
		deliveryDraft["button1_redirectUrl"] = androidCampaign["button1_redirectUrl"];
		deliveryDraft["button1_background_color"] = androidCampaign["button1_background_color"];
		deliveryDraft["button1_background_color_opacity"] = androidCampaign["button1_background_color_opacity"];
		deliveryDraft["button1_text_color"] = androidCampaign["button1_text_color"];
		deliveryDraft["button1_text_color_opacity"] = androidCampaign["button1_text_color_opacity"];
		deliveryDraft["button2_customUrl"] = androidCampaign["button2_customUrl"];
		deliveryDraft["button2_redirectUrl"] = androidCampaign["button2_redirectUrl"];
		deliveryDraft["button2_background_color"] = androidCampaign["button2_background_color"];
		deliveryDraft["button2_background_color_opacity"] = androidCampaign["button2_background_color_opacity"];
		deliveryDraft["button2_text_color"] = androidCampaign["button2_text_color"];
		deliveryDraft["button2_text_color_opacity"] = androidCampaign["button2_text_color_opacity"];
		deliveryDraft["frame_color"] = androidCampaign["frame_color"];
		deliveryDraft["frame_color_opacity"] = androidCampaign["frame_color_opacity"];
		deliveryDraft["on_click_behavior"] = androidCampaign["on_click_behavior"];
		deliveryDraft["slide_up_position"] = androidCampaign["slide_up_position"];
		deliveryDraft["chevron_color"] = androidCampaign["chevron_color"];
		deliveryDraft["chevron_color_opacity"] = androidCampaign["chevron_color_opacity"];
		deliveryDraft["custom_html"] = androidCampaign["custom_html"];
		deliveryDraft["image_type"] = androidCampaign["image_type"];
		deliveryDraft["image"] = androidCampaign["image"];
		deliveryDraft["image_url"] = androidCampaign["image_url"];
		deliveryDraft["fontawesome_icon"] = androidCampaign["fontawesome_icon"];
                deliveryDraft["fontawesome_icon_img"] = androidCampaign["fontawesome_icon_img"];
                deliveryDraft["fontawesome_background_color"] = androidCampaign["fontawesome_background_color"];
                deliveryDraft["fontawesome_background_opacity"] = androidCampaign["fontawesome_background_opacity"];
                deliveryDraft["fontawesome_icon_color"] = androidCampaign["fontawesome_icon_color"];
                deliveryDraft["fontawesome_icon_color_opacity"] = androidCampaign["fontawesome_icon_color_opacity"];

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
		    	if(deliveryType == 2){
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


		    	jsonDeliveryObj.push(deliveryDraft);
			 	jsonString = JSON.stringify(jsonDeliveryObj);
                                //console.log(jsonString); return false;
			 	$(".campaign-loader").css('display','block');
			 	$.ajax({

			 		type: "POST",
			         url: baseurl + 'inAppMessaging/saveDeliveryAsDraft',
			         data: jsonString,
			         contentType: "application/json; charset=utf-8",
			         dataType: "json",
			         success: function(data){
			         	if(data == 1){
			         	$(".campaign-loader").css('display','none');
			         	window.parent.location.href =  baseurl+"appUser/inAppMessaging";

			         	}
			         }

			 	});
		    /*}else{
		    	return false;
		    }	*/


		}


}

jsonTargetObj = [];
targetDraft = {};
function saveTargetAsDraft(){

		var baseurl = $("#baseurl").val();
		targetDraft["groupId"] = androidCampaign["groupId"];
		targetDraft["campaignId"] = androidCampaign["campaignId"];
		targetDraft["campaignName"] = androidCampaign["campaignName"];
		targetDraft["campaignPersonaUser"] = androidCampaign["campaignPersonaUser"];
                targetDraft["campaignList"] = androidCampaign["campaignList"];
		targetDraft["message_category"] = androidCampaign["message_category"];
                targetDraft["automation"] = androidCampaign['automation'];
		targetDraft["message_type"] = androidCampaign["message_type"];
		targetDraft["device_orientation"] = androidCampaign["device_orientation"];
		targetDraft["device_type"] = androidCampaign["device_type"];
		targetDraft["layout"] = androidCampaign["layout"];
		targetDraft["header"] = androidCampaign["header"];
		targetDraft["header_text_color"] = androidCampaign["header_text_color"];
		targetDraft["header_text_opacity"] = androidCampaign["header_text_opacity"];
		targetDraft["text_alignment"] = androidCampaign["text_alignment"];
		targetDraft["closing_button_background_color"] = androidCampaign["closing_button_background_color"];
		targetDraft["closing_button_background_color_opacity"] = androidCampaign["closing_button_background_color_opacity"];
		targetDraft["body"] = androidCampaign["body"];
		targetDraft["body_text_color"] = androidCampaign["body_text_color"];
		targetDraft["body_text_opacity"] = androidCampaign["body_text_opacity"];
		targetDraft["background_color"] = androidCampaign["background_color"];
		targetDraft["background_color_opacity"] = androidCampaign["background_color_opacity"];
		targetDraft["message_close"] = androidCampaign["message_close"];
		targetDraft["button1_text"] = androidCampaign["button1_text"];
		targetDraft["button2_text"] = androidCampaign["button2_text"];
		targetDraft["button1_customUrl"] = androidCampaign["button1_customUrl"];
		targetDraft["button1_redirectUrl"] = androidCampaign["button1_redirectUrl"];
		targetDraft["button1_background_color"] = androidCampaign["button1_background_color"];
		targetDraft["button1_background_color_opacity"] = androidCampaign["button1_background_color_opacity"];
		targetDraft["button1_text_color"] = androidCampaign["button1_text_color"];
		targetDraft["button1_text_color_opacity"] = androidCampaign["button1_text_color_opacity"];
		targetDraft["button2_customUrl"] = androidCampaign["button2_customUrl"];
		targetDraft["button2_redirectUrl"] = androidCampaign["button2_redirectUrl"];
		targetDraft["button2_background_color"] = androidCampaign["button2_background_color"];
		targetDraft["button2_background_color_opacity"] = androidCampaign["button2_background_color_opacity"];
		targetDraft["button2_text_color"] = androidCampaign["button2_text_color"];
		targetDraft["button2_text_color_opacity"] = androidCampaign["button2_text_color_opacity"];
		targetDraft["frame_color"] = androidCampaign["frame_color"];
		targetDraft["frame_color_opacity"] = androidCampaign["frame_color_opacity"];
		targetDraft["on_click_behavior"] = androidCampaign["on_click_behavior"];
		targetDraft["slide_up_position"] = androidCampaign["slide_up_position"];
		targetDraft["chevron_color"] = androidCampaign["chevron_color"];
		targetDraft["chevron_color_opacity"] = androidCampaign["chevron_color_opacity"];
		targetDraft["custom_html"] = androidCampaign["custom_html"];
		targetDraft["image_type"] = androidCampaign["image_type"];
		targetDraft["image"] = androidCampaign["image"];
		targetDraft["image_url"] = androidCampaign["image_url"];
		targetDraft["fontawesome_icon"] = androidCampaign["fontawesome_icon"];
                targetDraft["fontawesome_icon_img"] = androidCampaign["fontawesome_icon_img"];
    	targetDraft["fontawesome_background_color"] = androidCampaign["fontawesome_background_color"];
    	targetDraft["fontawesome_background_opacity"] = androidCampaign["fontawesome_background_opacity"];
    	targetDraft["fontawesome_icon_color"] = androidCampaign["fontawesome_icon_color"];
    	targetDraft["fontawesome_icon_color_opacity"] = androidCampaign["fontawesome_icon_color_opacity"];

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

		    	if(deliveryType == 2){
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
			         url: baseurl + 'inAppMessaging/saveTargetAsDraft',
			         data: jsonString,
			         contentType: "application/json; charset=utf-8",
			         dataType: "json",
			         success: function(data){
			         	if(data == 1){
			         	$(".campaign-loader").css('display','none');
			         	window.parent.location.href =  baseurl+"appUser/inAppMessaging";
			         	}
			         }

			 	});

}

function saveConfirmAsDraft(){

	var baseurl = $("#baseurl").val();

	jsonObj.push(androidCampaign);
	jsonString = JSON.stringify(jsonObj);

	$(".campaign-loader").css('display','block');
	$.ajax({

		type: "POST",
        url: baseurl + 'inAppMessaging/saveInAppMessagingDraft',
        data: jsonString,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
        	if(data == 1){
        	$(".campaign-loader").css('display','none');
        	window.parent.location.href =  baseurl+"appUser/inAppMessaging";
        	}
        }
	});

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
            url: baseurl + 'inAppMessaging/inAppListPagination',
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

function DeleteCampaign(id){
	 var baseurl = $("#baseurl").val();
     //alert(id); return false;
     $.ajax({
         type: "POST",
         url: baseurl + 'inAppMessaging/deleteInApp/',
         data:"id="+id,
         context: document.body,
         async: true,
         success: function(data) {
        	 //alert(data); return false;
             if(data == 1){

            		 window.parent.location.href =  baseurl+"appUser/inAppMessaging";


             }
         }
     });
}

jsonAutomationObj = [];
automationCampaign = {};

$('input[name="automation"]').click(function(){
    if($('input[name="automation"]:checked').val() == 1){
        var validation = [];
	var baseurl = $("#baseurl").val();
	var selectedPlatform = $("#selectedPlatform").val();
	var groupId = $("#groupId").val();
	var campaignId = $("#campaignId").val();
	var campaignName = $("#campaignName").val();
	var campaignPersonaUser = $("#campaignPersonaUser").val();
        var campaignList = $("#campaignLists").val();
	var message_category = $("#message_category").val();
	var message_type = $('input[name="MsgTypeRadio"]:checked').val();
	var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only

  	var fontawesome_icon = '';
        var fontawesome_icon_img = '';
        var fontawesome_backgroundColor = '';
        var fontawesome_background_opacity = '';
        var fontawesome_iconColor = '';
        var fontawesome_iconColor_opacity = '';
        var imageUpload = $("#imageUpload").val();
        
        var automation = 0;

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var layout = $('input[name="layout"]:checked').val();
	}else{
		var layout = '';
	}

	if(message_type == 'FullScreen'){
		var device_orientation = $('input[name="deviceOrentation"]:checked').val();
		var device_type = $("#device_type").val();

	}else{
		var device_orientation = '';
		var device_type = '';
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
//    		$("#error_campaignName").text("");
//    		$("#campaignName").css('border-color', '#ccc');
//    		validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var header = $(".full_screen_header").val();
		var header_text_color = $(".fullScreen_headerColor").val();
		var header_text_opacity = $(".header_text_opacity").val();
		var text_alignment = $('input[name="Alignment"]:checked').val();
		var closing_button_background_color = $(".fullScreen_closeButtonColor").val();
		var closing_button_background_color_opacity = $(".close_button_opacity").val();
		if(header == ''){
			$(".error_header").text("Please enter Header text");
			$(".full_screen_header").css('border-color', '#424141');
			validation['header'] = 0;
		}else{
			$(".error_header").text("");
			$(".full_screen_header").css('border-color', '#ccc');
			validation['header'] = 1;
		}
	}else{
		var header = '';
		var header_text_color = '';
		var header_text_opacity = '';
		var text_alignment = '';
		var closing_button_background_color = '';
		var closing_button_background_color_opacity = '';
		validation['header'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal' || message_type == 'slideup'){

		var body = $(".full_screen_body").val();
		var body_text_color = $(".fullScreen_textColor").val();
		var body_text_opacity = $(".body_text_opacity").val();
		var background_color = $(".background_color").val();
		var background_color_opacity = $(".background_opacity").val();
		var message_close = $(".message_close").val();

		if(body == ''){
			$(".error_body").text("Please enter Body text");
			$(".full_screen_body").css('border-color', '#424141');
			validation['body'] = 0;
		}else{
			$(".error_body").text("");
			$(".full_screen_body").css('border-color', '#ccc');
			validation['body'] = 1;
		}
	}else{

		var body = '';
		var body_text_color = '';
		var body_text_opacity = '';
		var background_color = '';
		var background_color_opacity = '';
		var message_close = '';
		validation['body'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var button1_text = $(".full_screen_button1").val();
		var button2_text = $(".full_screen_button2").val();
		var frame_color = $(".frame_color").val();
		var frame_color_opacity = $(".frame_color_opacity").val();
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

		if(button1_text != '' || (button1_text == '' && button2_text == '')){
		var button1_customUrl = $(".button1_behavior").val();
		var button1_background_color = $(".button1_backgroundColor").val();
		var button1_background_color_opacity = $(".button1_background_opacity").val();
		var button1_text_color = $(".button1_textColor").val();
		var button1_text_color_opacity = $(".button1_text_opacity").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}else{
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
	}

		if(button2_text != ''){
			var button2_customUrl = $(".button2_behavior").val();
			var button2_background_color = $(".button2_backgroundColor").val();
			var button2_background_color_opacity = $(".button2_background_opacity").val();button2_text_color
			var button2_text_color = $(".button2_textColor").val();
			var button2_text_color_opacity = $(".button2_text_opacity").val();
			if(button2_customUrl == 'Redirect to Web URL' || button2_customUrl == 'Deep link into App'){
				var button2_redirectUrl = $(".button2_redirect_url").val();

				if($.trim(button2_redirectUrl) == ''){
				$(".error_button2_redirect_url").text("Please enter Web URL");
				$(".button2_redirect_url").css('border-color', '#424141');
				validation['button2_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button2_redirectUrl) == false){
					$(".error_button2_redirect_url").text("Please enter valid Web URL");
					$(".button2_redirect_url").css('border-color', '#424141');
					validation['button2_redirectUrl'] = 0;
				}else{
					$(".error_button2_redirect_url").text("");
					$(".button2_redirect_url").css('border-color', '#ccc');
					validation['button2_redirectUrl'] = 1;
				}
			}

			}else{
				var button2_redirectUrl = '';
				validation['button2_redirectUrl'] = 1;
			}

		}else{
			var button2_customUrl = '';
			var button2_redirectUrl = '';
			var button2_background_color = '';
			var button2_background_color_opacity = '';
			var button2_text_color = '';
			var button2_text_color_opacity = '';
		}

	}else{
		var button1_text = '';
		var button2_text = '';
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
		var button2_customUrl = '';
		var button2_redirectUrl = '';
		var button2_background_color = '';
		var button2_background_color_opacity = '';
		var button2_text_color = '';
		var button2_text_color_opacity = '';
		var frame_color = '';
		var frame_color_opacity = '';
	}

	if(message_type == 'slideup'){
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
		var button1_customUrl = $(".button1_behavior").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		if(button1_text == '' && button2_text == ''){
			var on_click_behavior = 'message';
		}else{
			var on_click_behavior = 'button';
		}
	}
	if(message_type == 'slideup'){
		var on_click_behavior = 'message';
	}
	if(message_type == 'customhtml'){
		var on_click_behavior = '';
	}

	if(message_type == 'slideup'){
		var slide_up_position = $("#slide_up_position").val();
		var chevron_color = $("#chevron_color").val();
		var chevron_color_opacity = $("#chevron_opacity").val();
	}else{
		var slide_up_position = '';
		var chevron_color = '';
		var chevron_color_opacity = '';
	}

	if(message_type == 'customhtml'){

		var custom_html = $("#custom_html").val();
		var image_type = '';
		var image = '';
		var image_url = '';
		if(custom_html == ''){

			$("#custom_html").css('border-color', '#424141');
			$("#error_customHtml").text('Please enter HTML code');
			validation['custom_html'] = 0;
		}else{
			var str2 = '< a href="hurree://close" > Close < /a>';
			if(custom_html.indexOf(str2) != -1){
    			$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','none');
				$("#close_tag").css('display','none');
				validation['custom_html'] = 1;
			}else{
				$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','block');
				$("#close_tag").css('display','block');
				validation['custom_html'] = 0;
			}

		}
	}else{
			var custom_html = '';
			validation['custom_html'] = 1;
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

    	var image = $('#inapp_image').val();
		var image_url = $("#image_url").val();

    	if(message_type == 'FullScreen'){
    		var image_type = 'own';
    		if(imageUpload == '0'){
	    		if(image == '' && image_url == ''){
	    			if(message_type == 'FullScreen'){
					$("#editrihtTab").removeClass('active');
					$("#drawingTab").addClass('active');
					$(".error_image").text('Please add image');
					errorResult = 0;
				}
				else if(image != '' || image_url == ''){
				$(".error_image").text('');
				errorResult = -1;
				}
				else if(image == '' || image_url != ''){
					$(".error_image").text('');
					errorResult = -1;
				}

				var fontawesome_icon = '';
        var fontawesome_icon_img = '';
	    		var fontawesome_backgroundColor = '';
	    		var fontawesome_background_opacity = '';
	    		var fontawesome_iconColor = '';
	    		var fontawesome_iconColor_opacity = '';

	    		}
	    	}else{
	    		errorResult = -1;
	    	}
    	}
    	if(message_type == 'modal' || message_type == 'slideup'){
    		//pickImageType1
    		//$('#include_image').prop('checked', true);
    		//$("#include_image1").prop('checked', true);
    		//$("#image_upload_input").css('display','block');
    		//$("#image_upload_input1").css('display','block');
    		//$(".fontawesomeSection1").css('display','block');
    		//alert($("#include_image").is(':checked'));
    		if(message_type == 'modal'){
    			if($("#include_image").is(':checked') == true){
    			var image_type = $('.pickImageType:checked').val();
    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
    				var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    				if(imageUpload == '0'){
	    				if(image == '' && image_url == ''){

						$(".fontawesomeSection1").css('display','none');
						$("#editrihtTabModelScreen").removeClass('active');
						$("#drawingTabModelScreen").addClass('active');
						$(".error_image").text('Please add image');
						errorResult = 0;

						}

						else if(image != '' || image_url == ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
						else if(image == '' || image_url != ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
					}else{
						errorResult = -1;
					}
    			}
    		}else{
    			$("#editrihtTabModelScreen").removeClass('active');
    			$("#drawingTabModelScreen").addClass('active');
    			$("#model_image_error").text('Please add image');
    			errorResult = 0;
    		}
    		}

    		if(message_type == 'slideup'){
    			if($("#include_image1").is(':checked') == true){
    			var image_type = $('.pickImageType1:checked').val();

    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
    				var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    					if(imageUpload == '0'){
	    					if(image == '' && image_url == ''){

	    						$(".fontawesomeSection1").css('display','none');
	    						$("#editrihtTabSlidupScreen").removeClass('active');
								$("#drawingTabSlidupScreen").addClass('active');
								$(".error_image").text('Please add image');
								errorResult = 0;
	    					}
	    					else if(image != '' || image_url == ''){
								$(".fontawesomeSection1").css('display','none');
								$(".error_image").text('');
								errorResult = -1;
							}
							else if(image == '' || image_url != ''){
								$(".fontawesomeSection1").css('display','none');
								$(".error_image").text('');
								errorResult = -1;
							}
						}else{
							errorResult = -1;
						}
    			}
    		}else{
    				$("#editrihtTabSlidupScreen").removeClass('active');
    				$("#drawingTabSlidupScreen").addClass('active');
    				$("#slideup_image_error").text('Please add image');
    				errorResult = 0;
    		}

    	}

		}
	}
	if(errorResult == -1){
		automationCampaign["groupId"] = groupId;
		automationCampaign["campaignId"] = campaignId;
		automationCampaign["campaignName"] = campaignName;
		automationCampaign["campaignPersonaUser"] = campaignPersonaUser;
                automationCampaign["campaignList"] = campaignList;
		automationCampaign["message_category"] = message_category;
                automationCampaign['automation'] = 1;
		automationCampaign["message_type"] = message_type;
		automationCampaign["device_orientation"] = device_orientation ;
		automationCampaign["device_type"] = device_type ;
		automationCampaign["layout"] = layout;
		automationCampaign["header"] = header;
		automationCampaign["header_text_color"] = header_text_color;
		automationCampaign["header_text_opacity"] = header_text_opacity;
		automationCampaign["text_alignment"] = text_alignment;
		automationCampaign["closing_button_background_color"] = closing_button_background_color;
		automationCampaign["closing_button_background_color_opacity"] = closing_button_background_color_opacity;
		automationCampaign["body"] = body;
		automationCampaign["body_text_color"] = body_text_color;
		automationCampaign["body_text_opacity"] = body_text_opacity;
		automationCampaign["background_color"] = background_color;
		automationCampaign["background_color_opacity"] = background_color_opacity;
		automationCampaign["message_close"] = message_close;
		automationCampaign["button1_text"] = button1_text;
		automationCampaign["button2_text"] = button2_text;
		automationCampaign["button1_customUrl"] = button1_customUrl;
		automationCampaign["button1_redirectUrl"] = button1_redirectUrl;
		automationCampaign["button1_background_color"] = button1_background_color;
		automationCampaign["button1_background_color_opacity"] = button1_background_color_opacity;
		automationCampaign["button1_text_color"] = button1_text_color;
		automationCampaign["button1_text_color_opacity"] = button1_text_color_opacity;
		automationCampaign["button2_customUrl"] = button2_customUrl;
		automationCampaign["button2_redirectUrl"] = button2_redirectUrl;
		automationCampaign["button2_background_color"] = button2_background_color;
		automationCampaign["button2_background_color_opacity"] = button2_background_color_opacity;
		automationCampaign["button2_text_color"] = button2_text_color;
		automationCampaign["button2_text_color_opacity"] = button2_text_color_opacity;
		automationCampaign["frame_color"] = frame_color;
		automationCampaign["frame_color_opacity"] = frame_color_opacity;
		automationCampaign["on_click_behavior"] = on_click_behavior;
		automationCampaign["slide_up_position"] = slide_up_position;
		automationCampaign["chevron_color"] = chevron_color;
		automationCampaign["chevron_color_opacity"] = chevron_color_opacity;
		automationCampaign["custom_html"] = custom_html;
		automationCampaign["image_type"] = image_type;
		automationCampaign["image"] = image;
		automationCampaign["image_url"] = image_url;
		automationCampaign["fontawesome_icon"] = fontawesome_icon;
		automationCampaign["fontawesome_icon_img"] = fontawesome_icon_img;
                automationCampaign["fontawesome_background_color"] = fontawesome_backgroundColor;
                automationCampaign["fontawesome_background_opacity"] = fontawesome_background_opacity;
                automationCampaign["fontawesome_icon_color"] = fontawesome_iconColor;
                automationCampaign["fontawesome_icon_color_opacity"] = fontawesome_iconColor_opacity;

                jsonAutomationObj.push(automationCampaign);
 		jsonString = JSON.stringify(jsonAutomationObj);

	 	$(".campaign-loader").css('display','block');
	 	$.ajax({

	 		type: "POST",
	         url: baseurl + 'inAppMessaging/saveAutomation',
	         data: jsonString,
	         contentType: "application/json; charset=utf-8",
	         dataType: "json",
	         success: function(data){
	         	if(data == 1){
	         	$(".campaign-loader").css('display','none');
                        $("#confirmAutomation").trigger('click');
	         	//window.parent.location.href =  baseurl+"appUser/inAppMessaging";

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
    
    var validation = [];
	var baseurl = $("#baseurl").val();
	var selectedPlatform = $("#selectedPlatform").val();
	var groupId = $("#groupId").val();
	var campaignId = $("#campaignId").val();
	var campaignName = $("#campaignName").val();
	var campaignPersonaUser = $("#campaignPersonaUser").val();
        var campaignList = $("#campaignLists").val();
	var message_category = $("#message_category").val();
	var message_type = $('input[name="MsgTypeRadio"]:checked').val();
	var regex = /^[A-Za-z0-9]+$/;  //Alphanumeric only

  	var fontawesome_icon = '';
        var fontawesome_icon_img = '';
        var fontawesome_backgroundColor = '';
        var fontawesome_background_opacity = '';
        var fontawesome_iconColor = '';
        var fontawesome_iconColor_opacity = '';
        var imageUpload = $("#imageUpload").val();
        
        var automation = 0;

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var layout = $('input[name="layout"]:checked').val();
	}else{
		var layout = '';
	}

	if(message_type == 'FullScreen'){
		var device_orientation = $('input[name="deviceOrentation"]:checked').val();
		var device_type = $("#device_type").val();

	}else{
		var device_orientation = '';
		var device_type = '';
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
//    		$("#error_campaignName").text("");
//    		$("#campaignName").css('border-color', '#ccc');
//    		validation['campaignName'] = 1;
//        }else{
//            $("#error_campaignName").text("Special characters are not allow");
//            $("#campaignName").css('border-color', '#424141');
//            validation['campaignName'] = 0;
//        }
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var header = $(".full_screen_header").val();
		var header_text_color = $(".fullScreen_headerColor").val();
		var header_text_opacity = $(".header_text_opacity").val();
		var text_alignment = $('input[name="Alignment"]:checked').val();
		var closing_button_background_color = $(".fullScreen_closeButtonColor").val();
		var closing_button_background_color_opacity = $(".close_button_opacity").val();
		if(header == ''){
			$(".error_header").text("Please enter Header text");
			$(".full_screen_header").css('border-color', '#424141');
			validation['header'] = 0;
		}else{
			$(".error_header").text("");
			$(".full_screen_header").css('border-color', '#ccc');
			validation['header'] = 1;
		}
	}else{
		var header = '';
		var header_text_color = '';
		var header_text_opacity = '';
		var text_alignment = '';
		var closing_button_background_color = '';
		var closing_button_background_color_opacity = '';
		validation['header'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal' || message_type == 'slideup'){

		var body = $(".full_screen_body").val();
		var body_text_color = $(".fullScreen_textColor").val();
		var body_text_opacity = $(".body_text_opacity").val();
		var background_color = $(".background_color").val();
		var background_color_opacity = $(".background_opacity").val();
		var message_close = $(".message_close").val();

		if(body == ''){
			$(".error_body").text("Please enter Body text");
			$(".full_screen_body").css('border-color', '#424141');
			validation['body'] = 0;
		}else{
			$(".error_body").text("");
			$(".full_screen_body").css('border-color', '#ccc');
			validation['body'] = 1;
		}
	}else{

		var body = '';
		var body_text_color = '';
		var body_text_opacity = '';
		var background_color = '';
		var background_color_opacity = '';
		var message_close = '';
		validation['body'] = 1;
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		var button1_text = $(".full_screen_button1").val();
		var button2_text = $(".full_screen_button2").val();
		var frame_color = $(".frame_color").val();
		var frame_color_opacity = $(".frame_color_opacity").val();
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

		if(button1_text != '' || (button1_text == '' && button2_text == '')){
		var button1_customUrl = $(".button1_behavior").val();
		var button1_background_color = $(".button1_backgroundColor").val();
		var button1_background_color_opacity = $(".button1_background_opacity").val();
		var button1_text_color = $(".button1_textColor").val();
		var button1_text_color_opacity = $(".button1_text_opacity").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}else{
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
	}

		if(button2_text != ''){
			var button2_customUrl = $(".button2_behavior").val();
			var button2_background_color = $(".button2_backgroundColor").val();
			var button2_background_color_opacity = $(".button2_background_opacity").val();button2_text_color
			var button2_text_color = $(".button2_textColor").val();
			var button2_text_color_opacity = $(".button2_text_opacity").val();
			if(button2_customUrl == 'Redirect to Web URL' || button2_customUrl == 'Deep link into App'){
				var button2_redirectUrl = $(".button2_redirect_url").val();

				if($.trim(button2_redirectUrl) == ''){
				$(".error_button2_redirect_url").text("Please enter Web URL");
				$(".button2_redirect_url").css('border-color', '#424141');
				validation['button2_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button2_redirectUrl) == false){
					$(".error_button2_redirect_url").text("Please enter valid Web URL");
					$(".button2_redirect_url").css('border-color', '#424141');
					validation['button2_redirectUrl'] = 0;
				}else{
					$(".error_button2_redirect_url").text("");
					$(".button2_redirect_url").css('border-color', '#ccc');
					validation['button2_redirectUrl'] = 1;
				}
			}

			}else{
				var button2_redirectUrl = '';
				validation['button2_redirectUrl'] = 1;
			}

		}else{
			var button2_customUrl = '';
			var button2_redirectUrl = '';
			var button2_background_color = '';
			var button2_background_color_opacity = '';
			var button2_text_color = '';
			var button2_text_color_opacity = '';
		}

	}else{
		var button1_text = '';
		var button2_text = '';
		var button1_customUrl = '';
		var button1_redirectUrl = '';
		var button1_background_color = '';
		var button1_background_color_opacity = '';
		var button1_text_color = '';
		var button1_text_color_opacity = '';
		var button2_customUrl = '';
		var button2_redirectUrl = '';
		var button2_background_color = '';
		var button2_background_color_opacity = '';
		var button2_text_color = '';
		var button2_text_color_opacity = '';
		var frame_color = '';
		var frame_color_opacity = '';
	}

	if(message_type == 'slideup'){
		var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
		var button1_customUrl = $(".button1_behavior").val();
		if(button1_customUrl == 'Redirect to Web URL' || button1_customUrl == 'Deep link into App'){

			var button1_redirectUrl = $(".button1_redirect_url").val();

			if($.trim(button1_redirectUrl) == ''){
				$(".error_button1_redirect_url").text("Please enter Web URL");
				$(".button1_redirect_url").css('border-color', '#424141');
				validation['button1_redirectUrl'] = 0;
			}else{
				if(urlregex.test(button1_redirectUrl) == false){
					$(".error_button1_redirect_url").text("Please enter valid Web URL");
					$(".button1_redirect_url").css('border-color', '#424141');
					validation['button1_redirectUrl'] = 0;
				}else{
					$(".error_button1_redirect_url").text("");
					$(".button1_redirect_url").css('border-color', '#ccc');
					validation['button1_redirectUrl'] = 1;
				}
			}

		}else{
			var button1_redirectUrl = '';
			validation['button1_redirectUrl'] = 1;
		}
	}

	if(message_type == 'FullScreen' || message_type == 'modal'){
		if(button1_text == '' && button2_text == ''){
			var on_click_behavior = 'message';
		}else{
			var on_click_behavior = 'button';
		}
	}
	if(message_type == 'slideup'){
		var on_click_behavior = 'message';
	}
	if(message_type == 'customhtml'){
		var on_click_behavior = '';
	}

	if(message_type == 'slideup'){
		var slide_up_position = $("#slide_up_position").val();
		var chevron_color = $("#chevron_color").val();
		var chevron_color_opacity = $("#chevron_opacity").val();
	}else{
		var slide_up_position = '';
		var chevron_color = '';
		var chevron_color_opacity = '';
	}

	if(message_type == 'customhtml'){

		var custom_html = $("#custom_html").val();
		var image_type = '';
		var image = '';
		var image_url = '';
		if(custom_html == ''){

			$("#custom_html").css('border-color', '#424141');
			$("#error_customHtml").text('Please enter HTML code');
			validation['custom_html'] = 0;
		}else{
			var str2 = '< a href="hurree://close" > Close < /a>';
			if(custom_html.indexOf(str2) != -1){
    			$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','none');
				$("#close_tag").css('display','none');
				validation['custom_html'] = 1;
			}else{
				$("#custom_html").css('border-color', '#ccc');
				$("#error_customHtml").text('');
				$(".text_alert").css('display','block');
				$("#close_tag").css('display','block');
				validation['custom_html'] = 0;
			}

		}
	}else{
			var custom_html = '';
			validation['custom_html'] = 1;
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

    	var image = $('#inapp_image').val();
		var image_url = $("#image_url").val();

    	if(message_type == 'FullScreen'){
    		var image_type = 'own';
    		if(imageUpload == '0'){
	    		if(image == '' && image_url == ''){
	    			if(message_type == 'FullScreen'){
					$("#editrihtTab").removeClass('active');
					$("#drawingTab").addClass('active');
					$(".error_image").text('Please add image');
					errorResult = 0;
				}
				else if(image != '' || image_url == ''){
				$(".error_image").text('');
				errorResult = -1;
				}
				else if(image == '' || image_url != ''){
					$(".error_image").text('');
					errorResult = -1;
				}

				var fontawesome_icon = '';
        var fontawesome_icon_img = '';
	    		var fontawesome_backgroundColor = '';
	    		var fontawesome_background_opacity = '';
	    		var fontawesome_iconColor = '';
	    		var fontawesome_iconColor_opacity = '';

	    		}
	    	}else{
	    		errorResult = -1;
	    	}
    	}
    	if(message_type == 'modal' || message_type == 'slideup'){
    		//pickImageType1
    		//$('#include_image').prop('checked', true);
    		//$("#include_image1").prop('checked', true);
    		//$("#image_upload_input").css('display','block');
    		//$("#image_upload_input1").css('display','block');
    		//$(".fontawesomeSection1").css('display','block');
    		//alert($("#include_image").is(':checked'));
    		if(message_type == 'modal'){
    			if($("#include_image").is(':checked') == true){
    			var image_type = $('.pickImageType:checked').val();
    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
    				var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    				if(imageUpload == '0'){
	    				if(image == '' && image_url == ''){

						$(".fontawesomeSection1").css('display','none');
						$("#editrihtTabModelScreen").removeClass('active');
						$("#drawingTabModelScreen").addClass('active');
						$(".error_image").text('Please add image');
						errorResult = 0;

						}

						else if(image != '' || image_url == ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
						else if(image == '' || image_url != ''){
							$(".fontawesomeSection1").css('display','none');
							$(".error_image").text('');
							errorResult = -1;
						}
					}else{
						errorResult = -1;
					}
    			}
    		}else{
    			$("#editrihtTabModelScreen").removeClass('active');
    			$("#drawingTabModelScreen").addClass('active');
    			$("#model_image_error").text('Please add image');
    			errorResult = 0;
    		}
    		}

    		if(message_type == 'slideup'){
    			if($("#include_image1").is(':checked') == true){
    			var image_type = $('.pickImageType1:checked').val();

    			if(image_type == 'badge'){
            var newData = $(".btn-Convert-Html2Image1").attr("href");
    				var fontawesome_icon = $(".fa-icon-input").val();
            var fontawesome_icon_img = newData;
    				var fontawesome_backgroundColor = $(".fontawesome_backgroundColor").val();
    				var fontawesome_background_opacity = $(".fontawesome_background_opacity").val();
    				var fontawesome_iconColor = $(".fontawesome_iconColor").val();
    				var fontawesome_iconColor_opacity = $(".fontawesome_iconColor_opacity").val();
    				errorResult = -1;
    			}else{
    					if(imageUpload == '0'){
	    					if(image == '' && image_url == ''){

	    						$(".fontawesomeSection1").css('display','none');
	    						$("#editrihtTabSlidupScreen").removeClass('active');
								$("#drawingTabSlidupScreen").addClass('active');
								$(".error_image").text('Please add image');
								errorResult = 0;
	    					}
	    					else if(image != '' || image_url == ''){
								$(".fontawesomeSection1").css('display','none');
								$(".error_image").text('');
								errorResult = -1;
							}
							else if(image == '' || image_url != ''){
								$(".fontawesomeSection1").css('display','none');
								$(".error_image").text('');
								errorResult = -1;
							}
						}else{
							errorResult = -1;
						}
    			}
    		}else{
    				$("#editrihtTabSlidupScreen").removeClass('active');
    				$("#drawingTabSlidupScreen").addClass('active');
    				$("#slideup_image_error").text('Please add image');
    				errorResult = 0;
    		}

    	}

		}
	}
	if(errorResult == -1){
		automationCampaign["groupId"] = groupId;
		automationCampaign["campaignId"] = campaignId;
		automationCampaign["campaignName"] = campaignName;
		automationCampaign["campaignPersonaUser"] = campaignPersonaUser;
                automationCampaign["campaignList"] = campaignList;
		automationCampaign["message_category"] = message_category;
                automationCampaign['automation'] = 1;
		automationCampaign["message_type"] = message_type;
		automationCampaign["device_orientation"] = device_orientation ;
		automationCampaign["device_type"] = device_type ;
		automationCampaign["layout"] = layout;
		automationCampaign["header"] = header;
		automationCampaign["header_text_color"] = header_text_color;
		automationCampaign["header_text_opacity"] = header_text_opacity;
		automationCampaign["text_alignment"] = text_alignment;
		automationCampaign["closing_button_background_color"] = closing_button_background_color;
		automationCampaign["closing_button_background_color_opacity"] = closing_button_background_color_opacity;
		automationCampaign["body"] = body;
		automationCampaign["body_text_color"] = body_text_color;
		automationCampaign["body_text_opacity"] = body_text_opacity;
		automationCampaign["background_color"] = background_color;
		automationCampaign["background_color_opacity"] = background_color_opacity;
		automationCampaign["message_close"] = message_close;
		automationCampaign["button1_text"] = button1_text;
		automationCampaign["button2_text"] = button2_text;
		automationCampaign["button1_customUrl"] = button1_customUrl;
		automationCampaign["button1_redirectUrl"] = button1_redirectUrl;
		automationCampaign["button1_background_color"] = button1_background_color;
		automationCampaign["button1_background_color_opacity"] = button1_background_color_opacity;
		automationCampaign["button1_text_color"] = button1_text_color;
		automationCampaign["button1_text_color_opacity"] = button1_text_color_opacity;
		automationCampaign["button2_customUrl"] = button2_customUrl;
		automationCampaign["button2_redirectUrl"] = button2_redirectUrl;
		automationCampaign["button2_background_color"] = button2_background_color;
		automationCampaign["button2_background_color_opacity"] = button2_background_color_opacity;
		automationCampaign["button2_text_color"] = button2_text_color;
		automationCampaign["button2_text_color_opacity"] = button2_text_color_opacity;
		automationCampaign["frame_color"] = frame_color;
		automationCampaign["frame_color_opacity"] = frame_color_opacity;
		automationCampaign["on_click_behavior"] = on_click_behavior;
		automationCampaign["slide_up_position"] = slide_up_position;
		automationCampaign["chevron_color"] = chevron_color;
		automationCampaign["chevron_color_opacity"] = chevron_color_opacity;
		automationCampaign["custom_html"] = custom_html;
		automationCampaign["image_type"] = image_type;
		automationCampaign["image"] = image;
		automationCampaign["image_url"] = image_url;
		automationCampaign["fontawesome_icon"] = fontawesome_icon;
		automationCampaign["fontawesome_icon_img"] = fontawesome_icon_img;
                automationCampaign["fontawesome_background_color"] = fontawesome_backgroundColor;
                automationCampaign["fontawesome_background_opacity"] = fontawesome_background_opacity;
                automationCampaign["fontawesome_icon_color"] = fontawesome_iconColor;
                automationCampaign["fontawesome_icon_color_opacity"] = fontawesome_iconColor_opacity;

                jsonAutomationObj.push(automationCampaign);
 		jsonString = JSON.stringify(jsonAutomationObj);

	 	$(".campaign-loader").css('display','block');
	 	$.ajax({

	 		type: "POST",
	         url: baseurl + 'inAppMessaging/saveAutomation',
	         data: jsonString,
	         contentType: "application/json; charset=utf-8",
	         dataType: "json",
	         success: function(data){
	         	if(data == 1){
	         	$(".campaign-loader").css('display','none');
                        $("#confirmAutomation").trigger('click');
	         	//window.parent.location.href =  baseurl+"appUser/inAppMessaging";

	         	}
	         }

	 	});

	}else{
            return false;
        }
}
