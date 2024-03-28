import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseInterceptors } from '@nestjs/common';
import { GrafosService } from './grafos.service';
import { GrafoDTO } from './grafo.dto';
import { NodoDTO } from './nodos/nodo.dto';
import { ParNodos } from './par-nodos.dto';

@Controller('grafos')
export class GrafosController {
    constructor(private grafosService: GrafosService) { }

    @Get()
    public async getAllGrafos() {
        return await this.grafosService.getAllGrafos()
    }

    @Get("getGrafo/:id")
    public async getGrafo(@Param("id", ParseIntPipe) idGrafo: number) {
        return await this.grafosService.getGrafo(idGrafo)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get("DFS/:idGrafo")
    public async getCaminoDFS(@Body() parNodos: ParNodos, @Param("idGrafo", ParseIntPipe) idGrafo: number) {
        return await this.grafosService.getCaminoDFS(parNodos.nodoInicial, parNodos.nodoFinal, idGrafo)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get("CaminoPrimeroMejor/:idGrafo")
    public async getCaminoPrimeroMejor(@Body() parNodos: ParNodos, @Param("idGrafo", ParseIntPipe) idGrafo: number) {
        return await this.grafosService.getCaminoPrimeroMejor(parNodos.nodoInicial, parNodos.nodoFinal, idGrafo)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get("getCaminoMaximoBeneficioEcaladorColinas/:idGrafo")
    public async getCaminoMaximoBeneficioEcaladorColinas(@Body() nodoInicial: NodoDTO, @Param("idGrafo", ParseIntPipe) idGrafo: number, @Query("costoMaximo") costoMaximo: number) {
        return await this.grafosService.getCaminoMaximoBeneficioEcaladorColinas(nodoInicial, costoMaximo, idGrafo)
    }
    Ñ
    @Post("createGrafo")
    public async createGrafo(@Body() grafoDTO: GrafoDTO) {
        await this.grafosService.createGrafo(grafoDTO)
    }

    @Delete("deleteAllGrafos")
    public async deleteAll() {
        await this.grafosService.deleteAllGrafos()
    }

    @Delete("deleteGrafo/:id")
    public async deleteGrafo(@Param("id", ParseIntPipe) idGrafo: number) {
        await this.grafosService.deleteGrafo(idGrafo)
    }

}
