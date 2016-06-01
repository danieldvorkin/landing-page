$(function(){
	var months = [], money = [];

	$.ajax({
		async: false,
		url: "http://" + window.location.host + "/js/chart.json",
		success: function(data){
			$.each(data.numbers, function(i) {
				months.push(data.numbers[i].month);
				money.push(data.numbers[i].money);
			});
		}
	});
	
	var iniData = {
		labels: months,
		datasets:[{
			fillColor:"rgba(172,194,132,0)",
			strokeColor:"#C45662",
			pointColor:"#C45662",
			pointStrokeColor:"#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "#C45662",
			data: money
		}],
	};
	
	var options = {
		scaleBeginAtZero: true,
		tooltipTemplate: "Total Earned: $<%= value %>",
	};
	
	rs = new RangeSliderChart({
		chartData: iniData,
		chartOpts: options,
		chartType: 'Line',
		chartCTX: document.getElementById('ini').getContext('2d'),
		class: 'my-chart-ranger',
		initial: [0, 12]
	})
});