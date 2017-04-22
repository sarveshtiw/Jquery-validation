var url = window.location.pathname; 
var value = url.substring(url.lastIndexOf('/') + 1);
var editParam = url.split('/').slice(-3)[0];
//var countRows = 0;
var clicked ='';
//var orClicked =0;
//var andClicked = 0; /* 1 for first section and 2 from senod section*/

/* new code */
orFlag = 0;
andFlag = -1;
var mainArray = [];
var lastInsertIndex = -1;
var editPensilFlag = 0;
var doneCount  = -1;

function deleteList(id){   
    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
      url: baseurl + 'lists/deleteList/',
        data:"listId="+id,
        context: document.body,
        async: true,
        success: function(data) {

            if(data == 1){
                parent.window.location.reload();

            }
        }
    });
}

$("#nameListBtn").click(function(){
    clicked = $(this).attr('id'); 
    $("#saveAndSearch").show();	$("#nameList").hide();
});
$("#backList").click(function(){
     clicked = $(this).attr('id'); 
    $("#saveAndSearch").hide();$("#nameList").show();
});
$("#Contact_Property").click(function(){ 
     clicked = $(this).attr('id'); 
    $("#navList ").hide();$(".ContactPropertyFilter ").show();
   $("#ruleBackDiv").css("display","none");
    });
$("#backNavListContact_Property").click(function(){ 
    $('.contactList .box .selectProperty select[name="contactSelect"]').prop('selectedIndex',0);
    $(".contactList .box  .ContactPropertyFilter > div.selectRedio").css('display','none');
    $("input:radio[name=list-inputRedio-contact]:first").trigger('click');
    $(".ContactPropertyFilter ").hide();
    
    
    $("#navList").show();
   if((typeof lastInsertIndex == 'number') && (lastInsertIndex != -1)){      
       mainArray.pop();
        // mainArray.splice(lastInsertIndex, 1);       
         lastInsertIndex = -1;
    }
    
    if(typeof lastInsertIndex == 'string'){
          lastInsertIndex = lastInsertIndex.split("_"); 
           delete mainArray[lastInsertIndex[0]][lastInsertIndex[1]];
    }
    
   
    
    $(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);
    getList();
    setTimeout( function(){ 
     var countText =     $('#example_info').text().split('of')[1];
     countText = countText.split(' ')[1] + " contacts";
 $("#saveAndSearch .status.left").text(countText)
        $("#nameList .status").text(countText); 
  }  , 1000 );
    if(mainArray.length>0){
      $("#ruleBackDiv").css("display","block");  
    }
});
$("#nameListDone").click(function(){ 
    $(".ContactPropertyFilter").hide();$(".viewfilter ").show();    
    var output = generateHtml();    
    $(".viewfilter").append(output);
    lastInsertIndex = -1;
    doneCount  = -1;
     $('.contactList .box .selectProperty select[name="contactSelect"]').prop('selectedIndex',0);
    $(".contactList .box  .ContactPropertyFilter > div.selectRedio").css('display','none');
    $("input:radio[name=list-inputRedio-contact]:first").trigger('click');
    $("#ruleBackDiv").css("display","none");
    $("#contactDivActions").hide();
});

$("#List_membership").click(function(){
    $("#navList").hide();
    $(".List_membershipFilter ").show(); 
    clicked = $(this).attr('id'); 
$("#ruleBackDiv").css("display","none");
});
    

