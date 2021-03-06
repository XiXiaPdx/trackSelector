//global variables.
var questionCounter = 1;
var ruby =0;
var php =0;
var android =0;
var design =0;
var dotnet =0;
var delayMillis = 1000; //1 second

//puts question element's classes in an array and loops through them.  finds out which tracks each particular question affects and updates those scores. Scores are WEIGHTED for each track. So,the value of Ruby track can be increased by, say "1", but the value of PHP would be increased by say "0.5".
var adjustTrackScore = function (userAnswer) {
  var userAnswer = userAnswer
  var classes = $("#question"+questionCounter).attr('class').split(' ');
    for (i = 1, l =classes.length; i < l; i++) {
       updateWhichTracks (classes[i], i, userAnswer);
    }
}

//accepts specific array element (which will be a string designating the "track" to update, the array index which scales the score, and the userAnswer value. Updates the appropriate track with the value of UserAnswer/array index)
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
  } else {
    dotnet = (userAnswer/i) + dotnet;
  }
}

// rank order final global variables. Use those variables to display final tracks.
var showFinalTracks = function () {
  var allTrackScores = [[ruby, 'ruby'], [php, 'php'], [android,'android'], [design,'design'], [dotnet,'dotnet']];
  allTrackScores.sort(function(a, b){return b[0]-a[0]});
  $("#formAnswerSelector").hide();
  $("#questionTrackOutput").hide();
  $(".yourTracks").show();
  for (i = 0; i < 3; i++) {
  var track = ((allTrackScores [i])[1]);
  $("#"+track+"Track").slideDown(1000);
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
        showFinalTracks();
      }
      $("#question"+questionCounter).fadeIn();
      document.getElementById("answerChoices").reset();
    }
  event.preventDefault();
  });
});
