  $(document).ready(function() {

  var thermostat = new Thermostat();

  var updateTemp = function() {
    $('#temperature').text(thermostat.currentTemperature());
    updateColorDisplay()
  };

  var updatePSMDisplay = function() {
    $('#power-saving-status').text(thermostat.powerSaveDisplay());
  };

  var updateColorDisplay = function() {
    if (thermostat.currentColor() === "yellow"){
      $('#display-color').css("background-color", "yellow")
    };
    if (thermostat.currentColor() === "green"){
      $('#display-color').css("background-color", "green")
    };
    if (thermostat.currentColor() === "red"){
      $('#display-color').css("background-color", "red")
    };
  };

  updateTemp()
  updatePSMDisplay()

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemp()
  })

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemp()
  })

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemp();
    updateTemp()
  })


  $('#powersaving-on').on('click', function() {
    thermostat.powerSaveOn();
    updatePSMDisplay();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.powerSaveOff();
    updatePSMDisplay();
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8baf71f983a57fb4649ec5f123fc4b34&units=metric', function(data) {
      $('#weather_temperature').text(data.main.temp);
    });
  })


})