$("#backNavList_membershipFilter").click(function(){ 
    $("input:radio[name=list-inputRedio-membership]:first").trigger('click');
    $('.contactList .box .selectProperty select[name="listMembershipSelect"]').prop('selectedIndex',0)
    $(".List_membershipFilter ").hide();
    
    
    $("#navList").show();
   
if((typeof lastInsertIndex == 'number') && (lastInsertIndex != -1)){        
        mainArray.pop(); 
        //mainArray.splice(lastInsertIndex, 1);
         lastInsertIndex = -1;
    }
    
    if(typeof lastInsertIndex == 'string'){
          lastInsertIndex = lastInsertIndex.split("_"); 
           delete mainArray[lastInsertIndex[0]][lastInsertIndex[1]];
    }
   
    
    $(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);
    getList();
    setTimeout( function(){ 
     var countText =     $('#example_info').text().split('of')[1];
     countText = countText.split(' ')[1] + " contacts";
 $("#saveAndSearch .status.left").text(countText)
        $("#nameList .status").text(countText); 
  }  , 1000 );
    if(mainArray.length>0){
      $("#ruleBackDiv").css("display","block");  
    }
    $("#contactDivActions").hide();
});
$("#List_membershipDone").click(function(){ 
    $(".List_membershipFilter").hide();$(".viewfilter ").show();
     var output = generateHtml();    
    $(".viewfilter").append(output);
     lastInsertIndex = -1;
     doneCount  = -1;
      $("#ruleBackDiv").css("display","none");
      $("input:radio[name=list-inputRedio-membership]:first").trigger('click');
    $('.contactList .box .selectProperty select[name="listMembershipSelect"]').prop('selectedIndex',0);
    $("#contactDivActions").hide();
});

$("#Push_Notification").click(function(){ 
    $("#navList").hide();
    $(".PushNotificationFilter ").show();
    clicked = $(this).attr('id');
    $("#ruleBackDiv").css("display","none");
});
$("#backNavPushNotificationFilter").click(function(){ 
    
    $("input:radio[name=list-inputRedio-notification]:first").trigger('click');
     $('.contactList .box .selectProperty select[name="pushNotificationSelect"]').prop('selectedIndex',0)
    $(".PushNotificationFilter ").hide();
    
    $("#navList").show();
    
if((typeof lastInsertIndex == 'number') && (lastInsertIndex != -1)){        
        mainArray.pop(); 
        //mainArray.splice(lastInsertIndex, 1); 
         lastInsertIndex = -1;
    }
    
    if(typeof lastInsertIndex == 'string'){
          lastInsertIndex = lastInsertIndex.split("_"); 
           delete mainArray[lastInsertIndex[0]][lastInsertIndex[1]];
    }
    
    $(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);
    getList();  
    setTimeout( function(){ 
     var countText =     $('#example_info').text().split('of')[1];
     countText = countText.split(' ')[1] + " contacts";
 $("#saveAndSearch .status.left").text(countText)
        $("#nameList .status").text(countText); 
  }  , 1000 );
    
    if(mainArray.length>0){
      $("#ruleBackDiv").css("display","block");  
    }
    $("#contactDivActions").hide();
    
});
$("#Push_NotificationDone").click(function(){ 
    $(".PushNotificationFilter").hide();
    $(".viewfilter ").show();
   var output = generateHtml();    
    $(".viewfilter").append(output);
    lastInsertIndex = -1;
    doneCount  = -1;
     $("#ruleBackDiv").css("display","none");
     $("input:radio[name=list-inputRedio-notification]:first").trigger('click');
     $('.contactList .box .selectProperty select[name="pushNotificationSelect"]').prop('selectedIndex',0);
     $("#contactDivActions").hide();
});

$("#Email_list").click(function(){ 
    $("#navList").hide();
    $(".EmailFilter").show();
    clicked = $(this).attr('id'); 
    $("#ruleBackDiv").css("display","none");
});
$("#backNavEmailFilter").click(function(){
    $('.contactList .box .selectProperty select[name="emailSelect"]').prop('selectedIndex',0);
    $(".EmailFilter").hide();    
    $("#navList").show(); 
     
    if((typeof lastInsertIndex == 'number') && (lastInsertIndex != -1)){ 
        
        // mainArray.splice(lastInsertIndex, 1);
        mainArray.pop(); 
       
         lastInsertIndex = -1;
    }
    
    if(typeof lastInsertIndex == 'string'){
          lastInsertIndex = lastInsertIndex.split("_"); 
           delete mainArray[lastInsertIndex[0]][lastInsertIndex[1]];
    } 
    $(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);
    getList();
      setTimeout( function(){ 
     var countText =     $('#example_info').text().split('of')[1];
     countText = countText.split(' ')[1] + " contacts";
 $("#saveAndSearch .status.left").text(countText)
        $("#nameList .status").text(countText); 
  }  , 1000 );  
     if(mainArray.length>0){
      $("#ruleBackDiv").css("display","block");  
    }
    
    $('.ContactPropertyFilter').find('.selectRedio').hide();
    
    
});

