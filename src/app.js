/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  // Select random elements from each array
  let who = getRandomElement([
    "The dog",
    "My grandma",
    "His turtle",
    "My bird"
  ]);
  let action = getRandomElement(["ate", "peed", "crushed", "broke"]);
  let what = getRandomElement(["my homework", "the keys", "the car"]);
  let when = getRandomElement([
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]);
  let excuse = who + " " + action + " " + what + " " + when + ".";
  let excuseDisplay = document.getElementById("excusa");
  excuseDisplay.innerText = excuse;
};
