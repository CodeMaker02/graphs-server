import { PriorityQueue } from "@datastructures-js/priority-queue"
import { AristaEntity } from "../aristas/arista.entity"
import { NodoDTO } from "../nodos/nodo.dto"
import { NodoEntity } from "../nodos/nodo.entity"
import { Camino } from "./camino.domain"
import { Nodo } from "./nodo.domian"
import { Arista } from "./arista.domain"

// Clase para realizar las operaciones de las busquedas y demas operaciones con pocesamiento complicado
export class GrafoDomain {
    nodos: Array<Nodo> // define los nodos del grafo
    aristas: Array<Arista> // define las aristas del grafo

    constructor(nodos: Array<NodoEntity>, aristas: Array<AristaEntity>) {
        this.construirAristas(aristas) // se construyen primero las aristas
        this.construirNodos(nodos) // se construyen despues lo nodos
    }

    private construirNodos(nodos: Array<NodoEntity>) {
        this.nodos = new Array<Nodo>() // se inicializa el array de nodos
        nodos.forEach((nodo) => {
            this.nodos.push(new Nodo(nodo.id, nodo.posicionX, nodo.posicionY, nodo.beneficio, nodo.ciudad, this.aristas))
        })
    }

    private construirAristas(aristas: Array<AristaEntity>) {
        this.aristas = new Array<Arista>() // se inicializa el array de aristas
        aristas.forEach((arista) => {
            this.aristas.push(new Arista(arista.id, arista.tipo, arista.ponderacion, arista.nodoOrigenId, arista.nodoObjetivoId))
        })
    }


    //Operaciones
    // Metodo para buscar un nodo en especifico del grafo
    public getNodo(idNodo: number) {
        return this.nodos.find((nodo) => nodo.id == idNodo)
    }

    // Metodos para obtener un camino utilizando la busqueda por recorrido DFS
    public getCaminoDFS(nodoInicioDTO: NodoDTO, nodoFinalDTO: NodoDTO): Camino {
        const camino: Camino = new Camino()
        const nodoInicio: Nodo = this.getNodo(nodoInicioDTO.id) // se obtiene la entidad del nodo inicio
        const nodoFinal: Nodo = this.getNodo(nodoFinalDTO.id) // se obtiene la entidad del nodo final

        if (nodoInicio && nodoFinal) // si fue encontrado el nodo inicio
            this.getCaminoDFSRecursivo(nodoInicio, nodoFinal, new Set<Nodo>(), camino) // se llama al metodo auxiliar para obtener el camino

        return camino
    }

    // Metodo auxiliar para relizar la busqueda DFS
    private getCaminoDFSRecursivo(nodoInicio: Nodo, nodoFinal: Nodo, nodosVisitados: Set<Nodo>, camino: Camino): boolean {

        let isFind: boolean = false // variable que define si fue encontrada o no la meta
        if (nodoInicio.id == nodoFinal.id) { // si fue encontrada la meta
            camino.nodos.add(nodoInicio) // se guarda al nodo como parte del camino
            isFind = true // se indica que fue encontrada la meta

        }
        else {

            // Recorrido sobre las aristas del nodo
            const aristasSalidas: Array<Arista> = nodoInicio.aristasDeSalida // se obtienen las aristas de salida del nodo
            for (let index = 0; index < aristasSalidas.length && !isFind; index++) {
                const arista: Arista = aristasSalidas[index] // se obtiene a la arista siguiente en el recorrido
                if (!nodosVisitados.has(arista.nodoObjetivo)) { // si el nodo no ha sido visitdado

                    nodosVisitados.add(arista.nodoObjetivo) // se añade a al set de visitados
                    isFind = this.getCaminoDFSRecursivo(arista.nodoObjetivo, nodoFinal, nodosVisitados, camino) // se llama recursivo para seguir el proceso de busqueda
                    if (isFind) // si fue encontrada la meta se inicia el proceso de almacenamiento del camino
                        camino.nodos.add(nodoInicio) // se guarda al nodo como parte del camino
                }
            }
        }

        return isFind
    }

    // Fin de metodos para obtener todos los caminos de un punto Inicial a un punto Final

    // Metodos para obtener un camino por el metodo busqueda del mejor
    public getCaminoPrimeroMejor(nodoInicioDTO: NodoDTO, nodoFinalDTO: NodoDTO): Camino {
        const camino: Camino = new Camino()
        const nodoInicio: Nodo = this.getNodo(nodoInicioDTO.id) // se obtiene la entidad del nodo inicio
        const nodoFinal: Nodo = this.getNodo(nodoFinalDTO.id) // se obtiene la entidad del nodo final

        if (nodoInicio && nodoFinal)// si fue encontrado el nodo inicio
            this.getCaminoPrimeroMejorRecurs(nodoInicio, nodoFinal, new Set<Nodo>(), camino) // se llama al metodo auxiliar para obtener el camino

        return camino
    }

