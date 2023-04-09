"use strict";

const calcBtn = document.querySelector(".calculate--button");
const resetBtn = document.querySelector(".reset--button");
const height = document.querySelector(".height--input");
const weight = document.querySelector(".weight--input");
const meters = document.querySelector(".meter-convert");
const cm = document.querySelector(".cm-convert"); 
const footInput = document.querySelector('.ft-mtr');
const inchInput = document.querySelector('.inch-mtr');
const footMeterOutput = document.querySelector('.ft-mtr-result')
const footMeterBtn = document.querySelector('.ft-mtr-btn')
const cmInput = document.querySelector('.cm-mtr')
const cmMtrOutput = document.querySelector('.cm-mtr-result')
const cmMtrBtn = document.querySelector('.cm-mtr-btn');
const poundsInput = document.querySelector('.pounds-input');
const kgOutput = document.querySelector('.kg-output');
const lbKgBtn = document.querySelector('.lb-kg-btn');


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

footMeterBtn.addEventListener('click', function() {
  const footMtr = footInput.value * 0.3048;
  const inchMtr = inchInput.value * 0.0254;
 const convertFtMtrOutput = footMtr + inchMtr;
 const outputRound = convertFtMtrOutput.toFixed(2);
 footMeterOutput.value = outputRound;
})

cmMtrBtn.addEventListener('click', function() {
  const cmToMtr = cmInput.value / 100;
  cmMtrOutput.value = cmToMtr;
})

lbKgBtn.addEventListener('click', function() {
  const kgs = poundsInput.value * 0.45359237;
  const kgsRounded = kgs.toFixed(0);
  kgOutput.value = kgsRounded;
})
