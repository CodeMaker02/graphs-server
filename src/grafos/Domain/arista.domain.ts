import { Exclude } from "@nestjs/class-transformer"
import { TipoArista } from "../aristas/arista.entity"
import { NodoEntity } from "../nodos/nodo.entity"
import { Nodo } from "./nodo.domian"

export class Arista {
    id: number // indenificador unico autoincrementable
    tipo: TipoArista
    ponderacion: number
    @Exclude()
    nodoOrigen: Nodo // Nodo que representa el origen de la arista
    @Exclude()
    nodoObjetivo: Nodo // Nodo que representa el nodo al cual apunta la arista

    constructor(id: number, tipo: TipoArista, ponderacion: number, idNodoOrigen: number, idNodoObjetivo: number) {
        this.id = id
        this.tipo = tipo
        this.ponderacion = ponderacion
        this.nodoOrigen = new Nodo(idNodoOrigen)
        this.nodoObjetivo = new Nodo(idNodoObjetivo)
    }
    // Operaciones
    // Metodo para determinar la heuristica del nodo objetivo
    public heuristicaNodoObjetivo(nodoFinal: Nodo) {
        return this.nodoObjetivo.heuristica(nodoFinal)
    }

    public beneficioNodoObjetivo() {
        return this.nodoObjetivo.beneficio
    }
}