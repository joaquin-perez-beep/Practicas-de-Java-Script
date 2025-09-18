/*let nombre="Joaquin";
const edad=21;
console.log(`hola mi nombre es ${nombre} y tengo ${edad} años.`)
let suma=18+3;
let resta=18-3;
let multiplicacion=18*3;
let division=18/3;
console.log(`la resta de 18-3 da como resultado ${resta}`);
console.log(`la multiplicacion de 18*3 da como resultado ${multiplicacion}`);
console.log(`la division de 18/3 da como resultado ${division}`);
console.log(`la suma de 18+3 es ${suma}`);
if (edad>=18) {
    console.log('es mayor de edad');
} else {
    console.log('es menor de edad');
}

// Calculadora simple
function calculadora() {
    const num1 = parseFloat(prompt('Ingrese el primer número:'));
    const operacion = prompt('Ingrese la operación (+, -, *, /):');
    const num2 = parseFloat(prompt('Ingrese el segundo número:'));
    let resultado;
    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert('Operación no válida.');
            return;
    }
    alert(`El resultado es: ${resultado}`);
}

// Descomenta la siguiente línea para usar la calculadora al abrir la página
// calculadora();*/
// ejercicio 1: Declara una variable con tu nombre y muestra un saludo en consola
const nombre = "joaquin";
console.log("hola" + nombre);

// ejercicio 2: Suma dos números y muestra el resultado en consola
let number9 = 9;
let number7 = 7;
let suma = number9 + number7;
console.log("la suma es" + suma);

// ejercicio 3: Evalúa una expresión lógica y muestra el resultado
let resultado = (10 < 5) && (5 > 2);
console.log("¿10<5 y 5>2?:" + resultado);

// ejercicio 4: Declara varias variables de edad y muestra la inicial y final
let edad = 21;
let edad2 = 31;
const edad3 = 51;
const edad4 = 71;
console.log("edad inicial:" + edad);
console.log("edad final:" + edad4);

// ejercicio 5: Ejemplo de declaración de variable con explicación
let explicacion = "esto es una explicacion";

// ejercicio 6: Variable booleana y operación lógica
let esMaestro=true;

let puedeEnseñar=esMaestro && true;
console.log("¿Puede enseñar?" + puedeEnseñar)
//ejercicio 7
console.log("El tipo de 'nombre' es: " + typeof nombre);
//ejercicio 8
let colores = ["rojo", "verde", "azul"];
console.log("Un color es: " + colores[1]);
//ejercio 9
let resto= 17%3;
console.log( "El resto de 17%3 es:"+resto);
let sinvalor;
console.log("El valor de sin valor es:"+sinvalor);
