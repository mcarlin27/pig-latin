// business logic
var toPigLatin = function(inputString) {
  var words = inputString.toLowerCase().split(" ");
  var outputArray = [];
  var vowels = ["a", "e", "i", "o", "u", "y"]
  words.forEach(function(word) {
    if (!isNaN(parseFloat(word))) {
      outputArray.push(word);
    } else if (vowels.includes(word[0]) && word.length === 1) {
      outputArray.push(word + "yay");
    } else if (vowels.includes(word[0])) {
      outputArray.push(word + "ay");
    }
  });
  console.log(outputArray);










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
