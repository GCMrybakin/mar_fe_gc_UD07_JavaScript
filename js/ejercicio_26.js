//26. Escribe un programa que solicite al usuario ingresar un número y luego muestre en la
//consola todos los números pares desde 0 hasta ese número utilizando un bucle `for` y una
//condición `if`.

let numero = prompt("Introduce un numero: ");

for (let i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
        console.log("El número "+i+" es par.");
    }
}