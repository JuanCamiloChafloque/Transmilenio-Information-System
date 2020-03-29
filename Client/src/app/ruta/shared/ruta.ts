import { Estacion } from './estacion';

export class Ruta {
  constructor(
    public name: string,
    public estaciones: Estacion[],
    public id?: number,
  ) {}
}
