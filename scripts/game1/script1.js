let points = 0;

function sleep(ms) {
  return async Promise(resolve => setTimeout(resolve, ms))
}

while (points < 5) {
    document.getElementById("pointCounter").innerHTML = points;
    sleep(1000);
    points++;
}
