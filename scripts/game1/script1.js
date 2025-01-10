let points = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function click() {
    document.getElementById("pointCounter").innerHTML = points;
    points++;
}
