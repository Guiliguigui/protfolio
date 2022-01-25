$(document).ready(function(){
  $("#skillSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#skillList li *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});