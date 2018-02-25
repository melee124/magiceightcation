$(document).ready(function() {
  $("form#travel").submit(function(event) {
  var temperature = parseInt($("input#temperature").val());
  var distance = parseInt($("input#distance").val());
  var swim = parseInt($("#swim").val());
  var location = parseInt($("#location").val());
  var shoes = parseInt($("#shoes").val());
  if (temperature < 50 && distance < 100) {
    $('#cold-weather').show();
  } else if (swim > 3 && location === 2) {
    $('#swim-yes').show();
  } else {
    $('#no-swim').show();
  }
    event.preventDefault();
  });
});
