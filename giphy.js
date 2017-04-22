  var demo1 = new autoComplete({
            selector: '#androidGiphySearch',
            minChars: 1,
             onSelect: function(e, term, item){
             	if(!e.target.getAttribute('data-val'))
             	{
             		var tag = $('#androidGiphySearch').val();
             	}
             	else
             	{
             		var tag =  e.target.getAttribute('data-val');
             	}
             	var baseurl = $("#baseurl").val();
             	$("#androidGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#androidGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
                
                } ,
            source: function(term, suggest){
                term = term.toLowerCase();
                var baseurl = $("#baseurl").val();
                $.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/searchGiphyTags',
		            data: "tag=" + term, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data); return false;
		               		var jsonResponse = JSON.parse(data);
		               		var arr = jsonResponse.result.objects;
		               		var suggestions = [];
		               		var i;
		               		for (i=0;i<arr.length;i++){
		               			suggestions.push(arr[i].name);
		               		}
		                    //if (~arr[i].toLowerCase().indexOf(term)) suggestions.push(arr[i].name);
		                	suggest(suggestions);
		               		
		               		
		            	}
		            	
		            	
		            }
		        });
                
            }
        });


  var demo2 = new autoComplete({
            selector: '#iOSGiphySearch',
            minChars: 1,
             onSelect: function(e, term, item){
             	if(!e.target.getAttribute('data-val'))
             	{
             		var tag = $('#iOSGiphySearch').val();
             	}
             	else
             	{
             		var tag =  e.target.getAttribute('data-val');
             	}
             	var baseurl = $("#baseurl").val();
             	$("#iOSGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#iOSGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji1(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
                
                } ,
            source: function(term, suggest){
                term = term.toLowerCase();
                var baseurl = $("#baseurl").val();
                $.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/searchGiphyTags',
		            data: "tag=" + term, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data); return false;
		               		var jsonResponse = JSON.parse(data);
		               		var arr = jsonResponse.result.objects;
		               		var suggestions = [];
		               		var i;
		               		for (i=0;i<arr.length;i++){
		               			suggestions.push(arr[i].name);
		               		}
		                    //if (~arr[i].toLowerCase().indexOf(term)) suggestions.push(arr[i].name);
		                	suggest(suggestions);
		               		
		               		
		            	}
		            	
		            	
		            }
		        });
                
            }
        });

  var demo3 = new autoComplete({
            selector: '#emailGiphySearch',
            minChars: 1,
             onSelect: function(e, term, item){
             	if(!e.target.getAttribute('data-val'))
             	{
             		var tag = $('#emailGiphySearch').val();
             	}
             	else
             	{
             		var tag =  e.target.getAttribute('data-val');
             	}
             	var baseurl = $("#baseurl").val();
             	$("#emailGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#emailGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
                
                } ,
            source: function(term, suggest){
                term = term.toLowerCase();
                var baseurl = $("#baseurl").val();
                $.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/searchGiphyTags',
		            data: "tag=" + term, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data); return false;
		               		var jsonResponse = JSON.parse(data);
		               		var arr = jsonResponse.result.objects;
		               		var suggestions = [];
		               		var i;
		               		for (i=0;i<arr.length;i++){
		               			suggestions.push(arr[i].name);
		               		}
		                    //if (~arr[i].toLowerCase().indexOf(term)) suggestions.push(arr[i].name);
		                	suggest(suggestions);
		               		
		               		
		            	}
		            	
		            	
		            }
		        });
                
            }
        });

  var demo4 = new autoComplete({
            selector: '#crossGiphySearch',
            minChars: 1,
             onSelect: function(e, term, item){
             	if(!e.target.getAttribute('data-val'))
             	{
             		var tag = $('#crossGiphySearch').val();
             	}
             	else
             	{
             		var tag =  e.target.getAttribute('data-val');
             	}
             	var baseurl = $("#baseurl").val();
             	$("#crossGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#crossGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
                
                } ,
            source: function(term, suggest){
                term = term.toLowerCase();
                var baseurl = $("#baseurl").val();
                $.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/searchGiphyTags',
		            data: "tag=" + term, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data); return false;
		               		var jsonResponse = JSON.parse(data);
		               		var arr = jsonResponse.result.objects;
		               		var suggestions = [];
		               		var i;
		               		for (i=0;i<arr.length;i++){
		               			suggestions.push(arr[i].name);
		               		}
		                    //if (~arr[i].toLowerCase().indexOf(term)) suggestions.push(arr[i].name);
		                	suggest(suggestions);
		               		
		               		
		            	}
		            	
		            	
		            }
		        });
                
            }
        });


        /*var demo2 = new autoComplete({
            selector: '#advanced-demo',
            minChars: 0,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = [['Australia', 'au'], ['Austria', 'at'], ['Brasil', 'br'], ['Bulgaria', 'bg'], ['Canada', 'ca'], ['China', 'cn'], ['Czech Republic', 'cz'], ['Denmark', 'dk'], ['Finland', 'fi'], ['France', 'fr'], ['Germany', 'de'], ['Hungary', 'hu'], ['India', 'in'], ['Italy', 'it'], ['Japan', 'ja'], ['Netherlands', 'nl'], ['Norway', 'no'], ['Portugal', 'pt'], ['Romania', 'ro'], ['Russia', 'ru'], ['Spain', 'es'], ['Swiss', 'ch'], ['Turkey', 'tr'], ['USA', 'us']];
                var suggestions = [];
                for (i=0;i<choices.length;i++)
                    if (~(choices[i][0]+' '+choices[i][1]).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                suggest(suggestions);
            },
            renderItem: function (item, search){
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-langname="'+item[0]+'" data-lang="'+item[1]+'" data-val="'+search+'"><img src="img/'+item[1]+'.png"> '+item[0].replace(re, "<b>$1</b>")+'</div>';
            },
            onSelect: function(e, term, item){
                console.log('Item "'+item.getAttribute('data-langname')+' ('+item.getAttribute('data-lang')+')" selected by '+(e.type == 'keydown' ? 'pressing enter' : 'mouse click')+'.');
                document.getElementById('advanced-demo').value = item.getAttribute('data-langname')+' ('+item.getAttribute('data-lang')+')';
            }
        });*/

