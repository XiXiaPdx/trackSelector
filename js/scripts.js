$(document).ready(function() {
  $("form#answerChoices").submit(function(event) {
  var someInput = $("input:radio[name=tendency]:checked").val();
  console.log(someInput);
  event.preventDefault();
  });

});
