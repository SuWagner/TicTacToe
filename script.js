//Unfortunately something went wrong at CheckDraw and who is the winner
var board = [
  ["","",""],
  ["","",""],
  ["","",""]
]

var turn;
var sqrId;
var user, computer, row, col;
var counter = 9;
const ARR_LENGTH = 3;

$(document).ready(function(){
  $(".checkBox").prop("checked", false);
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
    playerMove();
    if(checkWinners()){
      alert(turn +" wins the game!");
      return false;
    }
    turn = (turn == user) ? computer : user;

    computerAI()
//turn = (turn == user) ? computer : user;


    if(checkWinners()){
      alert(turn +" wins the game!");
      return false;
    }
    if(!checkDraw()){
      alert("It's a draw");
      return false;
    }
    turn = (turn == user) ? computer : user;

  });

//reset board
  $(".reset").click(function(){
    resetBoard();
  });

});

//player move
function playerMove(){
  if($("#"+sqrId).text() == "") {
    $("#"+sqrId).text(turn);
    row = getRow();
    col = getCol();
    board[row][col] = turn;
    counter--;
    console.log(board);


  }else{
    alert("Wrong Move");
  }
}

/* computer play: random square*/
function computerAI(){

  var min = 0, max = 8;
  do{
    sqrId = Math.floor(Math.random() * (max + min));
  }   while(($("#"+sqrId).text() != "") && counter != 0)
  $('#'+sqrId).text(computer);
  row = getRow();
  col = getCol();
  board[row][col] = computer;
  counter--;

//Diese Whileschleife enden lassen z.B. mit einem Counter, der mitzählt wieviele felder noch leer sind.
}


//getting row number
function getRow(){
  return Math.floor(sqrId / ARR_LENGTH);
}

// getting col number
function getCol(){
  return sqrId % ARR_LENGTH;

}

function checkWinners(){
  //checking rows
  for(var i = 0; i< ARR_LENGTH; i++){
    if(board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2])
      return true;
  }
  //checking cols
  for(var i = 0; i< ARR_LENGTH; i++){
    if(board[0][i] != "" && board[0][i] == board[1][i] && board[1][i] == board[2][i])
      return true;
  }

  if(board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2])
    return true;
  if(board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0])
    return true;

  return false;
}

function checkDraw(){
  for(var i =0; i< ARR_LENGTH; i++){
    for(var j = 0; j < board[i].length; j++){
      if(board[i][j] == "")
        return true;
    }
  }
  return false;
}

function resetBoard(){
  $(".reset").click(function(){
      $(".square").text("");
      $(".checkBox").prop("checked", false);
      user = "";
      turn = "";
      computer = "";
      counter = 9;
      for(var i = 0; i < ARR_LENGTH; i++){
        for(var j=0; j< board[i].length; j++){
          board[i][j] = "";
        }
      }
  });
}

// go on https://www.youtube.com/watch?v=sX0YfsiB-o4
