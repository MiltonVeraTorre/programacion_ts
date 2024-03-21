// Variables

const nom:string = 'Juan';
let ed:number = 30;


// Arrays

let numeros = [1,2,3,4,5]
let desconocido:number[] = []

// Agregar datos
desconocido.push(1)

// Quitar datos
const dato = desconocido.pop()

// Filter - Filtrar datos de un arreglo permitiendo solo los que cumplan con la condición

const pares = numeros.filter((value:number)=> value % 2 === 0)
const paresFunc = numeros.filter((value)=>{
    if(value % 2 === 0){
        return true
    }

    return false
})

// Map - Modificar los datos de un arreglo
// No modifica el arreglo original, crea uno nuevo

const dobles = numeros.map((num,_i)=> num * 2)
const dobleFunc = numeros.map((num)=>{
    if (num%2 === 0){
        return num *2
    }
    
    return num*3
})

// ForEach - Itera sobre un arreglo
// No modifica el original ni crea uno nuevo

numeros.forEach((val,i,arr)=>{
    console.log(val)
})


// Objetos

interface Esposa{
    nombre:string
}

interface PapaInt{
    nombre:string
    esposa?: Esposa
}

interface UsuarioInt{
    nombre:string
    apellido:string
    hobbies: string[]
    papa: PapaInt
}


const usuario:UsuarioInt = {
    nombre:"Pedro",
    apellido:"Hernandez",
    hobbies: ["Patinar"],
    papa:{
        nombre: "Jesus",
        esposa:{
            nombre:"Maria"
        }
    }
   
}

console.log(usuario.papa.esposa?.nombre ?? "Teresa")

// Metodos keys y values

console.log(Object.keys(usuario))
console.log(Object.values(usuario))


Object.keys(usuario).forEach((key)=>{
    console.log(key)
    console.log(usuario[key])
})


// Funciones


function suma(a:number,b:number){
    return a + b
}

console.log(suma(3,4))

interface MultiplicarProps{
    a:number
    b: number
}

function multiplicar({a,b}:MultiplicarProps,c:number){
    return a*b + c
}


console.log(multiplicar({a:3,b:4},5))

const saludar = (nomb:string)=>{
    console.log(`Hola ${nomb}`)
}

const restar =  (num1:number, num2:number)=> num1-num2

saludar("Pedro")
console.log(restar(5,3))


// Destructuring de objetos

const isaac = {
    nombre:"Isaac",
    apellido:"Hernandez",
    edad: 20,
    hobbies: ["Leer","Correr"]
}

const {hobbies,...isaacHermano} = isaac


const isaacHermanoCompleto = {
    ...isaacHermano,
    hobbies: ["Saltar"]
}
console.log(isaacHermanoCompleto)

const animales = ["Perro","Gato","Conejo"]

function getAnimales(){
    return ["Perro","Gato","Conejo"]
}

const [animal1,animal2] = getAnimales()
console.log(animal2)

const verdadero = false

const asistencia = {
    id:0,
    alumno:"Juan"
}

console.log(asistencia)


// Como funcionan los condicionales en JS

// true && false && true

// Valores truthy
// Variable o funcion definida y no 0

// Valores falsey
// Valores nulos
// VAlores indefinidos
// Valores 0


const truthy = "" || 0 || true || false

if(truthy){
    console.log("HOla")
}

