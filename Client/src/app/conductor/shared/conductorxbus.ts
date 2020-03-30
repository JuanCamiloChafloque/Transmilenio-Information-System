import { Conductor } from './conductor';
import { Bus } from 'src/app/bus/shared/Bus';

export class Conductorxbus {
  constructor(
    public idConductor: Conductor,
    public idBus: Bus,
    public diaAsignacion: string
  ) {}
}