$("#Email_listDone").click(function(){ 
    $(".EmailFilter").hide();
    $(".viewfilter ").show();
    var output = generateHtml();    
    $(".viewfilter").append(output);
    $('.contactList .box .selectProperty select').prop('selectedIndex',0);  
    lastInsertIndex = -1;
    doneCount  = -1;
     $("#ruleBackDiv").css("display","none");
    $("#contactDivActions").hide();
});

$("#Workflow_status").click(function(){ $("#navList").hide();$(".WorkflowstatusFilter ").show(); clicked = $(this).attr('id'); });
$("#backNavWorkflowstatusFilter").click(function(){ $(".WorkflowstatusFilter").hide();$("#navList").show();});
$("#Workflow_statusDone").click(function(){ $(".WorkflowstatusFilter").hide();$(".viewfilter ").show();});

$("#filterDescriptionAnd").click(function(){ $("#navList").show();$(".viewfilter ").hide();});
$("#filterDescriptionOr").click(function(){ $("#navList").show();$(".viewfilter ").hide();});





$('.contactList .box .selectProperty select').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;     
    if(valueSelected != ""){
        $(".contactList .box .selectRedio").css('display','block');
       console.log("1");
    }
//    else{
//       $(".contactList .box .selectRedio").css('display','none');  
//       console.log("2");
//    }

});


$('input:radio[name="list-inputRedio-contact"]').change(function(){
   var fieldValue = $(".inputRedioField").val();
//    $(this).attr('checked', 'checked');    
    $(".inputRedioField").remove();
    $(this).parent().after('<input type="text" class="inputRedioField" autocomplete="off" value="'+fieldValue+'"/>');
    
});

$('input:radio[name="list-inputRedio-membership"]').change(function(){ 
    var html =  $(".divMembership").wrap('<p/>').parent().html(); 
   $(".divMembership").remove();
     $(this).parent().after(html);
    
});


$('input:radio[name="list-inputRedio-notification"]').change(function(){
    var html =  $(".divPushNotification").wrap('<p/>').parent().html();  
   $(".divPushNotification").remove();
   $(this).parent().after(html);
    
});

$('input:radio[name="list-inputRedio-email"]').change(function(){   
   $(".divEmail").remove();
   $(this).parent().after('<div class="selectProperty divEmail"><select class="SlectBox" name="" ><option value="">Please Select a list</option></select></div>');
    
});

 

function getList(condition){    
//    $("#saveAndSearch .status.left").text("")
//    $("#nameList .status").text("");
    
    
    if(editParam == 'editList'){
       var data = {"mainArray": condition}; 
        
    }
    
    if(mainArray.length>0){
      var data = {"mainArray": JSON.stringify(mainArray)}; 
    }else{
      var data = {};
    }
    
 
    
  
    $("#loading").css('display', 'block');
        var baseurl = $("#baseurl").val(); 
       


$('#example').dataTable({
		"sScrollY": "400px",
		"bProcessing": true,
	        "bServerSide": true,
	        "sServerMethod": "POST",
	        "sAjaxSource": baseurl+'lists/contactListingResponse',
                 "fnServerParams": function ( aoData )   
                {  
                    aoData.push( { "name": "first_variable", "value": data } );  

                },
	        "iDisplayLength": 10,                
                "aLengthMenu": [[10, 25, 50, 100], [10, 25, 50,100]],
	        "aaSorting": [[0, 'asc']],
	        "aoColumns": [                
                { "bVisible": true, "bSearchable": true, "bSortable": false },
                { "bVisible": true, "bSearchable": true, "bSortable": true },
                { "bVisible": true, "bSearchable": true, "bSortable": true }, 
                { "bVisible": true, "bSearchable": true, "bSortable": true },
                { "bVisible": true, "bSearchable": true, "bSortable": true },
                { "bVisible": true, "bSearchable": true, "bSortable": true }               
	        ],
                "deferRender": true,
                drawCallback: function(settings) {
    var pagination = $(this).closest('.dataTables_wrapper').find('.dataTables_paginate');
    pagination.toggle(this.api().page.info().pages > 1);
   
     $("#saveAndSearch .status.left").text(settings._iRecordsTotal + " contacts")
        $("#nameList .status").text(settings._iRecordsTotal + " contacts"); 
  }
	}).fnSetFilteringDelay(1000);
        
      $("#loading").css('display', 'none');   
   
} 

