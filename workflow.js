function template(data, container) {
    if (data.loading) return "Loading......";
    return data.value;
}
function formatRepoSelection(data)
{
    return '+ Please Select';
}
var timeDelayLengthFirst = 1;
var timeDelayLengthFirstArrayString = [];

var app = angular.module('myApp', []);


//window.angularControllerLogg();

app.controller('workflowController', function($scope, $timeout, $compile) {
	$scope.triggerPointshow = false;
    $timeout(function () {
        $scope.triggerPointshow = true;
        $('.tab-content').show();
    }, 500);

    $scope.workflowData  = workflowData;


    !angular.isDefined($scope.workflowData.workflow_title) ? $scope.workflowData['workflow_title'] = '': '';
    !angular.isDefined($scope.workflowData.type) ? $scope.workflowData['type'] = '': '';
    !angular.isDefined($scope.workflowData.draft) ? $scope.workflowData['draft'] = '': '';
    !angular.isDefined($scope.workflowData.newUserChk) ? $scope.workflowData['newUserChk'] = '': '';
    !angular.isDefined($scope.workflowData.workflow_id) ? $scope.workflowData['workflow_id'] = '': '';



    !angular.isDefined($scope.workflowData.firstName) ? $scope.workflowData['firstName'] = {"opt": "", "label": "First Name","data": []} : '';
    !angular.isDefined($scope.workflowData.lastName) ? $scope.workflowData['lastName'] = {"opt": "", "label": "Last Name","data": []} : '';
    !angular.isDefined($scope.workflowData.timezone) ? $scope.workflowData['timezone'] = {"opt": "", "label": "Timezone","data": []} : '';
    !angular.isDefined($scope.workflowData.createdDate) ? $scope.workflowData['createdDate'] = {"opt": "", "label": "Creation Date","data": {"from": "","to":"","option": ""}} : '';
    !angular.isDefined($scope.workflowData.original_source) ? $scope.workflowData['original_source'] = {"opt": "", "label": "Original Source","data": {"value": "", "option": ""}} : '';
    !angular.isDefined($scope.workflowData.interection_open_push) ? $scope.workflowData['interection_open_push'] = {"opt": "", "label": "Interaction Open Push","data": []} : '';
    !angular.isDefined($scope.workflowData.interection_open_email) ? $scope.workflowData['interection_open_email'] = {"opt": "", "label": "Interaction Open Email","data": []} : '';
    !angular.isDefined($scope.workflowData.persona) ? $scope.workflowData['persona'] = {"opt": "", "label": "Persona","data": []} : '';
    !angular.isDefined($scope.workflowData.list) ? $scope.workflowData['list'] = {"opt": "", "label": "List","data": []} : '';
    !angular.isDefined($scope.workflowData.received_email) ? $scope.workflowData['received_email'] = {"opt": "", "label": "Received Email","data": []} : '';
    !angular.isDefined($scope.workflowData.opened_email) ? $scope.workflowData['opened_email'] = {"opt": "", "label": "Opened Email","data": []} : '';
    !angular.isDefined($scope.workflowData.clicked_email) ? $scope.workflowData['clicked_email'] = {"opt": "", "label": "Clicked Email","data": []} : '';
    !angular.isDefined($scope.workflowData.unsubscribed_email) ? $scope.workflowData['unsubscribed_email'] = {"opt": "", "label": "Unsubscribed Email","data": []} : '';
    !angular.isDefined($scope.workflowData.bounced_email) ? $scope.workflowData['bounced_email'] = {"opt": "", "label": "Bounced Email","data": []} : '';
    !angular.isDefined($scope.workflowData.email_not_received) ? $scope.workflowData['email_not_received'] = {"opt": "", "label": "Send Email But Didn't Received","data": []} : '';
    !angular.isDefined($scope.workflowData.email_not_opened) ? $scope.workflowData['email_not_opened'] = {"opt": "", "label": "Received But Didn't Opened","data": []} : '';
    !angular.isDefined($scope.workflowData.email_not_clicked) ? $scope.workflowData['email_not_clicked'] = {"opt": "", "label": "Opened But Didn't Clicked","data": []} : '';
    !angular.isDefined($scope.workflowData.email_opened_date) ? $scope.workflowData['email_opened_date'] = {"opt": "", "label": "Last Email Open Date","data": {"value": "", "option": ""}} : '';
    !angular.isDefined($scope.workflowData.app_page_viewed) ? $scope.workflowData['app_page_viewed'] = {"opt": "", "label": "App Page Viewed","number":"","data": []} : '';
   // !angular.isDefined($scope.workflowData.app_number_of_views) ? $scope.workflowData['app_number_of_views'] = {"opt": "", "label": "Number of views","data": {"value": "", "option": ""}} : '';
    !angular.isDefined($scope.workflowData.app_last_opened) ? $scope.workflowData['app_last_opened'] = {"opt": "", "label": "Last Open App Date","data": {"value": "", "option": ""}} : '';
    !angular.isDefined($scope.workflowData.app_visit_number) ? $scope.workflowData['app_visit_number'] = {"opt": "", "label": "Numbers of visit to App","data": {"value": "", "option": ""}} : '';
    !angular.isDefined($scope.workflowData.app_last_seen) ? $scope.workflowData['app_last_seen'] = {"opt": "", "label": "Last page in App Seen","data": []} : '';

    $scope.workflowData.firstName.label = "First Name";
    $scope.workflowData.lastName.label = "Last Name";
    $scope.workflowData.timezone.label = "Timezone";
    $scope.workflowData.createdDate.label = "Created Date";
    $scope.workflowData.original_source.label = "Original Source";
    $scope.workflowData.interection_open_push.label = "Interaction Opened Push";
    $scope.workflowData.interection_open_email.label = "Interaction Opened Email";
    $scope.workflowData.persona.label = "Member of Persona";
    $scope.workflowData.list.label = "Member of List";
    $scope.workflowData.received_email.label = "Received Email";
    $scope.workflowData.opened_email.label = "Opened Email";
    $scope.workflowData.clicked_email.label = "Clicked Email";
    $scope.workflowData.unsubscribed_email.label = "Unsubscribed Email";
    $scope.workflowData.bounced_email.label = "Bounced Email";
    $scope.workflowData.email_not_received.label = "Send Email But Didn't Received";
    $scope.workflowData.email_not_opened.label = "Received But Didn't Opened";
    $scope.workflowData.email_not_clicked.label = "Opened But Didn't Clicked";
    $scope.workflowData.email_opened_date.label = "Last Email Open Date";
    $scope.workflowData.app_page_viewed.label = "App Page Viewed";
    //$scope.workflowData.app_number_of_views.label = "Number of views";
    $scope.workflowData.app_last_opened.label = "Last Open App";
    $scope.workflowData.app_visit_number.label = "Numbers of visit to App";
    $scope.workflowData.app_last_seen.label = "Last page in App Seen";

    console.log(workflowData.createdDate.data.from);
    $scope.CleanAdsentrecord = function(scope)
    {
        scope = angular.fromJson(scope);
        // scope.workflow_id == "" ? delete scope.workflow_id : '';
        scope.existUserChk == "" ? delete scope.existUserChk : '';
        scope.newUserChk == "" ? delete scope.newUserChk : '';
        scope.firstName.opt == "" || scope.firstName.data.length == 0 ? delete scope.firstName : '';
        scope.lastName.opt == "" || scope.lastName.data.length == 0 ? delete scope.lastName : '';
        scope.timezone.opt == "" || scope.timezone.data.length == 0 ? delete scope.timezone : '';
        scope.createdDate.opt == "" || scope.createdDate.data.from == "" || scope.createdDate.data.to == "" ? delete scope.createdDate : '';
        scope.interection_open_push.opt == "" || scope.interection_open_push.data.length == 0 ? delete scope.interection_open_push : '';
        scope.interection_open_email.opt == "" || scope.interection_open_email.data.length == 0 ? delete scope.interection_open_email : '';
        scope.original_source.opt == "" || scope.original_source.data.value == "" ? delete scope.original_source : '';
        scope.persona.opt == "" || scope.persona.data.length == 0 ? delete scope.persona : '';
        scope.list.opt == "" || scope.list.data.length == 0 ? delete scope.list : '';
        scope.received_email.opt == "" || scope.received_email.data.length == 0 ? delete scope.received_email : '';
        scope.opened_email.opt == "" || scope.opened_email.data.length == 0 ? delete scope.opened_email : '';
        scope.clicked_email.opt == "" || scope.clicked_email.data.length == 0 ? delete scope.clicked_email : '';
        scope.unsubscribed_email.opt == "" || scope.unsubscribed_email.data.length == 0 ? delete scope.unsubscribed_email : '';
        scope.bounced_email.opt == "" || scope.bounced_email.data.length == 0 ? delete scope.bounced_email : '';
        scope.email_not_received.opt == "" || scope.email_not_received.data.length == 0 ? delete scope.email_not_received : '';
        scope.email_not_opened.opt == "" || scope.email_not_opened.data.length == 0 ? delete scope.email_not_opened : '';
        scope.email_not_clicked.opt == "" || scope.email_not_clicked.data.length == 0 ? delete scope.email_not_clicked : '';
        scope.email_opened_date.opt == "" || scope.email_opened_date.data.value == "" ? delete scope.email_opened_date : '';
        scope.app_page_viewed.opt == "" || scope.app_page_viewed.data.length == 0 ? delete scope.app_page_viewed : '';
       // scope.app_number_of_views.opt == "" || scope.app_number_of_views.data.value == "" ? delete scope.app_number_of_views : '';
        scope.app_last_opened.opt == "" || scope.app_last_opened.data.value == "" ? delete scope.app_last_opened : '';
        scope.app_visit_number.opt == "" || scope.app_visit_number.data.value == "" ? delete scope.app_visit_number : '';
        scope.app_last_seen.opt == "" || scope.app_last_seen.data.length == 0 ? delete scope.app_last_seen : '';
        return scope;
    }

    $scope.DesignatedTime = "Designated-Time";
    $scope.actionWork = "push";

    $scope.workflow_title = $scope.workflowData.workflow_title;
    $scope.removeSelectBoxVal = function($key, index)
    {
        $key.data.splice(index, 1);
        if($key.data.length == 0)
            $key.opt = "";
    }

    $scope.updateAndOrOption = function(data, value)
    {
        data.opt = value;
    }
    $scope.getCheckedStatus = function(value, flag)
    {
        if(value == '')
            return false;
        if(value == flag)
            return true;
        else
            return false;
    };
    $scope.updateCheckedStatus = function(data, index)
    {
        if(index != null)
            data.data[index].option = data.data[index].option == "include" ? "exclude":"include";
        else
            data.data.option = data.data.option == "include" ? "exclude":"include";
    }
    $scope.updateCheckedStatusSingle = function(data, option)
    {
        data.data.option = option;
    }
    $scope.setWorkflowTitle = function ()
    {
        $scope.workflowData.workflow_title = $scope.workflow_title;
    }
    $scope.changeOriginalSource = function()
    {
        console.log($scope.OriginalSource);
    }

    $scope.checkIsvalid = function()
    {
        if($('#workflow_creation_from').val() == '' || $('#workflow_creation_from').val() == '')
        {
            $('#workflow_creation_from').val('');
            $('#workflow_creation_from').datepicker("setDate", '');
            $('#workflow_creation_to').val('');
            $('#workflow_creation_to').datepicker("setDate", '');
            $scope.workflowData.createdDate.data.from = '';
            $scope.workflowData.createdDate.data.to = '';
            $scope.workflowData.createdDate.data.option = '';
            $scope.workflowData.createdDate.opt = '';
            $scope.creation_from = '';
            $scope.creation_to = '';
        }

    }

    $scope.defineElemetCheck = function(scope, value)
    {
        if(value == '')
        {
            scope.data.value = '';
            scope.data.option = '';
            scope.opt = '';
        }
    }
    $scope.defineElemetCheckDate = function(scope, value)
    {
        if(value == '')
        {
            scope.data.to = '';
            scope.data.option = '';
            scope.opt = '';
        }
    }
    $scope.numberofViewsApp= function(value)
    {
        if(!isNaN(parseInt(value)) && angular.isNumber(parseInt(value))) {
            $scope.workflowData.app_page_viewed.number = parseInt(value);
            $("#workflow_average_view_app").val(parseInt(value));
        }
        else {
            $scope.workflowData.app_page_viewed.number = '';
            $scope.app_number_of_views = '';
            $("#workflow_average_view_app").val('');
        }
    }
    $scope.defineElemetCheckVisitNumber = function(scope, value)
    {
        if(value == '')
        {
            scope.data.value = '';
            scope.data.option = '';
            scope.opt = '';
        }
        else
        {
            if(!isNaN(parseInt(value)) && angular.isNumber(parseInt(value))) {
                scope.data.value = parseInt(value);
                scope.data.option = scope.data.option == '' ? "include" : scope.data.option;
                scope.opt = scope.opt == '' ? "AND" : scope.opt;
                $("#workflow_app_visit").val(parseInt(value));
            }
            else {
                scope.data.value = '';
                scope.data.option = '';
                scope.opt = '';
                $("#workflow_app_visit").val('');
            }
            // scope.data.value = value;
            // scope.data.option = scope.data.option == '' ? "include": scope.data.option;
            // scope.opt = scope.opt == '' ? "AND": scope.opt;
        }
    }

    $("#workflow_original_source").change(function(){
        $scope.workflowData.original_source.data.value = $(this).val();
        if($scope.workflowData.original_source.data.value != '')
        {
            $scope.workflowData.original_source.opt = $scope.workflowData.original_source.opt == '' ? "AND" : $scope.workflowData.original_source.opt;
            $scope.workflowData.original_source.data.option = $scope.workflowData.original_source.data.option == '' ? "include" : $scope.workflowData.original_source.data.option;
        }
        else
        {
            $scope.workflowData.original_source.opt = '';
            $scope.workflowData.original_source.data.option = '';
        }
        $scope.$apply();
    });

    $("#workflow_last_open_date").datepicker({
        format: "dd-mm-yyyy",
        endDate: new Date(),
        autoclose:true
    }).on("changeDate", function(e){
        $scope.email_opened_date = $scope.workflowData.email_opened_date.data.value = $('#workflow_last_open_date').val();
        $scope.workflowData.email_opened_date.data.option = $scope.workflowData.email_opened_date.data.option == '' ? "include" : $scope.workflowData.email_opened_date.data.option;
        $scope.workflowData.email_opened_date.opt = $scope.workflowData.email_opened_date.opt == '' ? "AND" : $scope.workflowData.email_opened_date.opt;
        $scope.$apply();
    });

    $("#workflow_last_open_app").datepicker({
        format: "dd-mm-yyyy",
        endDate: new Date(),
        autoclose:true
    }).on("changeDate", function(e){
        $scope.app_last_opened = $scope.workflowData.app_last_opened.data.value = $('#workflow_last_open_app').val();
        $scope.workflowData.app_last_opened.data.option = $scope.workflowData.app_last_opened.data.option == '' ? "include" : $scope.workflowData.app_last_opened.data.option;
        $scope.workflowData.app_last_opened.opt = $scope.workflowData.app_last_opened.opt == '' ? "AND" : $scope.workflowData.app_last_opened.opt;
        $scope.$apply();
    });


    $("#workflow_creation_from").datepicker({
        format: "dd-mm-yyyy",
        endDate: new Date(),
        autoclose:true
    }).on("changeDate", function(e){
        $scope.creation_from = $scope.workflowData.createdDate.data.from = $('#workflow_creation_from').val();
        if($scope.creation_from != '') {
            $scope.$apply();
            $("#workflow_creation_to").datepicker("setStartDate", $scope.creation_from);
        }
    });


    $("#workflow_creation_to").datepicker({
        format: "dd-mm-yyyy",
        endDate: new Date(),
        autoclose:true
    }).on("changeDate", function(e){
        if($scope.creation_from !='' &&  $('#workflow_creation_from').val() !='')
        {
            $scope.creation_to = $scope.workflowData.createdDate.data.to = $('#workflow_creation_to').val();
            $scope.workflowData.createdDate.opt = $scope.workflowData.createdDate.opt == '' ? "AND":$scope.workflowData.createdDate.opt;
            $scope.workflowData.createdDate.data.option = $scope.workflowData.createdDate.data.option == '' ? "include":$scope.workflowData.createdDate.data.option;
        }
        else
        {
            $scope.creation_from = $scope.workflowData.createdDate.data.from = $scope.workflowData.createdDate.data.option= $scope.workflowData.createdDate.opt='';
            $scope.creation_to = $scope.workflowData.createdDate.data.to = '';
            $('#workflow_creation_from').val('');
            $('#workflow_creation_to').val('');
        }
        $scope.$apply();

    });
    $timeout(function () {
        $("#workflow_creation_from").datepicker("setDate", $scope.workflowData.createdDate.data.from);
        $("#workflow_creation_to").datepicker("setDate", $scope.workflowData.createdDate.data.to);
    }, 500);

    $scope.nextStepTwo = function()
    {
        if($scope.workflow_title == '')
        {
            $('html,body').animate({
                    scrollTop: $("#TriggerTabList").offset().top},
                'slow');
            $("#workflow_title").css('border-color', '#424141');
        }
        else
        {
            $('.triggerPoint').hide();
            //$('.allLists').show();
            $('#TriggerTab').removeClass('active');
            $('#WorkflowTabList').addClass('active');
            $('#WorkflowTab').addClass('active');
        }
    }


    $('#WorkflowTab .next').click(function(){

        $('#TriggerTab').removeClass('active');
        var timeDelays = getTimeDelayActions("success");
        if(timeDelays == false){
            return false;
        }else{
            $('#WorkflowTab').removeClass('active');
            $('#ConfirmTabList').addClass('active');
            $('#ConfirmTab').addClass('active');
        }
        showWorkflowTimeDelay(timeDelays);
    });


    $('.triggerPoint .prev,.allLists .prev,.allMails .prev,.allApps .prev').click(function(){
        $('.triggerPoint').hide();
        $('.workflowBox').show();
    });

    $('#WorkflowTab .prev').click(function(){
        $('#WorkflowTab').removeClass('active');
        $('#TriggerTab').addClass('active');
        $('.triggerPoint').show();
        $('.allMails').show();
        $('.allApps').show();
        $('.workflowBox').hide();
    });

    $('#ConfirmTab .prev').click(function(){
        $('#ConfirmTab').removeClass('active');
        $('#WorkflowTabList').addClass('active');
        $('#WorkflowTab').addClass('active');
    });
    content = $("#workflowTimeDelayAddMore1").clone();
    $('.SlectBox').SumoSelect();
    if($scope.workflowData.original_source.data.value == "Offline Source")
    {
        $("#workflow_original_source")[0].sumo.selectItem(1);
    }
    else if($scope.workflowData.original_source.data.value == "Via App")
    {
        $("#workflow_original_source")[0].sumo.selectItem(2);
    }

    $scope.createAutoCompleteCurrent = function (current, controller, scope, ids) {
        $(current).select2({
            ajax: {
                url: _BASE_URL_ + 'workflow/' + controller,
                dataType: 'json',
                delay: 250,
                type : "POST",
                data: function (params) {
                    return {
                        q: params.term, // search term
                        page: params.page,
                        select:JSON.stringify(scope.data)
                    };
                },
                processResults: function (data, params) {
                    return {
                        results: data.items
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) {
                return markup;
            }, // let our custom formatter work
            minimumInputLength: 0,
            templateResult: template, // omitted for brevity, see the source of this page
            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
        }).on("select2:select", function(evt) {
            var element = evt.params.data.value;
            var user_id = evt.params.data.id;
            user_id = user_id.replace(" ", "");
            var option = scope.opt == ''? "AND": scope.opt;
            if(ids > 0)
                scope.data.push({"id":user_id, "value": element, option:"include"});
            else
                scope.data.push({"value": element, option:"include"});
            scope.opt = option;

            $scope.$apply();
           // $(current).val('');
        }).on('select2:open', function () {
            var values = $(this).val();
            var pop_up_selection = $('.select2-results__options');
            if (values != null ) {
                pop_up_selection.find("li[aria-selected=true]").hide();

            } else {
                pop_up_selection.find("li[aria-selected=true]").show();
            }
            $(current).val('');

        });

    }
    $scope.createAutoCompleteCurrent("#workflow_firstname", "getFirstName", $scope.workflowData.firstName,0);
    $scope.createAutoCompleteCurrent("#workflow_lastname", "getLastName", $scope.workflowData.lastName,0);
    $scope.createAutoCompleteCurrent("#workflow_timezone", "getTimeZone", $scope.workflowData.timezone,0);
    $scope.createAutoCompleteCurrent("#workflow_persona", "getPersonas", $scope.workflowData.persona,1);
    $scope.createAutoCompleteCurrent("#workflow_list", "getMembersList",$scope.workflowData.list,1);
    $scope.createAutoCompleteCurrent("#workflow_page_viewed", "getAppsPages",$scope.workflowData.app_page_viewed,0);
    $scope.createAutoCompleteCurrent("#workflow_last_page_app", "getAppsPages",$scope.workflowData.app_last_seen,0);

    $scope.createAutoCompleteCurrent("#pushworkflow_interaction", "getCampainInterection?push=1",$scope.workflowData.interection_open_push,1);
    $scope.createAutoCompleteCurrent("#emailworkflow_interaction", "getCampainInterection?email=1",$scope.workflowData.interection_open_email,1);


    $scope.createAutoCompleteCurrent("#workflow_receiver_email", "getCampaignEmails",$scope.workflowData.received_email,1);
    $scope.createAutoCompleteCurrent("#workflow_opened_email", "getCampaignEmails",$scope.workflowData.opened_email,1);
    $scope.createAutoCompleteCurrent("#workflow_clicked_email", "getCampaignEmails",$scope.workflowData.clicked_email,1);
    $scope.createAutoCompleteCurrent("#workflow_unsubscribed_email", "getCampaignEmails",$scope.workflowData.unsubscribed_email,1);
    $scope.createAutoCompleteCurrent("#workflow_bounced_email", "getCampaignEmails",$scope.workflowData.bounced_email,1);
    $scope.createAutoCompleteCurrent("#workflow_not_received_email", "getCampaignEmails",$scope.workflowData.email_not_received,1);
    $scope.createAutoCompleteCurrent("#workflow_not_opened_email", "getCampaignEmails",$scope.workflowData.email_not_opened,1);
    $scope.createAutoCompleteCurrent("#workflow_not_clicked_email", "getCampaignEmails",$scope.workflowData.email_not_clicked,1);


    $scope.getWorkflowCount = function(){
        var timeDelayArr = getTimeDelayActions("success");
        $scope.workflowData.type = "draft";
        $scope.workflowData['timeDelay'] = timeDelayArr;



        if($('input:radio[id="EnrollExistUserCheckbox"]').is(':checked')){
            $scope.workflowData.existUserChk  = "1";
        }else{
            $scope.workflowData.existUserChk  = "2";
        }
        var sendingworkflowData = $scope.workflowData;
        sendingworkflowData = $scope.CleanAdsentrecord(angular.toJson(sendingworkflowData));
        var workflow = {
            workflow: JSON.parse(angular.toJson(sendingworkflowData))
        };
        var baseurl = $("#baseurl").val();
        $.ajax({
            url: baseurl + "workflow/getWorkflowUsersCount/",
            type: 'POST',
            dataType: 'text',
            cache: false,
            data: workflow,
            beforeSend: function(jqXHR, settings) {
                $("#showCountMessage").html('<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw" style="font-size: 17px; color: #fff;"></i>');

            },
            success: function(data) {
                if(!isNaN(parseInt(data)) && angular.isNumber(parseInt(data)))
                    $("#showCountMessage").html("<small>"+data+" amount of users match this criteria</small>");
                else
                    window.location.reload();
            }
        });
    }

    $scope.saveTriggerPointAsDraft = function(obj){
        var workflow_title = $("#workflow_title").val();
        var workflow_id = $("#workflow_id").val();

        var elementId = obj.id;
        var elementName = obj.name;

        var validation = [];
        if($scope.workflowData.workflow_title  == ''){
            $("#error_workflow_title").text("Please Enter Workflow Title.");
            $('html,body').animate({
                    scrollTop: $("#TriggerTabList").offset().top},
                'slow');
            $("#workflow_title").css('border-color', '#424141');

        }
        else {
            $("#loading").css("display", "block");
            var baseurl = $("#baseurl").val();

            $scope.workflowData.type = "draft";
            $scope.workflowData.workflow_title = workflow_title;
            $scope.workflowData.workflow_id = workflow_id;


            var sendingworkflowData = $scope.workflowData;
            sendingworkflowData = $scope.CleanAdsentrecord(angular.toJson(sendingworkflowData));
            var workflow = {
                workflow: JSON.parse(angular.toJson(sendingworkflowData))
            };

            $("#saveTrigger").addClass('inactiveLink');

            $.ajax({
                url: baseurl + "workflow/saveTriggerPointAsDraft/",
                type: 'POST',
                cache: false,
                data: workflow,
                success: function (data) {
                    $("#loading").css("display", "none");
                    window.location.href = baseurl + "workflow";

                }
            });
        }
    }
    $scope.saveTimeDelayAsDraft = function(obj){
        var workflow_title = $("#workflow_title").val();
        var workflow_id = $("#workflow_id").val();

        if($scope.workflowData.workflow_title == ''){
            $("#error_workflow_title").text("Please Enter Workflow Title.");
            $("#workflow_title").css('border-color', '#424141');
        }
        else
        	{
            $("#error_workflow_title").text("");
            $("#workflow_title").css('border-color', '#ccc');
            $("#loading").css("display", "block");
            var baseurl = $("#baseurl").val();
            var timeDelayArr = getTimeDelayActions("draft");
            $scope.workflowData.type = "draft";
            $scope.workflowData.workflow_id = workflow_id;
            $scope.workflowData['timeDelay'] = timeDelayArr;
                if($('input:radio[id="EnrollExistUserCheckbox"]').is(':checked')){
                    $scope.workflowData.existUserChk  = "1";
                }else{
                    $scope.workflowData.existUserChk  = "2";
                }
            var sendingworkflowData = $scope.workflowData;
            sendingworkflowData = $scope.CleanAdsentrecord(angular.toJson(sendingworkflowData));
            var workflow = {
                workflow: JSON.parse(angular.toJson(sendingworkflowData))
            };
            $("#saveTime").addClass('inactiveLink');
            $("#saveConfirm").addClass('inactiveLink');

            $.ajax({
                url: baseurl + "workflow/saveTimeDelayAsDraft/",
                type: 'POST',
                cache: false,
                data: workflow,
                success: function (data) {
                    $("#loading").css("display", "none");
                    window.location.href = baseurl + "workflow";
                },
            });
        }
    }

    $(document).on('change', '[type=checkbox]', function() {
        var id = $(this).attr('id');
        var value = $(this).attr('value');
        if(value === 'InteDelBetweenCheckbox'){
            str = id.split("InteDelBetweenCheckbox");
            if($('#'+id).is(':checked')){
                $('.IntelligentDeliveryBetween'+str[1]).css("display","block");
            }else{
                $('.IntelligentDeliveryBetween'+str[1]).css("display","none");
            }
        }else if(value === 'InteDelReEligibleTime'){
            str = id.split("InteDelReEligibleTimeCheckbox");
            if($('#'+id).is(':checked')){
                $('.InteDelReEligibleTime'+str[1]).css("display","block");
            }else{
                $('.InteDelReEligibleTime'+str[1]).css("display","none");
            }
        }
    });

    $scope.liveWorkflow = function()
    {
        $("#loading").css("display", "block");
        var baseurl = $("#baseurl").val();
        $("#liveWorkflow").addClass('inactiveLink');

        var timeDelayArr = getTimeDelayActions("success");
        $scope.workflowData.type = "";
        $scope.workflowData['timeDelay'] = timeDelayArr;


        if($('input:radio[id="EnrollExistUserCheckbox"]').is(':checked')){
            $scope.workflowData.existUserChk  = "1";
        }else{
            $scope.workflowData.existUserChk  = "2";
        }
        var sendingworkflowData = $scope.workflowData;
        sendingworkflowData = $scope.CleanAdsentrecord(angular.toJson(sendingworkflowData));

        var workflow = {
            workflow: JSON.parse(angular.toJson(sendingworkflowData))
        };
        $.ajax({
            url: baseurl + "workflow/liveWorkflow/",
            type: 'POST',
            dataType: 'json',
            cache: false,
            data: workflow,
            beforeSend: function(jqXHR, settings) {
                $(".loader").show();
            },
            complete: function(){
                $(".loader").hide();
            },
            success: function(data) {
                var responseObj = JSON.stringify(data);
                var responseObj1 = jQuery.parseJSON(responseObj);
                if (responseObj1.data.status === "success") {
                    $("#loading").css("display", "none");
                    $('.modal').modal('hide');
                    $("#liveWorkflowLaunch").trigger('click');
                    //window.parent.location.href =  baseurl + "workflow"; //window.location.reload();
                }else{
                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");
                    window.parent.location.href =  baseurl + "workflow"; //window.location.reload();
                }
            },
        });
    }
    $scope.draftWorkflow = function(title){
        $("#loading").css("display", "block");
        var baseurl = $("#baseurl").val();
        var title = title;

        var timeDelayArr = getTimeDelayActions("draft");
        $scope.workflowData.type = "draft";
        $scope.workflowData['timeDelay'] = timeDelayArr;
        var sendingworkflowData = $scope.workflowData;
        sendingworkflowData = $scope.CleanAdsentrecord(angular.toJson(sendingworkflowData));
        var workflow = {
            workflow: JSON.parse(angular.toJson(sendingworkflowData))
        };
        $.ajax({
            url: baseurl + "workflow/liveWorkflow/",
            type: 'POST',
            dataType: 'json',
            cache: false,
            data: workflow,
            success: function(data) {
                var responseObj = JSON.stringify(data);
                var responseObj1 = jQuery.parseJSON(responseObj);
                if (responseObj1.data.status === "success") {
                    $("#loading").css("display", "none");
                    if(title === 'ios' || title === 'android'){
                        window.location.href =  baseurl + "appUser/campaigns"; //window.location.reload();
                    }else if(title === 'email') {
                        window.location.href =  baseurl + "appUser/emailCampaigns";
                    }else if(title === 'persona') {
                        window.location.href =  baseurl + "contact";
                    }else if(title === 'in-app') {
                        window.location.href =  baseurl + "appUser/inAppMessaging";
                    }else {
                        window.location.href =  baseurl + "workflow";
                    }
                }else{
                    $(".close").css("display", "block");
                    $("#loading").css("display", "none");
                    if(title === 'ios' || title === 'android'){
                        window.location.href =  baseurl + "appUser/campaigns"; //window.location.reload();
                    }else if(title === 'email') {
                        window.location.href =  baseurl + "appUser/emailCampaigns";
                    }else if(title === 'persona') {
                        window.location.href =  baseurl + "contact";
                    }else {
                        window.location.href =  baseurl + "workflow";
                    }
                }
            },
        });
    }
    timeDelayLengthFirst = $(".workflowTimeDelayAddMore").length;
    for(var i = 1; i <= timeDelayLengthFirst; i++)
        timeDelayLengthFirstArrayString.push(i);
    $scope.cloneWokflowTimeDelay = function(){
        var timeDelayLength = timeDelayLengthFirst++;
        timeDelayLength = timeDelayLength + 1;
        var content1 = content.clone();
        timeDelayLengthFirstArrayString.push(timeDelayLength);
        var timeDelayed = $(".workflowTimeDelayAddMore").length + 1;
        content1.attr("id", "workflowTimeDelayAddMore"+timeDelayLength);
        content1.find('h2').html('TIME DELAY '+ timeDelayed);
        content1.find('#workflowTimeDelayDelete1').attr('onclick', 'updateDeleteIndex('+timeDelayLength+')');
        //content1.find('#workflowTimeDelayDelete1').attr({href: $('#baseurl').val()+"workflow/deleteWorkflwoLevelPopUp/"+timeDelayLength});
        content1.find('#workflowTimeDelayDelete1').attr({id: "workflowTimeDelayDelete"+timeDelayLength});
        content1.find('#workflowTimeDelayDelete'+timeDelayLength).attr({ style: 'display: block;'});
        content1.find('#designatedInner1').attr({id: "designatedInner"+timeDelayLength});
        content1.find('#IntelligentDelInner1').attr({id: "IntelligentDelInner"+timeDelayLength});
        content1.find('#DesignatedTime1').attr({id: "DesignatedTime"+timeDelayLength, name: "DesignatedTime"+timeDelayLength});
        content1.find('#IntelligentDelivery1').attr({id: "IntelligentDelivery"+timeDelayLength, name:"DesignatedTime"+timeDelayLength});
        content1.find('#IntelligentDelInner'+timeDelayLength).attr({ style: 'display: none;'});
        content1.find('#SendPushNotiInner1').attr({id: "SendPushNotiInner"+timeDelayLength, style: "display: block;"});
        content1.find('#SendEmailsInner1').attr({id: "SendEmailsInner"+timeDelayLength});
        content1.find('#addToListInner1').attr({id: "addToListInner"+timeDelayLength});
        content1.find('#inAppMessagingInner1').attr({id: "inAppMessagingInner"+timeDelayLength});
        content1.find('#SendPushNoti1').attr({id: "SendPushNoti"+timeDelayLength, name: "ActionsWork"+timeDelayLength, checked: "checked"});
        content1.find('#SendEmails1').attr({id: "SendEmails"+timeDelayLength, name:"ActionsWork"+timeDelayLength});
        content1.find('#addToList1').attr({id: "addToList"+timeDelayLength, name:"ActionsWork"+timeDelayLength});
        content1.find('#inAppMessaging1').attr({id: "inAppMessaging"+timeDelayLength, name:"ActionsWork"+timeDelayLength});
        content1.find('#SendEmailsInner'+timeDelayLength).attr({ style: 'display: none;'});
        content1.find('#addToListInner'+timeDelayLength).attr({ style: 'display: none;'});
        content1.find('#inAppMessagingInner'+timeDelayLength).attr({ style: 'display: none;'});
        content1.find('#InteDelBetweenCheckbox1').attr({id: "InteDelBetweenCheckbox"+timeDelayLength, name: "InteDelBetweenCheckbox"+timeDelayLength});
        content1.find('.IntelligentDeliveryBetween1').attr({class: "row IntelligentDeliveryBetween"+timeDelayLength});
        content1.find('#InteDelReEligibleTimeCheckbox1').attr({id: "InteDelReEligibleTimeCheckbox"+timeDelayLength, name: "InteDelReEligibleTimeCheckbox"+timeDelayLength});
        content1.find('.InteDelReEligibleTime1').attr({class: "col-lg-4 col-sm-8 InteDelReEligibleTime"+timeDelayLength});
        content1.find('#designatedMinutes1').attr({id: "designatedMinutes"+timeDelayLength, name: "designatedMinutes"+timeDelayLength});
        content1.find('#designatedHours1').attr({id: "designatedHours"+timeDelayLength, name: "designatedHours"+timeDelayLength});
        content1.find('#designatedDays1').attr({id: "designatedDays"+timeDelayLength, name: "designatedDays"+timeDelayLength});
        content1.find('#IntelligentMinutes1').attr({id: "IntelligentMinutes"+timeDelayLength, name: "IntelligentMinutes"+timeDelayLength});
        content1.find('#IntelligentHours1').attr({id: "IntelligentHours"+timeDelayLength, name: "IntelligentHours"+timeDelayLength});
        content1.find('#IntelligentDays1').attr({id: "IntelligentDays"+timeDelayLength, name: "IntelligentDays"+timeDelayLength});
        content1.find('#IntDelBetweenfromMinutes1').attr({id: "IntDelBetweenfromMinutes"+timeDelayLength, name: "IntDelBetweenfromMinutes"+timeDelayLength});
        content1.find('#IntDelBetweenfromHours1').attr({id: "IntDelBetweenfromHours"+timeDelayLength, name: "IntDelBetweenfromHours"+timeDelayLength});
        content1.find('#IntDelBetweenfromDays1').attr({id: "IntDelBetweenfromDays"+timeDelayLength, name: "IntDelBetweenfromDays"+timeDelayLength});
        content1.find('#IntDelBetweentoMinutes1').attr({id: "IntDelBetweentoMinutes"+timeDelayLength, name: "IntDelBetweentoMinutes"+timeDelayLength});
        content1.find('#IntDelBetweentoHours1').attr({id: "IntDelBetweentoHours"+timeDelayLength, name: "IntDelBetweentoHours"+timeDelayLength});
        content1.find('#IntDelBetweentoDays1').attr({id: "IntDelBetweentoDays"+timeDelayLength, name: "IntDelBetweentoDays"+timeDelayLength});
        content1.find('#InteDelReEligibleDate1').attr({id: "InteDelReEligibleDate"+timeDelayLength, name: "InteDelReEligibleDate"+timeDelayLength});
        content1.find('#InteDelReEligibleDays1').attr({id: "InteDelReEligibleDays"+timeDelayLength, name: "InteDelReEligibleDays"+timeDelayLength});
        content1.find('#SendPushNotiIOSNotification1').attr({id: "SendPushNotiIOSNotification"+timeDelayLength, name: "SendPushNotiIOSNotification"+timeDelayLength});
        content1.find('#SendPushNotiAndroidNotification1').attr({id: "SendPushNotiAndroidNotification"+timeDelayLength, name: "SendPushNotiAndroidNotification"+timeDelayLength});
        content1.find('#SendEmailNotification1').attr({id: "SendEmailNotification"+timeDelayLength, name: "SendEmailNotification"+timeDelayLength});
        content1.find('#addToListNotification1').attr({id: "addToListNotification"+timeDelayLength, name: "addToListNotification"+timeDelayLength});
        content1.find('#inAppNotification1').attr({id: "inAppNotification"+timeDelayLength, name: "inAppNotification"+timeDelayLength});
        content1.find('#iOSNotificationBtn1').attr({id: "iOSNotificationBtn"+timeDelayLength, name: "iOSNotificationBtn"+timeDelayLength});
        content1.find('#androidNotificationBtn1').attr({id: "androidNotificationBtn"+timeDelayLength, name: "androidNotificationBtn"+timeDelayLength});
        content1.find('#emailNotificationBtn1').attr({id: "emailNotificationBtn"+timeDelayLength, name: "emailNotificationBtn"+timeDelayLength});
        content1.find('#PersonaNotificationBtn1').attr({id: "PersonaNotificationBtn"+timeDelayLength, name: "PersonaNotificationBtn"+timeDelayLength});
        content1.find('#inAppNotificationBtn1').attr({id: "inAppNotificationBtn"+timeDelayLength, name: "inAppNotificationBtn"+timeDelayLength});
        content1.find('#error_ios_notification1').attr({id: "error_ios_notification"+timeDelayLength});
        content1.find('#error_android_notification1').attr({id: "error_android_notification"+timeDelayLength});
        content1.find('#error_email_notification1').attr({id: "error_email_notification"+timeDelayLength});
        content1.find('#error_persona_notification1').attr({id: "error_persona_notification"+timeDelayLength});
        content1.find('#error_inapp_notification1').attr({id: "error_inapp_notification"+timeDelayLength});
        //debugger;label:first
        content1.find("label:eq(0)").attr({for: "DesignatedTime"+timeDelayLength });
        content1.find("label:eq(1)").attr({for: "IntelligentDelivery"+timeDelayLength });
        content1.find(".timeBased label:eq(0)").attr({for: "SendPushNoti"+timeDelayLength, checked: "checked" });
        content1.find(".timeBased label:eq(1)").attr({for: "SendEmails"+timeDelayLength });
        content1.find(".timeBased label:eq(2)").attr({for: "addToList"+timeDelayLength });
        content1.find(".timeBased label:eq(3)").attr({for: "inAppMessaging"+timeDelayLength });
        content1.find('.SlectBox').SumoSelect();

        content1.appendTo(".workflowTimeDelay");
        $("#DesignatedTime"+timeDelayLength).trigger("click");
        $("#designatedMinutes"+timeDelayLength)[0].sumo.selectItem(0);
        $("#designatedDays"+timeDelayLength)[0].sumo.selectItem(0);
        $("#designatedHours"+timeDelayLength)[0].sumo.selectItem(0);
        $("#SendPushNoti"+timeDelayLength).click();
        var x = $("#workflowTimeDelayAddMore"+timeDelayLength).position(); //gets the position of the div element...
        window.scrollTo(x.left, x.top);
        $compile(content1)($scope);
    }
    $scope.timedelay = 1;
    //$("#DesignatedTime1").trigger("click");


});
function updateDeleteIndex(value)
{
    $("#timeDelayValue").attr('onclick', 'removeTimeDelaySection('+value+')');
}
function removeTimeDelaySection(levelId){
    var totalDelay = 0;
    for(var i in timeDelayLengthFirstArrayString){
        if(timeDelayLengthFirstArrayString[i]==parseInt(levelId)){
            timeDelayLengthFirstArrayString.splice(i,1);
            break;
        }
    }
    $("#workflowTimeDelayAddMore"+levelId).remove();
    $(".workflowTimeDelay").find("h2").each(function( index ) {
        totalDelay = index + 1;
        $(this).html("TIME DELAY "+totalDelay);
    });

    $('.close').click();
    return true;
}
function getTimeDelayActions(value){
    var numTimeDelays = $('.workflowTimeDelayAddMore').length;
    var DesignatedTime = '';
    var minutes = '';
    var hours = '';
    var days = '';
    var IntDelBwChk = '';
    var IntDelBwfrMinutes = '';
    var IntDelBwtoMinutes = '';
    var IntDelReEligibleChk = '';
    var InteDelReEligibleDate = '';
    var InteDelReEligibleDays = '';
    var notificationType = '';
    var iOSNotification = '';
    var iOSNotificationId = '';
    var androidNotification = '';
    var androidNotificationId = '';
    var emailNotification = '';
    var emailNotificationId = '';
    var personaNotification = '';
    var personaNotificationId = '';
    var inAppNotification = '';
    var inAppNotificationId = '';
    var timeDelayId = '';

    var timeDelayArr = new Array();
    var validation = [];
    for(var j in timeDelayLengthFirstArrayString){
        var i = timeDelayLengthFirstArrayString[j];
        timeDelayId = $("#timeDelay_workflow_id"+i).attr('value');
        if(typeof(timeDelayId ) != "undefined" && timeDelayId !== null){
            timeDelayId = timeDelayId;
        }else{
            timeDelayId = '';
        }

        var IntDelBwChk = "";
        var IntDelReEligibleChk = "";
        var minutes = '';
        var hours = '';
        var days = '';
        var IntDelBwChk = '';
        var IntDelBwfrMinutes = '';
        var IntDelBwtoMinutes = '';
        var IntDelReEligibleChk = '';
        var InteDelReEligibleDate = '';
        var InteDelReEligibleDays = '';
        if($('input:radio[id="SendPushNoti'+i+'"]').is(':checked')){
            notificationType = 'push';
            iOSNotification = $("#SendPushNotiIOSNotification"+i).val();
            androidNotification = $("#SendPushNotiAndroidNotification"+i).val(); //alert(iOSNotification); alert(androidNotification);
            if($.trim(iOSNotification) != ""){
                iOSNotification = $("#SendPushNotiIOSNotification"+i+' option:selected').text();
                iOSNotificationId = $("#SendPushNotiIOSNotification"+i+' option:selected').val();
                emailNotification = '';
                androidNotification = '';
                personaNotification = '';
                inAppNotification = '';
                validation["SendPushNotiIOSNotification"+i] = 1;
                $("#error_ios_notification"+i).html("");
            }
            if($.trim(androidNotification) != ""){
                androidNotification = $("#SendPushNotiAndroidNotification"+i+' option:selected').text();
                androidNotificationId = $("#SendPushNotiAndroidNotification"+i+' option:selected').val();
                iOSNotification = '';
                emailNotification = '';
                personaNotification = '';
                inAppNotification = '';
                validation["SendPushNotiIOSNotification"+i] = 1;
                $("#error_ios_notification"+i).html("");
            }
            if($.trim(androidNotification) == "" && $.trim(iOSNotification) == ""){ //alert("called");
                if(value !== "draft"){
                $('html,body').animate({
                        scrollTop: $("#SendPushNoti1").offset().top},
                    'slow');
                $("#error_ios_notification"+i).html("Please select atleast one iOS or android campaign.");
                $("#SendPushNotiIOSNotification"+i).css('border-color', '#424141');
                validation["SendPushNotiIOSNotification"+i] = 0;
                 }
            }
        }else if($('input:radio[id="SendEmails'+i+'"]').is(':checked')){
            notificationType = 'email';
            emailNotification = $("#SendEmailNotification"+i).val();
            if($.trim(emailNotification) != ""){
                emailNotification = $("#SendEmailNotification"+i+' option:selected').text();
                emailNotificationId = $("#SendEmailNotification"+i+' option:selected').val();
                validation["SendEmailNotification"+i] = 1;
                $("#error_email_notification"+i).html("");
            }else{
                if(value !== "draft"){
                $("#error_email_notification"+i).html("Please select atleast one email campaign.");
                $("#SendEmailNotification"+i).css('border-color', '#424141');
                validation["SendEmailNotification"+i] = 0;
                }
            }
            iOSNotification = '';
            androidNotification = '';
            personaNotification = '';
            inAppNotification = '';
        }else if($('input:radio[id="addToList'+i+'"]').is(':checked')){
            notificationType = 'persona';
            personaNotification = $("#addToListNotification"+i).val();
            if($.trim(personaNotification) != ""){
                personaNotification = $("#addToListNotification"+i+' option:selected').text();
                personaNotificationId = $("#addToListNotification"+i+' option:selected').val();
                validation["addToListNotification"+i] = 1;
                $("#error_persona_notification"+i).html("");
            }else{
                if(value !== "draft"){
                $("#error_persona_notification"+i).html("Please select atleast one persona.");
                $("#addToListNotification"+i).css('border-color', '#424141');
                validation["addToListNotification"+i] = 0;
                }
            }
            iOSNotification = '';
            androidNotification = '';
            emailNotification = '';
            inAppNotification = '';
        }else if($('input:radio[id="inAppMessaging'+i+'"]').is(':checked')){
            notificationType = 'in-app';
            inAppNotification = $("#inAppNotification"+i).val();
            if($.trim(inAppNotification) != ""){
                inAppNotification = $("#inAppNotification"+i+' option:selected').text();
                inAppNotificationId = $("#inAppNotification"+i+' option:selected').val();
                validation["inAppNotification"+i] = 1;
                $("#error_inapp_notification"+i).html("");
            }else{
                if(value !== "draft"){
                $("#error_inapp_notification"+i).html("Please select atleast one in-App messaging.");
                $("#inAppNotification"+i).css('border-color', '#424141');
                validation["inAppNotification"+i] = 0;
                }
            }
            iOSNotification = '';
            androidNotification = '';
            personaNotification = '';
            emailNotification = '';
        }

        if($('input:radio[id="DesignatedTime'+i+'"]').is(':checked')){
            DesignatedTime = $('input:radio[id="DesignatedTime'+i+'"]').attr('value');
            minutes = $("#designatedMinutes"+i).val();
            hours = $("#designatedHours"+i).val();
            days = $("#designatedDays"+i).val();

            var json = '{"timeDelayType": "'+DesignatedTime+'", "timeDelay_workflow_id": "'+timeDelayId+'", "designatedMinutes": "'+minutes+'", "designatedHours": "'+hours+'", "designatedDays": "'+days+'", "notificationType": "'+notificationType+'", "iOSNotification": "'+iOSNotification+'", "androidNotification": "'+androidNotification+'", "emailNotification": "'+emailNotification+'", "personaNotification": "'+personaNotification+'", "inAppNotification": "'+inAppNotification+'", "iOSNotificationId": "'+iOSNotificationId+'", "androidNotificationId": "'+androidNotificationId+'", "emailNotificationId": "'+emailNotificationId+'", "personaNotificationId": "'+personaNotificationId+'", "inAppNotificationId": "'+inAppNotificationId+'"}';

        }else{
            DesignatedTime = $('input:radio[id="IntelligentDelivery'+i+'"]').attr('value');
            minutes = $("#IntelligentMinutes"+i).val();
            hours = $("#IntelligentHours"+i).val();
            days = $("#IntelligentDays"+i).val();
            if($('input:checkbox[id="InteDelBetweenCheckbox'+i+'"]').is(':checked')){
                IntDelBwChk = "1";
                IntDelBwfrMinutes = $("#IntDelBetweenfromMinutes"+i).val();
                IntDelBwtoMinutes = $("#IntDelBetweentoMinutes"+i).val();
            }

            if($('input:checkbox[id="InteDelReEligibleTimeCheckbox'+i+'"]').is(':checked')){
                IntDelReEligibleChk = "1";
                InteDelReEligibleDate = $("#InteDelReEligibleDate"+i).val();
                InteDelReEligibleDays = $("#InteDelReEligibleDays"+i).val();
            }

            var json = '{"timeDelayType": "'+DesignatedTime+'", "timeDelay_workflow_id": "'+timeDelayId+'", "IntelligentDeliveryMinutes": "'+minutes+'", "IntelligentDeliveryHours": "'+hours+'", "IntelligentDeliveryDays": "'+days+'", "InteDelBetweenCheck": "'+IntDelBwChk+'", "IntDelBetweenfromMinutes": "'+IntDelBwfrMinutes+'", "IntDelBetweentoMinutes": "'+IntDelBwtoMinutes+'", "InteDelReEligibleTimeCheckbox": "'+IntDelReEligibleChk+'", "InteDelReEligibleDate": "'+InteDelReEligibleDate+'", "InteDelReEligibleDays": "'+InteDelReEligibleDays+'", "notificationType": "'+notificationType+'", "iOSNotification": "'+iOSNotification+'", "androidNotification": "'+androidNotification+'", "emailNotification": "'+emailNotification+'", "personaNotification": "'+personaNotification+'", "inAppNotification": "'+inAppNotification+'", "iOSNotificationId": "'+iOSNotificationId+'", "androidNotificationId": "'+androidNotificationId+'", "emailNotificationId": "'+emailNotificationId+'", "personaNotificationId": "'+personaNotificationId+'", "inAppNotificationId": "'+inAppNotificationId+'"}';
        }
        timeDelayArr.push(json);
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
        return timeDelayArr;
    }else{
        return false;
    }
}


function showWorkflowTimeDelay(timedelayArr){
    $('#ConfirmTab .confirmWork2 .row .col-sm-12').html("<h4></h4>");
    if(timedelayArr){
        $.each(timedelayArr,function(index, obj) {
            var parseData = JSON.parse(obj);
            var androidNotification = parseData['androidNotification'];
            var iOSNotification = parseData['iOSNotification'];
            var emailNotification = parseData['emailNotification'];
            var personaNotification = parseData['personaNotification'];
            var inAppNotification = parseData['inAppNotification'];
            if($.trim(androidNotification) != ""){
                var notificationType = "Send Android Notification" + ' ('+androidNotification+')';
            }else if($.trim(iOSNotification) != ""){
                var notificationType = "Send iOS Notification" + ' ('+iOSNotification+')';
            }else if($.trim(emailNotification) != ""){
                var notificationType = "Send Email Notification" + ' ('+emailNotification+')';
            }else if($.trim(personaNotification) != ""){
                var notificationType = "Send Persona " + ' ('+personaNotification+')';
            }else if($.trim(inAppNotification) != ""){
                var notificationType = "Send In-App Messaging " + ' ('+inAppNotification+')';
            }else{
                var notificationType = "Send "+parseData.notificationType+" Notification (No Campaigns Selected.)";
            }
            if(parseData.timeDelayType == 'Designated-Time'){
                var text = "Designated Time";
                var time =  parseData.designatedHours+' hours '+parseData.designatedMinutes+' Minutes '+parseData.designatedDays+' Days';
                $('#ConfirmTab .confirmWork2 .row .col-sm-12').append('<hr><h4>' + time + "</h4>&nbsp;<small>" + text + " </small><br/><small>" + notificationType);
            }else if(parseData.timeDelayType == 'Intelligent-delivery'){
                var text = "Intelligent Delivery";
                var time =  parseData.IntelligentDeliveryHours+' hours '+parseData.IntelligentDeliveryMinutes+' Minutes '+parseData.IntelligentDeliveryDays+' Days';
                $('#ConfirmTab .confirmWork2 .row .col-sm-12').append('<hr><h4>' + time + "</h4>&nbsp;<small>" + text + " </small><br/><small>" + notificationType);
            }
        });
    }

}
function DeleteWorkflow(id){
    var baseurl = $("#baseurl").val();
    $.ajax({
        type: "POST",
        url: baseurl + 'workflow/deleteWorkflow/',
        data:"wrkflow_id="+id,
        context: document.body,
        async: true,
        success: function(data) {
            if(parseInt(data) == id){
                location.reload();

            }
        }
    });
}

function showDesignatedIntelligentDelivery(obj){
    var elementId = obj.id;
    var elementName = obj.name;;
    var elementVal = obj.value;
    var str = elementId;
    if (elementVal === 'Designated-Time') {
        str = str.split("DesignatedTime");
        $('#IntelligentDelInner'+str[1]).hide();
        $('#designatedInner'+str[1]).show();
        $('input:radio[name="'+elementName+'"][id="'+elementId+'"]').attr('checked','checked');
        $('input:radio[name="'+elementName+'"][id="IntelligentDelivery'+str[1]+'"]').removeAttr('checked');
    }
    if (elementVal === 'Intelligent-delivery') {
        str = str.split("IntelligentDelivery");
        $('#designatedInner'+str[1]).hide();
        $('#IntelligentDelInner'+str[1]).css("display", "block");
        $('#IntelligentDelInner'+str[1]).show();
        $('input:radio[name="'+elementName+'"][id="'+elementId+'"]').attr('checked','checked');
        $('input:radio[name="'+elementName+'"][id="DesignatedTime'+str[1]+'"]').removeAttr('checked');
    }
    if (elementVal === 'push') {
        str = str.split("SendPushNoti");
        $('#addToListInner'+str[1]).hide();
        $('#SendEmailsInner'+str[1]).hide();
        $('#inAppMessagingInner'+str[1]).hide();
        $('#SendPushNotiInner'+str[1]).show();
        $('input:radio[name="'+elementName+'"][id="'+elementId+'"]').attr('checked','checked');
        $('input:radio[name="'+elementName+'"][id="SendEmails'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="addToList'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="inAppMessaging'+str[1]+'"]').removeAttr('checked');
        $('#SendEmailNotification'+str[1])[0].sumo.unSelectAll();
        $('#addToListNotification'+str[1])[0].sumo.unSelectAll();
        $('#inAppNotification'+str[1])[0].sumo.unSelectAll();
        $('input:radio[name="DesignatedTime'+str[1]+'"][id="IntelligentDelivery'+str[1]+'"]').removeAttr("disabled");
    }
    if (elementVal === 'email') {
        str = str.split("SendEmails"); //console.log(str);
        $('#SendPushNotiInner'+str[1]).hide();
        $('#addToListInner'+str[1]).hide();
        $('#inAppMessagingInner'+str[1]).hide();
        $('#SendEmailsInner'+str[1]).css("display", "block");
        $('#SendEmailsInner'+str[1]).show();
        $('input:radio[name="'+elementName+'"][id="'+elementId+'"]').attr('checked','checked');
        $('input:radio[name="'+elementName+'"][id="SendPushNoti'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="addToList'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="inAppMessaging'+str[1]+'"]').removeAttr('checked');
        $('#SendPushNotiIOSNotification'+str[1])[0].sumo.unSelectAll();
        $('#SendPushNotiAndroidNotification'+str[1])[0].sumo.unSelectAll();
        $('#addToListNotification'+str[1])[0].sumo.unSelectAll();
        $('#inAppNotification'+str[1])[0].sumo.unSelectAll();
        $('input:radio[name="DesignatedTime'+str[1]+'"][id="IntelligentDelivery'+str[1]+'"]').removeAttr("disabled");
    }
    if (elementVal === 'persona') {
        str = str.split("addToList"); //console.log(str);
        $('#SendPushNotiInner'+str[1]).hide();
        $('#SendEmailsInner'+str[1]).hide();
        $('#inAppMessagingInner'+str[1]).hide();
        $('#addToListInner'+str[1]).css("display", "block");
        $('#addToListInner'+str[1]).show();
        $('input:radio[name="'+elementName+'"][id="'+elementId+'"]').attr('checked','checked');
        $('input:radio[name="'+elementName+'"][id="SendEmails'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="SendPushNoti'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="inAppMessaging'+str[1]+'"]').removeAttr('checked');
        $('#SendPushNotiIOSNotification'+str[1])[0].sumo.unSelectAll();
        $('#SendPushNotiAndroidNotification'+str[1])[0].sumo.unSelectAll();
        $('#SendEmailNotification'+str[1])[0].sumo.unSelectAll();
        $('#inAppNotification'+str[1])[0].sumo.unSelectAll();

        /*$('#IntelligentDelInner'+str[1]).hide();
        $('#IntelligentDelInner'+str[1]).css("display", "none");
        $('input:radio[name="DesignatedTime'+str[1]+'"][id="DesignatedTime'+str[1]+'"]').attr('checked','checked');*/
        $('input:radio[name="DesignatedTime'+str[1]+'"][id="DesignatedTime'+str[1]+'"]').click();
        $('input:radio[name="DesignatedTime'+str[1]+'"][id="IntelligentDelivery'+str[1]+'"]').attr("disabled", 'disabled');
    }
    if (elementVal === 'in-app') {
        str = str.split("inAppMessaging"); //console.log(str); console.log(elementId); //debugger;
        $('#SendPushNotiInner'+str[1]).hide();
        $('#SendEmailsInner'+str[1]).hide();
        $('#addToListInner'+str[1]).hide();
        $('#inAppMessagingInner'+str[1]).css("display", "block");
        $('#inAppMessagingInner'+str[1]).show();
        $('input:radio[name="'+elementName+'"][id="'+elementId+'"]').attr('checked','checked');
        $('input:radio[name="'+elementName+'"][id="SendEmails'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="SendPushNoti'+str[1]+'"]').removeAttr('checked');
        $('input:radio[name="'+elementName+'"][id="addToList'+str[1]+'"]').removeAttr('checked');
        $('#SendPushNotiIOSNotification'+str[1])[0].sumo.unSelectAll();
        $('#SendPushNotiAndroidNotification'+str[1])[0].sumo.unSelectAll();
        $('#SendEmailNotification'+str[1])[0].sumo.unSelectAll();
        $('#addToListNotification'+str[1])[0].sumo.unSelectAll();
        $('input:radio[name="DesignatedTime'+str[1]+'"][id="IntelligentDelivery'+str[1]+'"]').removeAttr("disabled");
    }
}
