import { Component, OnInit } from '@angular/core';
import { Bus } from '../shared/Bus';
import { BusService } from '../shared/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Conductorxbus } from 'src/app/conductor/shared/conductorxbus';

@Component({
  selector: 'app-ver-bus',
  templateUrl: './ver-bus.component.html',
  styleUrls: ['./ver-bus.component.css']
})
export class VerBusComponent implements OnInit {

  bus: Bus = null;
  errorMessage = '';
  user = environment.user;
  rol = environment.rol;
  conductores: Conductorxbus[] = [];

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
    });
  }

  eliminarBus(id: number) {
    if (this.conductores.length === 0) {
      this.busService.remove(id).subscribe(
        resultado => console.log('Bus eliminado!')
      );
      this.router.navigate(['/paginaPrincipalBuses']);
    } else {
      this.errorMessage = 'No se puede eliminar al bus. El bus tiene conductores asignados';
    }
  }

  volverLista( ) {
    this.router.navigate(['/paginaPrincipalBuses']);
  }

}
