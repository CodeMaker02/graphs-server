import { NodoEntity } from "../nodos/nodo.entity";
import { Nodo } from "./nodo.domian";

export class Camino {
    nodos: Set<Nodo> // Un camino esta compuesto por varios nodos
    costoTotal: number // representa el costo el camino
    beneficioTotal: number // representa el beneficio total del camino

    constructor() {
        this.nodos = new Set<Nodo>()
        this.costoTotal = 0
        this.beneficioTotal = 0
    }

    // Metodo para añadir un nodo
    public pushNodo(nodo: Nodo, costoDeTransito?: number) {
        if (costoDeTransito)
            this.costoTotal += costoDeTransito // se actualiza el costo total del camino con la nueva inserccion
        this.beneficioTotal += nodo.beneficio
        this.nodos.add(nodo)
    }

    // Metodo para determinar si un nodo se encuentra ya en el camino
    public isFoundInCamino(nodoFind: Nodo) {
       
        return this.nodos.has(nodoFind)
    }
}