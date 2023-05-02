//ENTREGA FINAL

//variables let/const(array) ..ok
//estructuras de control > if/switch ..ok
//bucles > for/forin..off..each/while do while ..ok
//funciones > clasica o flecha ..ok
//arrays > metodos clasicos y avanzados ..ok
//objetos > constructor tipo class ..ok

//DOM y eventos, sin alertas ni prompt ni consolas ..ok
//eventos > click / submit > change/mouse/teclado ..ok
//librerias > para estilos sweet alert toastify ..ok
//sugar sintax > a nuestro criterio ..falta creo
//fetch > json local o api de terceros ..ok

//clase / objetos

let code = 0

class Trabajador {
    constructor(nombre,fechnac,sueldo,cargo){
        this.codigo = code++;
        this.nombre = nombre;
        this.fechnac = fechnac;
        this.sueldo = sueldo;
        this.cargo = cargo;
    }
    //metodo
    esJefe(){
        if (this.cargo == "Jefe") {
            return true
        } else {
            return false
        }
    }
}

//arrays
const Trabajadores = []

Trabajadores.push(new Trabajador("Luis","10-10-1960","3000","Jefe"))
Trabajadores.push(new Trabajador("Alex","01-01-1980","2000","Administrativo"))
Trabajadores.push(new Trabajador("Ian","19-12-2001","1000","Tecnico"))


//variables HTML

let agregar= document.getElementById("agregar")
let buscar= document.getElementById("buscar")
let eliminar= document.getElementById("eliminar")

let listarTodo= document.getElementById("listT")
let listarJefes= document.getElementById("listJ")
let listarEmpleados= document.getElementById("listE")

let limpiarB = document.getElementById("limpiarB")
let limpiarL = document.getElementById("limpiarL")

//eventos

agregar.addEventListener("click", agregarT)
buscar.addEventListener("click", buscarT)
eliminar.addEventListener("click", eliminarT)
listarTodo.addEventListener("click", listarTodos)
listarJefes.addEventListener("click", listaJefes)
listarEmpleados.addEventListener("click", listarEmp)

limpiarB.addEventListener("click",limpiarBusc)
limpiarL.addEventListener("click",limpiarList)

//funciones

function agregarT(e) {
    e.preventDefault();
    let nomb = document.getElementById("n").value
    let fn = Date(document.getElementById("fn").value)
    let suel = document.getElementById("s").value
    let car = document.getElementById("ca").value
    if (!nomb || !fn || !suel || !car) {
        swal("Faltan datos!", "Revise el formulario!", "error");
    } else {
        if (buscarTrabajador(nomb)) {
            swal("Trabajador ya existe!", "Ingrese uno nuevo!", "error");
        } else {
            Trabajadores.push(new Trabajador(nomb,fn,suel,car))
            swal("Trabajador: "+nomb+" agregado!","Datos correctos", "success");
            actualizarStorage()
        }
    }
}

function buscarT(e) {
    e.preventDefault();
    let nombb = document.getElementById("nb").value

    if (!nombb) {
        swal("No ingreso un nombre!", "Revise el formulario!","error");
    } else {
        const trab = buscarTrabajador(nombb)
    if (trab) {

        let padre = document.getElementById("buscarTrabResultado")

        padre.innerHTML = `<p>Codigo: ${trab.codigo}</p>
        <p>Fecha Nacimiento: ${trab.fechnac}</p>
        <p>Sueldo: $${trab.sueldo}</p>
        <p>Es Jefe: ${trab.esJefe() ? 'SI' : 'NO'}</p>`

        swal("Trabajador "+nombb+" encontrado!", "","success");
    } else {
        let padre = document.getElementById("buscarTrabResultado")

        padre.innerHTML = ``

        swal("Trabajador "+nombb+" no se encuentra!", "","error");
    }
    }
    
}

function eliminarT(e) {
    e.preventDefault();
    let nombe = document.getElementById("ne").value
    if (!nombe) {
        swal("Ingrese un nombre!", "","error");
    } else {
        const trab = buscarTrabajador(nombe)
        var indice = Trabajadores.indexOf(trab);
        if (trab) {
            Trabajadores.splice(indice,1)
            swal("Trabajador eliminado!", "","success");
            actualizarStorage()
        } else {
            swal(nombe+" no se encuentra", "","error");
        }
    }
    
}

