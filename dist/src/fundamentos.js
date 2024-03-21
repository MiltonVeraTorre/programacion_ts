"use strict";
const nom = 'Juan';
let ed = 30;
let numeros = [1, 2, 3, 4, 5];
let desconocido = [];
desconocido.push(1);
const dato = desconocido.pop();
const pares = numeros.filter((value) => value % 2 === 0);
const paresFunc = numeros.filter((value) => {
    if (value % 2 === 0) {
        return true;
    }
    return false;
});
const dobles = numeros.map((num, _i) => num * 2);
const dobleFunc = numeros.map((num) => {
    if (num % 2 === 0) {
        return num * 2;
    }
    return num * 3;
});
numeros.forEach((val, i, arr) => {
    console.log(val);
});
const usuario = {
    nombre: "Pedro",
    apellido: "Hernandez",
    hobbies: ["Patinar"],
    papa: {
        nombre: "Jesus",
        esposa: {
            nombre: "Maria"
        }
    }
};
console.log(usuario.papa.esposa?.nombre ?? "Teresa");
console.log(Object.keys(usuario));
console.log(Object.values(usuario));
Object.keys(usuario).forEach((key) => {
    console.log(key);
    console.log(usuario[key]);
});
function suma(a, b) {
    return a + b;
}
console.log(suma(3, 4));
function multiplicar({ a, b }, c) {
    return a * b + c;
}
console.log(multiplicar({ a: 3, b: 4 }, 5));
const saludar = (nomb) => {
    console.log(`Hola ${nomb}`);
};
const restar = (num1, num2) => num1 - num2;
saludar("Pedro");
console.log(restar(5, 3));
const isaac = {
    nombre: "Isaac",
    apellido: "Hernandez",
    edad: 20,
    hobbies: ["Leer", "Correr"]
};
const { hobbies, ...isaacHermano } = isaac;
const isaacHermanoCompleto = {
    ...isaacHermano,
    hobbies: ["Saltar"]
};
console.log(isaacHermanoCompleto);
const animales = ["Perro", "Gato", "Conejo"];
function getAnimales() {
    return ["Perro", "Gato", "Conejo"];
}
const [animal1, animal2] = getAnimales();
console.log(animal2);
const verdadero = false;
const asistencia = {
    id: 0,
    alumno: "Juan"
};
console.log(asistencia);
const truthy = "" || 0 || true || false;
if (truthy) {
    console.log("HOla");
}
