$(document).ready(function()  {
  $("form").submit(function(event)  {
    event.preventDefault();
    var userNumberInput = parseInt($("#userNumberInput").val());
    beepBoop(userNumberInput);
  })

function beepBoop(userNumberInput){
  var userInputNumbers = [];
  for(var i = 0; i <= userNumberInput; i++){
    userInputNumbers.push(i);
  }

  $("#result").append(userInputNumbers.join(','));
}


});
