const input = document.querySelector("#ingresar-tarea")
const boton = document.querySelector("button")
const listadeTareas = document.querySelector("#lista-de-tareas")


// FUNCIONES

function agregarTarea() {
    if (input.value) { // si existe un valor en el input es TRUE
        //Crear tarea
        let tareaNueva = document.createElement("div")
        tareaNueva.classList.add("tarea")

        //Texto ingresado por el usuario
        let texto = document.createElement("p")
        texto.innerText = input.value
        tareaNueva.appendChild(texto)

        //Crear y agregar contenedor de iconos
        let iconos = document.createElement("div")
        iconos.classList.add("iconos")
        tareaNueva.appendChild(iconos)

        //Iconos
        let completar = document.createElement("i")
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar")
        completar.addEventListener("click", completarTarea)

        let eliminar = document.createElement("i")
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar")
        eliminar.addEventListener("click", eliminartarea)

        iconos.append(completar, eliminar)

        // Agregar a la lista
        listadeTareas.appendChild(tareaNueva)
    } else {
        alert("Por favor ingrese una tarea")
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode
    tarea.classList.toggle("completada") // toggle,si tiene la clase la quita y si no la tiene la agrega
}

function eliminartarea(e) {
    let tarea = e.target.parentNode.parentNode
    tarea.remove()
}


// EVENTOS 

boton.addEventListener("click", agregarTarea)

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        agregarTarea()
    }
})