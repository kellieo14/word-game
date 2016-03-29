var input;
var output;
var inputArray = [];
var outputArray = [];
var guess;

$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    input = $("#item1").val();
    inputArray = input.split("");

    outputArray = inputArray.map(function(letter){
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
        {
          return "-";
        } else {
          return letter;
        }
    });
    console.log(outputArray);

    // for (var index = 0; index < inputArray.length; index +=1) {
    //   if (inputArray[index] === "a" || inputArray[index] === "e" || inputArray[index] === "i" || inputArray[index] === "o" || inputArray[index] === "u")
    //   {
    //     inputArray[index] = "-";
    //   }
    // }
    $("#input").hide();
    $(".output").append(outputArray);
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
