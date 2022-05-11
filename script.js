document.addEventListener('DOMContentLoaded', function() {
    var v = document.getElementById('video');
    var canvas = document.getElementById('backlight');
    var context = canvas.getContext('2d');
    var cw = Math.floor(canvas.clientWidth);
    var ch = Math.floor(canvas.clientHeight);
    canvas.width = cw;
    canvas.height = ch;
    v.addEventListener('play', function() {
      updateBacklight(this, context, cw, ch);
    }, false);
  }, false);
  
  
  function updateBacklight(v, c, w, h) {
    if (v.paused || v.ended) return false;
    c.drawImage(v, 0, 0, w, h);
    setTimeout(updateBacklight, 20, v, c, w, h);
  }