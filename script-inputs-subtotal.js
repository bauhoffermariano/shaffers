const preciosBurgas = [100, 200, 300, 400];

const actualizarTotal = () => {
  let total = 0; 
  const cantidades = document.getElementsByClassName("cantidad"); 
  for (let i = 0; i < cantidades.length; i++) {
    const cantidad = parseInt(cantidades[i].value);
    if (cantidad > 0) {
      total += cantidad * preciosBurgas[i];
      
      const cantidadCombo = parseInt(document.getElementById(`papas${i + 1}`).value);
      total += cantidadCombo * 50;

    }
  }
  document.getElementById("subtotalBox").innerText = total;
  console.log(total);
};

const inputsBurga = document.getElementsByClassName("cantidad");
for (let i = 0; i < inputsBurga.length; i++) {
  inputsBurga[i].addEventListener("input", actualizarTotal);
}

const inputPapas = document.querySelectorAll("[id^=papas]");
for (let i = 0; i < inputPapas.length; i++) {
  inputPapas[i].addEventListener("change", actualizarTotal);
}