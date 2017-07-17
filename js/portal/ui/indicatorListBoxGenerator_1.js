function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function generateIndicatorSummaryBox(indicatoruuid, title, date, publisher, publisherid, geoBoundary, thumbnail, abstract, themes, keywords)
{
			var config = new configurationSettings();
			
			var mainDiv = document.createElement("div");
			mainDiv.style.borderColor =  "rgba(216,216,216,1.00)";
			mainDiv.style.borderWidth = "1px";
			mainDiv.style.borderStyle = "solid";
			mainDiv.id = "mainDiv";
			
			var titleH2 = document.createElement("h2");
			titleH2.style.margin = "5px";
			
			mainDiv.appendChild(titleH2);
			
			var titleLink = document.createElement("a");
			titleLink.style.fontSize = "14px";
			titleLink.style.fontWeight = "bold";
			titleLink.style.textDecoration = "none";
			titleLink.title = title;
			titleLink.href = config.indicatordetailspage + "?uuid=" + indicatoruuid;
			
			var tmp_a_lnk = document.createTextNode(title);
			titleLink.appendChild(tmp_a_lnk);
			
			titleH2.appendChild(titleLink);
			
			
			var detailsP = document.createElement("p");
			detailsP.class = "details";
			
			mainDiv.appendChild(detailsP);
			
			var thumbnailImage = document.createElement("img");
			thumbnailImage.src = "images/Calendar-icon.png";
			thumbnailImage.width = "15";
			detailsP.appendChild(thumbnailImage);
			
			var dateOfCreation = document.createTextNode(" " + getHumanReadableDateFromYYMMDD(date) + " | ");
			detailsP.appendChild(dateOfCreation);
			
						
			var userIcon = document.createElement("img");
			userIcon.src = "images/user.png";
			userIcon.width = "15";
			detailsP.appendChild(userIcon);
			
			// don't forget to link it!
			
			detailsP.appendChild(document.createTextNode(" "));
			var publisherName = document.createTextNode(publisher);
			var publisherLink = document.createElement("a");
			publisherLink.title = "LGA Melbourne";
			publisherLink.href = config.browseByPublisherPage + "?publisherid=" + publisherid + "&publishername=" + publisher;
			
			publisherLink.appendChild(publisherName);
			detailsP.appendChild(publisherLink);
			detailsP.appendChild(document.createTextNode(" | "));
			
			var geoIcon = document.createElement("img");
			geoIcon.src = "images/browse-ind-icons/geo.png";
			geoIcon.width = "15";
			detailsP.appendChild(geoIcon);
			
			var geoLink = document.createElement("a");
			geoLink.title = "";
			
			if (geoBoundary != null)
			{
				geoLink.href = config.browseByGeoDetails + "?ontid=" + geoBoundary.ontid + "&conuri=" + 
						encodeURIComponent(geoBoundary.concepturi) + "&instanceuri=" + encodeURIComponent(geoBoundary.instanceuri) + "&boundaryName=" + geoBoundary.label;
				if (geoBoundary.label != null)
				{
					var tmp_geo_lnk = document.createTextNode(geoBoundary.label);
					geoLink.appendChild(tmp_geo_lnk);
					detailsP.appendChild(document.createTextNode("\u00A0"));
					detailsP.appendChild(geoLink);
				}	
			}
			else
				alert("geoboundary is null!");
			
			var thumbnailDiv = document.createElement("div");
			thumbnailDiv.class  =  "thumb";
			thumbnailDiv.id  =  "thumb";
			mainDiv.appendChild(thumbnailDiv);
			
			var indicatorThumbnailLink = document.createElement("a");
			indicatorThumbnailLink.title = "???";
			indicatorThumbnailLink.href = config.indicatordetailspage + "?uuid=" + indicatoruuid;
			indicatorThumbnailLink.style.cssFloat = "left";
			indicatorThumbnailLink.style.padding = "10px";
			
			var thumbnailImage2 = document.createElement("img");
						
			if (thumbnail != "" && thumbnail != null)
			{
				thumbnailImage2.src = thumbnail;
			}
			else
			{
				var imageArray = ["images/feature-images/urban-analytics-feature1.PNG", "images/feature-images/urban-analytics-feature2-perth.PNG", "images/feature-images/Chrysanthemum.jpg", "images/feature-images/Desert.jpg", "images/feature-images/Hydrangeas.jpg", "images/feature-images/Jellyfish.jpg", "images/feature-images/Koala.jpg", "images/feature-images/Lighthouse.jpg", "images/feature-images/Tulips.jpg"];
				
				var randomNumber = randomIntFromInterval(0, imageArray.length-1);
				thumbnailImage2.src = imageArray[randomNumber];
			}
			thumbnailImage2.width = "180";
			
			indicatorThumbnailLink.appendChild(thumbnailImage2);
			thumbnailDiv.appendChild(indicatorThumbnailLink);
			
			
			var textP = document.createElement("p");
			detailsP.style.fontSize = "12px";
			textP.appendChild(document.createElement("br"));
			textP.appendChild(document.createTextNode(abstract));
			
			var readmoreLink = document.createElement("a");
			readmoreLink.title = "read more";
			readmoreLink.href = config.indicatordetailspage + "?uuid=" + indicatoruuid;
			var readmoreLink_text = document.createTextNode("read more");
			readmoreLink.appendChild(readmoreLink_text);
			
			textP.appendChild(document.createTextNode(" [ "));
			textP.appendChild(readmoreLink);
			textP.appendChild(document.createTextNode(" ] "));
			
			
			
			mainDiv.appendChild(textP);
			
			var emptyPElement4 = document.createElement("p");
			var emptyText4 = document.createTextNode("\u00A0");
			emptyPElement4.appendChild(emptyText4);
			mainDiv.appendChild(emptyPElement4);
			
			var tagsPElement = document.createElement("p");
			var tagSpanElement = document.createElement("span");
			tagSpanElement.class = "details";
			tagsPElement.appendChild(tagSpanElement);
			
			if (themes != null)
			{
				if (themes.length > 0)
				{
					var themeIcn = document.createElement("img");
					themeIcn.src = "images/browse-ind-icons/ByTheme.png";
					themeIcn.width = "15";
					tagSpanElement.appendChild(themeIcn);
					var emptyText5 = document.createTextNode("\u00A0");
					tagSpanElement.appendChild(emptyText5);
					
				
					for (var j = 0; j < themes.length; j++)
					{
						var themeLabel = themes[j].label;
						var themeUrl = config.browseByThemeDetails + "?n=" + themes[j].label + "&themeOntId=" + themes[j].ontid + "&themeclassuri=" + encodeURIComponent(themes[j].instanceuri);
						
						var themeLink = document.createElement("a");
						themeLink.title = themeLabel;
						themeLink.href = themeUrl;
						var tmp_theme_lnk1 = document.createTextNode(themeLabel);
						themeLink.appendChild(tmp_theme_lnk1);
						tagSpanElement.appendChild(themeLink);
						
						if (j < themes.length - 1)
						{
							tagSpanElement.appendChild(document.createTextNode(", "));
						}
					}
				}
			}
			
			
			
			mainDiv.appendChild(tagsPElement);
			
			
			if (keywords != "")
			{
				var br3 = document.createElement("br");
				tagSpanElement.appendChild(br3);
				var emptyText7 = document.createTextNode("Keywords: ");
				tagSpanElement.appendChild(emptyText7);
				
				var keywordsArr = keywords.split(',');
				for (var k = 0; k < keywordsArr.length; k++)
				{
					var keyworditem = keywordsArr[k].replace(/\s/g, '');
					
					var KeywordLink = document.createElement("a");
					KeywordLink.title = keyworditem;
					KeywordLink.href = config.browseByKeywordPage + "?keyword=" + keyworditem;
					var tmp_kword_lnk1 = document.createTextNode(keyworditem);
					KeywordLink.appendChild(tmp_kword_lnk1);
					tagSpanElement.appendChild(KeywordLink);
					
					if (k < keywordsArr.length - 1)
					{
						var emptyText10 = document.createTextNode(", ");
						tagSpanElement.appendChild(emptyText10);
					}
				}
			}
			
			mainDiv.appendChild(tagsPElement);
			
			var breakDiv = document.createElement("div");
			breakDiv.class = "break";
			mainDiv.appendChild(breakDiv);
			
			
			
			
			
		return mainDiv;
}