/*$('#androidGiphySearch').keyup(function (e){
    if(e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 37){
        
    }
    else{
    //console.log(e.target.value);
    var tag = e.target.value;
    var baseurl = $("#baseurl").val();
    if(tag != ''){
			$('.searchResult').html("");
			$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/searchGiphyTags',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
            		//console.log(data); return false;
               		var jsonResponse = JSON.parse(data);
               		var arr = jsonResponse.result.objects;
                	//var tags = [];
                	//$('#androidGiphyTags').html("");
                	//$("#androidGiphyTags").append('<ul class="searchResult">');
                	var i;
					for (i = 0; i < arr.length; i++) {
					    //tags.push(arr[i].name);
					    	$("#androidGiphy").append('<li id="" onclick="getAndroidGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');					   
					    
					}
					//$("#androidGiphyTags").append('</ul>');
					//console.log(tags);
            	}
            	
            	
            }
        });
			return false;
		}else{
			$('.searchResult').html("");
		}

    }
});*/

/*$('#iOSGiphySearch').keyup(function (e){
    if(e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 37){
        
    }
    else{
    //console.log(e.target.value);
    var tag = e.target.value;
    var baseurl = $("#baseurl").val();
    if(tag != ''){
			$('.searchResult').html("");
			$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/searchGiphyTags',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
            		//console.log(data); return false;
               		var jsonResponse = JSON.parse(data);
               		var arr = jsonResponse.result.objects;
                	//var tags = [];
                	//$('#androidGiphyTags').html("");
                	//$("#androidGiphyTags").append('<ul class="searchResult">');
                	var i;
					for (i = 0; i < arr.length; i++) {
					    //tags.push(arr[i].name);
					    	$("#iOSGiphy").append('<li id="" onclick="getIosGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');					   
					    
					}
					//$("#androidGiphyTags").append('</ul>');
					//console.log(tags);
            	}
            	
            	
            }
        });
			return false;
		}else{
			$('.searchResult').html("");
		}

    }
});*/

/*$('#emailGiphySearch').keyup(function (e){
    if(e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 37){
        
    }
    else{
    //console.log(e.target.value);
    var tag = e.target.value;
    var baseurl = $("#baseurl").val();
    if(tag != ''){
			$('.searchResult').html("");
			$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/searchGiphyTags',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
            		//console.log(data); return false;
               		var jsonResponse = JSON.parse(data);
               		var arr = jsonResponse.result.objects;
                	//var tags = [];
                	//$('#androidGiphyTags').html("");
                	//$("#androidGiphyTags").append('<ul class="searchResult">');
                	var i;
					for (i = 0; i < arr.length; i++) {
					    //tags.push(arr[i].name);
					    	$("#emailGiphy").append('<li id="" onclick="getEmailGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');					   
					    
					}
					//$("#androidGiphyTags").append('</ul>');
					//console.log(tags);
            	}
            	
            	
            }
        });
			return false;
		}else{
			$('.searchResult').html("");
		}

    }
});*/

