$(function(){
  $("img").attr('src' , 'img/peaceimg'+ (1+Math.floor(17*Math.random()))+ '.gif');
  $("button").click(function (){
    $("img").attr('src' , 'img/peaceimg'+ (1+Math.floor(17*Math.random()))+ '.gif');
  })
  $('#calmsound')[0].play();
});
