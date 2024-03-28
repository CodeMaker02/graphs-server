import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GrafoEntity } from './grafo.entity';
import { Repository } from 'typeorm';
import { GrafoDTO } from './grafo.dto';
import { Camino } from './Domain/camino.domain';
import { NodoDTO } from './nodos/nodo.dto';
import { GrafoDomain } from './Domain/grafo.domian';

@Injectable()
export class GrafosService {
    constructor(@InjectRepository(GrafoEntity) private grafoRepository: Repository<GrafoEntity>) { }

    public async getAllGrafos() {
        return await this.grafoRepository.find()
    }

    public async getGrafo(idGrafo: number) {
        return await this.grafoRepository.findOne({
            where: {
                id: idGrafo
            },
            relations: ['nodos', "aristas"] // Agrega aquí las relaciones anidadas
        })
    }

    public async createGrafo(grafoDTO: GrafoDTO) {
        await this.grafoRepository.save(this.grafoRepository.create(grafoDTO)) // se añade el grafo a la base de datos
    }

    public async deleteAllGrafos() { // Solo super admin
        await this.grafoRepository.delete({})
    }

    public async deleteGrafo(idGrafo: number) {
        await this.grafoRepository.delete({ id: idGrafo })
    }

    // Operaciones

    // Metodo para obtener un camino de un punto inicial a un punto Final por el algoritmo de busqueda no informada DFS
    public async getCaminoDFS(nodoInicioDTO: NodoDTO, nodoFinalDTO: NodoDTO, idGrafo: number): Promise<Camino> {
        const grafo: GrafoEntity = await this.getGrafo(idGrafo) // se obtiene el grafo en el cual se desea realizar la busqueda
        let camino: Camino = undefined // variable para almacenar los caminos posibles

        if (grafo) { // Si el grafo existe en la base de datos
            const grafoDomain = new GrafoDomain(grafo.nodos, grafo.aristas) // variable para realizar las operaciones
            camino = grafoDomain.getCaminoDFS(nodoInicioDTO, nodoFinalDTO) // se obtienen todos los caminos que existen del nodoInicio al nodoFinal
        }

        return camino
    }


    // Metodo para obtener un camino de un punto inicial a un punto Final por el algoritmo de busqueda informada Primero el Mejor
    public async getCaminoPrimeroMejor(nodoInicioDTO: NodoDTO, nodoFinalDTO: NodoDTO, idGrafo: number): Promise<Camino> {
        const grafo: GrafoEntity = await this.getGrafo(idGrafo) // se obtiene el grafo en el cual se desea realizar la busqueda
        let camino: Camino = undefined // variable para almacenar los caminos posibles

        if (grafo) { // Si el grafo existe en la base de datos
            const grafoDomain = new GrafoDomain(grafo.nodos, grafo.aristas) // variable para realizar las operaciones
            camino = grafoDomain.getCaminoPrimeroMejor(nodoInicioDTO, nodoFinalDTO) // se obtienen todos los caminos que existen del nodoInicio al nodoFinal
        }

        return camino
    }

    // Metodo para obtener el camino con el máximo beneficio desde un punto inicial por el algoritmo de busqueda no informada de Escalador de Colinas
    public async getCaminoMaximoBeneficioEcaladorColinas(nodoInicioDTO: NodoDTO, costoMaximo: number, idGrafo: number): Promise<Camino> {
        const grafo: GrafoEntity = await this.getGrafo(idGrafo) // se obtiene el grafo en el cual se desea realizar la busqueda
        let camino: Camino = undefined // variable para almacenar los caminos posibles

        if (grafo) { // Si el grafo existe en la base de datos
            const grafoDomain = new GrafoDomain(grafo.nodos, grafo.aristas) // variable para realizar las operaciones
            camino = grafoDomain.getCaminoEscaladorColinas(nodoInicioDTO, costoMaximo) // se obtienen el camino con el beneficio máximo partiendo de un punto inicial
        }

        return camino
    }

    // fin de Operaciones

}
