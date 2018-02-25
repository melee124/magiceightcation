$(document).ready(function() {
  $("form#userheight").submit(function(event) {
  var location = $("location").val();
  var temperature = $("input:radio[name=temperature]:checked").val());
  var distance = $("distance").val());
  var swim = $("swim").val();
  var shoes = $("input#shoes").val();

  if (swim === 'no') {
    $('#no-swim').show();
  } else if (temperature === 'hot' && shoes === 'sandals') {
    $('#tahiti').show();
  } else if (shoes === 'snowboots' && location === 'desert'){
    $('antarctica').show();
    else if (shoes === 'heels' && location === 'city' && )
    $('#short-height').show();
  }
    event.preventDefault();
  });
});
