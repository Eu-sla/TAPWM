let texto = document.getElementById("texto");
let maiuscula = document.getElementById("maiuscula");
let minuscula = document.getElementById("minuscula");

maiuscula.addEventListener("click", function () {
    texto.value = texto.value.toUpperCase();
});

minuscula.addEventListener("click", function () {
    texto.value = texto.value.toLowerCase();
});