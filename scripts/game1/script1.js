let points = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function click() {
    points++;
    document.getElementById("pointCounter") = points;
}
