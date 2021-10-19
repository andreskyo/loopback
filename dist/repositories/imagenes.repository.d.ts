import { DefaultCrudRepository } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Imagenes, ImagenesRelations } from '../models';
export declare class ImagenesRepository extends DefaultCrudRepository<Imagenes, typeof Imagenes.prototype.id, ImagenesRelations> {
    constructor(dataSource: EcommmerceDataSource);
}
