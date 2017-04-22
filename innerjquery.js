function expandTextarea(id) {
    var element = $('#' + id).get(0);
    element.addEventListener('keyup', function() {
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
    }, false);
}
var box;
$(document).ready(function() {

    if($('#select_facebook_page')){
       setTimeout(function(){
        $('#select_facebook_page').trigger('click');
       },1000);
    }

   $(".fbPopClose .close").click(function(){
     window.location.reload();
   });

    /*$("#send-test-mail").click(function(){
      $("#send-test-message, #block-attributes, #addOn").toggle();
    });*/

    // location page search code
    //
    $("#locationSearch").keyup(function(){
        $("#locationloading").css('display','block');
        var baseurl = $("#baseurl").val();
        var keyword = $("#locationSearch").val();
         $.ajax({
                type: "POST",
                url: baseurl + 'businessUser/locationPageSearch',
                data: "keyword=" + keyword,

                success: function(response) {

                     $("#locationloading").css('display','none');
                    $("#searchResponse").html(response);

                },
            });
    });
  //$('.step4 .SelectPackage li').click(function () {
  $('body').on('click','.step4 .SelectPackage li',function (e) {
  	 e.preventDefault();
      if ($(this).hasClass('recommended1')) {
         $(this).removeClass('recommended1');
         $('.step4 .SelectPackage li').removeClass('recommended1');
     } else {
        $('.step4 .SelectPackage li').removeClass('recommended1');
         $(this).addClass('recommended1');
     }
	});

// code for 3.0 business user notification tab pagination
    $("#notificationPagination").click(function() {
        $(".loadingAddmoreImage").css("display", "block");
        var baseurl = $("#baseurl").val();
        var notificationCount = $("#notificationCount").val();
        var totalrecord = $("#totalrecord").val();
        var perPage = $("#perPage").val();
        if (parseInt(totalrecord) > parseInt(notificationCount)) {
            $.ajax({
                type: "POST",
                url: baseurl + 'businessUser/notificationfullPagination',
                data: "per_page=" + perPage + "&notificationCount=" + notificationCount,
                context: document.body,
                success: function(response) {

                    var count = parseInt(notificationCount) + 6;
                    $("#notificationCount").val(count);
                    $('li.notification_li:last').append(response);
                },
            });
        } else {
            var li = "No more result found";
            $(".loadingAddmoreImage").css("display", "none");
            $(".viewmore").text(li);
            $(".viewmore").removeClass('pagination');
        }
    });


    // end

    $(".businessProfile").on('submit', (function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        var pattern = /[a-zA-Z]/;
        var letters = /^[a-zA-Z\s]*$/;
        var baseurl = $("#baseurl").val();
        var firstname = $("#firstname").val();
        var croppedImage = $("#profilePic").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var bio = $("#bio").val();
        var contactNumber = $("#contactNumber").val();
        var newPassword = $("#newPassword").val();
        var confirmPassword = $("#confirmPassword").val();

        var validation = [];
        if (firstname == '')
        {
            $("#firstname_error").text("Please enter first name!");
            $("#firstname").css('border-color', '#424141');
            validation['firstname'] = 0;
        } else {
            var firstnameErr = checkOnlyAlphabetSpace(firstname);
            if (firstnameErr == "0") {
                $("#firstname_error").text("First name cannot contain numbers");
                $("#firstname").css('border-color', '#424141');
                validation['firstname'] = 0;
            } else {
                $("#firstname_error").text("");
                $("#firstname").css('border-color', '#ccc');
                validation['firstname'] = 1;
            }

        }


        if (lastname == '')
        {
            $("#lastname_error").text("Please enter last name!");
            $("#lastname").css('border-color', '#424141');
            validation['lastname'] = 0;
        } else {
            var lastnameErr = checkOnlyAlphabetSpace(lastname);
            if (lastnameErr == "0") {
                $("#lastname_error").text("Last name cannot contain numbers");
                $("#lastname").css('border-color', '#424141');
                validation['lastname'] = 0;
            } else {
                $("#lastname_error").text("");
                $("#lastname").css('border-color', '#ccc');
                validation['lastname'] = 1;
            }

        }
        if (email == '') {
            $("#email_error").text("Please enter email");
            $("#email").css('border-color', '#424141');
            validation['email'] = 0;
        } else {
            var isvalid = emailRegexStr.test(email);
            if (!isvalid) {
                $("#email_error").text("Please enter a valid email!");
                $("#email").css('border-color', '#424141');
                $("#email_error").val("");
                 validation['email'] = 0;

            } else {
                var emails = uniqueemailForProfile(email, baseurl);
                if(emails[1] == 0){
                	$("#email").css('border-color', '#424141');
                }else{
                	$("#email").css('border-color', '#ccc');
                }
                $("#email_error").text(emails[0]);
                validation['email'] = emails[1];
            }
        }

        if(contactNumber == ''){
           $("#contactNumber_error").text("Please enter contact number");
           $("#contactNumber").css('border-color', '#424141');
                validation['contactNumber'] = 0;
        }else{


        if (validatePhone('contactNumber')) {
            if ($('#contactNumber').val().length < 9 || $('#contactNumber').val().length > 18) {
                $("#contactNumber_error").text("Minimum 9 and Maximum 18 digit Phone/Mobile Number");
                $("#contactNumber").css('border-color', '#424141');
                validation['contactNumber'] = 0;
            } else {

                $("#contactNumber_error").text("");
                $("#contactNumber").css('border-color', '#ccc');
                validation['contactNumber'] = 1;
            }
        }
        else {

            $("#contactNumber_error").text("Invalid Phone/Mobile Number");
            $("#contactNumber").css('border-color', '#424141');
            validation['contactNumber'] = 0;
        }


         }
        if (newPassword != '')
        {


          var passwordLength = $("#newPassword").val().length;

           if (passwordLength < 6) {
              $("#password_error").text("6 characters minimum password");
              $("#newPassword").css('border-color', '#424141');
              validation['password'] = 0;
          }

          else if(confirmPassword == ''){
              $("#password_error").text("");
              $("#confirmPassword_error").text("Enter confirm password");
              $("#confirmPassword").css('border-color', '#424141');
              validation['confirmPassword'] = 0;
          }

          else if(newPassword != confirmPassword){
              $("#confirmPassword_error").text("Password doesn't match");
              $("#confirmPassword").css('border-color', '#424141');
              //$("#confirmPassword").val("");
              validation['confirmPassword'] = 0;
          }
          else {
              $("#password_error").text("");
              $("#confirmPassword_error").text("");
              $("#newPassword").css('border-color', '#ccc');
              $("#confirmPassword").css('border-color', '#ccc');
              validation['password'] = 1;
              validation['confirmPassword'] = 1;
          }
      }

      if (croppedImage != '') {
            $.ajax({
                type: "POST",
                url: baseurl + 'home/saveprofileimage',
                data: "pic=" + croppedImage, //likeimage 12
                cache: false,
                processData: false,
                contentType: "application/x-www-form-urlencoded",
                success: function(data) {
                    if (data) {
                        $('#saveResponse').text('Your profile updated successfully!!');
                        return true;
                    } else {
                        return false;
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
        if (errorResult == -1)
        {

    // call ajax
    $.ajax({
            type: "POST",
            url: baseurl + 'businessUser/saveProfile',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                //alert(data);
                  // parent.window.location.reload();
                    $("#confirmPassword").val("");
                      $("#newPassword").val("");
               $('#saveResponse').text('Your profile updated successfully!!');
            },

        });
    }else{

    return false;
    }

    }));

    function uniqueemailForProfile(value, baseurl)
{
    var msg = [];
    $.ajax({
        type: "POST",
        async: false,
        url: baseurl + 'home/uniqueemailForProfile',
        data: "email=" + value,
        context: document.body,
        success: function(data)
        {
            if (data != 'exits')
            {
                msg[0] = '';
                msg[1] = 1;
            } else {
                msg[0] = "This email is already registered with Hurree";
                msg[1] = 0;
            }
        }
    });
    return msg;
}

 function hideSuccessResponse(){
$("#saveResponse").fadeOut("slow",
    function(){
    $("#saveResponse").remove();
});


}

 setInterval(hideSuccessResponse, 15000);

    $("#inviteHtml").css('display', 'none');

    $("#inviteEmail").click(function() {

        $("#inviteHtml").slideToggle("slow");
    });


    //box = window.parent.$.fancybox;
    setTimeout(function() {
        $("#flashdata").slideToggle("slow")
    }, 4000);

    setTimeout(function() {
        $("#divid").slideToggle("slow")
    }, 4000);

    $(".showdiv").click(function() {
        $("#sidemenu").slideToggle("slow");
    });

    $("#btnNavigation").click(function() {
        $("#mainnavigation").slideToggle("slow");
    });

    $("#arwNavigation").click(function() {
        $("#mainnavigation").slideToggle("slow");
    });
    /*
     * page :- Basic Infromation Controller : Home/information
     */

    setTimeout(function() {
        $("#flasherror").slideToggle("slow");
    }, 4000);

    /*
     * P: Timeline A : Remove Push Message PA : Timeline.php
     */

    $('.removepush').click(function() {
        $(".pushmessage").slideToggle("slow");
        var id = this.id;
        var baseurl = $("#baseurl").val();
        $.ajax({
            type: "POST",
            url: baseurl + 'home/blockpushmessgae',
            data: "id=" + id,
            context: document.body,
            success: function(data) {

                $('.timeline').removeClass('margindiv');
            },
        });
    });

    $("#headerImage").change(function() {
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {

            $("#errorheader").text("Only formats are allowed : " + fileExtension.join(', '));
            $("#headerImageValid").val("1");
        } else {
            $("#errorheader").text("");
            $("#headerImageValid").val("0");
        }
    });

    $("#profilePic").change(function() {
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {

            $("#errorProfilePic").text("Only formats are allowed : " + fileExtension.join(', '));
            $("#profileImageValid").val("1");
        } else {
            $("#errorProfilePic").text("");
            $("#profileImageValid").val("0");
        }
    });

    /* P: Timeline
     * A : Creadit Card Validation and match with Card Type
     * PA : left.php -> game_payment.php
     * */

    $(".validatecard").change(function() {

        var card_no = $("#card").val();
        var cardtype = $("#cardtype").val();
        if (cardtype != "")
        {
            if (card_no != '')
            {
                var baseurl = $("#baseurl").val();
                $.ajax({
                    type: "POST",
                    url: baseurl + 'home/validatecard',
                    data: "card_no=" + card_no + "&cardtype=" + cardtype,
                    context: document.body,
                    success: function(data) {

                        if (data != 1)
                        {
                            $("#errortype").text(data);
                            $("#cardtype").val('');
                            $("#card").val('');

                        } else {
                            $("#errortype").text('');
                        }
                        $("#errorcard").text("");
                    },
                });
            } else {
                $("#errorcard").text("Please Enter CARD NUMBER first");
                $("#cardtype").val('');
            }
        }

    });

    $(".validateCardDate").change(function() {

        var card_no = $("#card").val();
        var cardtype = $("#cardtype").val();

        if (card_no != '' || cardtype != '')
        {
            var month = $("#month").val();
            var year = $("#year").val();
            if (month != '')
            {
                var baseurl = $("#baseurl").val();
                $.ajax({
                    type: "POST",
                    url: baseurl + 'home/validatecardexpdate',
                    data: "month=" + month + "&year=" + year,
                    context: document.body,
                    success: function(data) {
                        if (data != 1)
                        {
                            $("#erroryear").text("Please Select a Valid Exp Month and Year");
                            ("#month").val('');
                            $("#month").val('');
                        } else {
                            $("#erroryear").text('');
                        }
                    },
                });
            } else {
                $("#errormonth").text("Please Select Exp Month First");
                $("#year").val('');
            }
        } else {
            $("#errorcard").text("Please Enter CARD NUMBER First");
            $("#errortype").text('Please Select Card Type First');
            $("#month").val('');
            $("#year").val('');
        }
    });

    $(".changecurrency").change(function()
    {
        var value = $(this).val();
        var currency = '';
        var amount = '';
        if (value == 2)
        {
            currency = "£";
            amount = $("#gbpamount").val();
        } else {
            currency = "$";
            amount = $("#usdamount").val();
        }
        $("#shwcurrency").text(currency + amount);
    });

    //Hide validation messages of Create QR Code
    $('.errorOffer').hover(function(e) {
        $(this).hide();
    });

    $('#user_status').on('paste', function(e) {
        e.preventDefault();
        var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..');
        document.execCommand('insertText', false, text);
    });

    $('#searchText').on('paste', function(e) {
        e.preventDefault();
        var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..');
        document.execCommand('insertText', false, text);
    });

});

var processFlag = false;
var count = 0;
function more_activities_click()
{
    count++;
    if (processFlag) {
        return;
    }

    var searchResult = '';
    var searchpage = '';
    var sendtype = 'POST';
    $(".loadingAddmoreImage").css("display", "block");
    var statuscount = $("#statuscount").val();

    var noofstatus = $("#noofstatus").val();

    var totalrecord = $("#totalrecord").val();

    var lastrecord = $("#laststatus_id").val();

    var methodname = $("#methodname").val();

    var baseurl = $("#baseurl").val();

    if (parseInt(totalrecord) > parseInt(statuscount)) {
        processFlag = true;
        if (methodname == 'statusPagination')
        {
            sendtype = 'POST';
        } else {
            sendtype = 'GET';
            var searchs = $("#searchResult").val();
            searchResult = "&search=" + searchs;
            searchpage = "&searchpage=1";
        }

        $.ajax({
            type: sendtype,
            url: baseurl + 'home/' + methodname,
            data: "status_id=" + lastrecord + "&statuscount=" + statuscount + "&noofstatus=" + noofstatus + "&totalrecord=" + totalrecord + searchResult + searchpage,
            context: document.body,
            async: true,
            success: function(data) {
                //alert(data);
                //return false;
                var newstaatuscount = parseInt(statuscount) + parseInt(noofstatus);
                $("#statuscount").val(newstaatuscount);

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

function reward_more_activities_click() {
    var searchResult = '';
    var searchpage = '';

    $(".loadingAddmoreImage").css("display", "block");
    var rewardscount = $("#rewardscount").val();

    var per_page = $("#per_page").val();

    var totalrecord = $("#totalrecord").val();

    var lastrecord = $("#laststatus_id").val();

    var baseurl = $("#baseurl").val();

    var userid = $("#userid").val();

    if (parseInt(totalrecord) > parseInt(rewardscount)) {
        //processFlag = true;


        $.ajax({
            type: 'POST',
            url: baseurl + 'reward/rewardPagination',
            data: "status_id=" + lastrecord + "&rewardscount=" + rewardscount + "&per_page=" + per_page + "&totalrecord=" + totalrecord + searchResult + searchpage + "&userid=" + userid,
            context: document.body,
            async: true,
            success: function(data) {

                //return false;
                var newrewardscount = parseInt(rewardscount) + parseInt(per_page);
                $("#rewardscount").val(newrewardscount);
                // $(".profileBanner").css("height","320px");
                $("#appendRewardLi").css("display", "block");
                $(".loadingAddmoreImage").css("display", "none");
                $("#appendRewardLi").append(data);

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

function setCaretPosition(el, pos) {

    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

function mylinkfunction(weblink, elementId, cursorPosition)
{
    weblink = weblink.trim();
    var txt = weblink;
    var re = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;    //// Checking For Valid Url
    if (re.test(txt)) {
        //// Valid Url
        var status = $("#" + elementId).html();
        //var status = $("#user_status").text();
        status = status.replace("&nbsp;", " ");
        //status=status.replaceAll("&nbsp;", " ");
        status = status.trim();
        var arrStatus = status.split(" ");
        var v = 0;
        var arrCnt = [];
        for (var i = 0; i < arrStatus.length; i++)
        {
            if (v == 0)
            {
                arrCnt[i] = arrStatus[i];
            }
            if (arrStatus[i] === weblink)
            {
                if (weblink.indexOf('www.') === 0)
                {
                    $newweblink = weblink.replace("www.", "http://");
                } else {
                    if (weblink.indexOf('http://') === 0 || weblink.indexOf('https://') === 0) {
                        $newweblink = weblink;
                    } else {
                        $newweblink = "http://" + weblink;
                    }
                }

                arrStatus[i] = "<k>" + $newweblink + "</k>&nbsp;";
                arrCnt[i] = arrStatus[i];
                //var node=i;
                v++;
            }
        }

        var cntlenarray = arrCnt.join(" ");
        //var len = parseInt(cntlenarray.length) + parseInt(1);
        var len = parseInt(cntlenarray.length);

        var finalString = arrStatus.join(" ");
        $("#" + elementId).html(finalString + " ");
        var ctrl = document.getElementById(elementId);
        //var pos = getCaretPosition(ctl);

        setCaretPosition(ctrl, len);
    } else {

    }
}

function getCaretPosition(editableDiv) {
    var caretPos = 0, containerEl = null, sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            if (range.commonAncestorContainer.parentNode == editableDiv) {
                caretPos = range.endOffset;
            }
        }
    }
    return caretPos;
}

function closefancybox()
{
    //
    if (window.parent.$.fancybox) {
        window.parent.$.fancybox.close();
        $(".fancybox-overlay").hide();
    }
    else {
        $.fancybox.close();
        $(".fancybox-overlay").hide();
    }

}


function checkall(objForm)
{
    var checkboxes = document.getElementsByClassName("email_checkbox");
    // loop over them all
    var allChecked = document.getElementById('check_all').checked;
    for (var i = 0; i < checkboxes.length; i++) {

        if ($("#status" + i).text() == 'Follow' || $("status" + i).text() == 'Unfollow')
        {
            /// Nothing Happen
        } else {
            //
            /*if (document.getElementById('check_all').checked == true)
             checkboxes[i].checked = false;
             else
             checkboxes[i].checked = true;*/
            checkboxes[i].checked = allChecked;
        }
    }
}


function checkalllocation(objForm)
{
    var checkboxes = document.getElementsByClassName("csCheckboxElem");
    // loop over them all
    var allChecked = document.getElementById('check_all').checked;

    for (var i = 0; i < checkboxes.length; i++)
    {
         //$("." + checkboxes[i]).addClass("csChecked");
       console.log(checkboxes[i]);
       var value = checkboxes[i].value;
       var checked = $("#" + i).is(":checked");
    }
}

/* P: 	Timeline
 * A :  validation for creating challange in main timeline page
 * PA : challenge_popup.php
 * */

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

/* Change a value of input Field */

function changeValue(elementid, value)
{
    $("#" + elementid).val(value);
}

/* P: 	Signup
 * A :  validation for Business Sign up
 * PA : sign UP.php
 * */
function BusinessValidation()
{
    //return false;
    var name = $("#bu_name").val();
    var businessName = $("#bu_businessname").val();
    var email = $("#bu_email").val();
    var username = $("#bu_username").val();
    var password = $("#bu_password").val();
    var validation = [];
    var baseurl = $("#baseurl").val();

    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name == '')
    {
        $("#errorbu_name").text("We need your name buddy!");
        validation['bu_name'] = 0;
    } else {
        $("#errorbu_name").text("");
        validation['bu_name'] = 1;
    }

    if (businessName == '')
    {
        $("#errorbu_businessname").text("We need your Business Name buddy!");
        validation['bu_businessname'] = 0;
    } else {
        $("#errorbu_businessname").text("");
        validation['bu_businessname'] = 1;
    }

    if (email == '')
    {
        $("#errorbu_email").text("Sorry, we need your email buddy");
        validation['bu_email'] = 0;
    } else {
        var isvalid = emailRegexStr.test(email);
        if (!isvalid)
        {
            $("#errorbu_email").text("Please enter a valid email");
            validation['bu_email'] = 0;
        } else {
            var emails = uniqueemail(email, baseurl);

            $("#errorbu_email").text(emails[0]);
            validation['bu_email'] = emails[1];
        }
    }

    if (username == '')
    {
        $("#errorbu_username").text("Create a cool @Username");
        validation['bu_username'] = 0;
    } else {
        var usernames = uniqueusername(username, baseurl);

        $("#errorbu_username").text(usernames[0]);
        validation['bu_username'] = usernames[1];
    }

    if (password == '')
    {
        $("#errorbu_password").text("You need a password, duh!");
        validation['bu_password'] = 0;
    } else {
        $("#errorbu_password").text("");
        validation['bu_password'] = 1;
    }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        //alert(item+" value:  "+validation[item]);
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
        return true;
    } else {
        return false;
    }
}

function uniqueemail(value, baseurl)
{
    var msg = [];
    $.ajax({
        type: "POST",
        async: false,
        url: baseurl + 'home/uniqueemail',
        data: "email=" + value,
        context: document.body,
        success: function(data)
        {
            if (data != 'exits')
            {
                msg[0] = '';
                msg[1] = 1;
            } else {
                msg[0] = "This email is already registered with Hurree";
                msg[1] = 0;
            }
        }
    });
    return msg;
}


function uniqueReferralCode(value, baseurl)
{
    var msg = [];
    $.ajax({
        type: "POST",
        async: false,
        url: baseurl + 'home/uniqueReferralCode',
        data: "code=" + value,
        context: document.body,
        success: function(data)
        {
            if (data == 'exits')
            {
                msg[0] = '';
                msg[1] = 1;
            } else {
                msg[0] = "This isn't a valid referal code";
                msg[1] = 0;
            }
        }
    });
    return msg;
}


function uniqueusername(value, baseurl, errordiv)
{

    var user = [];

    $.ajax({
        type: "POST",
        async: false,
        url: baseurl + 'home/uniqueusername',
        data: "username=" + value,
        context: document.body,
        success: function(data)
        {
            //
            //alert(data);
            if (data != 'exits')
            {
                user[0] = '';
                user[1] = 1;
                if (errordiv != '')
                {
                    $("#" + errordiv).css("color", '#35ba94');
                    $("#" + errordiv).text("This Username is available");
                }
            } else {
                user[0] = "This Username already exists, please choose another";
                user[1] = 0;
                if (errordiv != '')
                {
                    $("#" + errordiv).css("color", 'red');
                    $("#" + errordiv).text("This Username already Exits");

                }
            }
        }, error: function(data)
        {
            console.log(data);
            //
        }
    });

    return user;
}



function businessSignin()
{
    var username = $("#bulogin_username").val();
    /*alert(username);*/
    var password = $("#bulogin_password").val();
    var validation = [];

    if (username == '')
    {
        $("#errorsignusername").text("Enter Your @Username");
        validation['bu_username'] = 0;

        //return false;
    } else {
        var usernames = uniqueusername(username, baseurl);

        $("#errorsigniusername").text(usernames[0]);
        validation['bu_username'] = usernames[1];
    }

    if (password == '')
    {
        $("#errorsignpassword").text("You need to Enter password, duh!");
        validation['bu_password'] = 0;
    } else {
        $("#errorsignpassword").text("");
        validation['bu_password'] = 1;
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
        return true;
    } else {
        return false;
    }
}

function topSignInRemoveError() {
    $("#errormessage").text("");
    $("#login_username").val("");
    $("#login_password").val("");
}

function topSignIn() {

    //
    var username = $.trim($("#login_username").val());
    var password = $.trim($("#login_password").val());
    var baseurl = $("#baseurl").val();
    var currenturl = $("#currenturl").val();
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(username);
    var validation = [];

    //
    if (username != '' && password != '')
    {
        if (!isvalid) {

            var usernames = uniqueusername(username, baseurl);
            if (usernames[1] == 1) {
                $("#errormessage").text("Username doesn't exist");
                validation['login_username'] = 0;
                $("#login_password").val("");
            }
        }
        else {

            var useremail = uniqueemail(username, baseurl)
            if (useremail[1] == 1) {
                $("#errormessage").text("Email doesn't exist");
                validation['login_username'] = 0;
                $("#login_password").val("");

            }
        }

        //if (usernames[1] == 0 || useremail[1] == 0) {
        //
        $.ajax({
            type: "POST",
            url: baseurl + 'home/login',
            data: "username=" + username + "&password=" + password,
            context: document.body,
            async: false,
            success: function(data) {
                //window.location.href = baseurl + 'timeline';
                //alert(data);
                if (data == "1")
                {
                    window.location.href = baseurl + 'businessUser/account';
                } else if (data == "8" || data == "9")
            	{
                	window.location.href = baseurl + 'appUser';
            	}
                else if (data == "2") {
                    $("#errormessage").text("Account is On Hold. Contact Admininstrator");
                    $("#login_password").val("");
                }
                else if (data == "3") {
                    $("#errormessage").text("Only Business user can login here. Consumer and Ambassador is comming soon!!");
                    $("#login_password").val("");
                }
                else {
                    $("#errormessage").text("Incorrect Username or Password");
                    $("#login_password").val("");
                }
            },
        });

        //}

    }
    else {
        if (username == '' && password == '')
        {
            $("#errormessage").text("Please enter username and password");
            validation['login_username'] = 0;

        }
        else if (username == '')
        {
            $("#errormessage").text("Please enter username");
            validation['login_username'] = 0;
        }
        else if (password == '')
        {
            $("#errormessage").text('Please enter password');
            validation['login_password'] = 0;
        }
    }
}

// login function for redeem offer page

function redeemSignIn() {

    var username = $("#login_username").val();
    var password = $("#login_password").val();
    var baseurl = $("#baseurl").val();
    var currenturl = $("#currenturl").val();
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(username);
    var validation = [];

    //
    if (username != '' && password != '')
    {
        if (!isvalid) {

            var usernames = uniqueusername(username, baseurl);
            if (usernames[1] == 1) {
                $("#errormessage").text("Username doesn't exist");
                validation['login_username'] = 0;
                $("#login_password").val("");
            }
        }
        else {

            var useremail = uniqueemail(username, baseurl)
            if (useremail[1] == 1) {
                $("#errormessage").text("Email doesn't exist");
                validation['login_username'] = 0;
                $("#login_password").val("");

            }
        }

        if (usernames[1] == 0 || useremail[1] == 0) {

            $.ajax({
                type: "POST",
                url: baseurl + 'redeemOffer/login',
                data: "username=" + username + "&password=" + password,
                context: document.body,
                async: false,
                success: function(data) {


                    if (data == "1")
                    {
                        var url = baseurl + 'timeline';

                        window.location.href = baseurl + 'timeline';

                    }
                    else if (data == "2") {
                        $("#errormessage").text("Account is On Hold. Contact Admininstrator");
                        $("#login_password").val("");
                    }
                    else if (data == "3") {
                        $("#errormessage").text("Only Consumer user can login here. Business and Ambassador is comming soon!!");
                        $("#login_password").val("");
                    }
                    else {
                        $("#errormessage").text("Incorrect @Username or Password");
                        $("#login_password").val("");
                    }
                },
            });

        }

    }
    else {
        if (username == '' && password == '')
        {
            $("#errormessage").text("Please enter username and password");
            validation['login_username'] = 0;

        }
        else if (username == '')
        {
            $("#errormessage").text("Please enter username");
            validation['login_username'] = 0;
        }
        else if (password == '')
        {
            $("#errormessage").text('Please enter password');
            validation['login_password'] = 0;
        }
    }
}
// end function

function statusDetails(notificationid, baseurl)
{
    //window.parent.$.fancybox.close();
    window.parent.location.href = baseurl + "home/timeline/" + notificationid;
}

function chnageProduct()
{
    var value = $("#region").val();
    var baseurl = $("#baseurl").val();

    $.ajax({
        type: "GET",
        async: true,
        url: baseurl + 'home/store/' + value,
        data: "region=" + value,
        context: document.body,
        success: function(data)
        {
            $(".storeItems").html(data);

        }
    });

}

function checkOnlyAlphabetSpace(str)
{
    var returnVal = '';
    var expStr = /^([a-zA-Z ]+)$/;
    var isvalid = expStr.test(str);
    if (!isvalid)
    {
        returnVal = "0";
    } else {
        returnVal = "1";
    }
    return returnVal;

}

function validatePhone(mobile) {
    var a = document.getElementById(mobile).value;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function checkOnlyNumeric(str)
{
    var returnVal = '';
    var expStr = /^([0-9+]+)$/;
    var isvalid = expStr.test(str);
    if (!isvalid)
    {
        returnVal = "0";

    } else {
        returnVal = "1";
    }
    return returnVal;

}



function stopfunction(event)
{
    if (event)
        event.stopImmediatePropagation();
}

/* P: 	For Sing in from Twitter
 * A :  Email Vation and check into Database for entered Email Id
 * PA : signup.php, signup1.php, home.php, feature.php
 * */
function Emailvalidation()
{
    //
    var baseurl = $("#baseurl").val();
    var email = '';
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(email);
    var gender = $("#gender").val();
    var date = $("#date").val();
    var month = $("#month").val();
    var year = $("#year").val();
    var fb = $("#fb").val();
    var validation = [];
    //alert(gender);

    if (date == '' || month == '' || year == '')
    {
        $("#error_dob").text("We need your date of birth :)");
        validation['date'] = 0;
    } else {
        $("#error_dob").text("");
        validation['date'] = 1;
    }

    if (gender == '')
    {
        $("#error_gender").text("We need your Gender");
        validation['gender'] = 0;
    } else {
        $("#error_gender").text("");
        validation['gender'] = 1;
    }
    if (fb == 0)
    {
        var email = $("#email").val();
        if (email == '')
        {
            $("#error_email").text("Please Enter Email address");
            validation['email'] = 0;
        } else {
            if (!isvalid) {
                $("#error_email").text("Please Enter A valid Email address");
                validation['email'] = 0;

            } else {
                var emailDetails = uniqueemail(email, baseurl);
                if (emailDetails[1] == 0)
                {
                    $("#error_email").text(emailDetails[0]);
                    validation['email'] = 0;

                } else {
                    validation['email'] = 1;
                }
            }
        }
    }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            $("#error_" + item).css("display", 'block');
            rtnfalse[i] = 1;
        } else {
            $("#error_" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);
    if (errorResult == -1)
    {

        /*$("#error_email").text("");*/
        //var email= $("#email").val();
        //alert(email+gender);
        $.ajax({
            type: "POST",
            url: baseurl + 'home/confirmEmail',
            /*data : "email="+email,*/
            data: 'email=' + email + '&date=' + date + '&month=' + month + '&year=' + year + '&gender=' + gender + '&fb=' + fb,
            context: document.body,
            success: function(data) {

                if (data == true)
                {
                    //closefancybox();
                    parent.window.location = baseurl + 'home/timeline';

                }
            },
        });

    } else {
        return false;
    }


}

function facebookSignup() {

    //
    //alert('Hola');
    var baseurl = $("#baseurl").val();
    var email = $('#user_email').val();
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(email);
    var gender = $("#gender").val();
    var date = $("#user_date").val();
    var month = $("#user_month").val();
    var year = $("#user_year").val();
    var fb = 1;
    var facebookEmail = $('#facebookEmail').val();
    var validation = [];

    if (email == '')
    {
        $("#email_error").text("Enter email address");
        validation['email'] = 0;
    } else {
        if (!isvalid) {
            $("#email_error").text("Enter a valid email address");
            validation['email'] = 0;

        } else {
            if (facebookEmail == email) {
                $("#email_error").text('');
                validation['email'] = 1;
            } else {
                var emailDetails = uniqueemail(email, baseurl);
                if (emailDetails[1] == 0)
                {
                    $("#email_error").text(emailDetails[0]);
                    validation['email'] = 0;

                } else {
                    validation['email'] = 1;
                }
            }
        }
    }

    if (date == '' || month == '' || year == '')
    {
        $("#dob_error").text("We need your date of birth :)");
        validation['date'] = 0;
    } else {
        $("#dob_error").text("");
        validation['date'] = 1;
    }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            $("#error_" + item).css("display", 'block');
            rtnfalse[i] = 1;
        } else {
            $("#error_" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {

        /*$("#error_email").text("");*/
        //var email= $("#email").val();
        //alert(email+gender);
        $.ajax({
            type: "POST",
            url: baseurl + 'home/confirmEmail',
            /*data : "email="+email,*/
            data: 'email=' + email + '&date=' + date + '&month=' + month + '&year=' + year + '&gender=' + gender + '&fb=' + fb,
            context: document.body,
            success: function(data) {
                //
                //alert(data);
                if (data == true)
                {
                    //closefancybox();
                    //window.location.href=baseurl+'timeline';
                    parent.window.location = baseurl + 'home/timeline';

                }
            },
        });

    } else {
        return false;
    }

}

function twitterSignup() {

    //
    //alert('Hola');
    var baseurl = $("#baseurl").val();
    var email = $('#twitter_email').val();
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(email);
    var date = $("#twitter_date").val();
    var month = $("#twitter_month").val();
    var year = $("#twitter_year").val();
    var gender = $("#twitGender").find('.csCheckedR').next("input").val();
    var fb = 0;
    var validation = [];

    if (email == '')
    {
        $("#twitter_email_error").text("Enter email address");
        validation['twitter_email'] = 0;
    } else {
        if (!isvalid) {
            $("#twitter_email_error").text("Enter a valid email address");
            validation['twitter_email'] = 0;

        } else {

            var emailDetails = uniqueemail(email, baseurl);
            if (emailDetails[1] == 0)
            {
                $("#twitter_email_error").text(emailDetails[0]);
                validation['twitter_email'] = 0;

            } else {
                $("#twitter_email_error").text('');
                validation['twitter_email'] = 1;
            }

        }
    }

    if (date == '' || month == '' || year == '')
    {
        $("#twitter_dob_error").text("We need your date of birth :)");
        validation['date'] = 0;
    } else {
        $("#twitter_dob_error").text("");
        validation['date'] = 1;
    }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            $("#error_" + item).css("display", 'block');
            rtnfalse[i] = 1;
        } else {
            $("#error_" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {

        /*$("#error_email").text("");*/
        //var email= $("#email").val();
        //alert(email+gender);
        $.ajax({
            type: "POST",
            url: baseurl + 'home/confirmEmail',
            /*data : "email="+email,*/
            data: 'email=' + email + '&date=' + date + '&month=' + month + '&year=' + year + '&gender=' + gender + '&fb=' + fb,
            context: document.body,
            success: function(data) {
                //
                //alert(data);
                if (data == true)
                {
                    //closefancybox();
                    //window.location.href=baseurl+'timeline';
                    parent.window.location = baseurl + 'home/timeline';

                }
            },
        });

    } else {
        return false;
    }

}

/* P: 	All Sign in , Sign up  pages where username field exits
 * A :  Eestrict space and special character in username.
 * PA : signup.php, signup1.php, etc
 * */
function blockSpecialChar(e)
{
    var k = e.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57));
}

function validatedate(input) {
    var validformat = /(((0[1-9]|[12][0-9]|3[01])([-])(0[13578]|10|12)([-])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-])(0[469]|11)([-])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-])(02)([-])(\d{4}))|((29)(\.|-|\/)(02)([-])([02468][048]00))|((29)([-])(02)([-])([13579][26]00))|((29)([-])(02)([-])([0-9][0-9][0][48]))|((29)([-])(02)([-])([0-9][0-9][2468][048]))|((29)([-])(02)([-])([0-9][0-9][13579][26])))/;//Basic check for format validity
    var date = input;
    //date.match(validformat);
    if (date.match(validformat)) {
        return true;
    }
    else {
        return false;
    }
}

function checkEmail() {

    var email = $("#email").val();
    //alert(email);
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(email);
    if (!isvalid) {

        $("#erroremail").text("Please enter a valid email address");
        //validation['address']=0;
        return false;
    } else {
        $("#erroremail").text("");
        validation['address'] = 1;
        return true;
    }
}

function forgotEmail() {
    //
    var email = $("#forgotemail").val();
    var baseurl = $("#baseurl").val();

    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(email);

    if (email == '') {
        $("#erroremail").text("Please enter email");
    } else {
        if (!isvalid) {

            $("#erroremail").text("Please enter a valid email address");
            setTimeout(function() {
                $("#erroremail").text("");
                $("#forgotemail").val("");
            }, 2000);
            //validation['address']=0;
            return false;
        } else {
            $("#load").css("display", "block");
            $.ajax({
                type: "POST",
                url: baseurl + 'home/sendforgotpassword',
                data: "email=" + email,
                context: document.body,
                async: false,
                success: function(data) {
                    if (data == "1")
                    {
                        $("#erroremail").text("We've sent you a link to reset your password, check your email!");
                        setTimeout(function() {
                            $("#erroremail").text("");
                            $("#forgotemail").val("");
                        }, 2000);
                        /*setTimeout(function () {
                         $('.modal').fadeOut()
                         }, 3000);*/
                    } else if (data == "0") {
                        $("#erroremail").text("This email is not registered with Hurree.co");
                        setTimeout(function() {
                            $("#erroremail").text("");
                            $("#forgotemail").val("");
                        }, 2000);
                    }
                    else if (data == "Inactive") {
                        $("#erroremail").text("This email is not registered with Hurree.co");
                    }
                    $("#load").css("display", "none");
                },
            });
            return true;
        }
    }
}

function checkOnlyNumeric(str)
{
    var returnVal = '';
    var expStr = /^([0-9+]+)$/;
    var isvalid = expStr.test(str);
    if (!isvalid)
    {
        returnVal = "0";

    } else {
        returnVal = "1";
    }
    return returnVal;

}

function showimageprvCampaign(input, str, css)
{
    //
    if (input.files && input.files[0])
    {
        var cc = input.files[0].type;
        if (cc.indexOf('image') != -1)
        {

            var filerdr = new FileReader();

            filerdr.onload = function(e)
            {

                $('#imgprv' + str).attr('src', e.target.result);
                var image = new Image();

                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;

                //Validate the File Height and Width.
                image.onload = function() {
                    var height = this.height;
                    var width = this.width;
                    $('#imageHeight').val(this.height);
                    $('#imageWidth').val(this.width);

                };
                $("#imgprv" + str).css('display', 'block');
                if (str != '')
                {
                    if (css == 'css')
                    {
                        $("#imgprv" + str).css('margin-left', '10%');
                    }
                }
                $("#error_span" + str).html("");
            }
            filerdr.readAsDataURL(input.files[0]);
            $("#crossCampaign").css('display', 'block');
            $("#fileErrorCampaign").html("");
            $("#fileValidation").val("0");
            event.stopImmediatePropagation();
        } else {
            $("#fileErrorCampaign").html("Please select a valid Image");
            $("#imgprv" + str).css("display", "none");
            $("#fileValidation").val("1");

            return false;
        }
    }
}

$("#crossCampaign").click(function(e) {
    e.preventDefault();
    $('#imgprv1').attr('src', '');
    $("#crossCampaign").css('display', 'none');
    $("#imgprv1").css('display', 'none');
    document.getElementById("jfilestyle-0").value = "";


});


$(".validateCampaign").on('submit', (function(e) {
     e.stopImmediatePropagation();
 e.preventDefault();
    //
    var baseurl = $("#baseurl").val();
    var notification = $("#notification").val();
    var type = $("#type").val();
    var regex = /^[0-9\b]+$/;  // allow only numbers [0-9]
    var minAge = parseInt($("#minAge").val());
    var maxAge = parseInt($("#maxAge").val());
    var gender = $('input[name="gender"]:checked').val();
    var files = $('.imageCampaign')[0].files.length;
    var availabe = $("#availabe").val();
    var campaign_coin = $("#campaign_coin").val();
    var startdate = $("#startdate").val();
    var enddate = $("#enddate").val();

     var locations = $("#locations").val();
    var validation = [];

        if(locations == null){
         $("#error_locations").text("Please select location");

        validation['location'] = 0;
        }else{
           $("#error_locations").text("");

        validation['location'] = 1;
        }
    if ($.trim(notification) == '') {
        $("#error_notification").text("Please add a notification");
        $("#notification").css("border-color", "#424141");
        $("#notification").val("");
        validation['notification'] = 0;
    } else {
        $("#error_notification").text("");
        $("#notification").css("border-color", "#ccc");
        validation['notification'] = 1;
    }
    if (files == 1) {
        //
        var filetype = $('.imageCampaign')[0].files[0].type;
        var fileUpload = $('.imageCampaign')[0];

        if (filetype == 'image/jpeg' || filetype == 'image/png' || filetype == 'image/gif') {

            if ($('#imageHeight').val() < 200 || $('#imageWidth').val() < 400) {
                $("#fileErrorCampaign").text("Min image size should be 400px X 200px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else if ($('#imageHeight').val() > 768 || $('#imageWidth').val() > 1024) {
                $("#fileErrorCampaign").text("Max image size should be 1024px X 768px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else {
                $("#fileErrorCampaign").text("");
                $("#fileValidation").val("0");
                validation['file'] = 1;

            }

        } else {
            $("#fileErrorCampaign").text("Please select a valid image");
            $("#fileValidation").val("1");
            validation['file'] = 0;
        }
    }
    //alert($("#fileValidation").val());

    if (type == 'discount') {
        var discoutPercentage = $("#discoutCampaign").val();
        if ($.trim(discoutPercentage) == '' || $.trim(discoutPercentage) == '0' || !regex.test(discoutPercentage)) {
            $("#error_discoutCampaign").text("Please enter your discount");
            $("#discoutCampaign").css("border-color", "#424141");
            $("#discoutCampaign").val("");
            validation['discoutCampaign'] = 0;
        } else {

            if ((discoutPercentage >= 5) && (discoutPercentage <= 95)) {
                $("#error_discoutCampaign").text("");
                $("#discoutCampaign").css("border-color", "#ccc");
                validation['discoutCampaign'] = 1;
            } else {
                $("#error_discoutCampaign").text("Enter discount between 5 to 95");
                $("#discoutCampaign").css("border-color", "#424141");
                $("#discoutCampaign").val("");
                validation['discoutCampaign'] = 0;
            }


        }
    }
    if ($.trim(minAge) == '' || $.trim(minAge) == '0' || !regex.test(minAge)) {
        $("#error_minAge").text("Please enter min age");
        $("#minAge").css("border-color", "#424141");
        $("#minAge").val("");
        validation['minAge'] = 0;
        var validMinAge = 0;
    } else {
        if ($.trim(minAge) < 10) {
            $("#error_minAge").text("Min Age should not less than 10");
            $("#minAge").css("border-color", "#424141");
            $("#minAge").val("");
            validation['minAge'] = 0;
            var validMinAge = 0;
        } else {
            $("#error_minAge").text("");
            $("#minAge").css("border-color", "#ccc");
            validation['minAge'] = 1;
            var validMinAge = 1;
        }

    }

    if ($.trim(maxAge) == '' || $.trim(maxAge) == '0' || !regex.test(maxAge)) {
        $("#error_maxAge").text("Please enter max age");
        $("#maxAge").css("border-color", "#424141");
        $("#maxAge").val("");
        validation['maxAge'] = 0;
        var validMaxAge = 0;
    } else {
        if ($.trim(maxAge) < 10) {
            $("#error_maxAge").text("Max Age should not less than 10");
            $("#maxAge").css("border-color", "#424141");
            $("#maxAge").val("");
            validation['maxAge'] = 0;
            var validMaxAge = 0;
        } else {
            $("#error_maxAge").text("");
            $("#maxAge").css("border-color", "#ccc");
            validation['maxAge'] = 1;
            var validMaxAge = 1;
        }
    }

    if (validMinAge == 1 && validMaxAge == 1) {
        if (minAge >= maxAge) {
            $("#error_maxAge").text("Please enter max age greater than min age");
            //$("#minAge").css("border-color","red");
            $("#maxAge").css("border-color", "#424141");
            //$("#minAge").val("");
            $("#maxAge").val("");
            validation['maxAge'] = 0;
        } else {
            $("#error_maxAge").text("");
            $("#minAge").css("border-color", "#ccc");
            $("#maxAge").css("border-color", "#ccc");
            validation['maxAge'] = 1;
        }
    }
    if ($.trim(availabe) == '' || $.trim(availabe) == '0') {
        $("#error_availabe").text("How many are available?");
        $("#availabe").val("");
        $("#availabe").css("border-color", "#424141");
        validation['availabe'] = 0;
    } else {
        if (!regex.test(availabe)) {
            $("#error_availabe").text("Only numbers are allowed");
            $("#availabe").val("");
            $("#availabe").css("border-color", "#424141");
            validation['availabe'] = 0;
        } else {
            $("#error_availabe").text("");
            $("#availabe").css("border-color", "#ccc");
            validation['availabe'] = 1;
        }
    }

    if ($.trim(campaign_coin) == '' || $.trim(campaign_coin) == 0) {
          $("#error_campaign_coin").text("Please provide coins");
          $("#campaign_coin").val("");
          $("#campaign_coin").css("border-color", "#424141");
          validation['campaign_coin'] = 0;
    }else{
         if (!regex.test(campaign_coin)) {
              $("#error_campaign_coin").text("Only numbers are allowed");
              $("#campaign_coin").css("border-color", "#424141");
              validation['campaign_coin'] = 0;
          } else if ($.trim(campaign_coin) > 200) {
              $("#error_campaign_coin").text("You cannot enter more than 200 coins.");
              $("#campaign_coin").css("border-color", "#424141");
              validation['campaign_coin'] = 0;
          } else {
              $("#error_campaign_coin").text("");
              $("#campaign_coin").css("border-color", "#ccc");
              validation['campaign_coin'] = 1;
          }
    }
  if (startdate == ''  )
    {
        $("#error_dob").text("Please select start date");
        //$("#error_enddob").val("");
        validation['date'] = 0;
    } else {


        $("#error_dob").text("");
        validation['date'] = 1;

    }
      if (enddate == '' )
    {
        $("#error_enddob").text("Please select end date");

        validation['enddate'] = 0;
    } else {

        $("#error_enddob").text("");
        validation['enddate'] = 1;

    }
  if(startdate!='' && enddate!=''){

       var splitStartDate = startdate.split("-");
       var startdateMonth = splitStartDate[1];
       var startdateDay = splitStartDate[2];
       var splitEndDate = enddate.split("-");
       var enddateMonth = splitEndDate[1];
       var enddateDay = splitEndDate[2];

       if(parseInt(startdateMonth) == parseInt(enddateMonth)){

           if(parseInt(startdateDay) > parseInt(enddateDay)){

            $("#error_enddob").text("Please select valid date");

            validation['enddate'] = 0;
           }
       }
        else if(parseInt(startdateMonth) > parseInt(enddateMonth)){


            $("#error_enddob").text("Please select valid date");

            validation['enddate'] = 0;

       }

        else{
          $("#error_enddob").text("");

          validation['enddate'] = 1;
       }
   }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error" + item).css("display", 'block');
            rtnfalse[i] = 1;

        } else {
            //$("#error" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }

        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {
        $(".close").css("display", "none");
        $("#loading").css("display", "block");
        $.ajax({
            url: baseurl + "campaign/saveCampaign/",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                if (data) {
                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");
                    //$("#success_message").text('Your campaign has been created successfully');

//                    setTimeout(function () {
//                        $('.modal, .modal-backdrop').hide('slow').remove();
//                    }, 1500);

                    $.ajax({
                        url: baseurl + "campaign/postcampaign/",
                        type: "POST",
                        data: "campaignId=" + $.trim(data),
                        context: document.body,
                        success: function(data) {
                            var postUrl = baseurl + "campaign/fbPostOffer";
                            $('#post_facebook_page').attr('href', postUrl + '/' + $.trim(data));
                            $('#post_facebook_page').trigger('click'); //post_facebook_page
                            //  $("#success_message").text();
                        }
                    });//window.location.reload();
                }
            }
        });

    } else {
        return false;
    }
    return false;

}));

function facebookNotPost() {
    window.location.reload();
}

function facebookOnPost(posturl) {
    setTimeout(function() {
        $('.modal, .modal-backdrop').hide('slow').remove();
    }, 1500);

    window.open(posturl, 'facebook-share-dialog', 'width=626,height=436');
    window.location.reload();
    return false;
    //  window.location.reload();
}


function validateContact() {

    var baseurl = $("#baseurl").val();
    var name = $("#nameContact").val();
    var email = $("#emailAddress").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    var pattern = /[a-zA-Z]/;
    var letters = /^[a-zA-Z\s]*$/;
    var valiclosefancyboxdation = [];
    var validation = [];

    if ($.trim(name) == '')
    {
        $("#error_name").text("Please enter full name");
        $("#nameContact").val('');
        validation['nameContact'] = 0;

    } else {
        if (!letters.test($.trim(name))) {
            $("#error_name").text("Only alphabets are allow");
            $("#nameContact").val('');
            validation['nameContact'] = 0;
        } else {
            $("#error_name").text("");
            validation['nameContact'] = 1;
        }
    }


    var isvalid = emailRegexStr.test(email);
    if (!isvalid) {

        $("#error_email").text("Please enter a valid email id");
        $("#emailAddress").val('');
        validation['emailAddress'] = 0;
    } else {
        $("#error_email").text("");
        validation['emailAddress'] = 1;
    }

    if ($.trim(subject) == '') {
        $("#error_subject").text("Please enter subject");
        $("#subject").val('');
        validation['subject'] = 0;
    } else {
        $("#error_subject").text("");
        validation['subject'] = 1;
    }

    if ($.trim(message) == '') {
        $("#error_message").text("Please enter your message");
        //$("#subject").val('');
        validation['message'] = 0;
    } else {
        $("#error_message").text("");
        validation['message'] = 1;
    }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error" + item).css("display", 'block');
            rtnfalse[i] = 1;

        } else {
            //$("#error" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }

        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {
        //$("#send").attr("disabled", "disable");
        $.ajax({
            url: baseurl + "home/sendContact",
            type: "POST",
            data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
            context: document.body,
            success: function(data) {
                //$("#loading").css("display", "none");
                if (data == "success") {
                    $("#success_message").css("color", "green");
                    $("#success_message").text("Thanks, we'll get back to you soon");

                    $("#nameContact").val("");
                    $("#emailAddress").val("");
                    $("#subject").val("");
                    $("#message").val("");

                    setTimeout(function() {
                        $('#success_message').text("");
                    }, 1500);
                }
            }
        });
    } else {
        return false;
    }
}


function validateCheckout() {

    $("#success_message").text('');
    var baseurl = $("#baseurl").val();
    var checkout_page = $("#business_store_checkout").val();
    var firstname = $("#cardfirstname").val();
    var lastname = $("#cardlastname").val();
    var card = $("#cardNumber").val();
    var card_type = $("#card_type").val();
    var expire_month = $("#expire_month").val();
    var expire_year = $("#expire_year").val();
    var cvv = $("#cvv").val();
    var address = $("#address").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var zip = $("#zip").val();
    var packageid = $("#packageid").val();
    var paymentMode = $("#paymentMode").val();
    var amount = $("#amount").val();
    var currency = $("#currency").val();
    var regex = /^[a-zA-Z\s]+$/;  //Characters only
    var regx = /^[A-Za-z0-9]+$/;  //Alphanumeric only
    var validation = [];

    if ($.trim(firstname) == '') {
        $("#error_cardfirstname").text("First name is mandatory");
        $("#cardfirstname").val("");
        $("#cardfirstname").css('border-color', '#424141');
        validation['firstname'] = 0;
    } else {
        if (regex.test($.trim(firstname))) {
            $("#error_cardfirstname").text("");
            $("#cardfirstname").css('border-color', '#ccc');
            validation['firstname'] = 1;
        } else {
            $("#error_cardfirstname").text("Only alphabets are allow");
            $("#cardfirstname").val("");
            $("#cardfirstname").css('border-color', '#424141');
            validation['firstname'] = 0;
        }
    }

    if ($.trim(lastname) == '') {
        $("#error_cardlastname").text("Last name is mandatory");
        $("#cardlastname").val("");
        $("#cardlastname").css('border-color', '#424141');
        validation['lastname'] = 0;
    } else {
        if (regex.test($.trim(lastname))) {
            $("#error_cardlastname").text("");
            $("#cardlastname").css('border-color', '#ccc');
            validation['lastname'] = 1;
        } else {
            $("#error_cardlastname").text("Only alphabets are allow");
            $("#cardlastname").val("");
            $("#cardlastname").css('border-color', '#424141');
            validation['lastname'] = 0;
        }
    }

    if (card == '') {
        $("#error_cardNumber").text("Credit Card no is mandatory");
        $("#cardNumber").css('border-color', '#424141');
        validation['cardNumber'] = 0;
    } else {
        if (card.length < 16) {
            $("#error_cardNumber").text("Credit Card length should not be less than 16");
            $("#cardNumber").val("");
            $("#cardNumber").css('border-color', '#424141');
            validation['cardNumber'] = 0;
        } else {
            $("#error_cardNumber").text("");
            $("#cardNumber").css('border-color', '#ccc');
            validation['cardNumber'] = 1;
        }
    }

    if (card_type == '') {
        $("#error_cardtype").text("Card type is mandatory");
        $("#card_type").css('border-color', '#424141');
        validation['card_type'] = 0;
    } else {
        $("#error_cardtype").text("");
        $("#card_type").css('border-color', '#ccc');
        validation['card_type'] = 1;
    }

    if (expire_month == '') {
        $("#error_expire_month").text("Expire month is mandatory");
        $("#expire_month").css('border-color', '#424141');
        validation['expire_month'] = 0;
    } else {
        $("#error_expire_month").text("");
        $("#expire_month").css('border-color', '#ccc');
        validation['expire_month'] = 1;
    }

    if (expire_year == '') {
        $("#error_expire_year").text("Expire year is mandatory");
        $("#expire_year").css('border-color', '#424141');
        validation['expire_year'] = 0;
    } else {
        $("#error_expire_year").text("");
        $("#expire_year").css('border-color', '#ccc');
        validation['expire_year'] = 1;
    }

    if (cvv == '') {
        $("#error_cvv").text("CVV is mandatory");
        $("#cvv").css('border-color', '#424141');
        validation['cvv'] = 0;
    } else {
        if (cvv.length < 3) {
            $("#error_cvv").text("CVV shuold be length of 3");
            $("#cvv").val("");
            $("#cvv").css('border-color', '#424141');
            validation['cvv'] = 0;
        } else {
            $("#error_cvv").text("");
            $("#cvv").css('border-color', '#ccc');
            validation['cvv'] = 1;
        }
    }

    if (address == '') {
        $("#error_address").text("Address is mandatory");
        $("#address").css('border-color', '#424141');
        validation['address'] = 0;
    } else {
        $("#error_address").text("");
        $("#address").css('border-color', '#ccc');
        validation['address'] = 1;
    }

    if (country == '') {
        $("#error_country").text("Country is mandatory");
        $("#country").css('border-color', '#424141');
        validation['country'] = 0;
    } else {
        $("#error_country").text("");
        $("#country").css('border-color', '#ccc');
        validation['country'] = 1;
    }

    if ($.trim(state) == '') {
        $("#error_state").text("State is mandatory");
        $("#state").css('border-color', '#424141');
        validation['state'] = 0;
    } else {
        if (regex.test($.trim(state))) {
            $("#error_state").text("");
            $("#state").css('border-color', '#ccc');
            validation['state'] = 1;
        } else {
            $("#error_state").text("Only alphabets are allow");
            $("#state").val("");
            $("#state").css('border-color', '#424141');
            validation['state'] = 0;
        }
    }

    if ($.trim(city) == '') {
        $("#error_city").text("City is mandatory");
        $("#city").css('border-color', '#424141');
        validation['city'] = 0;
    } else {
        if (regex.test($.trim(city))) {
            $("#error_city").text("");
            $("#city").css('border-color', '#ccc');
            validation['city'] = 1;
        } else {
            $("#error_city").text("Only alphabets are allow");
            $("#city").val("");
            $("#city").css('border-color', '#424141');
            validation['city'] = 0;
        }
    }

    if ($.trim(zip) == '') {
        $("#error_zip").text("Zip code is mandatory");
        $("#zip").css('border-color', '#424141');
        validation['zip'] = 0;
    } else {
        if (regx.test($.trim(zip))) {
            $("#error_zip").text("");
            $("#zip").css('border-color', '#ccc');
            validation['zip'] = 1;
        } else {
            $("#error_zip").text("Only alphabets and numbers are allow");
            $("#zip").val("");
            $("#zip").css('border-color', '#424141');
            validation['zip'] = 0;
        }
    }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error" + item).css("display", 'block');
            rtnfalse[i] = 1;

        } else {
            //$("#error" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }

        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {
        if(checkout_page == 'business_store_checkout'){
            $(".close").css("display", "none");
            $("#loading").css("display", "block");
            $.ajax({
                url: baseurl + "campaign/saveCheckoutPayment",
                type: "POST",
                data: "firstname=" + firstname + "&lastname=" + lastname + "&card=" + card + "&card_type=" + card_type + "&expire_month=" + expire_month + "&expire_year=" + expire_year + "&cvv=" + cvv + "&address=" + address + "&country=" + country + "&state=" + state + "&city=" + city + "&zip=" + zip + "&packageid=" + packageid + "&amount=" + amount + "&currency=" + currency + "&paymentMode=" + paymentMode,
                context: document.body,
                success: function(data) {
                    //alert(data);
                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");
                    if (data == "Success") {
                        $("#success_message").css("color", "green");
                        $("#success_message").text('You bought made a purchase!');

                        setTimeout(function() {
                            $('.modal, .modal-backdrop').hide('slow').remove();
                        }, 1500);
                    }
                    else {
                        $("#success_message").css("color", "#424141");
                        $("#success_message").text('Payment unsuccessful, please try again');
                    }
                }
            });
        }else{
          $(".close").css("display", "none");
          $("#loading").css("display", "block");
          $.ajax({
              url: baseurl + "businessUser/saveCheckoutPayment",
              type: "POST",
              data: "firstname=" + firstname + "&lastname=" + lastname + "&card=" + card + "&card_type=" + card_type + "&expire_month=" + expire_month + "&expire_year=" + expire_year + "&cvv=" + cvv + "&address=" + address + "&country=" + country + "&state=" + state + "&city=" + city + "&zip=" + zip + "&packageid=" + packageid + "&amount=" + amount + "&currency=" + currency + "&paymentMode=" + paymentMode,
              context: document.body,
              success: function(data) {
                  //alert(data);
                  $(".close").css("display", "block");
                  $("#loading").css("display", "none");
                  if (data == "Success") {
                      $("#success_message").css("color", "green");
                      $("#success_message").text('You bought made a purchase!');

                      setTimeout(function() {
                          $('.modal, .modal-backdrop').hide('slow').remove();
                      }, 1500);
                  }
                  else {
                      $("#success_message").css("color", "#424141");
                      $("#success_message").text('Payment unsuccessful, please try again');
                  }
              }
          });
        }
    } else {
        return false;
    }
}


$('#login_username').keypress(function(e) {
    if (e.which == 13) {
        topSignIn();
        return false;
    }
});

$('#login_password').keypress(function(e) {
    if (e.which == 13) {
        topSignIn();
        return false;
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(1).toUpperCase() + string.slice(2);
}


// js for reward

function showimageprvReward(input, str, css)
{
    //
    if (input.files && input.files[0])
    {
        var cc = input.files[0].type;
        if (cc.indexOf('image') != -1)
        {

            var filerdr = new FileReader();

            filerdr.onload = function(e)
            {

                $('#imgprvreward' + str).attr('src', e.target.result);
                var image = new Image();

                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;

                //Validate the File Height and Width.
                image.onload = function() {
                    var height = this.height;
                    var width = this.width;
                    $('#imageHeight').val(this.height);
                    $('#imageWidth').val(this.width);

                };
                $("#imgprvreward" + str).css('display', 'block');
                if (str != '')
                {
                    if (css == 'css')
                    {
                        $("#imgprvreward" + str).css('margin-left', '10%');
                    }
                }
                $("#error_span" + str).html("");
            }
            filerdr.readAsDataURL(input.files[0]);
            $("#crossReward").css('display', 'block');
            $("#fileErrorCampaign").html("");
            $("#fileValidation").val("0");
            event.stopImmediatePropagation();
        } else {
            $("#fileErrorCampaign").html("Please select a valid Image");
            $("#imgprvreward" + str).css("display", "none");
            $("#fileValidation").val("1");

            return false;
        }
    }
}

$("#crossReward").click(function(e) {
    e.preventDefault();
    $('#imgprvreward1').attr('src', '');
    $("#crossReward").css('display', 'none');
    $("#imgprvreward1").css('display', 'none');
    document.getElementById("jfilestyle-0").value = "";


});

// save reward

$(".validateReward").on('submit', (function(e) {
    e.preventDefault();
    //
    var baseurl = $("#baseurl").val();
    var notification = $("#reward_notification").val();

    var regex = /^[0-9\b]+$/;  // allow only numbers [0-9]
    var reward_coins = $("#reward_coins").val();

    var files = $('.imageReward')[0].files.length;
    var availabe = $("#reward_available").val();
    var startdate = $("#startdate").val();
    var enddate = $("#enddate").val();


    var locations = $("#locations").val();
    var validation = [];

        if(locations == null){
         $("#error_locations").text("Please select location");

        validation['location'] = 0;
        }else{
           $("#error_locations").text("");

        validation['location'] = 1;
        }
if($.trim(notification) == '' && files == 0){
   $("#reward_error_notification").text("Please add a notification and add an image also");
        $("#reward_notification").css("border-color", "#424141");
        $("#reward_notification").val("");
        validation['notification'] = 0;
}
else{
    if ($.trim(notification) == '') {
        $("#reward_error_notification").text("Please add a notification");
        $("#reward_notification").css("border-color", "#424141");
        $("#reward_notification").val("");
        validation['notification'] = 0;
    } else {
        $("#reward_error_notification").text("");
        $("#reward_notification").css("border-color", "#ccc");
        validation['notification'] = 1;
    }

   if (files == 0) {
        $("#reward_error_notification").text("Please add an image");
        $("#reward_notification").css("border-color", "#424141");

        validation['notification'] = 0;
    }
    else {
        //
        var filetype = $('.imageReward')[0].files[0].type;
        var fileUpload = $('.imageReward')[0];

        if (filetype == 'image/jpeg' || filetype == 'image/png' || filetype == 'image/gif') {

            if ($('#imageHeight').val() < 200 || $('#imageWidth').val() < 400) {
                $("#fileErrorReward").text("Min image size should be 400px X 200px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else if ($('#imageHeight').val() > 768 || $('#imageWidth').val() > 1024) {
                $("#fileErrorReward").text("Max image size should be 1024px X 768px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else {
                $("#fileErrorReward").text("");
                $("#fileValidation").val("0");
                validation['file'] = 1;

            }

        } else {
            $("#fileErrorReward").text("Please select a valid image");
            $("#fileValidation").val("1");
            validation['file'] = 0;
        }
    }
    }

    //alert($("#fileValidation").val());


    if ($.trim(availabe) == '' || $.trim(availabe) == '0') {
        $("#reward_error_available").text("How many are available?");
        $("#reward_available").val("");
        $("#reward_available").css("border-color", "#424141");
        validation['availabe'] = 0;
    } else {
        if (!regex.test(availabe)) {
            $("#reward_error_available").text("Only numbers are allowed");
            $("#reward_available").val("");
            $("#reward_available").css("border-color", "#424141");
            validation['availabe'] = 0;
        } else {
            $("#reward_error_available").text("");
            $("#reward_available").css("border-color", "#ccc");
            validation['availabe'] = 1;
        }
    }

    if (reward_coins == '' || reward_coins == 0) {
        $("#reward_error_coins").text("Please add coins");
        $("#reward_coins").val("");
        $("#reward_coins").css("border-color", "#424141");
        validation['reward_coins'] = 0;
    }
    else if (reward_coins > 200) {

        $("#reward_error_coins").text("Please add valid coins");
        $("#reward_coins").css("border-color", "#424141");
        validation['reward_coins'] = 0;
    } else {
        $("#reward_error_coins").text("");
        $("#reward_coins").css("border-color", "#ccc");
        validation['reward_coins'] = 1;
    }

     if (startdate == ''  )
    {
        $("#error_dob").text("Please select start date");
        //$("#error_enddob").val("");
        validation['date'] = 0;
    } else {


        $("#error_dob").text("");
        validation['date'] = 1;

    }
      if (enddate == '' )
    {
        $("#error_enddob").text("Please select end date");

        validation['enddate'] = 0;
    } else {

        $("#error_enddob").text("");
        validation['enddate'] = 1;

    }
if(startdate!='' && enddate!=''){

       var splitStartDate = startdate.split("-");
       var startdateMonth = splitStartDate[1];
       var startdateDay = splitStartDate[2];
       var splitEndDate = enddate.split("-");
       var enddateMonth = splitEndDate[1];
       var enddateDay = splitEndDate[2];

       if(parseInt(startdateMonth) == parseInt(enddateMonth)){

           if(parseInt(startdateDay) > parseInt(enddateDay)){

            $("#error_enddob").text("Please select valid date");

            validation['enddate'] = 0;
           }
       }
        else if(parseInt(startdateMonth) > parseInt(enddateMonth)){


            $("#error_enddob").text("Please select valid date");

            validation['enddate'] = 0;

       }

        else{
          $("#error_enddob").text("");

          validation['enddate'] = 1;
       }
       }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error" + item).css("display", 'block');
            rtnfalse[i] = 1;

        } else {
            //$("#error" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }

        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {

        $(".close").css("display", "none");
        $("#loading").css("display", "block");

        $.ajax({
            url: baseurl + "reward/saveReward/",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                // alert(data); return false;
                if (data) {
                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");
                    setTimeout(function() {
                        $('.modal, .modal-backdrop').hide('slow').remove();
                    }, 1500);

                    window.location.reload();

                }
                //window.location.href =  baseurl + "timeline";

            }
        });

    } else {
        return false;
    }
    return false;

}));

$("#reward_coins").keypress(function(e) {

     if ( e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

        //display error message
       return false;
    }else{

    var coins = $("#reward_coins").val();


    if ( e.which == 8){
        $("#reward_error_coins").text(" ");
        var price = coins * .01;
        $("#reward_price").val('£' + price);
        $("#reward_price1").val(price);
    }else{
    if (coins > 200) {
        $("#reward_error_coins").text("Only 200 coins allowed.");
        $("#reward_price").val('£');
        $("#reward_price1").val('');
        e.preventDefault();
    } else {
        $("#reward_error_coins").text(" ");
        var price = coins * .01;
        $("#reward_price").val('£' + price);
        $("#reward_price1").val(price);
    }
}

    }
});


$("#reward_coins").keyup(function(e) {
    var coins = $("#reward_coins").val();
     if(coins == '' || coins == null){
       $("#reward_error_coins").text("");
        $("#reward_price").val('£');
        $("#reward_price1").val('');
        e.preventDefault();
     }
    });

// delete reawrd

function deleteReward(id) {
    var baseurl = $("#baseUrl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'reward/deleteReward/' + id,
        success: function(data) {
            if (data) {
                $('.modal').modal('hide');
                $("#reward_" + id).remove();
            }
        },
    });

}

function nospaces(t) {
    if (t.value.match(/\s/g)) {
        t.value = t.value.replace(/\s/g, '');
    }
}

function blockUser(id) {

    var blockUserId = id
    var baseurl = $("#baseurl").val();


    $.ajax({
        type: "POST",
        url: baseurl + 'home/blockuser',
        data: "id=" + blockUserId,
        context: document.body,
        async: true,
        success: function(data) {
            data = JSON.parse(data);
            if (data == 'Blocked') {

                $('#userBlock').html('Unblock');
                location.reload();

            } else {

                $('#userBlock').html('Block');
                location.reload();
            }

        },
    });


}

var counter =1;
function addmorelocations(){
	counter++;
	var baseurl = $("#baseurl").val();
    //var counter = $("#count").val();
	$.ajax({
        type: "POST",
        url: baseurl + 'businessUser/addmorelocations',
        data: "counter=" + counter,
        context: document.body,
        async: true,
        success: function(data) {

        	$('.SlectBox').SumoSelect();
        	$("#count").val(counter);
            $("#addmorelocations").append(data);


        },
    });
}

function removelocations(cnt){
	//alert(counter);
	counter--;
	var count =  cnt-1;
	$("#count").val(count);
	$("#locationBox"+cnt).remove();
}

var locations = [];
function addUser(){

	//
	var baseurl = $("#baseurl").val();
	var firstname = $("#firstname").val();
	var lastname = $("#lastname").val();
	var email = $("#email").val();
	var location = $("#select0").val();
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
    if(usertype == '6'){
    	var arr1 = new Object();
    	arr1.firstname = firstname;
    	arr1.lastname = lastname;
    	arr1.email = email;
    	arr1.usertype = usertype;
    }

    if(usertype == '7'){

    if(location == ''){
    	$("#error_location").text("Please select location");
        validation['location'] = 0;
    }else{
    	locations = [];
    	locations.push(location);

    	$("#error_location").text("");
        validation['location'] = 1;

        if ($('.permission').is(":checked"))
        {
        	$("#error_permission").text("");
        	validation['permission'] = 1;
        }else{
        	$("#error_permission").text("Please select role");
        	validation['permission'] = 0;
        }
    }
    if(counter > 1){

    	for(i=2;i<=counter;i++){
    		if($("#select"+i).val() == ''){
    			$("#error_location"+i).text("Please select location");
    	        validation['location'+i] = 0;
    		}else{
    			locations.push($("#select"+i).val());
    			$("#error_location"+i).text("");
    	        validation['location'+i] = 1;

    	        if ($('.permission'+i).is(":checked"))
    	        {
    	        	$("#error_permission"+i).text("");
    	        	validation['permission'+i] = 1;
    	        }else{
    	        	$("#error_permission"+i).text("Please select role");
    	        	validation['permission'+i] = 0;
    	        }
    		}


    		if(hasDuplicates(locations) == true && location != '' && $("#select"+i).val() != ''){
    			//alert("Already selected this location");
        		//if($("#select"+i).val() == location && location != ''){
        			$("#error_samelocation"+i).text("Already selected this location");
    	        	validation['samelocation'+i] = 0;
        		}else{
        			$("#error_samelocation"+i).text("");
    	        	validation['samelocation'+i] = 1;
        		}
    	}

    }

	default_arry= new Object();
	var customKey = 'location';
	location_array = [];
	 default_arry['0'] = location;

	 var as1 = 1;
	$('input.permission:checkbox:checked').each(function () {
		default_arry[''+as1] = $(this).val();
	    as1++;
	});


	var arr = new Object();
	arr.location = new Object();
	arr.location[0]= default_arry;
	if(counter > 1){
		//var arr = [];

		for(i=2;i<=counter;i++){
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
	    arr.location[i] = currentArr;


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
	if(usertype == '7'){
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
        url: baseurl + 'businessUser/saveUser',
        data: arr,
        context: document.body,
        async: true,
        success: function(data) {
            //if(data == 1){
            $("#loading").css('display','none');
        	//$("#success").text("User is added successfully");
        	//$('.modal, .modal-backdrop').hide('slow').remove();
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

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function DeletePermission(id){
    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'permission/deleteRole/',
        data:"id="+id,
        context: document.body,
        async: true,
        success: function(data) {

            if(data == 1){

                parent.window.location.reload();

            }else{
                alert("You cannot delete this role");
                setTimeout(function () {
                $('.modal, .modal-backdrop').hide('slow').remove();
            	}, 1000);

            }
        }
    });
}

function deleteLocation(id){
    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'businessUser/deleteLocation/',
        data:"branch_id="+id,
        context: document.body,
        async: true,
        success: function(data) {
          //alert(data);
            if(data == 1){

                parent.window.location.reload();

            }else{
                setTimeout(function () {
                $('.modal, .modal-backdrop').hide('slow').remove();
            	}, 1000);
              alert(data);

            }
        }
    });
}

function editAddmoreLocations(){
	editcounter = $("#count").val();
	//editcounter++;
	var baseurl = $("#baseurl").val();
    //var counter = $("#count").val();
	$.ajax({
        type: "POST",
        url: baseurl + 'businessUser/editAddmorelocations',
        data: "counter=" + editcounter,
        context: document.body,
        async: true,
        success: function(data) {

        	$('.SlectBox').SumoSelect();
        	$("#count").val(++editcounter);
            $("#addmorelocations").append(data);


        },
    });
}

function editremovelocations(cnt){
	editcounter = $("#count").val();
	editcounter--;
	var count =  cnt-1;
	$("#count").val(editcounter);
	$("#locationBox"+cnt).remove();
}

function editUser(){

	//
	var baseurl = $("#baseurl").val();
	var firstname = $("#firstname").val();
	var lastname = $("#lastname").val();
	var email = $("#email").val();
	var location = $("#select0").val();
	var usertype = $("input[name='usertype']:checked").val();
	var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var user_email = $("#user_email").val();
	var count = $("#count").val();
	var userid = $("#userid").val();
	var validation = [];
	locations = [];

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

    if(usertype == '7'){
    for(i=0;i<count;i++){
		if($("#select"+i).val() == ''){
			$("#error_location"+i).text("Please select location");
	        validation['location'+i] = 0;
		}else{
			locations.push($("#select"+i).val());
			$("#error_location"+i).text("");
	        validation['location'+i] = 1;

	        if ($('.permissionInput'+i).is(":checked"))
	        {
	        	$("#error_permission"+i).text("");
	        	validation['permission'+i] = 1;
	        }else{
	        	$("#error_permission"+i).text("Please select role");
	        	validation['permission'+i] = 0;
	        }
		}


		if(hasDuplicates(locations) == true &&  $("#select"+i).val() != ''){
    			$("#error_samelocation"+i).text("Already selected this location");
	        	validation['samelocation'+i] = 0;
    		}else{
    			$("#error_samelocation"+i).text("");
	        	validation['samelocation'+i] = 1;
    		}
	}


	arr.location = new Object();

	if(count > 0){

		for(i=0;i<=count;i++){
			var currentArr = new Object;
			currentArr['0'] = $("#select"+i).val();
		var as = 1;
	    $('.permissions'+i+' input[type="checkbox"]:checked').each(function(){
	    	currentArr[''+as] = $(this).val();
	    	as++;

	    });

	    arr.location[i] = currentArr;

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
        url: baseurl + 'businessUser/editUser',
        data: arr,
        context: document.body,
        async: true,
        success: function(data) {
        	//alert(data);
        	//return false;
            //if(data == 1){
            $("#loading").css('display','none');
        	//$("#success").text("User is added successfully");
        	//$('.modal, .modal-backdrop').hide('slow').remove();
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

function createUsername(){
	//

	var baseurl = $("#baseurl").val();
	var username = $("#username").val();
	var password1 = $("#password1").val();
	var password2 = $("#password2").val();
	var token = $("#username_create_token").val();
	var validation = [];

	if (username == '')
    {
        $("#error_username").text("Create a cool @Username");
        $("#password1").val("");
        $("#password2").val("");
        validation['username'] = 0;
    } else {
        var usernames = uniqueusername(username, baseurl);
        $("#error_username").text(usernames[0]);
        validation['username'] = usernames[1];

    }

	if(password1 == ''){
		$("#error_password1").text("Please enter password");
		$("#password1").val("");
        $("#password2").val("");
        validation['password1'] = 0;
	}else{
		if(password1.length < 6){
			$("#error_password1").text("Password length should not be less than 6");
			$("#password1").val("");
	        $("#password2").val("");
			validation['password1'] = 0;
		}else{
			$("#error_password1").text("");
			validation['password1'] = 1;
		}
	}

	if(password2 == ''){
		$("#error_password2").text("Please enter Confirm password");
		$("#password1").val("");
        $("#password2").val("");
        validation['password2'] = 0;
	}else{
		if(password2.length < 6){
			$("#error_password2").text("Password length should not be less than 6");
			$("#password1").val("");
	        $("#password2").val("");
			validation['password2'] = 0;
		}else{
			$("#error_password2").text("");
			validation['password2'] = 1;
		}
	}

	if(password1 != password2){
		$("#error_samepassword").text("Password and Confirm password should be same");
		$("#password1").val("");
        $("#password2").val("");
        validation['same_password'] = 0;
	}else{
		$("#error_samepassword").text("");
		validation['same_password'] = 1;
	}
	console.log(validation);
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
    	$.ajax({
            type: "POST",
            url: baseurl + 'businessUser/saveUsername',
            data: "username_create_token=" + token + "&username=" + username + "&password=" + password1,
            context: document.body,
            async: true,
            success: function(data) {

                location.reload(baseurl);

            },
        });
    }else{
    	return false;
    }

}

function createAppUSername()
{

	var baseurl = $("#baseurl").val();
	var username = $("#username").val();
	var password1 = $("#password1").val();
	var password2 = $("#password2").val();
	var token = $("#username_create_token").val();
	var validation = [];

	if (username == '')
    {
        $("#error_username").text("Create a cool Username");
        $("#password1").val("");
        $("#password2").val("");
        validation['username'] = 0;
    } else {
        var usernames = uniqueusername(username, baseurl);
        $("#error_username").text(usernames[0]);
        validation['username'] = usernames[1];

    }

	if(password1 == ''){
		$("#error_password1").text("Please enter password");
		$("#password1").val("");
        $("#password2").val("");
        validation['password1'] = 0;
	}else{
		if(password1.length < 6){
			$("#error_password1").text("Password length should not be less than 6");
			$("#password1").val("");
	        $("#password2").val("");
			validation['password1'] = 0;
		}else{
			$("#error_password1").text("");
			validation['password1'] = 1;
		}
	}

	if(password2 == ''){
		$("#error_password2").text("Please enter Confirm password");
		$("#password1").val("");
        $("#password2").val("");
        validation['password2'] = 0;
	}else{
		if(password2.length < 6){
			$("#error_password2").text("Password length should not be less than 6");
			$("#password1").val("");
	        $("#password2").val("");
			validation['password2'] = 0;
		}else{
			$("#error_password2").text("");
			validation['password2'] = 1;
		}
	}

	if(password1 != password2){
		$("#error_samepassword").text("Password and Confirm password should be same");
		$("#password1").val("");
        $("#password2").val("");
        validation['same_password'] = 0;
	}else{
		$("#error_samepassword").text("");
		validation['same_password'] = 1;
	}
	//console.log(validation);
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
    	$.ajax({
            type: "POST",
            url: baseurl + 'appUser/saveUsername',
            data: "username_create_token=" + token + "&username=" + username + "&password=" + password1,
            context: document.body,
            async: true,
            success: function(data) {
              if(data == 1){

                	window.location.href = baseurl+"appUser";
              }else{
                  location.reload(baseurl);
              }
              //alert(data);

            },
        });
    }else{
    	return false;
    }

}


/* function added by sarvesh for addLocation validation */
function validateAddLocation() {

    $("#success_message").text('');
    var baseurl = $("#baseurl").val();
    var branch_id = $("#branch_id").val();
    var business_name = $("#business_name").val();
    var business_email = $("#business_email").val();
    var business_address = $("#business_address").val();
    var business_town = $("#business_town").val();
    var business_postcode = $("#business_postcode").val();
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var validation = [];

    if ($.trim(business_name) == '') {
        $("#business_name_error").text("Store name is mandatory");
        $("#business_name").val("");
        $("#business_name").css('border-color', '#424141');
        validation['business_name'] = 0;
    } else {
        $("#business_name_error").text("");
        $("#business_name").css('border-color', '#ccc');
        validation['business_name'] = 1;
    }

    if (business_email == '')
    {
        $("#business_email_error").text("Store email address is mandatory!");
        $("#business_email").css('border-color', '#424141');
        validation['business_email'] = 0;
    } else {
        var isvalid = emailRegexStr.test(business_email);
        if (!isvalid) {
            $("#business_email_error").text("Please enter a valid email!");
            $("#business_email").css('border-color', '#424141');
            validation['business_email'] = 0;
        } else {
            $("#business_email_error").text("");
            $("#business_email").css('border-color', '#ccc');
            //var emails = uniqueemail(business_email, baseurl);

            //$("#business_email_error").text(emails[0]);
            validation['business_email'] = 1;// emails[1];

        }

    }

    if ($.trim(business_address) == '') {
        $("#business_address_error").text("The Store Address field is required");
        $("#business_address").css('border-color', '#424141');
        validation['business_address'] = 0;
    } else {
        if ($('#business_address').val().length > 200) {
            $("#business_address_error").text("Maximum 200 character allowed");
            $("#business_address").css('border-color', '#424141');
            validation['business_address'] = 0;
        } else {
            $("#business_address_error").text("");
            $("#business_address").css('border-color', '#ccc');
            validation['business_address'] = 1;
        }
    }

    if ($.trim(business_town) == '') {
        $("#business_town_error").text("The Town field is required");
        $("#business_town").css('border-color', '#424141');
        validation['business_town'] = 0;
    } else {
        if ($('#business_town').val().length > 200) {
            $("#business_town_error").text("Maximum 200 character allowed");
            $("#business_town").css('border-color', '#424141');
            validation['business_town'] = 0;
        } else {
            $("#business_town_error").text("");
            $("#business_town").css('border-color', '#ccc');
            validation['business_town'] = 1;
        }
    }

    if ($.trim(business_postcode) == '') {
        $("#business_postcode_error").text("The Postcode field is required");
        $("#business_postcode").css('border-color', '#424141');
        validation['business_postcode'] = 0;
    } else {
        if ($('#business_postcode').val().length < 4 || $('#business_postcode').val().length > 10) {
            $("#business_postcode_error").text("Minimum 4 and Maximum 10 digit Postcode Number");
            $("#business_postcode").css('border-color', '#424141');
            validation['business_postcode'] = 0;
        } else {
            $("#business_postcode_error").text("");
            $("#business_postcode").css('border-color', '#ccc');
            validation['business_postcode'] = 1;
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

    if (errorResult == -1)
    {
        $(".close").css("display", "none");
        $("#loading1").css("display", "block");
        $.ajax({
            url: baseurl + "businessUser/businesAddNewLocation",
            type: "POST",
            data: "branch_id="+branch_id + "&business_name=" + business_name + "&business_email=" + business_email + "&business_address=" + business_address + "&business_town=" + business_town + "&business_postcode=" + business_postcode,
            context: document.body,
            success: function(data) {
                $(".close").css("display", "block");
                $("#loading1").css("display", "none");
                if (data == "Success") {
                    $("#success_message").css("color", "green");
                    $("#success_message").text('You bought made a purchase!');

                    setTimeout(function() {
                        $('.modal, .modal-backdrop').hide('slow').remove();
                    }, 1500);
                    parent.window.location.reload();
                }
                else {
                    $("#success_message").css("color", "#7870cc");
                    $("#success_message").text('Payment unsuccessful, please try again');
                }
            }
        });

    } else {
        return false;
    }
}

function showimageprvGeofence(input, str, css)
{
    //
    if (input.files && input.files[0])
    {
        var cc = input.files[0].type;
        if (cc.indexOf('image') != -1)
        {

            var filerdr = new FileReader();

            filerdr.onload = function(e)
            {

                $('#imgprv' + str).attr('src', e.target.result);
                var image = new Image();

                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;

                //Validate the File Height and Width.
                image.onload = function() {
                    var height = this.height;
                    var width = this.width;
                    $('#imageHeight').val(this.height);
                    $('#imageWidth').val(this.width);

                };
                $("#imgprv" + str).css('display', 'block');
                if (str != '')
                {
                    if (css == 'css')
                    {
                        $("#imgprv" + str).css('margin-left', '10%');
                    }
                }
                $("#error_span" + str).html("");
            }
            filerdr.readAsDataURL(input.files[0]);
            $("#crossGeofence").css('display', 'block');
            $("#fileErrorGeofence").html("");
            $("#fileValidation").val("0");
            event.stopImmediatePropagation();
        } else {
            $("#fileErrorGeofence").html("Please select a valid Image");
            $("#imgprv" + str).css("display", "none");
            $("#fileValidation").val("1");

            return false;
        }
    }
}

$("#crossGeofence").click(function(e) {

    e.preventDefault();
    $('#imgprv1').attr('src', '');
    $("#crossGeofence").css('display', 'none');
    $("#imgprv1").css('display', 'none');
    document.getElementById("jfilestyle-0").value = "";


});

$(".validateGeofence").on('submit', (function(e) {

	//
	 e.preventDefault();
    var baseurl = $("#baseurl").val();
    var notification = $("#notification").val();
    var geofenceType = $('input[name="geofenceType"]:checked').val();
    var files = $('.imageGeofence')[0].files.length;
    var locations = $("#locations").val();
    var DistanceSliderVal2 = $("#DistanceSliderVal2").text();
    var validation = [];


    if ($.trim(notification) == '') {
        $("#error_notification").text("Please add a notification");
        $("#notification").css("border-color", "#424141");
        $("#notification").val("");
        validation['notification'] = 0;
    } else {
        $("#error_notification").text("");
        $("#notification").css("border-color", "#ccc");
        validation['notification'] = 1;
    }
    if (files == 1) {
        //
        var filetype = $('.imageGeofence')[0].files[0].type;
        var fileUpload = $('.imageGeofence')[0];

        if (filetype == 'image/jpeg' || filetype == 'image/png' || filetype == 'image/gif') {

            if ($('#imageHeight').val() < 200 || $('#imageWidth').val() < 400) {
                $("#fileErrorGeofence").text("Min image size should be 400px X 200px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else if ($('#imageHeight').val() > 768 || $('#imageWidth').val() > 1024) {
                $("#fileErrorGeofence").text("Max image size should be 1024px X 768px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else {
                $("#fileErrorGeofence").text("");
                $("#fileValidation").val("0");
                validation['file'] = 1;

            }

        } else {
            $("#fileErrorCampaign").text("Please select a valid image");
            $("#fileValidation").val("1");
            validation['file'] = 0;
        }
    }

    if(locations == null){
        $("#error_locations").text("Please select location");
        $("#error_geofenceCreated").text("");
       validation['location'] = 0;
       }else{
          $("#error_locations").text("");
          $("#error_geofenceCreated").text("");
       validation['location'] = 1;
       }

    if(DistanceSliderVal2 == '0' || DistanceSliderVal2 < '1'){
    	$("#error_radius").text('Radius should not be less than 1 meter');
    	validation['radius'] = 0;
    }else{
    	$("#error_radius").text('');
    	validation['radius'] = 1;
    }

    if(validation['location'] == 1){
    	var fd = new FormData(this);
    	$.ajax({
            url: baseurl + "geoFence/checkGeofence/",
            type: "POST",
            data: "location="+locations,
            //contentType: false,
           // cache: false,
            //processData: false,
            success: function(data) {
            	//alert(data);return false;
            	if(data != 1 && data != 0){
            		$("#error_geofenceCreated").text('Already created Geofence for '+data);
            		validation['geofenceCreated'] = 0;
            	}else if(data == 0){
            		$("#error_geofenceCreated").text("You don't have more geofences");
            		validation['geofenceCreated'] = 0;
            	}
            	else if(data == 1){
            		$("#error_geofenceCreated").text('');
            		validation['geofenceCreated'] = 1;


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

            	    if (errorResult == -1)
            	    {
            	       $(".close").css("display", "none");
            	       $("#loading").css("display", "block");

            	       fd.append('radius',DistanceSliderVal2);
            	        $.ajax({
            	            url: baseurl + "geoFence/saveGeofence/",
            	            type: "POST",
            	            data: fd,
            	            contentType: false,
            	            cache: false,
            	            processData: false,
            	            success: function(data) {
            	            	//alert(data);return false;
            	                if (data == 'save') {

            	                    $(".close").css("display", "block");
            	                    $("#loading").css("display", "none");


            	                     window.location.reload();
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
//alert(validation['geofenceCreated']);
    /*var rtnfalse = [];
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


    if (errorResult == -1)
    {
       $(".close").css("display", "none");
       $("#loading").css("display", "block");
       var fd = new FormData(this);
       fd.append('radius',DistanceSliderVal2);
        $.ajax({
            url: baseurl + "geoFence/saveGeofence/",
            type: "POST",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
            	//alert(data);
                if (data == 'save') {
                	//alert(data);

                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");


                     window.location.reload();
                }


            }
        });

    } else {
        return false;
    }*/
    return false;

}));

function DeleteGeofence(id){

	var geofenceId = id;
	var baseurl = $("#baseurl").val();

	$.ajax({
		url: baseurl + "geoFence/updateGeofence/",
        type: "POST",
        data: "geofenceId="+geofenceId,
        success: function(data) {

        	if(data == 1){
        		window.location.href = baseurl+"geoFence";
        	}
        }
	});

}

function contactValidation(){

	var baseurl = $("#baseurl").val();
	var external_user_id = $("#external_user_id").val();
	var firstname = $("#firstname").val();
	var lastname = $("#lastname").val();
	var email = $("#email").val();
	var phone = $("#phone_number").val();
	var appgroup = $("#appgroup").val();
//	var cookies = $("#cookies").val();
	var croppedImage = $("#profilePic").val();
    var personaUsers = $("#personaUsers").val();
    var removeImage = $("#removeImage").val();
    var company = $("#companyContact").val();
	var letters = /^[a-zA-Z\s]*$/;
	var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	var validation = [];

//		if( cookies != "")
//		{
if ($.trim(personaUsers) == '')
  {
      personaUsers = "";
  }
		if ($.trim(firstname) == '')
	    {
	        $("#error_firstname").text("Please enter your first name!");
	        //$("#firstname").val("");
	        $("#firstname").css("border-color", "#424141");
	        validation['firstname'] = 0;
	    } else {

	        if (!letters.test($.trim(firstname))) {
	            $("#error_firstname").text("First Name contains only alphabets");
	            //$("#firstname").val("");
	            $("#firstname").css("border-color", "#424141");
	            validation['firstname'] = 0;
	        } else {
	            $("#error_firstname").text("");
	            $("#firstname").css("border-color", "#ccc");
	            validation['firstname'] = 1;
	        }
	    }


		if ($.trim(lastname) == '')
	    {
	        $("#error_lastname").text("Please enter your last name!");
	        //$("#lastname").val("");
	        $("#lastname").css("border-color", "#424141");
	        validation['lastname'] = 0;
	    } else {

	        if (!letters.test($.trim(lastname))) {
	            $("#error_lastname").text("Last Name contains only alphabets");
	            //$("#lastname").val("");
	            $("#lastname").css("border-color", "#424141");
	            validation['lastname'] = 0;
	        } else {
	            $("#error_lastname").text("");
	            $("#lastname").css("border-color", "#ccc");
	            validation['lastname'] = 1;
	        }
	    }

            if (email == '')
        {
            $("#error_email").text("Please enter your email! ");
            $("#email").css("border-color", "#424141");
            validation['email'] = 0;
        } else {
            var isvalid = emailRegexStr.test(email);
            if (!isvalid) {
                $("#error_email").text("Please enter a valid email!");
                $("#email").css("border-color", "#ccc");
                $("#email").val("");
                validation['email'] = 0;
            } else {
                var emails = uniqueemailinContact(email, baseurl, external_user_id);
                $("#error_email").text(emails[0]);
                $("#email").css("border-color", "#ccc");
                validation['email'] = emails[1];

            }
        }

        if($.trim(phone) == ''){
            $("#phone_number").css("border-color", "#ccc");
            $("#error_phone").text('');
            validation['phone'] = 1;
        }else{
            if (/\D/g.test(phone))
            {
             $("#error_phone").text('Only digits are allow');
             $("#phone_number").css("border-color", "#424141");
             validation['phone'] = 0;
            }else{
                if(phone.length >= 10){
                    $("#phone_number").css("border-color", "#ccc");
                    $("#error_phone").text('');
                    validation['phone'] = 1;
                }else{
                    $("#error_phone").text('Please enter atleast 10 digits');
                    $("#phone_number").css("border-color", "#424141");
                    validation['phone'] = 0;
                }

            }
        }

        if($.trim(company) == ''){
            $("#companyContact").css("border-color", "#ccc");
            $("#error_company").text('');
            validation['company'] = 1;
        }else {

	        $("#error_company").text("");
	            $("#companyContact").css("border-color", "#ccc");
	            validation['company'] = 1;
	    }


   if ( $( "#appgroup" ).length ) {

		if ($.trim(appgroup) == '')
	    {
	        $("#error_appgroup").text("Please select app group!");
	        $("#appgroup").css("border-color", "#424141");
	        validation['appgroup'] = 0;
	    } else {

	        $("#error_appgroup").text("");
            $("#appgroup").css("border-color", "#ccc");
            validation['appgroup'] = 1;

	    }
   }
        if(croppedImage != ''){
            var pic = croppedImage;
        }else{
        }
            var pic = '';


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
	        	    if (errorResult == -1)
	        	    {
	        	       $(".close").css("display", "none");
	        	       $("#loading").css("display", "block");

	        	        $.ajax({
	        	            url: baseurl + "contact/saveContact/",
	        	            type: "POST",
	        	            data: "firstname="+firstname +"&lastname="+lastname+"&email="+email+"&company="+company+"&phone="+phone+"&external_user_id="+external_user_id+"&appgroup="+appgroup+"&personaUsers="+personaUsers+"&pic="+pic+"&removeImage="+removeImage,
	        	            success: function(data) {
                                  //alert(data); exit;  //alert(data); return false;
                                if(data == 'Please upload another image'){
                                                    $(".close").css("display", "block");
                                                    $("#loading").css("display", "none");
                                                    $("#upload_image_error").text(data);
                                                    setTimeout(function(){
                                                        $("#upload_image_error").text("");
                                                    }, 1500);
                                                    return false;
                                                }else{
                                                    $(".close").css("display", "block");
                                                    $("#loading").css("display", "none");
                                                    window.location.reload();
                                                }

	        	                /*if (data != "") {

                                    $("#userSave").val("1");

	        	                	if (croppedImage != '') {
		        	                    $.ajax({
		        	                        type: "POST",
		        	                        url: baseurl + 'contact/saveprofileimage',
		        	                        data: "pic=" + croppedImage+"&userid="+data+"usertype=external_user", //likeimage 12
		        	                        cache: false,
		        	                        processData: false,
		        	                        contentType: "application/x-www-form-urlencoded",
		        	                        success: function(data) {
                                                //alert(data); return false;
                                                if(data == 'Please upload another image'){
                                                    $(".close").css("display", "block");
                                                    $("#loading").css("display", "none");
                                                    $("#upload_image_error").text(data);
                                                    return false;
                                                }else{
                                                    $(".close").css("display", "block");
                                                    $("#loading").css("display", "none");
                                                    window.location.reload();
                                                }

		        	                        },
		        	                        error : function (data)
		        	                        {

		        	                        }
		        	                    });


	        	                	} else {
	        	                		$(".close").css("display", "block");
    	        	                    $("#loading").css("display", "none");
    	        	                    window.location.reload();
	        	                	}




	        	                }*/


	        	            }
	        	        });

	        	    } else {
	        	        return false;
	        	    }

	        //    }
//			});
		//}
//	} else{
//
//		$("#errorAppHref").trigger("click");
//	}
}

function uniqueemailinContact(value, baseurl, external_user_id)
{
	var msg = [];
    $.ajax({
        type: "POST",
        async: false,
        url: baseurl + 'contact/getConatctDetails',
        data: "email=" + value+"&external_user_id="+external_user_id,
        context: document.body,
        success: function(data)
        {
        	if (data != 'exits')
            {
                msg[0] = '';
                msg[1] = 1;
            } else {
                msg[0] = "This Email address is already associated with one of the contact";  //This email is already registered with Hurree
                msg[1] = 0;
            }
        }
    });
    return msg;
}
function deleteContact(id){

    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'contact/deleteContact/',
        data:"contact_id="+id,
        context: document.body,
        async: true,
        success: function(data) {

            if(data == 1){

                parent.window.location.reload();

            }
        }
    });
}

$(".segmentForm1").on('submit', (function(e) {
   var segmentType =  $('#segmentType').val();
   var gender = $('#segment1').val();
   var age = $('#segment2').val();
   var whohave = $('#segment3').val();
   var baseurl = $("#baseurl").val();
   if(gender == '' && age == '' && whohave == ''){
       $('#error_notification').html("Please select atleast one criteria.");
       return false;
   }else{
       $('#error_notification').html("");
       $.ajax({
           url: baseurl + "campaign/saveSegment/",
           type: "POST",
           data: new FormData(this),
           contentType: false,
           cache: false,
           processData: false,
           success: function(data) {
             //console.log(data);
             var response = $(data).filter('li');
             //console.log(response.index(0));
             //console.log(response.index(0).val());
             if(response.index(0) == '0'){
               $(".segmentUserList").css({"height":"200px","overflow":"auto","position":"relative","width":"100%","margin-bottom":"50px"});
             }
             $(".segmentUserList").html();
             $(".segmentUserList").html(data);
             /*if (data) {
                 $(".close").css("display", "block");
                 $("#loading").css("display", "none");
                //window.location.reload();
             }*/
           }
         });
         return false;
     }
     return false;
}));


$(".validateInsightsCampaign").on('submit', (function(e) {
    //
    var baseurl = $("#baseurl").val();
    var notification = $("#notification").val();
    var type = $("#type").val();
    var regex = /^[0-9\b]+$/;  // allow only numbers [0-9]
    var files = $('.imageCampaign')[0].files.length;
    var availabe = $("#availabe").val();
    var campaign_coin = $("#campaign_coin").val();
    var startdate = $("#startdate").val();
    var enddate = $("#enddate").val();
    var validation = [];

    if ($.trim(notification) == '') {
        $("#error_notification").text("Please add a notification");
        $("#notification").css("border-color", "#424141");
        $("#notification").val("");
        validation['notification'] = 0;
    } else {
        $("#error_notification").text("");
        $("#notification").css("border-color", "#ccc");
        validation['notification'] = 1;
    }
    if (files == 1) {
        //
        var filetype = $('.imageCampaign')[0].files[0].type;
        var fileUpload = $('.imageCampaign')[0];

        if (filetype == 'image/jpeg' || filetype == 'image/png' || filetype == 'image/gif') {

            if ($('#imageHeight').val() < 200 || $('#imageWidth').val() < 400) {
                $("#fileErrorCampaign").text("Min image size should be 400px X 200px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else if ($('#imageHeight').val() > 768 || $('#imageWidth').val() > 1024) {
                $("#fileErrorCampaign").text("Max image size should be 1024px X 768px");
                $("#fileValidation").val("1");
                validation['file'] = 0;
            }
            else {
                $("#fileErrorCampaign").text("");
                $("#fileValidation").val("0");
                validation['file'] = 1;

            }

        } else {
            $("#fileErrorCampaign").text("Please select a valid image");
            $("#fileValidation").val("1");
            validation['file'] = 0;
        }
    }
    //alert($("#fileValidation").val());

    if (type == 'discount') {
        var discoutPercentage = $("#discoutCampaign").val();
        if ($.trim(discoutPercentage) == '' || $.trim(discoutPercentage) == '0' || !regex.test(discoutPercentage)) {
            $("#error_discoutCampaign").text("Please enter your discount");
            $("#discoutCampaign").css("border-color", "#424141");
            $("#discoutCampaign").val("");
            validation['discoutCampaign'] = 0;
        } else {
            if ((discoutPercentage >= 5) && (discoutPercentage <= 95)) {
                $("#error_discoutCampaign").text("");
                $("#discoutCampaign").css("border-color", "#ccc");
                validation['discoutCampaign'] = 1;
            } else {
                $("#error_discoutCampaign").text("Enter discount between 5 to 95");
                $("#discoutCampaign").css("border-color", "#424141");
                $("#discoutCampaign").val("");
                validation['discoutCampaign'] = 0;
            }
        }
    }

    if ($.trim(availabe) == '' || $.trim(availabe) == '0') {
        $("#error_availabe").text("How many are available?");
        $("#availabe").val("");
        $("#availabe").css("border-color", "#424141");
        validation['availabe'] = 0;
    } else {
        if (!regex.test(availabe)) {
            $("#error_availabe").text("Only numbers are allowed");
            $("#availabe").val("");
            $("#availabe").css("border-color", "#424141");
            validation['availabe'] = 0;
        } else {
            $("#error_availabe").text("");
            $("#availabe").css("border-color", "#ccc");
            validation['availabe'] = 1;
        }
    }

    if ($.trim(campaign_coin) == '' || $.trim(campaign_coin) == 0) {
          $("#error_campaign_coin").text("Please provide coins");
          $("#campaign_coin").val("");
          $("#campaign_coin").css("border-color", "#424141");
          validation['campaign_coin'] = 0;
    } else {
          if (!regex.test(campaign_coin)) {
              $("#error_campaign_coin").text("Only numbers are allowed");
              $("#campaign_coin").css("border-color", "#424141");
              validation['campaign_coin'] = 0;
          } else if ($.trim(campaign_coin) > 200) {
              $("#error_campaign_coin").text("You cannot enter more than 200 coins.");
              $("#campaign_coin").css("border-color", "#424141");
              validation['campaign_coin'] = 0;
          } else {
              $("#error_campaign_coin").text("");
              $("#campaign_coin").css("border-color", "#ccc");
              validation['campaign_coin'] = 1;
          }
    }
  if (startdate == ''  )
    {
        $("#error_dob").text("Please select start date");
        //$("#error_enddob").val("");
        validation['date'] = 0;
    } else {


        $("#error_dob").text("");
        validation['date'] = 1;

    }
      if (enddate == '' )
    {
        $("#error_enddob").text("Please select end date");

        validation['enddate'] = 0;
    } else {

        $("#error_enddob").text("");
        validation['enddate'] = 1;

    }
   if(startdate!='' && enddate!=''){

       var splitStartDate = startdate.split("-");
       var startdate1 = splitStartDate[2];
       var splitEndDate = enddate.split("-");
       var enddate1 = splitEndDate[2];

       if(parseInt(startdate1) > parseInt(enddate1)){
          $("#error_enddob").text("Please select valid date");

          validation['enddate'] = 0;
       }else{
          $("#error_enddob").text("");

          validation['enddate'] = 1;
       }
   }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error" + item).css("display", 'block');
            rtnfalse[i] = 1;

        } else {
            //$("#error" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }

        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {
        $(".close").css("display", "none");
        $("#loading").css("display", "block");
        $.ajax({
            url: baseurl + "campaign/saveCampaign/",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                if (data) {
                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");

                    $.ajax({
                        url: baseurl + "campaign/postcampaign/",
                        type: "POST",
                        data: "campaignId=" + $.trim(data),
                        context: document.body,
                        success: function(data) {
                            var postUrl = baseurl + "campaign/fbPostOffer";
                            $('#post_facebook_page').attr('href', postUrl + '/' + $.trim(data));
                            $('#post_facebook_page').trigger('click'); //post_facebook_page
                            //  $("#success_message").text();
                        }
                    });//window.location.reload();
                }
            }
        });

    } else {
        return false;
    }
    return false;

}));

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

function brandUserPersonalDetails()
{

    var baseurl = $("#baseurl").val();
    //var url = baseurl.replace("trunk/", "");
    var firstname = $("#brand_firstname").val();
    var lastname = $("#brand_lastname").val();
    var email = $("#brand_email").val();
    var username = $("#brand_username").val();
    var password = $("#brand_password").val();
    //var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var confirmPassword= $("#brand_confpassword").val();
    var referredParent = '';
    if($('#referred_parent').length){
     referredParent= $("#referred_parent").val();
    }

    var letters = /^[a-zA-Z\s]*$/;
    var validation = [];

    if (firstname == '')
    {
        $("#error_brand_firstname").text("We need your first name!");
        //$("#brand_password").val("");
        //$("#brand_confpassword").val("");
        validation["brand_firstname"] = 0;
    } else {
        //var firstnameErr = checkOnlyAlphabetSpace(firstname);
        if (!letters.test($.trim(firstname))) {
        	$("#error_brand_firstname").text("First name contains only alphabets");
            //$("#brand_firstname").val("");
            //$("#brand_password").val("");
            //$("#brand_confpassword").val("");
            validation["brand_firstname"] = 0;
        } else {
            $("#error_brand_firstname").text("");
            validation["brand_firstname"] = 1;
        }
    }

            //alert(statusid);
            //document.getElementById('reReplyForm'+statusid).reset()
            //$('#reReplyForm'+statusid)[0].reset();
    if (lastname == '')
    {
        $("#error_brand_lastname").text("We need your last name!");
        //$("#brand_password").val("");
        //$("#brand_confpassword").val("");
        validation['brand_lastname'] = 0;
    } else {
        //var lastnameErr = checkOnlyAlphabetSpace(lastname);
        if (!letters.test($.trim(lastname))) {
            $("#error_brand_lastname").text("Last name contains only alphabets");
            //$("#brand_brand_lastname").val("");
            //$("#brand_password").val("");
            //$("#brand_confpassword").val("");
            validation['brand_lastname'] = 0;
        } else {
            $("#error_lastname").text("");
            validation['brand_lastname'] = 1;
        }

    }

    if (email == '')
    {
        $("#error_brand_email").text("Sorry, we need your email!");
        //$("#brand_password").val("");
        //$("#brand_confpassword").val("");
        validation['brand_email'] = 0;
    } else {
        var isvalid = emailRegexStr.test(email);
        if (!isvalid) {
            $("#error_brand_email").text("Please enter a valid email!");
            $("#brand_email").val("");
            //$("#brand_password").val("");
            //$("#brand_confpassword").val("");
            validation['brand_email'] = 0;
        } else {
            var emails = uniqueemail(email, baseurl);

            $("#error_brand_email").text(emails[0]);
            validation['brand_email'] = emails[1];

        }

    }

    if (username == '')
    {
        $("#error_brandusername").text("Create a cool Username");
        //$("#brand_password").val("");
        //$("#brand_confpassword").val("");
        validation['brand_username'] = 0;
    } else {
        var usernames = uniqueusername(username, baseurl);
        $("#error_brandusername").text(usernames[0]);
        validation['brand_username'] = usernames[1];

    }

    if (password == '')
    {
        $("#error_brand_password").text("You need a password, duh!");
        validation['brand_password'] = 0;
    } else {
        var passwordLength = $("#brand_password").val().length;
        if (passwordLength < 6) {
            $("#error_brand_password").text("6 characters minimum password");
            $("#brand_password").val("");
            $("#brand_confpassword").val("");
            validation['brand_password'] = 0;
        }
        else {
            $("#error_brand_password").text("");
            validation['brand_password'] = 1;
        }
    }

     if ((referredParent != '') && ($('#referred_parent').length > 0))
    {
        var referralCode = uniqueReferralCode(referredParent,baseurl);
        $("#error_referred_parent").text(referralCode[0]);
        validation['referred_parent'] = referralCode[1];

    }

    if(confirmPassword == '' )
    {
    	$("#error_brand_confpassword").text("Enter your password again!");
    	validation['brand_repassword'] = 0;
	} else {
	    if (password  !== confirmPassword) {
	        $("#error_brand_confpassword").text("Password doesn't match");
	        $("#brand_password").val("");
	        $("#brand_confpassword").val("");
	        validation['brand_password'] = 0;
	    }
	    else {
	        $("#error_brand_confpassword").text("");
	        validation['brand_repassword'] = 1;
	    }
	}

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            $("#error_" + item).css("display", 'block');
            rtnfalse[i] = 1;
        } else {
            $("#error_" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }
        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);
    if (errorResult == -1)
    {
        /*$("#businessSignUp").attr("data-toggle","modal");
         $("#businessSignUp").attr("data-target",".step1"); */
    	 $("#loader").css({"display": "block",
             "z-index": "10000",
             "background": "rgba(255,255,255,.9) url('https://www.hurree.co/assets/template/frontend/img/loader.svg') 50% 50% no-repeat",
             "width": "100%",
             "height": "100%",
             "position": "fixed",
             "text-align": "center",
             "top": "0",
             "bottom": "0"});
        $.ajax({
            type: "POST",
            url: baseurl + 'home/userRegistration',
            data: "firstname=" + firstname + "&lastname=" + lastname  + "&username=" + username + "&password=" + password + "&email=" + email + "&referred_parent=" + referredParent,
            context: document.body,
            success: function(data) {
            	if (data == 'Success') {

            		$("#loader").css({"display": "none"});
                    window.parent.location.href =  baseurl+"appUser"; //paypalTokenAuthorize

                } else {
                    var dec = decodeURI(data);
                    $("#loader").css({"display": "none"});
                    $("#alert").text(dec);
                    return false;
                }

                //$("#gotoStepPayment").trigger("click");
            }
        });
        return true;

    } else {

        return false;
    }

}
/*
function exportToHubspot(baseurl)
{
	$.ajax({
        type: "POST",
        url: baseurl + 'conatct/exportContactToHubspot',
        data: "firstname=" + firstname + "&lastname=" + lastname  + "&username=" + username + "&password=" + password + "&email=" + email,
        context: document.body,
        success: function(data) {

        	if (data == 'Success') {


        		exportToHubspot(baseurl);



            }

            //$("#gotoStepPayment").trigger("click");
        },
        error : function (data)
        {

        }
    });
}

*/
function brandUsercardValidation() {
    //

    var baseurl = $("#baseurl").val();
    var card_name = $("#bcard_name").val();
    var card_number = $("#bcard_number").val();
    var card_type = $("#bcard_type").val();
    var month = $("#bmonth").val();
    var year = $("#byear").val();
    var cvv2 = $("#bcvv2").val();
    var amount = $("#bamount").val();
    var cardLength = $("#bcard_number").val().length;
    var vat = $("#bvat").val();
    var total = $("#btotalamount").val();
    //var totalLocations = $("#totalLocations").val();
    var payment_trail = '';
    var country = $("#bcountry").val();
    var address1 = $("#baddress1").val();
    var address2 = $("#baddress2").val();
    var town = $("#btown").val();
    var postcode = $("#bpostCode").val();
    var amount = $("#bamount").val();


    var validation = [];


    if (country == '') {
        $("#pop_bcountry").text("The Country field is required");
        validation['country'] = 0;
    } else {
        $("#pop_bcountry").text("");
        validation['country'] = 1;
    }

    if (address1 == '') {
        $("#error_baddress1").text("The Address Street 1 field is required");
        validation['address1'] = 0;
    } else {
        if ($('#baddress1').val().length > 200) {
            $("#error_baddress1").text("Maximum 200 character allowed");
            validation['address1'] = 0;
        } else {
            $("#error_baddress1").text("");
            validation['address1'] = 1;
        }
    }

    if (town == '') {
        $("#error_btown").text("The Town field is required");
        validation['town'] = 0;
    } else {
        if ($('#btown').val().length > 200) {
            $("#error_btown").text("Maximum 200 character allowed");
            validation['town'] = 0;
        } else {
            $("#error_btown").text("");
            validation['town'] = 1;
        }
    }

    if (postcode == '') {
        $("#error_bpostCode").text("The Postcode field is required");
        validation['postcode'] = 0;
    } else {
        if ($('#bpostCode').val().length < 4 || $('#postcode').val().length > 10) {
            $("#error_bpostCode").text("Minimum 4 and Maximum 10 digit Postcode Number");
            validation['postcode'] = 0;
        } else {
            $("#error_bpostCode").text("");
            validation['postcode'] = 1;
        }
    }



    if (card_name == '') {
        $("#error_bcard_name").text("Name on Card required");
        validation['card_name'] = 0;
    } else {
        $("#error_bcard_name").text("");
        validation['card_name'] = 1;
    }

    if (card_number == '') {
        $("#error_bcard_number").text("Please enter card number");
        validation['card_number'] = 0;
    } else {
        var cardErr = checkOnlyNumeric(card_number);
        if (cardErr == "0") {
            $("#error_bcard_number").text("Credit card should be numeric");
            validation['card_number'] = 0;
        } else if (cardLength < 14) {
            $("#error_bcard_number").text("Incorrect length");
            validation['card_number'] = 0;
        }
        else {
            $("#error_bcard_number").text("");
            validation['card_number'] = 1;
        }
    }

    if (card_type == '') {
        $("#error_bcard_type").text("Please select card type");
        validation['card_type'] = 0;
    } else {
        $("#error_bcard_type").text("");
        validation['card_type'] = 1;
    }

    if (month == '' || year == '') {
        $("#error_bexpiry_date").text("Please select expiry date");
        validation['month'] = 0;
    } else {
        $("#error_bexpiry_date").text("");
        validation['month'] = 1;
    }

    if (cvv2 == '') {
        $("#error_bcvv2").text("Please enter CVV2");
        validation['cvv2'] = 0;
    } else {
        var cvv2Err = checkOnlyNumeric(cvv2);
        if (cvv2Err == "0") {
            $("#error_bcvv2").text("CVV2 must be numerical");
            validation['cvv2'] = 0;
        } else {
            $("#error_bcvv2").text("");
            validation['cvv2'] = 1;
        }
    }


    if($('input[type="checkbox"][name="bpayment_trail"]').is(':checked')) {
      var payment_trail = $("#bpayment_trail").val();
    }
    //console.log(payment_trail+"checkbox");

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            $("#error_" + item).css("display", 'block');
            rtnfalse[i] = 1;
        } else {
            $("#error_" + item).html('');
            rtnfalse[i] = 0;
        }
        i++;
    }
    //

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {
        $("#loader").css({"display": "block",
            "z-index": "10000",
            "background": "rgba(255,255,255,.9) url('https://www.hurree.co/assets/template/frontend/img/AjaxLoader.gif') 50% 50% no-repeat",
            "width": "100%",
            "height": "100%",
            "position": "fixed",
            "text-align": "center",
            "top": "0",
            "bottom": "0"});

        $('#busi-pay-submit').prop('disabled', true);
        $.ajax({
            type: "POST",
            url: baseurl + 'home/brandUserPayment',
            data: "card_name=" + card_name + "&card_number=" + card_number + "&card_type=" + card_type + "&month=" + month + "&year=" + year + "&cvv2=" + cvv2 + "&amount=" + amount + "&total=" + total + "&payment_trail=" + payment_trail + "&country="+ country+"&address1="+address1+"&address2="+address2+ "&town="+town+ "&postcode="+postcode,
            context: document.body,
            async: true,
            success: function(data) {

                if (data == 'Success') {

                    $("#loader").css({"display": "none"});
                    var baseurl = $("#baseurl").val();
                    window.parent.location.href =  window.parent.location.href+"appUser"; //paypalTokenAuthorize

                } else {
                    var dec = decodeURI(data);
                    $("#loader").css({"display": "none"});
                    $("#alert").text(dec);
                    return false;
                }//alert(data);
                //$("#steping").trigger("click");
            }
        });

        return true;
    } else {
        $("#loader").css({"display": "none"});
        return false;
    }
}

function getVatAmount(countryId)
{

	baseurl = $("#baseurl").val();
	$.ajax({
	      type: "POST",
	      url: baseurl + 'home/getCounrtyDetails',
	      data: "countryId=" + countryId+"&total_amount=99.99",
	      context: document.body,
	      success: function(data) {

	          var obj = jQuery.parseJSON(data);
	          if (obj.show == 1 )
	          {
		          $("#bvatAmount").text("$"+obj.VAT);
		          $("#btotal").text(" =  Total Amount : $"+obj.total);

		          $("#bvat").css("display", "block");
		          $("#bvatAmount").css("display", "block");
		          $("#btotal").css("display", "block");
		          $("#btotalamount").val(obj.total);
		          $("#bvat").val(obj.VAT);
	          } else {

	        	  $("#bvat").css("display", "none");
		          $("#bvatAmount").css("display", "none");
		          $("#btotal").css("display", "none");
		          $("#btotalamount").val("99.99");
		          $("#bvat").val("0");
	          }
	      }
	  });

}

/*
 * P : editProfileBrandUser
 *
 * Valide brand profile user
 */

function brandUserValidation ()
{
   $('.successClass').html('');
	// Get Values
    var emailRegexStr = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    var pattern = /[a-zA-Z]/;
    var letters = /^[a-zA-Z\s]*$/;
    var baseurl = $("#baseurl").val();
    var firstname = $("#firstname").val();
    var croppedImage = $("#profilePic").val();
    //var developerLogoImage = $("#developerLogoImage").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var bio = $("#bio").val();
    var contactNumber = $("#contactNumber").val();
    var newPassword = $("#newPassword").val();
    var confirmPassword = $("#confirmPassword").val();

    // Initilize object
    var validation = [];
    if (firstname == '')
    {
        $("#firstname_error").text("Please enter first name!");
        $("#firstname").css('border-color', '#424141');
        validation['firstname'] = 0;
    } else {
        var firstnameErr = checkOnlyAlphabetSpace(firstname);
        if (firstnameErr == "0") {
            $("#firstname_error").text("First name cannot contain numbers");
            $("#firstname").css('border-color', '#424141');
            validation['firstname'] = 0;
        } else {
            $("#firstname_error").text("");
            $("#firstname").css('border-color', '#ccc');
            validation['firstname'] = 1;
        }

    }


    if (lastname == '')
    {
        $("#lastname_error").text("Please enter last name!");
        $("#lastname").css('border-color', '#424141');
        validation['lastname'] = 0;
    } else {
        var lastnameErr = checkOnlyAlphabetSpace(lastname);
        if (lastnameErr == "0") {
            $("#lastname_error").text("Last name cannot contain numbers");
            $("#lastname").css('border-color', '#424141');
            validation['lastname'] = 0;
        } else {
            $("#lastname_error").text("");
            $("#lastname").css('border-color', '#ccc');
            validation['lastname'] = 1;
        }

    }
    if (email == '') {
        $("#email_error").text("Please enter email");
        $("#email").css('border-color', '#424141');
        validation['email'] = 0;
    } else {
        var isvalid = emailRegexStr.test(email);
        if (!isvalid) {
            $("#email_error").text("Please enter a valid email!");
            $("#email").css('border-color', '#424141');
            $("#email_error").val("");
             validation['email'] = 0;

        } else {
        	var emails = uniqueemailForProfilecheck(email, baseurl);
            if(emails[1] == 0){
            	$("#email").css('border-color', '#424141');
            }else{
            	$("#email").css('border-color', '#ccc');
            }
            $("#email_error").text(emails[0]);
            validation['email'] = emails[1];
        }
    }

    if(contactNumber == '') {
       $("#contactNumber_error").text("Please enter contact number");
       $("#contactNumber").css('border-color', '#424141');
            validation['contactNumber'] = 0;
    }else{

    	if (validatePhone('contactNumber')) {
	        if ($('#contactNumber').val().length < 9 || $('#contactNumber').val().length > 18) {
	            $("#contactNumber_error").text("Minimum 9 and Maximum 18 digit Phone/Mobile Number");
	            $("#contactNumber").css('border-color', '#424141');
	            validation['contactNumber'] = 0;
	        } else {
	            $("#contactNumber_error").text("");
	            $("#contactNumber").css('border-color', '#ccc');
	            validation['contactNumber'] = 1;
	        }
    	} else {
	        $("#contactNumber_error").text("Invalid Phone/Mobile Number");
	        $("#contactNumber").css('border-color', '#424141');
	        validation['contactNumber'] = 0;
    	}
    }

    if ($("#newPassword").length)
    {
        if (newPassword != '')
        {
        	var passwordLength = $("#newPassword").val().length;

        	if (passwordLength < 6) {
    			$("#password_error").text("6 characters minimum password");
    			$("#newPassword").css('border-color', '#424141');
    			validation['password'] = 0;

    	    } else if (confirmPassword == '') {
    	    	$("#password_error").text("");
    	    	$("#confirmPassword_error").text("Enter confirm password");
    	    	$("#confirmPassword").css('border-color', '#424141');
    	    	validation['confirmPassword'] = 0;

    	    } else if(newPassword != confirmPassword) {
    	    	$("#confirmPassword_error").text("Password doesn't match");
    	    	$("#confirmPassword").css('border-color', '#424141');
    	    	//$("#confirmPassword").val("");
    	    	validation['confirmPassword'] = 0;

    	    } else {
              	$("#password_error").text("");
              	$("#confirmPassword_error").text("");
              	$("#newPassword").css('border-color', '#ccc');
              	$("#confirmPassword").css('border-color', '#ccc');
              	validation['password'] = 1;
              	validation['confirmPassword'] = 1;
          	}
        }

        if(confirmPassword !="" && newPassword =="" ){
           $("#password_error").text("Enter Password");
    			$("#newPassword").css('border-color', '#424141');
    	    	validation['password'] = 0;
        }
    }
    if (croppedImage != '') {
    	$.ajax({
    		type: "POST",
            url: baseurl + 'home/saveprofileimage',
            data: "pic=" + croppedImage, //likeimage 12
            cache: false,
            processData: false,
            contentType: "application/x-www-form-urlencoded",
            success: function(data) {

                if (data) {
                    $('#saveResponse').text('Your profile updated successfully!!');
                    return true;
                } else {
                    return false;
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

    	var postData = $("#brandProfile").serializeArray();
		  //var formURL = $("#brandProfile").attr("action");

		 // call ajax
    	$.ajax({
        type: "POST",
        url: baseurl + 'appUser/saveProfile',
        data: postData,
        success: function(data) {
        	console.log(data);

            //alert(data);
              // parent.window.location.reload();linear-gradient(0deg, #eeeeee 0%, #d8d8d8 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)
        		if(data == 1) {
              $("#loader").css({"display": "none"});
        			$("#confirmPassword").val("");
        			$("#newPassword").val("");
        			$('.successClass').text('Your profile updated successfully.');
                    $('.successClass').css('color','#424141');
        		} else {
        			$('.successClass').text('Some error occurs, please save your profile again.');
        		}
        	},
    	});
    	return true;
    } else {
    	return false;
    }
}

function resetBrandUserConfirmPassword(){
   $("#confirmPassword_error").text("");
   $("#password_error").text("");
}

function resetBrandUserConfirmPasswordSingle(){
   $("#confirmPassword_error").text("");
}

function uniqueemailForProfilecheck(value, baseurl)
{
    var msg = [];
    $.ajax({
        type: "POST",
        async: false,
        url: baseurl + 'home/uniqueemailForProfile',
        data: "email=" + value,
        context: document.body,
        success: function(data)
        {
            if (data != 'exits')
            {
                msg[0] = '';
                msg[1] = 1;
            } else {
                msg[0] = "This email is already registered with Hurree";
                msg[1] = 0;
            }
        }
    });
    return msg;
}


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

	//cnt--;
	var count =  cnt-1;
	$("#groupBox"+cnt).remove();
	$("#count").val(count);

}


var locations = [];
function addappUser(){


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
    if(cnt > 1){

    	for(i=2;i<=cnt ;i++){
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
	if(cnt > 1){
		//var arr = [];

		for(i=2;i<=cnt;i++){
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
            $("#loading").css('display','none');
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
            $("#loading").css('display','none');
        	//$("#success").text("User is added successfully");
        	//$('.modal, .modal-backdrop').hide('slow').remove();
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

function exportEontact(str)
{
	$("#loading").css("display", "block");
	var baseurl =$("#baseurl").val();


	var isCheck = $(":checkbox:checked").length;
	if(isCheck  >0 )
	{
	var selected = [];
		$('.checkClass').each(function() {
		   if ($(this).is(":checked")) {
		       selected.push($(this).attr('value'));
		   }
		});


		if(str == 'salesforce')
		{
			var urls = 'contact/exportToSalesforce';
		} else{
			var urls = 'contact/exportToHubsort';
		}

		$.ajax({
	        type: "POST",
	        url: baseurl + urls,
	        data: "data=" + selected,
	        success: function(response) {

	        	$("#loading").css("display", "none");

	        	if(str == 'salesforce')
	    		{
	        		if(response == 400)
        			{
	        			$("#loading").css("display", "none");
	        			$("#errorExportCOntactSales").trigger('click');
        			} else {
                $('.checkClass').each(function() {
                   if ($(this).is(":checked")) {
                      $("input:checkbox").prop('checked', false);
                   }
                });
        				$("#sucessexportcontact").trigger('click');
        			}
	    		} else {
		            if(response != 202)
	            	{

		            	$("#errorImport").trigger('click');
	            	} else {
                  $('.checkClass').each(function() {
                     if ($(this).is(":checked")) {
                        $("input:checkbox").prop('checked', false);
                     }
                  });
	            		$("#sucessexportcontact").trigger('click');
	            	}
	    		}

	        },
	    });
	} else {
		$("#loading").css("display", "none");
		$("#errorcontact").trigger('click');
	}


}


function validateHubDetails()
{

	var hubid = $("#hubid").val();

	if(hubid == '')
	{
		$("#hubid").addClass("error");
		return false;
	} else {
		$("#hubid").removeClass("error");
		return true;
	}
}


$("#chkAll").change(function () {

	if($("#chkAll").prop("checked")== true)
	{
		$("input:checkbox").prop('checked', $(this).prop("checked"));
	} else {
		$("input:checkbox").prop('checked', false);
	}
});

function brandCheckout() {
    $("#success_message").text('');
    var baseurl = $("#baseurl").val();
    var checkout_page = $("#brand_checkout").val();
    var firstname = $("#cardfirstname").val();
    var lastname = $("#cardlastname").val();
    var card = $("#cardNumber").val();
    var card_type = $("#card_type").val();
    var expire_month = $("#expire_month").val();
    var expire_year = $("#expire_year").val();
    var cvv = $("#cvv").val();
    var total_appgroup =  $("#total_appgroup").val();
    var address = $("#address").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var zip = $("#zip").val();
    var packageid = $("#packageid").val();
    var paymentMode = $("#paymentMode").val();
    var amount = $("#amount").val();
    var currency = $("#currency").val();
    var regex = /^[a-zA-Z\s]+$/;  //Characters only
    var regx = /^[A-Za-z0-9]+$/;  //Alphanumeric only
    var validation = [];

    if ($.trim(firstname) == '') {
        $("#error_cardfirstname").text("First name is mandatory");
        $("#cardfirstname").val("");
        $("#cardfirstname").css('border-color', '#424141');
        validation['firstname'] = 0;
    } else {
        if (regex.test($.trim(firstname))) {
            $("#error_cardfirstname").text("");
            $("#cardfirstname").css('border-color', '#ccc');
            validation['firstname'] = 1;
        } else {
            $("#error_cardfirstname").text("Only alphabets are allow");
            $("#cardfirstname").val("");
            $("#cardfirstname").css('border-color', '#424141');
            validation['firstname'] = 0;
        }
    }

    if ($.trim(lastname) == '') {
        $("#error_cardlastname").text("Last name is mandatory");
        $("#cardlastname").val("");
        $("#cardlastname").css('border-color', '#424141');
        validation['lastname'] = 0;
    } else {
        if (regex.test($.trim(lastname))) {
            $("#error_cardlastname").text("");
            $("#cardlastname").css('border-color', '#ccc');
            validation['lastname'] = 1;
        } else {
            $("#error_cardlastname").text("Only alphabets are allow");
            $("#cardlastname").val("");
            $("#cardlastname").css('border-color', '#424141');
            validation['lastname'] = 0;
        }
    }

    if (card == '') {
        $("#error_cardNumber").text("Credit Card no is mandatory");
        $("#cardNumber").css('border-color', '#424141');
        validation['cardNumber'] = 0;
    } else {
        if (card.length < 16) {
            $("#error_cardNumber").text("Credit Card length should not be less than 16");
            $("#cardNumber").val("");
            $("#cardNumber").css('border-color', '#424141');
            validation['cardNumber'] = 0;
        } else {
            $("#error_cardNumber").text("");
            $("#cardNumber").css('border-color', '#ccc');
            validation['cardNumber'] = 1;
        }
    }

    if (card_type == '') {
        $("#error_cardtype").text("Card type is mandatory");
        $("#card_type").css('border-color', '#424141');
        validation['card_type'] = 0;
    } else {
        $("#error_cardtype").text("");
        $("#card_type").css('border-color', '#ccc');
        validation['card_type'] = 1;
    }

    if (expire_month == '') {
        $("#error_expire_month").text("Expire month is mandatory");
        $("#expire_month").css('border-color', '#424141');
        validation['expire_month'] = 0;
    } else {
        $("#error_expire_month").text("");
        $("#expire_month").css('border-color', '#ccc');
        validation['expire_month'] = 1;
    }

    if (expire_year == '') {
        $("#error_expire_year").text("Expire year is mandatory");
        $("#expire_year").css('border-color', '#424141');
        validation['expire_year'] = 0;
    } else {
        $("#error_expire_year").text("");
        $("#expire_year").css('border-color', '#ccc');
        validation['expire_year'] = 1;
    }

    if (cvv == '') {
        $("#error_cvv").text("CVV is mandatory");
        $("#cvv").css('border-color', '#424141');
        validation['cvv'] = 0;
    } else {
        if (cvv.length < 3) {
            $("#error_cvv").text("CVV shuold be length of 3");
            $("#cvv").val("");
            $("#cvv").css('border-color', '#424141');
            validation['cvv'] = 0;
        } else {
            $("#error_cvv").text("");
            $("#cvv").css('border-color', '#ccc');
            validation['cvv'] = 1;
        }
    }

    if (address == '') {
        $("#error_address").text("Address is mandatory");
        $("#address").css('border-color', '#424141');
        validation['address'] = 0;
    } else {
        $("#error_address").text("");
        $("#address").css('border-color', '#ccc');
        validation['address'] = 1;
    }

    if (country == '') {
        $("#error_country").text("Country is mandatory");
        $("#country").css('border-color', '#424141');
        validation['country'] = 0;
    } else {
        $("#error_country").text("");
        $("#country").css('border-color', '#ccc');
        validation['country'] = 1;
    }

    if ($.trim(state) == '') {
        $("#error_state").text("State is mandatory");
        $("#state").css('border-color', '#424141');
        validation['state'] = 0;
    } else {
        if (regex.test($.trim(state))) {
            $("#error_state").text("");
            $("#state").css('border-color', '#ccc');
            validation['state'] = 1;
        } else {
            $("#error_state").text("Only alphabets are allow");
            $("#state").val("");
            $("#state").css('border-color', '#424141');
            validation['state'] = 0;
        }
    }

    if ($.trim(city) == '') {
        $("#error_city").text("City is mandatory");
        $("#city").css('border-color', '#424141');
        validation['city'] = 0;
    } else {
        if (regex.test($.trim(city))) {
            $("#error_city").text("");
            $("#city").css('border-color', '#ccc');
            validation['city'] = 1;
        } else {
            $("#error_city").text("Only alphabets are allow");
            $("#city").val("");
            $("#city").css('border-color', '#424141');
            validation['city'] = 0;
        }
    }

    if ($.trim(zip) == '') {
        $("#error_zip").text("Zip code is mandatory");
        $("#zip").css('border-color', '#424141');
        validation['zip'] = 0;
    } else {
        if (regx.test($.trim(zip))) {
            $("#error_zip").text("");
            $("#zip").css('border-color', '#ccc');
            validation['zip'] = 1;
        } else {
            $("#error_zip").text("Only alphabets and numbers are allow");
            $("#zip").val("");
            $("#zip").css('border-color', '#424141');
            validation['zip'] = 0;
        }
    }

    var rtnfalse = [];
    var i = 0;
    for (var item in validation)
    {
        if (validation[item] == 0)
        {
            //$("#error" + item).css("display", 'block');
            rtnfalse[i] = 1;

        } else {
            //$("#error" + item).css("display", 'none');
            rtnfalse[i] = 0;
        }

        i++;
    }

    var errorResult = jQuery.inArray(1, rtnfalse);

    if (errorResult == -1)
    {
        if(checkout_page == 'brand_signup_checkout'){
            $(".close").css("display", "none");
            $("#loading").css("display", "block");
            $.ajax({
                url: baseurl + "appUser/brandUserSignupPayment",
                type: "POST",
                data: "firstname=" + firstname + "&lastname=" + lastname + "&card=" + card + "&card_type=" + card_type + "&expire_month=" + expire_month + "&expire_year=" + expire_year + "&cvv=" + cvv + "&address=" + address + "&country=" + country + "&state=" + state + "&city=" + city + "&zip=" + zip + "&packageid=" + packageid + "&amount=" + amount + "&currency=" + currency + "&paymentMode=" + paymentMode,
                context: document.body,
                success: function(data) {
                    //alert(data);
                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");
                    if (data == "Success") {
                        $("#success_message").css("color", "green");
                        $("#success_message").text('You purchase payment successful!');

                        setTimeout(function() {
                            $('.modal, .modal-backdrop').hide('slow').remove();
                            window.parent.location.href = baseurl + "appUser";
                        }, 5000);

                    }
                    else {
                        $("#success_message").css("color", "#424141");
                        $("#success_message").text('Payment unsuccessful, please try again');
                    }
                }
            });
        }else{
          $(".close").css("display", "none");
          $("#loading").css("display", "block");
          $.ajax({
              url: baseurl + "appUser/brandUserStorePayment",
              type: "POST",
              data: "firstname=" + firstname + "&lastname=" + lastname + "&card=" + card + "&card_type=" + card_type + "&expire_month=" + expire_month + "&expire_year=" + expire_year + "&cvv=" + cvv + "&total_appgroup=" + total_appgroup + "&address=" + address + "&country=" + country + "&state=" + state + "&city=" + city + "&zip=" + zip + "&packageid=" + packageid + "&amount=" + amount + "&currency=" + currency + "&paymentMode=" + paymentMode,
              context: document.body,
              success: function(data) {
                  //alert(data);
                  $(".close").css("display", "block");
                  $("#loading").css("display", "none");
                  if (data == "Success") {
                      $("#success_message").css("color", "green");
                      $("#success_message").text('Payment is successful!');

                      setTimeout(function() {
                          $('.modal, .modal-backdrop').hide('slow').remove();
                          window.parent.location.href = baseurl + "appUser";
                      },1000);

                  }
                  else {
                      $("#success_message").css("color", "#424141");
                      $("#success_message").text('Payment unsuccessful, please try again');
                  }
              }
          });
        }
    } else {
        return false;
    }
}

function brandPaymentByPaypal() {
    var baseurl = $("#baseurl").val();
    var amount = $("#amount").val();
    var brand_checkout = $("#brand_checkout").val();
    var packageid = $("#packageid").val();
    var total_appgroup = $("#total_appgroup").val();
    if(total_appgroup == ''){
      total_appgroup = 1;
    }
    $("#loader").css({"display": "block",
        "z-index": "10000",
        "background": "rgba(255,255,255,.9) url('https://www.hurree.co/assets/template/frontend/img/AjaxLoader.gif') 50% 50% no-repeat",
        "width": "100%",
        "height": "100%",
        "position": "fixed",
        "text-align": "center",
        "top": "0",
        "bottom": "0"});

        $.ajax({
              type: "POST",
              url: baseurl + 'appUser/brandPaymentByPaypal',
              data: "&amount=" + amount + "&brand_checkout=" + brand_checkout + "&packageid=" + packageid + "&total_appgroup=" + total_appgroup,
              context: document.body,
              async: true,
              success: function(data) {
                  if (data == 'Success') {
                      $("#loader").css({"display": "none"});
                      var baseurl = $("#baseurl").val();
                      window.parent.location.href = baseurl + "appUser/paypalTokenAuthorize"; //
                  } else {
                      var dec = decodeURI(data);
                      $("#loader").css({"display": "none"});
                      $("#alert").text(dec);
                      return false;
                  }
              }
        });
 }

function exportTimline(email)
{
	var baseurl = $("#baseurl").val();

	 $("#loader").css({"display": "block",
	        "z-index": "10000",
	        "background": "rgba(255,255,255,.9) url('https://www.hurree.co/assets/template/frontend/img/AjaxLoader.gif') 50% 50% no-repeat",
	        "width": "100%",
	        "height": "100%",
	        "position": "fixed",
	        "text-align": "center",
	        "top": "0",
	        "bottom": "0"});
    	$.ajax({

    		type: "POST",
            url: baseurl + 'contact/exportTimeline',
            data: 'email='+email,
            success: function(data){
            	if(data == 1){
            		$("#loader").css({"display": "none"});

            		$("#successExport").trigger('click');
            	} else {
            		$("#loader").css({"display": "none"});
            		$("#errorExport").trigger('click');

            	}
            }
    	});
 }

 function delete_campaigns(campaignId){
     var baseurl = $("#baseurl").val();
     $.ajax({
         type: "POST",
         url: baseurl + 'appUser/campaignsDelete/',
         data:"campaignId="+campaignId,
         context: document.body,
         async: true,
         success: function(data) {
             if(data == 1){
                 window.location.href = baseurl + 'appUser/insightsPage';
             }else{
                $('campaignError').html('Server Busy, please try again.');
             }
         }
     });
 }

 function clone_campaigns(campaignId){
     var baseurl = $("#baseurl").val();
     $.ajax({
         type: "POST",
         url: baseurl + 'appUser/campaignsClone/',
         data:"campaignId="+campaignId,
         context: document.body,
         async: true,
         success: function(data) {//alert(data);
             if(data != 0){
               $("#launchCampaign").trigger("click");
                      	setTimeout(function(){
                      		//$(".campaign-loader").css('display','none');
                      		$('.modal').modal('hide');
              }, 3000);
             window.location.href = baseurl + 'appUser/cloneSuccess/' + data;
             }else{
                $('campaignError').html('Server Busy, please try again.');
             }
         }
     });
 }

function checkFilesize(files){
    var file = files[0];
    var sizeKB = file.size / 1024;  //FIle size in KB

    if(sizeKB <= 10000){

        $("#filesize").val(1);
        $("#error_fileuploadsize").text('');
    }else{

        $("#filesize").val(0);
        $("#error_fileuploadsize").text('Maximum file size should not be more than 10MB');
    }
}

function submitXlsForm() {
    var baseurl = $("#baseurl").val();
    var filesize = $("#filesize").val();
    var file_data = $("#fileuploadxls").prop("files")[0];
    if (typeof file_data == 'undefined'){
     $("#error_fileupload").text('Please select a .xls or .xlsx file');
    return false;
    }
    if(filesize == 0){
        return false;
    }

    var form_data = new FormData();
    form_data.append("file", file_data);
    $("#loading").css('display', 'block');
    $.ajax({
        url: baseurl + "contact/saveXls/",
        type: "POST",
        dataType: 'text',
        data: form_data,
        processData: false,
        contentType: false,
        success: function (php_script_response) {
            $("#loading").css('display', 'none');
            if (php_script_response == 1) {
                $("#beforeUploadFile").hide();
                $("#afterUploadFile").show();
            }
        }
    });
    return false;
}

$(document).on('change', '#fileuploadxls', function () {
    $("#error_fileupload").text('');
    var val = $("#fileuploadxls").val().toLowerCase();
    var regex = new RegExp("(.*?)\.(xls|xlsx)$");
    if (!(regex.test(val))) {
        $("#fileuploadxls").val('');
        $("#error_fileupload").text('Please select correct file format in xls and xlsx');

    }else{



var fullPath = this.value
if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    document.getElementById("uploadFile").value = filename;
}



    }
});


function submitCsvForm() {
    var baseurl = $("#baseurl").val();
    var filesize = $("#filesize").val();
    var file_data = $("#fileuploadcsv").prop("files")[0];
    if (typeof file_data == 'undefined'){
     $("#error_csvupload").text('Please select a .csv file');
    return false;
    }
    if(filesize == 0){
        return false;
    }
    var form_data = new FormData();
    form_data.append("file", file_data);
    $("#loading").css('display', 'block');
    $.ajax({
        url: baseurl + "contact/saveCsv/",
        type: "POST",
        dataType: 'text',
        data: form_data,
        processData: false,
        contentType: false,
        success: function (php_script_response) {
            $("#loading").css('display', 'none');
            if (php_script_response == 1) {
                $("#beforeUploadFile").hide();
                $("#afterUploadFile").show();
            }
        }
    });
    return false;
}

$(document).on('change', '#fileuploadcsv', function () {
    $("#error_csvupload").text('');
    var val = $("#fileuploadcsv").val().toLowerCase();
    var regex = new RegExp("(.*?)\.(csv)$");
    if (!(regex.test(val))) {
        $("#fileuploadxls").val('');
        $("#error_csvupload").text('Please select correct file format in csv');

    }else{
var fullPath = this.value
if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    document.getElementById("uploadFile").value = filename;
}
    }
});
function submitNoteForm() {
    var baseurl = $("#baseurl").val();
    var noteArea = $("#noteArea").val();
    var loginUserId = $("#loginUserId").val();
    var contactUserId = $("#contactUserId").val();
    $("#loading").css('display', 'block');
    $.ajax({
        url: baseurl + "appUser/saveNote/",
        type: "POST",
        data: {noteArea: noteArea,loginUserId: loginUserId,contactUserId: contactUserId},
        success: function (response) {
            $("#loading").css('display', 'none');
            var returnedData = JSON.parse(response);
            if(returnedData.success){
              location.reload();
            }
        }
    });
    return false;
}


function submitEditNoteForm() {
    var baseurl = $("#baseurl").val();
    var noteArea = $("#noteArea").val();
    var eventId = $("#eventId").val();

    $("#loading").css('display', 'block');
    $.ajax({
        url: baseurl + "appUser/saveEditNote/",
        type: "POST",
        data: {noteArea: noteArea,eventId: eventId},
        success: function (response) {
            $("#loading").css('display', 'none');
            var returnedData = JSON.parse(response);
            if(returnedData.success){
              location.reload();
            }
        }
    });
    return false;
}
