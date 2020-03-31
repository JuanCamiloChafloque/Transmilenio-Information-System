import { Component, OnInit } from '@angular/core';
import { Bus } from '../shared/Bus';
import { BusService } from '../shared/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Ruta } from 'src/app/ruta/shared/ruta';
import { RutaService } from 'src/app/ruta/shared/ruta.service';

@Component({
  selector: 'app-editar-bus',
  templateUrl: './editar-bus.component.html',
  styleUrls: ['./editar-bus.component.css']
})
export class EditarBusComponent implements OnInit {

  bus: Bus = null;
  user = environment.user;
  rol = environment.rol;
  llegoRutas = false;
  rutaId = '';
  diaAsignar = '';
  horaInicio = '';
  horaFin = '';
  rutas: Ruta[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService,
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => this.busService.findById(+params.get('id')))
    )
    .subscribe(result => {
      this.bus = result;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.rutaService.findAll())
    )
    .subscribe(result => {
      this.rutas = result;
      this.llegoRutas = true;
    });
  }

  edit() {
    if (this.diaAsignar !== '' && this.horaInicio !== '' && this.horaFin !== '') {
      this.busService.agregarRuta(this.bus.id, +this.rutaId, this.diaAsignar, this.horaInicio, this.horaFin).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.error(error);
      }
      );
    }
    this.busService.update(this.bus).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/informacionBus/${this.bus.id}`]);
      },
      error => {
        console.error(error);
      }
    );

  }

  cancel( ) {
    this.router.navigate(['/paginaPrincipalBuses']);
  }

}
