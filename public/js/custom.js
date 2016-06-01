function getData(){
	var months = [];
	
	$.getJSON("http://" + window.location.host + "/js/chart.json", function(data){
		$.each(data.numbers, function(i) {
			months.push(data.numbers[i]['month']);
		});
  });
  
  return months;
}


$(function(){
	var arr = getData();
	console.log(arr);
	
	var iniData = {
		labels: arr,
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