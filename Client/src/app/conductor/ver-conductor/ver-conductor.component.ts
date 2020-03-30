import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../shared/conductor.service';
import { switchMap } from 'rxjs/operators';
import { Conductor } from '../shared/conductor';
import { environment } from '../../../environments/environment';
import { Conductorxbus } from '../shared/conductorxbus';

@Component({
  selector: 'app-ver-conductor',
  templateUrl: './ver-conductor.component.html',
  styleUrls: ['./ver-conductor.component.css']
})
export class VerConductorComponent implements OnInit {

  conductor: Conductor = null;
  mostrar = false;
  user = environment.user;
  rol = environment.rol;

  buses: Conductorxbus [] = [];

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
      console.log(result);
      this.buses = result;
    });


  }

  mostrarBuses( ) {
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
