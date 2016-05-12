$(document).ready(function() {

  var thermostat = new Thermostat();

  var updateTemp = function() {
    $('#temperature').text(thermostat.currentTemperature());
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

  updateColorDisplay()
  updateTemp()
  updatePSMDisplay()


  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemp()
    updateColorDisplay()

  })

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemp()
    updateColorDisplay()

  })

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemp();
    updateTemp()
    updateColorDisplay()

  })


  $('#powersaving-on').on('click', function() {
    thermostat.powerSaveOn();
    updatePSMDisplay();
  })

  $('#powersaving-off').on('click', function() {
    thermostat.powerSaveOff();
    updatePSMDisplay();
  })



})
