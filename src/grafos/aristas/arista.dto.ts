import { GrafoDTO } from "../grafo.dto"
import { NodoDTO } from "../nodos/nodo.dto"
import { TipoArista } from "./arista.entity"


export class AristaDTO {
    id?: number // indenificador unico autoincrementable
    tipo: TipoArista
    ponderacion: number
    grafo: GrafoDTO // define al grafo al que pertenece la arista
    nodoOrigen: NodoDTO // Nodo que representa el origen de la arista
    nodoObjetivo: NodoDTO // Nodo que representa el nodo al cual apunta la arista
}