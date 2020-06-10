$(function(){
  var mode = 0;
  var timeCounter = 0;
  var lapCounter = 0;
  var action;
  var lapNumber = 0;
  var timeMinutes, timeSeconds, timeCentisec, lapMinute, lapSecond, lapCentisecond;
  hideshowButtons("#startButton", "#lapButton");

  $('#startButton').click(function (){
    mode = 1;
    hideshowButtons("#stopButton", "#lapButton");
    startAction();
  });

  $('#stopButton').click(function (){
    hideshowButtons('#resumeButton', '#resetButton');
    clearInterval(action);
  });

  $('#resumeButton').click(function (){
    hideshowButtons('#stopButton', '#lapButton');
    startAction();
  });

  $('#resetButton').click(function (){
    location.reload();
  });

  $('#lapButton').click(function (){
    if (mode){
      clearInterval(action);
      lapCounter = 0;
      addLap();
      startAction();
    }
  });

  function hideshowButtons(x, y){
    $(".control").hide();
    $(x).show();
    $(y).show();
  };

  function startAction() {
    action = setInterval(function () {
      timeCounter++;
      lapCounter++;
      if (lapCounter == 100*60*100 && timeCounter == 100*60*100 ) {
        lapCounter = 0;
        timeCounter = 0;
        alert("Timelimit reached!");
      }
      updateTime();
    }, 10);
    }

    function updateTime() {
      timeMinutes = Math.floor(timeCounter/6000);
      timeSeconds = Math.floor((timeCounter%6000)/100);
      timeCentisec = (timeCounter%6000)%100;

      $("#min").text(formatTime(timeMinutes));
      $("#second").text(formatTime(timeSeconds));
      $("#centisecond").text(formatTime(timeCentisec));

      lapMinutes = Math.floor(lapCounter/6000);
      lapSeconds = Math.floor((lapCounter%6000)/100);
      lapCentisec = (lapCounter%6000)%100;

      $("#lapmin").text(formatTime(lapMinutes));
      $("#lapsecond").text(formatTime(lapSeconds));
      $("#lapcentisecond").text(formatTime(lapCentisec));
    }

    function formatTime(number){
      if(number<10){
        return '0'+number;
      }else{
        return number;
      }
    }

    function addLap(){
      lapNumber++;
      var myLapDetails =
      '<div class="lap">'+
           '<div class="laptimetitle">'+
               'Lap'+ lapNumber +
           '</div>'+
           '<div class="laptime">'+
               '<span>'+ formatTime(lapMinutes) +'</span>'+
               ':<span>'+ formatTime(lapSeconds) +'</span>'+
               ':<span>'+ formatTime(lapCentisec) +'</span>'+
           '</div>'+
      '</div>';
      $(myLapDetails).prependTo('.Laps');

    }
});
