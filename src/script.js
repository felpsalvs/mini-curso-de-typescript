"use strict";
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const button = document.getElementById("button");
function add(a, b) {
    return a + b;
}
button.addEventListener("click", () => {
    console.log(Number(numero1.value), Number(numero2.value));
});
