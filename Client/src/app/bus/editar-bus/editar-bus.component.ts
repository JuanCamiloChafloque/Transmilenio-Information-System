import { Component, OnInit } from '@angular/core';
import { Bus } from '../shared/Bus';
import { BusService } from '../shared/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-bus',
  templateUrl: './editar-bus.component.html',
  styleUrls: ['./editar-bus.component.css']
})
export class EditarBusComponent implements OnInit {

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
      this.bus = result;
    });
  }

  edit() {
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
