import { Bus } from 'src/app/bus/shared/Bus';
import { Conductor } from './conductor';

export class Conductorxbus {
  constructor(
    public idConductor: Conductor,
    public idBus: Bus,
    public diaAsignacion: string
  ) {}
}
