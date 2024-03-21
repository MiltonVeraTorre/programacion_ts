"use strict";
const nom = 'Juan';
let ed = 30;
const numeros = [1, 2, 3, 4, 5];
let desconocido = [];
const strings = [];
desconocido.push(1);
strings.push("Hola");
strings.push(2);
const dato = desconocido.pop();
const pares = numeros.filter((value) => value % 2 === 0);
const paresFunc = numeros.filter((value) => {
    if (value % 2 === 0) {
        return true;
    }
    return false;
});
const dobles = numeros.map((num) => num * 2);
const dobleFunc = numeros.map((num) => {
    if (num % 2 === 0) {
        return num * 2;
    }
    return num * 3;
});
console.log(dobleFunc);
numeros.forEach((val) => {
    console.log(val);
});
const usuario = {
    nombre: "Pedro",
    apellido: "Hernandez",
    hobbies: [],
    papa: {
        nombre: "Papa"
    }
};
console.log(usuario.nombred?.primero);
console.log(usuario);
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
function multiplicar({ a, b, d, compuesto }, c) {
    return (a * b + c + (d ?? 0)) / compuesto.valor1 + (compuesto.valor2 ?? 1);
}
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
const isa = {
    nombre: "Isa",
    apellido: "Lopez",
    altura: 180
};
const { hobbies, ...hermanoIsaac } = isaac;
console.log(hobbies);
console.log(isaac);
console.log(hermanoIsaac);
const hermanoIsaacCompleto = {
    ...isa,
    hermanoIsaac,
    nombre: "Jesus"
};
console.log("HErmanoIsa", hermanoIsaacCompleto);
const animales = ["Perro", "Gato", "Conejo"];
function getAnimales() {
    return ["Perro", "Gato", "Conejo"];
}
const animal3 = animales[2];
const [pos1, pos2, pos3, pos4] = getAnimales();
console.log("Pos4", pos4);
const verdadero = false;
const asistencia = {
    id: 0,
    alumno: "Juan"
};
console.log(asistencia);
const numeroo = 2;
const arr = [1];
const string22 = "e";
const obj = {};
const truthy = {
    falsey: {
        pedro: {
            nombre: "Jesus"
        }
    }
};
if (truthy.pedro) {
    console.log("Hola");
}
