function retrieveMonths(data){
	var months = []
	$.each(data.numbers, function(i) {
		months.push(data.numbers[i]['month']);
	});
	return months;
}

function getData(){
	$.getJSON("http://" + window.location.host + "/js/chart.json", function(data){
		console.log(data);
		return data;
  });
}


$(function(){
	var data = retrieveMonths(getData());
	console.log(data);
	
	// line chart data
	var iniData = {
		labels: data,
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