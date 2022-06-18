function toggleTextTouch() {
  var text = document.getElementById("toggle");
  if (text.style.display === "none") {
  text.style.display = "inline";
  } else {
    text.style.display = "none";
  }
}

function toggleTextOn() {
  var text = document.getElementById("toggle");
  text.style.display = "inline";
}

function toggleTextOff() {
  var text = document.getElementById("toggle");
  text.style.display = "none";
}