$(function(){
	var months = [], money = [], views = [], likes = [], shares = [];

	$.ajax({
		async: false,
		url: "http://" + window.location.host + "/js/chart.json",
		success: function(data){
			$.each(data.numbers, function(i) {
				months.push(data.numbers[i].month);
				money.push(data.numbers[i].money);
				views.push(data.numbers[i].views);
				likes.push(data.numbers[i].like);
				shares.push(data.numbers[i].share);
			});
		}
	});
	
	var iniData = {
		labels: months,
		datasets:[{
			fillColor:"#F4F4F4",
			strokeColor:"#F4F4F4",
			pointColor:"silver",
			pointStrokeColor:"white",
			pointHighlightFill: "whitesmoke",
			pointHighlightStroke: "white",
			data: money
		}]
	};
	
	var options = {
		scaleBeginAtZero: true,
		tooltipTemplate: "$<%= value %>\nEarned for <%= label %>",
		tooltipFillColor: '#838CC7',
		tooltipFontColor: 'whitesmoke'
	};
	
	rs = new RangeSliderChart({
		chartData: iniData,
		chartOpts: options,
		chartType: 'Line',
		chartCTX: document.getElementById('ini').getContext('2d'),
		class: 'my-chart-ranger',
		initial: [0, 12]
	})

	$('.sub').on('keyup', function() {
    if($(this).val().length === 0	) {
      $('.glyphicon-send').show();
    } else {
      $('.glyphicon-send').hide();
    }
	});

	$('.range-slider').css('margin-top', '18px');
	$('.range-slider').css('margin-right', 'auto');
	$('.range-slider').css('margin-left', 'auto');
});