

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8baf71f983a57fb4649ec5f123fc4b34&units=metric', function(data) {
  $('#weather_temperature').text(data.main.temp);
})
