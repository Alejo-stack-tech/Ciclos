// while (true) {
//     let entrada = 0
//     let dato = prompt("Ingrese el valor");
//     if (dato == "a") {
//         break;
//     }}
//     console.log(dato*dato);

//     function sumar (numero) {
// return numero += numero;
//     }


let suma = 0;

while (true) {
  let entrada = prompt("Ingresa un número (o escribe 'salir' para terminar):");

  if (entrada === "salir") {
    alert(`Suma final: ${suma}`);
    break;
  }

  let numero = parseFloat(entrada);

  if (!isNaN(numero)) {
    suma += numero;
    alert(`Suma actual: ${suma}`);
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}

