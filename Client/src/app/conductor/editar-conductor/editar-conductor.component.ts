import { Component, OnInit } from '@angular/core';
import { Conductor } from '../shared/conductor';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../shared/conductor.service';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Bus } from 'src/app/bus/shared/Bus';
import { BusService } from '../../bus/shared/bus.service';
import { Conductorxbus } from '../shared/conductorxbus';

@Component({
  selector: 'app-editar-conductor',
  templateUrl: './editar-conductor.component.html',
  styleUrls: ['./editar-conductor.component.css']
})
export class EditarConductorComponent implements OnInit {

  conductor: Conductor = null;
  buses: Bus[];
  condBuses: Conductorxbus[];
  llegoBuses = false;
  errorMessage = '';
  diaAsignar = '';
  busId = '';
  horaInicio = '';
  horaFin = '';
  user = environment.user;
  rol = environment.rol;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conductorService: ConductorService,
    private busService: BusService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => this.conductorService.findById(+params.get('id')))
      )
      .subscribe(result => {
        this.conductor = result;
      });

    this.route.paramMap
      .pipe(
        switchMap(params => this.busService.findAll())
      )
      .subscribe(result => {
        this.buses = result;
        this.llegoBuses = true;
      });
  }

  edit() {

    if (this.diaAsignar !== '' && this.horaInicio !== '' && this.horaFin !== '') {
      this.buses = environment.buses;
      const esValido = this.validarHorario();
      if (esValido === true) {
        this.errorMessage = '';
        this.conductorService.agregarBus(this.conductor.id, +this.busId, this.diaAsignar, this.horaInicio, this.horaFin).subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.error(error);
          }
          );
      } else {
        this.errorMessage = 'No se puede asignar el bus. Hay conflictos de horario.';
      }
    }

    if (this.errorMessage === '') {
      this.conductorService.update(this.conductor).subscribe(
        result => {
          console.log(result);
          this.router.navigate([`/informacionConductor/${this.conductor.id}`]);
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  cancel( ) {
    this.router.navigate(['/paginaPrincipalConductores']);
  }

  validarHorario(): boolean {
    let esValido = true;
    for (const actual of this.buses) {
      if (actual.diaAsignacion === this.diaAsignar) {
        const ini = actual.horaInicio.split(':');
        const fin = actual.horaFin.split(':');
        const iniNuevo = this.horaInicio.split(':');
        const finNuevo = this.horaFin.split(':');
        if (+iniNuevo[0] > +ini[0] && +iniNuevo[0] < +fin[0]) {
          esValido = false;
        }
        if (+finNuevo[0] > +ini[0] && +iniNuevo[0] < +fin[0]) {
          esValido = false;
        }
      }

    }
    return esValido;
  }

}
