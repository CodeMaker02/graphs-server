import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AristasService } from './aristas.service';
import { AristaDTO } from './arista.dto';

@Controller('aristas')
export class AristasController {

    constructor(private aristasService: AristasService) { }

    @Get()
    public async getAllAristas() {
        return await this.aristasService.getAllAristas()
    }

    @Post("createArista")
    public async createArista(@Body() aristaDTO: AristaDTO) {
        await this.aristasService.createArista(aristaDTO)
    }

    @Delete("deleteAllAristas")
    public async deleteAllAristas() {
        await this.aristasService.deleteAllAristas()
    }

    @Delete("deleteArista/:id")
    public async deleteArista(@Param("id", ParseIntPipe) idArista: number) {
        await this.aristasService.deleteArista(idArista)
    }
}
