$(document).ready(function()  {
  $("form").submit(function(event)  {
    event.preventDefault();
    var userNumberInput = parseInt($("#userNumberInput").val());
    beepBoop(userNumberInput);
  })
});
function beepBoop(userNumberInput){
  $("h4").empty()
  if(userNumberInput < 0){
      $("#result").append("Please insert positive value");
  }
  var userInputNumbers = [];
  for(var i = 0; i <= userNumberInput; i++){
    userInputNumbers.push(i);
  };
  for(var i = 0; i <= userInputNumbers.length - 1; i++){
    if(userInputNumbers[i]){
      var userInputString = userInputNumbers[i].toString();
        if(userInputString.includes("3")){
          userInputNumbers.splice(i,1,"I'm sorry Dave, I'm afraid I can't do that")
        }else if (userInputString.includes("2")) {
          userInputNumbers.splice(i,1,"Boop")
        }else if (userInputString.includes("1")) {
          userInputNumbers.splice(i,1,"Beep!")
        }
    }
  }
  $("#result").append(userInputNumbers.join(', '));
}
