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
  for(var i = 0; i <= userInputNumbers.length - 1; i++){
    if(userInputNumbers[i] === 3){
      userInputNumbers.splice(i,1,"I'm sorry Dave, I'm afraid I can't do that.")
    }
  }

  $("#result").append(userInputNumbers.join(','));
}


});
