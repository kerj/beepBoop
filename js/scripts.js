$(document).ready(function()  {
  $("form").submit(function(event)  {
    event.preventDefault();
    var userNumberInput = parseInt($("#userNumberInput").val());
    beepBoop(userNumberInput);
  })

function beepBoop(userNumberInput){
  $("h4").empty()
  var userInputNumbers = [];
  for(var i = 0; i <= userNumberInput; i++){
    userInputNumbers.push(i);
  };
  for(var i = 0; i <= userInputNumbers.length - 1; i++){
    if(userInputNumbers[i] >= 10){
      var userInputString = userInputNumbers[i].toString();
        if(userInputString.includes("3")){
          userInputNumbers.splice(i,1,"I'm sorry Dave, I'm afraid I can't do that")
        }else if (userInputString.includes("2")) {
          userInputNumbers.splice(i,1,"Boop")
        }else if (userInputString.includes("1")) {
          userInputNumbers.splice(i,1,"Beep!")
        }
    }
    if(userInputNumbers.includes(3)){
      var sorryDave = userInputNumbers.indexOf(3)
      userInputNumbers.splice(sorryDave,1,"I'm sorry Dave, I'm afraid I can't do that")
    }else if (userInputNumbers.includes(2)) {
      var boop = userInputNumbers.indexOf(2)
      userInputNumbers.splice(boop,1,"Boop")
    }else if (userInputNumbers.includes(1)) {
      var beep = userInputNumbers.indexOf(1)
      userInputNumbers.splice(beep,1,"Beep!")
    }
  }
  $("#result").append(userInputNumbers.join(','));
}
});
