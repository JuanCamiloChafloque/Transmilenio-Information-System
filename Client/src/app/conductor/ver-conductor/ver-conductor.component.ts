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
  llegaronBuses = false;
  mostrar = false;
  user = environment.user;
  rol = environment.rol;
  buses: Bus [];
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
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.conductorService.getBusesConductor(+params.get('id')))
    )
    .subscribe(result => {
      this.buses = result;
      console.log(this.buses);
    });

    this.route.paramMap
    .pipe(
      switchMap(params => this.conductorService.getBusesxconductor(+params.get('id')))
    )
    .subscribe(result => {
      this.condBuses = result;
      this.llegaronBuses = true;
      console.log(this.buses);
      this.inicializar();
    });
  }

  inicializar() {

    for (let i = 0; i < this.buses.length; i++) {
      this.buses[i].diaAsignacion = this.condBuses[i].diaAsignacion;
    }

    console.log('Buses: ' + this.buses);
    this.mostrar = true;

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
