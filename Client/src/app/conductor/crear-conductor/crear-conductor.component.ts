import { Component, OnInit, ViewChild } from '@angular/core';
import { Conductor } from '../shared/conductor';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../shared/conductor.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-crear-conductor',
  templateUrl: './crear-conductor.component.html',
  styleUrls: ['./crear-conductor.component.css']
})
export class CrearConductorComponent implements OnInit {

  @ViewChild('createForm', {static: true})
  createForm;

  submitted = false;
  message = '';
  user = environment.user;
  rol = environment.rol;
  conductor: Conductor = new Conductor(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conductorService: ConductorService
  ) { }

  ngOnInit(): void {
  }

  create( ) {
    this.submitted = true;
    console.log(this.conductor);
    this.conductorService.create(this.conductor).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/paginaPrincipalConductores']);
      },
      error => {
        console.log(error);
        this.submitted = false;
      }
    );
  }

  cancel( ) {
    this.router.navigate(['/paginaPrincipalConductores']);
  }

  get canSubmit() {
    if (this.conductor.name !== undefined &&
       this.conductor.cedula !== undefined &&
       this.conductor.telefono !== undefined &&
       this.conductor.direccion !== undefined &&
       this.submitted === false) {
        this.message = '';
        return true;
    } else {
      this.message = 'Todos los campos son obligatorios!';
      return false;
    }

  }

}
