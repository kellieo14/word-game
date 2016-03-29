var input;
var output;
var inputArray = [];
var guess;

$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    input = $("#item1").val();
    inputArray = input.split("");

    for (var index = 0; index < inputArray.length; index +=1) {
      if (inputArray[index] === "a" || inputArray[index] === "e" || inputArray[index] === "i" || inputArray[index] === "o" || inputArray[index] === "u"){
        inputArray[index] = "-";
      }
    }
    $("#input").hide();
    $(".output").append(inputArray);
    $(".output").show();
    console.log(inputArray);
  });

  $(".output").submit(function(event) {
    event.preventDefault();
    guess = $("#guess").val();
    if (guess === input) {
      alert("Good job! You're right!");
    }
    else {
      alert("Try again!");
    }
  });

});
