import { GrafoEntity } from "src/grafos/grafo.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NodoEntity } from "../nodos/nodo.entity";
import { NodoDTO } from "../nodos/nodo.dto";

export enum TipoArista {
    Dirigida = "Dirigida",
    NoDirigida = "No Dirigida"
}

@Entity()
export class AristaEntity {
    @PrimaryGeneratedColumn()
    id: number // indenificador unico autoincrementable
    @Column()
    tipo: TipoArista
    @Column()
    ponderacion: number
    @Column()
    grafoId: number // define el id del grafo al que pertenece la arista
    @ManyToOne(() => GrafoEntity, grafoEntity => grafoEntity.aristas, { onDelete: "CASCADE" })
    grafo: GrafoEntity // define al grafo al que pertenece la arista
    @Column()
    nodoOrigenId: number
    @ManyToOne(() => NodoEntity, nodoEntity => nodoEntity.aristasDeSalida, {onDelete: "CASCADE" })
    nodoOrigen: NodoEntity // Nodo que representa el origen de la arista
    @Column()
    nodoObjetivoId: number
    @ManyToOne(() => NodoEntity, nodoEntity => nodoEntity.aristasDeEntrada, {onDelete: "CASCADE" })
    nodoObjetivo: NodoEntity // Nodo que representa el nodo al cual apunta la arista

}