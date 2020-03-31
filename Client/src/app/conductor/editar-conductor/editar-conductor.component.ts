import { Component, OnInit } from '@angular/core';
import { Conductor } from '../shared/conductor';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../shared/conductor.service';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Bus } from 'src/app/bus/shared/Bus';
import { BusService } from '../../bus/shared/bus.service';

@Component({
  selector: 'app-editar-conductor',
  templateUrl: './editar-conductor.component.html',
  styleUrls: ['./editar-conductor.component.css']
})
export class EditarConductorComponent implements OnInit {

  conductor: Conductor = null;
  buses: Bus[];
  llegoBuses = false;
  diaAsignar = '';
  busId = '';
  user = environment.user;
  rol = environment.rol;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conductorService: ConductorService,
    private busService: BusService
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

    if (this.diaAsignar !== '') {
      this.conductorService.agregarBus(this.conductor.id, +this.busId, this.diaAsignar).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.error(error);
      }
      );
    }

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

  cancel( ) {
    this.router.navigate(['/paginaPrincipalConductores']);
  }

}
