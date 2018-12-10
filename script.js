var board = [
  ["","",""],
  ["","",""],
  ["","",""]
]

var turn;
var sqrId;
var user, computer, row, col;
const ARR_LENGTH = 3;

$(document).ready(function(){
  resetBoard();
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
    if($("#"+sqrId).text() == "") {
      $("#"+sqrId).text(turn);
      row = getRow();
      col = getCol();
      board[row][col] = turn;
      turn = (turn == user) ? computer : user;
      console.log(board);
    }else{
      alert("Wrong Move");
    }


  });

//reset board
  $(".reset").click(function(){
    resetBoard();
  });



});

//getting row number
function getRow(){
  return Math.floor(sqrId / ARR_LENGTH);
}

// getting col number
function getCol(){
  return sqrId % ARR_LENGTH;

}

function checkWinners(){

}

function resetBoard(){
  $(".reset").click(function(){
      $(".square").text("");
      $(".checkBox").prop("checked", false);
  });
}

// go on https://www.youtube.com/watch?v=sX0YfsiB-o4
