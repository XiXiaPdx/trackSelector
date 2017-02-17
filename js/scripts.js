//global variables.

var questionCounter = 1;
var ruby =0;
var php =0;
var android =0;
var design =0;
var dotnet =0;

//puts question element's classes in an array and loops through them.  finds out which tracks each particular question affects and updates those scores. Scores are WEIGHTED for each track. So,the value of Ruby track can be increased by, say "1", but the value of PHP would be increased by say "0.5".

var adjustTrackScore = function (userAnswer) {
  var userAnswer = userAnswer
  var classes = $("#question"+questionCounter).attr('class').split(' ');
    for (i = 1, l =classes.length; i < l; i++) {
       updateWhichTracks (classes[i], i, userAnswer);
       console.log(questionCounter, ruby, php, android, design, dotnet);
    }
}

//takes array element (which will be a string designating the "track" to update, the array index which scales the score, and the userAnswer value  Updates the appropriate track with the scaled value)

  var updateWhichTracks = function (classFromArray, i, userAnswer) {
    if (classFromArray === "ruby") {
      ruby = (userAnswer/i) + ruby;
    } else if (classFromArray === "php"){
      php = (userAnswer/i) + php;
    }
      else if (classFromArray === "android"){
      android = (userAnswer/i) + android;
    } else if (classFromArray === "design"){
      design = (userAnswer/i) + design;
    } else if (classFromArray === "dotnet"){
      dotnet = (userAnswer/i) + dotnet;
    }
}

//front end logic. Form submission. Show and Hide questions and final track selections.

$(document).ready(function() {
  $("form#answerChoices").submit(function(event) {
  var userAnswer = parseInt($("input:radio[name=tendency]:checked").val());
    if (isNaN(userAnswer)) {
      alert ("please make a selection");
    } else {
      adjustTrackScore (userAnswer);
      $("#question"+questionCounter).hide();
      questionCounter++;
      if (questionCounter === 11) {
        $("#yourTracks").show();
        $("#formAnswerSelector").hide();
      }
      $("#question"+questionCounter).show();
      document.getElementById("answerChoices").reset();
    }
  event.preventDefault();
  });
});