if(value == 'newList' ){   
   getList() ;  
   
}

if(editParam == 'editList' ){ 
  var condition = $("input[name=editCondtion]").val();  
  mainArray =   JSON.parse($("input[name=editCondtion]").val());
   getList(condition) ;  
 editParam = '';
    
}

$(document).ready(function() {
    /* typeing in text box*/
$('body').on('change', '.contactList .box .selectRedio ul li .inputRedioField', function(){console.log("me in first");


var btnName ="";
    var mainProperty="";
    var mainPropertyValue="";
    var subProperty="";
    var subPropertyvalue="";
     var sameArray = mainArray;

        switch(clicked) {
case "Contact_Property": 
 btnName = 'nameListDone';
 mainProperty = clicked;
 mainPropertyValue = $('.contactList .box .selectProperty .contactSelect').find(":selected").val(); 
 subProperty = $("input:radio[name=list-inputRedio-contact]:checked").val();
 subPropertyvalue = $(".inputRedioField").val().trim(); 
 subPropertyvalue = (subPropertyvalue =='') ? undefined:subPropertyvalue; 
 mainPropertyValue = (mainPropertyValue =='') ? undefined:mainPropertyValue; 
        break;
    case "List_membership":
         btnName = 'List_membershipDone';
         mainProperty = clicked;
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-membership]:checked').val();
 subPropertyvalue = $('input[name=listMembershipSelect]:selected').val();
        break;
    case "Push_Notification":
         btnName = 'Push_NotificationDone';
         mainProperty = clicked;  
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-notification]:checked').val();
 subPropertyvalue = $('input[name=pushNotificationSelect]:selected').val();
        break;
    case "Email_list": 
         btnName = 'Email_listDone';
         mainProperty = clicked;  
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-email]:checked').val()
 subPropertyvalue = $(this).val().trim();
        break;
    
} 
if( (typeof subPropertyvalue !='undefined' && typeof  mainPropertyValue  !='undefined')){ 
  //call the list listing menthod for new list having that condition.
var pushFlag = "";
var obj1 = { mainProperty : mainProperty,mainPropertyValue:mainPropertyValue, subProperty: subProperty, subPropertyvalue:subPropertyvalue };


if((orFlag == 0 ) && (andFlag == -1)){ console.log("under 1");
 
mainArray = sameArray; 
 if(editPensilFlag !=0){ 
     var key = editPensilFlag.split('_');
     delete mainArray[key[0]][key[1]];
     console.log(mainArray);
     mainArray[key[0]][key[1]] = obj1; 
     console.log(mainArray);     
 }else{
        if(mainPropertyValue =='Contact_Property'){
     mainArray.pop(); 
 }



    if(doneCount == -1){
      pushFlag = 0; ;
var obj = new Object();
obj[pushFlag] = obj1;

mainArray.push(obj);

lastInsertIndex = pushFlag;    
doneCount = 0;
     }else{
       if(lastInsertIndex != -1)  
       //mainArray.splice(lastInsertIndex, 1);
           mainArray.pop();
      
       pushFlag = 0;  
var obj = new Object();
obj[pushFlag] = obj1;

mainArray.push(obj);

lastInsertIndex = pushFlag;  
     }



 }
    

  
}
if((orFlag > 0 ) && (andFlag == -1)){console.log("under 2");
    mainArray = sameArray; 
   pushFlag = orFlag;
 var obj = new Object()
obj[pushFlag] = obj1;
mainArray.push(obj);  
}
if((orFlag > 0 ) && (andFlag > -1)){console.log("under 3");
 pushFlag = andFlag;
    lenght = Object.keys(mainArray[pushFlag]).length; 
mainArray[pushFlag][lenght] = obj1;   
}
if((orFlag == 0 ) && (andFlag > -1)){console.log("under 4"); //yogesh
    if(typeof lastInsertIndex == 'string'){
          lastInsertIndex = lastInsertIndex.split("_"); 
           delete mainArray[lastInsertIndex[0]][lastInsertIndex[1]];
    }
 pushFlag = andFlag;
    lenght = Object.keys(mainArray[pushFlag]).length; 
mainArray[pushFlag][lenght] = obj1;
lastInsertIndex = pushFlag +"_"+lenght;
}


$(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);

getList(); 

setTimeout( function(){ 
     var countText =     $('#example_info').text().split('of')[1];
     countText = countText.split(' ')[1] + " contacts";
 $("#saveAndSearch .status.left").text(countText)
        $("#nameList .status").text(countText); 
  }  , 1000 );
$(".contactList .box .pagination .btn ").removeClass( "inactiveLink" ); 
}


});

 /* clicking in radio button and change*/
