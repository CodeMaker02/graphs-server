import { AristaDTO } from "src/grafos/aristas/arista.dto";
import { AristaEntity } from "src/grafos/aristas/arista.entity";
import { NodoEntity } from "src/grafos/nodos/nodo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GrafoEntity {
    @PrimaryGeneratedColumn()
    id: number // indenificador unico autoincrementable
    @Column({ unique: true })
    nombre: string // define el nombre del grafo
    @OneToMany(() => NodoEntity, nodoEntity => nodoEntity.grafo, {cascade: true})
    nodos: Array<NodoEntity> // define los nodos del grafo
    @OneToMany(() => AristaEntity, aristaEntity => aristaEntity.grafo, {cascade: true})
    aristas: Array<AristaEntity> // define las aristas del grafo
}