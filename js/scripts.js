var questionCounter = 1;
var ruby =0;
var php =0;
var android =0;
var design =0;
var dotnet =0;

var displayTracks = function () {
  $("#yourTracks").show();
  $("#formAnswerSelector").hide();
}

var adjustTrackScore = function (userAnswer) {

  var userAnswer = userAnswer
  var classes = $("#question"+questionCounter).attr('class').split(' ');
    for (i = 1, l =classes.length; i < l; i++) {
       updateWhichTracks (classes[i], userAnswer);
       console.log(questionCounter, ruby, php, android, design, dotnet);
    }
  // loop through array
}

  var updateWhichTracks = function (classFromArray, userAnswer) {

    if (classFromArray === "ruby") {
      ruby = userAnswer + ruby;
    } else if (classFromArray === "php"){
      php = userAnswer + php;
    }
      else if (classFromArray === "android"){
      android = userAnswer + android;
    } else if (classFromArray === "design"){
      design = userAnswer + design;
    } else if (classFromArray === "dotnet"){
      dotnet = userAnswer + dotnet;
    }
}

$(document).ready(function() {
  $("form#answerChoices").submit(function(event) {
  var userAnswer = parseInt($("input:radio[name=tendency]:checked").val());
    if (isNaN(userAnswer)) {
      alert ("please make a selection");
    } else {
      //  check wich class of track it has and run function to update global
      adjustTrackScore (userAnswer);
      $("#question"+questionCounter).hide();

      questionCounter++;
      if (questionCounter === 11) {
        displayTracks ();
      }

      $("#question"+questionCounter).show();
      document.getElementById("answerChoices").reset();
    }

  event.preventDefault();
  });

});
