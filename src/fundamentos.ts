// Variables

const nom:string | number | boolean | undefined | null | never | unknown | any | string[] = 'Juan';
let ed:number = 30;



// Arrays

const numeros = [1,2,3,4,5]
let desconocido:number[] = []

const strings: (string | number)[] = []


// Agregar datos
desconocido.push(1)
strings.push("Hola")
strings.push(2)

// Quitar datos
const dato = desconocido.pop()

// Filter - Filtrar datos de un arreglo permitiendo solo los que cumplan con la condición
// (parametros) => valor return implicito
// (parametros) => { return valor} explicito
const pares = numeros.filter((value:number)=> value % 2 === 0)
const paresFunc = numeros.filter((value)=>{
    if(value % 2 === 0){
        return true
    }
    return false
})


// Map - Modificar los datos de un arreglo
// No modifica el arreglo original, crea uno nuevo
// [1,2,3,4,5]
// [3,4,9,8,15]
const dobles = numeros.map((num)=> num * 2)
const dobleFunc = numeros.map((num)=>{
    if (num%2 === 0){
        return num *2
    }
    
    return num*3
})

console.log(dobleFunc)
// ForEach - Itera sobre un arreglo
// No modifica el original ni crea uno nuevo

numeros.forEach((val)=>{
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
interface UsuarioDosInt{
    nombred:{
        primero:string
        segundo:string
    }
    apellidod:string
    hobbiesd: string[]
    papad: PapaInt
}



const usuario:UsuarioInt = {
   nombre:"Pedro",
   apellido:"Hernandez",
   hobbies:[],
   papa:{
    nombre:"Papa"
   }
}

console.log(((usuario as unknown) as UsuarioDosInt).nombred?.primero )



console.log(usuario)


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
    d?: number
    compuesto: {
        valor1:number,
        valor2?: number
    }
}

function multiplicar({a,b,d,compuesto}:MultiplicarProps,c:number){
    return (a*b + c +(d?? 0)) / compuesto.valor1 + (compuesto.valor2 ?? 1)
}


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
const isa = {
    nombre:"Isa",
    apellido:"Lopez",
    altura:180
}

const {hobbies,...hermanoIsaac} = isaac

console.log(hobbies)
console.log(isaac)
console.log(hermanoIsaac)

const hermanoIsaacCompleto = {
    ...isa,
    hermanoIsaac,
    nombre:"Jesus"
}

console.log("HErmanoIsa",hermanoIsaacCompleto)

const animales = ["Perro","Gato","Conejo"]

function getAnimales(){
    return ["Perro","Gato","Conejo"]
}
const animal3 = animales[2]

const [pos1,pos2,pos3,pos4] = getAnimales()
console.log("Pos4",pos4)

const verdadero = false

const asistencia = {
    id:0,
    alumno:"Juan"
}

console.log(asistencia)


// Como funcionan los condicionales en JS

// true && false && true

// Valores truthy
// Variable o funcion definida y no 0 ni string vacio
const numeroo = 2
const arr = [1]
const string22 = "e"
const obj = {}
// Valores falsey
// Valores nulos
// VAlores indefinidos
// Valores 0
// String vacio 

interface FastInt{
    falsey:any
    pedro?:any
}

const truthy:FastInt = {
    falsey:{
        pedro:{
            nombre:"Jesus"
        }
    }
}


if(truthy.pedro){

    console.log("Hola")
}



