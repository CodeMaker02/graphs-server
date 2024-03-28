
import { Exclude } from "class-transformer"
import { CiudadEntity } from "../ciudades/ciudad.entity"
import { Arista } from "./arista.domain"

export class Nodo {
    id: number // indenificador unico autoincrementable
    posicionX: number
    posicionY: number
    beneficio: number
    ciudad: CiudadEntity // define la ciudad asociada al nodo
    @Exclude()
    aristasDeSalida: Array<Arista> // representa las aristas de salida del nodo
    @Exclude()
    aristasDeEntrada: Array<Arista> // representa las aristas de entrada del nodo






    constructor(id: number, posicionX?: number, posicionY?: number, beneficio?: number, ciudad?: CiudadEntity, aristas?: Array<Arista>) {
        this.id = id
        this.posicionX = posicionX
        this.posicionY = posicionY
        this.beneficio = beneficio
        this.ciudad = ciudad
        if (aristas)
            this.asignarAristas(aristas)
    }

    // Operaciones
    private asignarAristas(aristas: Array<Arista>) {
        this.aristasDeSalida = new Array<Arista>()
        this.aristasDeEntrada = new Array<Arista>()
        // se asignan las aristas de salida
        aristas.forEach((arista) => {
            if (arista.nodoOrigen.id == this.id) { // si el nodo origen de la arista es el mismo nodo se trata de una arista de salida del mismo nodo
                this.aristasDeSalida.push(arista) // se añade la arista de salida como parte del nodo
                arista.nodoOrigen = this // se asigna la referencia para evitar duplicacion
            }
            else if (arista.nodoObjetivo.id == this.id) { // si el nodo objetivo de la arista es el mismo nodo se trata de una arista de entrada del mismo nodo
                this.aristasDeEntrada.push(arista) // se añade la arista de entrada como parte del nodo
                arista.nodoObjetivo = this // se asigna la referencia para evitar duplicacion
            }
        })



    }

    // Metodo para Determinar heuristica nodo objetivo
    public heuristica(nodoFinal: Nodo) {
        return Math.sqrt(Math.pow(nodoFinal.posicionX - this.posicionX, 2) + Math.pow(nodoFinal.posicionY - this.posicionY, 2))
    }

}