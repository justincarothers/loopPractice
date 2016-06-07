var puzzleWord = "Believe you can and you're halfway there.";
var puzzleHide = puzzleWord.replace(/[aeiou]/ig,'-');

document.getElementById("wordId").innerHTML = puzzleHide;