$('body').on('change', '.contactList .box .selectRedio ul li .inputRedio', function(){ console.log("me in second");

var btnName ="";
    var mainProperty="";
    var mainPropertyValue="";
    var subProperty="";
    var subPropertyvalue="";
    var sameArray = mainArray;
        switch(clicked) {
case "Contact_Property":
 btnName = 'nameListDone';
 mainProperty = clicked;
 mainPropertyValue = $('.contactList .box .selectProperty .contactSelect').find(":selected").val();
 subProperty = $(this).val();
 subPropertyvalue = $(".inputRedioField").val().trim(); 
 subPropertyvalue = (subPropertyvalue =='') ? undefined:subPropertyvalue;
        break;
    case "List_membership":
         btnName = 'List_membershipDone';
         mainProperty = clicked;
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-membership]:checked').val();
 subPropertyvalue = $('input[name=listMembershipSelect]:selected').val(); 
        break;
    case "Push_Notification":
         btnName = 'Push_NotificationDone';
         mainProperty = clicked;  
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-notification]:checked').val();
 subPropertyvalue = $('input[name=pushNotificationSelect]:selected').val();
        break;
    case "Email_list": 
         btnName = 'Email_listDone';
         mainProperty = clicked;  
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-email]:checked').val()
 subPropertyvalue = $(this).val().trim();
        break;
    
}

if( typeof subPropertyvalue !='undefined' && mainPropertyValue !=""){ 
    
  //call the list listing menthod for new list having that condition.
 var pushFlag = "";
var obj1 = { mainProperty : mainProperty,mainPropertyValue:mainPropertyValue, subProperty: subProperty, subPropertyvalue:subPropertyvalue };
if((orFlag == 0 ) && (andFlag == -1)){console.log("under 1");
 mainArray = sameArray;
 if(mainProperty =='Contact_Property'){
     mainArray.pop(); 
 }
 pushFlag = 0;
 var obj = new Object()
obj[pushFlag] = obj1;
mainArray.push(obj);    
  
 } 
if((orFlag > 0 ) && (andFlag == -1)){console.log("under 2");
    mainArray = sameArray; 
   pushFlag = orFlag;
 var obj = new Object()
obj[pushFlag] = obj1;
mainArray.push(obj);  
}
if((orFlag > 0 ) && (andFlag > -1)){console.log("under 3");
 pushFlag = andFlag;
    lenght = Object.keys(mainArray[pushFlag]).length; 
mainArray[pushFlag][lenght] = obj1;   
}
if((orFlag == 0 ) && (andFlag > -1)){console.log("under 4");
    if(typeof lastInsertIndex == 'string'){
          lastInsertIndex = lastInsertIndex.split("_"); 
           delete mainArray[lastInsertIndex[0]][lastInsertIndex[1]];
    }
 pushFlag = andFlag;
    lenght = Object.keys(mainArray[pushFlag]).length; 
mainArray[pushFlag][lenght] = obj1; 
lastInsertIndex = pushFlag +"_"+lenght;
}

$(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);

getList(); 

setTimeout( function(){ 
     var countText =     $('#example_info').text().split('of')[1];
      countText = countText.split(' ')[1] + " contacts";
 $("#saveAndSearch .status.left").text(countText)
        $("#nameList .status").text(countText); 
  }  , 1000 );
$(".contactList .box .pagination .btn ").removeClass( "inactiveLink" ); 
}
});

