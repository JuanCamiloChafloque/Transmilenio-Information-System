import { Component, OnInit } from '@angular/core';
import { Bus } from '../shared/Bus';
import { BusService } from '../shared/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Busxruta } from '../shared/busxruta';
import { Conductor } from 'src/app/conductor/shared/conductor';
import { Ruta } from 'src/app/ruta/shared/ruta';

@Component({
  selector: 'app-ver-bus',
  templateUrl: './ver-bus.component.html',
  styleUrls: ['./ver-bus.component.css']
})
export class VerBusComponent implements OnInit {

  bus: Bus = null;
  errorMessage = '';
  llegaronRutas = false;
  mostrar = false;
  user = environment.user;
  rol = environment.rol;
  countConductores = 0;
  conductores: Conductor[];
  rutas: Ruta[];
  rutasxbus: Busxruta[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => this.busService.findById(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.bus = result;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.busService.getConductoresBus(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.conductores = result;
      this.countConductores = this.conductores.length;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.busService.getRutasBus(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.rutas = result;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.busService.getRutasXBus(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.rutasxbus = result;
      this.llegaronRutas = true;
      this.inicializar();
    });
  }

  inicializar() {

    for (let i = 0; i < this.rutas.length; i++) {
      this.rutas[i].diaAsignacion = this.rutasxbus[i].diaAsignacion;
      this.rutas[i].horaInicio = this.rutasxbus[i].horaInicio;
      this.rutas[i].horaFin = this.rutasxbus[i].horaFin;
    }

    console.log('Rutas: ' + this.rutas);
    this.mostrar = true;

  }

  eliminarBus(id: number) {
    if (this.conductores.length === 0) {
      this.busService.remove(id).subscribe(
        resultado => console.log('Bus eliminado!')
      );
      this.router.navigate(['/paginaPrincipalLogin']);
    } else {
      this.errorMessage = 'No se puede eliminar al bus. El bus tiene conductores asignados';
    }
  }

  volverLista( ) {
    this.router.navigate(['/paginaPrincipalBuses']);
  }

}
