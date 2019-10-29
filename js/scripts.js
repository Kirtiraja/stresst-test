$(document).ready(function(){
  $("form#stressSurvey").submit(function(event){
    event.preventDefault();

    var userArray = []
    var userScore = 0

    $("input:checkbox[name=behavior]:checked").each(function(){
      var stressResults = parseInt($(this).val());
      // userArray.push(stressResults);
      userScore += stressResults
    });
    console.log("user array: ",userArray);
    console.log("user score: ",userScore);

    if (userScore > 2){
      $('#stressResults').append('<p>Please seek help at <a href="http://www.google.com">Google.com</a></p>');
    }
    else if (userScore >= 0){
      $('#stressResults').append("<p>You're doing ok</p>");
    }
    else {
      $('#stressResults').append("<p>You're doing GREAT!!!!</p>");
    }


    $("#stressSurvey").hide();
    $('#stressResults').show();
  });
});
