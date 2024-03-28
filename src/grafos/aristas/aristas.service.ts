import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AristaEntity } from './arista.entity';
import { Repository } from 'typeorm';
import { AristaDTO } from './arista.dto';

@Injectable()
export class AristasService {
    constructor(@InjectRepository(AristaEntity) private aristasRepository: Repository<AristaEntity>) { }

    public async getAllAristas() {
        return await this.aristasRepository.find()
    }

    public async createArista(aristaDTO: AristaDTO) {
        await this.aristasRepository.save(this.aristasRepository.create(aristaDTO)) // se añade la arista a la base de datos
    }


    public async deleteAllAristas() { // solo super admin
        await this.aristasRepository.delete({})
    }

    public async deleteArista(idArista: number) {
        await this.aristasRepository.delete({ id: idArista })
    }
}
