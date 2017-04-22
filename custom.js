//Custom Form Items
(function($){
var csReset = function(f){var sel=0;$('select', f).each(function(){$('a:eq('+ $(this).data("index") +')',$(".select"+ sel++ +" ul",f)).click();});$(':checkbox', f).each(function(){$(this).data('val') && $('a', $(this).parent()).addClass('csChecked') || $('a', $(this).parent()).removeClass('csChecked');});$(':radio', f).each(function(){$(this).data('val') && $('a', $(this).parent()).addClass('csCheckedR') || $('a', $(this).parent()).removeClass('csCheckedR');});};

$.fn.csCheckBox = function(){return this.each(function(){var checkbox = $(this);if(checkbox.data("val")!=null) return;	checkbox.addClass("csOpaque");checkbox.data('val', this.checked);var aElem = $('<span class="csCheckboxElem"></span>');	checkbox.wrap('<span class="csCheckbox"></span>').parent().prepend(aElem);this.checked && aElem.addClass('csChecked');checkbox.on("change",function(){this.checked && aElem.addClass('csChecked') || aElem.removeClass('csChecked');});});};

$.fn.csRadio = function(){return this.each(function(){var radio = $(this);if(radio.data("val")!=null) return;radio.addClass("csOpaque");radio.data('val', this.checked);var aElem = $('<span class="csRadioElem"></span>');radio.wrap('<span class="csRadio"></span>').parent().prepend(aElem);this.checked && aElem.addClass('csCheckedR');radio.on("change",function(){aElem.addClass('csCheckedR');$('input[name="'+radio.attr('name')+'"]',this.form).not(radio).each(function(){$(this).attr('type')=='radio' && $(this).prev().removeClass('csCheckedR');});});});};

$.fn.csSelect = function(){return this.each(function(){var select = $(this);if(select.data('styled')) return;select.css("width",select.outerWidth()+30+"px");if(select.attr('multiple')) return;select.addClass("csOpaque");select.wrap('<span class="csSelect"></span>').parent().prepend('<span class="csSelectBar">'+$("option:selected",select).text()+'</span><span class="csSelectOpen"></span>');if(select.attr('disabled')) select.addClass("csDisabled");var classes=select[0].className;if(classes.indexOf("cs-")!="-1"){var classList=classes.replace( /\s\s+/g, ' ' ).split(' '); for(var i=0, len=classList.length;i<len;i++)  if(classList[i].indexOf("cs-")!="-1"){select.removeClass(classList[i]);select.parent().addClass(classList[i]);			}}select.on("change",function(){$(".csSelectBar",$(this).parent()).text($("option:selected",$(this).parent()).text());});select.data("styled","1");});};

$.fn.csUpdate = function(){$(this).each(function(){
		$(':checkbox',this).csCheckBox();
		$(':radio',this).csRadio();
		$('select',this).csSelect();
		$('form',this).on('reset',function(){ csReset(elem)});
	});
};
})(jQuery);

//inti custom form items
jQuery(document).ready(function($){
	$("body").csUpdate(); // added by sarvesh

	$(".signInPop .close, .step1B .close").click(function(){
     var baseurl = $("#baseurl").val();
     $.ajax({
          type: "POST",
          url: baseurl + 'pages/socialAlertMessage',
          data: "email_id_exist=" + 0 + "&account_inactive=" + 0,
          success: function(data){
						  $("#errormessageloginMessage").html('');
							$("#errormessagesignupMessage").html('');
              console.log(data);
          }
     });
  });
//Date Picker updated by sarvesh consumer singup
/*	$('#datePicker').datepicker({
        endDate: '+0d'
	});
*/
	$('.menuIcon').click(function(){
		$('header nav').toggleClass('active');
	});

	//Open Login Popup
	$('body').on('click','.modalPoup', function(e, size){
	var size = $(this).attr('data-size');
	if(size == '' || size == null){
		size = 'size-small';
	}
	else{
		size = size;
	}
	e.preventDefault();
		var url = $(this).attr('href');
		var divClass = $(this).attr('data-class');
		var title =  $(this).attr('data-title');
		$('body').addClass('modal-open');
		$('.modal').fadeOut();
		$('nav, html, .overlay, .menuIcon').removeClass('active');
		var dialogInstanceSignIn = BootstrapDialog.show({
			size: size,
			title: title,
			message: function(dialog) {
				var $message = $('<div class="' + divClass+ '"></div>');
				var pageToLoad = dialog.getData('pageToLoad');
				$message.load(pageToLoad);
				return $message;
			},
			data: {
				'pageToLoad': url
			}
		});
		setTimeout(function(){
			$(".modal").csUpdate();
    	}, 200);
	});
/* added by sarvesh footer page */
	$('.step4 .SelectPackage li').click(function () {
	    $('.step4 .SelectPackage li').removeClass('recommended');
	    $(this).addClass('recommended');
	});

	//Show/Hide Scroll to top
	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 400) {
	        $('#top').fadeIn();
	    }
	    else {
	        $('#top').fadeOut();
	    }
	    return false;
	});

	//Click scroll to top
	$('#top').click(function () {

	    $('html, body').animate({scrollTop: 0}, 200);
	});

	$("#username").on("keydown", function (e) {
	    return e.which !== 32;
	});

	$("#card_number").on("keydown", function (e) {
	  return e.which !== 32;
	});

	$(function () {
	    //$('#datetimepicker4').datetimepicker();
	});

	$('.signInPop').keypress(function (e) {
	    if (e.keyCode == '13') {
	        topSignIn();
	        //alert('Hola');
	    }
	});
 // /** End footer page **//////////
	//Open Login Popup
	$('body').on('click','.signInBtn', function(e){
	e.preventDefault();
		$('.modal').fadeOut();
		var dialogInstanceSignIn = BootstrapDialog.show({
			size: 'size-small',
			title: 'Sign In',
			message: function(dialog) {
				var $message = $('<div class="signInPopup"></div>');
				var pageToLoad = dialog.getData('pageToLoad');
				$message.load(pageToLoad);
				return $message;
			},
			data: {
				'pageToLoad': 'signIn'
			}
		});
		setTimeout(function(){
			$(".modal").csUpdate();
    	}, 200);
	});

});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


$(document).on('click', "#forget-password", function () {
 
$('.signInPop .close').trigger('click');
});
