$("#loader").css({"display": "block","z-index": "10000", "position": "fixed","background": "rgba(255,255,255,.9) url('https://domain.com/img/loader.gif') 50% 50% no-repeat"});
$("#loader").css({"display": "none"});
 
 /* close popup after interval seconds */
$("#id").trigger("click");
   setTimeout(function(){
   $('.modal').modal('hide');
}, 3000);
 
 /* trigger element onClick */
 $("#id").trigger("click");
 
 /* function for delete record using ajax */
 function delete(id,type){
     var baseurl = $("#baseurl").val();
     $.ajax({
         type: "POST",
         url: baseurl + 'controller/method',
         data:"id="+id,
         context: document.body,
         async: true,
         success: function(data) {
        	   //alert(data); return false;
             if(data == 1){
            	 if(type == 'email'){
            		 window.parent.location.href =  baseurl+"controller/emailmethod";
            	 }else{
            		 window.parent.location.href =  baseurl+"controller/method";
            	 }
             }
         }
     });
 }
