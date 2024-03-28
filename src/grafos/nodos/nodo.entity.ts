import { CiudadEntity } from "src/grafos/ciudades/ciudad.entity";
import { GrafoEntity } from "src/grafos/grafo.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AristaEntity } from "../aristas/arista.entity";


@Entity()
export class NodoEntity {
    @PrimaryGeneratedColumn()
    id: number // indenificador unico autoincrementable
    @Column()
    posicionX: number
    @Column()
    posicionY: number
    @Column()
    @Column()
    beneficio: number
    grafoId: number
    @ManyToOne(() => GrafoEntity, grafoEntity => grafoEntity.nodos, { onDelete: "CASCADE" })
    grafo: GrafoEntity // define el grafo al que pertenece dicho nodo
    @OneToOne(() => CiudadEntity, { eager: true, cascade: true })
    @JoinColumn()
    ciudad: CiudadEntity // define la ciudad asociada al nodo
    @OneToMany(() => AristaEntity, aristaEntity => aristaEntity.nodoOrigen)
    aristasDeSalida: Array<AristaEntity> // representa las aristas de salida del nodo
    @OneToMany(() => AristaEntity, aristaEntity => aristaEntity.nodoObjetivo)
    aristasDeEntrada: Array<AristaEntity>  // representa las aristas de entrada del nodo
}