import { Bus } from './Bus';
import { Ruta } from 'src/app/ruta/shared/ruta';

export class Busxruta {
  constructor(
    public idBus: Bus,
    public idRuta: Ruta,
    public diaAsignacion: string,
    public horaInicio: string,
    public horaFin: string
  ) {}
}
