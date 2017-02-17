var questionCounter = 1;

$(document).ready(function() {
  $("form#answerChoices").submit(function(event) {
  var someInput = parseInt($("input:radio[name=tendency]:checked").val());
    if (isNaN(someInput)) {
      alert ("please make a selection");
    } else {
      debugger;
      $("#question"+questionCounter).hide();
      questionCounter++;
      $("#question"+questionCounter).show();
    }

  event.preventDefault();
  });

});
