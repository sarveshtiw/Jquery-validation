/* function updated by sarvesh home page */
jQuery(document).ready(function ($) {
    //$("body").csUpdate();
    //Facebook Sign up Pop up
    if ($(window).width() > 1024) {
        $('.confirmEmail').fancybox({padding: 10, openEffect: 'elastic', closeEffect: 'elastic', 'width': 400, 'height': 10, autoSize: false, closeBtn: false, autoDimensions: false, frameHeight: 100, maxHeight: 50, helpers: {
                overlay: {closeClick: false} //Disable click outside event
            }, onComplete: function () {
                $.fancybox.resize();
                $.fancybox.center();
            }});
    }
    else if ($(window).width() < 1025 && $(window).width() > 769) {
        $('.confirmEmail').fancybox({padding: 10, openEffect: 'elastic', closeEffect: 'elastic', width: 200, height: 40, autoSize: false, closeBtn: false, helpers: {
                overlay: {closeClick: false} //Disable click outside event
            }});
    }
    else {
        $('.confirmEmail').fancybox({padding: 10, openEffect: 'elastic', autoSize: false, closeEffect: 'elastic', width: '100%', height: '50%', minHeight: 1, closeBtn: false, helpers: {
                overlay: {closeClick: false} //Disable click outside event
            }});
    }
});

/* function updated by sarvesh for ambassador front page */
$('.login').toggle(function(){
  $(this).addClass('active').empty().append('Close');
  $('.partnerLogin').addClass('active')
},function(){
  $(this).removeClass('active').empty().append('Login');
  $('.partnerLogin').removeClass('active')
});

//Forgot Password Popup Start
$('.forgotpassword').click(function(){
  if ($(window).width() > 1024){
    $('.forgotpassword').fancybox({padding:10, openEffect:'elastic', closeEffect:'elastic', width: '50%', height: '100px', minHeight: '10%'});
  } else if($(window).width() < 1025 && $(window).width() > 769){
    $('.forgotpassword').fancybox({padding:10, openEffect:'elastic', closeEffect:'elastic', width: '75%', height: '10%', minHeight: 1});
  } else {
    $('.forgotpassword').fancybox({padding:10, openEffect:'elastic', closeEffect:'elastic', width: '100%', height: '10%', minHeight: 1});
  }
});
//Forgot Password Popup End
/* function created by sarvesh for ambassador signup */
$("#username").on("keydown", function (e) {
  return e.which !== 32;
});

$("#referral").on("keydown", function (e) {
  return e.which !== 32;
});
/* End function */
function makeBlank(){
  //alert("called");
  $("#errormessage").html('');
}
