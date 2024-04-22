let input1 = document.getElementById("burga1");
let input2 = document.getElementById("burga2");
let input3 = document.getElementById("burga3");
let input4 = document.getElementById("burga4");
let input1Combo = document.getElementById("papas1");
let input2Combo = document.getElementById("papas2");
let input3Combo = document.getElementById("papas3");
let input4Combo = document.getElementById("papas4");
let incremento1Combo = document.getElementById("incremento1Combo");
// let incremento2Combo = document.getElementById("incremento2Combo");
// let incremento3Combo = document.getElementById("incremento3Combo");
// let incremento4Combo = document.getElementById("incremento4Combo");
let decremento1Combo = document.getElementById("decremento1Combo");
// let decremento2Combo = document.getElementById("decremento2Combo");
// let decremento3Combo = document.getElementById("decremento3Combo");
// let decremento4Combo = document.getElementById("decremento4Combo");

let incremento1 = document.getElementById("incremento1");
let incremento2 = document.getElementById("incremento2");
let incremento3 = document.getElementById("incremento3");
let incremento4 = document.getElementById("incremento4");
let decremento1 = document.getElementById("decremento1");
let decremento2 = document.getElementById("decremento2");
let decremento3 = document.getElementById("decremento3");
let decremento4 = document.getElementById("decremento4");

incremento1.addEventListener("click", () => {
    input1.value = parseInt(input1.value) + 1;
    actualizarTotal();
}
)
decremento1.addEventListener("click", () => {
    input1.value = parseInt(input1.value) - 1;
    actualizarTotal();
    if (parseInt(input1.value) < 0) {
        input1.value = 0;
    }
})
incremento2.addEventListener("click", () => {
    input2.value = parseInt(input2.value) + 1;
    actualizarTotal();
}
)
decremento2.addEventListener("click", () => {
    input2.value = parseInt(input2.value) - 1;
    actualizarTotal();
    if (parseInt(input2.value) < 0) {
        input2.value = 0;
    }
})
incremento3.addEventListener("click", () => {
    input3.value = parseInt(input3.value) + 1;
    actualizarTotal();
}
)
decremento3.addEventListener("click", () => {
    input3.value = parseInt(input3.value) - 1;
    actualizarTotal();
    if (parseInt(input3.value) < 0) {
        input3.value = 0;
    }
})
incremento4.addEventListener("click", () => {
    input4.value = parseInt(input4.value) + 1;
    actualizarTotal();
}
)
decremento4.addEventListener("click", () => {
    input4.value = parseInt(input4.value) - 1;
    actualizarTotal();
    if (parseInt(input4.value) < 0) {
        input4.value = 0;
    }
})





incremento1Combo.addEventListener("click", () => {
    papas1.value = parseInt(papas1.value) + 1;
    actualizarTotal();
}
)
decremento1Combo.addEventListener("click", () => {
    papas1.value = parseInt(papas1.value) - 1;
    actualizarTotal();
    if (parseInt(papas1.value) < 0) {
        papas1.value = 0;
    }
})
incremento2Combo.addEventListener("click", () => {
    papas2.value = parseInt(papas2.value) + 1;
    actualizarTotal();
}
)
decremento2Combo.addEventListener("click", () => {
    papas2.value = parseInt(papas2.value) - 1;
    actualizarTotal();
    if (parseInt(papas2.value) < 0) {
        papas2.value = 0;
    }
})
incremento3Combo.addEventListener("click", () => {
papas3.value = parseInt(papas3.value) + 1;
    actualizarTotal();
}
)
decremento3Combo.addEventListener("click", () => {
    papas3.value = parseInt(papas3.value) - 1;
    actualizarTotal();
    if (parseInt(papas3.value) < 0) {
        papas3.value = 0;
    }
})
incremento4Combo.addEventListener("click", () => {
    papas4.value = parseInt(papas4.value) + 1;
    actualizarTotal();
}
)
decremento4Combo.addEventListener("click", () => {
    papas4.value = parseInt(papas4.value) - 1;
    actualizarTotal();
    if (parseInt(ipapas.value) < 0) {
        papas4.value = 0;
    }
})