var changeColor = setInterval(setColor, 1000);

function setColor() {
  var x = Math.round(Math.random()*256);
  var y = Math.round(Math.random()*256);
  var z = Math.round(Math.random()*256);
  var color = 'rgb('+ x +','+ y +','+ z +')';
  xcounter.innerHTML = x;
  ycounter.innerHTML = y;
  zcounter.innerHTML = z;
  document.getElementById("box").style.backgroundColor = color;
}
