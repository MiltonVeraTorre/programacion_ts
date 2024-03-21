

// Promesas
// pending -  se acaba de llamar o esta ejecutandose
// rejected - no se resolvio
// fullfilled - si se resolvio


// async
// await

async function obtenerDatos(){
    // Fetch api
    const data = await fetch("http://localhost:4000/prueba")
    const dataJson = await data.json()

    await new Promise(_ => setTimeout(()=>{
        console.log(dataJson)

    }, 3000)); // Wait for 3 seconds
}
async function obtenerOtroDato(){
    // Fetch api
    const data = await fetch("http://localhost:4000/prueba2")
    const dataJson = await data.json()

    console.log(dataJson)
}

async function main(){

    obtenerDatos()
    console.log("Tercero")
    await obtenerOtroDato()
}

main()
