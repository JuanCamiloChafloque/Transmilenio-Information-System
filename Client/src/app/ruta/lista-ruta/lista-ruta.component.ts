import { Component, OnInit } from '@angular/core';
import { Ruta } from '../shared/ruta';
import { RutaService } from '../shared/ruta.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ruta',
  templateUrl: './lista-ruta.component.html',
  styleUrls: ['./lista-ruta.component.css']
})
export class ListaRutaComponent implements OnInit {

  rutas: Ruta[] = [];
  errorMessage = '';
  user = environment.user;
  rol = environment.rol;

  constructor(
    private rutaService: RutaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRutas();
  }

  crearRuta() {
    if (this.rol === 'ADMIN') {
      this.router.navigate(['/crearRuta']);
    } else {
      this.errorMessage = 'Error 403. No posee los permisos para crear una ruta';
    }
  }

  getRutas() {
    this.rutaService.findAll().subscribe(
      results => this.rutas = results,
      error => this.errorMessage = error.text
    );
  }

}
