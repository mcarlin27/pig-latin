// business logic
var toPigLatin = function(inputString) {
  var words = inputString.toLowerCase().split(" ");
  var outputArray = [];
  words.forEach(function(word) {
    if (!isNaN(parseFloat(word))) {
      outputArray.push(word);
    };
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
