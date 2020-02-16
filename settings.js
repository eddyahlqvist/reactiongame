/* Coded by Eddy Ahlqvist - 2020 */




function setDifficulty(_diff) {
  diff = _diff;

  if (diff == 1) {
    scoreMultiplier = 0.5;
  } else if (diff == 2) {
    scoreMultiplier = 1;
  } else if (diff == 3) {
    scoreMultiplier = 1.5;
  } else {
    scoreMultiplier = 0;
  }
}
