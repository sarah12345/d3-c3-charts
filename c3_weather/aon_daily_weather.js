var chart = c3.generate({
  bindto: '#weather-chart',
  data: {
    url: 'aon_daily_weather.json',
    mimeType: 'json',
    keys: {
      x: 'time',
      value: ['temperatureMax', 'temperatureMin'],
    }
  },
  axis: {
    x: {
       type: 'timeseries',
       tick: {
         format: '%A'
         //format: function (v) { return formatTimeAsDate(v); },
       }
    }
  },
  padding: {
    top: 100
  },
  size: {
    height: 400
  },
  oninit: function () {
    d3.select("svg").append("text")
      .attr("x", 100 )
      .attr("y", 50)
      .text("Aon Center Weather Forecast")
      .attr("class", "chart-title");
    }
});


var formatTimeAsDate = function(time) {
  var date = new Date(0);
  date.setUTCSeconds(time);
  return date.toLocaleDateString();
}
