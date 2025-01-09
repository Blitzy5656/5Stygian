let lossChecker = 0;

function getRndInteger() {
  return Math.abs(Math.floor(Math.random() * 1000000));
}

function theReminder() {
    let lossChecker = lossChecker + getRndInteger();
    if (lossChecker = 1) {
        window.alert("You lost the game!");
    }
}
