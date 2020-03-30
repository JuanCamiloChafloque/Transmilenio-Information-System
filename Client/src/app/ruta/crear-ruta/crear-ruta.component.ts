import { Component, OnInit, ViewChild } from '@angular/core';
import { Ruta } from '../shared/ruta';
import { ActivatedRoute, Router } from '@angular/router';
import { RutaService } from '../shared/ruta.service';
import { Estacion } from '../shared/estacion';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styleUrls: ['./crear-ruta.component.css']
})
export class CrearRutaComponent implements OnInit {

  @ViewChild('createForm', {static: true})
  createForm;

  user = environment.user;
  rol = environment.rol;
  submitted = false;
  message = '';
  ruta: Ruta = new Ruta(
    undefined,
    undefined,
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
  }

  create( ) {
    this.submitted = true;
    console.log(this.ruta);
    this.rutaService.create(this.ruta).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/paginaPrincipalRutas']);
      },
      error => {
        console.log(error);
        this.submitted = false;
      }
    );
  }

  cancel( ) {
    this.router.navigate(['/paginaPrincipalRutas']);
  }

  get canSubmit() {
    if (name !== undefined &&
       this.submitted === false) {
        this.message = '';
        return true;
    } else {
      this.message = 'Todos los campos son obligatorios!';
      return false;
    }

  }

}
