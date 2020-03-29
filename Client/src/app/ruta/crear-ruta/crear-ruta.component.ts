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
  messageAgregar = '';
  idRuta = '';
  name = '';
  llegoEstacion = false;
  estacionEncontrada: Estacion = null;
  estacionesAgregar: Estacion[] = [];
  estaciones: Estacion[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rutaService: RutaService
  ) { }

  ngOnInit(): void {
    this.rutaService.getAllEstaciones().subscribe(
      results => {
        this.estaciones = results;
        this.llegoEstacion = true;
        console.log(results);
      }
    );
  }

  create( ) {
    this.submitted = true;
    const ruta: Ruta = {
      name: this.name,
      estaciones: this.estacionesAgregar
    };
    console.log(ruta);
    this.rutaService.create(ruta).subscribe(
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

  addEstacion() {
    this.rutaService.getEstacionById(+this.idRuta).subscribe(
      results => {
        this.estacionEncontrada = results;
        console.log(results);
      }
    );
    if (this.estacionEncontrada != null) {
      this.estacionesAgregar.push(this.estacionEncontrada);
      this.messageAgregar = 'Se agregó la estación con id: ' + this.idRuta;
    }

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
