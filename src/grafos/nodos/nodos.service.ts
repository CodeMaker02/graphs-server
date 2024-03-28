import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NodoEntity } from './nodo.entity';
import { NodoDTO } from './nodo.dto';

@Injectable()
export class NodosService {
    constructor(@InjectRepository(NodoEntity) private nodosRepository: Repository<NodoEntity>) { }

    public async getAllNodos() {
        return await this.nodosRepository.find()
    }

    public async createNodo(nodoDTO: NodoDTO) {
        await this.nodosRepository.save(this.nodosRepository.create(nodoDTO)) // se añade el nodo a la base de datos
    }

    public async deleteAllNodos() { // solo super admin
        await this.nodosRepository.delete({})
    }

    public async deleteNodo(idNodo: number) {
        await this.nodosRepository.delete({ id: idNodo })
    }

}