function listarTodos(e) {
    e.preventDefault();
    
    let padre = document.getElementById("lista")

    padre.innerHTML=``

    for (const data of listarT()) {
        let hijo0 = document.createElement("p")
        let hijo1 = document.createElement("p")
        let hijo2 = document.createElement("p")
        let hijo3 = document.createElement("p")
        let hijo4 = document.createElement("p")
        let hijo5 = document.createElement("p")
        let hijo6 = document.createElement("p")

        hijo0.textContent = "Nombre: "+data.nombre
        hijo1.textContent = "Codigo: "+data.codigo
        hijo2.textContent = "Fecha Nacimiento: "+data.fechnac
        hijo3.textContent = "Sueldo: $"+data.sueldo
        hijo4.textContent = "Cargo: "+data.cargo
        hijo5.textContent = data.esJefe() ? "Es jefe: SI":"Es jefe: NO"
        hijo6.textContent = "*****************************"

        padre.appendChild(hijo0)
        padre.appendChild(hijo1)
        padre.appendChild(hijo2)
        padre.appendChild(hijo3)
        padre.appendChild(hijo4)
        padre.appendChild(hijo5)
        padre.appendChild(hijo6)
    }
}

function listaJefes(e) {
    e.preventDefault();

    let padre = document.getElementById("lista")

    padre.innerHTML=``

    for (const data of filtrarJefes()) {

        var hijo0 = document.createElement("p")
        var hijo1 = document.createElement("p")
        var hijo2 = document.createElement("p")
        var hijo3 = document.createElement("p")
        var hijo4 = document.createElement("p")
        var hijo5 = document.createElement("p")
        let hijo6 = document.createElement("p")

        hijo0.textContent = "Nombre: "+data.nombre
        hijo1.textContent = "Codigo: "+data.codigo
        hijo2.textContent = "Fecha Nacimiento: "+data.fechnac
        hijo3.textContent = "Sueldo: "+data.sueldo
        hijo4.textContent = "Cargo: "+data.cargo
        hijo5.textContent = data.esJefe() ? "Es Jefe: SI":"Es Jefe: NO"
        hijo6.textContent = "*****************************"

        padre.appendChild(hijo0)
        padre.appendChild(hijo1)
        padre.appendChild(hijo2)
        padre.appendChild(hijo3)
        padre.appendChild(hijo4)
        padre.appendChild(hijo5)
        padre.appendChild(hijo6)
    }
}

function listarEmp(e) {
    e.preventDefault();

    let padre = document.getElementById("lista")

    padre.innerHTML=``

    for (const data of filtrarNoJefes()) {

        var hijo0 = document.createElement("p")
        var hijo1 = document.createElement("p")
        var hijo2 = document.createElement("p")
        var hijo3 = document.createElement("p")
        var hijo4 = document.createElement("p")
        var hijo5 = document.createElement("p")
        let hijo6 = document.createElement("p")

        hijo0.textContent = "Nombre: "+data.nombre
        hijo1.textContent = "Codigo: "+data.codigo
        hijo2.textContent = "Fecha Nacimiento: "+data.fechnac
        hijo3.textContent = "Sueldo: "+data.sueldo
        hijo4.textContent = "Cargo: "+data.cargo
        hijo5.textContent = data.esJefe() ? "Es Jefe: SI":"Es Jefe: NO"
        hijo6.textContent = "*****************************"

        padre.appendChild(hijo0)
        padre.appendChild(hijo1)
        padre.appendChild(hijo2)
        padre.appendChild(hijo3)
        padre.appendChild(hijo4)
        padre.appendChild(hijo5)
        padre.appendChild(hijo6)
    }
}

function limpiarBusc() {
    let padre = document.getElementById("buscarTrabResultado")
    padre.innerHTML = ``
}

function limpiarList() {
    let padre = document.getElementById("lista")

    padre.innerHTML=``
}
 
//funciones de busqueda
function buscarTrabajador(nombreT) {
    return Trabajadores.find(dato => dato.nombre === nombreT)
}

//funciones de filtrado
function filtrarNoJefes() {
    return Trabajadores.filter(dato => dato.cargo != "Jefe")
}

function filtrarJefes() {
    return Trabajadores.filter(dato => dato.cargo == "Jefe")
}

function listarT() {
    return Trabajadores
}

//STORAGE/JSON

function actualizarStorage() {
    localStorage.clear()
    const datosStorage = (clave,valor) => {localStorage.setItem(clave, valor)}
    for (const info of Trabajadores) {
        datosStorage(info.nombre,JSON.stringify(info))
    }
}

//FETCH API de chuck norris

fetch('https://api.chucknorris.io/jokes/random?category=dev')
.then(response => response.json())
.then(data => {
    const chuck = `${data.value}`;
    document.getElementById('apichuck').textContent = chuck;
})
.catch(error => {
    console.error('Error api:', error);
});
