export class Bus {
  constructor(
    public id: number,
    public modelo: string,
    public placa: string,
    public diaAsignacion?: string,
    public horaInicio?: string,
    public horaFin?: string
  ) {}
}
