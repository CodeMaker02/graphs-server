import { AristaDTO } from "../aristas/arista.dto"
import { CiudadDTO } from "../ciudades/ciudad.dto"
import { GrafoDTO } from "../grafo.dto"


export class NodoDTO {
    id: number // indenificador unico autoincrementable
    posicionX: number
    posicionY: number
    beneficio: number
    grafo: GrafoDTO // define el grafo al que pertenece dicho nodo
    ciudad: CiudadDTO // define la ciudad asociada al nodo
    aristasDeSalida: Array<AristaDTO> // representa las aristas de salida del nodo
    aristasDeEntrada: Array<AristaDTO> // representa las aristas de entrada del nodo
}