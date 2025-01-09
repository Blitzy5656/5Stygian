lossChecker = 0;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function theReminder() {
    getRngInteger(0, 2);
    lossChecker = getRngInteger();
    if (lossChecker = 1) {
        window.alert("You lost the game!");
    }
}
