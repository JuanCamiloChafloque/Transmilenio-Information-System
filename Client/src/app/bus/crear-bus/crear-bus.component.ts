import { Component, OnInit, ViewChild } from '@angular/core';
import { Bus } from '../shared/Bus';
import { BusService } from '../shared/bus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-crear-bus',
  templateUrl: './crear-bus.component.html',
  styleUrls: ['./crear-bus.component.css']
})
export class CrearBusComponent implements OnInit {

  @ViewChild('createForm', {static: true})
  createForm;

  submitted = false;
  message = '';
  user = environment.user;
  rol = environment.rol;
  bus: Bus = new Bus(
    undefined,
    undefined,
    undefined
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService
  ) { }

  ngOnInit(): void {
  }

  create( ) {
    this.submitted = true;
    console.log(this.bus);
    this.busService.create(this.bus).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/paginaPrincipalBuses']);
      },
      error => {
        console.log(error);
        this.submitted = false;
      }
    );
  }

  cancel( ) {
    this.router.navigate(['/paginaPrincipalBuses']);
  }

  get canSubmit() {
    if (this.bus.modelo !== undefined &&
       this.bus.placa !== undefined &&
       this.submitted === false) {
        this.message = '';
        return true;
    } else {
      this.message = 'Todos los campos son obligatorios!';
      return false;
    }

  }

}
