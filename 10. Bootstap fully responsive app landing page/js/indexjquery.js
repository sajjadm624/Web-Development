var play = false;

$(function(){
  $('#soundbtn').click(function (){
    if (play == false){
      play = true;
      $('#calmsound')[0].play();
      $('#soundbtn').html('Pause Sound');
    }
    else {
      play = false;
      $('#calmsound')[0].pause();
      $('#soundbtn').html('Play Sound');
    }
  })

});
