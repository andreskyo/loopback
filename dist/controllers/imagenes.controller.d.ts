import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Imagenes } from '../models';
import { ImagenesRepository } from '../repositories';
export declare class ImagenesController {
    imagenesRepository: ImagenesRepository;
    constructor(imagenesRepository: ImagenesRepository);
    create(imagenes: Omit<Imagenes, 'id'>): Promise<Imagenes>;
    count(where?: Where<Imagenes>): Promise<Count>;
    find(filter?: Filter<Imagenes>): Promise<Imagenes[]>;
    updateAll(imagenes: Imagenes, where?: Where<Imagenes>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Imagenes>): Promise<Imagenes>;
    updateById(id: number, imagenes: Imagenes): Promise<void>;
    replaceById(id: number, imagenes: Imagenes): Promise<void>;
    deleteById(id: number): Promise<void>;
}
