import { AristaDTO } from "./aristas/arista.dto"
import { NodoDTO } from "./nodos/nodo.dto"

export class GrafoDTO {
    id: number // indenificador unico autoincrementable
    nombre: string // define el nombre del grafo
    nodos: Array<NodoDTO> // define los nodos del grafo
    aristas: Array<AristaDTO> // define las aristas del grafo
}