


const preciosBurgas = [100, 200, 300, 400];

const actualizarTotal = () => {
  let total = 0; 
  const cantidades = document.getElementsByClassName("cantidad"); 
  for (let i = 0; i < cantidades.length; i++) {
    const cantidad = parseInt(cantidades[i].value);
    total += cantidad * preciosBurgas[i];
    if (document.getElementById(`papas${i + 1}`).checked)
      total += cantidad * 50;
  }
  document.getElementById("subtotalBox").innerText = total;
};


const inputsBurga = document.getElementsByClassName("cantidad");
for (let i = 0; i < inputsBurga.length; i++) {
  inputsBurga[i].addEventListener("input", actualizarTotal);
}

const inputPapas = document.querySelectorAll("[id^=papas]");
for (let i = 0; i < inputPapas.length; i++) {
  inputPapas[i].addEventListener("change", actualizarTotal);
}