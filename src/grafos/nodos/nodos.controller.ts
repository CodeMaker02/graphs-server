import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { NodosService } from './nodos.service';
import { NodoDTO } from './nodo.dto';

@Controller('nodos')
export class NodosController {
    constructor(private nodosService: NodosService) { }

    @Get()
    public async getAllNodos() {
        return await this.nodosService.getAllNodos()
    }

    @Post("createNodo")
    public async createNodo(@Body() nodoDTO: NodoDTO) {
        await this.nodosService.createNodo(nodoDTO)
    }

    @Delete("deleteAllNodos")
    public async deleteAllNodos() {
        await this.nodosService.deleteAllNodos()
    }

    @Delete("deleteNodo/:id")
    public async deleteNodo(@Param("id", ParseIntPipe) idNodo: number) {
        await this.nodosService.deleteNodo(idNodo)

    }
}