$('body').on('change', '.contactList .box .selectProperty select', function(){  console.log("me in third");
    
    //validate the input under the text box.
    $(".inputRedioField").val('');
    var btnName ="";
    var mainProperty="";
    var mainPropertyValue="";
    var subProperty="";
    var subPropertyvalue="";
    var sameArray = mainArray;
        switch(clicked) {
case "Contact_Property": 
 btnName = 'nameListDone';
 mainProperty = clicked;
 mainPropertyValue = $('.contactList .box .selectProperty .contactSelect').find(":selected").val();
 subProperty = $(".contactList .box .selectRedio ul li .inputRedio").val();
 subPropertyvalue = $(".inputRedioField").val().trim();
 subPropertyvalue = (subPropertyvalue =='') ? undefined:subPropertyvalue; 
        break;
    case "List_membership":
         btnName = 'List_membershipDone';
         mainProperty = clicked;
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-membership]:checked').val();
 //subPropertyvalue = $('input[name=listMembershipSelect]:selected').val();
  subPropertyvalue = $(this).val().trim();
        break;
    case "Push_Notification":
         btnName = 'Push_NotificationDone';
         mainProperty = clicked;  
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-notification]:checked').val();
 //subPropertyvalue = $('input[name=pushNotificationSelect]:selected').val();
  subPropertyvalue = $(this).val().trim();
        break;
    case "Email_list": 
         btnName = 'Email_listDone';
         mainProperty = clicked;  
 mainPropertyValue = $(this).parents('.selectRedio').siblings(".mainProperty").text();
 subProperty = $('input[name=list-inputRedio-email]:checked').val()
 subPropertyvalue = $(this).val().trim();
 if(subPropertyvalue =='Please Select a list'){
   subPropertyvalue = '';  
 }
        break;
    
}
    



if( (typeof subPropertyvalue !='undefined') && (subPropertyvalue !="")){ 

var pushFlag = "";
var obj1 = { mainProperty : mainProperty,mainPropertyValue:mainPropertyValue, subProperty: subProperty, subPropertyvalue:subPropertyvalue };
if((orFlag == 0 ) && (andFlag == -1)){console.log("under 1");
 mainArray = sameArray;
 console.log(lastInsertIndex); 
 
 if(editPensilFlag !=0){
     var key = editPensilFlag.split('_'); 
     delete mainArray[key[0]][key[1]];
     mainArray[key[0]][key[1]] = obj1; 
     
 }else{
     if(doneCount == -1){
      pushFlag = 0; ;
var obj = new Object();
obj[pushFlag] = obj1;

mainArray.push(obj);

lastInsertIndex = pushFlag;    
doneCount = 0;
     }else{ 
         
          
       if(lastInsertIndex != -1)  
      // mainArray.splice(lastInsertIndex, 1);
      mainArray.pop();
       pushFlag = 0;  
var obj = new Object();
obj[pushFlag] = obj1;

mainArray.push(obj);

lastInsertIndex = pushFlag;  
     }

 }
            
 
  
}
if((orFlag > 0 ) && (andFlag == -1)){ console.log("under 2");
   mainArray = sameArray; 
   pushFlag = orFlag;
 var obj = new Object()
obj[pushFlag] = obj1;
mainArray.push(obj);  
}
if((orFlag > 0 ) && (andFlag > -1)){console.log("under 3");
 pushFlag = andFlag;
    lenght = Object.keys(mainArray[pushFlag]).length; 
mainArray[pushFlag][lenght] = obj1;   
}
if((orFlag == 0 ) && (andFlag > -1)){console.log("under 4"); 


if(typeof lastInsertIndex == 'string'){
          lastInsertIndex = lastInsertIndex.split("_"); 
           delete mainArray[lastInsertIndex[0]][lastInsertIndex[1]];
    }

    pushFlag = andFlag; 
    lenght = Object.keys(mainArray[pushFlag]).length; 

mainArray[pushFlag][lenght] = obj1;
lastInsertIndex = pushFlag +"_"+lenght;


} 

$(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);

getList(); 

setTimeout( function(){ 
     var countText =     $('#example_info').text().split('of')[1];
      countText = countText.split(' ')[1] + " contacts";
 $("#saveAndSearch .status.left").text(countText)
        $("#nameList .status").text(countText); 
  }  , 1000 );
$("#"+btnName).removeClass( "inactiveLink" ); 
}
});

});