    // Metodo auxiliar para la obtencion del camino
    private getCaminoPrimeroMejorRecurs(nodoInicio: Nodo, nodoFinal: Nodo, nodosVisitados: Set<Nodo>, camino: Camino): boolean {
        let isFind: boolean = false // variable que define si fue encontrada o no la meta
        if (nodoInicio.id == nodoFinal.id) { // si fue encontrada la meta
            camino.nodos.add(nodoInicio) // se guarda al nodo como parte del camino
            isFind = true // se indica que fue encontrada la meta
        }
        else {
            const colaPrioridad: PriorityQueue<Arista> = new PriorityQueue<Arista>((arista1: Arista, arista2: Arista) => { // se crea una cola de prioridad con el criterio definido en la funcion
                let compare = 0
                const heuristica: number = (arista1.heuristicaNodoObjetivo(nodoFinal) - arista2.heuristicaNodoObjetivo(nodoFinal))
                if (heuristica > 0)
                    compare = 1
                else if (heuristica < 0)
                    compare = -1

                return compare
            }, nodoInicio.aristasDeSalida)


            // Procesamos la cola de prioridad
            while (!colaPrioridad.isEmpty() && !isFind) {
                const arista: Arista = colaPrioridad.pop() // se obtiene a la arista siguiente en la prioridad
                if (!nodosVisitados.has(arista.nodoObjetivo)) { // si el nodo no ha sido visitdado
                    nodosVisitados.add(arista.nodoObjetivo) // se añade a al set de visitados
                    isFind = this.getCaminoPrimeroMejorRecurs(arista.nodoObjetivo, nodoFinal, nodosVisitados, camino) // se llama recursivo para seguir el proceso de busqueda
                    if (isFind) // si fue encontrada la meta se inicia el proceso de almacenamiento del camino
                        camino.nodos.add(nodoInicio) // se guarda al nodo como parte del camino
                }
            }
        }

        return isFind
    }

    // Fin de Metodos para obtener el mejor camino por el metodo busqueda del mejor

    // Metodos para obtener el mejor camino por el metodo de busqueda Escalada de Colina
    public getCaminoEscaladorColinas(nodoInicioDTO: NodoDTO, costoMaximo: number): Camino {
        const camino: Camino = new Camino()
        const nodoInicio: Nodo = this.getNodo(nodoInicioDTO.id) // se obtiene la entidad del nodo inicio
        if (nodoInicio) { // si fue encontrado el nodo de inicio
            camino.pushNodo(nodoInicio) // el nodo inicial siempre va a formar parte del camino
            this.getCaminoEscaladorColinasRecurs(nodoInicio, costoMaximo, camino) // se llama al metodo auxiliar para obtener el camino que maximiza el beneficio
        }

        return camino
    }

    // Metodo auxiliar para la obtención del camino que maximiza el beneficio por el algoritmo de Esacalada de Colina
    private getCaminoEscaladorColinasRecurs(nodoInicio: Nodo, costoMaximo: number, camino: Camino) {
        let parada = false

        const colaPrioridad: PriorityQueue<Arista> = new PriorityQueue<Arista>((arista1: Arista, arista2: Arista) => { // Se crea una cola de pioridad para organizar los nodos a visitar según el mayor benficio 
            let compare = 0
            const beneficio: number = arista2.beneficioNodoObjetivo() - arista1.beneficioNodoObjetivo() // de forma tal que se ordene de mayor a menor
            if (beneficio > 0)
                compare = 1
            else if (beneficio < 0)
                compare = -1

            return compare

        }, nodoInicio.aristasDeSalida)

        // Se procesa la cola de prioridad
        while (!colaPrioridad.isEmpty() && !parada) {
            const arista: Arista = colaPrioridad.dequeue() // se obtiene la arista siguiente en la prioridad

            if (!camino.isFoundInCamino(arista.nodoObjetivo) && (arista.ponderacion + camino.costoTotal) <= costoMaximo) { // si el nodo objetivo no ha sido visitado y si el costo que implica viajar a ese camino (ponderacion de la arista (el costo de ir de un nodo a otro) + costoActual del cammino) es menor o igual que el costo máximo
                camino.pushNodo(arista.nodoObjetivo, arista.ponderacion) // se añade el nodo objetivo como uno más del camino y se actualiza el costo actual
                parada = true // se evita la busqueda a lo ancho una vez se decidió descender por un nivel
                this.getCaminoEscaladorColinasRecurs(arista.nodoObjetivo, costoMaximo, camino) // se llama recursivo para repetir el proceso en el siguiente estado
            }
        }
    }
    // Fin de Metodos para obtener el mejor camino por el metodo de busqueda Escalada de Colina

}