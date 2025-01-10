/*
let points = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

while (true) {
    document.getElementById("pointCounter").innerHTML = points;
    sleep(1000);
    points++;
}
