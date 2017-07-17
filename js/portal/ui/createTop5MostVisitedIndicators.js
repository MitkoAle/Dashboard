function generateTop5MostVisitedIndicators()
{
	/*
	<ul class="popular">
        <li> <a href="#">Top 10 Ways to Make Money Online</a>
          <p>by University of Melbourne | for LGA Melbourne</p>
        </li>
      </ul>
	  */
	 
	
	
	var configs = new configurationSettings();
	createXMLHttpRequest(configs.portal_list_top5_most_visited_indicators, function(response) 
	{
		//alert(JSON.stringify(response));
		var indicators = response.indicators_list;
		//alert(indicators.length);
		
		var mainUL = document.createElement("ul");
		mainUL.class = "popular";
		
		for (var i=0; i< indicators.length; i++)
		{
			var tmp_indicator = indicators[i];
			var tmp_li = document.createElement("li");
			mainUL.appendChild(tmp_li);
			
			var tmp_a = document.createElement("a");
			tmp_a.title = tmp_indicator.jobname;
			tmp_a.href = configs.indicatordetailsPage + "?uuid=" + tmp_indicator.uuid;
			tmp_a.appendChild(document.createTextNode(tmp_indicator.jobname));
			tmp_li.appendChild(tmp_a);
			
			var tmp_p = document.createElement("p");
			tmp_li.appendChild(tmp_p);
			
			tmp_p.appendChild(document.createTextNode("by " + 
				tmp_indicator.organisation_name + " | for " + 
				tmp_indicator.geoclass.label));
		}
		
		
	return mainUL.outerHTML;	
		
	}, function(status) {
	//do something here if the request was un-successful!
	});
	

}
			