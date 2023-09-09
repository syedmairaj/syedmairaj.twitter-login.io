"use strict";
let calcdata = "";
const buttons = document.querySelectorAll(".button");
const inputd = document.querySelector(".input_data");
const resetd = document.querySelector(".reset");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "=") {
      calcdata = eval(calcdata);
      document.querySelector(".input_data").value = calcdata;
    } else calcdata = calcdata + e.target.value;
    document.querySelector(".input_data").value = calcdata;
  });
});

resetd.addEventListener("click", function () {
  inputd.value = "";
  calcdata = "";
});
