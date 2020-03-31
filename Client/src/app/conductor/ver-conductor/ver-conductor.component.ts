import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../shared/conductor.service';
import { switchMap } from 'rxjs/operators';
import { Conductor } from '../shared/conductor';
import { environment } from '../../../environments/environment';
import { Bus } from 'src/app/bus/shared/Bus';
import { Conductorxbus } from '../shared/conductorxbus';

@Component({
  selector: 'app-ver-conductor',
  templateUrl: './ver-conductor.component.html',
  styleUrls: ['./ver-conductor.component.css']
})
export class VerConductorComponent implements OnInit {

  conductor: Conductor = null;
  llegoConductores = false;
  llegoBuses = false;
  llegoCondBuses = false;
  mostrar = false;
  user = environment.user;
  rol = environment.rol;
  buses: Bus[];
  condBuses: Conductorxbus [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conductorService: ConductorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => this.conductorService.findById(+params.get('id')))
    )
    .subscribe(result => {
      console.log(result);
      this.conductor = result;
      this.llegoConductores = true;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.conductorService.getBusesConductor(+params.get('id')))
    )
    .subscribe(result => {
      this.buses = result;
      console.log(this.buses);
      this.llegoBuses = true;
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.conductorService.getBusesxconductor(+params.get('id')))
    )
    .subscribe(result => {
      this.condBuses = result;
      this.llegoCondBuses = true;
      console.log(this.buses);
      this.inicializar();
    });
  }

  inicializar() {

    for (let i = 0; i < this.buses.length; i++) {
      this.buses[i].diaAsignacion = this.condBuses[i].diaAsignacion;
      this.buses[i].horaInicio = this.condBuses[i].horaInicio;
      this.buses[i].horaFin = this.condBuses[i].horaFin;
    }

    console.log('Buses: ' + this.buses);
    this.mostrar = true;
    environment.buses = this.buses;

  }

  eliminarConductor(id: number) {
    this.conductorService.remove(id).subscribe(
      resultado => console.log('Conductor eliminado!')
    );

  }

  volverLista( ) {
    this.router.navigate(['/paginaPrincipalConductores']);
  }

}
