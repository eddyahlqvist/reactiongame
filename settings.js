/* Coded by Eddy Ahlqvist - 2020 */

let easy = false;
let normal = true;
let hard = false;
let scoreMultiplyer;

if (easy) {
  scoreMultiplyer = 0.5;
} else if (normal) {
  scoreMultiplyer = 1;
} else if (hard) {
  scoreMultiplyer = 1.5;
} else {
  scoreMultiplyer = 0;
}
