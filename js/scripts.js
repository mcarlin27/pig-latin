// business logic
var toPigLatin = function(inputString) {
  return inputString.toLowerCase().split(" ");










}

// front-end logic
$(function() {
  $("form").submit(function(event){
    var inputString = $("#input").val();
    console.log(inputString);
    var outputString = toPigLatin(inputString);
    console.log(outputString);
    $("#output").text(outputString);

    event.preventDefault();
  });
});
