// business logic


// front-end logic
$(function() {
  $("form").submit(function(event){
    var inputString = $("#input").val();
    // console.log(inputString);
    var outputString = toPigLatin(inputString);
    $("#output").text(outputString);

    event.preventDefault();
  });
});
