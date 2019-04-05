$(document).ready(function()  {
  $("form").submit(function(event)  {
    event.preventDefault();
    var userNumberInput = parseInt($("#userNumberInput").val());
    console.log();
    beepBoop(userNumberInput);
  })

function beepBoop(userNumberInput){
  var userInputNumbers = [];
  var innerArrayInputNumbers = [];
  for(var i = 0; i <= userNumberInput; i++){
    userInputNumbers.push(i);
  };

  for(var i = 0; i <= userInputNumbers.length -1; i++){
    innerArrayInputNumbers.push(userInputNumbers);
  };

  for(var i = 0; i <= userInputNumbers.length - 1; i++){
    if(innerArrayInputNumbers[i].includes(3)){
      var sorryDave = innerArrayInputNumbers[i].indexOf(3)
      userInputNumbers.splice(sorryDave,1,"I'm sorry Dave, I'm afraid I can't do that.")
    }else if (innerArrayInputNumbers[i].includes(2)) {
      var boop = innerArrayInputNumbers[i].indexOf(2)
      userInputNumbers.splice(boop,1,"Boop")
    }else if (innerArrayInputNumbers[i].includes(1)) {
      var beep = innerArrayInputNumbers[i].indexOf(1)
      userInputNumbers.splice(beep,1,"Beep!")
    }
  }

  $("#result").append(userInputNumbers.join(','));
}


});
