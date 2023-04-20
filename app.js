//PRE ENTREGA 3

//pre entrega 2
//Storage y JSON
//Modificacion del DOM 

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

let ag= document.getElementById("agregar")
let bu= document.getElementById("buscar")
let el= document.getElementById("eliminar")

let lt= document.getElementById("listT")
let lj= document.getElementById("listJ")
let le= document.getElementById("listE")

//eventos

ag.addEventListener("click", agregarT)
bu.addEventListener("click", buscarT)
el.addEventListener("click", eliminarT)
lt.addEventListener("click", listarTodos)
lj.addEventListener("click", listarJefes)
le.addEventListener("click", listarEmp)


function agregarT(e) {
    e.preventDefault();
    let nomb = document.getElementById("n").value
    let fn = Date(document.getElementById("fn").value)
    let suel = document.getElementById("s").value
    let car = document.getElementById("ca").value
    Trabajadores.push(new Trabajador(nomb,fn,suel,car))
    alert("Trabajador: "+nomb+" agregado")
    actualizarStorage()
}

function buscarT(e) {
    e.preventDefault();
    let nombb = document.getElementById("nb").value
    const trab = buscarTrabajador(nombb)
    if (trab) {
        var padre = document.getElementById("buscarTrab")
        var hijo1 = document.createElement("p")
        var hijo2 = document.createElement("p")
        var hijo3 = document.createElement("p")
        var hijo4 = document.createElement("p")

        hijo1.textContent = "Codigo: "+trab.codigo
        hijo2.textContent = "Fecha Nacimiento: "+trab.fechnac
        hijo3.textContent = "Sueldo: "+trab.sueldo
        hijo4.textContent = "Es Jefe: "+trab.esJefe()

        padre.appendChild(hijo1)
        padre.appendChild(hijo2)
        padre.appendChild(hijo3)
        padre.appendChild(hijo4)

        alert(nombb+" Encontrado")
    } else {
        alert("No se encuentra "+nombb)
    }
}

function eliminarT(e) {
    e.preventDefault();
    let nombe = document.getElementById("ne").value
    const trab = buscarTrabajador(nombe)
    var indice = Trabajadores.indexOf(trab);
    if (trab) {
        Trabajadores.splice(indice,1)
        alert("Eliminado")
        actualizarStorage()
    } else {
        alert("No se encuentra "+ nombe)
    }
}

 function listarTodos(e) {
     e.preventDefault();

     for (const data of listarT()) {

        var padre = document.getElementById("listas")
        var hijo0 = document.createElement("p")
        var hijo1 = document.createElement("p")
        var hijo2 = document.createElement("p")
        var hijo3 = document.createElement("p")
        var hijo4 = document.createElement("p")
        var hijo5 = document.createElement("p")

        hijo0.textContent = "Nombre: "+data.nombre
        hijo1.textContent = "Codigo: "+data.codigo
        hijo2.textContent = "Fecha Nacimiento: "+data.fechnac
        hijo3.textContent = "Sueldo: "+data.sueldo
        hijo4.textContent = "Es Jefe: "+data.cargo
        hijo5.textContent = "Es Jefe: "+data.esJefe()

        padre.appendChild(hijo0)
        padre.appendChild(hijo1)
        padre.appendChild(hijo2)
        padre.appendChild(hijo3)
        padre.appendChild(hijo4)
        padre.appendChild(hijo5)
     }
 }

 function listarJefes(e) {
     e.preventDefault();

     for (const data of filtrarJefes()) {

        var padre = document.getElementById("listas")
        var hijo0 = document.createElement("p")
        var hijo1 = document.createElement("p")
        var hijo2 = document.createElement("p")
        var hijo3 = document.createElement("p")
        var hijo4 = document.createElement("p")
        var hijo5 = document.createElement("p")

        hijo0.textContent = "Nombre: "+data.nombre
        hijo1.textContent = "Codigo: "+data.codigo
        hijo2.textContent = "Fecha Nacimiento: "+data.fechnac
        hijo3.textContent = "Sueldo: "+data.sueldo
        hijo4.textContent = "Es Jefe: "+data.cargo
        hijo5.textContent = "Es Jefe: "+data.esJefe()

        padre.appendChild(hijo0)
        padre.appendChild(hijo1)
        padre.appendChild(hijo2)
        padre.appendChild(hijo3)
        padre.appendChild(hijo4)
        padre.appendChild(hijo5)
     }
 }

 function listarEmp(e) {
     e.preventDefault();

     for (const data of filtrarNoJefes()) {

        var padre = document.getElementById("listas")
        var hijo0 = document.createElement("p")
        var hijo1 = document.createElement("p")
        var hijo2 = document.createElement("p")
        var hijo3 = document.createElement("p")
        var hijo4 = document.createElement("p")
        var hijo5 = document.createElement("p")

        hijo0.textContent = "Nombre: "+data.nombre
        hijo1.textContent = "Codigo: "+data.codigo
        hijo2.textContent = "Fecha Nacimiento: "+data.fechnac
        hijo3.textContent = "Sueldo: "+data.sueldo
        hijo4.textContent = "Es Jefe: "+data.cargo
        hijo5.textContent = "Es Jefe: "+data.esJefe()

        padre.appendChild(hijo0)
        padre.appendChild(hijo1)
        padre.appendChild(hijo2)
        padre.appendChild(hijo3)
        padre.appendChild(hijo4)
        padre.appendChild(hijo5)
     }
 }
 
//funciones
//busqueda
function buscarTrabajador(nombreT) {
    return Trabajadores.find(dato => dato.nombre === nombreT)
}

//filtrado los que no son jefes
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
//const storageT = localStorage.setItem("trabajadores",JSON.stringify(Trabajadores))

function actualizarStorage() {
    localStorage.clear()
    const datosStorage = (clave,valor) => {localStorage.setItem(clave, valor)}
    for (const info of Trabajadores) {
        datosStorage(info.nombre,JSON.stringify(info))
    }
}


//console.log(localStorage.getItem(1))

//console.log(listarT())