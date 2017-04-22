var platform = '';
var baseurl = $("#baseurl").val();
     //For Android
     $("#profilePicFile").on('click', function(e){
        e.preventDefault();
        platform = 'android';
        //alert(platform);
        $("#uploadProfilePic").trigger('click');
    });

     //For iOS
     $("#iosPicFile").on('click', function(e){
        e.preventDefault();
        platform = 'iOS';
        //alert(platform);
        $("#uploadProfilePic").trigger('click');
    });

   // $('.fancybox').fancybox();
   $('.fancybox').fancybox({
          helpers: {overlay: {closeClick: false}},
          'beforeClose': function () {
              $('.cancelbtn').trigger('click');
              $('.delete').trigger('click');
              $('.upload').attr('style', 'display:block');
          }
      });
    $('.file').change(function(){

         $('.fancybox').trigger('click');

         $('.canvas').attr('style','overflow:auto; height:250px; float:left;');

    });

     $('#upld,#upld-default').click(function () {

          var croppedimage = $('.editor img').attr('src');
          if($('.file').val()!='')
          {
              if(platform == 'android'){
	              $('#android_app_img').attr('src',croppedimage);
	              $('#profilePic').attr('value',croppedimage);

              }else if(platform == 'iOS'){
                  alert('iOS');
            	  $('#ios_app_img').attr('src',croppedimage);
                  $('#iosPic').attr('value',croppedimage);
              }

          }
          else
          {
        	  if(platform == 'android'){
              $('#profilePic').attr('value',croppedimage);
              $('#android_app_img').attr('src',croppedimage);
              $('#ios_app_img').attr('src','');
        	  }else if(platform == 'iOS'){
        		  $('#iosPic').attr('value',croppedimage);
                  $('#ios_app_img').attr('src',croppedimage);
        	  }
          }

          var croppedimage = $('.editor img').attr('src');
          if($('.file').val()!='')
          {
        	  if(platform != 'developer'){
	              $('#imgprv').attr('src',croppedimage);
	              $('#profilePic').attr('value',croppedimage);
	              if(window.location.href == baseurl+'appUser'){
	              	$("#headerProfilePic").attr('src',croppedimage);
	              }
	              
        	  }
          }
          else
          {
        	  if(platform != 'developer'){
	              $('#profilePic').attr('value',croppedimage);
	              $('#imgprv').attr('src',croppedimage);
	              if(window.location.href == baseurl+'appUser'){
	              	$("#headerProfilePic").attr('src',croppedimage);
	              }
        	  }
          }


          $.fancybox.close();
          $('.cancelbtn').trigger('click');
          $('.delete').trigger('click');
      });

     //Campaign Push Notification image
     var pushtype = '';
     $("#pushIconImage").on('click', function(e){
        e.preventDefault();
        pushtype = 'push_icon';
        $("#uploadProfilePic").trigger('click');
    });

     $("#expandedIconImage").on('click', function(e){
        e.preventDefault();
        pushtype = 'expanded_image';
        $("#uploadProfilePic").trigger('click');
    });

     $('#upld,#upld-default').click(function () {

         var croppedimage = $('.editor img').attr('src');
         if($('.file').val()!='')
         {
             if(pushtype == 'push_icon'){
            	    $("#push_or").css('display','none');
                 	$("#push_img_url").css('display','none');
                 	$("#crossPushImage").css('display','block');
            	  	$('#android_app_img').css('display','block');
	              	$('#android_app_img').attr('src',croppedimage);
	              	$('#push_icon').attr('value',croppedimage);
	              	$("#upload_push").val("1");
             }
         }
         else
         {
       	  if(pushtype == 'push_icon'){
             $('#push_icon').attr('value',croppedimage);
             $('#android_app_img').attr('src',croppedimage);
             $('#android_app_img').css('display','block');
             $("#crossPushImage").css('display','block');
             $("#push_or").css('display','none');
             $("#push_img_url").css('display','none');
             $("#upload_push").val("1");
       	  }
         }

         $.fancybox.close();
         $('.cancelbtn').trigger('click');
         $('.delete').trigger('click');
     });

		 $('#upld,#upld-default').click(function () {

         var croppedimage = $('.editor img').attr('src');
         if($('.file').val()!='')
         {
             if(pushtype == 'expanded_image'){
                 $("#expanded_or").css('display','none');
                 $("#expanded_img_url").css('display','none');
                 $("#crossExpandedImage").css('display','block');
            	 $('#ios_app_img').css('display','block');
           	  	 $('#ios_app_img').attr('src',croppedimage);
                 $('#expandedImage').attr('value',croppedimage);
                 $("#upload_extended").val("1");
             }
         }
         else
         {
       	  if(pushtype == 'expanded_image'){
       		$('#expandedImage').attr('value',croppedimage);
            $('#ios_app_img').attr('src',croppedimage);
            $('#ios_app_img').css('display','block');
            $("#crossExpandedImage").css('display','block');
            $("#expanded_or").css('display','none');
            $("#expanded_img_url").css('display','none');
            $("#upload_extended").val("1");
       	  }
         }

         $.fancybox.close();
         $('.cancelbtn').trigger('click');
         $('.delete').trigger('click');
     });
     
     //For Developer Logo
     $("#developerLogoPic").on('click', function(e){
        e.preventDefault();
        platform = 'developer';
        //alert(platform);
        $("#uploadProfilePic").trigger('click');
    });

     $('#upld,#upld-default').click(function () {

         var croppedimage = $('.editor img').attr('src');
         if($('.file').val()!='')
         {

         }
         else
         {
       	  if(platform == 'developer'){
       		$('#logo').attr('src',croppedimage);
          	$('#developerLogoImage').attr('value',croppedimage);
            $('#developerimgprv').attr('src',croppedimage);
            $('#developerimgprv').css('display','block');
            $("#crossLogoImage").css('display','block');
            $("#defaultImg").css('display','none');
       	  }
         }

         $.fancybox.close();
         $('.cancelbtn').trigger('click');
         $('.delete').trigger('click');
     });
     
     //For In-App Messaging

     $(".uploadImage").on('click', function(e){
        e.preventDefault();
        platform = 'inApp';
        //alert(platform);
        $("#uploadProfilePic").trigger('click');
    });

     $('#upld,#upld-default').click(function () {

         var croppedimage = $('.editor img').attr('src');
         if($('.file').val()!='')
         {

         }
         else
         {
       	  if(platform == 'inApp'){
       	  		$("#imageUpload").val(1);
       	  		$('#inapp_image').attr('value',croppedimage);
       	  		$(".imageUrl").css('display','none');
       	  		$("#image_url").val("");
       	  		$("#image_url1").val("");
				$("#image_url2").val("");
       	  		$(".crossUploadImage").css('display','block');
       	  		$(".in_app_img").css('display','block');
       	  		$(".in_app_img").attr('src', croppedimage);
            	$(".previewImage").css('display','none');
            	$(".img").css('display','block');
				$(".imgSrc").css('display','block');
				$('.imgSrc').attr('src', croppedimage);
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

       	  }
         }

         $.fancybox.close();
         $('.cancelbtn').trigger('click');
         $('.delete').trigger('click');
     });

      //End In-App Messaging Crop