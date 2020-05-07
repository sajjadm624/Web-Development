var playing = false;
var score;
var startbutton = document.getElementById("startreset");
var gamescore = document.getElementById("scoreValue");
var action;
var timeremainingvalue = document.getElementById("timeremainingvalue");
var remainingtime;
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var correctAnswer;
var question = document.getElementById("question");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");

//Clicking Start / Reset button
startbutton.onclick = function(){
  //If we are palying

  if( playing == true ){

    location.reload(); //reload page

  }else{
    //If we are not playing

    //change mode to playing
    playing = true;

    score = 0; //Set score to Zero

    remainingtime = 60; //setting remaining time

    timeremainingvalue.innerHTML = remainingtime;

    //hide game over box
    hide("gameover")

    gamescore.innerHTML = score;

    show("timeremaining")
    show("box1");
    show("box2");
    show("box3");
    show("box4");
    show("score");

    startbutton.innerHTML = "রিসেট";

    //startCountdown

    startCountdown();

    //generate a new Q&A
    generateQA();

  }
}

box1.onclick = generatingbox;
box2.onclick = generatingbox;
box3.onclick = generatingbox;
box4.onclick = generatingbox;

//if we click on answer box
  //if we are palying
    //Correct?
      //yes
        //increase score
        //show correct box for 1 sec
        //generate new Q&A
      //no
        //show try again box for 1sec

//functions

//startCountdown
function startCountdown(){
  action = setInterval(function(){
    remainingtime -= 1;
    timeremainingvalue.innerHTML= remainingtime;
    if (remainingtime == 0){
      //gameover
      stopCountdown();
      show("gameover")
      document.getElementById("finalscore").innerHTML = score;
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      hide("box1");
      hide("box2");
      hide("box3");
      hide("box4");
      hide("score");
      playing = false;
      startbutton.innerHTML = "খেলা শুরু"
    }
  }, 1000);
}

//stopCountdown
function stopCountdown(){
  clearInterval(action);
}

//hide an element
function hide(Id){
  document.getElementById(Id).style.display = "none";
}

//show an element
function show(Id) {
  document.getElementById(Id).style.display = "block";
}

//generate Q & A
function generateQA(){
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());;
  var sign = 1 + Math.round(2 * Math.random());
  if (sign == 1){
    correctAnswer = x + y;
    question.innerHTML = x + "+" + y;
  } else if(sign == 2){
    correctAnswer = x * y;
    question.innerHTML = x + "x" + y;
  }else if(sign == 3){
    correctAnswer = x - y;
    question.innerHTML = x + "-" + y;
  }
  var correctPosition = 1 + (Math.round(3*Math.random()));
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

  var answers = [correctAnswer];

  //fill other box with wrong answars
  for(var i = 1 ; i<5 ; i++){
    if ( i != correctPosition ){
      var wrongAnswer;
      do{
        wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
      }
      while(answers.indexOf(wrongAnswer) > -1)
       document.getElementById("box"+i).innerHTML = wrongAnswer;
       answers.push(wrongAnswer);
    }
  }
}

function generatingbox(){
  if (playing == true){
    if(this.innerHTML == correctAnswer){
      //correctAnswer
      score++;
      gamescore.innerHTML = score;
      //hide wrong box and show correct box
      hide("wrong");
      show("correct");
      setTimeout(function(){
        hide("correct");
      }, 1000);
      //Generate new Q&A
      generateQA();
    }else{
      //wrong answer
      hide("correct");
      show("wrong");
      setTimeout(function(){
        hide("wrong")
      }, 1000);
    }
  }
}
