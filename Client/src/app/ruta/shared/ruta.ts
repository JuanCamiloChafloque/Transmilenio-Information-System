import { Estacion } from './estacion';

export class Ruta {
  constructor(
    public id: number,
    public name: string,
    public diaAsignacion?: string,
    public horaInicio?: string,
    public horaFin?: string
  ) {}
}
