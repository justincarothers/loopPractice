var puzzleWord = "ANIMAL";

// var puzzleWordInArray = ['A','N','I','M','A','L'];
// var newArray = []
//
// for (i = 0 ; i < puzzleWordInArray.length ; i++ ) {
//
//   if puzzleWordInArray[i] !=== ('A' || 'E' || 'I' || 'O' || 'U') {
//
//     console.log("running puzzle if");
//       }
//       console.log("running");
//     }

var puzzleHide = puzzleWord.replace(/[aeiou]/ig,'-');

document.getElementById("wordId").innerHTML = puzzleHide;


var vowels = ["a","e","i","o","u"];

$(document).ready(function() {

  $("#submit").click(function() {

    if ($("#userInput").val() === puzzleWord) {

      alert("CORRECT!")

    }
  });

});
