import { Component, OnInit } from '@angular/core';
import { Bus } from '../shared/Bus';
import { BusService } from '../shared/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-bus',
  templateUrl: './ver-bus.component.html',
  styleUrls: ['./ver-bus.component.css']
})
export class VerBusComponent implements OnInit {

  bus: Bus = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService
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
  }

  eliminarBus(id: number) {
    this.busService.remove(id).subscribe(
      resultado => console.log('Bus eliminado!')
    );

  }

  volverLista( ) {
    this.router.navigate(['/paginaPrincipalBuses']);
  }

}
