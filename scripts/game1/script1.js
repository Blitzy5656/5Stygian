let points = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

while (points < 5) {
    document.getElementById("pointCounter").innerHTML = points;
    points++;
}
