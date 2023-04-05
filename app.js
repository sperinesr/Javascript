//PRE ENTREGA 2

//Estructura HTML para interactuar (no incluir segun la profesora)
//Variables JS
//Funciones
//Objetos
//Arrays
//Metodos de busqueda y filtrado (filter etc)

//clase / objetos
class Trabajador {
    constructor(codigo,nombre,fechnac,sueldo,cargo){
        this.codigo = codigo;
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

//creando Trabajadores normalmente (solo estan de ejemplo)
const Trabajador1 = new Trabajador("1","Luis","10-10-1960","3000","Jefe")
const Trabajador2 = new Trabajador("2","Alex","01-01-1980","2000","Administrativo")
const Trabajador3 = new Trabajador("3","Ian","19-12-2001","1000","Tecnico")

//arrays (lo que utilizaremos)
const Trabajadores = []

Trabajadores.push(new Trabajador("1","Luis","10-10-1960","3000","Jefe"))
Trabajadores.push(new Trabajador("2","Alex","01-01-1980","2000","Administrativo"))
Trabajadores.push(new Trabajador("3","Ian","19-12-2001","1000","Tecnico"))


//variables HTML
let code = document.getElementById("c")
let nomb = document.getElementById("n")
let fn = document.getElementById("fn")
let suel = document.getElementById("s")
let car = document.getElementById("ca")

let opcion = 1

while (opcion == 1) {
    //variables
    opcion = prompt("Buscar trabajador \n 1.-continuar \n 0.- enter o cancelar para salir")

    if (opcion == 1) {

        let nom = prompt("Ingrese nombre a buscar")
    
        if (nom === null || nom === "") {
            alert("Debe ingresar algun nombre")
        }

        const tra = buscarTrabajador(nom)

        if (tra) {
            //La idea es que muestre el trabajador en las etiquetas p de HTML si pasa por aqui
            //pero se muestra solo al cerrar el ciclo
            code.innerText= "Codigo: "+ tra.codigo
            nomb.innerText= "Nombre: "+ tra.nombre
            fn.innerText= "Fecha de nacimiento: "+ tra.fechnac
            suel.innerText= "Sueldo: "+ tra.sueldo
            car.innerText= "Cargo: "+ tra.cargo
    
            if (tra.esJefe()) {
                alert("El Trabajador es Jefe y gana $"+tra.sueldo)
            }else{
                alert("El Trabajador no es Jefe")
            }
            alert("Su codigo es: "+ tra.codigo)
        }else{
            alert("No existe")
        }

        //manejo de arrays
        alert("Agregaremos un nuevo trabajador")

        let opcion2 = 1

        while (opcion2 == 1) {

            opcion2 = prompt("Agregar trabajador \n 1.-Si \n 0.- enter o cancelar para salir")

            if (opcion2 == 1) {

                let codt = Number(prompt("Ingrese codigo"))
                let nomt = prompt("Ingrese nombre")
                let fnt = prompt("Ingrese fecha de nacimiento")
                let sut = Number(prompt("Ingrese sueldo"))
                let cat = prompt("Ingrese cargo")
        
                Trabajadores.push(new Trabajador(codt,nomt,fnt,sut,cat))

                alert("trabajador: "+ buscarTrabajador(nomt).nombre+" agregado")
            }else{
                break
            }
        }

        alert("Eliminaremos un trabajador")

        let opcion3 = 1

        while (opcion3 == 1) {

            opcion3 = prompt("Eliminar trabajador \n 1.-Si \n 0.- enter o cancelar para salir")

            if (opcion3 == 1) {

                let et = prompt("Ingrese nombre de trabajador a eliminar")
                let buscado = buscarTrabajador(et)

                if (buscado) {

                    Trabajadores.splice(buscado,1)
                    alert("Eliminado")
                    console.log(Trabajadores)

                }else{
                    alert("No existe")
                }
            } else {
                break
            }  
        }
    } else {
        break
    }
}
    

//funciones
//busqueda
function buscarTrabajador(nombreT) {
    return Trabajadores.find(dato => dato.nombre === nombreT)
}

//console.log(buscarTrabajador("Luis"))

//filtrado los que no son jefes
function filtrarNoJefes() {
    return Trabajadores.filter(dato => dato.cargo != "Jefe")
}

console.log(filtrarNoJefes())