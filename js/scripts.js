// business logic
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var checkForVowel = function(letter) {
  for (var index = 0; index < vowels.length; index += 1) {
    if (vowels[index] === letter) {
      var isVowel = true;
    }
  }
  if (isVowel === true) {
    return true;
  } else {
    return false;
  }
} // function to check if letter is a vowel, return true/false accordingly

var toPigLatin = function(inputString) {
  var words = inputString.toLowerCase().split(" ");
  var outputArray = [];

  words.forEach(function(word) {
    var vowelsArray = [];
    for (var i = 0; i < word.length; i++) {
      if (word[i] === "y" && i === 0) {
        vowelsArray.push(false); //if "y" is the first letter of the word it is considered a consonant
      } else {
        vowelsArray.push(checkForVowel(word[i]));
      }
    } //create an array of booleans representing "vowel" and "consonant" where true = vowel and false = consonant

    if (!isNaN(parseFloat(word))) {
      outputArray.push(word);
    } else if (vowels.includes(word[0]) && word.length === 1) {
      outputArray.push(word + "yay");
    } else if (vowels.includes(word[0])) {
      outputArray.push(word + "ay");
    }

    for (var i = 0; vowelsArray[i] === false; i++) {
      if (word[i] === "q" && word[i + 1] === "u") {
        outputArray.push(word.substr(i + 2) + word.substr(0, (i + 2)) + "ay");
      } else if (vowelsArray[(i + 1)] === true) {
        outputArray.push(word.substr(i + 1) + word.substr(0, (i + 1)) + "ay");
      }
    } //  Work in progress to translate words beginning with consonants
    // console.log(vowelsArray);
  });
  // console.log(outputArray);
  var resultString = outputArray.join(" ");
  return resultString;
}

// front-end logic
$(function() {
  $("form").submit(function(event){
    var inputString = $("#input").val();
    // console.log(inputString);
    var outputString = toPigLatin(inputString);
    // console.log(outputString);
    $("#output").text(outputString);
    event.preventDefault();
  });
});
