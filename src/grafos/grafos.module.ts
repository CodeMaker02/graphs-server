import { Module } from '@nestjs/common';
import { GrafosController } from './grafos.controller';
import { GrafosService } from './grafos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NodosController } from 'src/grafos/nodos/nodos.controller';
import { AristasController } from 'src/grafos/aristas/aristas.controller';
import { CiudadesController } from 'src/grafos/ciudades/ciudades.controller';
import { NodosService } from 'src/grafos/nodos/nodos.service';
import { AristasService } from 'src/grafos/aristas/aristas.service';
import { CiudadesService } from 'src/grafos/ciudades/ciudades.service';
import { GrafoEntity } from './grafo.entity';
import { NodoEntity } from './nodos/nodo.entity';
import { AristaEntity } from './aristas/arista.entity';
import { CiudadEntity } from './ciudades/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrafoEntity, NodoEntity, AristaEntity, CiudadEntity])],
  controllers: [GrafosController, NodosController, AristasController, CiudadesController],
  providers: [GrafosService, NodosService, AristasService, CiudadesService]
})
export class GrafosModule { }
