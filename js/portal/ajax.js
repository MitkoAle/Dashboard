// JavaScript Document

var createXMLHttpRequest = function(url, successHandler, errorHandler) {
	var xhr = typeof XMLHttpRequest != 'undefined'
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('get', url, true);
	xhr.onreadystatechange = function() {
		var status;
		var data;
		
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				data = JSON.parse(xhr.responseText);
				//alert(data);
				//alert(xhr.responseText);
				
				console.log(data);
				successHandler && successHandler(data);
			} else {
				//errorHandler && errorHandler(status);
			}
		}
	};
	xhr.send();
};


var createXMLHttpRequest_Post = function(url, params, successHandler, errorHandler) {
	var xhr = typeof XMLHttpRequest != 'undefined'
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');

	xhr.onreadystatechange = function() {
		var status;
		var data;
		
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				data = JSON.parse(xhr.responseText);
				//alert(data);
				//alert(xhr.responseText);
				
				successHandler && successHandler(data);
			} else {
				//errorHandler && errorHandler(status);
			}
		}
	};
	
	xhr.open('post', url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	var postParams = "";
	
	var firstItem = true;
	for(key in params)
	{
	  var value = params[key];
	  if (firstItem)
	  {
	  	postParams += (key + "=" + value);
		firstItem = false;
	  }
	  else
	  	postParams += ("&" + key + "=" + value);
		
	}
  	xhr.send(postParams);
};


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



function getHumanReadableDateFromYYMMDD(dateString)
{
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	var current_date = new Date(dateString);
	month_value = current_date.getMonth();
	day_value = current_date.getDate();
	year_value = current_date.getFullYear();
	
	return 	day_value +" "+ months[month_value] + " " + year_value;
	
}
