jQuery(document).ready(function($){
//Open Login Popup
 $('body').on('click','.modalPopup', function(e, size, backDrop){ 
 var backDrop =  $(this).attr('data-backdrop'); 
 var escDrop =  $(this).attr('data-escdrop'); 
 if(backDrop == '' || backDrop == null || backDrop == undefined){
  backDrop = true; 
 }
 else{
  backDrop = false;
 }
 if(escDrop == '' || escDrop == null || escDrop == undefined){
  escDrop = true; 
 }
 else{
  escDrop = false;
 }
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
  $('.modal').remove();
  var dialogInstanceSignIn = BootstrapDialog.show({ 
		closeByBackdrop: backDrop,
		closeByKeyboard: escDrop,
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
 	 $('.SlectBox').SumoSelect();
       //  $('.scroll-pane, .scroll').jScrollPane({contentWidth: '0px'});
  // $(".modal").csUpdate();
     }, 200);
 });
 
 });


