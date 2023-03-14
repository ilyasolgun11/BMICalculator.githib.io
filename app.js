"use strict";

const calcBtn = document.querySelector(".calculate--button");
const resetBtn = document.querySelector(".reset--button");
const height = document.querySelector(".height--input");
const weight = document.querySelector(".weight--input");
const meters = document.querySelector(".meter-convert");
const cm = document.querySelector(".cm-convert");

calcBtn.addEventListener("click", function () {
  const result = (document.querySelector(".result-output").textContent =
    Math.round(weight.value / (height.value * height.value)));
  if (result < 18) {
    document.querySelector(".health-result").textContent = "Underweight";
  } else if (result > 18 && result < 26) {
    document.querySelector(".health-result").textContent = "Healthy";
  } else if (result > 26 && result < 30) {
    document.querySelector(".health-result").textContent = "Overweight";
  } else if (result > 30 && result < 40) {
    document.querySelector(".health-result").textContent = "Obese";
  } else if (result > 40) {
    document.querySelector(".health-result").textContent = " Extremely Obese";
  }
});

resetBtn.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
  document.querySelector(".result-output").textContent = `"20"`;
  document.querySelector(".health-result").textContent = `"Healthy"`;
});
