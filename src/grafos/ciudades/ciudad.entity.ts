import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { NodoEntity } from "../nodos/nodo.entity";

@Entity()
export class CiudadEntity {
    @PrimaryGeneratedColumn()
    id: number // identificador unico autoincrementable
    @Column({ unique: true })
    nombre: string
    @OneToOne(() => NodoEntity, { onDelete: "CASCADE" })
    nodoEntity: NodoEntity
}