$(document).ready(function() {
  $("form#some-form").submit(function(event) {
  var someInput = $("input#some-input").val();
  event.preventDefault();
});

};