/*$('#crossGiphySearch').keyup(function (e){
    if(e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 37){
        
    }
    else{
    //console.log(e.target.value);
    var tag = e.target.value;
    var baseurl = $("#baseurl").val();
    if(tag != ''){
			$('.searchResult').html("");
			$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/searchGiphyTags',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
            		//console.log(data); return false;
               		var jsonResponse = JSON.parse(data);
               		var arr = jsonResponse.result.objects;
                	//var tags = [];
                	//$('#androidGiphyTags').html("");
                	//$("#androidGiphyTags").append('<ul class="searchResult">');
                	var i;
					for (i = 0; i < arr.length; i++) {
					    //tags.push(arr[i].name);
					    	$("#crossGiphy").append('<li id="" onclick="getCrossGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');					   
					    
					}
					//$("#androidGiphyTags").append('</ul>');
					//console.log(tags);
            	}
            	
            	
            }
        });
			return false;
		}else{
			$('.searchResult').html("");
		}

    }
});*/

/*function getGiphyTags(type){

	document.addEventListener("keydown", function(event) {
  	var key = event.which;
  	console.log(event.which);
	});

	var baseurl = $("#baseurl").val();
		if(type == 'android'){
			var x = document.getElementById("androidGiphySearch");
			var tag = x.value;

		}

		else if(type == 'iOS'){
			var x = document.getElementById("iOSGiphySearch");
			var tag = x.value;
		}

		else if(type == 'email'){
			var x = document.getElementById("emailGiphySearch");
			var tag = x.value;
		}
		else if(type == 'cross'){
			var x = document.getElementById("crossGiphySearch");
			var tag = x.value;
		}
		//alert(type); alert(tag);return false;
    	//x.value = x.value.toUpperCase();
    	//theUrl = 'http://giphy.com/ajax/tags/search/?q=hello'

		if(tag != ''){
			$('.searchResult').html("");
			$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/searchGiphyTags',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
            		//console.log(data); return false;
               		var jsonResponse = JSON.parse(data);
               		var arr = jsonResponse.result.objects;
                	//var tags = [];
                	//$('#androidGiphyTags').html("");
                	//$("#androidGiphyTags").append('<ul class="searchResult">');
                	var i;
					for (i = 0; i < arr.length; i++) {
					    //tags.push(arr[i].name);
					    if(type == 'iOS'){
					    	$("#iOSGiphy").append('<li onclick="getIosGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');
					    }
					    if(type == 'android'){
					    	$("#androidGiphy").append('<li id="" onclick="getAndroidGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');
					    }
					    if(type == 'email'){
					    	$("#emailGiphy").append('<li onclick="getEmailGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');
					    }
					    if(type == 'cross'){
					    	$("#crossGiphy").append('<li onclick="getCrossGiph(this);" value="'+arr[i].name+'">'+arr[i].name+'</li>');
					    }
					    
					}
					//$("#androidGiphyTags").append('</ul>');
					//console.log(tags);
            	}
            	
            	
            }
        });
			return false;
		}else{
			$('.searchResult').html("");
		}
	
	
}*/

function getAndroidGiph(event){
	
	var baseurl = $("#baseurl").val();
	var search = event.getAttribute('value');
	$("#androidGiphySearch").val(search);
	$("#androidGiphy").html("");
	$("#androidGiphImages").html("");
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}
	if(tag != ''){
		$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/getGiphyImages',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
	            	var jsonResponse = JSON.parse(data);
	            	//console.log(jsonResponse.data[i].images);
	            	var i;
					for (i = 0; i <= 8; i++) {
						$("#androidGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
	            	}
            	}else{
            		return false;
            	}
            	
            }

        });
	}
}

function getIosGiph(event){

	var baseurl = $("#baseurl").val();
	var search = event.getAttribute('value');
	$("#iOSGiphySearch").val(search);
	$("#iOSGiphy").html("");
	$("#iOSGiphImages").html("");
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}
	if(tag != ''){
		$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/getGiphyImages',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
	            	var jsonResponse = JSON.parse(data);
	            	//console.log(jsonResponse.data[i].images);
	            	var i;
					for (i = 0; i <= 8; i++) {
						$("#iOSGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji1(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
	            	}
            	}else{
            		return false;
            	}
            	
            }

        });
	}
}

