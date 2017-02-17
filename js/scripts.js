var questionCounter = 1;

var rightTrack = function () {
  $("#yourTracks").show();
}

$(document).ready(function() {
  $("form#answerChoices").submit(function(event) {
  var someInput = parseInt($("input:radio[name=tendency]:checked").val());
    if (isNaN(someInput)) {
      alert ("please make a selection");
    } else {
      $("#question"+questionCounter).hide();
      questionCounter++;
      if (questionCounter === 3) {
        rightTrack ();
      }


      $("#question"+questionCounter).show();
    }

  event.preventDefault();
  });

});
