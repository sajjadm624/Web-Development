var playing = false;
var startreset = $("#startreset");
var score;
var gamescore = $("#scoreValue");
var life = $("#life");
var trialleft;
var step;
var action;

$(function(){

  // click on start/reset button

  startreset.click(function(){
    //we are playing
    if(playing == true){
      //reload page
      location.reload();
    }else{
      //we are not playing
      playing = true; //game initiatted

      score = 0; //set score to zero

      gamescore.html(score);

      //show trails left
      life.show();
      trialleft = 3;
      addhearts();

      //gameover box hide
      $("#gameover").hide();

      // change button text to reset
      startreset.html("রিসেট");

      //start sending smiley
      startAction();
    }
  });

$("#smiley").mouseover(function (){
  score++;
  gamescore.html(score);

  $("#smashemsound")[0].play(); //play sound
  clearInterval(action); //stop smiley falling

  $("smiley").hide("explode", 500);

  setTimeout(startAction, 500);
})

//functions
function addhearts(){
  life.empty();
  for(i = 0; i < trialleft; i++){
    life.append("<img src='images/life.png' class='heart'>");
  }
}

function startAction(){
        $("#gameover").hide();

        //generatting a random smiley
        $("#smiley").show();

        chooseSmiley();
        $("#smiley").css({
        'left': Math.round(Math.random()*850),
        'top' : -40}); //random position

        //generate a random step
        step = 1+Math.round(5*Math.random());

        //move fruit
        action = setInterval(function (){
        $("#smiley").css('top',
        $("#smiley").position().top + step);

        //check fruit too low
        if($("#smiley").position().top > $("#field").height()){
          if(trialleft > 1){
            //generatting a random smiley
            $("#smiley").show();

            chooseSmiley();

            $("#smiley").css({
            'left': Math.round(Math.random()*850),
            'top' : -40}); //random position

            //generate a random step
            step = 1+Math.round(5*Math.random());

            //reduce trial
            trialleft--;

            // populate life
            addhearts();

          }else{
            //game over

            playing = false;
            startreset.html(" আবার খেলো!");
            $("#gameover").show();
            $("#finalscore").html(score);
            $("#life").hide();
            stopAction();
          }
        }
      }, 20);
}

function chooseSmiley(){
  $("#smiley").attr('src','images/img'+ (1+Math.round(Math.random()*16)) +'.png');
}

function stopAction(){
  clearInterval(action);
  $("#smiley").hide();
}
});
