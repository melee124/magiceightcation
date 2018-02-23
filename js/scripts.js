$(document).ready(function() {
var location = $("#location").val();
var temperature = $("input:radio[name=temperature]:checked").val();
var distance = $("select#distance").val();
var swim = $("select#swim").val();
var shoesInput = $("input#shoes").val();

  if (age > 21) {
    $('#drinks').show();
  } else if (age === 21) {
    alert("Now don't go crazy!");
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});
