var board = [
  ["","",""],
  ["","",""],
  ["","",""]
]

var turn;
var sqrId;
var user, computer, row, col;

$(document).ready(function(){
  // checkbox event listnener
  $(".checkBox").click(function(){
    if($(this).is(":checked")){
      user = $(this).val();
      turn = user;
      computer = (user == "X") ? "O" : "X";
    }
  });

  // square event listnener
  $(".square").click(function(){
    sqrId = $(this).attr("id");
    $("#"+sqrId).text(turn);
    turn = (turn == user) ? computer : user;
  });


});
