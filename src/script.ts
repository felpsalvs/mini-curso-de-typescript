const numero1 = document.getElementById("numero1") as HTMLInputElement;
const numero2 = document.getElementById("numero2") as HTMLInputElement;
const button = document.getElementById("button")!;

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", function () {
  console.log(sum(Number(numero1.value), Number(numero2.value)));
});