


// create function to reverse the string
function reverseString(userInput) {
  var newString = "";
  for (i = userInput.length - 1 ; i >= 0 ; i--) {
    newString += userInput[i];
  }
  return newString;
}


$(document).ready(function(){

  // create function to reverse the string
  function reverseString(userInput) {
    var newString = "";
    for (i = userInput.length - 1 ; i >= 0 ; i--) {
      newString += userInput[i];
    }
    return newString;
  }

    // on click will get input string, create a new var and
    //run the reverseString function on userInput
  $("#submit").click(function() {

    var userInput = document.getElementById("input").value;
    var checker = reverseString(userInput);
    if (userInput === checker) {
      alert("TRUE");
    } else {
      alert("FALSE");

    }
  });
});