function getEmailGiph(event){

	var baseurl = $("#baseurl").val();
	var search = event.getAttribute('value');
	$("#emailGiphySearch").val(search);
	$("#emailGiphy").html("");
	$("#emailGiphImages").html("");
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}

	$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/getGiphyImages',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
	            	var jsonResponse = JSON.parse(data);
	            	//console.log(jsonResponse.data[i].images);
	            	var i;
					for (i = 0; i <= 8; i++) {
						$("#emailGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
	            	}
            	}else{
            		return false;
            	}
            	
            }

        });

}

function getCrossGiph(event){

	var baseurl = $("#baseurl").val();
	var search = event.getAttribute('value');
	$("#crossGiphySearch").val(search);
	$("#crossGiphy").html("");
	$("#crossGiphImages").html("");
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}

	$.ajax({
    		type: "POST",
            url: baseurl + 'appUser/getGiphyImages',
            data: "tag=" + tag, 
            async: false,
            context: document.body,
            success: function(data) {
            	if(data != ''){
	            	var jsonResponse = JSON.parse(data);
	            	//console.log(jsonResponse.data[i].images);
	            	var i;
					for (i = 0; i <= 8; i++) {
						$("#crossGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
	            	}
            	}else{
            		return false;
            	}
            	
            }

        });

}

$("#androidGiphySearch").keyup(function(e) {
    //alert("up");
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13){
    var baseurl = $("#baseurl").val();
	//var search = event.getAttribute('value');
	var search = $("#androidGiphySearch").val();
	/*alert(search); return false;*/
	$("#emailGiphySearch").val(search);
	$("#emailGiphy").html("");
	$("#emailGiphImages").html("");
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}

	$("#androidGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#androidGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
    }
});

$("#iOSGiphySearch").keyup(function(e) {
    //alert("up");
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13){
    var baseurl = $("#baseurl").val();
	//var search = event.getAttribute('value');
	var search = $("#iOSGiphySearch").val();
	
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}

	$("#iOSGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#iOSGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji1(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
    }
});

$("#emailGiphySearch").keyup(function(e) {
    //alert("up");
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13){
    var baseurl = $("#baseurl").val();
	//var search = event.getAttribute('value');
	var search = $("#emailGiphySearch").val();
	
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}

	$("#emailGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#emailGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
    }
});

$("#crossGiphySearch").keyup(function(e) {
    //alert("up");
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13){
    var baseurl = $("#baseurl").val();
	//var search = event.getAttribute('value');
	var search = $("#crossGiphySearch").val();
	
	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}

	$("#crossGiphImages").html("");
             	$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
		            		//console.log(data);
			            	var jsonResponse = JSON.parse(data);
			            	//console.log(jsonResponse.data[i].images);
			            	var i;
							for (i = 0; i <= 8; i++) {
								$("#crossGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });
    }
});

function getGifImages(type){

	if(type == 'android'){
		var search = $("#androidGiphySearch").val();
	}
	if(type == 'iOS'){
		var search = $("#iOSGiphySearch").val();
	}
	if(type == 'email'){
		var search = $("#emailGiphySearch").val();
	}
	if(type == 'cross'){
		var search = $("#crossGiphySearch").val();
	}

	if(search.indexOf(' ') >= 0){
		var tag = search.replace(" ", "+");
	}else{
		var tag = search;
	}

	if(tag != ''){

		if(type == 'android'){
			$("#androidGiphImages").html("");
		}
		if(type == 'iOS'){
			$("#iOSGiphImages").html("");
		}
		if(type == 'email'){
			$("#emailGiphImages").html("");
		}
		if(type == 'cross'){
			$("#crossGiphImages").html("");
		}

		$.ajax({
		    		type: "POST",
		            url: baseurl + 'appUser/getGiphyImages',
		            data: "tag=" + tag, 
		            async: false,
		            context: document.body,
		            success: function(data) {
		            	if(data != ''){
			            	var jsonResponse = JSON.parse(data);
			            	var i;
							for (i = 0; i <= 8; i++) {
								if(type == 'android'){
									$("#androidGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
								}
								if(type == 'iOS'){
									$("#iOSGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji1(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
								}
								if(type == 'email'){
									$("#emailGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
								}
								if(type == 'cross'){
									$("#crossGiphImages").append('<li value="'+jsonResponse.data[i].images.fixed_height.url+'"><a href="javascript:void(0)"><img onclick="addEmoji(this);" class="fr-dib" src="'+jsonResponse.data[i].images.fixed_height.url+'" id="Agree1" alt=""></a></li>');
								}
			            	}
		            	}else{
		            		return false;
		            	}
		            	
		            }

		        });

	}

}