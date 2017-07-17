function chart (charts,i){
	// beginning of chart						
	
	var chartType = charts[i].type;
	var chartdata =charts[i].data

	if	(charts[i].data.length >0)
			{   
				var chartfields = [];
				for (var key in charts[i].data[0]) {
					chartfields.push(key);
				}
			}
			var chartDataStore = Ext.create('Ext.data.JsonStore', {
				fields: chartfields,
				data: chartdata,
				padding: '10 0 0 0',
			
			});	
			
			var chartTitle = document.createTextNode(getParameterByName("title"));
					
			var object = "chart" + i.toString();
			
			if (chartType=='columnchart')
			{
					
					
					var chart1 = Ext.create(
						'Ext.chart.Chart',
						{
						renderTo: document.getElementById(object),
						height: 440, 
						width: 450,
						padding: '10 0 0 0',
						animate: true,
						shadow: false,
						style: 'background: #fff;',
						legend: {
							position: 'top',
							boxStrokeWidth: 0,
							labelFont: '12px Helvetica'
						},
						store: chartDataStore,
						insetPadding: 40,
						items: [{
							type  : 'text',
							text  : charts[i].title,
							font  : '22px Helvetica',
							width : 100,
							height: 30,
							x : 40, //the sprite x position
							y : 12  //the sprite y position
						}],
						axes: [{
							type: 'Numeric',
							position: 'left',
							grid: true,
							//fields: ['data1'], //can be automatically determined
							label: {
								//renderer: function(v) { return v + '%'; }
								renderer: function(v) { return (v.toFixed(1)); }
							},
							minimum: 0
						}, {
							type: 'Category',
							position: 'bottom',
							grid: true,
							fields: charts[i].xfield,
							label: {
								rotate: {
									degrees: -45
								}
							}
						}],
						series: 
						[{
							type: 'column',
							axis: 'left',
							title: charts[i].yfieldtitle,
							xField: charts[i].xfield,
							yField: charts[i].yfield,
							stacked: charts[i].stacked,
							
							style: {
								opacity: 0.80
							},
							highlight: {
								fill: '#000',
								'stroke-width': 1,
								stroke: '#fff'
							},
							tips: 
							{
								trackMouse: true,
								style: 'background: #FFF',
								renderer: function(storeItem, item) {
									this.setTitle(storeItem.get(item.yField) + '%');
								}
							}
						}]
					});
					
					
			}
			else if (chartType=='barchart')
			{
				var chart1 = Ext.create(
						'Ext.chart.Chart',
						{
							renderTo: document.getElementById("chart"),
						   
							height: 300, 
							width: 400, animate: true,
							padding: '10 0 0 0',
							shadow: false,
							style: 'background: #fff;',
							legend: {
								position: 'right',
								boxStrokeWidth: 0,
								labelFont: '12px Helvetica'
							},
							store: chartDataStore,
							insetPadding: 40,
							items: [{
								type  : 'text',
								text  : charts[i].title,
								font  : '22px Helvetica',
								width : 100,
								height: 30,
								x : 40, //the sprite x position
								y : 12  //the sprite y position
							}],
							axes: [{
								type: 'Numeric',
								position: 'bottom',
								grid: true,
								//fields: ['data1'], //can be automatically determined
								label: {
									renderer: function(v) { return v + '%'; }
								},
								minimum: 0
							}, {
								type: 'Category',
								position: 'left',
								grid: true,
								fields: charts[i].xfield,
								label: {
									rotate: {
										degrees: -45
									}
								}
							}],
							series: [{
								type: 'bar',
								axis: 'left',
								title: charts[i].yfieldtitle,
								xField: charts[i].xfield,
								yField: charts[i].yfield,
								stacked: charts[i].stacked,
								
								style: {
									opacity: 0.80
								},
								highlight: {
								fill: '#000',
								'stroke-width': 1,
								stroke: '#fff'
								},
								tips: {
									trackMouse: true,
									style: 'background: #FFF',
									renderer: function(storeItem, item) {
										this.setTitle(storeItem.get(item.yField) + '%');
									}
								}
							}]
						});
						
					
			}	
			else if  (chartType=='linechart')												
			{
					
					if	(charts[i].data.length >0)
					{   
						var chartfields = [];
						for (var key in charts[i].data[0]) {
							chartfields.push(key);
						}
					}
					var chartDataStore = Ext.create('Ext.data.JsonStore', {
						fields: chartfields,
						data: chartdata
					
					});	
					
					var chart = Ext.create(
						'Ext.chart.Chart',
						{
							renderTo: document.getElementById("chart"),
							xtype: 'chart',
							id:'linechart'+charts[i].seqnum,
							height: 300,
							width: 400,
							padding: '10 0 0 0',
							animate: true,
							shadow: false,
							style: 'background: #fff;',
							legend: {
								position: 'right',
								boxStrokeWidth: 0,
								labelFont: '12px Helvetica'
							},
							store: chartDataStore,
							insetPadding: 40,
							items: [{
								type  : 'text',
								text  : charts[i].title,
								font  : '22px Helvetica',
								width : 100,
								height: 30,
								x : 40, //the sprite x position
								y : 12  //the sprite y position
							}],
							tips: {
								trackMouse: true,
								style: 'background: #FFF',
								height: 20,
								renderer: function(storeItem, item) {
									var title = item.series.title;
									this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField) + '%');
								}
							}	,
							axes: [{
								type: 'Numeric',
								position: 'left',
								grid: true,
								//fields: ['data1'], //can be automatically determined
								label: {
									renderer: function(v) { return v + '%'; }
								},
								minimum: 0
							}, {
								type: 'Category',
								position: 'bottom',
								grid: true,
								fields: charts[i].xfield,
								label: {
									rotate: {
										degrees: -45
									}
								}
							}]
						});
						
						
						var numfieldy= charts[i].yfield.length;
						for (var j = 0; j < numfieldy; j++) 
						{
							var serie= {
								type: 'line',
								axis: 'left',
								title: charts[i].yfieldtitle[j],
								xField: charts[i].xfield,
								yField: charts[i].yfield[j],
								style: {
									'stroke-width': 4
								},
								markerConfig: {
									radius: 4
								},
								highlight: {
									fill: '#000',
									radius: 5,
									'stroke-width': 2,
									stroke: '#fff'
								},
								tips: {
									trackMouse: true,
									style: 'background: #FFF',
									height: 20,
									renderer: function(storeItem, item) {
										var title = item.series.title;
										this.setTitle(storeItem.get(item.series.yField) + '%');
									}
								}
							}
						   
						chart.series.add(serie);	
						}
						//console.log(chart.series);
						chart.redraw();
				}
			else if  (chartType=='areachart')
			{
				if	(charts[i].data.length >0)
					{   
						var chartfields = [];
						for (var key in charts[i].data[0]) {
							chartfields.push(key);
						}
					}
					var chartDataStore = Ext.create('Ext.data.JsonStore', {
						fields: chartfields,
						data: chartdata
					
					});	
					//this.fun_columnchart();
				//alert(JSON.stringify(charts[i]));
					var chart1 = Ext.create(
					'Ext.chart.Chart',
						{
							renderTo: document.getElementById("chart"),
							xtype: 'chart',
							height: 300,
							width: 400,
							padding: '10 0 0 0',
							animate: true,
							shadow: false,
							style: 'background: #fff;',
							legend: {
								position: 'right',
								boxStrokeWidth: 0,
								labelFont: '12px Helvetica'
							},
							store: chartDataStore,
							insetPadding: 40,
							items: [{
								type  : 'text',
								text  : charts[i].title,
								font  : '22px Helvetica',
								width : 100,
								height: 30,
								x : 40, //the sprite x position
								y : 12  //the sprite y position
							}],
							axes: [{
								type: 'Numeric',
								position: 'left',
								grid: true,
								//fields: ['data1'], //can be automatically determined
								label: {
									renderer: function(v) { return v + '%'; }
								},
								minimum: 0,
								maximum:100
							}, {
								type: 'Category',
								position: 'bottom',
								grid: true,
								fields: charts[i].xfield,
								label: {
									rotate: {
										degrees: -45
									}
								}
							}],
							bbar: {
							  xtype: 'pagingtoolbar',
							  pageSize: 50,
							  store: chartDataStore,
							  displayInfo: true
							},
							series: [{
								type: 'area',
								axis: 'left',
								title: charts[i].yfieldtitle,
								xField: charts[i].xfield,
								yField: charts[i].yfield,
								stacked: charts[i].stacked,
								
								style: {
									opacity: 0.80
								},
								highlight: {
									fill: '#000',
									'stroke-width': 1,
									stroke: '#fff'
								}
							}]
						});
					
			}
			else if  (chartType=='radialchart')
			{
				
				if	(charts[i].data.length >0)
					{   
						var chartfields = [];
						for (var key in charts[i].data[0]) {
							chartfields.push(key);
						}
					}
					var chartDataStore = Ext.create('Ext.data.JsonStore', {
						fields: chartfields,
						data: chartdata
					
					});	
											
				var chart1 = Ext.create(
						'Ext.chart.Chart',
						{
							renderTo: document.getElementById("chart"),
							xtype: 'chart',
							height: 300,
							width: 400,
							padding: '10 0 0 0',
							animate: true,
							shadow: false,
							style: 'background: #fff;',
							legend: {
								position: 'right',
								boxStrokeWidth: 0,
								labelFont: '12px Helvetica'
							},
							store: chartDataStore,
							insetPadding: 40,
							items: [{
								type  : 'text',
								text  : charts[i].title,
								font  : '22px Helvetica',
								width : 100,
								height: 30,
								x : 40, //the sprite x position
								y : 12  //the sprite y position
							}],
							axes: [{
								type: 'radial',
								position: 'radial',
								majorTickSteps: 9,
								legend: {
								position: 'right'
										}
							}]
						});
						

						var numfieldy=charts[i].yfield.length;
						for (var j = 0; j < numfieldy; j++) 
						{
							var serieRadial= {
								type: 'radar',								
								title: charts[i].yfieldtitle[j],
								xField: charts[i].xfield,
								yField: charts[i].yfield[j],
								showInLegend: true,
								style: {
									'stroke-width': 2,
									fill: 'none'
								},
								showMarkers: true,
								highlight: {
									radius: 5,
									fill: '#000',
									'stroke-width': 1,
									stroke: '#888'
								},
								tips: {
									trackMouse: true,
									style: 'background: #FFF',
									height: 20,
									renderer: function(storeItem, item) {
										this.setTitle( storeItem.get(item.yfield) + '%');										
									}
								}
							}
						   
							chart1.series.add(serieRadial);	
						}
						
						/*document.getElementById("chart").appendChild(chartTitle);	*/
															
						var mAxes = chart1.axes.items;
						for(var axis in mAxes){
							if(mAxes[axis].type === "radial"){
								mAxes[axis].fields = chart1.series;
								mAxes[axis].maximum = charts[i].data.maximum;
								mAxes[axis].minimum = charts[i].data.maximum;
								mAxes[axis].sprites = null;
								mAxes[axis].labelArray = null;
							}
						}
						chart1.surface.removeAll(true);
						
						chart1.axes.items = mAxes;
						
						chart1.redraw(true);
						console.log(chart1);
						
				}
			else if  (chartType=='piechart' || chartType=='donutchart')
			{
			var donut=0;
			if (charts[i].donut==true)
			{
				donut=50;
			}
			
			//this.fun_piechart(charts[i]);
					if	(charts[i].data.length >0)
					{   
						var chartfields = [];
						for (var key in charts[i].data[0]) {
							chartfields.push(key);
						}
					}
					var chartDataStore = Ext.create('Ext.data.JsonStore', {
						fields: chartfields,
						data: chartdata
					
					});	
					
					var chart1 = Ext.create(
						'Ext.chart.Chart',
						{
							renderTo: document.getElementById("chart"),						   
							xtype: 'chart',
							height: 300,
							width: 400,
							padding: '10 0 0 0',
							animate: true,
							shadow: false,
							store: chartDataStore,
							insetPadding: 40,
							style: 'background: #fff;',
							legend: {
								field: charts[i].xfield,
								position: 'right',
								boxStrokeWidth: 0,
								labelFont: '12px Helvetica'
							},
							
							items: [{
								type  : 'text',
								text  : charts[i].title,
								font  : '22px Helvetica',
								width : 100,
								height: 30,
								x : 40, //the sprite x position
								y : 12  //the sprite y position
							}],
						  
							series: [{
								type: 'pie',
								angleField: charts[i].yfield,
								donut: donut,
								//title: charts[i].title,
								label: {
								field: charts[i].xfield,
								display: 'rotate', 
								contrast: true,
								renderer: function (val, label, storeItem, item, i, display, animate, index) { return storeItem.get('data1') + '%'; }
								},
								showInLegend: true,
								highlight: {
								segment: {
									margin: 20
									}
									},
								tips: {
									trackMouse: true,
									style: 'background: #FFF',
									renderer: function(storeItem, item) {
										this.setTitle(storeItem.get(item.series.angleField) + '%');
									}
								}
							}]
						})
			}
			else if  (chartType=='scatterchart')
			{
			
				if	(charts[i].data.length >0)
					{   
						var chartfields = [];
						for (var key in charts[i].data[0]) {
							chartfields.push(key);
						}
					}
						var chartDataStore = Ext.create('Ext.data.JsonStore', {
							fields: chartfields,
							data: chartdata
						
						});	
					
					var chart1 = Ext.create(
						'Ext.chart.Chart',
						 {
							renderTo: document.getElementById("chart"),
							xtype: 'chart',
							height: 300,
							width: 400,
							padding: '10 0 0 0',
							animate: true,
							shadow: false,
							store: chartDataStore,
							insetPadding: 40,
							style: 'background: #fff;',
							axes: [{
								type: 'numeric',
								position: 'bottom',
								fields: charts[i].xfield,
								grid: true
							}, {
								type: 'numeric',
								position: 'left',
								fields: charts[i].yfield,
								grid: true
							}],
							items: [{
								type  : 'text',
								text  : charts[i].title,
								font  : '22px Helvetica',
								width : 100,
								height: 30,
								x : 40, //the sprite x position
								y : 12  //the sprite y position
							}],
						  
							series: [{
								type: 'scatter',
								xField: charts[i].xfield,
								yField: charts[i].yfield,
								showInLegend: true,
								markerConfig: {
									radius: 4
								},
								highlight: {
								fill: '#ccc',
								radius: 5,
								stroke: '#000',
								'stroke-width': 1
							},
							label: {
								display: 'over',
								font: '18px Arial',
								renderer: function(value, label, storeItem, item, i, display, animate, index) {
									
									return storeItem.get(item.series.xField) + ',' + storeItem.get(item.series.yField);
								}
							}
							}]
						})
			
			}
}