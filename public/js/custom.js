$(function(){
	$('.btn-default').click(function(e){
		console.log('clicked');
		$.getJSON("chart.json", function(data){
		  var items = [];
		  $.each( data, function( key, val ) {
		    items.push(key + ": " + val);
		  });
		 
		  console.log(items);
		});
	})
	
	
	// line chart data
	var iniData = {
		labels:[
			"2000","2001","2002","2003","2004","2005","2006",
			"2007","2008","2009","2011","2012","2013","2014",
			"2015","2016","2017","2018","2019","2020"],
		datasets:[{
			fillColor:"rgba(172,194,132,0)",
			strokeColor:"#C45662",
			pointColor:"#C45662",
			pointStrokeColor:"#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "#C45662",
			
			data:[
				
			],
		}]
	};
	
	options = {
		scaleBeginAtZero: true,
		/*This is how to customize how the labels look :) */
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
	};
	
	ini = document.getElementById('ini').getContext('2d')

	rs = new RangeSliderChart({
		chartData: iniData,
		chartOpts: options,
		chartType: 'Line',
		chartCTX: ini,
		class: 'my-chart-ranger',
		initial: [3, 10]
	})
});