function generateHtml(){
    $('.viewfilter').html("");
    var output = ''; 
    //1. get the firstArray
    var mainArrayKeys = Object.keys(mainArray);
    var currentIndexCount = numKeys(mainArray);
   for(var i = 0; i < mainArray.length; i++) {
    var main = mainArray[i];
    var mainKey = mainArrayKeys.shift();    
    var j = Object.keys(main).length;
     output+='<div class="viewfilterBody">';
     if(currentIndexCount >1){
       output+='<div class=dropdown><a class=dropdown-toggle id=action_done data-toggle=dropdown></a><ul aria-labelledby=action_done class=dropdown-menu style="padding:0px;"><a href="javascript:void(0);" id="delete_'+i+'" class="deleteNode">Delete</a></ul></div><span class=clearfix></span>';   
     }
     
       
  for (var key in main) {
    // skip loop if the property is from prototype
    if (!main.hasOwnProperty(key)) continue;
    var obj = main[key]; 
    
    switch(obj.mainProperty) {
         
    case "Contact_Property": 
              var itemName = '';
       switch (obj.mainPropertyValue) {
                                                    case "firstName": itemName  = 'first name';break;
                                                    case "lastName": itemName  = 'last name';break;
                                                    case "email": itemName  = 'email';break;
                                                    case "phoneNumber": itemName  = 'phone number';break;


                                                }
        var className = 'filter-description-contact';
        var text = 'Contact '+itemName+' '+obj.subProperty+' '+obj.subPropertyvalue+'.'; 
      break; 
  
  case "List_membership": 
        var className = 'filter-description-list';
        var text = ''+obj.subProperty+' '+ $('.contactList .box .selectProperty select[name="listMembershipSelect"]').find('option[value="'+obj.subPropertyvalue+'"]').text()+' .'; 
      break;
      
      case "Push_Notification":
        if(obj.subProperty =='push notification view'){
          var subText = "view" ; 
        }else{
          var subText = "sent";   
        }
        var className = 'filter-description-push';
        var text = 'Contact was '+subText+' push notification name '+ $('.contactList .box .selectProperty select[name="pushNotificationSelect"]').find('option[value="'+obj.subPropertyvalue+'"]').text()+'.';
      break;
      
      case "Email_list": 
        var className = 'filter-description-email';
        var propName = $('.contactList .box .selectProperty select[name="emailSelect"]').find('option[value="'+obj.subPropertyvalue+'"]').text(); 
        var text = 'Contact was sent '+propName+'.'; 
      break;
       
} 
    
          
            if(j != Object.keys(main).length){
                  output+='<p class=and_view></p>'; 
           } 
          
            var keyToPass = mainKey+'_'+key; 

    output+='<div class="panel panel-default"><div class=panel-body><div class='+className+'>'+text+'</div><a href="javascript:void(0);" class=filter-descriptionEditbtn id="'+keyToPass+'"><i aria-hidden=true class="fa fa-pencil"></i></a>';
    
   
    output+='</div></div>';
  j--;
}
output+='<div class="inner pagination"><a href="javascript:void(0);" class="btn filterDescriptionAnd" id=filterDescriptionAnd_'+i+'>And</a> <span class=clearfix></span></div>';  
        output+='</div>';
       if(i != (mainArray.length-1)){
        output+='<p class=or_view></p>';    
       } 
        
    
}
output+='<div class="inner pagination"><a href="javascript:void(0);" class="btn bggray"id=filterDescriptionOr>Or</a> <span class=clearfix></span></div>';
    
      

  
 $("#nameListSave").removeClass( "inactiveLink" ); 
    return output;
   
}

