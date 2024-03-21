"use strict";
async function obtenerDatos() {
    const data = await fetch("http://localhost:4000/prueba");
    const dataJson = await data.json();
    await new Promise(_ => setTimeout(() => {
        console.log(dataJson);
    }, 3000));
}
async function obtenerOtroDato() {
    const data = await fetch("http://localhost:4000/prueba2");
    const dataJson = await data.json();
    console.log(dataJson);
}
async function main() {
    obtenerDatos();
    console.log("Tercero");
    await obtenerOtroDato();
}
main();
