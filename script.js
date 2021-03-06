const effectSlider = document.getElementById("effect-slider");
const volumeSlider = document.getElementById("volume-slider");
const video = document.getElementById("video");
const root = document.documentElement;

const updateBacklight = (v, c, w, h) => {
  if (v.paused || v.ended) return false;
  c.drawImage(v, 0, 0, w, h);
  setTimeout(updateBacklight, 20, v, c, w, h);
}

document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById('backlight');
    var context = canvas.getContext('2d');
    var cw = Math.floor(canvas.clientWidth);
    var ch = Math.floor(canvas.clientHeight);
    canvas.width = cw;
    canvas.height = ch;
    video.addEventListener('play', function() {
      updateBacklight(this, context, cw, ch);
    }, false);
  }, false);

root.style.setProperty("--effect-slider", "70%")

effectSlider.addEventListener("input", (e) => {
  root.style.setProperty("--effect-slider", e.target.value + "%")
})

video.volume = .7

volumeSlider.addEventListener("input", (e) => {
  video.volume = e.target.value/100
})

video.addEventListener("click", () => {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
})