function saveList(){
   $("#nameListSave").addClass( "inactiveLink" );  
 var type =   $('.contactList .type-choices').find("input[name='list-type']:checked").val();
    
 var baseurl = $("#baseurl").val();   
    var listName = $("#newListName").val();
    var nameRegexStr = /^[a-z\d\-_\s]+$/i;
    var validation = 0;    
     if (listName == '')
    {
        $("#error_list").text("Please enter list name");
        
        validation= 1;
    } else {
        var isvalid = nameRegexStr.test(listName);
        if (!isvalid) {
            $("#error_list").text("Please enter a valid list name!");
            $("#newListName").val("");
            
            validation = 1;
        }
    }
    var count = $('#saveAndSearch .status.left').text().trim().split(" ")[0];
    var condition = { "mainArray": JSON.stringify(mainArray)};
    var data = {listName: listName, condition : condition, count :count, type: type};
   
   if( validation == 0){
     $("#loading").css('display', 'block');
    $.ajax({
        url: baseurl + "lists/saveList/",
        type: "POST",
        data: data,
        success: function (response) {
            $("#loading").css('display', 'none');
            var returnedData = JSON.parse(response);
            if(returnedData.success){
              window.location.replace(baseurl+"lists");
            }else{
              $("#error_list").text(returnedData.message);  
            }
        }
    });     
}

}


$('body').on('click', '#filterDescriptionOr', function(){
    
    $("#navList").show();
    $(".viewfilter ").hide(); 
   // orFlag = orFlag + 1; 
   orFlag = orFlag;
    andFlag =  -1;
    editPensilFlag = 0;
    
     $(".contactList .sidemenu .box div:first-child").css("display","block");
    
});

$('body').on('click', '.contactList .box .pagination .filterDescriptionAnd', function(){
    $("#navList").show();
    $(".viewfilter ").hide();   
    //get the value of button clicked of first array section or second section 
    
    var andId = $(this).attr("id"); 
   andId = andId.split("_")[1];
    andFlag = andId; 
    $(".contactList .sidemenu .box div:first-child").css("display","block"); 
    editPensilFlag = 0;
})


function saveEditList(){
 var type =   $('.contactList .type-choices').find("input[name='list-type']:checked").val();
 
 var baseurl = $("#baseurl").val();   
 var  listId = url.substring(url.lastIndexOf('/') + 1);
    var count = $('#saveAndSearch .status.left').text().trim().split(" ")[0];
    var condition = { "mainArray": JSON.stringify(mainArray)};
    var data = {listId: listId, condition : condition, count :count}; 
   
  $("#loading").css('display', 'block');
    $.ajax({
        url: baseurl + "lists/saveEditList/",
        type: "POST",
        data: data,
        success: function (response) {
            $("#loading").css('display', 'none');
            var returnedData = JSON.parse(response);
            if(returnedData.success){
              window.location.replace(baseurl+"lists");               
            }else{
              $("#error_list").text(returnedData.message);  
            }
        }
    });

}

function editPensilFunction(key){    
   // key = key.split('_');
    //get the element of key from the main array;
   // var data = mainArray[key[0]][key[1]];   
    editPensilFlag = key;
    $(".viewfilter").hide();
    $("#navList").show();
 
  
}

$('body').on('click', '.contactList .viewfilter .viewfilterBody .panel-body .filter-descriptionEditbtn', function(){    
    var key = $(this).attr('id');
    editPensilFunction(key);
});

$('body').on('click', '#ruleBack', function(){    
   $(".contactList .sidemenu .box div:first-child").css("display","none");  
   $("#navList").hide();
   $(".viewfilter ").show();
   var output = generateHtml();    
    $(".viewfilter").append(output);
});

$('body').on('click', '.contactList .viewfilter .viewfilterBody .panel-body .filter-descriptionDeletebtn', function(){    
     var key = $(this).attr('id');
    deletePensilFunction(key);
});

$('body').on('click', '.deleteNode', function(){
     var key = $(this).attr('id');
    deletePensilFunction(key);
    
});  



function numKeys(obj)
{
    var count = 0;
    for(var prop in obj)
    {
        count++;
    }
    return count;
}



function deletePensilFunction(key){
    lastInsertIndex = key.split('_')[1];
    mainArray.splice(lastInsertIndex,1); 
        
    var output = generateHtml();    
    $(".viewfilter").append(output);
    $(".table-responsive").remove();

$table =  '<div class="table-responsive"> <table id="example" class="display datatable grid" cellspacing="0" width="100%"> <thead> <tr><th style="width:8%;">User Image</th> <th style="width: 15%;">First Name</th> <th style="width: 15%;">Last Name</th> <th style="width: 15%;">Email</th> <th>Phone Number</th> <th>App Group</th> </tr></thead> </table> </div>';

$( ".dataaTable" ).append( $table);

getList();
         
}

