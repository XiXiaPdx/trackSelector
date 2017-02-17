var questionCounter = 1;
var track1 =0;
var track2 =0;

var displayTracks = function () {
  $("#yourTracks").show();
  $("#formAnswerSelector").hide();
}

var adjustTrackScore = function (userAnswer) {
  if (($("#question"+questionCounter).hasClass("track1"))) {
    track1 = userAnswer + track1;
    console.log(track1);
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
      if (questionCounter === 3) {
        displayTracks ();
      }

      $("#question"+questionCounter).show();
      document.getElementById("answerChoices").reset();
    }

  event.preventDefault();
  });

});
