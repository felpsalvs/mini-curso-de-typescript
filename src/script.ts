const numero1 = document.getElementById("numero1") as HTMLInputElement;
const numero2 = document.getElementById("numero2") as HTMLInputElement;
const button = document.getElementById("button")!;

function add(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", () => {
  console.log(Number(numero1.value), Number(numero2.value));
});
